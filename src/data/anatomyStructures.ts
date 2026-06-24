/*
 * anatomyStructures.ts — helpers for the Full-parity 3D viewer.
 * Derives structure side (R/L/central) and anatomical groups from the GLB
 * node names (Terminologia Anatomica), so the show/hide menu, labels and
 * mirroring all work directly off the model — no external metadata needed.
 */

export type Side = 'right' | 'left' | 'central'

const RE_RIGHT = /(\.r$|\sright$|_r$|\.r\b)/i
const RE_LEFT = /(\.l$|\sleft$|_l$|\.l\b)/i

export function sideOf(name: string): Side {
  if (RE_RIGHT.test(name)) return 'right'
  if (RE_LEFT.test(name)) return 'left'
  return 'central'
}

/** Display name without the side suffix and underscores. */
export function cleanName(name: string): string {
  return name
    .replace(/(\.r|\.l|_r|_l)$/i, '')
    .replace(/\s(right|left)$/i, '')
    .replace(/_/g, ' ')
    .trim()
}

export interface StructureGroup {
  id: string
  label: string
  match: RegExp
}

/* Coarse anatomical groups (first match wins; rest → "Otros"). */
export const STRUCTURE_GROUPS: StructureGroup[] = [
  { id: 'craneo', label: 'Cráneo', match: /frontal|parietal|occipital|temporal|sphenoid|ethmoid|nasal|lacrimal|zygomat|maxilla|mandible|palatine|vomer|hyoid|skull|cranium|concha|orbit/i },
  { id: 'columna', label: 'Columna', match: /vertebra|atlas|axis|sacrum|coccyx|spine|spinal/i },
  { id: 'torax', label: 'Tórax', match: /\brib\b|costal|sternum|manubrium|xiphoid/i },
  { id: 'pelvis', label: 'Pelvis', match: /pelvi|coxal|hip bone|ilium|ischium|pubis|pubic|acetabul|perine|inguinal/i },
  { id: 'miembro-sup', label: 'Miembro superior', match: /clavicle|scapula|humerus|radius|ulna|carp|metacarp|phalan(x|ges) of \d.*finger|scaphoid|lunate|triquetr|pisiform|trapez|capitate|hamate|finger|thumb/i },
  { id: 'miembro-inf', label: 'Miembro inferior', match: /femur|patella|tibia|fibula|tars|talus|calcaneus|navicular|cuboid|cuneiform|metatars|toe|foot|phalan(x|ges) of \d.*toe/i },
  { id: 'musculos', label: 'Músculos', match: /muscle|muscul|tendon|aponeuros/i },
  { id: 'nervios', label: 'Nervios', match: /nerve|nerv|plexus|ganglion/i },
  { id: 'vasos', label: 'Vasos', match: /artery|arter|vein|venous|vena|vascul|aorta/i },
  { id: 'ligamentos', label: 'Ligamentos', match: /ligament|membrane|capsule|disc|cartilage|fascia/i },
]

export function groupOf(name: string): string {
  const g = STRUCTURE_GROUPS.find(g => g.match.test(name))
  return g ? g.id : 'otros'
}

export const GROUP_LABEL: Record<string, string> = {
  ...Object.fromEntries(STRUCTURE_GROUPS.map(g => [g.id, g.label])),
  otros: 'Otros',
}

/* ── Spanish translation ──────────────────────────────────────────────────
 * Token dictionary + head-noun reordering ("Frontal bone" → "Hueso frontal").
 * Covered terms render in Spanish; uncovered ones keep their clean Latin/English
 * form. Also de-glues a side letter fused to the last word (e.g. "labrumr").  */

const HEAD: Record<string, string> = {
  bone: 'hueso', bones: 'huesos', muscle: 'músculo', muscles: 'músculos',
  nerve: 'nervio', nerves: 'nervios', artery: 'arteria', arteries: 'arterias',
  vein: 'vena', veins: 'venas', vessel: 'vaso', ligament: 'ligamento', ligaments: 'ligamentos',
  tendon: 'tendón', cartilage: 'cartílago', membrane: 'membrana', disc: 'disco',
  vertebrae: 'vértebra', vertebra: 'vértebra', process: 'apófisis', canal: 'conducto',
  fossa: 'fosa', joint: 'articulación', notch: 'escotadura', tubercle: 'tubérculo',
  tuberosity: 'tuberosidad', crest: 'cresta', fascia: 'fascia', aponeurosis: 'aponeurosis',
  bursa: 'bolsa', capsule: 'cápsula', meniscus: 'menisco',
}

const T: Record<string, string> = {
  // skull
  frontal: 'frontal', parietal: 'parietal', occipital: 'occipital', temporal: 'temporal',
  sphenoid: 'esfenoides', ethmoid: 'etmoides', nasal: 'nasal', lacrimal: 'lagrimal',
  zygomatic: 'cigomático', maxilla: 'maxilar', maxillary: 'maxilar', mandible: 'mandíbula',
  mandibular: 'mandibular', palatine: 'palatino', vomer: 'vómer', hyoid: 'hioides',
  mastoid: 'mastoides', skull: 'cráneo', cranial: 'craneal', cranium: 'cráneo',
  orbit: 'órbita', orbital: 'orbitario', concha: 'cornete',
  // axial
  cervical: 'cervical', thoracic: 'torácica', lumbar: 'lumbar', sacral: 'sacra',
  coccygeal: 'coccígea', atlas: 'atlas', axis: 'axis', sacrum: 'sacro', coccyx: 'cóccix',
  sternum: 'esternón', manubrium: 'manubrio', xiphoid: 'xifoides', costal: 'costal', rib: 'costilla',
  spine: 'columna', spinal: 'espinal', intervertebral: 'intervertebral', interpubic: 'interpúbico',
  // upper limb
  clavicle: 'clavícula', scapula: 'escápula', scapular: 'escapular', acromion: 'acromion',
  coracoid: 'coracoides', glenoid: 'glenoidea', humerus: 'húmero', humeral: 'humeral',
  radius: 'radio', radial: 'radial', ulna: 'cúbito', ulnar: 'cubital',
  carpal: 'carpiano', metacarpal: 'metacarpiano', phalanx: 'falange', phalanges: 'falanges',
  scaphoid: 'escafoides', lunate: 'semilunar', triquetrum: 'piramidal', triquetral: 'piramidal',
  pisiform: 'pisiforme', trapezium: 'trapecio', trapezoid: 'trapezoide',
  capitate: 'grande', hamate: 'ganchoso', finger: 'dedo', thumb: 'pulgar',
  // lower limb / pelvis
  hip: 'cadera', coxal: 'coxal', ilium: 'ilion', iliac: 'ilíaca', ischium: 'isquion',
  ischial: 'isquiática', pubis: 'pubis', pubic: 'púbico', acetabulum: 'acetábulo',
  acetabular: 'acetabular', labrum: 'labrum', obturator: 'obturador', inguinal: 'inguinal',
  perineum: 'periné', pelvis: 'pelvis', pelvic: 'pélvica',
  femur: 'fémur', femoral: 'femoral', patella: 'rótula', patellar: 'rotuliano',
  tibia: 'tibia', tibial: 'tibial', fibula: 'peroné', fibular: 'peroneo',
  tarsal: 'tarsiano', metatarsal: 'metatarsiano', talus: 'astrágalo', calcaneus: 'calcáneo',
  calcaneal: 'calcáneo', navicular: 'navicular', cuboid: 'cuboides', cuneiform: 'cuneiforme',
  toe: 'dedo del pie', foot: 'pie', wrist: 'muñeca', ankle: 'tobillo', knee: 'rodilla',
  elbow: 'codo', shoulder: 'hombro',
  // descriptors
  anterior: 'anterior', posterior: 'posterior', superior: 'superior', inferior: 'inferior',
  lateral: 'lateral', medial: 'medial', transverse: 'transverso', longitudinal: 'longitudinal',
  oblique: 'oblicuo', deep: 'profundo', superficial: 'superficial', great: 'mayor',
  greater: 'mayor', lesser: 'menor', major: 'mayor', minor: 'menor', common: 'común',
  proper: 'propio', proximal: 'proximal', distal: 'distal', middle: 'medio',
  external: 'externo', internal: 'interno', articular: 'articular', body: 'cuerpo',
  head: 'cabeza', neck: 'cuello', shaft: 'diáfisis', cavity: 'cavidad',
  // connectors
  of: 'de', the: '', and: 'y', to: 'a', for: 'para', in: 'en',
  // sides (spelled out)
  left: 'izquierdo', right: 'derecho',
}

const isParen = (t: string) => /^\(.*\)$/.test(t)
const ordinal = (t: string) => /^\d+(st|nd|rd|th|d)$/.test(t) ? t.replace(/(st|nd|rd|th|d)$/, '.º') : null
const trTok = (t: string) => (HEAD[t] ?? T[t] ?? ordinal(t) ?? t)

/** Detect side, handling proper separators AND a side letter fused to the last word. */
function splitSide(name: string): [string, Side] {
  if (/(\.r|_r|\sright)$/i.test(name)) return [name.replace(/(\.r|_r|\sright)$/i, ''), 'right']
  if (/(\.l|_l|\sleft)$/i.test(name)) return [name.replace(/(\.l|_l|\sleft)$/i, ''), 'left']
  const toks = name.split(/\s+/)
  const last = toks[toks.length - 1]
  const m = /^([a-z]{3,})([rl])$/i.exec(last)
  if (m) {
    const stem = m[1].toLowerCase()
    if (HEAD[stem] || T[stem]) {            // only de-glue when the stem is a known term
      toks[toks.length - 1] = m[1]
      return [toks.join(' '), m[2].toLowerCase() === 'r' ? 'right' : 'left']
    }
  }
  return [name, 'central']
}

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
const sideSuffix = (s: Side) => s === 'right' ? ' · der.' : s === 'left' ? ' · izq.' : ''

/** Translate a structure node name to a readable Spanish label. */
export function toSpanish(name: string): string {
  const [rawBase, side] = splitSide(name.replace(/_/g, ' ').trim())
  const base = rawBase.replace(/_/g, ' ').trim()
  if (!base) return name + sideSuffix(side)
  const toks = base.split(/\s+/)
  const words = toks.filter(t => !isParen(t))
  const parens = toks.filter(isParen)
  const lastWord = words[words.length - 1]?.toLowerCase()
  let out: string
  if (lastWord && HEAD[lastWord] && words.length > 1 && !words.map(w => w.toLowerCase()).includes('of')) {
    const mods = words.slice(0, -1).map(w => trTok(w.toLowerCase())).filter(Boolean)
    out = [HEAD[lastWord], ...mods].join(' ')
  } else {
    out = words.map(w => trTok(w.toLowerCase())).filter(Boolean).join(' ')
  }
  return cap([out, ...parens].join(' ').trim()) + sideSuffix(side)
}

export interface StructureInfo { name: string; clean: string; es: string; side: Side; group: string }

/** Build the grouped structure model from a list of node names. */
export function buildStructures(names: string[]) {
  const seen = new Set<string>()
  const items: StructureInfo[] = []
  for (const name of names) {
    if (!name || seen.has(name)) continue
    seen.add(name)
    items.push({ name, clean: cleanName(name), es: toSpanish(name), side: sideOf(name), group: groupOf(name) })
  }
  // group order follows STRUCTURE_GROUPS, then 'otros'
  const order = [...STRUCTURE_GROUPS.map(g => g.id), 'otros']
  const groups = order
    .map(id => ({ id, label: GROUP_LABEL[id], items: items.filter(i => i.group === id) }))
    .filter(g => g.items.length > 0)
  const rightCount = items.filter(i => i.side === 'right').length
  const leftCount = items.filter(i => i.side === 'left').length
  // Mirrorable when the model is modeled mostly on the right side.
  const bilateral = rightCount > 0 && rightCount > leftCount
  return { items, groups, bilateral }
}
