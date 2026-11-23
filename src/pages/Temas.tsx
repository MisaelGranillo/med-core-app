/* Índice de Temas — ruta /estudio
 *
 * Guías de estudio agrupadas como en el plan: semestre → materia → semana.
 * Filtros: semestre (si hay más de uno), materia (?materia=<id>) y texto.
 * Doble acción por tema: Estudiar / Quiz. */

import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight, BookOpen, MagnifyingGlass, X } from '@phosphor-icons/react'
import { topicIndex as topics, type TopicSummary } from '../data/generated/topicIndex'
import { TOPIC_COLORS } from '../data/colors'
import { agruparPorMateria, nombreCorto, periodos, normalizar } from '../data/agrupar'
import { useProgress } from '../store/useProgress'

function TemaCard({ t }: { t: TopicSummary }) {
  const { getSectionsRead } = useProgress()
  const colors = TOPIC_COLORS[t.colorKey]
  const read = getSectionsRead(t.id).length
  const pct = t.sectionCount > 0 ? Math.round((read / t.sectionCount) * 100) : 0
  return (
    <div className="card p-4 flex flex-col gap-3 h-full">
      <div className="flex items-start gap-2 min-w-0">
        <span className="text-2xl flex-shrink-0">{t.emoji}</span>
        <div className="min-w-0">
          <h3 className="font-bold text-sm leading-snug text-zinc-900">{t.title}</h3>
          <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mt-0.5">{t.subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
          <div className={`h-full ${colors.dot} rounded-full transition-all`} style={{ width: `${pct}%` }} />
        </div>
        <span className="text-xs font-semibold text-zinc-400 flex-shrink-0">{read}/{t.sectionCount}</span>
      </div>
      <div className="flex items-center gap-2 mt-auto">
        <Link
          to={`/topic/${t.id}`}
          className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-primary text-primary-fg hover:bg-primary-hover transition-colors"
        >
          <BookOpen weight="bold" className="w-3.5 h-3.5" /> Estudiar
        </Link>
        {t.questionCount > 0 && (
          <Link
            to={`/quiz/${t.id}`}
            className={`flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl ${colors.badge} transition-colors`}
          >
            Quiz · {t.questionCount} <ArrowRight weight="bold" className="w-3 h-3" />
          </Link>
        )}
      </div>
    </div>
  )
}

export function Temas() {
  const [params, setParams] = useSearchParams()
  const [texto, setTexto] = useState('')
  const todos = useMemo(() => agruparPorMateria(topics), [])
  const sems = periodos(todos)
  const periodo = Number(params.get('semestre')) || sems[sems.length - 1]?.n
  const materia = params.get('materia') ?? ''

  const setParam = (k: string, v: string) => {
    const p = new URLSearchParams(params)
    if (v) p.set(k, v); else p.delete(k)
    if (k === 'semestre') p.delete('materia')
    setParams(p, { replace: true })
  }

  const q = normalizar(texto.trim())
  const delPeriodo = todos.filter((g) => g.materia.periodo === periodo)
  const visibles = agruparPorMateria(
    topics.filter((t) => t.periodo === periodo && (!materia || t.materia === materia)
      && (!q || normalizar(`${t.title} ${t.subtitle}`).includes(q))),
  )
  const totalVisibles = visibles.reduce((n, g) => n + g.total, 0)

  return (
    <main className="flex-1 pb-20 md:pb-0">
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <h1 className="font-display font-light text-[2.25rem] sm:text-[2.75rem] leading-[1.05] tracking-[-0.025em] text-zinc-900 mb-2">
            Guías de estudio
          </h1>
          <p className="text-zinc-500 text-base max-w-[60ch]">
            {topics.length} temas, ordenados como el plan: materia y semana. Lee la guía y ponte a prueba con el quiz.
          </p>

          {sems.length > 1 && (
            <div className="flex flex-wrap gap-1.5 mt-5">
              {sems.map((s) => (
                <button key={s.n} onClick={() => setParam('semestre', String(s.n))}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${periodo === s.n ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'}`}>
                  {s.label}
                </button>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-1.5 mt-4">
            <button onClick={() => setParam('materia', '')}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${!materia ? 'bg-primary text-primary-fg' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'}`}>
              Todas
            </button>
            {delPeriodo.map(({ materia: m, total }) => (
              <button key={m.id} onClick={() => setParam('materia', m.id)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors inline-flex items-center gap-1.5 ${materia === m.id ? 'bg-primary text-primary-fg' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'}`}>
                <span>{m.emoji}</span>{nombreCorto(m.nombre)}<span className="opacity-60">{total}</span>
              </button>
            ))}
          </div>

          <label className="relative block mt-4 max-w-md">
            <MagnifyingGlass className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              placeholder="Filtrar temas por nombre…"
              className="w-full bg-surface border border-zinc-200 rounded-xl pl-9 pr-9 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            {texto && (
              <button onClick={() => setTexto('')} aria-label="Borrar filtro" className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700">
                <X className="w-4 h-4" />
              </button>
            )}
          </label>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-10">
        {totalVisibles === 0 && (
          <p className="text-sm text-zinc-500">
            Ningún tema coincide. Prueba el <Link to={`/search?q=${encodeURIComponent(texto)}`} className="underline">buscador</Link>, que también revisa el contenido de cada guía.
          </p>
        )}
        {visibles.map(({ materia: m, semanas, total }) => (
          <section key={m.id}>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xl">{m.emoji}</span>
              <h2 className="font-display font-normal text-zinc-900 text-xl">{m.nombre}</h2>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${TOPIC_COLORS[m.colorKey].badge}`}>{total} temas</span>
              <Link to={`/plan/${m.id}`} className="ml-auto text-xs font-semibold text-zinc-500 hover:text-zinc-900 inline-flex items-center gap-1">
                Ver materia <ArrowRight weight="bold" className="w-3 h-3" />
              </Link>
            </div>
            <div className="space-y-5">
              {semanas.map((w) => (
                <div key={w.n ?? 'repasos'}>
                  <h3 className="text-xs font-bold text-zinc-400 mb-2">
                    {w.n !== null ? `Semana ${w.n}` : w.titulo}
                    {w.n !== null && w.titulo && <span className="font-medium"> · {w.titulo}</span>}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {w.temas.map((t) => <TemaCard key={t.id} t={t} />)}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
