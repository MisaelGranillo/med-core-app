/* Taller — revisión semanal (/taller/revision)
 *
 * Checklist de 20 minutos con sus campos, notas y exportación a .md con fecha.
 * «Nueva revisión» borra lo guardado para empezar la semana siguiente. */

import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { DownloadSimple } from '@phosphor-icons/react'
import { useAlmacenLocal } from './lib/almacen'
import { descargarTexto, hoyIso } from './lib/archivos'
import { Aviso, DatosLocales, EncabezadoHerramienta, btnPrimario, campo } from './ui/comun'

interface Datos {
  hechos: Record<string, boolean>
  planeados: string
  cumplidos: string
  proximos: string
  costo: string
  plan: string
  ajuste: string
  flashcards: string
  notas: string
}

const vacio = (): Datos => ({ hechos: {}, planeados: '', cumplidos: '', proximos: '', costo: '', plan: '', ajuste: '', flashcards: '', notas: '' })
function normalizar(v: unknown): Datos {
  const d = (v ?? {}) as Partial<Datos>
  const base = vacio()
  for (const k of Object.keys(base) as (keyof Datos)[]) {
    if (k === 'hechos') base.hechos = d.hechos && typeof d.hechos === 'object' ? { ...d.hechos } : {}
    else if (typeof d[k] === 'string') (base[k] as string) = d[k] as string
  }
  return base
}

const PASOS = [
  { id: 'bloques',    min: 5, titulo: 'Bloques cumplidos',            ayuda: 'Cuenta los bloques de estudio que planeaste y los que cumpliste. Sin juzgarte: son datos.' },
  { id: 'proximos',   min: 5, titulo: 'Entregas y exámenes en 14 días', ayuda: 'Revisa la plataforma y anota todo lo que vence en las próximas dos semanas.' },
  { id: 'costo',      min: 4, titulo: 'El tema que más me costó',      ayuda: '¿Qué tema se te atoró y qué vas a hacer distinto con él?' },
  { id: 'ajuste',     min: 4, titulo: 'Ajuste del calendario',         ayuda: 'Mueve bloques en tu semana ideal según lo que viene. Si algo no cupo, decide qué sale.' },
  { id: 'flashcards', min: 2, titulo: 'Repaso de flashcards',          ayuda: 'Repasa las tarjetas pendientes de la semana (Anki, Gemini Notebook o en papel).' },
] as const

const num = (s: string) => { const n = Number(s.replace(',', '.')); return Number.isFinite(n) && n >= 0 ? n : 0 }

export function TallerRevision() {
  const { valor: d, setValor, disponible, borrar } = useAlmacenLocal<Datos>('revision', vacio, normalizar)
  const [aviso, setAviso] = useState('')
  const uid = useId()
  const id = (s: string) => `${uid}-${s}`
  const set = <K extends keyof Datos>(k: K, v: Datos[K]) => setValor(p => ({ ...p, [k]: v }))
  const hechos = PASOS.filter(p => d.hechos[p.id]).length
  const planeados = num(d.planeados), cumplidos = num(d.cumplidos)
  const pct = planeados ? Math.round((cumplidos / planeados) * 100) : null

  function exportar() {
    const fecha = hoyIso()
    const casilla = (pid: string) => (d.hechos[pid] ? 'x' : ' ')
    const o = (s: string) => s.trim() || '_Sin anotar._'
    const md = [
      '# Revisión semanal',
      '',
      `Fecha: ${fecha}`,
      '',
      `## [${casilla('bloques')}] Bloques cumplidos`,
      '',
      `- Planeados: ${d.planeados || '0'}`,
      `- Cumplidos: ${d.cumplidos || '0'}${pct != null ? ` (${pct} %)` : ''}`,
      '',
      `## [${casilla('proximos')}] Entregas y exámenes en 14 días`,
      '',
      o(d.proximos),
      '',
      `## [${casilla('costo')}] El tema que más me costó`,
      '',
      o(d.costo),
      '',
      `Qué haré distinto: ${o(d.plan)}`,
      '',
      `## [${casilla('ajuste')}] Ajuste del calendario`,
      '',
      o(d.ajuste),
      '',
      `## [${casilla('flashcards')}] Repaso de flashcards`,
      '',
      o(d.flashcards),
      '',
      '## Notas',
      '',
      o(d.notas),
      '',
    ].join('\n')
    descargarTexto(`${fecha}_revision-semanal.md`, md, 'text/markdown')
    setAviso('Archivo .md descargado.')
  }

  const area = `${campo} py-2`

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6 pb-12 flex flex-col gap-6">
      <EncabezadoHerramienta bloque="Cierre · Plan de 7 días" titulo="Revisión semanal">
        <p>20 minutos el domingo. Trata tu semana como un experimento: revisas los datos, ajustas y planeas la siguiente.</p>
      </EncabezadoHerramienta>

      <DatosLocales disponible={disponible} onBorrar={() => { borrar(); setAviso('Lista para una nueva revisión.') }} />

      <p aria-live="polite" className="text-[0.9375rem] text-zinc-700">
        {hechos} de {PASOS.length} pasos completos
      </p>

      <ol className="flex flex-col gap-3">
        {PASOS.map((p, i) => (
          <li key={p.id} className={`card p-4 sm:p-5 flex flex-col gap-3 ${d.hechos[p.id] ? 'opacity-80' : ''}`}>
            <label className="flex items-start gap-3 min-h-[44px]">
              <input type="checkbox" className="mt-1 w-5 h-5 flex-shrink-0 accent-[var(--color-accent)]" checked={!!d.hechos[p.id]}
                     onChange={e => set('hechos', { ...d.hechos, [p.id]: e.target.checked })} />
              <span>
                <span className="block text-base text-zinc-900">{i + 1}. {p.titulo} <span className="text-sm text-zinc-500">({p.min} min)</span></span>
                <span className="block text-sm text-zinc-600 mt-0.5">{p.ayuda}</span>
              </span>
            </label>

            {p.id === 'bloques' && (
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor={id('pl')} className="text-sm text-zinc-600">Planeados</label>
                  <input id={id('pl')} inputMode="numeric" className={campo} value={d.planeados} onChange={e => set('planeados', e.target.value.replace(/[^\d]/g, ''))} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor={id('cu')} className="text-sm text-zinc-600">Cumplidos</label>
                  <input id={id('cu')} inputMode="numeric" className={campo} value={d.cumplidos} onChange={e => set('cumplidos', e.target.value.replace(/[^\d]/g, ''))} />
                </div>
                {pct != null && <p className="col-span-2 text-sm text-zinc-600" aria-live="polite">Cumpliste el {pct} % de lo planeado.</p>}
              </div>
            )}
            {p.id === 'proximos' && (
              <div className="flex flex-col gap-1.5">
                <label htmlFor={id('pr')} className="text-sm text-zinc-600">Qué vence y cuándo</label>
                <textarea id={id('pr')} rows={3} className={area} value={d.proximos} onChange={e => set('proximos', e.target.value)}
                          placeholder="Examen de Bioquímica, viernes 13" />
              </div>
            )}
            {p.id === 'costo' && (
              <div className="grid gap-3">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor={id('co')} className="text-sm text-zinc-600">Tema</label>
                  <input id={id('co')} className={campo} value={d.costo} onChange={e => set('costo', e.target.value)} placeholder="Tejido conjuntivo" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor={id('pn')} className="text-sm text-zinc-600">Qué haré distinto</label>
                  <input id={id('pn')} className={campo} value={d.plan} onChange={e => set('plan', e.target.value)} placeholder="Caso clínico con la IA y 20 preguntas" />
                </div>
              </div>
            )}
            {p.id === 'ajuste' && (
              <div className="flex flex-col gap-1.5">
                <label htmlFor={id('aj')} className="text-sm text-zinc-600">Qué muevo, agrego o quito</label>
                <textarea id={id('aj')} rows={3} className={area} value={d.ajuste} onChange={e => set('ajuste', e.target.value)} />
                <Link to="/taller/planificador" className="text-sm text-primary underline underline-offset-2 self-start min-h-[44px] flex items-center">Abrir mi semana ideal</Link>
              </div>
            )}
            {p.id === 'flashcards' && (
              <div className="flex flex-col gap-1.5">
                <label htmlFor={id('fc')} className="text-sm text-zinc-600">Qué repasé</label>
                <input id={id('fc')} className={campo} value={d.flashcards} onChange={e => set('flashcards', e.target.value)} placeholder="40 tarjetas de Histología" />
              </div>
            )}
          </li>
        ))}
      </ol>

      <section aria-labelledby="h-notas" className="card p-4 sm:p-5 flex flex-col gap-2">
        <h2 id="h-notas" className="font-display text-xl font-normal text-zinc-900">Notas</h2>
        <label htmlFor={id('no')} className="sr-only">Notas de la semana</label>
        <textarea id={id('no')} rows={4} className={area} value={d.notas} onChange={e => set('notas', e.target.value)} />
      </section>

      <div className="flex flex-col gap-2">
        <div>
          <button type="button" className={btnPrimario} onClick={exportar}>
            <DownloadSimple weight="bold" className="w-[18px] h-[18px]" aria-hidden="true" />
            Exportar a .md
          </button>
        </div>
        <Aviso texto={aviso} />
      </div>
    </div>
  )
}
