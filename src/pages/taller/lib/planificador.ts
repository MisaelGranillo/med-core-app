/* Modelo de datos del planificador de la semana ideal (/taller/planificador).
 * También lo usa la matriz de Eisenhower para mandar tareas del cuadrante II
 * como bloques de estudio sin hora asignada. */

import { escribirAlmacen, leerAlmacen } from './almacen'

export const CLAVE_PLANIFICADOR = 'planificador'

/** La cuadrícula va de 05:00 a 24:00 en franjas de 30 minutos. */
export const INICIO_DIA = 5 * 60
export const FIN_DIA = 24 * 60
export const PASO = 30
export const FRANJAS = (FIN_DIA - INICIO_DIA) / PASO

export const DIAS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'] as const
export const DIAS_CORTOS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'] as const

export const CATEGORIAS = [
  { id: 'clases',        nombre: 'Clases' },
  { id: 'trabajo',       nombre: 'Trabajo' },
  { id: 'sueno',         nombre: 'Sueño' },
  { id: 'traslados',     nombre: 'Traslados' },
  { id: 'familia',       nombre: 'Familia' },
  { id: 'estudio',       nombre: 'Estudio (roca grande)' },
  { id: 'estudio-corto', nombre: 'Estudio corto (flashcards)' },
  { id: 'revision',      nombre: 'Revisión semanal' },
  { id: 'otro',          nombre: 'Otro' },
] as const

export type Categoria = typeof CATEGORIAS[number]['id']

export const nombreCategoria = (c: Categoria) => CATEGORIAS.find(x => x.id === c)?.nombre ?? 'Otro'
/** Categorías que piden una acción concreta. */
export const pideAccion = (c: Categoria) => c === 'estudio' || c === 'estudio-corto'
/** Categorías que se exportan con «solo Estudio y Revisión». */
export const esDeEstudio = (c: Categoria) => c === 'estudio' || c === 'estudio-corto' || c === 'revision'

export interface Bloque {
  id: string
  /** 0 = lunes … 6 = domingo; null = sin asignar. */
  dia: number | null
  /** Minutos desde las 00:00; null = sin asignar. */
  inicio: number | null
  /** Minutos, múltiplo de 30. */
  duracion: number
  titulo: string
  categoria: Categoria
  /** Acción concreta del bloque (p. ej. «Histología: 20 preguntas de tejido conjuntivo»). */
  accion: string
}

export interface Plan {
  bloques: Bloque[]
  /** Cuenta 00:00 a 05:00 como sueño en el resumen (fuera de la cuadrícula). */
  suenoMadrugada: boolean
}

export const planVacio = (): Plan => ({ bloques: [], suenoMadrugada: true })

export function nuevoId(): string {
  try {
    return crypto.randomUUID()
  } catch {
    return `b${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`
  }
}

const IDS = new Set<string>(CATEGORIAS.map(c => c.id))

export function normalizarPlan(v: unknown): Plan {
  const p = v as Partial<Plan>
  const bloques: Bloque[] = []
  for (const raw of Array.isArray(p?.bloques) ? p.bloques : []) {
    const b = raw as Partial<Bloque>
    if (typeof b?.id !== 'string') continue
    const categoria = (IDS.has(String(b.categoria)) ? b.categoria : 'otro') as Categoria
    const dia = typeof b.dia === 'number' && b.dia >= 0 && b.dia <= 6 ? b.dia : null
    const inicio = typeof b.inicio === 'number' && b.inicio >= INICIO_DIA && b.inicio < FIN_DIA ? b.inicio : null
    let duracion = typeof b.duracion === 'number' ? Math.max(PASO, Math.round(b.duracion / PASO) * PASO) : 60
    if (inicio != null) duracion = Math.min(duracion, FIN_DIA - inicio)
    bloques.push({
      id: b.id, categoria,
      dia: inicio == null ? null : dia,
      inicio: dia == null ? null : inicio,
      duracion,
      titulo: typeof b.titulo === 'string' ? b.titulo : '',
      accion: typeof b.accion === 'string' ? b.accion : '',
    })
  }
  return { bloques, suenoMadrugada: p?.suenoMadrugada !== false }
}

/** Agrega un bloque de Estudio sin hora al plan guardado (lo usa la matriz). */
export function agregarBloqueSinHora(titulo: string, accion: string): boolean {
  const plan = normalizarPlan(leerAlmacen<unknown>(CLAVE_PLANIFICADOR) ?? planVacio())
  plan.bloques.push({ id: nuevoId(), dia: null, inicio: null, duracion: 60, titulo, categoria: 'estudio', accion })
  return escribirAlmacen(CLAVE_PLANIFICADOR, plan)
}

export const horaTexto = (min: number) =>
  `${String(Math.floor(min / 60) % 24).padStart(2, '0')}:${String(min % 60).padStart(2, '0')}`
