/*
 * pai.ts — Guías de estudio de MedCore (sección "Estudio").
 *
 * Origen: cosechado del antiguo PAI (Programa de Apoyo al Ingreso, UNISA).
 * El andamiaje de admisión se retiró; el CONTENIDO se conservó y se
 * reorientó a materias UAD y a habilidades de estudio agnósticas a la
 * escuela. Los módulos de admisión UNISA (Perfil de Egreso, Diversidad) y
 * las URLs de la plataforma UNISA quedaron congelados en el tag
 * v1.0-unisa-lmgc.
 *
 * CÓMO AGREGAR UNA GUÍA:
 *   1. Añade una entrada a _estudioBase con los campos requeridos.
 *   2. Crea /src/data/pai-content/{slug}.ts exportando PaiTema[].
 *   3. Registra el slug en contentLoaders (src/hooks/usePaiContent.ts).
 */

export type PaiStatus = 'disponible' | 'en-construccion' | 'bloqueado'

export interface PaiModulo {
  orden: number
  nombre: string              // Nombre de la guía
  slug: string                // URL slug
  icono: string               // Emoji representativo
  status: PaiStatus
  temas: number | null        // null si no hay contenido
  relacionado_visor: boolean  // si muestra link al visor anatómico
  uadObjetivo: string         // materia(s) UAD o área a la que se orienta
  descripcion: string         // Descripción breve para la card
  cardBg: string
  cardColor: string
  cardAccent: string
}

const _estudioBase: Omit<PaiModulo, 'cardAccent'>[] = [
  {
    orden: 1,
    nombre: 'Bases Bioquímicas y Fisiología Celular',
    slug: 'bioquimica',
    icono: '🔬',
    status: 'disponible',
    temas: 7,
    relacionado_visor: false,
    uadObjetivo: 'Bioquímica I y II (1º–2º)',
    descripcion: 'Introducción a la bioquímica, estructura celular y organelos, membrana celular, el agua, proteínas y enzimas, bioenergética y macromoléculas.',
    cardBg: '#fef3c7', cardColor: '#78350f',
  },
  {
    orden: 2,
    nombre: 'Salud Pública y Epidemiología',
    slug: 'salud-publica',
    icono: '🏥',
    status: 'en-construccion',
    temas: 5,
    relacionado_visor: false,
    uadObjetivo: 'Salud Pública (4º) · Epidemiología y Bioestadística (3º)',
    descripcion: 'Definición OMS de salud, determinantes sociales, epidemiología básica en México, niveles de prevención y Normas Oficiales Mexicanas relevantes.',
    cardBg: '#d1fae5', cardColor: '#064e3b',
  },
  {
    orden: 3,
    nombre: 'Aparatos y Sistemas',
    slug: 'aparatos-y-sistemas',
    icono: '🦴',
    status: 'disponible',
    temas: 7,
    relacionado_visor: true,
    uadObjetivo: 'Anatomía y Disección I–II (1º–2º) · Fisiología I–II (3º–4º)',
    descripcion: 'Sistema locomotor, nervioso, respiratorio, digestivo, urinario, reproductor y circulatorio. Incluye visor anatómico interactivo.',
    cardBg: '#ede9fe', cardColor: '#3730a3',
  },
  {
    orden: 4,
    nombre: 'Comprensión y Redacción',
    slug: 'comprension-lectura',
    icono: '📖',
    status: 'disponible',
    temas: 5,
    relacionado_visor: false,
    uadObjetivo: 'Habilidades de estudio (agnóstico a la escuela)',
    descripcion: 'Comunicación y lenguaje, lectoescritura, gramática, redacción y usos del lenguaje hablado y escrito en las ciencias de la salud.',
    cardBg: '#fce7f3', cardColor: '#831843',
  },
  {
    orden: 5,
    nombre: 'Inglés Médico',
    slug: 'ingles-medico',
    icono: '🩺',
    status: 'disponible',
    temas: 4,
    relacionado_visor: false,
    uadObjetivo: 'Inglés Médico I–III (1º–3º)',
    descripcion: 'Vocabulario médico básico, instrucciones y etiquetas de medicamentos, formularios de consulta y comprensión de abstracts científicos.',
    cardBg: '#dcfce7', cardColor: '#14532d',
  },
  {
    orden: 6,
    nombre: 'Bioestadística',
    slug: 'matematicas',
    icono: '📊',
    status: 'disponible',
    temas: 3,
    relacionado_visor: false,
    uadObjetivo: 'Epidemiología y Bioestadística (3º)',
    descripcion: 'Probabilidad, estadística descriptiva e inferencial aplicadas a las ciencias de la salud.',
    cardBg: '#ffedd5', cardColor: '#7c2d12',
  },
  {
    orden: 7,
    nombre: 'Bases de Investigación',
    slug: 'investigacion',
    icono: '🔍',
    status: 'disponible',
    temas: 3,
    relacionado_visor: false,
    uadObjetivo: 'Metodología de la Investigación (4º) · Medicina Basada en Evidencias (5º)',
    descripcion: 'De la información al conocimiento, herramientas digitales y terminología médica, método científico y enfoques de investigación.',
    cardBg: '#cffafe', cardColor: '#164e63',
  },
]

// Inject the clinical-blue card accent (--card-m1 … --card-m7) by order.
export const paiModulos: PaiModulo[] = _estudioBase.map((m, i) => ({
  ...m,
  cardAccent: `var(--card-m${i + 1})`,
}))

// Lookup rápido por slug
export const paiBySlug = Object.fromEntries(paiModulos.map(m => [m.slug, m]))

// Slugs con contenido disponible
export const MODULOS_DISPONIBLES = paiModulos
  .filter(m => m.status === 'disponible')
  .map(m => m.slug)
