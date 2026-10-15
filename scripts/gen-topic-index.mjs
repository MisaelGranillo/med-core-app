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
    contents: "export { topics } from './src/data/topics'; export { questions } from './src/data/quizzes';",
    resolveDir: ROOT,
    loader: 'ts',
  },
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: tmp,
  logLevel: 'error',
})

const { topics, questions } = await import(pathToFileURL(tmp).href)
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
`)
console.log(`topicIndex: ${index.length} temas, ${questions.length} preguntas`)
