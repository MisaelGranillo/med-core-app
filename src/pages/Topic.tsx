import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Lightning,
  BookOpen,
  Star,
  List,
  X,
  CheckCircle,
  Target,
  Stethoscope,
  ArrowRight,
} from '@phosphor-icons/react'
import { modules } from '../data/modules'
import { useContent } from '../data/content'
import { PageLoading } from '../components/PageLoading'
import { planContextForTopic } from '../data/plans'
import { TOPIC_COLORS } from '../data/colors'
import { useProgress } from '../store/useProgress'
import { SectionPanel } from '../components/SectionPanel'
import { ProgressRing } from '../components/ProgressRing'
import { IllustrationCredit } from '../components/IllustrationCredit'
import { patologiasDeTema } from '../data/patologias'

const COLOR_RING: Record<string, string> = {
  // Anatomía
  digestivo: '#f59e0b', urinario: '#0ea5e9', reproductor: '#f43f5e',
  circulatorio: '#ef4444', respiratorio: '#14b8a6', locomotor: '#f97316', nervioso: '#8b5cf6',
  // Matemáticas
  aritmetica: '#6366f1', algebra: '#3b82f6', probabilidad: '#a855f7',
  estadDesc: '#06b6d4', estadInf: '#d946ef',
  // Comprensión de la Lectura
  comunicacion: '#84cc16', lectoescritura: '#22c55e', gramatica: '#10b981',
  redaccion: '#eab308', lenguaje: '#ec4899',
}

export function Topic() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const content = useContent()
  const topic = content?.topics.find((t) => t.id === id)
  const { getSectionsRead, markSectionRead, getBestScore } = useProgress()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    if (content && !topic) navigate('/')
  }, [content, topic, navigate])

  // /topic/:id#seccion (p. ej., desde una ficha de Patologías): abre y lleva a esa sección.
  const hashId = useLocation().hash.slice(1)
  useEffect(() => {
    if (!topic || !hashId) return
    const t = window.setTimeout(() => {
      const el = document.getElementById(`section-${hashId}`)
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
    }, 120)
    return () => window.clearTimeout(t)
  }, [topic, hashId])

  if (!content) return <PageLoading />
  if (!topic) return null

  const colors = TOPIC_COLORS[topic.colorKey]
  const sectionsRead = getSectionsRead(topic.id)
  const pct = Math.round((sectionsRead.length / topic.sections.length) * 100)
  const bestScore = getBestScore(topic.id)
  const qCount = content.questions.filter((q) => q.topicId === topic.id).length
  const module = modules.find((m) => m.topicIds.includes(topic.id))
  const planCtx = planContextForTopic(topic.id)
  const patologias = patologiasDeTema(topic.id)

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    setSidebarOpen(false)
    const el = document.getElementById(`section-${id}`)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Encabezado del tema (dirección C): tarjeta de título + dos tarjetas de
          estado con números grandes y delgados. Sin banner ni degradado. */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pt-6">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
          <div className="card p-6 sm:p-8 flex flex-col gap-5">
            <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm" aria-label="Ruta">
              <Link to="/estudio" className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-900 transition-colors">
                <ArrowLeft weight="regular" className="w-4 h-4" />
                Temas
              </Link>
              {planCtx ? (
                <>
                  <span className="text-zinc-300" aria-hidden="true">/</span>
                  <Link to={`/plan/${planCtx.subjectId}`} className="text-primary hover:text-primary-hover transition-colors">
                    {planCtx.subjectName}
                  </Link>
                  {planCtx.semana ? <span className="text-zinc-500">· Semana {planCtx.semana}</span> : null}
                </>
              ) : module ? (
                <>
                  <span className="text-zinc-300" aria-hidden="true">/</span>
                  <span className="text-zinc-500">{module.badge}</span>
                </>
              ) : null}
            </nav>

            <div>
              <h1 className="font-display font-light text-[2rem] sm:text-[2.6rem] leading-[1.08] tracking-[-0.025em] text-zinc-900 text-balance">
                {topic.title}
              </h1>
              <p className="mt-3 text-base sm:text-[1.0625rem] text-zinc-600 leading-relaxed max-w-[62ch]">
                {topic.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-auto">
              <Link
                to={`/quiz/${topic.id}`}
                className="inline-flex items-center gap-2 bg-primary text-primary-fg hover:bg-primary-hover
                           text-[0.9375rem] font-medium px-5 py-3 rounded-2xl transition-colors active:scale-[0.98]"
              >
                <Lightning weight="fill" className="w-4 h-4" />
                Iniciar quiz
              </Link>
              <span className="text-sm text-zinc-500">
                {topic.sections.length} secciones · {qCount} preguntas
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <StatCard label="Leído" value={pct} unit="%" hint={`${sectionsRead.length} de ${topic.sections.length} secciones`}>
              <svg viewBox="0 0 120 40" preserveAspectRatio="none" className="w-full h-10" aria-hidden="true">
                <path d="M0 30 H22 L28 16 L34 36 L40 8 L46 30 H66 L71 23 L76 30 H120" fill="none"
                      stroke="var(--c-primary)" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
              </svg>
            </StatCard>
            <StatCard
              label="Mejor quiz"
              value={bestScore}
              unit="%"
              hint={bestScore === null ? 'Sin intentos todavía' : `${qCount} preguntas`}
            >
              <div className="flex items-end gap-1.5 h-10" aria-hidden="true">
                {[0.5, 0.8, 0.35, 0.95, 0.65, 0.4, 0.85].map((h, i) => (
                  <span key={i} className="flex-1 rounded-[3px] bg-primary"
                        style={{ height: `${Math.round(h * 100)}%`, opacity: bestScore === null ? 0.18 : (i % 3 === 2 ? 0.45 : 1) }} />
                ))}
              </div>
            </StatCard>
          </div>
        </div>

        {/* Conceptos clave: texto corrido y discreto, no una nube de etiquetas. */}
        {topic.sections.some(s => s.keyTerms && s.keyTerms.length > 0) && (
          <p className="mt-4 px-1 text-sm text-zinc-500 leading-relaxed line-clamp-2">
            <span className="text-zinc-700">Conceptos:</span>{' '}
            {Array.from(new Set(topic.sections.flatMap(s => s.keyTerms ?? []))).slice(0, 18).join(' · ')}
          </p>
        )}
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 flex gap-8 flex-1">
        {/* Mobile sidebar toggle */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed right-4 z-30 md:hidden bg-surface text-zinc-900 border border-zinc-200 shadow-pop
                     inline-flex items-center gap-2 pl-3.5 pr-4 h-11 rounded-full text-sm"
          style={{ bottom: 'calc(5rem + env(safe-area-inset-bottom, 0px))' }}
        >
          <List weight="regular" className="w-5 h-5" />
          Secciones
        </button>

        {/* Sidebar — desktop */}
        <aside className="hidden md:block w-56 flex-shrink-0">
          <div className="sticky top-20 space-y-1">
            <p className="text-sm text-zinc-500 mb-3 px-3">
              Secciones
            </p>
            {topic.sections.map((sec) => {
              const read = sectionsRead.includes(sec.id)
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-sm transition-all duration-150
                    ${activeSection === sec.id
                      ? 'bg-primary-tint text-primary-ink'
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                    }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-medium
                      ${read ? 'bg-primary text-primary-fg' : 'bg-zinc-100 text-zinc-500'}`}
                  >
                    {sec.number}
                  </span>
                  <span className="truncate leading-snug">{sec.title}</span>
                </button>
              )
            })}
          </div>
        </aside>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-72 bg-surface shadow-xl p-5 overflow-y-auto">
              <div className="flex items-center justify-between mb-5">
                <p className="font-display text-lg text-zinc-900">Secciones</p>
                <button onClick={() => setSidebarOpen(false)} aria-label="Cerrar" className="w-10 h-10 -mr-2 rounded-xl flex items-center justify-center hover:bg-zinc-100">
                  <X weight="bold" className="w-5 h-5 text-zinc-400" />
                </button>
              </div>
              {topic.sections.map((sec) => {
                const read = sectionsRead.includes(sec.id)
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left text-sm text-zinc-600 hover:bg-zinc-100 transition-colors mb-1"
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-medium
                        ${read ? 'bg-primary text-primary-fg' : 'bg-zinc-100 text-zinc-500'}`}
                    >
                      {sec.number}
                    </span>
                    {sec.title}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Main content */}
        <div className="flex-1 min-w-0 space-y-4">
          {/* Ilustración de cabecera del tema (NIAID NIH BioART Source). */}
          {topic.illustration && (
            <motion.div
              initial={{ opacity: 1, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="card p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <BookOpen weight="fill" className={`w-5 h-5 ${colors.text}`} />
                <h3 className="font-bold text-zinc-900">Ilustración</h3>
              </div>
              {/* Fondo blanco fijo para que la SVG de línea se vea en dark mode. */}
              <div className="rounded-lg border border-zinc-200 bg-white overflow-hidden max-w-2xl mx-auto">
                <img
                  src={topic.illustration.src}
                  alt={topic.illustration.alt}
                  className="block w-full h-auto max-h-[22rem] object-contain mx-auto p-4"
                  onError={(e) => { e.currentTarget.closest('.card')?.classList.add('hidden') }}
                />
              </div>
              <IllustrationCredit
                sourceUrl={topic.illustration.sourceUrl}
                license={topic.illustration.license}
                className="mt-3 text-center"
              />
            </motion.div>
          )}

          {topic.sections.map((section, i) => (
            <div key={section.id} id={`section-${section.id}`}>
              <motion.div
                initial={{ opacity: 1, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <SectionPanel
                  section={section}
                  colorKey={topic.colorKey}
                  isRead={sectionsRead.includes(section.id)}
                  onRead={() => markSectionRead(topic.id, section.id)}
                  defaultOpen={i === 0 || section.id === hashId}
                />
              </motion.div>
            </div>
          ))}

          {/* Key Points */}
          {topic.keyPoints.length > 0 && (
            <motion.div
              initial={{ opacity: 1, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: topic.sections.length * 0.04 + 0.1, duration: 0.4 }}
              className="card p-6 sm:p-8"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <Star weight="regular" className="w-5 h-5 text-primary" />
                <h3 className="font-display text-xl font-normal text-zinc-900">Puntos clave</h3>
              </div>
              <ul className="space-y-3">
                {topic.keyPoints.map((kp, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-[11px]" />
                    <span className="text-base text-zinc-800 leading-relaxed">{kp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Patologías que se apoyan en este tema */}
          {patologias.length > 0 && (
            <div className="card p-6 sm:p-8">
              <div className="flex items-center gap-2.5 mb-4">
                <Stethoscope weight="regular" className="w-5 h-5 text-primary" />
                <h3 className="font-display text-xl font-normal text-zinc-900">Patologías relacionadas</h3>
              </div>
              <ul className="flex flex-col">
                {patologias.map((p) => (
                  <li key={p.id}>
                    <Link
                      to={`/patologias/${p.id}`}
                      className="flex items-center gap-3 -mx-3 px-3 py-2.5 rounded-xl hover:bg-zinc-100 transition-colors group"
                    >
                      <span className="flex-1 min-w-0">
                        <span className="block text-base text-zinc-900">{p.title}</span>
                        <span className="block text-sm text-zinc-500">{p.ambito}</span>
                      </span>
                      <ArrowRight weight="bold" className="w-4 h-4 text-zinc-400 group-hover:text-primary flex-shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Quiz CTA */}
          <div className="card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex-1">
              <h3 className="font-display text-xl font-normal text-zinc-900 mb-1">Pon a prueba lo que leíste</h3>
              <p className="text-[0.9375rem] text-zinc-600">
                {qCount} preguntas · flashcards o quiz de opción múltiple.
              </p>
            </div>
            <Link
              to={`/quiz/${topic.id}`}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-fg hover:bg-primary-hover
                         text-[0.9375rem] font-medium px-6 py-3 rounded-2xl whitespace-nowrap transition-colors"
            >
              <Lightning weight="fill" className="w-4 h-4" />
              Iniciar quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({
  label, value, unit, hint, children,
}: { label: string; value: number | null; unit?: string; hint: string; children?: React.ReactNode }) {
  return (
    <div className="card p-5 sm:p-6 flex flex-col gap-2 min-w-0">
      <span className="text-sm text-zinc-500">{label}</span>
      <span className="font-display font-extralight text-[2.75rem] sm:text-[3.5rem] leading-none tracking-[-0.03em] text-zinc-900 tabular-nums">
        {value === null ? '–' : value}
        {value !== null && unit && <span className="text-xl sm:text-2xl text-zinc-500 ml-1 font-light">{unit}</span>}
      </span>
      <span className="text-xs text-zinc-500">{hint}</span>
      <div className="mt-auto pt-2">{children}</div>
    </div>
  )
}
