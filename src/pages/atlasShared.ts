/* Piezas compartidas por la cuadrícula del Atlas y la página de cada póster. */
import type { AtlasTopic } from '../data/atlas-topics'

export type AtlasCategory = AtlasTopic['category']

/* Orden fijo de las materias en el Atlas (como en el plan de estudios). */
export const ATLAS_CATEGORY_ORDER: AtlasCategory[] = ['anatomia', 'histologia', 'genetica', 'bioquimica', 'celular', 'fisiologia', 'panorama']

export const ATLAS_CATEGORY_LABELS: Record<AtlasCategory, string> = {
  anatomia: 'Anatomía',
  histologia: 'Histología',
  genetica: 'Genética',
  bioquimica: 'Bioquímica',
  celular: 'Biología celular',
  fisiologia: 'Fisiología',
  panorama: 'Panorama de sistemas',
}

export const MASTERY_LABELS = {
  0: 'Sin iniciar',
  1: 'Visto',
  2: 'En progreso',
  3: 'Dominado',
} as const

/* Miniatura de 480 px (scripts/atlas-thumbs.py). */
export const atlasThumb = (path: string) =>
  path.replace(/^\/atlas\/([^/]+)\.(webp|png|jpe?g)$/i, '/atlas/thumbs/$1.webp')
