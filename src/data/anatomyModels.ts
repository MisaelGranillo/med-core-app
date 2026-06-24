/*
 * anatomyModels.ts — single source of truth for the 3D viewer model browser.
 *
 * The viewer uses Option A: AnatomyTOOL's hosted Babylon viewer in an iframe,
 * which loads `3dmodels/{viewerModel}/{viewerModel}.glb` from caskanatomy.info
 * via its ?model= param. `viewerModel` below is the VERIFIED hosted folder name
 * (each returns HTTP 200). `glb` is kept for reference / a possible future
 * self-hosted renderer.
 *
 * status 'available'   → renders in the hosted viewer (verified).
 * status 'unavailable' → AnatomyTOOL has no hosted model and no public GLB
 *                        download at any known slug (pelvis-perineum,
 *                        muscles-thorax-abdomen-back). Shown but disabled.
 */

export type AnatomyRegionId =
  | 'general' | 'cabeza' | 'tronco' | 'pelvis'
  | 'miembro-superior' | 'miembro-inferior'

export interface AnatomyModel {
  id: string
  nombre: string
  nombre_en: string
  region: AnatomyRegionId
  glb: string
  viewerModel: string | null   // hosted ?model= folder (null if unavailable)
  status: 'available' | 'unavailable'
  description: string
}

export const anatomyModels: AnatomyModel[] = [
  // ── GENERAL ──────────────────────────────
  {
    id: 'skeleton',
    nombre: 'Esqueleto completo',
    nombre_en: 'Skeleton',
    region: 'general',
    glb: '/models/overview-skeleton.glb',
    viewerModel: 'overview-skeleton',
    status: 'available',
    description: 'Vista completa del esqueleto humano con nomenclatura en inglés.',
  },
  {
    id: 'vertebrae',
    nombre: 'Vértebras típicas',
    nombre_en: 'Typical vertebrae',
    region: 'general',
    glb: '/models/vertebrae.glb',
    viewerModel: 'vertebrae',
    status: 'available',
    description: 'Vértebras cervicales, torácicas y lumbares con procesos y articulaciones.',
  },

  // ── CABEZA ───────────────────────────────
  {
    id: 'colored-skull',
    nombre: 'Cráneo coloreado',
    nombre_en: 'Coloured skull',
    region: 'cabeza',
    glb: '/models/overview-colored-skull.glb',
    viewerModel: 'overview-colored-skull',
    status: 'available',
    description: 'Cráneo con huesos diferenciados por colores para facilitar la identificación.',
  },
  {
    id: 'exploded-skull',
    nombre: 'Cráneo vista explosionada',
    nombre_en: 'Exploded view skull',
    region: 'cabeza',
    glb: '/models/exploded-skull.glb',
    viewerModel: 'exploded-skull',
    status: 'available',
    description: 'Vista explosionada del cráneo mostrando cada hueso separado.',
  },
  {
    id: 'colored-skull-base',
    nombre: 'Base del cráneo coloreada',
    nombre_en: 'Coloured skull base',
    region: 'cabeza',
    glb: '/models/colored-skull-base.glb',
    viewerModel: 'colored-skull-base',
    status: 'available',
    description: 'Base craneal con fosas anterior, media y posterior diferenciadas por color.',
  },

  // ── TRONCO ───────────────────────────────
  {
    id: 'muscles-trunk',
    nombre: 'Músculos del tronco',
    nombre_en: 'Muscles of thorax, abdomen and back',
    region: 'tronco',
    glb: '/models/muscles-thorax-abdomen-back.glb',
    viewerModel: null,
    status: 'unavailable',
    description: 'Músculos del tórax, abdomen y espalda. (No disponible aún en la fuente Open 3D Model.)',
  },
  {
    id: 'inguinal-canal',
    nombre: 'Canal inguinal',
    nombre_en: 'Inguinal canal',
    region: 'tronco',
    glb: '/models/inguinal-canal.glb',
    viewerModel: 'inguinal-canal',
    status: 'available',
    description: 'Anatomía del canal inguinal, estructuras circundantes y su contenido.',
  },

  // ── PELVIS ───────────────────────────────
  {
    id: 'pelvis-perineum',
    nombre: 'Pelvis y periné',
    nombre_en: 'Pelvis and perineum',
    region: 'pelvis',
    glb: '/models/pelvis-perineum.glb',
    viewerModel: null,
    status: 'unavailable',
    description: 'Suelo pélvico, diafragma pélvico y estructuras del periné. (No disponible aún en la fuente Open 3D Model.)',
  },

  // ── MIEMBRO SUPERIOR ─────────────────────
  {
    id: 'upper-limb',
    nombre: 'Miembro superior completo',
    nombre_en: 'Upper limb, complete',
    region: 'miembro-superior',
    glb: '/models/upper-limb.glb',
    viewerModel: 'upper-limb',
    status: 'available',
    description: 'Miembro superior completo: cintura escapular, brazo, antebrazo y mano.',
  },
  {
    id: 'hand',
    nombre: 'Mano completa',
    nombre_en: 'Hand, complete',
    region: 'miembro-superior',
    glb: '/models/hand.glb',
    viewerModel: 'hand',
    status: 'available',
    description: 'Anatomía completa de la mano: carpo, metacarpo, falanges y articulaciones.',
  },

  // ── MIEMBRO INFERIOR ─────────────────────
  {
    id: 'lower-limb',
    nombre: 'Miembro inferior completo',
    nombre_en: 'Lower limb, complete',
    region: 'miembro-inferior',
    glb: '/models/lower-limb.glb',
    viewerModel: 'lower-limb',
    status: 'available',
    description: 'Miembro inferior completo: cintura pélvica, muslo, pierna y pie.',
  },
]

export const anatomyRegions: { id: 'all' | AnatomyRegionId; nombre: string }[] = [
  { id: 'all',              nombre: 'Todos' },
  { id: 'general',          nombre: 'General' },
  { id: 'cabeza',           nombre: 'Cabeza' },
  { id: 'tronco',           nombre: 'Tronco' },
  { id: 'pelvis',           nombre: 'Pelvis' },
  { id: 'miembro-superior', nombre: 'Miembro superior' },
  { id: 'miembro-inferior', nombre: 'Miembro inferior' },
]

export const anatomyModelById = Object.fromEntries(anatomyModels.map(m => [m.id, m]))
export const availableModelCount = anatomyModels.filter(m => m.status === 'available').length

/* Section E — PAI "Aparatos y Sistemas" topic → suggested models (by tema id).
 * Ordered by preference; the viewer link uses the first AVAILABLE model so
 * every topic links somewhere real even while 2 source models are pending. */
export const temaModelSuggestions: Record<string, string[]> = {
  'ap-1': ['skeleton', 'vertebrae', 'upper-limb', 'lower-limb', 'hand'], // Locomotor
  'ap-2': ['colored-skull', 'exploded-skull', 'colored-skull-base'],     // Nervioso
  'ap-3': ['muscles-trunk', 'skeleton'],                                 // Respiratorio
  'ap-4': ['muscles-trunk', 'inguinal-canal'],                           // Digestivo
  'ap-5': ['pelvis-perineum', 'skeleton'],                               // Urinario
  'ap-6': ['pelvis-perineum', 'skeleton'],                               // Reproductor
  'ap-7': ['skeleton', 'muscles-trunk'],                                 // Circulatorio
}

/** Primary (first available) model id for a tema, or 'skeleton' as fallback. */
export function primaryModelForTema(temaId: string): string {
  const list = temaModelSuggestions[temaId] ?? []
  const avail = list.find(id => anatomyModelById[id]?.status === 'available')
  return avail ?? 'skeleton'
}
