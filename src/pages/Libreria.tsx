/* Librería — Ruta /libreria
 *
 * Catálogo de los libros en PDF ordenado como la estantería de una biblioteca
 * médica: por clase NLM y, dentro de cada clase, por signatura topográfica
 * (número → marca de autor → año). Cada ficha lleva su etiqueta de lomo.
 * Búsqueda por título/autor/signatura y filtro por materia (?materia=id). */

import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowSquareOut, LockSimple, MagnifyingGlass, X } from '@phosphor-icons/react'
import {
  LIBROS, NLM_CLASSES, libroPrivado, libroUrl, ordenEstante, signatura, signaturaTexto,
  type LibroCatalogo,
} from '../data/libreria'

/* Nombres cortos de materia para los filtros; '' agrupa la consulta general. */
const MATERIAS: { id: string; label: string }[] = [
  { id: 'anatomia-humana-diseccion-1', label: 'Anatomía' },
  { id: 'histologia-1', label: 'Histología' },
  { id: 'embriologia-1', label: 'Embriología' },
  { id: 'bioquimica-1', label: 'Bioquímica' },
  { id: 'genetica-basica', label: 'Genética' },
  { id: 'ingles-medico-1', label: 'Inglés médico' },
  { id: 'consulta', label: 'Consulta general' },
]
const materiaLabel = (id: string) => MATERIAS.find((m) => m.id === id)?.label ?? id
const enMateria = (l: LibroCatalogo, id: string) => (id === 'consulta' ? l.materias.length === 0 : l.materias.includes(id))

const ESTANTE = [...LIBROS].sort(ordenEstante)
const FILTROS = MATERIAS
  .map((m) => ({ ...m, count: LIBROS.filter((l) => enMateria(l, m.id)).length }))
  .filter((m) => m.count > 0)

const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
const autoresCorto = (a: string[]) => {
  const ap = a.map((x) => x.split(',')[0])
  return ap.length > 3 ? `${ap.slice(0, 2).join(', ')} et al.` : ap.join(', ')
}

export function Libreria() {
  const [params, setParams] = useSearchParams()
  const [q, setQ] = useState('')

  const selected = params.get('materia')
  const active = selected && FILTROS.some((f) => f.id === selected) ? selected : null

  const libros = useMemo(() => {
    const term = fold(q.trim())
    return ESTANTE.filter((l) => {
      if (active && !enMateria(l, active)) return false
      if (!term) return true
      // «Serie RT» es como se conoce a la Serie Revisión de Temas
      const serie = l.serie ? `${l.serie} serie rt` : ''
      const hay = fold([l.titulo, serie, l.autores.join(' '), l.editorial, signaturaTexto(l)].join(' '))
      return term.split(/\s+/).every((t) => hay.includes(t))
    })
  }, [q, active])

  const estantes = NLM_CLASSES
    .map((c) => ({ ...c, libros: libros.filter((l) => l.clase === c.code) }))
    .filter((c) => c.libros.length > 0)

  const setFilter = (id: string | null) => setParams(id ? { materia: id } : {}, { replace: true })

  const chip = (on: boolean) =>
    `inline-flex items-center gap-2 h-10 px-4 rounded-full text-[0.9375rem] whitespace-nowrap transition-colors flex-shrink-0
     ${on ? 'bg-primary text-primary-fg' : 'bg-surface border border-zinc-200 text-zinc-700 hover:border-zinc-300'}`

  return (
    <main className="flex-1">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-12 flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <h1 className="font-display font-light text-[2.25rem] sm:text-[2.75rem] leading-[1.05] tracking-[-0.025em] text-zinc-900">
            Librería
          </h1>
          <p className="text-base text-zinc-500 max-w-[62ch]">
            {LIBROS.length} libros ordenados con la Clasificación NLM, la de las bibliotecas médicas.
            La signatura de cada lomo se lee clase · número · autor · año.
          </p>
        </header>

        <div className="flex flex-col gap-3">
          <label className="relative block">
            <span className="sr-only">Buscar en la librería</span>
            <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Título, autor o signatura"
              className="w-full h-12 pl-12 pr-11 rounded-full bg-surface border border-zinc-200 text-[0.9375rem] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-primary [&::-webkit-search-cancel-button]:hidden"
            />
            {q && (
              <button
                type="button"
                onClick={() => setQ('')}
                aria-label="Borrar búsqueda"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-zinc-500 hover:bg-zinc-100"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </label>

          <div className="flex gap-2 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 pb-1 scrollbar-hide" role="group" aria-label="Filtrar por materia">
            <button onClick={() => setFilter(null)} aria-pressed={!active} className={chip(!active)}>
              Todas <span className={!active ? 'opacity-80' : 'text-zinc-500'}>{LIBROS.length}</span>
            </button>
            {FILTROS.map((f) => (
              <button key={f.id} onClick={() => setFilter(f.id)} aria-pressed={active === f.id} className={chip(active === f.id)}>
                {f.label}
                <span className={active === f.id ? 'opacity-80' : 'text-zinc-500'}>{f.count}</span>
              </button>
            ))}
          </div>
        </div>

        {estantes.length === 0 && (
          <p className="card p-8 text-center text-zinc-500">
            Ningún libro coincide con «{q}»{active ? ` en ${materiaLabel(active)}` : ''}.
          </p>
        )}

        {estantes.map((c) => (
          <section key={c.code} className="flex flex-col gap-3" aria-labelledby={`h-${c.code}`}>
            <h2 id={`h-${c.code}`} className="flex items-baseline gap-3 flex-wrap">
              <span className="font-display text-2xl font-normal text-primary-ink tracking-wide">{c.code}</span>
              <span className="font-display text-2xl font-light text-zinc-900">{c.label}</span>
              <span className="text-sm text-zinc-500">{c.hint}</span>
            </h2>
            <ul className="card divide-y divide-zinc-200 overflow-hidden">
              {c.libros.map((l) => <Ficha key={l.id} libro={l} />)}
            </ul>
          </section>
        ))}

        <p className="text-sm text-zinc-500 max-w-[70ch]">
          Los libros de editoriales se abren solo con tu cuenta (acceso privado); los manuales de la UAD son públicos.
          La bibliografía de cada materia también aparece en su página del <Link to="/plan" className="text-primary underline underline-offset-2">plan</Link>.
        </p>
      </div>
    </main>
  )
}

/* Etiqueta de lomo: la signatura apilada, una parte por renglón. */
function Lomo({ libro }: { libro: LibroCatalogo }) {
  const s = signatura(libro)
  const [clase, numero] = s.clase.split(' ')
  return (
    <span
      aria-hidden="true"
      className="self-start flex-shrink-0 w-[4.25rem] rounded-xl border border-zinc-200 bg-zinc-50 py-2.5 flex flex-col items-center gap-0.5 text-[0.8125rem] leading-tight text-zinc-700 tabular-nums"
    >
      <span className="text-primary-ink font-medium">{clase}</span>
      <span>{numero}</span>
      <span>{s.autor}</span>
      <span className="text-zinc-500">{s.anio}</span>
    </span>
  )
}

function Ficha({ libro: l }: { libro: LibroCatalogo }) {
  const privado = libroPrivado(l)
  const detalles = [l.edicion, l.editorial, l.anio ?? 's. f.', `${l.paginas} págs.`, l.idioma !== 'Español' ? l.idioma : null]
    .filter(Boolean)
    .join(' · ')

  return (
    <li className="flex gap-4 p-4 sm:p-5">
      <Lomo libro={l} />
      <div className="min-w-0 flex-1 flex flex-col gap-1.5 sm:flex-row sm:items-start sm:gap-6">
        <div className="min-w-0 flex-1 flex flex-col gap-1">
          <span className="sr-only">Signatura {signaturaTexto(l).replace(/\.$/, "")}.</span>
          <h3 className="font-display text-[1.1875rem] leading-snug font-normal text-zinc-900 text-balance">
            {l.titulo}
          </h3>
          <p className="text-[0.9375rem] text-zinc-700">
            {autoresCorto(l.autores)}
            {l.serie && <span className="text-zinc-500"> · {l.serie}</span>}
          </p>
          <p className="text-sm text-zinc-500">{detalles}</p>
          {l.nota && <p className="text-sm text-zinc-500 max-w-[60ch]">{l.nota}</p>}
          <div className="flex flex-wrap gap-1.5 mt-1">
            {l.formato !== 'Libro' && (
              <span className="inline-flex items-center h-6 px-2.5 rounded-full bg-zinc-100 text-xs text-zinc-700">{l.formato}</span>
            )}
            {l.materias.map((m) => (
              <Link
                key={m}
                to={`/plan/${m}`}
                className="inline-flex items-center h-6 px-2.5 rounded-full bg-primary-tint text-xs text-primary-ink hover:underline"
              >
                {materiaLabel(m)}
              </Link>
            ))}
          </div>
        </div>
        <a
          href={libroUrl(l)}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start mt-2 sm:mt-0 inline-flex items-center gap-2 h-10 px-4 rounded-full bg-surface border border-zinc-200 text-[0.9375rem] text-zinc-800 hover:border-primary hover:text-primary-ink transition-colors whitespace-nowrap"
        >
          {privado ? <LockSimple className="w-4 h-4" /> : <ArrowSquareOut className="w-4 h-4" />}
          Abrir PDF
          {privado && <span className="sr-only">(requiere acceso)</span>}
        </a>
      </div>
    </li>
  )
}
