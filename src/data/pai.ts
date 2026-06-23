/*
 * pai.ts — Módulos oficiales del PAI (Programa de Apoyo al Ingreso)
 * LMGC, Universidad de la Salud, CDMX
 *
 * Nombres tomados verbatim de la plataforma UNISA:
 * https://app.unisa.cdmx.gob.mx/unisapai/course/view.php?id=3
 *
 * CÓMO AGREGAR UN NUEVO MÓDULO:
 *   1. Añade una entrada a paiModulos con los campos requeridos.
 *   2. Crea /src/data/pai-content/{slug}.ts exportando PaiTema[].
 *   3. Registra el slug en paiContentLoaders en src/pages/PAITema.tsx.
 *   No se requieren cambios de código en rutas ni componentes de layout.
 */

export type PaiStatus = 'disponible' | 'en-construccion' | 'bloqueado'

export interface PaiModulo {
  orden: number
  nombre: string              // Display name — NUNCA incluir número
  slug: string                // URL slug
  icono: string               // Emoji representativo
  status: PaiStatus
  temas: number | null        // null si no hay contenido
  relacionado_visor: boolean  // si muestra link al visor anatómico
  unisa_url: string           // URL a la sección en plataforma UNISA
  descripcion: string         // Descripción breve para la card
  cardBg: string              // Background color for home page card
  cardColor: string           // Text/accent color for home page card
  cardAccent: string          // Left-border accent token (clinical blue system)
}

const _paiBase: Omit<PaiModulo, 'cardAccent'>[] = [
  {
    orden: 1,
    nombre: 'MÓDULO — PERFIL DE EGRESO DEL ESTUDIANTE',
    slug: 'perfil-de-egreso',
    icono: '🎓',
    status: 'en-construccion',
    temas: 5,
    relacionado_visor: false,
    unisa_url: 'https://app.unisa.cdmx.gob.mx/unisapai/course/view.php?id=3&section=2',
    descripcion: 'Competencias del egresado LMGC, modelo educativo modular y ABP, determinación social de la salud, APS-I y derecho constitucional a la salud.',
    cardBg: '#dbeafe', cardColor: '#1e3a8a',
  },
  {
    orden: 2,
    nombre: 'MÓDULO — INTRODUCCIÓN A LA SALUD PÚBLICA',
    slug: 'salud-publica',
    icono: '🏥',
    status: 'en-construccion',
    temas: 5,
    relacionado_visor: false,
    unisa_url: 'https://app.unisa.cdmx.gob.mx/unisapai/course/view.php?id=3&section=3',
    descripcion: 'Definición OMS de salud, determinantes sociales, epidemiología básica en México, niveles de prevención y Normas Oficiales Mexicanas relevantes.',
    cardBg: '#d1fae5', cardColor: '#064e3b',
  },
  {
    orden: 3,
    nombre: 'MÓDULO — BASES BIOQUÍMICAS Y FISIOLOGÍA CELULAR',
    slug: 'bioquimica',
    icono: '🔬',
    status: 'disponible',
    temas: 7,
    relacionado_visor: false,
    unisa_url: 'https://app.unisa.cdmx.gob.mx/unisapai/course/view.php?id=3&section=4',
    descripcion: 'Introducción a la bioquímica, estructura celular y organelos, membrana celular, el agua, proteínas y enzimas, bioenergética y macromoléculas.',
    cardBg: '#fef3c7', cardColor: '#78350f',
  },
  {
    orden: 4,
    nombre: 'MÓDULO — APARATOS Y SISTEMAS',
    slug: 'aparatos-y-sistemas',
    icono: '🦴',
    status: 'disponible',
    temas: 7,
    relacionado_visor: true,
    unisa_url: 'https://app.unisa.cdmx.gob.mx/unisapai/course/view.php?id=3&section=5',
    descripcion: 'Sistema locomotor, nervioso, respiratorio, digestivo, urinario, reproductor y circulatorio. Incluye visor anatómico interactivo.',
    cardBg: '#ede9fe', cardColor: '#3730a3',
  },
  {
    orden: 5,
    nombre: 'MÓDULO — COMPRENSIÓN DE LECTURA',
    slug: 'comprension-lectura',
    icono: '📖',
    status: 'disponible',
    temas: 5,
    relacionado_visor: false,
    unisa_url: 'https://app.unisa.cdmx.gob.mx/unisapai/course/view.php?id=3&section=6',
    descripcion: 'Comunicación y lenguaje, lectoescritura, gramática, redacción y usos del lenguaje hablado y escrito en las ciencias de la salud.',
    cardBg: '#fce7f3', cardColor: '#831843',
  },
  {
    orden: 6,
    nombre: 'MÓDULO — INGLÉS BÁSICO PARA EL ÁREA DE LA SALUD',
    slug: 'ingles-medico',
    icono: '🩺',
    status: 'disponible',
    temas: 4,
    relacionado_visor: false,
    unisa_url: 'https://app.unisa.cdmx.gob.mx/unisapai/course/view.php?id=3&section=7',
    descripcion: 'Vocabulario médico básico, instrucciones y etiquetas de medicamentos, formularios de consulta y comprensión de abstracts científicos.',
    cardBg: '#dcfce7', cardColor: '#14532d',
  },
  {
    orden: 7,
    nombre: 'MÓDULO — MATEMÁTICAS Y ESTADÍSTICA',
    slug: 'matematicas',
    icono: '📐',
    status: 'disponible',
    temas: 5,
    relacionado_visor: false,
    unisa_url: 'https://app.unisa.cdmx.gob.mx/unisapai/course/view.php?id=3&section=8',
    descripcion: 'Aritmética, álgebra, probabilidad, estadística descriptiva e inferencial aplicadas a las ciencias de la salud.',
    cardBg: '#ffedd5', cardColor: '#7c2d12',
  },
  {
    orden: 8,
    nombre: 'MÓDULO — BASES DE INVESTIGACIÓN',
    slug: 'investigacion',
    icono: '🔍',
    status: 'disponible',
    temas: 3,
    relacionado_visor: false,
    unisa_url: 'https://app.unisa.cdmx.gob.mx/unisapai/course/view.php?id=3&section=9',
    descripcion: 'De la información al conocimiento, herramientas digitales y terminología médica, método científico y enfoques de investigación.',
    cardBg: '#cffafe', cardColor: '#164e63',
  },
  {
    orden: 9,
    nombre: 'MÓDULO — DIVERSIDAD, MASCULINIDAD Y LENGUAJE INCLUYENTE Y NO SEXISTA',
    slug: 'diversidad',
    icono: '🌈',
    status: 'disponible',
    temas: 5,
    relacionado_visor: false,
    unisa_url: 'https://app.unisa.cdmx.gob.mx/unisapai/course/view.php?id=3&section=10',
    descripcion: 'Diversidad sexual, derechos sexuales y reproductivos, prevención de la violencia, masculinidades y lenguaje inclusivo no sexista.',
    cardBg: '#f3e8ff', cardColor: '#581c87',
  },
]

// Inject the clinical-blue card accent (--card-m1 … --card-m9) by order.
export const paiModulos: PaiModulo[] = _paiBase.map((m, i) => ({
  ...m,
  cardAccent: `var(--card-m${i + 1})`,
}))

// Lookup rápido por slug
export const paiBySlug = Object.fromEntries(paiModulos.map(m => [m.slug, m]))

// Slugs con contenido disponible
export const MODULOS_DISPONIBLES = paiModulos
  .filter(m => m.status === 'disponible')
  .map(m => m.slug)

// Información del módulo PAI para la tarjeta de "Fuente oficial"
export const UNISA_CURSO_URL = 'https://app.unisa.cdmx.gob.mx/unisapai/course/view.php?id=3'
