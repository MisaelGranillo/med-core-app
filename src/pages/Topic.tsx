import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
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
} from '@phosphor-icons/react'
import { modules } from '../data/modules'
import { topics } from '../data/topics'
import { questions } from '../data/quizzes'
import { TOPIC_COLORS } from '../data/colors'
import { useProgress } from '../store/useProgress'
import { SectionPanel } from '../components/SectionPanel'
import { ProgressRing } from '../components/ProgressRing'

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
  const topic = topics.find((t) => t.id === id)
  const { getSectionsRead, markSectionRead, getBestScore } = useProgress()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    if (!topic) navigate('/')
  }, [topic, navigate])

  if (!topic) return null

  const colors = TOPIC_COLORS[topic.colorKey]
  const sectionsRead = getSectionsRead(topic.id)
  const pct = Math.round((sectionsRead.length / topic.sections.length) * 100)
  const bestScore = getBestScore(topic.id)
  const qCount = questions.filter((q) => q.topicId === topic.id).length
  const module = modules.find((m) => m.topicIds.includes(topic.id))

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
      {/* Topic hero header */}
      <div className={`${colors.headerBg} text-white relative overflow-hidden`}>
        {/* Decorative SVG geometry (fixed, pointer-events-none) */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        {/* Large decorative circle (top-right) */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-surface/5 pointer-events-none" />
        <div className="absolute -bottom-10 -right-4 w-40 h-40 rounded-full bg-surface/5 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex items-center gap-3 mb-5">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              <ArrowLeft weight="bold" className="w-4 h-4" />
              Todos los temas
            </Link>
            {module && (
              <>
                <span className="text-white/30 text-xs">/</span>
                <span className="text-white/60 text-xs font-semibold">{module.badge}</span>
              </>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:items-end gap-6">
            <div className="flex-1">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-14 h-14 rounded-2xl bg-surface/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-3xl flex-shrink-0 shadow-sm">
                  {topic.emoji}
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-none mb-1.5">
                    {topic.title}
                  </h1>
                  <p className="text-white/70 text-sm leading-relaxed max-w-[55ch]">
                    {topic.subtitle}
                  </p>
                </div>
              </div>

              {/* Quick stats row */}
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <StatPill icon={<BookOpen weight="fill" className="w-3.5 h-3.5" />} label={`${topic.sections.length} secciones`} />
                <StatPill icon={<Lightning weight="fill" className="w-3.5 h-3.5" />} label={`${qCount} preguntas`} />
                {pct > 0 && (
                  <StatPill
                    icon={<CheckCircle weight="fill" className="w-3.5 h-3.5" />}
                    label={`${pct}% leído`}
                  />
                )}
                {bestScore !== null && (
                  <StatPill
                    icon={<Target weight="fill" className="w-3.5 h-3.5" />}
                    label={`Mejor: ${bestScore}%`}
                  />
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <ProgressRing
                value={pct}
                size={58}
                strokeWidth={5}
                color="rgba(255,255,255,0.9)"
                trackColor="rgba(255,255,255,0.2)"
                label="leído"
              />
              <Link
                to={`/quiz/${topic.id}`}
                className="flex items-center gap-2 bg-surface text-zinc-900 font-bold text-sm
                           px-5 py-2.5 rounded-xl shadow-sm hover:bg-surface/90 transition-all
                           active:scale-[0.98]"
              >
                <Lightning weight="fill" className="w-4 h-4 text-amber-500" />
                Iniciar Quiz
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Key Terms strip */}
      {topic.sections.some(s => s.keyTerms && s.keyTerms.length > 0) && (
        <div className="bg-surface border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center gap-2 overflow-x-auto scrollbar-hide">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex-shrink-0 mr-1">
              Conceptos
            </span>
            {Array.from(
              new Set(topic.sections.flatMap(s => s.keyTerms ?? []))
            ).slice(0, 18).map((term, i) => (
              <span
                key={i}
                className={`text-[11px] font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${colors.badge}`}
              >
                {term}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 flex gap-8 flex-1">
        {/* Mobile sidebar toggle */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed bottom-6 right-6 z-30 md:hidden bg-zinc-900 text-white p-3.5 rounded-full shadow-lg"
        >
          <List weight="bold" className="w-5 h-5" />
        </button>

        {/* Sidebar — desktop */}
        <aside className="hidden md:block w-56 flex-shrink-0">
          <div className="sticky top-20 space-y-1">
            <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-3 px-2">
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
                      ? `${colors.bg} ${colors.text} font-semibold`
                      : 'text-zinc-500 hover:text-zinc-800 hover:bg-zinc-100'
                    }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold
                      ${read ? `${colors.headerBg} text-white` : 'bg-zinc-200 text-zinc-500'}`}
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
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-72 bg-surface shadow-xl p-5 overflow-y-auto">
              <div className="flex items-center justify-between mb-5">
                <p className="font-bold text-zinc-900">Secciones</p>
                <button onClick={() => setSidebarOpen(false)}>
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
                      className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold
                        ${read ? `${colors.headerBg} text-white` : 'bg-zinc-200 text-zinc-500'}`}
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
          {topic.sections.map((section, i) => (
            <div key={section.id} id={`section-${section.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <SectionPanel
                  section={section}
                  colorKey={topic.colorKey}
                  isRead={sectionsRead.includes(section.id)}
                  onRead={() => markSectionRead(topic.id, section.id)}
                  defaultOpen={i === 0}
                />
              </motion.div>
            </div>
          ))}

          {/* Key Points */}
          {topic.keyPoints.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: topic.sections.length * 0.04 + 0.1, duration: 0.4 }}
              className={`card p-6 ${colors.bgLight} ${colors.border} border-2`}
            >
              <div className="flex items-center gap-2 mb-4">
                <Star weight="fill" className={`w-5 h-5 ${colors.text}`} />
                <h3 className="font-bold text-zinc-900">Puntos Clave</h3>
              </div>
              <ul className="space-y-2.5">
                {topic.keyPoints.map((kp, i) => (
                  <li key={i} className="key-point-item">
                    <BookOpen weight="fill" className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                    <span className="text-sm text-zinc-700 leading-relaxed">{kp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Quiz CTA */}
          <div className="card p-6 flex flex-col sm:flex-row items-center gap-5">
            <div className="flex-1">
              <h3 className="font-bold text-zinc-900 mb-1">Pon a prueba tu conocimiento</h3>
              <p className="text-sm text-zinc-500">
                {qCount} preguntas sobre {topic.title}. Flashcards o quiz de opción múltiple.
              </p>
            </div>
            <Link
              to={`/quiz/${topic.id}`}
              className={`btn-primary ${colors.button} px-6 py-3 whitespace-nowrap flex-shrink-0 shadow-sm`}
            >
              <Lightning weight="fill" className="w-4 h-4" />
              Iniciar Quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatPill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-white/80 bg-surface/10 border border-white/15 backdrop-blur-sm text-xs font-semibold px-2.5 py-1 rounded-full">
      {icon}
      {label}
    </span>
  )
}
