/* Categorías temáticas de /estudio.
 *
 * Los temas se agrupan por `categoria` (no por módulo). El orden y el acento de
 * cada categoría viven aquí. El `colorKey` es solo un acento visual reutilizado
 * de TOPIC_COLORS; no cambia el color del propio tema. */

import type { TopicCategoria, TopicColorKey } from '../types'

export const CATEGORIA_ORDER: TopicCategoria[] = [
  'Anatomía general',
  'Osteología',
  'Artrología',
  'Miología',
  'Esplacnología',
  'Neuroanatomía',
  'Aparatos y sistemas',
  'Genética',
  'Histología',
  'Terminología médica',
  'Gramática médica',
  'Comunicación clínica',
  'Probabilidad',
  'Estadística',
]

export const CATEGORIA_META: Record<TopicCategoria, { emoji: string; colorKey: TopicColorKey }> = {
  'Anatomía general': { emoji: '🧭', colorKey: 'anatomiaGeneral' },
  'Osteología': { emoji: '🦴', colorKey: 'osteologia' },
  'Artrología': { emoji: '🔗', colorKey: 'artrologia' },
  'Miología': { emoji: '💪', colorKey: 'locomotor' },
  'Esplacnología': { emoji: '🫀', colorKey: 'digestivo' },
  'Neuroanatomía': { emoji: '🧠', colorKey: 'nervioso' },
  'Aparatos y sistemas': { emoji: '🫁', colorKey: 'respiratorio' },
  'Genética': { emoji: '🧬', colorKey: 'genetica' },
  'Histología': { emoji: '🔬', colorKey: 'histologia' },
  'Terminología médica': { emoji: '🔤', colorKey: 'gramatica' },
  'Gramática médica': { emoji: '✍️', colorKey: 'redaccion' },
  'Comunicación clínica': { emoji: '🩺', colorKey: 'comunicacion' },
  'Probabilidad': { emoji: '🎲', colorKey: 'probabilidad' },
  'Estadística': { emoji: '📊', colorKey: 'estadDesc' },
}
