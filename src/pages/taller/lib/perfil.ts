/* Test de perfil de estudio (/taller/perfil): tipos del contenido y cálculo.
 *
 * El contenido vive en data/perfil-estudio.data.json (fuente de verdad, no se
 * edita). `calcularPerfil` es una función pura portada de compute() de la
 * implementación de referencia: mismos desempates, mismas reglas de
 * recomendación con su peso y mismo orden. Los textos de preguntas y
 * resultados se reescribieron en lenguaje más sencillo (2026-10-29). No es un test de estilos de
 * aprendizaje: mide hora de rendimiento, tipos de tiempo, estrategias y
 * autorregulación. */

import datosJson from '../data/perfil-estudio.data.json'

export type TipoPregunta = 'single' | 'multi' | 'hours' | 'freq' | 'agree'
export type Energia = 'm' | 't' | 'n'
export type EnergiaPerfil = Energia | 'x'

export interface Pregunta {
  id: string
  type: TipoPregunta
  q: string
  hint?: string
  /** Máximo de opciones en una pregunta «multi». */
  max?: number
  /** Opciones propias (single y multi): [valor, etiqueta]. */
  opts?: [string, string][]
  /** Tiempo: herramienta que conviene a ese tipo de tiempo. */
  tool?: string
  /** Estrategias: pasiva o activa. */
  kind?: 'p' | 'a'
  /** Estrategias: nombre corto para el experimento. */
  short?: string
}

export interface Bloque {
  id: string
  title: string
  intro: string
  items: Pregunta[]
}

export interface DatosPerfil {
  version: string
  blocks: Bloque[]
  scales: Record<'hours' | 'freq' | 'agree', { opts: [number, string][] }>
  energyLabels: Record<EnergiaPerfil, string>
  energyWindow: Record<EnergiaPerfil, string>
  formatLabels: Record<string, string>
  sources: [string, string][]
}

export const DATOS = datosJson as unknown as DatosPerfil
export const PREGUNTAS: Pregunta[] = DATOS.blocks.flatMap(b => b.items)

/** Respuesta guardada: el valor de la opción como texto, o una lista en «multi». */
export type Respuestas = Record<string, string | string[] | undefined>

export function opcionesDe(p: Pregunta): [string | number, string][] {
  return p.opts ?? DATOS.scales[p.type as 'hours' | 'freq' | 'agree'].opts
}

export function respondida(p: Pregunta, r: Respuestas): boolean {
  const a = r[p.id]
  return p.type === 'multi' ? Array.isArray(a) && a.length > 0 : a !== undefined
}

export interface Recomendacion { w: number; title: string; body: string; tag: string }
export interface Tiempo extends Pregunta { h: number }
export interface Estrategia extends Pregunta { v: number }

export interface Perfil {
  energy: EnergiaPerfil
  avail: string[]
  mismatch: boolean
  timeItems: Tiempo[]
  totalH: number
  mainTime: Tiempo
  passive: number
  active: number
  activeIdx: number
  passiveIdx: number
  stratLabel: string
  habit: Estrategia
  tryActive: Estrategia
  regIdx: number
  regLabel: string
  weakestReg: Estrategia
  recs: Recomendacion[]
  fmt: string[]
}

export function calcularPerfil(answers: Respuestas): Perfil {
  const num = (id: string) => Number(answers[id] || 0)

  // Energía
  const votes: Record<Energia, number> = { m: 0, t: 0, n: 0 }
  ;['e1', 'e2', 'e3'].forEach(id => {
    const a = answers[id]
    if (typeof a === 'string' && a in votes) votes[a as Energia]++
  })
  const max = Math.max(votes.m, votes.t, votes.n)
  const tops = (Object.keys(votes) as Energia[]).filter(k => votes[k] === max)
  const energy: EnergiaPerfil = tops.length === 1
    ? tops[0]
    : (votes.m === max && votes.n === max ? 'x' : tops.includes('t') ? 't' : tops[0])
  const avail = Array.isArray(answers.e4) ? answers.e4 : []
  const mismatch = energy !== 'x' && avail.length > 0 && !avail.includes(energy)

  // Tiempo
  const timeItems: Tiempo[] = DATOS.blocks[1].items.map(it => ({ ...it, h: num(it.id) }))
  const totalH = timeItems.reduce((s, t) => s + t.h, 0)
  const mainTime = [...timeItems].sort((a, b) => b.h - a.h)[0]

  // Estrategias
  const strat: Estrategia[] = DATOS.blocks[2].items.map(it => ({ ...it, v: num(it.id) }))
  const passive = strat.filter(s => s.kind === 'p').reduce((s, x) => s + x.v, 0)
  const active = strat.filter(s => s.kind === 'a').reduce((s, x) => s + x.v, 0)
  const activeIdx = Math.round((active / 12) * 100)
  const passiveIdx = Math.round((passive / 12) * 100)
  let stratLabel = 'Predomina el estudio pasivo'
  if (active >= 8 && active > passive) stratLabel = 'Ya estudias de forma activa'
  else if (active >= passive) stratLabel = 'A medio camino hacia lo activo'
  const habit = [...strat].sort((a, b) => b.v - a.v || (a.kind === 'p' ? -1 : 1))[0]
  const tryActive = strat.filter(s => s.kind === 'a').sort((a, b) => a.v - b.v)[0]

  // Autorregulación
  const reg: Estrategia[] = DATOS.blocks[3].items.map(it => ({ ...it, v: num(it.id) }))
  const regIdx = Math.round((reg.reduce((s, r) => s + r.v, 0) / 18) * 100)
  const regLabel = regIdx >= 70 ? 'Alta' : regIdx >= 40 ? 'En construcción' : 'Baja'
  const weakestReg = [...reg].sort((a, b) => a.v - b.v)[0]

  // Recomendaciones (peso mayor = más urgente)
  const recs: Recomendacion[] = []
  const add = (w: number, title: string, body: string, tag: string) => recs.push({ w, title, body, tag })
  if (passive > active) add(10 + (passive - active), 'Cambia una relectura por un quiz', 'Después de leer un tema, cierra el libro y contesta 5 preguntas sin ver tus apuntes. Puedes pedirle el quiz a Gemini Notebook con tus propios materiales.', 'Cuaderno, bloque 7 · Plantilla 9: Sesión de estudio con IA')
  if (num('s7') <= 1) add(6 + (num('t2') >= 4 ? 4 : 0), 'Usa tus ratos cortos para repasar con flashcards', num('t2') >= 4 ? 'Tienes varias horas en ratos de 10 a 25 minutos: alcanzan para repasar 15 tarjetas al día.' : 'Bastan 15 minutos al día: las tarjetas que fallas vuelven a salir y las que ya dominas dejan de aparecer.', 'Plantilla 7: Registro de repetición espaciada')
  if (num('r4') <= 1) add(8, 'Instala la revisión semanal de 20 minutos', 'El domingo compara lo que planeaste con lo que hiciste y ajusta la semana siguiente. Sin culpa: son datos.', 'Plantilla 4: Revisión semanal')
  if (num('r3') <= 1) add(7, 'Planea la semana antes de que empiece', 'Aparta primero lo fijo (trabajo, clases, familia) y después 3 a 5 bloques para tus temas más difíciles, cada uno con una tarea concreta.', 'Plantilla 1: Planificador semanal')
  if (num('r6') <= 1) add(7, 'Reparte cada materia en al menos 3 días', 'Repartir el estudio se recuerda mejor que meter todo un día antes del examen. Repasa cada tema 1, 3, 7 y 14 días después de estudiarlo.', 'Plantillas 7 y 8: repetición espaciada y plan de examen')
  if (num('r5') <= 1 || num('r2') <= 1) add(6, 'Comprueba antes de dar algo por sabido', 'Sentir que ya te lo sabes no es prueba de que lo sepas. Explícalo sin ver tus apuntes y luego revisa en el libro qué te faltó.', 'Plantilla 9: Sesión de estudio con IA')
  if (num('r1') <= 1) add(5, 'Identifica el tema que más te cuesta en cada materia', 'Pídele a Gemini Notebook o a tu IA que te haga 5 preguntas por tema y anota en cuáles fallas.', 'Cuaderno, bloque 4')
  if (mismatch) add(9, `Protege al menos un bloque en tu mejor hora (${DATOS.energyLabels[energy].toLowerCase()})`, 'Tus horas de más energía no coinciden con tu tiempo libre. Aparta aunque sea 50 minutos a esa hora para lo más difícil y deja lo sencillo para el resto del día.', 'Cuaderno, bloque 3')
  if (num('t1') <= 1.5) add(6, 'Haz intocables tus pocos bloques largos', 'Tienes pocas horas tranquilas, así que cada una vale oro: agéndala como una cita fija y úsala para practicar, no para releer.', 'Plantilla 1: Planificador semanal')
  if (num('t3') >= 4) add(4, 'Convierte tus traslados en repaso', 'Escucha el resumen en audio que genera Gemini Notebook de un tema que ya estudiaste y repite en voz alta lo más importante.', 'Cuaderno, bloque 7')
  if (num('t4') >= 4) add(4, 'Usa quizzes cortos cuando haya interrupciones', 'Un quiz se puede pausar y retomar sin perder el hilo; una lectura larga no.', 'Cuaderno, bloque 7')
  if (recs.length < 3) add(1, 'Sube la dificultad con casos clínicos', 'Tu forma de estudiar ya es sólida. Lleva cada tema a un caso clínico breve y explica por qué importa cada dato.', 'Cuaderno, bloque 4')
  if (recs.length < 3) add(0, 'Mide tu experimento', 'Compara tu resultado en un quiz entre un tema que estudiaste a tu manera y otro que estudiaste poniéndote a prueba.', 'Cuaderno, bloque 2.5')
  recs.sort((a, b) => b.w - a.w)

  const fmt = (Array.isArray(answers.f1) ? answers.f1 : []).map(k => DATOS.formatLabels[k])

  return { energy, avail, mismatch, timeItems, totalH, mainTime, passive, active, activeIdx, passiveIdx, stratLabel, habit, tryActive, regIdx, regLabel, weakestReg, recs: recs.slice(0, 3), fmt }
}

/* ── Textos derivados para la pantalla de resultados y el .md ── */

export const TIEMPO_CORTO: Record<string, string> = { t1: 'ratos largos', t2: 'ratos cortos', t3: 'ratos para escuchar', t4: 'ratos con interrupciones' }
const TIEMPO_MD: Record<string, string> = { t1: 'Ratos largos', t2: 'Ratos cortos', t3: 'Para escuchar', t4: 'Con interrupciones' }

export const mayuscula = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
export const minuscula = (s: string) => s.charAt(0).toLowerCase() + s.slice(1)

/** Etiqueta de la escala de horas para un valor («3 a 5 h»). */
export function etiquetaHoras(v: number): string {
  return (DATOS.scales.hours.opts.find(o => o[0] === v) ?? [0, '0'])[1]
}

export function encabezado(r: Perfil): { titulo: string; subtitulo: string } {
  const titulo = r.energy === 'x' ? 'Sin una hora clara de mejor rendimiento' : `Rindes mejor en la ${DATOS.energyLabels[r.energy].toLowerCase()}`
  const subtitulo = `Lo que más tienes: ${TIEMPO_CORTO[r.mainTime.id]} · ${r.stratLabel}`
  return { titulo, subtitulo }
}

/** Perfil en Markdown: el mismo contenido que la pantalla de resultados. */
export function perfilMarkdown(r: Perfil, fecha: string): string {
  const { titulo, subtitulo } = encabezado(r)
  return [
    '# Mi perfil de estudio',
    '',
    `Fecha: ${fecha}`,
    '',
    `${titulo}. ${subtitulo}.`,
    '',
    '## Mejor hora',
    `- ${DATOS.energyLabels[r.energy]}: lo más difícil, ${DATOS.energyWindow[r.energy]}`,
    ...(r.mismatch ? ['- Mi tiempo libre cae en otro horario: apartar al menos un bloque en mi mejor hora'] : []),
    '',
    '## Tiempo por semana',
    '| Tipo | Horas | Para qué usarlo |',
    '| --- | --- | --- |',
    ...r.timeItems.map(t => `| ${TIEMPO_MD[t.id]} | ${etiquetaHoras(t.h)} | ${mayuscula(TIEMPO_USO[t.id])} |`),
    '',
    '## Cómo estudio',
    `- Estudio activo: ${r.activeIdx}/100 · estudio pasivo: ${r.passiveIdx}/100`,
    `- ${r.stratLabel}: ${minuscula(ESTRATEGIA_EXPLICA[r.stratLabel])}`,
    '',
    '## Cómo organizo mi estudio',
    `- ${r.regIdx}/100 (${r.regLabel}): ${minuscula(ORGANIZACION_EXPLICA[r.regLabel])}`,
    `- Lo que más me falta: ${r.weakestReg.q}`,
    '',
    '## Tres acciones para la próxima semana',
    ...r.recs.map((x, i) => `${i + 1}. **${x.title}.** ${x.body} (${x.tag})`),
    '',
    '## Experimento de dos semanas',
    `- Tema A, como estudio hoy: ${r.habit.short}`,
    `- Tema B, poniéndome a prueba: ${r.tryActive.short}`,
    '- A los 7 días, quiz de los dos sin ver apuntes, y comparar',
    '',
    '## Cómo me gusta empezar un tema',
    `- ${r.fmt.join(', ')} (como puerta de entrada; después, sacarlo de memoria)`,
    '',
  ].join('\n')
}

/* ── Explicaciones en lenguaje sencillo (analogía: entrenar en el gimnasio) ── */

export const ANALOGIA_INTRO = 'Piensa en tu estudio como un entrenamiento en el gimnasio. Importa a qué hora entrenas, cuánto tiempo tienes, qué ejercicios haces y si llevas un registro de tu avance. Así salió el tuyo:'

/** Qué significa cada etiqueta de estrategias. */
export const ESTRATEGIA_EXPLICA: Record<string, string> = {
  'Ya estudias de forma activa': 'Ya entrenas con pesas de verdad: la mayor parte de tu estudio te obliga a sacar la información de tu memoria.',
  'A medio camino hacia lo activo': 'Ya haces algo de estudio activo, pero todavía se reparte casi igual con el pasivo.',
  'Predomina el estudio pasivo': 'Pasas mucho tiempo en el gimnasio viendo a otros entrenar: la mayor parte de tu estudio es releer, subrayar o ver videos.',
}

/** Qué significa el nivel de organización. */
export const ORGANIZACION_EXPLICA: Record<string, string> = {
  'Alta': 'Ya funcionas como tu propio entrenador: sabes qué te cuesta, planeas, te pones a prueba y ajustas.',
  'En construcción': 'Haces parte del trabajo de entrenador, pero hay huecos: te falta medir o ajustar con más constancia.',
  'Baja': 'Hoy entrenas sin entrenador: estudias, pero sin plan ni registro de qué funciona.',
}

/** Para qué sirve cada tipo de tiempo, en una línea. */
export const TIEMPO_USO: Record<string, string> = {
  t1: 'para lo difícil: temas nuevos, casos y explicar sin mirar',
  t2: 'para repasar con flashcards',
  t3: 'para escuchar audios y repasar en voz alta',
  t4: 'para quizzes cortos que se pausan y se retoman',
}
