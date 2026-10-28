/* Taller — semana ideal (/taller/planificador)
 *
 * Cuadrícula de 7 días en franjas de 30 minutos (05:00 a 24:00). En escritorio
 * se crea un bloque arrastrando; en cualquier dispositivo, tocando la franja de
 * inicio y luego la de fin. En móvil se ve un día a la vez. Cada bloque de
 * estudio pide una acción concreta. Resumen de horas contra 168, exportación
 * a .ics con eventos semanales recurrentes y vista de impresión. */

import { useCallback, useEffect, useId, useMemo, useRef, useState, type FormEvent } from 'react'
import { CalendarPlus, Plus, Printer, X } from '@phosphor-icons/react'
import { useAlmacenLocal } from './lib/almacen'
import { descargarTexto, horasTexto } from './lib/archivos'
import { generarIcs, proximoLunes, type EventoSemanal } from './lib/ics'
import {
  CATEGORIAS, CLAVE_PLANIFICADOR, DIAS, DIAS_CORTOS, FIN_DIA, FRANJAS, INICIO_DIA, PASO,
  esDeEstudio, horaTexto, normalizarPlan, nombreCategoria, nuevoId, pideAccion, planVacio,
  type Bloque, type Categoria, type Plan,
} from './lib/planificador'
import { Aviso, DatosLocales, EncabezadoHerramienta, btnPrimario, btnSecundario, campo } from './ui/comun'
import './taller.css'

const SEMANA = 168
const franjaDe = (min: number) => (min - INICIO_DIA) / PASO
const minDe = (franja: number) => INICIO_DIA + franja * PASO
const HORAS_INICIO = Array.from({ length: FRANJAS }, (_, i) => minDe(i))

/** Día de hoy con lunes = 0, para abrir la vista móvil en el día actual. */
const hoyDia = () => (new Date().getDay() + 6) % 7

/** Título del evento en el calendario: «Materia: acción» si hay ambas (sin
 *  repetir la materia si la acción ya empieza con ella). */
function tituloEvento(b: Bloque): string {
  const titulo = b.titulo.trim(), accion = b.accion.trim()
  if (!accion) return titulo || nombreCategoria(b.categoria)
  if (!titulo || accion.toLowerCase().startsWith(titulo.toLowerCase())) return accion
  return `${titulo}: ${accion}`
}

function duracionTexto(min: number): string {
  const h = Math.floor(min / 60), m = min % 60
  return h && m ? `${h} h ${m} min` : h ? `${h} h` : `${m} min`
}

export function TallerPlanificador() {
  const inicialPlan = useCallback(planVacio, [])
  const { valor: plan, setValor, disponible, borrar } = useAlmacenLocal<Plan>(CLAVE_PLANIFICADOR, inicialPlan, normalizarPlan)
  const [catNueva, setCatNueva] = useState<Categoria>('estudio')
  const [diaMovil, setDiaMovil] = useState(hoyDia)
  const [pendiente, setPendiente] = useState<{ dia: number; franja: number } | null>(null)
  const [arrastre, setArrastre] = useState<{ dia: number; desde: number; hasta: number } | null>(null)
  const [editando, setEditando] = useState<{ bloque: Bloque; nuevo: boolean } | null>(null)
  const [aviso, setAviso] = useState('')
  const ignorarClick = useRef(false)

  const bloques = plan.bloques
  const agendados = bloques.filter(b => b.dia != null && b.inicio != null)
  const sinHora = bloques.filter(b => b.dia == null || b.inicio == null)

  /** Bloque que ocupa una franja de un día, si hay. */
  const ocupante = useCallback((dia: number, franja: number, excluir?: string) => {
    const t = minDe(franja)
    return agendados.find(b => b.id !== excluir && b.dia === dia && b.inicio! <= t && t < b.inicio! + b.duracion)
  }, [agendados])

  function abrirNuevo(dia: number, a: number, b: number) {
    const desde = Math.min(a, b)
    let hasta = Math.max(a, b)
    if (ocupante(dia, desde)) return
    for (let f = desde + 1; f <= hasta; f++) if (ocupante(dia, f)) { hasta = f - 1; break }
    setEditando({
      nuevo: true,
      bloque: {
        id: nuevoId(), dia, inicio: minDe(desde), duracion: (hasta - desde + 1) * PASO,
        categoria: catNueva, titulo: pideAccion(catNueva) ? '' : nombreCategoria(catNueva), accion: '',
      },
    })
  }

  // Arrastre con mouse: termina al soltar en cualquier parte de la ventana.
  // Si no hubo movimiento, el clic que sigue se trata como un toque.
  const arrastreRef = useRef(arrastre)
  arrastreRef.current = arrastre
  const abrirNuevoRef = useRef(abrirNuevo)
  abrirNuevoRef.current = abrirNuevo
  const arrastrando = arrastre != null
  useEffect(() => {
    if (!arrastrando) return
    const fin = () => {
      const a = arrastreRef.current
      setArrastre(null)
      if (a && a.hasta !== a.desde) {
        ignorarClick.current = true
        setPendiente(null)
        abrirNuevoRef.current(a.dia, a.desde, a.hasta)
      }
    }
    window.addEventListener('pointerup', fin)
    return () => window.removeEventListener('pointerup', fin)
  }, [arrastrando])

  function tocarFranja(dia: number, franja: number) {
    if (ignorarClick.current) { ignorarClick.current = false; return }
    if (pendiente && pendiente.dia === dia) {
      abrirNuevo(dia, pendiente.franja, franja)
      setPendiente(null)
    } else {
      setPendiente({ dia, franja })
    }
  }

  const enSeleccion = (dia: number, franja: number) => {
    if (arrastre && arrastre.dia === dia) {
      return franja >= Math.min(arrastre.desde, arrastre.hasta) && franja <= Math.max(arrastre.desde, arrastre.hasta)
    }
    return !!pendiente && pendiente.dia === dia && pendiente.franja === franja
  }

  function guardarBloque(b: Bloque) {
    setValor(p => {
      const existe = p.bloques.some(x => x.id === b.id)
      return { ...p, bloques: existe ? p.bloques.map(x => (x.id === b.id ? b : x)) : [...p.bloques, b] }
    })
    setEditando(null)
    setAviso('Bloque guardado.')
  }

  function eliminarBloque(id: string) {
    setValor(p => ({ ...p, bloques: p.bloques.filter(x => x.id !== id) }))
    setEditando(null)
    setAviso('Bloque eliminado.')
  }

  // ── Resumen ──
  const resumen = useMemo(() => {
    const porCat = new Map<Categoria, number>()
    for (const b of agendados) porCat.set(b.categoria, (porCat.get(b.categoria) ?? 0) + b.duracion / 60)
    if (plan.suenoMadrugada) porCat.set('sueno', (porCat.get('sueno') ?? 0) + 35)
    const total = [...porCat.values()].reduce((s, h) => s + h, 0)
    return { filas: CATEGORIAS.map(c => ({ ...c, horas: porCat.get(c.id) ?? 0 })), total }
  }, [agendados, plan.suenoMadrugada])

  const libre = SEMANA - resumen.total

  // ── Exportación ──
  const [fechaInicio, setFechaInicio] = useState(() => proximoLunes(new Date()))
  const [soloEstudio, setSoloEstudio] = useState(false)
  const [semanas, setSemanas] = useState('')
  const ids = { fecha: useId(), solo: useId(), semanas: useId(), madrugada: useId() }

  function exportarIcs() {
    const elegidos = agendados.filter(b => !soloEstudio || esDeEstudio(b.categoria))
    if (!elegidos.length) {
      setAviso(soloEstudio ? 'No hay bloques de Estudio o Revisión para exportar.' : 'No hay bloques con día y hora para exportar.')
      return
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaInicio)) { setAviso('Elige una fecha de inicio válida.'); return }
    const eventos: EventoSemanal[] = elegidos.map(b => ({
      id: b.id,
      titulo: tituloEvento(b),
      descripcion: nombreCategoria(b.categoria),
      categoria: nombreCategoria(b.categoria),
      dia: b.dia!, inicioMin: b.inicio!, finMin: b.inicio! + b.duracion,
    }))
    const ics = generarIcs(eventos, {
      fechaInicio, ahora: new Date(), semanas: semanas ? Number(semanas) : undefined, nombreCalendario: 'Medicina',
    })
    descargarTexto(soloEstudio ? 'semana-ideal-estudio.ics' : 'semana-ideal.ics', ics, 'text/calendar')
    setAviso(`Calendario descargado con ${eventos.length} ${eventos.length === 1 ? 'bloque' : 'bloques'}.`)
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-12 flex flex-col gap-6">
      <EncabezadoHerramienta bloque="Bloque 3 · El sistema" titulo="Semana ideal">
        <p>Bloquea primero lo fijo (sueño, trabajo, clases, traslados) y después tus rocas grandes de estudio. Nombra cada bloque de estudio con una acción concreta.</p>
      </EncabezadoHerramienta>

      <DatosLocales disponible={disponible} onBorrar={() => { borrar(); setPendiente(null); setAviso('Datos borrados.') }} />

      {/* Categoría para bloques nuevos */}
      <section aria-labelledby="h-cat" className="flex flex-col gap-2 print:hidden">
        <h2 id="h-cat" className="text-[0.9375rem] text-zinc-700">Categoría de los bloques nuevos</h2>
        <div className="flex flex-wrap gap-2">
          {CATEGORIAS.map(c => (
            <button
              key={c.id}
              type="button"
              aria-pressed={catNueva === c.id}
              onClick={() => setCatNueva(c.id)}
              className={`taller-cat cat-${c.id} min-h-[44px] px-3 rounded-xl text-sm transition-shadow
                ${catNueva === c.id ? 'ring-2 ring-offset-2 ring-primary ring-offset-[var(--color-page-bg)]' : ''}`}
            >
              {c.nombre}
            </button>
          ))}
        </div>
        <p className="text-sm text-zinc-500">
          Toca la franja de inicio y luego la de fin. En computadora también puedes arrastrar.
        </p>
        <p role="status" aria-live="polite" className="text-sm text-primary-ink min-h-[1.25rem]">
          {pendiente ? `Inicio marcado: ${DIAS[pendiente.dia]} ${horaTexto(minDe(pendiente.franja))}. Ahora toca la franja final.` : ''}
        </p>
      </section>

      {/* Selector de día (móvil) */}
      <div role="group" aria-label="Día a mostrar" className="grid grid-cols-7 gap-1 md:hidden print:hidden">
        {DIAS_CORTOS.map((d, i) => (
          <button
            key={d}
            type="button"
            aria-pressed={diaMovil === i}
            aria-label={DIAS[i]}
            onClick={() => setDiaMovil(i)}
            className={`min-h-[44px] rounded-xl text-sm border ${diaMovil === i ? 'bg-primary text-primary-fg border-primary' : 'bg-surface border-zinc-200 text-zinc-700'}`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Cuadrícula */}
      <section aria-label="Cuadrícula de la semana" className="card p-2 sm:p-3 overflow-hidden print:shadow-none">
        <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[3rem_repeat(7,minmax(0,1fr))] print:grid-cols-[3rem_repeat(7,minmax(0,1fr))] [--franja:44px] md:[--franja:24px] print:[--franja:15px]">
          {/* Encabezados */}
          <div />
          {DIAS.map((d, i) => (
            <div key={d} className={`${i === diaMovil ? '' : 'hidden'} md:block print:block text-center text-sm text-zinc-600 pb-2`}>
              <span className="md:hidden">{d}</span><span className="hidden md:inline">{DIAS_CORTOS[i]}</span>
            </div>
          ))}

          {/* Horas */}
          <div className="relative" style={{ height: `calc(var(--franja) * ${FRANJAS})` }} aria-hidden="true">
            {HORAS_INICIO.filter(m => m % 60 === 0).map(m => (
              <span key={m} className="absolute right-1.5 -translate-y-1/2 text-[0.6875rem] tabular-nums text-zinc-500"
                    style={{ top: `calc(var(--franja) * ${franjaDe(m)})` }}>
                {horaTexto(m)}
              </span>
            ))}
          </div>

          {/* Días */}
          {DIAS.map((d, dia) => (
            <div key={d} role="group" aria-label={d}
                 className={`${dia === diaMovil ? '' : 'hidden'} md:block print:block relative border-l border-zinc-200`}
                 style={{ height: `calc(var(--franja) * ${FRANJAS})` }}>
              {HORAS_INICIO.map((m, franja) => (
                <button
                  key={m}
                  type="button"
                  aria-label={`${d} ${horaTexto(m)}, franja libre`}
                  onPointerDown={e => {
                    if (e.pointerType === 'mouse' && e.button === 0) {
                      e.preventDefault()
                      setArrastre({ dia, desde: franja, hasta: franja })
                    }
                  }}
                  onPointerEnter={() => setArrastre(a => (a && a.dia === dia ? { ...a, hasta: franja } : a))}
                  onClick={() => tocarFranja(dia, franja)}
                  className={`absolute left-0 right-0 border-t print:hidden ${m % 60 === 0 ? 'border-zinc-200' : 'border-zinc-100'}
                    ${enSeleccion(dia, franja) ? 'bg-primary-tint' : 'hover:bg-zinc-100'} focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:z-10`}
                  style={{ top: `calc(var(--franja) * ${franja})`, height: 'var(--franja)' }}
                />
              ))}
              {agendados.filter(b => b.dia === dia).map(b => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setEditando({ bloque: b, nuevo: false })}
                  aria-label={`${nombreCategoria(b.categoria)}: ${b.accion || b.titulo || 'sin título'}, ${d} de ${horaTexto(b.inicio!)} a ${horaTexto(b.inicio! + b.duracion)}. Editar`}
                  className={`taller-cat cat-${b.categoria} absolute left-0.5 right-0.5 z-[1] rounded-lg px-1.5 py-0.5 text-left overflow-hidden
                    text-xs leading-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary`}
                  style={{
                    top: `calc(var(--franja) * ${franjaDe(b.inicio!)} + 1px)`,
                    height: `calc(var(--franja) * ${b.duracion / PASO} - 2px)`,
                  }}
                >
                  <span className="block font-medium truncate">{b.titulo || nombreCategoria(b.categoria)}</span>
                  {b.duracion > PASO && (
                    <span className="block truncate opacity-90">{b.accion || `${horaTexto(b.inicio!)} a ${horaTexto(b.inicio! + b.duracion)}`}</span>
                  )}
                </button>
              ))}
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-2 print:hidden">
        <button type="button" className={btnSecundario}
                onClick={() => setEditando({ nuevo: true, bloque: { id: nuevoId(), dia: diaMovil, inicio: 7 * 60, duracion: 60, categoria: catNueva, titulo: pideAccion(catNueva) ? '' : nombreCategoria(catNueva), accion: '' } })}>
          <Plus weight="bold" className="w-[18px] h-[18px]" aria-hidden="true" />
          Agregar bloque con formulario
        </button>
        <button type="button" className={btnSecundario} onClick={() => window.print()}>
          <Printer weight="regular" className="w-[18px] h-[18px]" aria-hidden="true" />
          Imprimir semana
        </button>
      </div>

      {/* Por agendar */}
      {sinHora.length > 0 && (
        <section aria-labelledby="h-sinhora" className="card p-4 sm:p-6 flex flex-col gap-3 print:hidden">
          <h2 id="h-sinhora" className="font-display text-xl font-normal text-zinc-900">Por agendar</h2>
          <p className="text-[0.9375rem] text-zinc-600">Bloques sin día ni hora, por ejemplo los que mandaste desde la matriz. Asígnales un lugar en la semana.</p>
          <ul className="flex flex-col gap-2">
            {sinHora.map(b => (
              <li key={b.id} className="flex flex-wrap items-center gap-3">
                <span className={`taller-cat cat-${b.categoria} rounded-lg px-2 py-1 text-sm`}>{nombreCategoria(b.categoria)}</span>
                <span className="flex-1 min-w-[10rem] text-[0.9375rem] text-zinc-900">{b.accion || b.titulo || 'Sin título'}</span>
                <button type="button" className={btnSecundario} onClick={() => setEditando({ bloque: { ...b, dia: b.dia ?? diaMovil, inicio: b.inicio ?? 7 * 60 }, nuevo: false })}>
                  Asignar horario
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Resumen */}
      <section aria-labelledby="h-resumen" className="card p-4 sm:p-6 flex flex-col gap-4 print:break-inside-avoid">
        <h2 id="h-resumen" className="font-display text-xl font-normal text-zinc-900">Resumen de la semana</h2>
        <label htmlFor={ids.madrugada} className="flex items-start gap-3 text-[0.9375rem] text-zinc-700 print:hidden min-h-[44px]">
          <input id={ids.madrugada} type="checkbox" className="mt-1 w-5 h-5 accent-[var(--color-accent)]"
                 checked={plan.suenoMadrugada} onChange={e => setValor(p => ({ ...p, suenoMadrugada: e.target.checked }))} />
          <span>Contar de 00:00 a 05:00 como sueño (35 h). La cuadrícula solo va de 05:00 a 24:00.</span>
        </label>
        <table className="w-full text-[0.9375rem]">
          <caption className="sr-only">Horas por categoría</caption>
          <tbody className="divide-y divide-zinc-200">
            {resumen.filas.filter(f => f.horas > 0).map(f => (
              <tr key={f.id}>
                <th scope="row" className="font-normal text-left py-2">
                  <span className={`taller-cat cat-${f.id} inline-block w-3 h-3 rounded-sm align-middle mr-2`} aria-hidden="true" />
                  {f.nombre}
                </th>
                <td className="text-right tabular-nums py-2">{horasTexto(f.horas)} h</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-zinc-300">
              <th scope="row" className="text-left font-medium pt-3">Total planeado</th>
              <td className="text-right tabular-nums font-medium pt-3">{horasTexto(resumen.total)} de {SEMANA} h</td>
            </tr>
          </tfoot>
        </table>
        <p aria-live="polite" className="rounded-xl bg-surface-2 px-3 py-2 text-[0.9375rem] text-zinc-800">
          {libre > 0 ? `Quedan ${horasTexto(libre)} h sin planear.` : libre < 0 ? `Te pasas por ${horasTexto(-libre)} h.` : 'Cuadra exacto con las 168 horas.'}
        </p>
      </section>

      {/* Exportar */}
      <section aria-labelledby="h-exportar" className="card p-4 sm:p-6 flex flex-col gap-4 print:hidden">
        <h2 id="h-exportar" className="font-display text-xl font-normal text-zinc-900">Exportar a Google Calendar</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor={ids.fecha} className="text-sm text-zinc-600">Empezar a repetir desde</label>
            <input id={ids.fecha} type="date" className={campo} value={fechaInicio} onChange={e => setFechaInicio(e.target.value)} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor={ids.semanas} className="text-sm text-zinc-600">Repetir</label>
            <select id={ids.semanas} className={campo} value={semanas} onChange={e => setSemanas(e.target.value)}>
              <option value="">Cada semana, sin fecha de fin</option>
              <option value="4">Durante 4 semanas (un módulo)</option>
              <option value="8">Durante 8 semanas</option>
              <option value="16">Durante 16 semanas</option>
            </select>
          </div>
        </div>
        <label htmlFor={ids.solo} className="flex items-start gap-3 text-[0.9375rem] text-zinc-700 min-h-[44px]">
          <input id={ids.solo} type="checkbox" className="mt-1 w-5 h-5 accent-[var(--color-accent)]" checked={soloEstudio} onChange={e => setSoloEstudio(e.target.checked)} />
          <span>Exportar solo los bloques de Estudio y Revisión semanal</span>
        </label>
        <div>
          <button type="button" className={btnPrimario} onClick={exportarIcs}>
            <CalendarPlus weight="bold" className="w-[18px] h-[18px]" aria-hidden="true" />
            Descargar .ics
          </button>
        </div>
        <Aviso texto={aviso} />
        <div className="text-[0.9375rem] text-zinc-700 flex flex-col gap-2">
          <p className="font-medium text-zinc-900">Cómo importarlo en Google Calendar (desde la computadora)</p>
          <ol className="list-decimal pl-5 flex flex-col gap-1">
            <li>Conviene crear antes un calendario llamado «Medicina»: así puedes ocultarlo, cambiarle el color o borrarlo completo sin tocar tus otros eventos.</li>
            <li>Abre calendar.google.com, entra a Configuración (el engrane) y luego a Importar y exportar.</li>
            <li>Elige el archivo .ics que descargaste y, en «Agregar al calendario», selecciona «Medicina».</li>
            <li>Toca Importar. Los bloques aparecen cada semana a la hora de Ciudad de México.</li>
          </ol>
          <p className="text-sm text-zinc-500">Desde la app del celular no se pueden importar archivos .ics; hazlo una vez desde la computadora y se sincroniza solo.</p>
        </div>
      </section>

      {editando && (
        <EditorBloque
          inicial={editando.bloque}
          nuevo={editando.nuevo}
          ocupante={ocupante}
          onGuardar={guardarBloque}
          onEliminar={eliminarBloque}
          onCerrar={() => setEditando(null)}
        />
      )}
    </div>
  )
}

/* ── Editor de bloque (cuadro de diálogo nativo, accesible con teclado) ── */

function EditorBloque({ inicial, nuevo, ocupante, onGuardar, onEliminar, onCerrar }: {
  inicial: Bloque
  nuevo: boolean
  ocupante: (dia: number, franja: number, excluir?: string) => Bloque | undefined
  onGuardar: (b: Bloque) => void
  onEliminar: (id: string) => void
  onCerrar: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)
  const [b, setB] = useState<Bloque>(inicial)
  const [error, setError] = useState('')
  const uid = useId()
  const id = (s: string) => `${uid}-${s}`

  useEffect(() => {
    const d = ref.current
    if (d && !d.open) d.showModal()
  }, [])

  const asignado = b.dia != null && b.inicio != null
  const maxDuracion = asignado ? FIN_DIA - b.inicio! : 8 * 60
  const duraciones = Array.from({ length: Math.min(maxDuracion, 12 * 60) / PASO }, (_, i) => (i + 1) * PASO)

  function enviar(e: FormEvent) {
    e.preventDefault()
    if (pideAccion(b.categoria) && !b.accion.trim()) {
      setError('Escribe una acción concreta: qué vas a hacer y cuánto (p. ej. «Histología: 20 preguntas de tejido conjuntivo»).')
      return
    }
    if (asignado) {
      for (let f = franjaDe(b.inicio!); f < franjaDe(b.inicio!) + b.duracion / PASO; f++) {
        const otro = ocupante(b.dia!, f, b.id)
        if (otro) { setError(`Se encima con «${otro.accion || otro.titulo || nombreCategoria(otro.categoria)}». Ajusta la hora o la duración.`); return }
      }
    }
    onGuardar({ ...b, titulo: b.titulo.trim(), accion: b.accion.trim(), dia: asignado ? b.dia : null, inicio: asignado ? b.inicio : null })
  }

  return (
    <dialog
      ref={ref}
      onClose={onCerrar}
      aria-labelledby={id('t')}
      className="w-[min(32rem,calc(100vw-2rem))] max-h-[calc(100dvh-2rem)] rounded-3xl bg-surface text-zinc-900 p-0 shadow-pop backdrop:bg-black/40"
    >
      <form onSubmit={enviar} className="p-5 sm:p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <h2 id={id('t')} className="font-display text-xl font-normal">{nuevo ? 'Nuevo bloque' : 'Editar bloque'}</h2>
          <button type="button" onClick={() => ref.current?.close()} className="w-11 h-11 rounded-xl flex items-center justify-center hover:bg-zinc-100" aria-label="Cerrar sin guardar">
            <X weight="bold" className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor={id('cat')} className="text-sm text-zinc-600">Categoría</label>
          <select id={id('cat')} className={campo} value={b.categoria}
                  onChange={e => { setB({ ...b, categoria: e.target.value as Categoria }); setError('') }}>
            {CATEGORIAS.map(c => <option key={c.id} value={c.id}>{c.nombre}</option>)}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor={id('tit')} className="text-sm text-zinc-600">{pideAccion(b.categoria) ? 'Materia' : 'Título'}</label>
          <input id={id('tit')} className={campo} value={b.titulo} maxLength={80}
                 placeholder={pideAccion(b.categoria) ? 'Histología' : nombreCategoria(b.categoria)}
                 onChange={e => setB({ ...b, titulo: e.target.value })} />
        </div>

        {(pideAccion(b.categoria) || b.categoria === 'revision' || b.accion) && (
          <div className="flex flex-col gap-1.5">
            <label htmlFor={id('acc')} className="text-sm text-zinc-600">
              Acción concreta{pideAccion(b.categoria) ? ' (obligatoria)' : ''}
            </label>
            <input id={id('acc')} className={campo} value={b.accion} maxLength={140}
                   placeholder="Histología: 20 preguntas de tejido conjuntivo"
                   aria-describedby={error ? id('err') : undefined}
                   aria-invalid={!!error && pideAccion(b.categoria) && !b.accion.trim()}
                   onChange={e => { setB({ ...b, accion: e.target.value }); setError('') }} />
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5 col-span-2">
            <label htmlFor={id('dia')} className="text-sm text-zinc-600">Día</label>
            <select id={id('dia')} className={campo} value={b.dia ?? ''}
                    onChange={e => {
                      const v = e.target.value === '' ? null : Number(e.target.value)
                      setB({ ...b, dia: v, inicio: v == null ? null : b.inicio ?? 7 * 60 }); setError('')
                    }}>
              <option value="">Sin asignar</option>
              {DIAS.map((d, i) => <option key={d} value={i}>{d}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor={id('ini')} className="text-sm text-zinc-600">Inicio</label>
            <select id={id('ini')} className={campo} value={b.inicio ?? ''} disabled={b.dia == null}
                    onChange={e => {
                      const inicio = Number(e.target.value)
                      setB({ ...b, inicio, duracion: Math.min(b.duracion, FIN_DIA - inicio) }); setError('')
                    }}>
              {b.dia == null && <option value="">Sin hora</option>}
              {HORAS_INICIO.map(m => <option key={m} value={m}>{horaTexto(m)}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor={id('dur')} className="text-sm text-zinc-600">Duración</label>
            <select id={id('dur')} className={campo} value={b.duracion}
                    onChange={e => { setB({ ...b, duracion: Number(e.target.value) }); setError('') }}>
              {duraciones.map(m => <option key={m} value={m}>{duracionTexto(m)}</option>)}
            </select>
          </div>
        </div>

        {error && <p id={id('err')} role="alert" className="text-[0.9375rem] text-primary-ink bg-primary-tint rounded-xl px-3 py-2">{error}</p>}

        <div className="flex flex-wrap gap-2 justify-between">
          {!nuevo ? (
            <button type="button" className={btnSecundario} onClick={() => onEliminar(b.id)}>Eliminar</button>
          ) : <span />}
          <div className="flex gap-2">
            <button type="button" className={btnSecundario} onClick={() => ref.current?.close()}>Cancelar</button>
            <button type="submit" className={btnPrimario}>Guardar</button>
          </div>
        </div>
      </form>
    </dialog>
  )
}
