/* Taller — matriz de Eisenhower (/taller/matriz)
 *
 * Cuatro cuadrantes; el II (importante, no urgente) se resalta porque ahí vive
 * el estudio de fondo. Las tareas se mueven arrastrando (escritorio) o con el
 * menú «Mover a» (cualquier dispositivo), se marcan como hechas y, desde el
 * cuadrante II, se mandan al planificador como bloques de estudio sin hora. */

import { useId, useState, type DragEvent, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { CalendarPlus, DownloadSimple, Plus, Printer, Trash } from '@phosphor-icons/react'
import { useAlmacenLocal } from './lib/almacen'
import { celdaMd, descargarTexto, hoyIso } from './lib/archivos'
import { agregarBloqueSinHora, nuevoId } from './lib/planificador'
import { Aviso, DatosLocales, EncabezadoHerramienta, btnPrimario, btnSecundario, campo } from './ui/comun'

type Cuadrante = 1 | 2 | 3 | 4
interface Tarea { id: string; texto: string; cuadrante: Cuadrante; hecha: boolean; enPlanificador?: boolean }
interface Datos { tareas: Tarea[] }

const CUADRANTES: { n: Cuadrante; romano: string; accion: string; criterio: string }[] = [
  { n: 1, romano: 'I',   accion: 'Hazlo hoy',        criterio: 'Urgente e importante' },
  { n: 2, romano: 'II',  accion: 'Agenda un bloque', criterio: 'Importante, no urgente' },
  { n: 3, romano: 'III', accion: 'Delega o limita',  criterio: 'Urgente, no importante' },
  { n: 4, romano: 'IV',  accion: 'Elimina',          criterio: 'Ni urgente ni importante' },
]

const vacio = (): Datos => ({ tareas: [] })

function normalizar(v: unknown): Datos {
  const d = v as Partial<Datos>
  const tareas = (Array.isArray(d?.tareas) ? d.tareas : [])
    .filter((t): t is Tarea => typeof t?.id === 'string' && typeof t?.texto === 'string')
    .map(t => ({ ...t, cuadrante: ([1, 2, 3, 4].includes(t.cuadrante) ? t.cuadrante : 1) as Cuadrante, hecha: !!t.hecha }))
  return { tareas }
}

export function TallerMatriz() {
  const { valor, setValor, disponible, borrar } = useAlmacenLocal<Datos>('matriz', vacio, normalizar)
  const [texto, setTexto] = useState('')
  const [destino, setDestino] = useState<Cuadrante>(2)
  const [aviso, setAviso] = useState('')
  const [sobre, setSobre] = useState<Cuadrante | null>(null)
  const ids = { texto: useId(), destino: useId() }

  const actualizar = (id: string, cambio: Partial<Tarea>) =>
    setValor(d => ({ tareas: d.tareas.map(t => (t.id === id ? { ...t, ...cambio } : t)) }))

  function agregar(e: FormEvent) {
    e.preventDefault()
    const limpio = texto.trim()
    if (!limpio) return
    setValor(d => ({ tareas: [...d.tareas, { id: nuevoId(), texto: limpio, cuadrante: destino, hecha: false }] }))
    setTexto('')
    setAviso(`Agregado al cuadrante ${CUADRANTES[destino - 1].romano}.`)
  }

  function mandarAlPlanificador(t: Tarea) {
    if (agregarBloqueSinHora('', t.texto)) {
      actualizar(t.id, { enPlanificador: true })
      setAviso(`«${t.texto}» quedó en «Por agendar» del planificador.`)
    } else {
      setAviso('No se pudo guardar en el planificador: este navegador no permite guardar.')
    }
  }

  function soltar(e: DragEvent, c: Cuadrante) {
    e.preventDefault()
    const id = e.dataTransfer.getData('text/plain')
    if (id) actualizar(id, { cuadrante: c })
    setSobre(null)
  }

  function exportar() {
    const fecha = hoyIso()
    const partes = ['# Matriz de Eisenhower', '', `Fecha: ${fecha}`, '']
    for (const c of CUADRANTES) {
      partes.push(`## ${c.romano}. ${c.accion} (${c.criterio.toLowerCase()})`, '')
      const lista = valor.tareas.filter(t => t.cuadrante === c.n)
      partes.push(...(lista.length ? lista.map(t => `- [${t.hecha ? 'x' : ' '}] ${celdaMd(t.texto)}`) : ['_Sin pendientes._']), '')
    }
    descargarTexto(`${fecha}_matriz-eisenhower.md`, partes.join('\n'), 'text/markdown')
    setAviso('Archivo .md descargado.')
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-12 flex flex-col gap-6">
      <EncabezadoHerramienta bloque="Bloque 3 · El sistema" titulo="Matriz de Eisenhower">
        <p>Clasifica cada pendiente con dos preguntas: ¿es urgente? ¿es importante? El estudio de fondo casi siempre vive en el cuadrante II: si no le das un bloque en tu semana, lo urgente se lo come.</p>
      </EncabezadoHerramienta>

      <DatosLocales disponible={disponible} onBorrar={() => { borrar(); setAviso('Datos borrados.') }} />

      <form onSubmit={agregar} className="card p-4 sm:p-5 grid gap-3 sm:grid-cols-[1fr_14rem_auto] items-end print:hidden">
        <div className="flex flex-col gap-1.5 min-w-0">
          <label htmlFor={ids.texto} className="text-sm text-zinc-600">Pendiente</label>
          <input id={ids.texto} className={campo} value={texto} maxLength={140} onChange={e => setTexto(e.target.value)}
                 placeholder="Repasar ciclo de Krebs para el examen del viernes" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor={ids.destino} className="text-sm text-zinc-600">Cuadrante</label>
          <select id={ids.destino} className={campo} value={destino} onChange={e => setDestino(Number(e.target.value) as Cuadrante)}>
            {CUADRANTES.map(c => <option key={c.n} value={c.n}>{c.romano}. {c.accion}</option>)}
          </select>
        </div>
        <button type="submit" className={btnPrimario}>
          <Plus weight="bold" className="w-[18px] h-[18px]" aria-hidden="true" />
          Agregar
        </button>
      </form>

      <Aviso texto={aviso} />

      <div className="grid gap-3 md:grid-cols-2">
        {CUADRANTES.map(c => {
          const lista = valor.tareas.filter(t => t.cuadrante === c.n)
          const destacado = c.n === 2
          return (
            <section
              key={c.n}
              aria-labelledby={`h-c${c.n}`}
              onDragOver={e => { e.preventDefault(); setSobre(c.n) }}
              onDragLeave={() => setSobre(s => (s === c.n ? null : s))}
              onDrop={e => soltar(e, c.n)}
              className={`rounded-3xl border p-4 sm:p-5 flex flex-col gap-3 min-h-[10rem] print:break-inside-avoid transition-colors
                ${destacado ? 'bg-primary-tint border-primary' : 'bg-surface border-zinc-200'}
                ${sobre === c.n ? 'ring-2 ring-primary' : ''}`}
            >
              <div>
                <h2 id={`h-c${c.n}`} className={`font-display text-xl font-normal ${destacado ? 'text-primary-ink' : 'text-zinc-900'}`}>
                  {c.romano}. {c.accion}
                </h2>
                <p className={`text-sm ${destacado ? 'text-primary-ink' : 'text-zinc-500'}`}>{c.criterio}</p>
              </div>
              {lista.length === 0 ? (
                <p className="text-sm text-zinc-500">Sin pendientes.</p>
              ) : (
                <ul className="flex flex-col gap-2">
                  {lista.map(t => (
                    <li
                      key={t.id}
                      draggable
                      onDragStart={e => { e.dataTransfer.setData('text/plain', t.id); e.dataTransfer.effectAllowed = 'move' }}
                      className="rounded-2xl bg-surface border border-zinc-200 p-3 flex flex-col gap-2 cursor-grab active:cursor-grabbing"
                    >
                      <label className="flex items-start gap-3 min-h-[44px]">
                        <input type="checkbox" className="mt-1 w-5 h-5 flex-shrink-0 accent-[var(--color-accent)]" checked={t.hecha}
                               onChange={e => actualizar(t.id, { hecha: e.target.checked })} />
                        <span className={`text-[0.9375rem] min-w-0 break-words ${t.hecha ? 'line-through text-zinc-500' : 'text-zinc-900'}`}>{t.texto}</span>
                      </label>
                      <div className="flex flex-wrap items-center gap-2 print:hidden">
                        <select
                          aria-label={`Mover «${t.texto}» a otro cuadrante`}
                          className="min-h-[44px] rounded-xl border border-zinc-200 bg-surface px-2 text-sm text-zinc-700"
                          value=""
                          onChange={e => { const n = Number(e.target.value) as Cuadrante; actualizar(t.id, { cuadrante: n }); setAviso(`Movido al cuadrante ${CUADRANTES[n - 1].romano}.`) }}
                        >
                          <option value="" disabled>Mover a…</option>
                          {CUADRANTES.filter(x => x.n !== c.n).map(x => <option key={x.n} value={x.n}>{x.romano}. {x.accion}</option>)}
                        </select>
                        {c.n === 2 && (
                          <button type="button" className={`${btnSecundario} text-sm`} disabled={t.enPlanificador} onClick={() => mandarAlPlanificador(t)}>
                            <CalendarPlus weight="regular" className="w-[18px] h-[18px]" aria-hidden="true" />
                            {t.enPlanificador ? 'En el planificador' : 'Mandar al planificador'}
                          </button>
                        )}
                        <button type="button" className="w-11 h-11 rounded-xl flex items-center justify-center text-zinc-500 hover:bg-zinc-100"
                                aria-label={`Eliminar «${t.texto}»`}
                                onClick={() => setValor(d => ({ tareas: d.tareas.filter(x => x.id !== t.id) }))}>
                          <Trash weight="regular" className="w-[18px] h-[18px]" aria-hidden="true" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )
        })}
      </div>

      <div className="flex flex-wrap gap-2 print:hidden">
        <button type="button" className={btnPrimario} onClick={exportar}>
          <DownloadSimple weight="bold" className="w-[18px] h-[18px]" aria-hidden="true" />
          Exportar a .md
        </button>
        <button type="button" className={btnSecundario} onClick={() => window.print()}>
          <Printer weight="regular" className="w-[18px] h-[18px]" aria-hidden="true" />
          Imprimir
        </button>
        <Link to="/taller/planificador" className={btnSecundario}>Ir al planificador</Link>
      </div>
    </div>
  )
}
