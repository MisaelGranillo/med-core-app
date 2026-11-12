/* Respaldo del progreso: exporta e importa como archivo JSON todo lo que MedCore
 * guarda en este navegador (perfil, progreso de temas y quizzes, atlas, plan,
 * ajustes y Taller). Sirve para pasar de la laptop al teléfono sin cuentas. */

const CLAVES_FIJAS = [
  'medcore-profile',
  'medcore-settings',
  'medcore-plan',
  'anatomy-study-progress',
  'atlas-progress',
]
const PREFIJOS = ['medcore-taller:']

const FORMATO = 'medcore-respaldo'
const VERSION = 1

function esClaveDeMedcore(k: string) {
  return CLAVES_FIJAS.includes(k) || PREFIJOS.some((p) => k.startsWith(p))
}

export interface Respaldo {
  formato: typeof FORMATO
  version: number
  creado: string
  datos: Record<string, string>
}

export function crearRespaldo(): Respaldo {
  const datos: Record<string, string> = {}
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i)
    if (k && esClaveDeMedcore(k)) {
      const v = localStorage.getItem(k)
      if (v !== null) datos[k] = v
    }
  }
  return { formato: FORMATO, version: VERSION, creado: new Date().toISOString(), datos }
}

export function descargarRespaldo() {
  const r = crearRespaldo()
  const blob = new Blob([JSON.stringify(r)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `medcore-respaldo-${r.creado.slice(0, 10)}.json`
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

/* Valida el archivo antes de tocar nada: si algo no cuadra, no se escribe nada. */
export function leerRespaldo(texto: string): Respaldo {
  let r: unknown
  try { r = JSON.parse(texto) } catch { throw new Error('El archivo no es un respaldo de MedCore.') }
  const o = r as Partial<Respaldo>
  if (!o || o.formato !== FORMATO || typeof o.datos !== 'object' || o.datos === null)
    throw new Error('El archivo no es un respaldo de MedCore.')
  if ((o.version ?? 0) > VERSION)
    throw new Error('Este respaldo es de una versión más nueva de MedCore. Recarga la página e inténtalo de nuevo.')
  for (const [k, v] of Object.entries(o.datos)) {
    if (!esClaveDeMedcore(k) || typeof v !== 'string') throw new Error('El respaldo contiene datos que MedCore no reconoce.')
  }
  return o as Respaldo
}

/* Reemplaza los datos de MedCore de este navegador por los del respaldo y
 * recarga, para que todos los almacenes se rehidraten con lo importado. */
export function aplicarRespaldo(r: Respaldo) {
  const actuales: string[] = []
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i)
    if (k && esClaveDeMedcore(k)) actuales.push(k)
  }
  actuales.forEach((k) => localStorage.removeItem(k))
  for (const [k, v] of Object.entries(r.datos)) localStorage.setItem(k, v)
  window.location.reload()
}
