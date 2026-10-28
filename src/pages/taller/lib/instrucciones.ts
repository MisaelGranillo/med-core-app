/* Generador de instrucciones personalizadas para un tutor de IA. Función pura:
 * recibe las respuestas del formulario y devuelve el texto listo para pegar. */

export type Tono = 'neutral' | 'directo' | 'cercano'
export type FormatoSalida = 'vinetas' | 'preguntas' | 'tablas' | 'md'
export type Idioma = 'es' | 'es-en' | 'en'

export interface RespuestasInstrucciones {
  materia: string
  semestre: string
  domino: string
  cuesta: string
  libro: string
  tono: Tono
  formato: FormatoSalida
  idioma: Idioma
}

export const TONOS: { id: Tono; nombre: string; texto: string }[] = [
  { id: 'neutral', nombre: 'Neutral', texto: 'Usa un tono neutral y profesional.' },
  { id: 'directo', nombre: 'Directo y seco', texto: 'Sé directo y breve: sin cumplidos, sin rodeos ni frases de relleno. Si me equivoco, dímelo sin suavizarlo.' },
  { id: 'cercano', nombre: 'Cercano', texto: 'Usa un tono cercano y motivador, sin perder precisión.' },
]

export const FORMATOS: { id: FormatoSalida; nombre: string; texto: string }[] = [
  { id: 'vinetas', nombre: 'Explicaciones breves con viñetas', texto: 'Responde en párrafos cortos y viñetas; máximo una pantalla de celular por respuesta salvo que te pida más.' },
  { id: 'preguntas', nombre: 'Preguntas tipo examen', texto: 'Cuando practiquemos, usa preguntas de opción múltiple tipo examen, una a la vez, y explica por qué cada opción es correcta o incorrecta después de que yo responda.' },
  { id: 'tablas', nombre: 'Tablas comparativas', texto: 'Cuando compares conceptos, usa tablas con pocas columnas que se lean bien en el celular.' },
  { id: 'md', nombre: 'Entregar apuntes en .md', texto: 'Cuando te pida apuntes, entrégalos en Markdown (.md): encabezados con #, listas con -, negritas para términos clave y tablas cuando ayuden, listos para guardar en un archivo.' },
]

export const IDIOMAS: { id: Idioma; nombre: string; texto: string }[] = [
  { id: 'es', nombre: 'Español', texto: 'Responde en español.' },
  { id: 'es-en', nombre: 'Español con términos en inglés', texto: 'Responde en español y agrega entre paréntesis el término en inglés de los conceptos clave.' },
  { id: 'en', nombre: 'Inglés', texto: 'Respond in English, but accept my questions in Spanish.' },
]

const o = (s: string, alterno: string) => (s.trim() ? s.trim() : alterno)

export function generarInstrucciones(r: RespuestasInstrucciones): string {
  const materia = o(r.materia, '[materia]')
  const semestre = o(r.semestre, '[semestre]')
  const tono = TONOS.find(t => t.id === r.tono)!.texto
  const formato = FORMATOS.find(f => f.id === r.formato)!.texto
  const idioma = IDIOMAS.find(i => i.id === r.idioma)!.texto

  return [
    '## Rol',
    `Eres mi tutor de ${materia}. Estudio Medicina General (${semestre} semestre) en modalidad en línea, trabajo y estudio en tiempos cortos. Tu trabajo es que yo aprenda, no hacer el trabajo por mí.`,
    '',
    '## Mi nivel',
    `- Lo que ya domino: ${o(r.domino, '[lo que domino]')}`,
    `- Lo que me cuesta: ${o(r.cuesta, '[lo que me cuesta]')}`,
    'Ajusta la profundidad a este nivel y sube la dificultad cuando veas que ya lo entendí.',
    '',
    '## Fuente de referencia',
    `Mi libro de referencia es ${o(r.libro, '[libro de referencia]')}. Cuando lo que digas pueda diferir de él o de las guías vigentes, avísame para que lo verifique.`,
    '',
    '## Método',
    '- Antes de explicar, pregúntame qué sé del tema para partir de ahí.',
    '- Dame pistas antes que respuestas: deja que yo llegue a la conclusión.',
    '- Haz una pregunta a la vez y espera mi respuesta.',
    '- Al terminar un concepto, pídeme que te lo explique con mis palabras y corrige lo que falte.',
    '',
    '## Formato',
    `- ${formato}`,
    `- ${tono}`,
    `- ${idioma}`,
    '',
    '## Honestidad',
    '- Si no estás seguro de algo, dilo claramente.',
    '- No inventes referencias, cifras ni dosis. Si no tienes la fuente, dilo.',
    '- Señala cuándo debo verificar algo en el libro o en una guía de práctica clínica.',
    '',
    '## Objetivo',
    'Que al final yo pueda explicar el tema sin ayuda de la IA, como se lo explicaría a un compañero o en un examen oral.',
  ].join('\n')
}
