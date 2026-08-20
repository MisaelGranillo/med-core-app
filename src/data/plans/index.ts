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

/*
 * Biblioteca privada de materiales (PDFs) servida vía Cloudflare Tunnel desde
 * server.local, protegida con Cloudflare Access (solo el propietario).
 * Los archivos NO se alojan en Cloudflare Pages (cap de 25 MB) ni se
 * distribuyen públicamente. Cambia esta base si mueves la biblioteca.
 * URL final de un archivo: `${LIBRARY_BASE}/${subjectId}/${file}`.
 */
export const LIBRARY_BASE = 'https://library.medcore.icu'

export const getPlan = (id: string): Plan | null =>
  plans.find(p => p.id === id) ?? null

export const getActivePlan = (): Plan =>
  getPlan(activePlanId) ?? plans[0]

/*
 * Contexto de plan para un tema: en qué materia y semana se estudia. Único
 * resolvedor usado tanto por el índice de Temas (tag materia · semana) como por
 * la miga de pan de la página de Topic. Busca primero en las semanas
 * (`content.semanas[].topicIds`) y, si no, en el `topicIds` de la materia.
 * Devuelve `null` si ningún plan referencia el tema (p. ej. temas de adelanto):
 * el llamador cae entonces al módulo.
 */
export type PlanContext = { subjectId: string; subjectName: string; semana?: number }

export const planContextForTopic = (topicId: string): PlanContext | null => {
  for (const plan of plans) {
    for (const period of plan.periods) {
      for (const subject of period.subjects) {
        for (const sem of subject.content?.semanas ?? []) {
          if (sem.topicIds?.includes(topicId)) {
            return { subjectId: subject.id, subjectName: subject.name, semana: sem.number }
          }
        }
        if (subject.topicIds?.includes(topicId)) {
          return { subjectId: subject.id, subjectName: subject.name }
        }
      }
    }
  }
  return null
}

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

// Sistemas corporales que tienen visor 3D y terminología MedLex. Un tag de
// materia que pertenezca a este conjunto genera enlaces cruzados a
// /anatomia-3d?sistema= y /terminologia?sistema= en el detalle de materia.
export const SISTEMAS_CORPORALES = [
  'cardiovascular', 'nervioso', 'respiratorio', 'digestivo',
  'urinario', 'endocrino', 'musculoesqueletico', 'tegumentario',
] as const

/*
 * Devuelve los tags de la materia que SON sistemas corporales (con visor 3D y
 * MedLex por sistema). Devolver `[]` es un RESULTADO ESPERADO, no un error: los
 * tags de área académica —'anatomia', 'bioquimica', 'ingles'— no son sistemas
 * corporales y no tienen por qué mapear a uno.
 *
 * Antes esto era un fallo silencioso: Anatomía I (tag 'anatomia') no mostraba
 * NINGÚN enlace de estudio porque su tag no está en SISTEMAS_CORPORALES. Eso YA
 * NO es un problema de descubrimiento: los enlaces a las guías de estudio de la
 * materia vienen ahora de `Subject.topicIds` (explícito y verificable), no de
 * inferir un sistema a partir del tag. Los cross-links por sistema (3D/MedLex)
 * son un extra que solo aplica a materias con tag de sistema corporal real.
 */
export const sistemasDeMateria = (tags?: string[]): string[] =>
  (tags ?? []).filter(t => (SISTEMAS_CORPORALES as readonly string[]).includes(t))
