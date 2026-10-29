/* Test de perfil de estudio (/taller/perfil): tipos del contenido y cálculo.
 *
 * El contenido vive en data/perfil-estudio.data.json (fuente de verdad, no se
 * reescribe). `calcularPerfil` es una función pura portada de compute() de la
 * implementación de referencia: mismos desempates, mismas reglas de
 * recomendación con su peso y mismo orden. No es un test de estilos de
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
  let stratLabel = 'Repaso pasivo predominante'
  if (active >= 8 && active > passive) stratLabel = 'Recuperación activa como base'
  else if (active >= passive) stratLabel = 'En transición hacia lo activo'
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
  if (passive > active) add(10 + (passive - active), 'Cambia una relectura por un quiz', 'Después de leer un tema, cierra el libro y responde 5 preguntas sin mirar. Genera el quiz en Gemini Notebook con tus propias fuentes.', 'Bloque 7 · Plantilla 9')
  if (num('s7') <= 1) add(6 + (num('t2') >= 4 ? 4 : 0), 'Activa flashcards en tus huecos cortos', num('t2') >= 4 ? 'Tienes varias horas de huecos de 10 a 25 minutos: son ideales para 15 tarjetas por día.' : 'Aunque sean 15 minutos al día, las tarjetas que fallas regresan y las que dominas salen.', 'Plantilla 7')
  if (num('r4') <= 1) add(8, 'Instala la revisión semanal de 20 minutos', 'El domingo compara lo planeado con lo real y ajusta la semana siguiente. Sin culpa: son datos.', 'Plantilla 4')
  if (num('r3') <= 1) add(7, 'Planea la semana antes de que empiece', 'Bloquea primero lo fijo y después 3 a 5 rocas grandes con una acción concreta cada una.', 'Plantilla 1')
  if (num('r6') <= 1) add(7, 'Reparte cada materia en al menos 3 días', 'Espaciar retiene más que concentrar todo antes del examen. Registra tus repasos en los días 1, 3, 7 y 14.', 'Plantillas 7 y 8')
  if (num('r5') <= 1 || num('r2') <= 1) add(6, 'Comprueba antes de dar algo por sabido', 'Sentir que ya lo sabes no es evidencia. Explícalo sin mirar y verifica en el libro.', 'Plantilla 9')
  if (num('r1') <= 1) add(5, 'Identifica el tema que más te cuesta en cada materia', 'Usa el chat de Gemini Notebook o tu IA para que te haga 5 preguntas por tema y anota dónde fallas.', 'Bloque 4')
  if (mismatch) add(9, `Protege al menos un bloque en tu mejor hora (${DATOS.energyLabels[energy].toLowerCase()})`, 'Tus horas de más energía no coinciden con tu tiempo libre. Aunque sean 50 minutos, úsalos para lo más difícil y deja lo mecánico para el resto.', 'Bloque 3')
  if (num('t1') <= 1.5) add(6, 'Haz intocables tus pocos bloques largos', 'Con tan pocas horas tranquilas, cada bloque largo vale oro: agéndalo como cita recurrente y úsalo solo para estudio activo.', 'Plantilla 1')
  if (num('t3') >= 4) add(4, 'Convierte tus traslados en repaso', 'Escucha un resumen en audio de Gemini Notebook de un tema que ya estudiaste y repítelo en voz alta.', 'Bloque 7')
  if (num('t4') >= 4) add(4, 'Usa quizzes cortos cuando haya interrupciones', 'Un quiz se pausa y se retoma sin perder el hilo; una lectura larga no.', 'Bloque 7')
  if (recs.length < 3) add(1, 'Sube la dificultad con casos clínicos', 'Tu sistema ya es sólido. Aplica cada tema a un caso breve y explica por qué cada dato importa.', 'Bloque 4')
  if (recs.length < 3) add(0, 'Mide tu experimento', 'Compara tu resultado en quiz entre un tema estudiado a tu manera y otro con recuperación activa.', 'Bloque 2.5')
  recs.sort((a, b) => b.w - a.w)

  const fmt = (Array.isArray(answers.f1) ? answers.f1 : []).map(k => DATOS.formatLabels[k])

  return { energy, avail, mismatch, timeItems, totalH, mainTime, passive, active, activeIdx, passiveIdx, stratLabel, habit, tryActive, regIdx, regLabel, weakestReg, recs: recs.slice(0, 3), fmt }
}

/* ── Textos derivados para la pantalla de resultados y el .md ── */

export const TIEMPO_CORTO: Record<string, string> = { t1: 'bloques largos', t2: 'huecos cortos', t3: 'traslados', t4: 'tiempo con interrupciones' }
const TIEMPO_MD: Record<string, string> = { t1: 'Bloques largos', t2: 'Huecos cortos', t3: 'Traslados', t4: 'Con interrupciones' }

export const mayuscula = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
export const minuscula = (s: string) => s.charAt(0).toLowerCase() + s.slice(1)

/** Etiqueta de la escala de horas para un valor («3 a 5 h»). */
export function etiquetaHoras(v: number): string {
  return (DATOS.scales.hours.opts.find(o => o[0] === v) ?? [0, '0'])[1]
}

export function encabezado(r: Perfil): { titulo: string; subtitulo: string } {
  const titulo = r.energy === 'x' ? 'Sin una hora clara de mejor rendimiento' : `Rindes mejor en la ${DATOS.energyLabels[r.energy].toLowerCase()}`
  const subtitulo = `Tiempo principal: ${TIEMPO_CORTO[r.mainTime.id]} · ${r.stratLabel}`
  return { titulo, subtitulo }
}

/** Perfil en Markdown, igual que toMarkdown() de la referencia. */
export function perfilMarkdown(r: Perfil, fecha: string): string {
  const { titulo, subtitulo } = encabezado(r)
  const headline = `${titulo}. ${subtitulo}.`
  return `# Mi perfil de estudio\n\nFecha: ${fecha}\n\n${headline}\n\n## Mejor hora\n- ${DATOS.energyLabels[r.energy]}: rocas grandes ${DATOS.energyWindow[r.energy]}${r.mismatch ? '\n- Mi tiempo libre cae en otro horario: proteger al menos un bloque en mi mejor hora' : ''}\n\n## Tiempo por semana\n| Tipo | Horas | Herramienta |\n| --- | --- | --- |\n${r.timeItems.map(t => `| ${TIEMPO_MD[t.id]} | ${etiquetaHoras(t.h)} | ${t.tool} |`).join('\n')}\n\n## Estrategias\n- Índice activo: ${r.activeIdx}/100\n- Índice pasivo: ${r.passiveIdx}/100\n- ${r.stratLabel}\n\n## Autorregulación\n- ${r.regIdx}/100 (${r.regLabel})\n- Punto más débil: ${r.weakestReg.q}\n\n## Tres acciones para la próxima semana\n${r.recs.map((x, i) => `${i + 1}. **${x.title}.** ${x.body} (${x.tag})`).join('\n')}\n\n## Experimento de dos semanas\n- Tema A, como estudio hoy: ${r.habit.short}\n- Tema B, recuperación activa: ${r.tryActive.short}\n- Quiz de ambos a los 7 días, sin mirar\n\n## Formato preferido\n- ${r.fmt.join(', ')} (como puerta de entrada; después, recuperar de memoria)\n`
}
