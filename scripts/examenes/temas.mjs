/* Vuelca el texto de cada tema (título, puntos clave, secciones) a un JSON para que
 * importar.py asigne cada pregunta de examen a su tema. Uso: node scripts/examenes/temas.mjs <salida.json> */
import { build } from 'esbuild'
import { writeFileSync } from 'node:fs'
import { pathToFileURL, fileURLToPath } from 'node:url'
import path from 'node:path'
import os from 'node:os'
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const tmp = path.join(os.tmpdir(), 'medcore-temas-' + process.pid + '.mjs')
await build({ stdin: { contents: "export { topics } from './src/data/topics'; export { uadMedicina } from './src/data/plans/uad-medicina'", resolveDir: ROOT, loader: 'ts' }, bundle: true, format: 'esm', platform: 'node', outfile: tmp, logLevel: 'error' })
const { topics, uadMedicina } = await import(pathToFileURL(tmp).href)
const txt = (b) => [b.title, b.content, ...(b.items ?? []), ...(b.steps ?? []), ...(b.data?.rows?.flat() ?? []), ...(b.left?.items ?? []), ...(b.right?.items ?? [])].filter(Boolean).join(' ')
const out = topics.map((t) => ({ id: t.id, title: t.title, head: [t.title, t.subtitle, ...(t.keyPoints ?? [])].join(' '),
  body: t.sections.map((s) => [s.title, ...(s.keyTerms ?? []), ...s.blocks.map(txt)].join(' ')).join(' '), colorKey: t.colorKey, emoji: t.emoji }))
const plan = uadMedicina.periods.flatMap((p) => p.subjects.filter((s) => s.content?.semanas?.length).map((s) => ({ periodo: p.index, id: s.id, name: s.name, semanas: s.content.semanas.map((w) => ({ n: w.number, topicIds: w.topicIds ?? [] })) })))
writeFileSync(process.argv[2], JSON.stringify({ topics: out, plan }))
console.log(out.length)
