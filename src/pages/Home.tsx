/*
 * Home.tsx — MedCore Study Dashboard · Clinical Blue design system
 * Route: /  ·  Todo data-driven (topics/questions/plans/useProgress). Sin números
 * hardcodeados. Claro por defecto; oscuro automático (tokens + colorKeys dark-adaptive).
 */
import { Link, useNavigate } from 'react-router-dom'
import {
  GraduationCap, PencilSimple, ArrowRight, Books, Translate,
  BookOpen, MapTrifold, Cube, Exam,
} from '@phosphor-icons/react'
import type { Icon } from '@phosphor-icons/react'
import type { TopicColorKey } from '../types'
import { topics } from '../data/topics'
import { questions } from '../data/quizzes'
import { TOPIC_COLORS } from '../data/colors'
import { getActivePlan, planContextForTopic } from '../data/plans'
import { useProgress } from '../store/useProgress'

/* ── Índices derivados de datos reales (nivel módulo) ─────────── */
const topicById = Object.fromEntries(topics.map(t => [t.id, t]))
const QUESTIONS_BY_TOPIC = questions.reduce<Record<string, number>>((acc, q) => {
  acc[q.topicId] = (acc[q.topicId] ?? 0) + 1
  return acc
}, {})

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
        totalSections: subjTopics.reduce((n, t) => n + t.sections.length, 0),
      })
    }
  }
  return out
})()

const ALL_STUDY_TOPIC_IDS = [...new Set(SUBJECT_CARDS.flatMap(s => s.topicIds))]
const TOTAL_SECTIONS = ALL_STUDY_TOPIC_IDS.reduce((n, id) => n + (topicById[id]?.sections.length ?? 0), 0)
const REPASO_TOPICS = topics.filter(t => t.id.startsWith('repaso'))

const TOOLS: { name: string; route: string; icon: Icon }[] = [
  { name: 'Temas',       route: '/estudio',      icon: GraduationCap },
  { name: 'Quizzes',     route: '/quiz',         icon: PencilSimple },
  { name: 'Atlas',       route: '/atlas',        icon: MapTrifold },
  { name: 'EnLex',       route: '/vocabulario',  icon: Translate },
  { name: 'MedLex',      route: '/terminologia', icon: BookOpen },
  { name: 'Plan',        route: '/plan',         icon: Books },
  { name: 'Anatomía 3D', route: '/anatomia',     icon: Cube },
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
        if (getSectionsRead(id).length < (topicById[id]?.sections.length ?? 0)) return topicById[id]
    return topicById[SUBJECT_CARDS[0]?.topicIds[0]] ?? null
  })()
  const continuePct = continueTopic && continueTopic.sections.length > 0
    ? Math.round((getSectionsRead(continueTopic.id).length / continueTopic.sections.length) * 100)
    : 0
  const continueCtx = continueTopic ? planContextForTopic(continueTopic.id) : null

  // Próximo examen: un tema de repaso —preferimos el de la misma materia que
  // "continuar", si no el primero sin terminar, si no el primero que exista.
  const nextRepaso = (() => {
    if (REPASO_TOPICS.length === 0) return null
    const sameSubject = continueCtx
      ? REPASO_TOPICS.find(t => planContextForTopic(t.id)?.subjectId === continueCtx.subjectId)
      : null
    const unfinished = REPASO_TOPICS.find(t => getSectionsRead(t.id).length < t.sections.length)
    return sameSubject ?? unfinished ?? REPASO_TOPICS[0]
  })()
  const nextRepasoCtx = nextRepaso ? planContextForTopic(nextRepaso.id) : null

  return (
    <div style={{ background: 'var(--color-page-bg)', flex: 1 }}>
      <style>{HOME_CSS}</style>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '22px 24px 0' }}>

        {/* ── Saludo + plan + progreso global ───────────────── */}
        <section style={{ marginBottom: 18 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 6 }}>
            <h1 style={{ fontFamily: 'var(--font-body)', fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-0.3px', color: 'var(--color-text-primary)', margin: 0 }}>
              Hola, Misael <span aria-hidden>👋</span>
            </h1>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', letterSpacing: '0.5px', color: 'var(--color-text-secondary)' }}>
              MedCore · {ACTIVE_PLAN.schoolShort} {ACTIVE_PLAN.degree} · 1.er sem
            </span>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: '4px 0 12px' }}>
            Tu progreso de estudio
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ flex: 1, height: 8, background: 'var(--color-surface-subtle)', borderRadius: 'var(--radius-pill)', overflow: 'hidden' }}>
              <span style={{ display: 'block', height: '100%', width: `${globalPct}%`, background: 'var(--color-accent)', borderRadius: 'var(--radius-pill)', transition: 'width var(--t-fill)' }} />
            </span>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-primary)', whiteSpace: 'nowrap' }}>{globalPct}%</span>
          </div>
          <p style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)', margin: '5px 0 0' }}>
            {sectionsRead} de {TOTAL_SECTIONS} secciones leídas
          </p>
        </section>

        {/* ── Continuar estudiando + Próximo examen ─────────── */}
        <SectionLabel>Continuar estudiando</SectionLabel>
        <div className="home-continue-grid">
          {continueTopic && (
            <Link to={`/topic/${continueTopic.id}`} className={`home-continue-card ${TOPIC_COLORS[continueTopic.colorKey]?.border ?? ''}`}>
              <span className={`home-accent-bar ${TOPIC_COLORS[continueTopic.colorKey]?.dot ?? ''}`} />
              <span style={{ minWidth: 0, flex: 1, padding: '2px 0' }}>
                <span style={{ display: 'block', fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--color-text-secondary)' }}>
                  {continueCtx ? `${continueCtx.subjectName}${continueCtx.semana ? ` · Semana ${continueCtx.semana}` : ''}` : 'Guía de estudio'}
                </span>
                <span style={{ display: 'block', fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-text-primary)', margin: '2px 0 8px' }}>
                  {continueTopic.emoji}&nbsp; {continueTopic.title}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ flex: 1, height: 5, background: 'var(--color-surface-subtle)', borderRadius: 'var(--radius-pill)', overflow: 'hidden' }}>
                    <span className={TOPIC_COLORS[continueTopic.colorKey]?.dot ?? ''} style={{ display: 'block', height: '100%', width: `${continuePct}%`, borderRadius: 'var(--radius-pill)' }} />
                  </span>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                    {continuePct > 0 ? `${continuePct}%` : 'Empezar'}
                  </span>
                </span>
              </span>
              <span className="home-continue-cta">Continuar <ArrowRight weight="bold" size={13} /></span>
            </Link>
          )}

          {nextRepaso ? (
            <Link to={`/topic/${nextRepaso.id}`} className="home-exam-card">
              <span className="home-tool-icon" style={{ flexShrink: 0 }}><Exam weight="fill" size={18} /></span>
              <span style={{ minWidth: 0, flex: 1 }}>
                <span style={{ display: 'block', fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--color-text-secondary)' }}>
                  Próximo examen
                </span>
                <span style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text-primary)', margin: '2px 0 6px' }}>
                  {nextRepaso.title}
                </span>
                <span style={{ fontSize: '0.6875rem', color: 'var(--color-accent-text, var(--color-accent))', fontWeight: 600 }}>
                  Repasar ahora →
                </span>
              </span>
            </Link>
          ) : (
            <button className="home-exam-card" onClick={() => navigate('/quiz')}>
              <span className="home-tool-icon" style={{ flexShrink: 0 }}><PencilSimple weight="fill" size={18} /></span>
              <span style={{ minWidth: 0, flex: 1 }}>
                <span style={{ display: 'block', fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--color-text-secondary)' }}>Práctica</span>
                <span style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-text-primary)', margin: '2px 0 6px' }}>Pon a prueba lo estudiado</span>
                <span style={{ fontSize: '0.6875rem', color: 'var(--color-accent-text, var(--color-accent))', fontWeight: 600 }}>Ir a Quizzes →</span>
              </span>
            </button>
          )}
        </div>

        {/* ── Mis materias ──────────────────────────────────── */}
        <SectionLabel>Mis materias</SectionLabel>
        <div className="home-subject-grid">
          {SUBJECT_CARDS.map(s => {
            const c = TOPIC_COLORS[s.colorKey]
            const read = s.topicIds.reduce((n, id) => n + getSectionsRead(id).length, 0)
            const pct = s.totalSections ? Math.round((read / s.totalSections) * 100) : 0
            return (
              <Link key={s.id} to={`/plan/${s.id}`} className={`home-subject ${c?.border ?? ''}`}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <span className={c?.dot ?? ''} style={{ width: 9, height: 9, borderRadius: '50%', flexShrink: 0 }} />
                  <span className={c?.text ?? ''} style={{ fontSize: '0.8125rem', fontWeight: 600, lineHeight: 1.25 }}>{s.name}</span>
                </span>
                <span style={{ display: 'block', fontSize: '0.625rem', color: 'var(--color-text-secondary)', marginBottom: 8 }}>
                  {s.temas} {s.temas === 1 ? 'tema' : 'temas'} · {s.preguntas} preguntas
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ flex: 1, height: 5, background: 'var(--color-surface-subtle)', borderRadius: 'var(--radius-pill)', overflow: 'hidden' }}>
                    <span className={c?.dot ?? ''} style={{ display: 'block', height: '100%', width: `${pct}%`, borderRadius: 'var(--radius-pill)' }} />
                  </span>
                  <span style={{ fontSize: '0.625rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>{pct}%</span>
                </span>
              </Link>
            )
          })}
        </div>

        {/* ── Herramientas ──────────────────────────────────── */}
        <SectionLabel>Herramientas</SectionLabel>
        <div className="home-tools-row">
          {TOOLS.map(t => {
            const Ic = t.icon
            return (
              <button key={t.name} className="home-tool-chip" onClick={() => navigate(t.route)}>
                <Ic weight="fill" size={16} />
                <span>{t.name}</span>
              </button>
            )
          })}
        </div>

        {/* ── Footer ────────────────────────────────────────── */}
        <footer style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--color-text-muted)',
          textAlign: 'center', marginTop: 26, paddingBottom: 26, lineHeight: 1.8,
        }}>
          Misael Granillo · MedCore<br />
          Terminología: MedLex (CC BY-SA 4.0) · Modelo anatómico: Open 3D Model (CC BY-SA 4.0)
        </footer>
      </div>
    </div>
  )
}

/* ── Sub-componentes ───────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', textTransform: 'uppercase',
      letterSpacing: '1.2px', color: 'var(--color-text-secondary)', margin: '18px 0 9px',
    }}>
      {children}
    </p>
  )
}

/* ── CSS scoped (responsive + hover; tokens y colorKeys) ─────── */
const HOME_CSS = `
  .home-continue-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 10px; }
  .home-subject-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 9px; }
  .home-tools-row { display: flex; flex-wrap: wrap; gap: 7px; }

  .home-continue-card, .home-exam-card {
    display: flex; align-items: stretch; gap: 12px; text-decoration: none;
    background: var(--color-surface);
    border: 0.5px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: 14px; cursor: pointer; text-align: left; width: 100%;
    transition: border-color var(--t-fast), transform var(--t-fast);
  }
  .home-exam-card { align-items: center; }
  .home-continue-card:hover, .home-exam-card:hover { border-color: var(--color-border-strong); transform: translateY(-1px); }
  .home-accent-bar { width: 4px; border-radius: 4px; flex-shrink: 0; }
  .home-continue-cta {
    align-self: center; flex-shrink: 0; display: inline-flex; align-items: center; gap: 4px;
    font-size: 0.6875rem; font-weight: 600; color: var(--color-accent-text, var(--color-accent));
    white-space: nowrap;
  }

  .home-subject {
    display: block; text-decoration: none;
    background: var(--color-surface);
    border: 0.5px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: 13px; cursor: pointer;
    transition: border-color var(--t-fast), transform var(--t-fast);
  }
  .home-subject:hover { transform: translateY(-1px); }

  .home-tool-chip {
    display: inline-flex; align-items: center; gap: 7px;
    background: var(--color-surface);
    border: 0.5px solid var(--color-border);
    border-radius: var(--radius-pill);
    padding: 7px 13px; cursor: pointer;
    font-size: 0.75rem; font-weight: 500; color: var(--color-text-primary);
    transition: border-color var(--t-fast), transform var(--t-fast);
  }
  .home-tool-chip:hover { border-color: var(--color-border-strong); transform: translateY(-1px); }
  .home-tool-chip svg { color: var(--color-tool-icon); flex-shrink: 0; }

  .home-tool-icon {
    width: 34px; height: 34px; border-radius: 8px; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    background: var(--color-tool-icon-bg); color: var(--color-tool-icon);
  }

  @media (max-width: 720px) {
    .home-continue-grid { grid-template-columns: 1fr; }
    .home-subject-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (prefers-reduced-motion: reduce) {
    .home-continue-card, .home-exam-card, .home-subject, .home-tool-chip { transition: none; }
    .home-continue-card:hover, .home-exam-card:hover, .home-subject:hover, .home-tool-chip:hover { transform: none; }
  }
`
