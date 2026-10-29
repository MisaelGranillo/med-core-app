import { describe, expect, it } from 'vitest'
import { calcularPerfil, encabezado, perfilMarkdown, type Respuestas } from './perfil'

/** Respuestas completas: horas, frecuencias y acuerdos por ítem, más energía y formato. */
function respuestas(o: {
  e: [string, string, string]; e4: string[]
  t: [number, number, number, number]
  s: [number, number, number, number, number, number, number, number]
  r: [number, number, number, number, number, number]
  f1?: string[]
}): Respuestas {
  const a: Respuestas = { e1: o.e[0], e2: o.e[1], e3: o.e[2], e4: o.e4, f1: o.f1 ?? ['vis'] }
  o.t.forEach((v, i) => { a[`t${i + 1}`] = String(v) })
  o.s.forEach((v, i) => { a[`s${i + 1}`] = String(v) })
  o.r.forEach((v, i) => { a[`r${i + 1}`] = String(v) })
  return a
}

const titulos = (p: ReturnType<typeof calcularPerfil>) => p.recs.map(r => r.title)

describe('calcularPerfil', () => {
  it('pasivo puro: repaso pasivo predominante y el quiz como primera acción', () => {
    const p = calcularPerfil(respuestas({
      e: ['m', 'm', 'm'], e4: ['m'], t: [4, 1.5, 0, 0],
      s: [3, 3, 3, 3, 0, 0, 0, 0], r: [1, 1, 1, 1, 1, 1], f1: ['txt'],
    }))
    expect(p.passive).toBe(12)
    expect(p.active).toBe(0)
    expect([p.activeIdx, p.passiveIdx]).toEqual([0, 100])
    expect(p.stratLabel).toBe('Predomina el estudio pasivo')
    expect(p.recs[0]).toMatchObject({ w: 22, title: 'Cambia una relectura por un quiz' })
    expect(titulos(p).slice(1)).toEqual(['Instala la revisión semanal de 20 minutos', 'Planea la semana antes de que empiece'])
    expect(p.habit.kind).toBe('p') // en empate, una pasiva (igual que la referencia)
    expect(p.tryActive.id).toBe('s5')
    expect(p.regLabel).toBe('Baja')
  })

  it('activo puro: recuperación activa como base y solo las acciones de cierre', () => {
    const p = calcularPerfil(respuestas({
      e: ['t', 't', 't'], e4: ['t'], t: [8, 4, 0, 0],
      s: [0, 0, 0, 0, 3, 3, 3, 3], r: [3, 3, 3, 3, 3, 3],
    }))
    expect(p.stratLabel).toBe('Ya estudias de forma activa')
    expect(p.activeIdx).toBe(100)
    expect([p.regIdx, p.regLabel]).toEqual([100, 'Alta'])
    expect(p.habit.kind).toBe('a')
    // Sin reglas activadas, la referencia agrega las dos acciones de cierre y nada más.
    expect(titulos(p)).toEqual(['Sube la dificultad con casos clínicos', 'Mide tu experimento'])
  })

  it('sin hora clara: empate de mañana y noche, sin desajuste', () => {
    const p = calcularPerfil(respuestas({
      e: ['m', 'n', 't'], e4: ['w'], t: [4, 4, 0, 0],
      s: [1, 1, 1, 1, 1, 1, 1, 1], r: [2, 2, 2, 2, 2, 2],
    }))
    expect(p.energy).toBe('x')
    expect(p.mismatch).toBe(false)
    expect(encabezado(p).titulo).toBe('Sin una hora clara de mejor rendimiento')
    // Con una pregunta sin responder, el empate mañana-tarde favorece la tarde.
    const q = calcularPerfil({ ...respuestas({ e: ['m', 't', 't'], e4: [], t: [0, 0, 0, 0], s: [0, 0, 0, 0, 0, 0, 0, 0], r: [0, 0, 0, 0, 0, 0] }), e3: undefined })
    expect(q.energy).toBe('t')
  })

  it('desajuste de horario: la mejor hora no está entre los horarios disponibles', () => {
    const p = calcularPerfil(respuestas({
      e: ['n', 'n', 'n'], e4: ['m', 'w'], t: [4, 4, 0, 0],
      s: [1, 1, 1, 1, 2, 2, 2, 2], r: [2, 2, 2, 2, 2, 2],
    }))
    expect(p.energy).toBe('n')
    expect(p.mismatch).toBe(true)
    expect(p.recs[0]).toMatchObject({ w: 9, title: 'Protege al menos un bloque en tu mejor hora (noche)', tag: 'Cuaderno, bloque 3' })
    expect(encabezado(p).titulo).toBe('Rindes mejor en la noche')
  })

  it('todo en el punto medio: en transición, autorregulación en construcción', () => {
    const p = calcularPerfil(respuestas({
      e: ['t', 't', 't'], e4: ['t'], t: [4, 4, 4, 4],
      s: [2, 2, 2, 2, 2, 2, 2, 2], r: [2, 2, 2, 2, 2, 2],
    }))
    expect([p.passive, p.active]).toEqual([8, 8])
    expect(p.stratLabel).toBe('A medio camino hacia lo activo')
    expect([p.regIdx, p.regLabel]).toEqual([67, 'En construcción'])
    expect(p.totalH).toBe(16)
    expect(p.mainTime.id).toBe('t1')
    expect(titulos(p)).toEqual(['Convierte tus traslados en repaso', 'Usa quizzes cortos cuando haya interrupciones', 'Sube la dificultad con casos clínicos'])
  })
})

describe('perfilMarkdown', () => {
  it('incluye fecha, encabezado, tabla de tiempo y las acciones numeradas', () => {
    const p = calcularPerfil(respuestas({
      e: ['n', 'n', 'n'], e4: ['m'], t: [1.5, 8, 0, 12],
      s: [3, 2, 1, 0, 0, 1, 0, 1], r: [0, 1, 2, 0, 1, 3], f1: ['vis', 'pra'],
    }))
    const md = perfilMarkdown(p, '2026-10-30')
    expect(md.startsWith('# Mi perfil de estudio\n\nFecha: 2026-10-30\n\nRindes mejor en la noche. Lo que más tienes: ratos con interrupciones · Predomina el estudio pasivo.')).toBe(true)
    expect(md).toContain('| Ratos cortos | 6 a 10 h | Para repasar con flashcards |')
    expect(md).toContain('1. **Cambia una relectura por un quiz.**')
    expect(md).toContain('- diagramas e imágenes, ejercicios y casos (como puerta de entrada')
    expect(md).toContain('- Predomina el estudio pasivo: pasas mucho tiempo en el gimnasio')
    expect(md).not.toMatch(/—/)
  })
})
