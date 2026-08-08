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
  // Topics de `src/data/topics.ts` que cubren esta materia. Enlace EXPLÍCITO
  // (no derivado de tags): cada id debe existir en `topics`. La verificación de
  // integridad está en el prompt §5 (script temporal que recorre los planes).
  topicIds?: string[]
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
  temario?: TemarioUnit[]    // contenido temático (programa completo)
  semanas?: SemanaContent[]  // plan semanal (contenido en curso, 4 sem/módulo)
  bibliografia?: BiblioRef[] // referencias bibliohemerográficas
  materiales?: MaterialRef[] // lecturas y materiales (PDF en biblioteca privada)
  recursos?: RecursoLink[]   // recursos digitales para el alumno
}

export type MaterialRef = {
  title: string
  file: string   // nombre del archivo en la biblioteca (LIBRARY_BASE/<subjectId>/<file>)
  kind?: string  // etiqueta corta: 'Libro' | 'Artículo' | 'Programa' | …
}

/*
 * Contenido de una semana del módulo. El material UAD llega cada 4 semanas
 * (1 módulo = 4 semanas); cada semana se añade aquí conforme se recibe.
 */
/*
 * Lectura fuente de una semana: capítulo/páginas de un libro de la biblioteca.
 * `paginas` SIEMPRE lleva las dos numeraciones —la del libro y la del PDF—
 * porque quien abre el PDF busca la página del PDF y quien cita necesita la
 * del libro. Ej.: 'libro 1–20 (PDF 29–48)'.
 */
export type FuenteRef = {
  title: string     // 'Medical Terminology — A Living Language'
  file?: string     // archivo en la biblioteca (LIBRARY_BASE/<subjectId>/<file>)
  paginas?: string  // 'libro 1–20 (PDF 29–48)' — SIEMPRE ambas numeraciones
  nota?: string     // 'Capítulo 1: raíces, formas combinantes, prefijos y sufijos'
}

export type SemanaContent = {
  number: number         // 1
  title: string          // 'Conceptos generales, planos anatómicos y Osteología I'
  competencia?: string   // competencia a desarrollar en la semana
  temas?: string[]       // temas / subtemas de la semana
  // Topics impartidos en esta semana concreta. Enlace EXPLÍCITO: cada id debe
  // existir en `topics` (verificación de integridad en el prompt §5).
  topicIds?: string[]
  // 'impartido' (por defecto) = visto en clase; 'adelanto' = tomado del libro,
  // aún no impartido. Una semana 'adelanto' se marca en la interfaz.
  estado?: 'impartido' | 'adelanto'
  fuentes?: FuenteRef[]  // lecturas de esa semana, con página exacta
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
  file?: string // nombre del archivo en la biblioteca privada (LIBRARY_BASE/<subjectId>/<file>)
}

export type RecursoLink = {
  label: string
  url: string
}
