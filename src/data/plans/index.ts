/*
 * Registro de planes de estudio.
 *
 * MedCore es agnóstico a la escuela: las secciones núcleo (Anatomía, Atlas,
 * MedLex, Quizzes) funcionan sin ningún plan. Un plan es una capa curricular
 * enchufable. UAD Medicina es el plan activo; UNISA/LMGC se conserva como
 * plan seleccionable.
 *
 * Para agregar un plan nuevo:
 *   1. Crea `src/data/plans/mi-plan.ts` que exporte un `Plan`.
 *   2. Impórtalo aquí y añádelo al array `plans`.
 *   3. (Opcional) cambia `activePlanId` si debe ser el plan por defecto.
 */

import type { Plan } from './types'
import { uadMedicina } from './uad-medicina'
import { unisaLmgc } from './unisa-lmgc'

export type { Plan, Period, Subject } from './types'

export const plans: Plan[] = [uadMedicina, unisaLmgc]

export const activePlanId = 'uad-medicina'

export const getPlan = (id: string): Plan | null =>
  plans.find(p => p.id === id) ?? null

export const getActivePlan = (): Plan =>
  getPlan(activePlanId) ?? plans[0]

// Busca un plan que contenga un subjectId dado (para enlaces profundos).
export const findSubject = (subjectId: string) => {
  for (const plan of plans) {
    for (const period of plan.periods) {
      const subject = period.subjects.find(s => s.id === subjectId)
      if (subject) return { plan, period, subject }
    }
  }
  return null
}
