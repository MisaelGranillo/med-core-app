/* ============================================================================
 * lazyWithRetry.ts — recuperación ante chunks que no cargan.
 *
 * Tras un deploy, una pestaña abierta (o un edge que aún propaga) puede pedir
 * un chunk con hash que ya no existe / todavía no llega. En vez de mostrar
 * "Failed to fetch dynamically imported module", se recarga la página una vez
 * para obtener el index.html nuevo. sessionStorage limita a una recarga
 * automática cada RELOAD_WINDOW_MS, así que nunca entra en bucle.
 * ========================================================================== */
import { lazy, type ComponentType } from 'react'

const KEY = 'medcore:chunk-reload-at'
const RELOAD_WINDOW_MS = 5 * 60 * 1000

let reloading = false

/** Recarga la página si no se ha hecho ya en la ventana reciente.
 *  Devuelve true si hay una recarga en curso. */
export function reloadForStaleChunk(): boolean {
  if (reloading) return true
  try {
    const last = Number(sessionStorage.getItem(KEY) ?? 0)
    if (Date.now() - last < RELOAD_WINDOW_MS) return false
    sessionStorage.setItem(KEY, String(Date.now()))
  } catch {
    return false // sin sessionStorage no hay forma de evitar bucles
  }
  reloading = true
  window.location.reload()
  return true
}

/* Vite emite este evento cuando falla un modulepreload o el import() dinámico.
 * preventDefault() suprime el error mientras la página se recarga. */
export function installPreloadErrorHandler() {
  window.addEventListener('vite:preloadError', event => {
    if (reloadForStaleChunk()) event.preventDefault()
  })
}

const pending = () => new Promise<never>(() => {})

/** React.lazy para un export con nombre; ante un fallo de carga recarga una
 *  vez (manteniendo el fallback de Suspense) o, si ya se intentó, deja que el
 *  error llegue al ErrorBoundary. */
export function lazyWithRetry<T extends Record<string, ComponentType<unknown>>>(
  loader: () => Promise<T>, key: keyof T,
) {
  return lazy(async () => {
    try {
      const m = await loader()
      // undefined ⇒ vite:preloadError ya suprimió el error y está recargando.
      if (m) return { default: m[key] }
      if (reloading) return pending()
      throw new Error(`No se pudo cargar el módulo (${String(key)})`)
    } catch (err) {
      if (reloadForStaleChunk()) return pending()
      throw err
    }
  })
}
