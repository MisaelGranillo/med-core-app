/*
 * Home.tsx — Inicio de MedCore · dirección «Monitor suave» (DESIGN.md)
 * Route: /  ·  Todo data-driven (topics/questions/plans/useProgress). Sin números
 * hardcodeados. Tema claro/oscuro por tokens (Ajustes → Tema).
 */
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  GraduationCap, PencilSimple, ArrowRight, Books, Translate,
  BookOpen, MapTrifold, Cube, Exam, ChalkboardTeacher,
  MagnifyingGlass, Stethoscope, ChartBar, Books as Libros,
} from '@phosphor-icons/react'
import type { Icon } from '@phosphor-icons/react'
import type { TopicColorKey } from '../types'
import { topicIndex as topics, examDecks, examQuestionCount, atlasIndex } from '../data/generated/topicIndex'
import { TOPIC_COLORS } from '../data/colors'
import { getActivePlan, planContextForTopic, faseDelCalendario } from '../data/plans'
import { useProgress } from '../store/useProgress'
import { NOMBRE_MAX, useProfile } from '../store/useProfile'
import { useJuego } from '../utils/juego'
import { ArcadeHud } from '../components/ArcadeHud'

/* ── Índices derivados de datos reales (nivel módulo) ─────────── */
const topicById = Object.fromEntries(topics.map(t => [t.id, t]))
const QUESTIONS_BY_TOPIC = Object.fromEntries(topics.map(t => [t.id, t.questionCount]))

const ACTIVE_PLAN = getActivePlan()
// Semestre en curso o, en receso, el último terminado: es el que se muestra.
const FASE = faseDelCalendario(ACTIVE_PLAN)
const PERIODO = FASE.tipo === 'curso' ? FASE.periodo : (FASE.anterior ?? ACTIVE_PLAN.periods[0])

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
  for (const period of ACTIVE_PLAN.periods.filter(p => p.index === PERIODO.index)) {
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
const EXAMENES = examDecks.filter(d => d.periodo === PERIODO.index)
const N_EXAMENES = EXAMENES.reduce((n, d) => n + d.semanas.length, 0)
const N_PREG_EXAMEN = EXAMENES.reduce((n, d) => n + d.total, 0) || examQuestionCount

const fechaLarga = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' })

const TOOLS: { name: string; hint: string; route: string; icon: Icon }[] = [
  { name: 'Temas',       hint: 'Guías por materia y semana', route: '/estudio',      icon: GraduationCap },
  { name: 'Quizzes',     hint: 'Exámenes reales y por tema', route: '/quiz',         icon: PencilSimple },
  { name: 'Atlas',       hint: 'Láminas para repasar',       route: '/atlas',        icon: MapTrifold },
  { name: 'Patologías',  hint: 'Fichas clínicas',            route: '/patologias',   icon: Stethoscope },
  { name: 'Anatomía 3D', hint: 'Visor interactivo',          route: '/anatomia',     icon: Cube },
  { name: 'MedLex',      hint: 'Raíces y afijos',            route: '/terminologia', icon: BookOpen },
  { name: 'EnLex',       hint: 'Vocabulario en inglés',      route: '/vocabulario',  icon: Translate },
  { name: 'Librería',    hint: 'Libros y PDFs',              route: '/libreria',     icon: Libros },
  { name: 'Plan',        hint: 'Los 14 semestres',           route: '/plan',         icon: Books },
  { name: 'Progreso',    hint: 'Lo leído y tus puntajes',    route: '/progress',     icon: ChartBar },
  { name: 'Taller',      hint: 'Estudio estratégico',        route: '/taller',       icon: ChalkboardTeacher },
]

/* Lámina del día: cambia cada día, la misma para todo el día. */
const LAMINA = (() => {
  if (atlasIndex.length === 0) return null
  const hoy = new Date()
  const dia = Math.floor((hoy.getTime() - new Date(hoy.getFullYear(), 0, 0).getTime()) / 86_400_000)
  return atlasIndex[dia % atlasIndex.length]
})()

/* Estado de cada semestre según el calendario del plan. */
function estadoSemestre(index: number): string {
  if (FASE.tipo === 'curso' && FASE.periodo.index === index) return 'En curso'
  if (FASE.tipo === 'receso' && FASE.anterior?.index === index) return 'Terminado'
  if (FASE.tipo === 'receso' && FASE.siguiente?.index === index && FASE.siguiente.calendario) return `Empieza ${new Date(`${FASE.siguiente.calendario.inicio}T00:00:00`).toLocaleDateString('es-MX', { day: 'numeric', month: 'short' })}`
  return index < PERIODO.index ? 'Terminado' : ''
}

export function Home() {
  const navigate = useNavigate()
  const { getSectionsRead } = useProgress()
  // Solo cuenta las materias del semestre que se muestra.
  const sectionsRead = ALL_STUDY_TOPIC_IDS.reduce((n, id) => n + getSectionsRead(id).length, 0)
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


  const nombre = useProfile(s => s.nombre)
  const juego = useJuego()

  return (
    <main className="flex-1">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-12 flex flex-col gap-8">

        {/* ── Hero: saludo, buscador y los tres caminos ───────── */}
        <Hero nombre={nombre} getSectionsRead={getSectionsRead} />

        {/* ── Marcador (solo estilo Arcade) ─────────────────── */}
        {juego && <ArcadeHud juego={juego} nombre={nombre} />}

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
            <span className="text-sm text-zinc-500">Lectura del {PERIODO.label.toLowerCase()}</span>
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

        {/* ── Repaso (receso) o práctica de la materia (en curso) ── */}
        {FASE.tipo === 'receso' && N_EXAMENES > 0 ? (
          <Link to="/quiz#examenes" className="card card-interactive p-5 sm:p-6 flex items-center gap-4">
            <span className="w-11 h-11 rounded-2xl bg-primary-tint text-primary flex items-center justify-center flex-shrink-0">
              <Exam weight="regular" className="w-5 h-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm text-zinc-500">Repaso del {PERIODO.label.toLowerCase()}</span>
              <span className="block text-base text-zinc-900 mt-0.5">{N_EXAMENES} exámenes reales · {N_PREG_EXAMEN} preguntas con las claves revisadas</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-primary whitespace-nowrap">
              Repasar <ArrowRight weight="regular" className="w-4 h-4" />
            </span>
          </Link>
        ) : continueCtx ? (
          <Link to={`/plan/${continueCtx.subjectId}?tab=practicar`} className="card card-interactive p-5 sm:p-6 flex items-center gap-4">
            <span className="w-11 h-11 rounded-2xl bg-primary-tint text-primary flex items-center justify-center flex-shrink-0">
              <PencilSimple weight="regular" className="w-5 h-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm text-zinc-500">Práctica · {continueCtx.subjectName}</span>
              <span className="block text-base text-zinc-900 mt-0.5">Quizzes y exámenes de la materia</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-primary whitespace-nowrap">
              Practicar <ArrowRight weight="regular" className="w-4 h-4" />
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

        <footer className="text-xs text-zinc-500 text-center leading-relaxed pt-2">
          Misael Granillo · MedCore · <Link to="/apoya" className="underline underline-offset-2 hover:text-zinc-800">Apoya a MedCore</Link><br />
          Terminología: MedLex (CC BY-SA 4.0) · Modelo anatómico: Open 3D Model (CC BY-SA 4.0)
        </footer>
      </div>
    </main>
  )
}

/* Primera visita: pide el nombre ahí mismo, sin ventana modal. Se guarda solo
 * en este dispositivo y se cambia después en Ajustes → Perfil. */
function NombreInline() {
  const setNombre = useProfile(s => s.setNombre)
  const [abierto, setAbierto] = useState(false)
  const [valor, setValor] = useState('')

  if (!abierto) {
    return (
      <button onClick={() => setAbierto(true)}
              className="self-start mt-2 text-[0.9375rem] font-medium text-primary hover:text-primary-hover transition-colors">
        ¿Cómo te llamas?
      </button>
    )
  }
  return (
    <form className="mt-3 flex flex-wrap items-center gap-2"
          onSubmit={e => { e.preventDefault(); if (valor.trim()) setNombre(valor) }}>
      <label htmlFor="nombre-inicio" className="sr-only">Tu nombre</label>
      <input id="nombre-inicio" autoFocus value={valor} maxLength={NOMBRE_MAX}
             onChange={e => setValor(e.target.value)} placeholder="Tu nombre o apodo" autoComplete="given-name"
             className="h-11 w-56 max-w-full px-4 rounded-2xl bg-surface border border-zinc-200 text-base text-zinc-900
                        placeholder:text-zinc-500 focus:outline-none focus:border-primary" />
      <button type="submit" disabled={!valor.trim()}
              className="h-11 px-5 rounded-2xl bg-primary text-primary-fg text-[0.9375rem] font-medium hover:bg-primary-hover
                         disabled:opacity-50 transition-colors">
        Guardar
      </button>
      <span className="basis-full text-xs text-zinc-500">Se guarda solo en este dispositivo.</span>
    </form>
  )
}

/* ── Hero del Inicio ──────────────────────────────────────────────────────
 * Saludo, buscador y tres caminos para llegar: por materia (las del semestre
 * que se muestra), por semestre (los 14 del plan) o por herramienta. A la
 * derecha, la lámina del día. */
type Via = 'materia' | 'semestre' | 'herramienta'
const VIAS: { id: Via; label: string }[] = [
  { id: 'materia', label: 'Por materia' },
  { id: 'semestre', label: 'Por semestre' },
  { id: 'herramienta', label: 'Herramientas' },
]

function Hero({ nombre, getSectionsRead }: { nombre: string; getSectionsRead: (id: string) => string[] }) {
  const navigate = useNavigate()
  const juego = useJuego()
  const [via, setVia] = useState<Via>(() => {
    try { return (localStorage.getItem('medcore-inicio-via') as Via) || 'materia' } catch { return 'materia' }
  })
  const [q, setQ] = useState('')
  const elegir = (v: Via) => { setVia(v); try { localStorage.setItem('medcore-inicio-via', v) } catch { /* sin almacenamiento */ } }

  return (
    <section className="card p-6 sm:p-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_240px]" aria-labelledby="h-hola">
      <div className="flex flex-col gap-5 min-w-0">
        <header className="flex flex-col gap-1">
          <h1 id="h-hola" className="font-display font-light text-[2.25rem] sm:text-[2.75rem] leading-[1.05] tracking-[-0.025em] text-zinc-900">
            {nombre ? `Hola, ${nombre}` : 'Hola'}
          </h1>
          <p className="text-base text-zinc-500">
            {ACTIVE_PLAN.schoolShort} {ACTIVE_PLAN.degree} · {PERIODO.label}{FASE.tipo === 'receso' ? ' (terminado)' : ''}
            {FASE.tipo === 'receso' && FASE.siguiente?.calendario && FASE.dias !== null && FASE.dias > 0
              ? ` · el ${FASE.siguiente.label.toLowerCase()} empieza en ${FASE.dias} ${FASE.dias === 1 ? 'día' : 'días'}`
              : ''}
          </p>
          {!nombre && <NombreInline />}
        </header>

        <form role="search" onSubmit={e => { e.preventDefault(); if (q.trim()) navigate(`/search?q=${encodeURIComponent(q.trim())}`) }} className="relative">
          <label htmlFor="buscar-inicio" className="sr-only">Buscar en MedCore</label>
          <MagnifyingGlass className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" aria-hidden="true" />
          <input id="buscar-inicio" value={q} onChange={e => setQ(e.target.value)}
            placeholder="¿Qué quieres estudiar hoy?"
            className="w-full h-12 bg-surface border border-zinc-200 rounded-2xl pl-12 pr-4 text-base text-zinc-900 placeholder:text-zinc-500 focus:outline-none focus:border-primary" />
        </form>

        <div>
          <div role="tablist" aria-label="Cómo quieres llegar" className="grid grid-cols-3 sm:flex gap-1 mb-4">
            {VIAS.map(v => (
              <button key={v.id} role="tab" aria-selected={via === v.id} onClick={() => elegir(v.id)}
                className={`text-[0.8125rem] sm:text-sm px-2 sm:px-4 py-2 rounded-xl transition-colors ${via === v.id ? 'bg-primary text-primary-fg' : 'text-zinc-600 hover:bg-zinc-100'}`}>
                {v.label}
              </button>
            ))}
          </div>

          {via === 'materia' && (
            <ul className="grid gap-2 sm:grid-cols-2" role="tabpanel">
              {SUBJECT_CARDS.map(s => {
                const c = TOPIC_COLORS[s.colorKey]
                const read = s.topicIds.reduce((n, id) => n + getSectionsRead(id).length, 0)
                const pct = s.totalSections ? Math.round((read / s.totalSections) * 100) : 0
                return (
                  <li key={s.id}>
                    <Link to={`/plan/${s.id}`} className="flex items-center gap-3 h-full rounded-xl border border-zinc-200 px-4 py-3 hover:border-zinc-300 hover:bg-zinc-50 transition-colors">
                      <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${c?.dot ?? 'bg-primary'}`} aria-hidden="true" />
                      <span className="min-w-0 flex-1">
                        <span className="block text-[0.9375rem] text-zinc-900 leading-snug">{s.name}</span>
                        <span className="block text-xs text-zinc-500">{s.temas} temas · {s.preguntas} preguntas</span>
                      </span>
                      <span className={`text-xs tabular-nums ${juego ? 'font-display text-primary' : 'text-zinc-500'}`}>{juego ? `LV ${juego.lv[s.id] ?? 0}` : `${pct}%`}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}

          {via === 'semestre' && (
            <ul className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4" role="tabpanel">
              {ACTIVE_PLAN.periods.map(p => {
                const estado = estadoSemestre(p.index)
                const actual = p.index === PERIODO.index || (FASE.tipo === 'receso' && FASE.siguiente?.index === p.index)
                return (
                  <li key={p.index}>
                    <Link to={`/plan?semestre=${p.index}`}
                      className={`flex flex-col rounded-xl border px-3 py-2.5 h-full transition-colors ${actual ? 'border-primary bg-primary-tint' : 'border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'}`}>
                      <span className={`text-[0.9375rem] leading-snug ${actual ? 'text-primary-ink' : 'text-zinc-900'}`}>{p.label}</span>
                      <span className={`text-xs ${actual ? 'text-primary-ink' : 'text-zinc-500'}`}>{estado || `${p.subjects.length} materias`}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}

          {via === 'herramienta' && (
            <ul className="grid gap-2 grid-cols-2 sm:grid-cols-3" role="tabpanel">
              {TOOLS.map(t => {
                const Ic = t.icon
                return (
                  <li key={t.name}>
                    <Link to={t.route} className="flex items-start gap-3 h-full rounded-xl border border-zinc-200 px-3 py-3 hover:border-zinc-300 hover:bg-zinc-50 transition-colors">
                      <Ic weight="regular" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="min-w-0">
                        <span className="block text-[0.9375rem] text-zinc-900 leading-snug">{t.name}</span>
                        <span className="block text-xs text-zinc-500">{t.hint}</span>
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>

      {LAMINA && (
        <Link to={`/atlas/${LAMINA.id}`} className="hidden lg:flex flex-col gap-2 group self-start">
          <img src={`/atlas/thumbs/${LAMINA.id}.webp`} alt={`Lámina: ${LAMINA.title}`} width={240} height={360}
            className="w-full aspect-[2/3] object-cover object-top rounded-xl border border-zinc-200 bg-zinc-100" />
          <span className="text-xs text-zinc-500">Lámina del día</span>
          <span className="text-sm text-zinc-900 leading-snug group-hover:text-primary transition-colors">{LAMINA.title}</span>
        </Link>
      )}
    </section>
  )
}
