/**
 * library.medcore.icu — sirve PDFs desde R2.
 *
 * - Solo GET/HEAD de un objeto exacto por key; nunca lista carpetas.
 * - /privado/... (libros y artículos de terceros) exige además un JWT válido de
 *   Cloudflare Access (defensa en profundidad por si la app de Access se quitara).
 * - Soporta Range (los visores de PDF piden el archivo por partes).
 */

const PRIVADO = 'privado/'

export default {
  async fetch(request, env) {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return text(405, 'Método no permitido', { allow: 'GET, HEAD' })
    }

    const url = new URL(request.url)
    let key
    try {
      key = decodeURIComponent(url.pathname.slice(1)).normalize('NFC')
    } catch {
      return text(400, 'Ruta inválida')
    }
    // Sin listado: la raíz y cualquier ruta que termine en "/" no existen.
    if (!key || key.endsWith('/') || key.split('/').some((s) => s === '..' || s === '.')) {
      return text(404, 'No encontrado')
    }

    const isPrivate = key.startsWith(PRIVADO)
    if (isPrivate && !(await accessOk(request, env))) {
      return text(403, 'Acceso restringido')
    }

    const cache = isPrivate ? 'private, no-store' : 'public, max-age=3600'

    if (request.method === 'HEAD') {
      const head = await env.LIBRARY.head(key)
      if (!head) return text(404, 'No encontrado')
      return new Response(null, { headers: objectHeaders(head, key, cache) })
    }

    const object = await env.LIBRARY.get(key, {
      range: request.headers,
      onlyIf: request.headers,
    })
    if (!object) return text(404, 'No encontrado')

    const headers = objectHeaders(object, key, cache)
    // onlyIf no se cumplió (If-None-Match / If-Modified-Since): sin cuerpo.
    if (!('body' in object)) return new Response(null, { status: 304, headers })

    if (object.range && request.headers.has('range')) {
      const { offset, length } = resolveRange(object.range, object.size)
      headers.set('content-range', `bytes ${offset}-${offset + length - 1}/${object.size}`)
      headers.set('content-length', String(length))
      return new Response(object.body, { status: 206, headers })
    }
    return new Response(object.body, { headers })
  },
}

function objectHeaders(object, key, cache) {
  const headers = new Headers()
  object.writeHttpMetadata(headers)
  if (!headers.has('content-type') && key.toLowerCase().endsWith('.pdf')) {
    headers.set('content-type', 'application/pdf')
  }
  const name = key.split('/').pop()
  headers.set('content-disposition', `inline; filename*=UTF-8''${encodeURIComponent(name)}`)
  headers.set('etag', object.httpEtag)
  headers.set('accept-ranges', 'bytes')
  headers.set('content-length', String(object.size))
  headers.set('cache-control', cache)
  headers.set('x-robots-tag', 'noindex, nofollow')
  headers.set('x-content-type-options', 'nosniff')
  return headers
}

function resolveRange(range, size) {
  if (typeof range.suffix === 'number') return { offset: size - range.suffix, length: range.suffix }
  const offset = range.offset ?? 0
  const length = range.length ?? size - offset
  return { offset, length }
}

function text(status, body, extra = {}) {
  return new Response(body, {
    status,
    headers: { 'content-type': 'text/plain; charset=utf-8', 'x-robots-tag': 'noindex', ...extra },
  })
}

// ── Verificación del JWT de Cloudflare Access (RS256) ────────────────────────

let jwksCache = { at: 0, keys: null }

async function accessOk(request, env) {
  const team = env.TEAM_DOMAIN
  const aud = env.PRIVADO_AUD
  if (!team || !aud) return false // falla cerrado si no está configurado
  const token =
    request.headers.get('cf-access-jwt-assertion') || cookie(request, 'CF_Authorization')
  if (!token) return false
  try {
    const [h, p, s] = token.split('.')
    const header = JSON.parse(b64urlText(h))
    const payload = JSON.parse(b64urlText(p))
    if (header.alg !== 'RS256') return false
    const issuer = `https://${team}`
    if (payload.iss !== issuer) return false
    const auds = Array.isArray(payload.aud) ? payload.aud : [payload.aud]
    if (!auds.includes(aud)) return false
    const now = Math.floor(Date.now() / 1000)
    if (typeof payload.exp !== 'number' || payload.exp < now) return false
    if (typeof payload.nbf === 'number' && payload.nbf > now + 60) return false

    const jwk = (await jwks(issuer)).find((k) => k.kid === header.kid)
    if (!jwk) return false
    const key = await crypto.subtle.importKey(
      'jwk', jwk, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify'],
    )
    return await crypto.subtle.verify(
      'RSASSA-PKCS1-v1_5', key, b64urlBytes(s), new TextEncoder().encode(`${h}.${p}`),
    )
  } catch {
    return false
  }
}

async function jwks(issuer) {
  if (jwksCache.keys && Date.now() - jwksCache.at < 10 * 60 * 1000) return jwksCache.keys
  const res = await fetch(`${issuer}/cdn-cgi/access/certs`)
  const { keys } = await res.json()
  jwksCache = { at: Date.now(), keys }
  return keys
}

function cookie(request, name) {
  const raw = request.headers.get('cookie') || ''
  for (const part of raw.split(';')) {
    const [k, ...v] = part.trim().split('=')
    if (k === name) return v.join('=')
  }
  return null
}

function b64urlBytes(s) {
  const b = atob(s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4))
  return Uint8Array.from(b, (c) => c.charCodeAt(0))
}
function b64urlText(s) {
  return new TextDecoder().decode(b64urlBytes(s))
}
