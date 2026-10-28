import { describe, expect, it } from 'vitest'
import { diaSemana, escaparTexto, generarIcs, plegarLinea, proximoLunes, type EventoSemanal } from './ics'

const ahora = new Date(Date.UTC(2026, 9, 28, 18, 5, 9))
const base: EventoSemanal = { id: 'b1', titulo: 'Estudio', dia: 0, inicioMin: 7 * 60, finMin: 8 * 60 + 30 }

const desplegar = (ics: string) => ics.replace(/\r\n /g, '')
const lineas = (ics: string) => ics.split('\r\n')
const octetos = (s: string) => new TextEncoder().encode(s).length

describe('generarIcs: estructura', () => {
  const ics = generarIcs([base], { fechaInicio: '2026-11-02', ahora })

  it('usa CRLF en todas las líneas y termina con CRLF', () => {
    expect(ics.endsWith('\r\n')).toBe(true)
    expect(ics.replace(/\r\n/g, '')).not.toMatch(/[\r\n]/)
  })

  it('abre y cierra VCALENDAR y VEVENT', () => {
    const l = lineas(ics)
    expect(l[0]).toBe('BEGIN:VCALENDAR')
    expect(l).toContain('VERSION:2.0')
    expect(l.filter(x => x === 'BEGIN:VEVENT')).toHaveLength(1)
    expect(l.filter(x => x === 'END:VEVENT')).toHaveLength(1)
    expect(l[l.length - 2]).toBe('END:VCALENDAR')
  })

  it('declara la zona de Ciudad de México en UTC-06:00 fijo, sin horario de verano', () => {
    const l = lineas(ics)
    expect(l).toContain('TZID:America/Mexico_City')
    expect(l).toContain('TZOFFSETFROM:-0600')
    expect(l).toContain('TZOFFSETTO:-0600')
    expect(l).not.toContain('BEGIN:DAYLIGHT')
  })

  it('genera DTSTAMP en UTC y UID estable', () => {
    expect(ics).toContain('DTSTAMP:20261028T180509Z')
    expect(ics).toContain('UID:b1@medcore.icu')
  })
})

describe('generarIcs: recurrencia y fechas', () => {
  it('evento del lunes desde un lunes: misma fecha, BYDAY=MO, sin fin', () => {
    const ics = generarIcs([base], { fechaInicio: '2026-11-02', ahora })
    expect(ics).toContain('DTSTART;TZID=America/Mexico_City:20261102T070000')
    expect(ics).toContain('DTEND;TZID=America/Mexico_City:20261102T083000')
    expect(ics).toContain('RRULE:FREQ=WEEKLY;BYDAY=MO\r\n')
  })

  it('cada día cae en su fecha a partir del lunes inicial', () => {
    const ics = generarIcs([{ ...base, id: 'j', dia: 3 }, { ...base, id: 'd', dia: 6 }], { fechaInicio: '2026-11-02', ahora })
    expect(ics).toContain('DTSTART;TZID=America/Mexico_City:20261105T070000')
    expect(ics).toContain('RRULE:FREQ=WEEKLY;BYDAY=TH')
    expect(ics).toContain('DTSTART;TZID=America/Mexico_City:20261108T070000')
    expect(ics).toContain('RRULE:FREQ=WEEKLY;BYDAY=SU')
  })

  it('si la fecha de inicio no es lunes, usa la primera ocurrencia en o después de ella', () => {
    const ics = generarIcs([{ ...base, dia: 0 }, { ...base, id: 'v', dia: 4 }], { fechaInicio: '2026-11-04', ahora })
    expect(ics).toContain('DTSTART;TZID=America/Mexico_City:20261109T070000') // lunes siguiente
    expect(ics).toContain('DTSTART;TZID=America/Mexico_City:20261106T070000') // viernes de esa semana
  })

  it('cruza meses y años correctamente', () => {
    const ics = generarIcs([{ ...base, dia: 2 }], { fechaInicio: '2026-12-28', ahora })
    expect(ics).toContain('DTSTART;TZID=America/Mexico_City:20261230T070000')
    const ics2 = generarIcs([{ ...base, dia: 6 }], { fechaInicio: '2026-12-28', ahora })
    expect(ics2).toContain('DTSTART;TZID=America/Mexico_City:20270103T070000')
  })

  it('un bloque que termina a las 24:00 termina a las 00:00 del día siguiente', () => {
    const ics = generarIcs([{ ...base, dia: 6, inicioMin: 23 * 60, finMin: 1440 }], { fechaInicio: '2026-11-02', ahora })
    expect(ics).toContain('DTSTART;TZID=America/Mexico_City:20261108T230000')
    expect(ics).toContain('DTEND;TZID=America/Mexico_City:20261109T000000')
  })

  it('agrega COUNT cuando se limita el número de semanas', () => {
    const ics = generarIcs([base], { fechaInicio: '2026-11-02', ahora, semanas: 16 })
    expect(ics).toContain('RRULE:FREQ=WEEKLY;BYDAY=MO;COUNT=16')
  })

  it('rechaza horarios inválidos', () => {
    expect(() => generarIcs([{ ...base, finMin: base.inicioMin }], { fechaInicio: '2026-11-02', ahora })).toThrow()
    expect(() => generarIcs([{ ...base, dia: 7 }], { fechaInicio: '2026-11-02', ahora })).toThrow()
  })
})

describe('escape de texto', () => {
  it('escapa barra invertida, punto y coma, coma y saltos de línea', () => {
    expect(escaparTexto('a\\b;c,d\ne\r\nf')).toBe('a\\\\b\\;c\\,d\\ne\\nf')
  })

  it('aplica el escape en SUMMARY, DESCRIPTION y CATEGORIES', () => {
    const ics = generarIcs([{ ...base, titulo: 'Histología: 20 preguntas; tejido, conjuntivo', descripcion: 'Línea 1\nLínea 2', categoria: 'Estudio, roca grande' }],
      { fechaInicio: '2026-11-02', ahora })
    const d = desplegar(ics)
    expect(d).toContain('SUMMARY:Histología: 20 preguntas\\; tejido\\, conjuntivo')
    expect(d).toContain('DESCRIPTION:Línea 1\\nLínea 2')
    expect(d).toContain('CATEGORIES:Estudio\\, roca grande')
  })

  it('usa «Bloque» si el título está vacío', () => {
    expect(generarIcs([{ ...base, titulo: '  ' }], { fechaInicio: '2026-11-02', ahora })).toContain('SUMMARY:Bloque')
  })
})

describe('plegado a 75 octetos', () => {
  it('ninguna línea física supera 75 octetos, incluso con acentos y emoji', () => {
    const largo = 'Fisiología cardiovascular: 30 preguntas de electrocardiografía, ciclo cardíaco y presión arterial 🫀 '.repeat(4)
    const ics = generarIcs([{ ...base, titulo: largo, descripcion: largo }], { fechaInicio: '2026-11-02', ahora })
    for (const l of lineas(ics)) expect(octetos(l)).toBeLessThanOrEqual(75)
    expect(desplegar(ics)).toContain(`SUMMARY:${escaparTexto(largo.trim())}`)
  })

  it('no parte caracteres multibyte y las continuaciones empiezan con espacio', () => {
    const plegada = plegarLinea('SUMMARY:' + 'ñ'.repeat(80))
    const partes = plegada.split('\r\n')
    expect(partes.length).toBeGreaterThan(1)
    for (const [i, p] of partes.entries()) {
      expect(octetos(p)).toBeLessThanOrEqual(75)
      if (i > 0) expect(p.startsWith(' ')).toBe(true)
    }
    expect(plegada.replace(/\r\n /g, '')).toBe('SUMMARY:' + 'ñ'.repeat(80))
  })

  it('no pliega líneas cortas', () => {
    expect(plegarLinea('SUMMARY:Corto')).toBe('SUMMARY:Corto')
  })
})

describe('fechas auxiliares', () => {
  it('diaSemana usa lunes = 0', () => {
    expect(diaSemana('2026-11-02')).toBe(0)
    expect(diaSemana('2026-11-08')).toBe(6)
  })

  it('proximoLunes devuelve el lunes siguiente', () => {
    expect(proximoLunes(new Date(2026, 9, 28))).toBe('2026-11-02') // miércoles
    expect(proximoLunes(new Date(2026, 10, 2))).toBe('2026-11-09') // lunes
    expect(proximoLunes(new Date(2026, 10, 8))).toBe('2026-11-09') // domingo
  })
})
