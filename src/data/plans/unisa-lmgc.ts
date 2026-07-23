/*
 * Plan de Estudios — LMGC (Licenciatura en Medicina General y Comunitaria)
 * Universidad de la Salud, Ciudad de México · 6 años · 37 módulos
 *
 * Adaptador: reproyecta el dataset original `lmgc-modules.ts` al esquema
 * `Plan` agnóstico. Este archivo es el ÚNICO consumidor de `lmgc-modules.ts`;
 * el resto de la app consume planes vía `plans/index.ts`.
 *
 * Cada año se mapea a un `Period`; cada módulo a un `Subject`. Los campos
 * `sistema_corporal` y `medlex_sistema` del módulo se colapsan en `tags`,
 * lo que preserva el enlace cruzado LMGC ↔ visor 3D / MedLex en el nuevo
 * renderizador (SubjectDetail deriva los enlaces de los tags de sistema).
 */

import type { Plan, Period } from './types'
import { lmgcModules, AÑOS_DISPLAY } from '../lmgc-modules'

const AÑOS = [1, 2, 3, 4, 5, 6] as const

const periods: Period[] = AÑOS.map(año => ({
  index: año,
  label: AÑOS_DISPLAY[año],
  subjects: lmgcModules
    .filter(m => m.año === año)
    .map(m => ({
      id: m.id.toLowerCase(),
      name: m.nombre,
      tags: [...new Set([m.sistema_corporal, m.medlex_sistema].filter(Boolean) as string[])],
    })),
}))

export const unisaLmgc: Plan = {
  id: 'unisa-lmgc',
  school: 'Universidad de la Salud',
  schoolShort: 'UNISA',
  degree: 'Medicina General y Comunitaria',
  durationLabel: '6 años',
  periodLabel: 'Año',
  periods,
}
