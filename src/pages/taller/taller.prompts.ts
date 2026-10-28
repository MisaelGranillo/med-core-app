/* Biblioteca de prompts del taller (/taller/prompts).
 *
 * Contenido editable sin tocar la interfaz. Los campos entre corchetes
 * ([tema], [materia]…) se convierten en casillas que el usuario llena antes
 * de copiar; el mismo nombre de campo comparte valor entre prompts. */

export interface Prompt {
  id: string
  titulo: string
  /** Para qué sirve, en una línea. */
  uso: string
  texto: string
}

export interface CategoriaPrompts {
  id: string
  nombre: string
  prompts: Prompt[]
}

export const CATEGORIAS_PROMPTS: CategoriaPrompts[] = [
  {
    id: 'diagnosticar',
    nombre: 'Diagnosticar lo que sé',
    prompts: [
      {
        id: 'diagnostico-inicial',
        titulo: 'Diagnóstico antes de estudiar',
        uso: 'Para saber qué repasar primero.',
        texto: 'Voy a estudiar [tema] de [materia]. Antes de explicarme nada, hazme 5 preguntas de dificultad creciente para diagnosticar qué sé. Hazlas una por una y espera mi respuesta. Al final dime qué subtemas domino, cuáles tengo flojos y en qué orden me conviene estudiarlos.',
      },
      {
        id: 'mapa-huecos',
        titulo: 'Mapa de huecos',
        uso: 'Para ver el tema completo y marcar lo que falta.',
        texto: 'Dame la lista de subtemas que un estudiante de Medicina de [semestre] semestre debe dominar sobre [tema]. Preséntala como lista numerada sin explicar nada. Después te diré cuáles sé y cuáles no, y armamos un plan de 3 sesiones de [minutos] minutos.',
      },
    ],
  },
  {
    id: 'evaluar',
    nombre: 'Evaluar mi explicación',
    prompts: [
      {
        id: 'tecnica-feynman',
        titulo: 'Explícalo como a un compañero',
        uso: 'Para comprobar si de verdad lo entendiste.',
        texto: 'Te voy a explicar [tema] con mis palabras, como se lo explicaría a un compañero de primer semestre. Evalúa mi explicación: señala errores, conceptos que faltan y partes vagas. No me des la explicación correcta todavía: primero hazme preguntas para que yo corrija.\n\nMi explicación: [mi explicación]',
      },
      {
        id: 'rubrica',
        titulo: 'Calificación con rúbrica',
        uso: 'Para una respuesta de desarrollo o un caso.',
        texto: 'Califica mi respuesta a la pregunta «[pregunta]» del 1 al 10 con una rúbrica de 4 criterios: exactitud, completitud, uso de terminología médica y claridad. Explica cada criterio en una línea y dime qué cambiar para llegar a 10.\n\nMi respuesta: [mi respuesta]',
      },
    ],
  },
  {
    id: 'examen',
    nombre: 'Practicar tipo examen',
    prompts: [
      {
        id: 'opcion-multiple',
        titulo: 'Preguntas de opción múltiple',
        uso: 'Para practicar con el formato del examen.',
        texto: 'Hazme [número] preguntas de opción múltiple sobre [tema] de [materia], con 4 opciones y una sola correcta, al nivel de un examen parcial de Medicina. Una pregunta a la vez. Después de que responda, explica por qué la correcta es correcta y por qué cada distractor es incorrecto. Al final dame mi puntaje y los subtemas a repasar.',
      },
      {
        id: 'repaso-flash',
        titulo: 'Repaso relámpago de 10 minutos',
        uso: 'Para un hueco corto del día.',
        texto: 'Tengo 10 minutos. Hazme preguntas rápidas de respuesta corta sobre [tema], una a la vez, empezando fácil y subiendo la dificultad. Si fallo dos seguidas, regresa a una más fácil. No expliques de más: corrige en una línea y sigue.',
      },
    ],
  },
  {
    id: 'comparar',
    nombre: 'Comparar conceptos',
    prompts: [
      {
        id: 'tabla-comparativa',
        titulo: 'Tabla comparativa',
        uso: 'Para conceptos que se confunden.',
        texto: 'Compara [concepto A] y [concepto B] en una tabla con estos criterios: definición, localización o mecanismo, características distintivas, ejemplo clínico y cómo distinguirlos en un examen. Usa pocas columnas para que se lea en el celular. Después hazme 3 preguntas para comprobar que ya no los confundo.',
      },
      {
        id: 'diferencias-clave',
        titulo: 'La diferencia que se pregunta',
        uso: 'Para ir directo a lo que confunde.',
        texto: '¿Cuál es la diferencia clave entre [concepto A] y [concepto B] que suele aparecer en exámenes de Medicina? Dímela en máximo 3 líneas y dame una regla mnemotécnica si existe una conocida. Si no estás seguro de la fuente, dilo.',
      },
    ],
  },
  {
    id: 'caso',
    nombre: 'Caso clínico',
    prompts: [
      {
        id: 'caso-guiado',
        titulo: 'Caso clínico guiado',
        uso: 'Para aplicar la teoría a un paciente.',
        texto: 'Preséntame un caso clínico breve relacionado con [tema] de [materia], adecuado para [semestre] semestre. Dame primero solo el motivo de consulta y deja que yo pida la historia clínica, la exploración y los estudios que considere necesarios. Al final pídeme el diagnóstico y explícame el razonamiento correcto, relacionándolo con la ciencia básica del tema.',
      },
      {
        id: 'caso-de-ciencias-basicas',
        titulo: 'Del caso a la ciencia básica',
        uso: 'Para ver para qué sirve lo que estudias.',
        texto: 'Dame un ejemplo clínico real (sin datos de pacientes) donde entender [tema] cambie una decisión médica. Explica el vínculo en 5 líneas y termina con una pregunta para que yo lo explique de vuelta.',
      },
    ],
  },
  {
    id: 'apuntes-md',
    nombre: 'Convertir a apuntes .md',
    prompts: [
      {
        id: 'apunte-desde-texto',
        titulo: 'De mi texto a apunte .md',
        uso: 'Para ordenar lo que escribiste o fotografiaste.',
        texto: 'Convierte el siguiente texto en un apunte en Markdown (.md) sobre [tema]: título con #, secciones con ##, listas con -, términos clave en **negritas** y una tabla si ayuda a comparar. No agregues información que no esté en el texto; si algo parece incorrecto, márcalo con «(verificar)». Al final agrega 5 preguntas de repaso.\n\nTexto: [texto]',
      },
      {
        id: 'resumen-capitulo',
        titulo: 'Resumen de capítulo en .md',
        uso: 'Para el capítulo del libro de la semana.',
        texto: 'Te comparto el capítulo [capítulo] de [libro]. Hazme un resumen en Markdown (.md) con: ideas principales, conceptos para memorizar en una tabla, 3 correlaciones clínicas y 5 preguntas de repaso. Cita la página o sección de donde sale cada idea. No inventes datos que no estén en el texto.',
      },
    ],
  },
  {
    id: 'transcripcion',
    nombre: 'Transcripción de clase a apuntes',
    prompts: [
      {
        id: 'transcripcion-apuntes',
        titulo: 'De la transcripción a apuntes',
        uso: 'Para la grabación de una clase.',
        texto: 'Te comparto la transcripción de la clase de [materia] sobre [tema]. Conviértela en apuntes en Markdown (.md): ordena por temas (no por orden de la clase), elimina muletillas y repeticiones, destaca en una sección aparte todo lo que el profesor dijo que viene en el examen o que es importante, y marca con «(verificar)» cualquier dato que parezca dudoso. No agregues información que no esté en la transcripción.\n\nTranscripción: [transcripción]',
      },
      {
        id: 'transcripcion-pendientes',
        titulo: 'Tareas y fechas de la clase',
        uso: 'Para no perder avisos del profesor.',
        texto: 'Revisa esta transcripción de la clase de [materia] y extrae en una lista: tareas, fechas de entrega, temas de examen, lecturas indicadas y cualquier aviso administrativo. Si no hay alguno de estos, dilo. Cita el minuto aproximado si aparece en la transcripción.\n\nTranscripción: [transcripción]',
      },
    ],
  },
  {
    id: 'gemini-notebook',
    nombre: 'Gemini Notebook (quiz, flashcards, audio)',
    prompts: [
      {
        id: 'notebook-quiz',
        titulo: 'Quiz a partir de mis fuentes',
        uso: 'Escríbelo en el chat del cuaderno de la materia.',
        texto: 'Usando solo las fuentes de este cuaderno, hazme un quiz de [número] preguntas de opción múltiple sobre [tema], al nivel de un examen de Medicina. Indica en qué fuente está la respuesta de cada pregunta.',
      },
      {
        id: 'notebook-flashcards',
        titulo: 'Flashcards',
        uso: 'Para repetición espaciada.',
        texto: 'Con las fuentes de este cuaderno, crea [número] flashcards sobre [tema] en formato «pregunta | respuesta», una por línea. Preguntas que obliguen a recordar (no de sí o no) y respuestas de máximo dos líneas.',
      },
      {
        id: 'notebook-audio',
        titulo: 'Resumen en audio',
        uso: 'Para escucharlo en el traslado.',
        texto: 'Genera un resumen en audio de [minutos] minutos sobre [tema], dirigido a un estudiante de Medicina de [semestre] semestre. Enfócate en los conceptos que más se confunden y termina con 3 preguntas para pensar.',
      },
    ],
  },
]

/** Campos [nombre] de un texto, en orden y sin repetir. */
export function camposDe(texto: string): string[] {
  return [...new Set([...texto.matchAll(/\[([^\]]+)\]/g)].map(m => m[1]))]
}

/** Sustituye los campos llenos; los vacíos se quedan como [campo]. */
export function llenarPrompt(texto: string, valores: Record<string, string>): string {
  return texto.replace(/\[([^\]]+)\]/g, (m, c: string) => (valores[c]?.trim() ? valores[c].trim() : m))
}
