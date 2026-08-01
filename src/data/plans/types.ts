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
  code?: string         // clave oficial UAD, p.ej. 'AN01001'
  hasLab?: boolean
  tags?: string[]       // para enlazar con atlas / medlex / anatomía / quizzes
  content?: SubjectContent // ficha + temario oficial (opcional)
}

/*
 * Contenido oficial de una materia, tomado del Programa Académico UAD.
 * Todo es opcional: una materia sin `content` sigue mostrando la ficha básica.
 */
export type SubjectContent = {
  area?: string             // 'Ciencias Básicas' | 'Ciencias Sociomédicas' | …
  credits?: number          // créditos
  teacherHours?: number     // horas docente
  independentHours?: number // horas independientes
  modality?: string         // 'Virtual · Teórico-Práctico'
  description?: string       // descripción de la asignatura
  competencia?: string       // unidad de competencia
  temario?: TemarioUnit[]    // contenido temático
  bibliografia?: BiblioRef[] // referencias bibliohemerográficas
  recursos?: RecursoLink[]   // recursos digitales para el alumno
}

export type TemarioUnit = {
  title: string   // 'I. Osteología' o 'Semana 1'
  items: string[] // subtemas
}

export type BiblioRef = {
  title: string
  author?: string
  editorial?: string
  year?: string
  tipo?: 'básica' | 'complementaria'
}

export type RecursoLink = {
  label: string
  url: string
}
