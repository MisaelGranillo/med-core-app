#!/usr/bin/env node
/**
 * Genera src/data/generated/topicIndex.ts: un índice ligero de los temas
 * (id, título, subtítulo, color, conteos) para las páginas de lista (Inicio,
 * Temas, Quizzes, Progreso, Plan). Así el contenido completo de los temas y
 * los bancos de preguntas solo se descargan al abrir un tema, un quiz o la
 * búsqueda. Se ejecuta en predev y prebuild; el archivo generado no se versiona.
 */
import { build } from 'esbuild'
import { mkdirSync, writeFileSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'
import os from 'node:os'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const tmp = path.join(os.tmpdir(), `medcore-index-${process.pid}.mjs`)

await build({
  stdin: {
    contents: "export { topics } from './src/data/topics'; export { questions } from './src/data/quizzes'; export { uadMedicina } from './src/data/plans/uad-medicina';",
    resolveDir: ROOT,
    loader: 'ts',
  },
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: tmp,
  logLevel: 'error',
})

const { topics, questions, uadMedicina } = await import(pathToFileURL(tmp).href)
const qCount = {}
for (const q of questions) qCount[q.topicId] = (qCount[q.topicId] ?? 0) + 1

const index = topics.map((t) => ({
  id: t.id,
  title: t.title,
  subtitle: t.subtitle,
  emoji: t.emoji,
  colorKey: t.colorKey,
  ...(t.categoria ? { categoria: t.categoria } : {}),
  sectionCount: t.sections.length,
  questionCount: qCount[t.id] ?? 0,
}))

// Mazos de examen: una entrada por materia con el conteo de cada semana.
const subjectInfo = {}
for (const p of uadMedicina.periods) for (const s of p.subjects) subjectInfo[s.id] = { nombre: s.name, periodo: p.index, periodoLabel: p.label }
const colorOf = Object.fromEntries(topics.map((t) => [t.id, t.colorKey]))
const emojiOf = Object.fromEntries(topics.map((t) => [t.id, t.emoji]))
const decks = {}
for (const q of questions) {
  if (!q.examen) continue
  const d = (decks[q.examen.materia] ??= { materia: q.examen.materia, ...subjectInfo[q.examen.materia], semanas: {}, total: 0, colorKey: colorOf[q.topicId], emoji: emojiOf[q.topicId] })
  d.semanas[q.examen.semana] = (d.semanas[q.examen.semana] ?? 0) + 1
  d.total++
}
const examDecks = Object.values(decks).map((d) => ({ ...d, semanas: Object.entries(d.semanas).map(([n, count]) => ({ n: Number(n), count })).sort((a, b) => a.n - b.n) }))
const examQuestionCount = examDecks.reduce((n, d) => n + d.total, 0)

const out = path.join(ROOT, 'src/data/generated/topicIndex.ts')
mkdirSync(path.dirname(out), { recursive: true })
writeFileSync(out, `/* Generado por scripts/gen-topic-index.mjs — no editar. */
import type { Topic } from '../../types'

export type TopicSummary = Pick<Topic, 'id' | 'title' | 'subtitle' | 'emoji' | 'colorKey' | 'categoria'> & {
  sectionCount: number
  questionCount: number
}

export const topicIndex: TopicSummary[] = ${JSON.stringify(index, null, 1)}

export const totalQuestionCount = ${questions.length}

export type ExamDeck = {
  materia: string
  nombre: string
  periodo: number
  periodoLabel: string
  colorKey: TopicSummary['colorKey']
  emoji: string
  total: number
  semanas: { n: number; count: number }[]
}

/* Exámenes semanales reales, agrupados por materia (ver scripts/examenes). */
export const examDecks: ExamDeck[] = ${JSON.stringify(examDecks, null, 1)}

export const examQuestionCount = ${examQuestionCount}

/* Ids de mazo: examen-<materia> (todo) o examen-<materia>-s<semana>. */
export function parseExamDeckId(id: string): { materia: string; semana: number | null } | null {
  const m = /^examen-(.+?)(?:-s(\\d+))?$/.exec(id)
  return m ? { materia: m[1], semana: m[2] ? Number(m[2]) : null } : null
}
`)
console.log(`topicIndex: ${index.length} temas, ${questions.length} preguntas (${examQuestionCount} de exámenes en ${examDecks.length} materias)`)
