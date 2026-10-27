// Verifica que las bases y láminas de cada ficha apunten a temas, secciones y láminas existentes.
// Uso: npx tsx scripts/check-patologias.mts
import { PATOLOGIAS } from '../src/data/patologias'
import { topics } from '../src/data/topics'
import { atlasTopics } from '../src/data/atlas-topics'
const T = new Map(topics.map(t => [t.id, t]))
const A = new Map(atlasTopics.map(a => [a.id, a]))
let n = 0
for (const p of PATOLOGIAS) {
  for (const b of p.bases ?? []) {
    const t = T.get(b.topicId)
    if (!t) { console.log('TOPIC?', p.id, b.topicId); n++; continue }
    if (b.sectionId && !t.sections.some(s => s.id === b.sectionId)) { console.log('SECTION?', p.id, b.topicId, b.sectionId); n++ }
    else if (b.sectionId) { const s = t.sections.find(s => s.id === b.sectionId)!; if (s.title !== b.label) console.log('LABEL', p.id, b.sectionId, JSON.stringify(b.label), '->', JSON.stringify(s.title)) }
  }
  for (const a of p.atlas ?? []) {
    const x = A.get(a.id)
    if (!x) { console.log('ATLAS?', p.id, a.id); n++ }
    else if (x.title !== a.title) console.log('ATLASTITLE', p.id, a.id, JSON.stringify(a.title), '->', JSON.stringify(x.title))
  }
}
console.log('fichas', PATOLOGIAS.length, 'errores', n)
