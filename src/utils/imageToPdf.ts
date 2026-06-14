/* ============================================================================
 * imageToPdf.ts — genera y descarga un PDF de una sola página que embebe una
 * imagen a resolución completa. Sin dependencias externas.
 *
 * Estrategia de calidad ("best res"):
 *   1. Lossless por defecto — los píxeles RGB crudos se comprimen con zlib vía
 *      CompressionStream y se embeben como /FlateDecode (sin pérdida).
 *   2. Respaldo — si CompressionStream no está disponible, se embebe un JPEG
 *      de alta calidad (0.98) como /DCTDecode.
 * ========================================================================== */

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous' // mismo origen (Cloudflare Pages) → canvas no se contamina
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error('No se pudo cargar la imagen'))
    img.src = src
  })
}

async function deflate(data: Uint8Array): Promise<Uint8Array> {
  // CompressionStream('deflate') produce formato zlib (RFC1950), que es
  // exactamente lo que espera el filtro /FlateDecode de PDF.
  const cs = new CompressionStream('deflate')
  const writer = cs.writable.getWriter()
  void writer.write(data as Uint8Array<ArrayBuffer>)
  void writer.close()

  const chunks: Uint8Array[] = []
  const reader = cs.readable.getReader()
  for (;;) {
    const { done, value } = await reader.read()
    if (done) break
    if (value) chunks.push(value)
  }
  return concat(chunks)
}

function canvasToJpeg(canvas: HTMLCanvasElement, quality: number): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error('toBlob falló'))
          return
        }
        blob.arrayBuffer().then((ab) => resolve(new Uint8Array(ab)), reject)
      },
      'image/jpeg',
      quality,
    )
  })
}

function concat(chunks: Uint8Array[]): Uint8Array {
  let len = 0
  for (const c of chunks) len += c.length
  const out = new Uint8Array(len)
  let o = 0
  for (const c of chunks) {
    out.set(c, o)
    o += c.length
  }
  return out
}

/** Ensambla un PDF mínimo válido (PDF 1.4) embebiendo una imagen. */
function buildPdf(imgW: number, imgH: number, image: Uint8Array, filter: string): Uint8Array {
  // Escala la página para que el ancho no exceda el de A4 (595.28 pt),
  // preservando la proporción. Resulta en una sola página legible.
  const pageW = Math.min(imgW, 595.28)
  const pageH = +(imgH * (pageW / imgW)).toFixed(2)
  const pw = +pageW.toFixed(2)

  const te = new TextEncoder()
  const parts: Uint8Array[] = []
  const offsets: number[] = new Array(6).fill(0) // offsets[1..5]
  let pos = 0
  const put = (b: Uint8Array) => {
    parts.push(b)
    pos += b.length
  }
  const putS = (s: string) => put(te.encode(s))

  putS('%PDF-1.4\n')
  put(new Uint8Array([0x25, 0xe2, 0xe3, 0xcf, 0xd3, 0x0a])) // marcador binario

  offsets[1] = pos
  putS('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n')

  offsets[2] = pos
  putS('2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n')

  offsets[3] = pos
  putS(
    `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pw} ${pageH}] ` +
      `/Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>\nendobj\n`,
  )

  offsets[4] = pos
  putS(
    `4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${imgW} /Height ${imgH} ` +
      `/ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /${filter} ` +
      `/Length ${image.length} >>\nstream\n`,
  )
  put(image)
  putS('\nendstream\nendobj\n')

  const content = `q ${pw} 0 0 ${pageH} 0 0 cm /Im0 Do Q\n`
  offsets[5] = pos
  putS(`5 0 obj\n<< /Length ${content.length} >>\nstream\n${content}endstream\nendobj\n`)

  const xrefPos = pos
  let xref = 'xref\n0 6\n0000000000 65535 f \n'
  for (let n = 1; n <= 5; n++) {
    xref += String(offsets[n]).padStart(10, '0') + ' 00000 n \n'
  }
  putS(xref)
  putS(`trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF\n`)

  return concat(parts)
}

function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

/** Genera un PDF a resolución completa de la imagen y dispara su descarga. */
export async function downloadImageAsPdf(src: string, filename: string): Promise<void> {
  const img = await loadImage(src)
  const w = img.naturalWidth || img.width
  const h = img.naturalHeight || img.height

  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Canvas no soportado')
  ctx.fillStyle = '#ffffff' // fondo opaco (descarta alfa)
  ctx.fillRect(0, 0, w, h)
  ctx.drawImage(img, 0, 0, w, h)

  let stream: Uint8Array
  let filter: string
  if (typeof CompressionStream !== 'undefined') {
    const rgba = ctx.getImageData(0, 0, w, h).data
    const rgb = new Uint8Array(w * h * 3)
    for (let i = 0, j = 0; i < rgba.length; i += 4, j += 3) {
      rgb[j] = rgba[i]
      rgb[j + 1] = rgba[i + 1]
      rgb[j + 2] = rgba[i + 2]
    }
    stream = await deflate(rgb)
    filter = 'FlateDecode'
  } else {
    stream = await canvasToJpeg(canvas, 0.98)
    filter = 'DCTDecode'
  }

  const pdf = buildPdf(w, h, stream, filter)
  downloadBlob(new Blob([pdf as Uint8Array<ArrayBuffer>], { type: 'application/pdf' }), filename)
}
