/* Verifica que cada archivo del manifiesto del taller exista en
 * public/taller/descargas/ y que su tamaño coincida con `bytes`.
 * Corre en prebuild (Node ≥ 23 ejecuta TypeScript directamente).
 * Uso: node scripts/check-taller-descargas.ts */
import { existsSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { DESCARGAS } from '../src/pages/taller/taller.descargas.ts'

const carpeta = join(import.meta.dirname, '..', 'public', 'taller', 'descargas')
const errores: string[] = []

const ids = new Set<string>()
for (const d of DESCARGAS) {
  if (ids.has(d.id)) errores.push(`id repetido en el manifiesto: ${d.id}`)
  ids.add(d.id)
  const ruta = join(carpeta, d.archivo)
  if (!existsSync(ruta)) { errores.push(`falta el archivo: ${d.archivo}`); continue }
  const real = statSync(ruta).size
  if (real !== d.bytes) errores.push(`tamaño distinto en ${d.archivo}: manifiesto ${d.bytes}, archivo ${real}`)
  if (!d.archivo.toLowerCase().endsWith(`.${d.formato}`)) errores.push(`formato no coincide con la extensión: ${d.archivo}`)
}

// Archivos en la carpeta que el manifiesto no describe (404.html es intencional).
const enManifiesto = new Set(DESCARGAS.map(d => d.archivo))
for (const f of readdirSync(carpeta)) {
  if (f !== '404.html' && !f.startsWith('.') && !enManifiesto.has(f)) errores.push(`archivo sin entrada en el manifiesto: ${f}`)
}

if (errores.length) {
  console.error('✗ Descargas del taller:\n  ' + errores.join('\n  '))
  process.exit(1)
}
console.log(`✓ Descargas del taller: ${DESCARGAS.length} archivos verificados`)
