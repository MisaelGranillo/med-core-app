import { useState, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, Trophy, BookOpen, Lightning,
  Heartbeat, MathOperations, BookOpenText, Cube,
} from '@phosphor-icons/react'
import { topics } from '../data/topics'
import { modules } from '../data/modules'
import { questions } from '../data/quizzes'
import { TOPIC_COLORS } from '../data/colors'
import { useProgress } from '../store/useProgress'
import { ProgressRing } from '../components/ProgressRing'
const HeroCanvas = lazy(() =>
  import('../components/HeroCanvas').then((m) => ({ default: m.HeroCanvas }))
)

const COLOR_RING: Record<string, string> = {
  digestivo: '#f59e0b', urinario: '#0ea5e9', reproductor: '#f43f5e',
  circulatorio: '#ef4444', respiratorio: '#14b8a6', locomotor: '#f97316', nervioso: '#8b5cf6',
  aritmetica: '#6366f1', algebra: '#3b82f6', probabilidad: '#a855f7',
  estadDesc: '#06b6d4', estadInf: '#d946ef',
  comunicacion: '#84cc16', lectoescritura: '#22c55e', gramatica: '#10b981',
  redaccion: '#eab308', lenguaje: '#ec4899',
}

const MODULE_ICONS: Record<string, React.ReactNode> = {
  anatomia: <Heartbeat weight="fill" className="w-4 h-4" />,
  matematicas: <MathOperations weight="bold" className="w-4 h-4" />,
  lectura: <BookOpenText weight="fill" className="w-4 h-4" />,
}

const MODULE_COLORS: Record<string, { tab: string; active: string; bg: string; border: string; text: string }> = {
  anatomia: {
    tab: 'hover:text-red-600 hover:bg-red-50',
    active: 'bg-red-600 text-white',
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-700',
  },
  matematicas: {
    tab: 'hover:text-indigo-600 hover:bg-indigo-50',
    active: 'bg-indigo-600 text-white',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    text: 'text-indigo-700',
  },
  lectura: {
    tab: 'hover:text-green-700 hover:bg-green-50',
    active: 'bg-green-600 text-white',
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-700',
  },
}

export function Home() {
  const [activeModule, setActiveModule] = useState<string>('all')
  const { getSectionsRead, getBestScore } = useProgress()

  const totalSections = topics.reduce((acc, t) => acc + t.sections.length, 0)
  const totalRead = topics.reduce((acc, t) => acc + getSectionsRead(t.id).length, 0)
  const globalPct = totalSections > 0 ? Math.round((totalRead / totalSections) * 100) : 0

  const filteredTopics =
    activeModule === 'all'
      ? topics
      : topics.filter((t) => {
          const mod = modules.find((m) => m.id === activeModule)
          return mod?.topicIds.includes(t.id)
        })

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-white border-b border-zinc-100 relative overflow-hidden">
        {/* Three.js background — lazy-loaded, isolated from Framer Motion tree */}
        <Suspense fallback={null}>
          <HeroCanvas className="opacity-40" />
        </Suspense>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <div>
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <Lightning weight="fill" className="w-3.5 h-3.5" />
              LMGC · Universidad de la Salud CDMX
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tighter leading-none mb-1">
              Med<span className="text-teal-600">Core</span>
            </h1>
            <p className="text-zinc-400 text-sm font-semibold tracking-wide mb-4 uppercase">
              Plataforma de Estudio Médico
            </p>
            <p className="text-zinc-500 text-base leading-relaxed max-w-[52ch] mb-8">
              Anatomía 3D interactiva, terminología MedLex, plan de estudios LMGC, quizzes y seguimiento de progreso. Todo en un lugar.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to={`/topic/${topics[0].id}`}
                className="btn-primary bg-zinc-900 hover:bg-zinc-700 text-white px-5 py-2.5"
              >
                Empezar a estudiar
                <ArrowRight weight="bold" className="w-4 h-4" />
              </Link>
              <Link
                to="/anatomia-3d"
                className="btn-primary bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 border border-teal-500"
              >
                <Cube weight="fill" className="w-4 h-4" />
                Ver modelo 3D
              </Link>
              <Link
                to="/progress"
                className="btn-primary bg-zinc-100 hover:bg-zinc-200 text-zinc-700 px-5 py-2.5"
              >
                Ver progreso
              </Link>
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-3">
            <StatCard value={globalPct} label="Completado" sub={`${totalRead}/${totalSections} secciones`} ring />
            <StatCard value={topics.length} label="Temas" sub="en 3 módulos" />
            <StatCard value={questions.length} label="Preguntas" sub="de quiz" />
          </div>
        </div>
      </section>

      {/* Module tabs */}
      <div className="bg-white border-b border-zinc-200 sticky top-14 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide py-2">
            <TabButton
              active={activeModule === 'all'}
              onClick={() => setActiveModule('all')}
              label="Todos"
              count={topics.length}
            />
            {modules.map((mod) => {
              const mc = MODULE_COLORS[mod.id]
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold
                               whitespace-nowrap transition-all duration-150 flex-shrink-0
                               ${activeModule === mod.id ? mc.active : `text-zinc-500 ${mc.tab}`}`}
                >
                  {MODULE_ICONS[mod.id]}
                  <span>{mod.title}</span>
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full
                    ${activeModule === mod.id ? 'bg-white/20 text-white' : 'bg-zinc-100 text-zinc-500'}`}>
                    {mod.topicIds.length}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Module info banner (when a module is selected) */}
      <AnimatePresence mode="wait">
        {activeModule !== 'all' && (
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {modules.filter((m) => m.id === activeModule).map((mod) => {
              const mc = MODULE_COLORS[mod.id]
              return (
                <div key={mod.id} className={`${mc.bg} border-b ${mc.border}`}>
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-3">
                    <span className="text-2xl">{mod.emoji}</span>
                    <div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${mc.text}`}>{mod.badge}</span>
                      <p className="text-sm text-zinc-600 leading-snug">{mod.subtitle}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Topic grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-baseline justify-between mb-5">
          <h2 className="text-lg font-bold text-zinc-900 tracking-tight">
            {activeModule === 'all'
              ? `Todos los temas`
              : modules.find((m) => m.id === activeModule)?.title}
          </h2>
          <span className="text-sm text-zinc-400">{filteredTopics.length} temas</span>
        </div>

        <motion.div
          key={activeModule}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filteredTopics.map((topic, i) => {
            const colors = TOPIC_COLORS[topic.colorKey]
            const read = getSectionsRead(topic.id).length
            const total = topic.sections.length
            const pct = Math.round((read / total) * 100)
            const bestScore = getBestScore(topic.id)
            const qCount = questions.filter((q) => q.topicId === topic.id).length
            const mod = modules.find((m) => m.topicIds.includes(topic.id))

            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={`/topic/${topic.id}`}
                  className="group block card p-5 hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${colors.headerBg} flex items-center justify-center text-2xl shadow-sm`}>
                      {topic.emoji}
                    </div>
                    <ProgressRing
                      value={pct}
                      size={44}
                      strokeWidth={4}
                      color={COLOR_RING[topic.colorKey]}
                    />
                  </div>

                  {mod && (
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${MODULE_COLORS[mod.id].text} block mb-1`}>
                      {mod.badge}
                    </span>
                  )}
                  <h3 className="font-bold text-zinc-900 text-sm leading-snug mb-1 group-hover:text-zinc-700 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                    {topic.subtitle}
                  </p>

                  <div className="flex items-center justify-between border-t border-zinc-100 pt-3">
                    <div className="flex items-center gap-3 text-xs text-zinc-400">
                      <span className="flex items-center gap-1">
                        <BookOpen weight="fill" className="w-3.5 h-3.5" />
                        {total} secciones
                      </span>
                      {bestScore !== null && (
                        <span className={`flex items-center gap-1 ${colors.text} font-semibold`}>
                          <Trophy weight="fill" className="w-3.5 h-3.5" />
                          {bestScore}%
                        </span>
                      )}
                    </div>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${colors.badge}`}>
                      {qCount} Qs
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </section>
    </main>
  )
}

function StatCard({
  value, label, sub, ring,
}: {
  value: number; label: string; sub: string; ring?: boolean
}) {
  return (
    <div className="card p-4 flex flex-col items-center text-center gap-2">
      {ring ? (
        <ProgressRing value={value} size={52} strokeWidth={5} />
      ) : (
        <span className="text-2xl font-extrabold text-zinc-900">{value}</span>
      )}
      <div>
        <p className="text-xs font-bold text-zinc-700">{label}</p>
        <p className="text-[11px] text-zinc-400">{sub}</p>
      </div>
    </div>
  )
}

function TabButton({
  active, onClick, label, count,
}: {
  active: boolean; onClick: () => void; label: string; count: number
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold
                   whitespace-nowrap transition-all duration-150 flex-shrink-0
                   ${active ? 'bg-zinc-900 text-white' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'}`}
    >
      {label}
      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full
        ${active ? 'bg-white/20 text-white' : 'bg-zinc-100 text-zinc-500'}`}>
        {count}
      </span>
    </button>
  )
}
