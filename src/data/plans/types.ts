/*
 * Capa de planes de estudio — esquema agnóstico a la escuela.
 *
 * Un `Plan` es la capa curricular enchufable de MedCore. NO es la columna
 * vertebral del producto: las secciones núcleo (Anatomía, Atlas, MedLex,
 * Quizzes) funcionan sin ningún plan cargado. UAD es el plan activo; LMGC
 * se conserva como plan seleccionable.
 */

export type Plan = {
  id: string            // 'uad-medicina'
  school: string        // 'Universidad Autónoma de Durango'
  schoolShort: string   // 'UAD'
  degree: string        // 'Medicina'
  modality?: string     // 'Mixta-Virtual'
  rvoe?: string         // '20261019'
  durationLabel: string // '7 años'
  periodLabel: string   // 'Semestre'
  periods: Period[]
}

export type Period = {
  index: number
  label: string         // etiqueta oficial, verbatim
  subjects: Subject[]
}

export type Subject = {
  id: string            // slug estable
  name: string          // verbatim
  hasLab?: boolean
  tags?: string[]       // para enlazar con atlas / medlex / anatomía / quizzes
}
