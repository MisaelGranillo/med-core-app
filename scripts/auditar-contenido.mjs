/* Auditoría del contenido: temas fuera del plan, preguntas huérfanas, módulos y enlaces internos rotos.
 * Uso: node scripts/auditar-contenido.mjs */
import { build } from 'esbuild'
import { pathToFileURL, fileURLToPath } from 'node:url'
import path from 'node:path'; import os from 'node:os'
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const tmp = path.join(os.tmpdir(), 'medcore-audit.mjs')
await build({ stdin: { contents: "export { topics } from './src/data/topics'; export { questions } from './src/data/quizzes'; export { modules } from './src/data/modules'; export { plans } from './src/data/plans'; export { atlasTopics } from './src/data/atlas-topics'; export { FICHAS } from './src/data/patologias'", resolveDir: ROOT, loader: 'ts' }, bundle: true, format: 'esm', platform: 'node', outfile: tmp, logLevel: 'error' })
const m = await import(pathToFileURL(tmp).href)
const tids = new Set(m.topics.map(t => t.id))
const inModules = new Set(m.modules.flatMap(x => x.topicIds))
const uad = m.plans.find(p => p.id === 'uad-medicina')
const inPlan = new Set(uad.periods.flatMap(p => p.subjects.flatMap(s => [...(s.topicIds ?? []), ...(s.content?.semanas ?? []).flatMap(w => w.topicIds ?? [])])))
const qc = {}; for (const q of m.questions) qc[q.topicId] = (qc[q.topicId] ?? 0) + 1
console.log('temas', m.topics.length, 'módulos', m.modules.length, 'preguntas', m.questions.length, 'atlas', m.atlasTopics?.length, 'fichas', m.FICHAS?.length)
console.log('\nTemas fuera del plan UAD:'); const fuera = m.topics.filter(t => !inPlan.has(t.id))
for (const t of fuera) console.log(' ', t.id, '|', t.categoria ?? '-', '|', inModules.has(t.id) ? 'módulo' : 'SIN MÓDULO', '|', qc[t.id] ?? 0, 'p')
console.log('\nPreguntas con topicId inexistente:', Object.keys(qc).filter(k => !tids.has(k)))
console.log('\nTemas sin preguntas:', m.topics.filter(t => !qc[t.id]).map(t => t.id))
console.log('\nMódulos:'); for (const x of m.modules) console.log(' ', x.id, '|', x.badge ?? '', '|', x.topicIds.length)
console.log('\nPlanes:', m.plans.map(p => p.id))
// Enlaces internos en todo el contenido
const atlasIds = new Set((m.atlasTopics ?? []).map(a => a.id)); const fichaIds = new Set((m.FICHAS ?? []).map(f => f.id))
const subjIds = new Set(m.plans.flatMap(p => p.periods.flatMap(x => x.subjects.map(s => s.id))))
const json = JSON.stringify([m.topics, uad, m.FICHAS, m.atlasTopics])
const bad = new Set()
for (const [, kind, id] of json.matchAll(/["(]\/(topic|atlas|patologias|plan|quiz)\/([a-z0-9-]+)(?![a-z0-9.-])/g)) {
  const ok = kind === 'topic' ? tids.has(id) : kind === 'atlas' ? atlasIds.has(id) : kind === 'patologias' ? fichaIds.has(id) : kind === 'plan' ? subjIds.has(id) : (tids.has(id) || id.startsWith('examen-'))
  if (!ok) bad.add(`/${kind}/${id}`)
}
console.log('\nEnlaces internos rotos:', [...bad])
console.log('Atlas sin preguntas:', (m.atlasTopics ?? []).filter(a => !a.questions?.length).map(a => a.id))
console.log('Atlas por categoría:', Object.entries((m.atlasTopics ?? []).reduce((o, a) => (o[a.category] = (o[a.category] ?? 0) + 1, o), {})))
