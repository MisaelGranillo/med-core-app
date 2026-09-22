export type BlockType =
  | 'paragraph'
  | 'list'
  | 'table'
  | 'formula'
  | 'note'
  | 'keypoints'
  | 'steps'
  | 'comparison'
  | 'definition'
  | 'correlacion'
  | 'image'

export interface TableData {
  headers: string[]
  rows: string[][]
}

export interface ComparisonSide {
  title: string
  items: string[]
  color?: string
}

export interface ContentBlock {
  type: BlockType
  title?: string
  content?: string
  items?: string[]
  data?: TableData
  formula?: string
  description?: string
  steps?: string[]
  left?: ComparisonSide
  right?: ComparisonSide
  // bloque 'correlacion': callout de correlación clínica / dato de interés.
  // Reutiliza `title` (encabezado) y `content` (cuerpo).
  variant?: 'clinica' | 'dato' | 'mnemotecnia' | 'historia'
  // bloque 'image': figura ilustrativa de NIAID NIH BioART Source. `src` es una
  // ruta bajo /public; `sourceUrl`/`license` determinan el crédito por imagen
  // (dominio público o CC BY 4.0). `credit` queda como nota opcional.
  src?: string
  alt?: string
  caption?: string
  credit?: string
  source?: 'bioart'
  sourceUrl?: string
  license?: 'pd' | 'ccby'
}

export interface Section {
  id: string
  number: number
  title: string
  blocks: ContentBlock[]
  keyTerms?: string[]
}

// Categoría temática con la que se agrupan los temas en /estudio (independiente
// del colorKey, que es solo de estilo). Lista controlada y extensible.
export type TopicCategoria =
  | 'Anatomía general'
  | 'Osteología'
  | 'Artrología'
  | 'Miología'
  | 'Esplacnología'
  | 'Neuroanatomía'
  | 'Aparatos y sistemas'
  | 'Genética'
  | 'Histología'
  | 'Terminología médica'
  | 'Gramática médica'
  | 'Comunicación clínica'
  | 'Probabilidad'
  | 'Estadística'

export interface Topic {
  id: string
  title: string
  subtitle: string
  colorKey: TopicColorKey
  categoria: TopicCategoria
  emoji: string
  sections: Section[]
  keyPoints: string[]
  // Ilustración de cabecera del tema (distinta del `imagePath` del Atlas).
  // De NIAID NIH BioART Source; `sourceUrl`/`license` determinan el crédito.
  illustration?: {
    src: string
    alt: string
    credit: string
    source?: 'bioart'
    sourceUrl?: string
    license?: 'pd' | 'ccby'
  }
}

export type TopicColorKey =
  | 'digestivo'
  | 'urinario'
  | 'reproductor'
  | 'circulatorio'
  | 'respiratorio'
  | 'locomotor'
  | 'nervioso'
  | 'aritmetica'
  | 'algebra'
  | 'probabilidad'
  | 'estadDesc'
  | 'estadInf'
  | 'comunicacion'
  | 'lectoescritura'
  | 'gramatica'
  | 'redaccion'
  | 'lenguaje'
  | 'anatomiaGeneral'
  | 'osteologia'
  | 'artrologia'
  | 'miologia'
  | 'genetica'
  | 'histologia'

export interface Module {
  id: string
  badge: string
  title: string
  subtitle: string
  emoji: string
  topicIds: string[]
}

export type QuestionType = 'multiple-choice' | 'true-false'

export interface Question {
  id: string
  topicId: string
  question: string
  type: QuestionType
  options: string[]
  correctIndex: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

export interface QuizAttempt {
  date: string
  score: number
  total: number
}

export interface TopicProgress {
  topicId: string
  sectionsRead: string[]
  quizAttempts: QuizAttempt[]
  lastVisited: string
}

export interface SearchResult {
  topicId: string
  topicTitle: string
  sectionId: string
  sectionTitle: string
  excerpt: string
  score?: number
}

export interface TopicColors {
  bg: string
  bgLight: string
  border: string
  text: string
  badge: string
  button: string
  dot: string
  ring: string
  gradientFrom: string
  gradientTo: string
  headerBg: string
}
