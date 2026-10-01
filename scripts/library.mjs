#!/usr/bin/env node
/**
 * Biblioteca de MedCore en Cloudflare R2 (bucket privado `medcore-library`).
 *
 *   npm run library:add -- <subjectId> "<nombre en la biblioteca>" "<ruta del PDF fuente>"
 *     Sube el PDF a R2 en la key que le corresponde (privado/… si está en
 *     LIBRARY_PRIVATE). Idempotente: si ya existe con el mismo tamaño, no hace nada.
 *     Nunca reemplaza un archivo distinto que ya esté en R2 salvo con --replace,
 *     y solo acepta PDFs reales (cabecera %PDF).
 *
 *   npm run library:check
 *     Compara todos los archivos que el plan enlaza (fuentes, materiales,
 *     bibliografía) contra lo que hay en R2 y lista los faltantes.
 *
 * Requiere rclone con un remoto `medcore-r2` (S3 API de R2). Cambia el remoto
 * con la variable MEDCORE_R2_REMOTE si usas otro nombre.
 */
import { execFileSync } from 'node:child_process'
import { existsSync, openSync, readFileSync, readSync, closeSync, statSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const REMOTE = `${process.env.MEDCORE_R2_REMOTE ?? 'medcore-r2'}:medcore-library`

// Lista de archivos de terceros (fuente única: src/data/plans/index.ts)
const indexSrc = readFileSync(path.join(ROOT, 'src/data/plans/index.ts'), 'utf8')
const privBlock = indexSrc.match(/LIBRARY_PRIVATE = new Set<string>\(\[([\s\S]*?)\]\)/)
if (!privBlock) throw new Error('No encontré LIBRARY_PRIVATE en src/data/plans/index.ts')
const PRIVATE = new Set([...privBlock[1].matchAll(/['"]([^'"]+)['"]/g)].map((m) => m[1]))

const keyFor = (subjectId, file) =>
  PRIVATE.has(`${subjectId}/${file}`) ? `privado/${subjectId}/${file}` : `${subjectId}/${file}`

function rclone(args, opts = {}) {
  return execFileSync('rclone', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], ...opts })
}

function remoteSize(key) {
  const dir = path.posix.dirname(key)
  const name = path.posix.basename(key)
  try {
    const list = JSON.parse(rclone(['lsjson', `${REMOTE}/${dir}`, '--files-only', '--include', globEscape(name)]))
    const hit = list.find((o) => o.Name === name)
    return hit ? hit.Size : null
  } catch (e) {
    if (String(e.stderr ?? '').includes('directory not found')) return null
    throw e
  }
}

// rclone usa globs en --include: escapa los metacaracteres del nombre
const globEscape = (s) => s.replace(/[\\*?[\]{}]/g, (c) => `\\${c}`)

function isPdf(file) {
  const fd = openSync(file, 'r')
  const buf = Buffer.alloc(5)
  readSync(fd, buf, 0, 5, 0)
  closeSync(fd)
  return buf.toString('latin1') === '%PDF-'
}

function add(argv) {
  const replace = argv.includes('--replace')
  const [subjectId, file, source] = argv.filter((a) => a !== '--replace')
  if (!subjectId || !file || !source) {
    console.error('Uso: npm run library:add -- <subjectId> "<nombre en la biblioteca>" "<ruta del PDF>" [--replace]')
    process.exit(1)
  }
  if (!existsSync(source)) throw new Error(`No existe el archivo fuente: ${source}`)
  if (!file.toLowerCase().endsWith('.pdf') || !isPdf(source)) {
    throw new Error(`No es un PDF: ${source}`)
  }
  const nfcFile = file.normalize('NFC')
  const key = keyFor(subjectId, nfcFile)
  const size = statSync(source).size
  const current = remoteSize(key)
  if (current === size) {
    console.log(`= ya estaba en R2: ${key} (${size} bytes)`)
    return
  }
  if (current !== null && !replace) {
    throw new Error(`${key} ya existe en R2 con otro tamaño (${current} bytes). Usa --replace si de verdad quieres sustituirlo.`)
  }
  rclone(['copyto', source, `${REMOTE}/${key}`, '--s3-no-check-bucket'], { stdio: 'inherit' })
  const after = remoteSize(key)
  if (after !== size) throw new Error(`Verificación fallida para ${key}: local ${size}, R2 ${after}`)
  console.log(`${current === null ? '+ subido' : '~ reemplazado'}: ${key} (${size} bytes)`)
}

async function check() {
  const { plans } = await import(pathToFileURL(path.join(ROOT, 'src/data/plans/uad-medicina.ts')).href)
    .then((m) => ({ plans: Object.values(m) }))
  const subjects = []
  JSON.stringify(plans, (k, v) => {
    if (v && typeof v === 'object' && v.id && v.content) subjects.push(v)
    return v
  })
  const wanted = new Set()
  for (const s of subjects) {
    const c = s.content
    for (const b of c.bibliografia ?? []) if (b.file) wanted.add(keyFor(s.id, b.file))
    for (const m of c.materiales ?? []) if (m.file) wanted.add(keyFor(s.id, m.file))
    for (const w of c.semanas ?? []) for (const f of w.fuentes ?? []) if (f.file) wanted.add(keyFor(s.id, f.file))
  }
  const present = new Set(rclone(['lsf', '-R', '--files-only', REMOTE]).split('\n').filter(Boolean))
  const missing = [...wanted].filter((k) => !present.has(k)).sort()
  const unused = [...present].filter((k) => !wanted.has(k)).sort()
  console.log(`Enlazados por el plan: ${wanted.size} · en R2: ${present.size}`)
  console.log(`\nFaltan en R2 (${missing.length}):`)
  for (const k of missing) console.log(`  - ${k}`)
  console.log(`\nEn R2 pero sin enlace en el plan (${unused.length}):`)
  for (const k of unused) console.log(`  · ${k}`)
  if (missing.length) process.exitCode = 1
}

const [cmd, ...args] = process.argv.slice(2)
if (cmd === 'add') add(args)
else if (cmd === 'check') await check()
else {
  console.error('Comandos: add <subjectId> "<nombre>" "<ruta>" | check')
  process.exit(1)
}
