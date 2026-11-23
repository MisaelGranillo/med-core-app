/* Agrupa los temas por semestre → materia → semana, el mismo eje del plan UAD.
 * Lo usan Temas (/estudio), Quizzes (/quiz) y la página de cada materia. */

import { materias, type MateriaSummary, type TopicSummary } from './generated/topicIndex'

export type GrupoSemana = { n: number | null; titulo: string; temas: TopicSummary[] }
export type GrupoMateria = { materia: MateriaSummary; semanas: GrupoSemana[]; total: number }

export function agruparPorMateria(temas: TopicSummary[]): GrupoMateria[] {
  return materias
    .map((materia) => {
      const propios = temas.filter((t) => t.materia === materia.id)
      const semanas: GrupoSemana[] = materia.semanas
        .map((w) => ({ n: w.n, titulo: w.titulo, temas: propios.filter((t) => t.semana === w.n) }))
        .filter((g) => g.temas.length > 0)
      const sinSemana = propios.filter((t) => t.semana === undefined)
      if (sinSemana.length) semanas.push({ n: null, titulo: 'Repasos', temas: sinSemana })
      return { materia, semanas, total: propios.length }
    })
    .filter((g) => g.total > 0)
}

/* Nombre corto para chips y etiquetas: «Anatomía», «Bioquímica», «Inglés»… */
export function nombreCorto(nombre: string): string {
  if (nombre.startsWith('Medicina')) return 'Humanística'
  return nombre.replace(/ (y|I|II|III)( .*)?$/, '').split(' ')[0]
}

/* Semestres presentes, en orden. */
export function periodos(grupos: GrupoMateria[]): { n: number; label: string }[] {
  const vistos = new Map<number, string>()
  for (const g of grupos) vistos.set(g.materia.periodo, g.materia.periodoLabel)
  return [...vistos].sort((a, b) => a[0] - b[0]).map(([n, label]) => ({ n, label }))
}

/* Sin acentos ni mayúsculas, para el filtro de texto. */
export function normalizar(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
}
