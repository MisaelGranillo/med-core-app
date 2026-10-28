/* Generador de calendarios iCalendar (RFC 5545) para la semana ideal del taller.
 *
 * Cada bloque se exporta como un evento semanal recurrente (RRULE:FREQ=WEEKLY)
 * en la zona America/Mexico_City. México no usa horario de verano desde 2022,
 * así que la VTIMEZONE declara UTC-06:00 fijo. Líneas con CRLF, texto escapado
 * y líneas plegadas a 75 octetos como pide la norma.
 *
 * Funciones puras: sin DOM ni fecha actual implícita (se recibe `ahora`). */

export const ZONA_HORARIA = 'America/Mexico_City'

export interface EventoSemanal {
  /** Identificador estable del bloque; se usa para el UID del evento. */
  id: string
  titulo: string
  descripcion?: string
  categoria?: string
  /** 0 = lunes … 6 = domingo. */
  dia: number
  /** Minutos desde las 00:00 (p. ej. 7:30 = 450). */
  inicioMin: number
  /** Minutos desde las 00:00; 1440 = 24:00 (medianoche del día siguiente). */
  finMin: number
}

export interface OpcionesIcs {
  /** Fecha desde la que empiezan las repeticiones, «AAAA-MM-DD». Cada evento
   *  arranca en la primera ocurrencia de su día en esa fecha o después. */
  fechaInicio: string
  /** Momento de generación (DTSTAMP). */
  ahora: Date
  /** Número de semanas; sin valor, la repetición no tiene fin. */
  semanas?: number
  nombreCalendario?: string
}

const BYDAY = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']
const CRLF = '\r\n'

/** Escapa un valor TEXT: barra invertida, punto y coma, coma y saltos de línea. */
export function escaparTexto(s: string): string {
  return s
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r\n|\r|\n/g, '\\n')
}

/** Pliega una línea de contenido a 75 octetos UTF-8 por línea física, sin
 *  partir caracteres multibyte. Las continuaciones empiezan con un espacio. */
export function plegarLinea(linea: string): string {
  const enc = new TextEncoder()
  const partes: string[] = []
  let actual = ''
  let bytes = 0
  let limite = 75
  for (const ch of linea) {
    const n = enc.encode(ch).length
    if (bytes + n > limite) {
      partes.push(actual)
      actual = ''
      bytes = 0
      limite = 74 // el espacio inicial de la continuación cuenta como octeto
    }
    actual += ch
    bytes += n
  }
  partes.push(actual)
  return partes.join(CRLF + ' ')
}

const dos = (n: number) => String(n).padStart(2, '0')

function parseFecha(f: string): { y: number; m: number; d: number } {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(f)
  if (!m) throw new Error(`Fecha inválida: ${f}`)
  return { y: Number(m[1]), m: Number(m[2]), d: Number(m[3]) }
}

/** Fecha «AAAA-MM-DD» + días, aritmética en UTC para no depender de la zona local. */
function sumarDias(f: string, dias: number): Date {
  const { y, m, d } = parseFecha(f)
  return new Date(Date.UTC(y, m - 1, d + dias))
}

/** Día de la semana de una fecha «AAAA-MM-DD» con lunes = 0. */
export function diaSemana(f: string): number {
  return (sumarDias(f, 0).getUTCDay() + 6) % 7
}

function fechaLocal(fecha: Date, minutos: number): string {
  const extra = Math.floor(minutos / 1440)
  const resto = minutos - extra * 1440
  const f = new Date(fecha.getTime() + extra * 86_400_000)
  return `${f.getUTCFullYear()}${dos(f.getUTCMonth() + 1)}${dos(f.getUTCDate())}T${dos(Math.floor(resto / 60))}${dos(resto % 60)}00`
}

function fechaUtc(d: Date): string {
  return `${d.getUTCFullYear()}${dos(d.getUTCMonth() + 1)}${dos(d.getUTCDate())}T${dos(d.getUTCHours())}${dos(d.getUTCMinutes())}${dos(d.getUTCSeconds())}Z`
}

const VTIMEZONE = [
  'BEGIN:VTIMEZONE',
  `TZID:${ZONA_HORARIA}`,
  `X-LIC-LOCATION:${ZONA_HORARIA}`,
  'BEGIN:STANDARD',
  'TZOFFSETFROM:-0600',
  'TZOFFSETTO:-0600',
  'TZNAME:CST',
  'DTSTART:19700101T000000',
  'END:STANDARD',
  'END:VTIMEZONE',
]

export function generarIcs(eventos: EventoSemanal[], opciones: OpcionesIcs): string {
  const { fechaInicio, ahora, semanas, nombreCalendario } = opciones
  const offsetInicio = diaSemana(fechaInicio)
  const stamp = fechaUtc(ahora)

  const lineas: string[] = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//MedCore//Taller de autoestudio estrategico//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
  ]
  if (nombreCalendario) lineas.push(`X-WR-CALNAME:${escaparTexto(nombreCalendario)}`)
  lineas.push(`X-WR-TIMEZONE:${ZONA_HORARIA}`, ...VTIMEZONE)

  for (const ev of eventos) {
    if (ev.dia < 0 || ev.dia > 6) throw new Error(`Día fuera de rango: ${ev.dia}`)
    if (!(ev.finMin > ev.inicioMin) || ev.inicioMin < 0 || ev.finMin > 1440) {
      throw new Error(`Horario inválido en «${ev.titulo}»`)
    }
    const fecha = sumarDias(fechaInicio, (ev.dia - offsetInicio + 7) % 7)
    const rrule = `RRULE:FREQ=WEEKLY;BYDAY=${BYDAY[ev.dia]}${semanas ? `;COUNT=${semanas}` : ''}`
    lineas.push(
      'BEGIN:VEVENT',
      `UID:${ev.id.replace(/[^A-Za-z0-9_-]/g, '')}@medcore.icu`,
      `DTSTAMP:${stamp}`,
      `DTSTART;TZID=${ZONA_HORARIA}:${fechaLocal(fecha, ev.inicioMin)}`,
      `DTEND;TZID=${ZONA_HORARIA}:${fechaLocal(fecha, ev.finMin)}`,
      rrule,
      `SUMMARY:${escaparTexto(ev.titulo.trim() || 'Bloque')}`,
    )
    if (ev.descripcion?.trim()) lineas.push(`DESCRIPTION:${escaparTexto(ev.descripcion.trim())}`)
    if (ev.categoria?.trim()) lineas.push(`CATEGORIES:${escaparTexto(ev.categoria.trim())}`)
    lineas.push('TRANSP:OPAQUE', 'END:VEVENT')
  }

  lineas.push('END:VCALENDAR')
  return lineas.map(plegarLinea).join(CRLF) + CRLF
}

/** Próximo lunes a partir de una fecha (si ya es lunes, el de la semana siguiente). */
export function proximoLunes(desde: Date): string {
  const d = new Date(desde.getFullYear(), desde.getMonth(), desde.getDate())
  const dia = (d.getDay() + 6) % 7
  d.setDate(d.getDate() + (7 - dia))
  return `${d.getFullYear()}-${dos(d.getMonth() + 1)}-${dos(d.getDate())}`
}
