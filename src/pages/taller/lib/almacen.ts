/* Persistencia local opcional para las herramientas del taller.
 *
 * Todo vive en localStorage bajo el prefijo «medcore-taller:». Cada lectura y
 * escritura va envuelta en try/catch: en modo privado, con el almacenamiento
 * lleno o bloqueado, la herramienta sigue funcionando en memoria y avisa que
 * no se guardará. */

import { useCallback, useEffect, useRef, useState } from 'react'

const PREFIJO = 'medcore-taller:'

function leer<T>(clave: string): T | undefined {
  try {
    const raw = localStorage.getItem(PREFIJO + clave)
    return raw == null ? undefined : (JSON.parse(raw) as T)
  } catch {
    return undefined
  }
}

function probarAlmacen(): boolean {
  try {
    const k = PREFIJO + '__prueba'
    localStorage.setItem(k, '1')
    localStorage.removeItem(k)
    return true
  } catch {
    return false
  }
}

export interface AlmacenLocal<T> {
  valor: T
  setValor: (v: T | ((prev: T) => T)) => void
  /** false si no se puede guardar en este navegador. */
  disponible: boolean
  /** Borra lo guardado y vuelve al valor inicial. */
  borrar: () => void
}

/** Como useState, pero guarda en localStorage. `normalizar` repara datos
 *  guardados con una forma anterior o incompleta. */
export function useAlmacenLocal<T>(clave: string, inicial: () => T, normalizar?: (v: unknown) => T): AlmacenLocal<T> {
  const [disponible, setDisponible] = useState(probarAlmacen)
  const [valor, setValorEstado] = useState<T>(() => {
    const guardado = leer<unknown>(clave)
    if (guardado === undefined) return inicial()
    try {
      return normalizar ? normalizar(guardado) : (guardado as T)
    } catch {
      return inicial()
    }
  })
  const primera = useRef(true)

  useEffect(() => {
    if (primera.current) { primera.current = false; return }
    try {
      localStorage.setItem(PREFIJO + clave, JSON.stringify(valor))
    } catch {
      setDisponible(false)
    }
  }, [clave, valor])

  const borrar = useCallback(() => {
    try { localStorage.removeItem(PREFIJO + clave) } catch { /* sin almacenamiento */ }
    primera.current = true
    setValorEstado(inicial())
  }, [clave, inicial])

  return { valor, setValor: setValorEstado, disponible, borrar }
}

/** Lee el valor guardado de otra herramienta (p. ej. la matriz que agrega un
 *  bloque al planificador). */
export function leerAlmacen<T>(clave: string): T | undefined {
  return leer<T>(clave)
}

/** Escribe directamente en la clave de otra herramienta. Devuelve false si falla. */
export function escribirAlmacen<T>(clave: string, valor: T): boolean {
  try {
    localStorage.setItem(PREFIJO + clave, JSON.stringify(valor))
    return true
  } catch {
    return false
  }
}
