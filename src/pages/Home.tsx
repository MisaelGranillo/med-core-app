/*
 * Home.tsx — Inicio de MedCore · dirección «Monitor suave» (DESIGN.md)
 * Route: /  ·  Todo data-driven (topics/questions/plans/useProgress). Sin números
 * hardcodeados. Tema claro/oscuro por tokens (Ajustes → Tema).
 */
import { Link, useNavigate } from 'react-router-dom'
import {
  GraduationCap, PencilSimple, ArrowRight, Books, Translate,
  BookOpen, MapTrifold, Cube, Exam, ChalkboardTeacher,
} from '@phosphor-icons/react'
import type { Icon } from '@phosphor-icons/react'
import type { TopicColorKey } from '../types'
import { topicIndex as topics } from '../data/generated/topicIndex'
import { TOPIC_COLORS } from '../data/colors'
import { getActivePlan, planContextForTopic } from '../data/plans'
import { useProgress } from '../store/useProgress'

/* ── Índices derivados de datos reales (nivel módulo) ─────────── */
const topicById = Object.fromEntries(topics.map(t => [t.id, t]))
const QUESTIONS_BY_TOPIC = Object.fromEntries(topics.map(t => [t.id, t.questionCount]))

const ACTIVE_PLAN = getActivePlan()

// Materias del plan activo que YA tienen temas cargados (topicIds de la materia
// o de cualquiera de sus semanas). Deriva color/temario/preguntas de los datos.
type SubjectCard = {
  id: string
  name: string
  topicIds: string[]
  colorKey: TopicColorKey
  temas: number
  preguntas: number
  totalSections: number
}
const SUBJECT_CARDS: SubjectCard[] = (() => {
  const out: SubjectCard[] = []
  for (const period of ACTIVE_PLAN.periods) {
    for (const subject of period.subjects) {
      const ids = new Set<string>()
      for (const id of subject.topicIds ?? []) ids.add(id)
      for (const sem of subject.content?.semanas ?? [])
        for (const id of sem.topicIds ?? []) ids.add(id)
      const subjTopics = [...ids].map(id => topicById[id]).filter(Boolean)
      if (subjTopics.length === 0) continue
      out.push({
        id: subject.id,
        name: subject.name,
        topicIds: subjTopics.map(t => t.id),
        colorKey: subjTopics[0].colorKey,
        temas: subjTopics.length,
        preguntas: subjTopics.reduce((n, t) => n + (QUESTIONS_BY_TOPIC[t.id] ?? 0), 0),
        totalSections: subjTopics.reduce((n, t) => n + t.sectionCount, 0),
      })
    }
  }
  return out
})()

const ALL_STUDY_TOPIC_IDS = [...new Set(SUBJECT_CARDS.flatMap(s => s.topicIds))]
const TOTAL_SECTIONS = ALL_STUDY_TOPIC_IDS.reduce((n, id) => n + (topicById[id]?.sectionCount ?? 0), 0)
const REPASO_TOPICS = topics.filter(t => t.id.startsWith('repaso'))

const TOOLS: { name: string; route: string; icon: Icon }[] = [
  { name: 'Temas',       route: '/estudio',      icon: GraduationCap },
  { name: 'Quizzes',     route: '/quiz',         icon: PencilSimple },
  { name: 'Atlas',       route: '/atlas',        icon: MapTrifold },
  { name: 'EnLex',       route: '/vocabulario',  icon: Translate },
  { name: 'MedLex',      route: '/terminologia', icon: BookOpen },
  { name: 'Plan',        route: '/plan',         icon: Books },
  { name: 'Anatomía 3D', route: '/anatomia',     icon: Cube },
  { name: 'Taller',      route: '/taller',       icon: ChalkboardTeacher },
]

export function Home() {
  const navigate = useNavigate()
  const { getSectionsRead, getTotalSectionsRead } = useProgress()
  const sectionsRead = getTotalSectionsRead()
  const globalPct = TOTAL_SECTIONS ? Math.round((sectionsRead / TOTAL_SECTIONS) * 100) : 0

  // Primer tema con lectura incompleta (recorriendo las materias en orden); si
  // todo está leído, el primero de todos.
  const continueTopic = (() => {
    for (const s of SUBJECT_CARDS)
      for (const id of s.topicIds)
        if (getSectionsRead(id).length < (topicById[id]?.sectionCount ?? 0)) return topicById[id]
    return topicById[SUBJECT_CARDS[0]?.topicIds[0]] ?? null
  })()
  const continuePct = continueTopic && continueTopic.sectionCount > 0
    ? Math.round((getSectionsRead(continueTopic.id).length / continueTopic.sectionCount) * 100)
    : 0
  const continueCtx = continueTopic ? planContextForTopic(continueTopic.id) : null

  // Próximo examen: un tema de repaso —preferimos el de la misma materia que
  // "continuar", si no el primero sin terminar, si no el primero que exista.
  const nextRepaso = (() => {
    if (REPASO_TOPICS.length === 0) return null
    const sameSubject = continueCtx
      ? REPASO_TOPICS.find(t => planContextForTopic(t.id)?.subjectId === continueCtx.subjectId)
      : null
    const unfinished = REPASO_TOPICS.find(t => getSectionsRead(t.id).length < t.sectionCount)
    return sameSubject ?? unfinished ?? REPASO_TOPICS[0]
  })()
  const nextRepasoCtx = nextRepaso ? planContextForTopic(nextRepaso.id) : null

  const firstName = 'Misael'

  return (
    <main className="flex-1">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-12 flex flex-col gap-8">

        {/* ── Saludo ────────────────────────────────────────── */}
        <header className="flex flex-col gap-1">
          <h1 className="font-display font-light text-[2.25rem] sm:text-[2.75rem] leading-[1.05] tracking-[-0.025em] text-zinc-900">
            Hola, {firstName}
          </h1>
          <p className="text-base text-zinc-500">
            {ACTIVE_PLAN.schoolShort} {ACTIVE_PLAN.degree} · 1.er semestre
          </p>
        </header>

        {/* ── Continuar + progreso global ───────────────────── */}
        <section className="grid gap-4 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]" aria-label="Continuar estudiando">
          {continueTopic && (
            <Link to={`/topic/${continueTopic.id}`} className="card card-interactive p-6 sm:p-7 flex flex-col gap-4 group">
              <span className="text-sm text-zinc-500">
                Continuar · {continueCtx ? `${continueCtx.subjectName}${continueCtx.semana ? ` · Semana ${continueCtx.semana}` : ''}` : 'Guía de estudio'}
              </span>
              <span className="font-display font-light text-[1.75rem] sm:text-[2rem] leading-[1.12] tracking-[-0.02em] text-zinc-900 text-balance">
                {continueTopic.title}
              </span>
              <span className="mt-auto flex items-center gap-4">
                <span className="flex-1 h-1.5 rounded-full bg-zinc-100 overflow-hidden">
                  <span className="block h-full rounded-full bg-primary" style={{ width: `${continuePct}%`, transition: 'width var(--t-fill)' }} />
                </span>
                <span className="inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-primary whitespace-nowrap">
                  {continuePct > 0 ? 'Continuar' : 'Empezar'}
                  <ArrowRight weight="regular" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </span>
            </Link>
          )}

          <div className="card p-6 sm:p-7 flex flex-col gap-2">
            <span className="text-sm text-zinc-500">Progreso del semestre</span>
            <span className="font-display font-extralight text-[3.5rem] leading-none tracking-[-0.03em] text-zinc-900 tabular-nums">
              {globalPct}<span className="text-2xl font-light text-zinc-500 ml-1">%</span>
            </span>
            <span className="text-xs text-zinc-500">{sectionsRead} de {TOTAL_SECTIONS} secciones leídas</span>
            <svg viewBox="0 0 160 40" preserveAspectRatio="none" className="w-full h-10 mt-auto" aria-hidden="true">
              <path d="M0 30 H34 L41 14 L48 36 L55 6 L62 30 H92 L98 22 L104 30 H160" fill="none"
                    stroke="var(--c-primary)" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
          </div>
        </section>

        {/* ── Próximo examen ────────────────────────────────── */}
        {nextRepaso ? (
          <Link to={`/topic/${nextRepaso.id}`} className="card card-interactive p-5 sm:p-6 flex items-center gap-4">
            <span className="w-11 h-11 rounded-2xl bg-primary-tint text-primary flex items-center justify-center flex-shrink-0">
              <Exam weight="regular" className="w-5 h-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm text-zinc-500">Próximo examen{nextRepasoCtx ? ` · ${nextRepasoCtx.subjectName}` : ''}</span>
              <span className="block text-base text-zinc-900 mt-0.5">{nextRepaso.title}</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-primary whitespace-nowrap">
              Repasar <ArrowRight weight="regular" className="w-4 h-4" />
            </span>
          </Link>
        ) : (
          <button onClick={() => navigate('/quiz')} className="card card-interactive p-5 sm:p-6 flex items-center gap-4 text-left w-full">
            <span className="w-11 h-11 rounded-2xl bg-primary-tint text-primary flex items-center justify-center flex-shrink-0">
              <PencilSimple weight="regular" className="w-5 h-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm text-zinc-500">Práctica</span>
              <span className="block text-base text-zinc-900 mt-0.5">Pon a prueba lo estudiado</span>
            </span>
          </button>
        )}

        {/* ── Mis materias: lista con progreso, no rejilla de tarjetas ── */}
        <section className="flex flex-col gap-3" aria-labelledby="h-materias">
          <h2 id="h-materias" className="font-display text-xl font-normal text-zinc-900 px-1">Mis materias</h2>
          <div className="card divide-y divide-zinc-200 overflow-hidden">
            {SUBJECT_CARDS.map(s => {
              const c = TOPIC_COLORS[s.colorKey]
              const read = s.topicIds.reduce((n, id) => n + getSectionsRead(id).length, 0)
              const pct = s.totalSections ? Math.round((read / s.totalSections) * 100) : 0
              return (
                <Link key={s.id} to={`/plan/${s.id}`}
                      className="flex items-center gap-4 px-5 sm:px-6 py-4 hover:bg-zinc-50 transition-colors">
                  <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${c?.dot ?? 'bg-primary'}`} aria-hidden="true" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-base text-zinc-900 truncate">{s.name}</span>
                    <span className="block text-sm text-zinc-500">{s.temas} {s.temas === 1 ? 'tema' : 'temas'} · {s.preguntas} preguntas</span>
                  </span>
                  <span className="hidden sm:block w-32 h-1.5 rounded-full bg-zinc-100 overflow-hidden flex-shrink-0">
                    <span className="block h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
                  </span>
                  <span className="w-12 text-right text-sm text-zinc-500 tabular-nums flex-shrink-0">{pct}%</span>
                </Link>
              )
            })}
          </div>
        </section>

        {/* ── Herramientas ──────────────────────────────────── */}
        <section className="flex flex-col gap-3" aria-labelledby="h-herr">
          <h2 id="h-herr" className="font-display text-xl font-normal text-zinc-900 px-1">Herramientas</h2>
          <div className="flex flex-wrap gap-2">
            {TOOLS.map(t => {
              const Ic = t.icon
              return (
                <button key={t.name} onClick={() => navigate(t.route)}
                        className="inline-flex items-center gap-2 h-11 px-4 rounded-2xl bg-surface border border-zinc-200
                                   text-[0.9375rem] text-zinc-800 hover:border-zinc-300 transition-colors">
                  <Ic weight="regular" className="w-[18px] h-[18px] text-primary" />
                  {t.name}
                </button>
              )
            })}
          </div>
        </section>

        <footer className="text-xs text-zinc-500 text-center leading-relaxed pt-2">
          Misael Granillo · MedCore<br />
          Terminología: MedLex (CC BY-SA 4.0) · Modelo anatómico: Open 3D Model (CC BY-SA 4.0)
        </footer>
      </div>
    </main>
  )
}
