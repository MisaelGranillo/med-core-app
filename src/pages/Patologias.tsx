/* Patologías — Rutas /patologias y /patologias/:id
 *
 * Índice: la guía «Cómo leer un caso clínico» y las fichas. Ficha: secciones
 * con los mismos bloques de los temas, lo ya estudiado (enlaces a la sección
 * exacta de cada tema y a las láminas del Atlas), aclaraciones a lo dicho en
 * clase, caso clínico con preguntas que se responden ahí mismo y las GPC. */

import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowSquareOut, CheckCircle, XCircle, Stethoscope, ListChecks } from '@phosphor-icons/react'
import { FICHAS, GUIA_CASO, patologiaById, type PatoMateria, type Patologia } from '../data/patologias'
import { topicIndex } from '../data/generated/topicIndex'
import { BlockRenderer } from '../components/SectionPanel'
import { atlasThumb } from './atlasShared'
import type { Question } from '../types'

const MATERIAS: PatoMateria[] = ['Bioquímica', 'Histología', 'Anatomía']
const materiasDe = (p: Patologia) => MATERIAS.filter((m) => p.bases.some((b) => b.materia === m))
const topicTitle = (id: string) => topicIndex.find((t) => t.id === id)?.title ?? id

/* ── Índice ─────────────────────────────────────────────────────── */

export function Patologias() {
  const guia = GUIA_CASO
  return (
    <main className="flex-1">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-12 flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <h1 className="font-display font-light text-[2.25rem] sm:text-[2.75rem] leading-[1.05] tracking-[-0.025em] text-zinc-900">
            Patologías
          </h1>
          <p className="text-base text-zinc-500 max-w-[62ch]">
            De lo que ya estudiaste a la clínica. Cada ficha enlaza a las secciones de tus temas y resume lo que
            recomienda la guía de práctica clínica (GPC) mexicana.
          </p>
        </header>

        <Link
          to={`/patologias/${guia.id}`}
          className="card p-6 sm:p-8 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] hover:border-zinc-300 transition-colors group"
        >
          <div className="flex flex-col gap-3 min-w-0">
            <span className="inline-flex items-center gap-2 text-sm text-primary-ink">
              <ListChecks weight="regular" className="w-5 h-5" />
              Empieza aquí
            </span>
            <h2 className="font-display text-[1.75rem] font-light leading-tight text-zinc-900 text-balance">{guia.title}</h2>
            <p className="text-[0.9375rem] text-zinc-600 leading-relaxed">{guia.resumen}</p>
            <span className="mt-auto inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-primary group-hover:text-primary-hover">
              Abrir la guía <ArrowRight weight="bold" className="w-4 h-4" />
            </span>
          </div>
          <ol className="flex flex-col gap-2 min-w-0" aria-label="Pasos de la guía">
            {guia.sections.map((s, i) => (
              <li key={s.id} className="flex items-center gap-3 text-[0.9375rem] text-zinc-700">
                <span className="w-6 h-6 rounded-full bg-primary-tint text-primary-ink text-xs font-medium flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <span className="leading-snug">{s.title}</span>
              </li>
            ))}
          </ol>
        </Link>

        <section className="flex flex-col gap-4" aria-labelledby="h-fichas">
          <div className="flex items-baseline justify-between gap-4">
            <h2 id="h-fichas" className="font-display text-xl font-normal text-zinc-900">Fichas</h2>
            <span className="text-sm text-zinc-500">{FICHAS.length} · vistas en sesiones integradoras</span>
          </div>
          <ul className="flex flex-col gap-3">
            {FICHAS.map((p) => (
              <li key={p.id}>
                <Link
                  to={`/patologias/${p.id}`}
                  className="card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-zinc-300 transition-colors group"
                >
                  <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                    <span className="text-sm text-zinc-500">{p.ambito}</span>
                    <h3 className="font-display text-xl font-normal text-zinc-900 leading-snug">{p.title}</h3>
                    <p className="text-[0.9375rem] text-zinc-600 leading-relaxed line-clamp-2">{p.resumen}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      {materiasDe(p).map((m) => (
                        <span key={m} className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600">{m}</span>
                      ))}
                      <span className="text-xs text-zinc-500">{p.fuentes.map((f) => f.codigo.replace(/^GPC /, '')).join(' · ')}</span>
                    </div>
                  </div>
                  <ArrowRight weight="bold" className="hidden sm:block w-5 h-5 text-zinc-400 group-hover:text-primary flex-shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <p className="text-sm text-zinc-500 max-w-[70ch]">
          Material de estudio. Los tratamientos se resumen como idea general a partir de las GPC y no sustituyen
          la valoración de un médico.
        </p>
      </div>
    </main>
  )
}

/* ── Ficha ──────────────────────────────────────────────────────── */

export function PatologiaDetalle() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const p = id ? patologiaById(id) : undefined

  useEffect(() => { if (!p) navigate('/patologias', { replace: true }) }, [p, navigate])
  useEffect(() => { window.scrollTo(0, 0) }, [id])
  if (!p) return null

  const nav = [
    ...p.sections.map((s) => ({ id: s.id, label: s.title })),
    { id: 'bases', label: 'Lo que ya estudiaste' },
    ...(p.aclaraciones.length ? [{ id: 'aclaraciones', label: 'Aclaraciones' }] : []),
    { id: 'caso', label: p.caso.titulo },
    { id: 'fuentes', label: 'Fuentes' },
  ]
  const goTo = (target: string) => {
    const el = document.getElementById(`pat-${target}`)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 76, behavior: 'smooth' })
  }

  return (
    <main className="flex-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-12 flex flex-col gap-5">
        {/* Encabezado */}
        <header className="card p-6 sm:p-8 flex flex-col gap-4">
          <Link to="/patologias" className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors w-fit">
            <ArrowLeft weight="regular" className="w-4 h-4" />
            Patologías
          </Link>
          <div>
            <p className="text-sm text-zinc-500">
              {p.ambito} · vista en {p.sesion}
            </p>
            <h1 className="mt-1 font-display font-light text-[2rem] sm:text-[2.6rem] leading-[1.08] tracking-[-0.025em] text-zinc-900 text-balance">
              {p.title}
            </h1>
            {p.aka && <p className="mt-1 text-[0.9375rem] text-zinc-500">También: {p.aka}</p>}
            <p className="mt-3 text-base sm:text-[1.0625rem] text-zinc-600 leading-relaxed max-w-[68ch]">{p.resumen}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {p.fuentes.map((f) => (
              <a
                key={f.codigo}
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                title={f.titulo}
                className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition-colors"
              >
                {f.codigo}
                <ArrowSquareOut weight="regular" className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            ))}
          </div>
        </header>

        <div className="flex gap-6 items-start">
          {/* Índice lateral (escritorio) */}
          <aside className="hidden lg:block w-60 flex-shrink-0 sticky top-20">
            <nav className="card p-3 flex flex-col" aria-label="Contenido de la ficha">
              {nav.map((n, i) => (
                <button
                  key={n.id}
                  onClick={() => goTo(n.id)}
                  className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-left text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                >
                  <span className="w-5 text-xs text-zinc-400 tabular-nums">{i < p.sections.length ? i + 1 : ''}</span>
                  <span className="leading-snug">{n.label}</span>
                </button>
              ))}
            </nav>
          </aside>

          <div className="flex-1 min-w-0 flex flex-col gap-4">
            {p.sections.map((s, i) => (
              <section key={s.id} id={`pat-${s.id}`} className="card overflow-hidden" aria-labelledby={`h-${s.id}`}>
                <div className="flex items-center gap-4 px-5 sm:px-6 py-5 border-b border-zinc-200">
                  <span className="section-number flex-shrink-0 bg-primary-tint text-primary-ink">{i + 1}</span>
                  <h2 id={`h-${s.id}`} className="font-display text-lg font-normal text-zinc-900 leading-snug">{s.title}</h2>
                </div>
                <div className="px-5 sm:px-6 pb-7 pt-5 space-y-6">
                  {s.blocks.map((b, j) => <BlockRenderer key={j} block={b} colorKey="bioquimica" />)}
                </div>
              </section>
            ))}

            <Bases p={p} />
            {p.aclaraciones.length > 0 && <Aclaraciones p={p} />}
            <Caso p={p} />
            <Fuentes p={p} />
          </div>
        </div>
      </div>
    </main>
  )
}

function Bases({ p }: { p: Patologia }) {
  return (
    <section id="pat-bases" className="card p-5 sm:p-6 flex flex-col gap-5" aria-labelledby="h-bases">
      <div>
        <h2 id="h-bases" className="font-display text-xl font-normal text-zinc-900">Lo que ya estudiaste</h2>
        <p className="text-[0.9375rem] text-zinc-500 mt-1">Cada enlace abre la sección exacta del tema.</p>
      </div>
      {MATERIAS.filter((m) => p.bases.some((b) => b.materia === m)).map((m) => (
        <div key={m} className="flex flex-col gap-1">
          <h3 className="text-sm font-medium text-zinc-500 mb-1">{m}</h3>
          {p.bases.filter((b) => b.materia === m).map((b) => (
            <Link
              key={`${b.topicId}-${b.sectionId ?? ''}`}
              to={`/topic/${b.topicId}${b.sectionId ? `#${b.sectionId}` : ''}`}
              className="flex items-start gap-3 -mx-3 px-3 py-2.5 rounded-xl hover:bg-zinc-100 transition-colors group"
            >
              <div className="flex-1 min-w-0">
                <p className="text-[0.9375rem] text-zinc-900">
                  {b.label}
                  <span className="text-zinc-500"> · {topicTitle(b.topicId)}</span>
                </p>
                <p className="text-sm text-zinc-600 leading-relaxed">{b.porQue}</p>
              </div>
              <ArrowRight weight="bold" className="w-4 h-4 mt-1 text-zinc-400 group-hover:text-primary flex-shrink-0" />
            </Link>
          ))}
        </div>
      ))}
      {p.atlas.length > 0 && (
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium text-zinc-500">Láminas del Atlas</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {p.atlas.map((a) => (
              <Link key={a.id} to={`/atlas/${a.id}`} className="group flex flex-col gap-2 min-w-0">
                <div className="aspect-[4/3] rounded-xl border border-zinc-200 bg-white overflow-hidden">
                  <img
                    src={atlasThumb(`/atlas/${a.id}.webp`)}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <span className="text-sm text-zinc-700 leading-snug group-hover:text-zinc-900">{a.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

function Aclaraciones({ p }: { p: Patologia }) {
  return (
    <section id="pat-aclaraciones" className="card p-5 sm:p-6 flex flex-col gap-4" aria-labelledby="h-aclaraciones">
      <div>
        <h2 id="h-aclaraciones" className="font-display text-xl font-normal text-zinc-900">Aclaraciones a la clase</h2>
        <p className="text-[0.9375rem] text-zinc-500 mt-1">Lo que se dijo de forma imprecisa en la sesión y lo correcto.</p>
      </div>
      <ul className="flex flex-col gap-3">
        {p.aclaraciones.map((a, i) => (
          <li key={i} className="rounded-2xl bg-zinc-100 p-4 sm:p-5 grid gap-3 md:grid-cols-2">
            <div className="min-w-0">
              <p className="text-xs font-medium text-zinc-500 mb-1">En clase</p>
              <p className="text-[0.9375rem] text-zinc-600 leading-relaxed">{a.enClase}</p>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-primary-ink mb-1">Lo correcto</p>
              <p className="text-[0.9375rem] text-zinc-900 leading-relaxed">{a.correcto}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Caso({ p }: { p: Patologia }) {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  useEffect(() => { setAnswers({}) }, [p.id])
  const done = Object.keys(answers).length
  const right = p.caso.preguntas.filter((qq) => answers[qq.id] === qq.correctIndex).length

  return (
    <section id="pat-caso" className="card p-5 sm:p-6 flex flex-col gap-5" aria-labelledby="h-caso">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 id="h-caso" className="font-display text-xl font-normal text-zinc-900 inline-flex items-center gap-2">
          <Stethoscope weight="regular" className="w-5 h-5 text-primary" />
          {p.caso.titulo}
        </h2>
        <span className="text-sm text-zinc-500 tabular-nums" aria-live="polite">
          {done === 0 ? `${p.caso.preguntas.length} preguntas` : `${right} de ${done} correctas`}
        </span>
      </div>
      <p className="rounded-2xl bg-primary-tint px-5 py-4 text-base text-zinc-800 leading-relaxed">{p.caso.texto}</p>
      <ol className="flex flex-col gap-6">
        {p.caso.preguntas.map((qq, i) => (
          <InlineQuestion
            key={qq.id}
            n={i + 1}
            question={qq}
            selected={answers[qq.id]}
            onSelect={(idx) => setAnswers((a) => (qq.id in a ? a : { ...a, [qq.id]: idx }))}
          />
        ))}
      </ol>
      {done > 0 && (
        <button
          onClick={() => setAnswers({})}
          className="self-start text-sm text-zinc-500 hover:text-zinc-900 underline underline-offset-2"
        >
          Reiniciar el caso
        </button>
      )}
    </section>
  )
}

function InlineQuestion({ n, question, selected, onSelect }: {
  n: number; question: Question; selected?: number; onSelect: (idx: number) => void
}) {
  const answered = selected !== undefined
  const correct = selected === question.correctIndex
  return (
    <li className="flex flex-col gap-3">
      <p className="text-base text-zinc-900 leading-snug">
        <span className="text-zinc-500 tabular-nums mr-1.5">{n}.</span>{question.question}
      </p>
      <div className="flex flex-col gap-2" role="group" aria-label={`Opciones de la pregunta ${n}`}>
        {question.options.map((opt, idx) => {
          const state = !answered ? 'idle' : idx === question.correctIndex ? 'correct' : idx === selected ? 'wrong' : 'muted'
          return (
            <button
              key={idx}
              onClick={() => onSelect(idx)}
              disabled={answered}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left text-[0.9375rem] transition-colors disabled:cursor-default
                ${state === 'idle' ? 'border-zinc-200 bg-surface hover:border-zinc-300 hover:bg-zinc-50 text-zinc-800' : ''}
                ${state === 'correct' ? 'border-success bg-success-tint text-success-ink' : ''}
                ${state === 'wrong' ? 'border-error bg-error-tint text-error-ink' : ''}
                ${state === 'muted' ? 'border-zinc-200 bg-surface text-zinc-500' : ''}`}
            >
              <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-xs font-medium">
                {state === 'correct' ? <CheckCircle weight="fill" className="w-5 h-5" />
                  : state === 'wrong' ? <XCircle weight="fill" className="w-5 h-5" />
                  : <span className="w-6 h-6 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-500">{String.fromCharCode(65 + idx)}</span>}
              </span>
              <span className="leading-snug">{opt}</span>
            </button>
          )
        })}
      </div>
      {answered && (
        <p className={`rounded-xl px-4 py-3 text-[0.9375rem] leading-relaxed ${correct ? 'bg-success-tint text-success-ink' : 'bg-warning-tint text-warning-ink'}`}>
          <span className="font-medium">{correct ? 'Correcto. ' : 'Explicación: '}</span>
          {question.explanation}
        </p>
      )}
    </li>
  )
}

function Fuentes({ p }: { p: Patologia }) {
  return (
    <section id="pat-fuentes" className="card p-5 sm:p-6 flex flex-col gap-3" aria-labelledby="h-fuentes">
      <h2 id="h-fuentes" className="font-display text-xl font-normal text-zinc-900">Fuentes</h2>
      <ul className="flex flex-col gap-2">
        {p.fuentes.map((f) => (
          <li key={f.codigo}>
            <a href={f.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-start gap-2 text-[0.9375rem] leading-relaxed">
              <span>
                <span className="text-zinc-900 group-hover:text-primary">{f.codigo}</span>
                <span className="text-zinc-600">. {f.titulo}.</span>
              </span>
              <ArrowSquareOut weight="regular" className="w-4 h-4 mt-1 text-zinc-400 flex-shrink-0" />
            </a>
          </li>
        ))}
      </ul>
      <p className="text-sm text-zinc-500">
        Vista en {p.sesion} (extracurricular). Los casos son ficticios, escritos para practicar.
      </p>
    </section>
  )
}
