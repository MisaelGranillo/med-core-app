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

export interface StructureInfo { name: string; clean: string; side: Side; group: string }

/** Build the grouped structure model from a list of node names. */
export function buildStructures(names: string[]) {
  const seen = new Set<string>()
  const items: StructureInfo[] = []
  for (const name of names) {
    if (!name || seen.has(name)) continue
    seen.add(name)
    items.push({ name, clean: cleanName(name), side: sideOf(name), group: groupOf(name) })
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
