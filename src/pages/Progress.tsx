import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Trophy, BookOpen, Lightning, ArrowRight, ArrowCounterClockwise } from '@phosphor-icons/react'
import { topics } from '../data/topics'
import { questions } from '../data/quizzes'
import { TOPIC_COLORS } from '../data/colors'
import { useProgress } from '../store/useProgress'
import { ProgressRing } from '../components/ProgressRing'

const COLOR_RING: Record<string, string> = {
  digestivo: '#f59e0b', urinario: '#0ea5e9', reproductor: '#f43f5e',
  circulatorio: '#ef4444', respiratorio: '#14b8a6', locomotor: '#f97316', nervioso: '#8b5cf6',
}

export function Progress() {
  const { getSectionsRead, getBestScore, getQuizAttempts, resetTopic } = useProgress()

  const totalSections = topics.reduce((a, t) => a + t.sections.length, 0)
  const totalRead = topics.reduce((a, t) => a + getSectionsRead(t.id).length, 0)
  const globalPct = totalSections > 0 ? Math.round((totalRead / totalSections) * 100) : 0

  const totalAttempts = topics.reduce(
    (a, t) => a + getQuizAttempts(t.id).length,
    0
  )
  const avgBest =
    topics.reduce((a, t) => a + (getBestScore(t.id) ?? 0), 0) / topics.length

  return (
    <div className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-zinc-900 tracking-tight mb-1">
          Mi Progreso
        </h1>
        <p className="text-zinc-400 text-sm">Seguimiento de secciones leídas y resultados de quiz.</p>
      </div>

      {/* Global stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Global', value: globalPct, sub: `${totalRead}/${totalSections} secciones`, ring: true },
          { label: 'Mejor Quiz', value: Math.round(avgBest), sub: 'promedio % temas', ring: true },
          { label: 'Intentos', value: totalAttempts, sub: 'quizzes completados', ring: false },
          { label: 'Temas', value: topics.filter((t) => getSectionsRead(t.id).length === t.sections.length).length, sub: 'completados', ring: false },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="card p-5 flex flex-col items-center text-center gap-3"
          >
            {stat.ring ? (
              <ProgressRing value={stat.value} size={64} strokeWidth={6} />
            ) : (
              <span className="text-3xl font-extrabold text-zinc-900">{stat.value}</span>
            )}
            <div>
              <p className="text-sm font-bold text-zinc-700">{stat.label}</p>
              <p className="text-xs text-zinc-400">{stat.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Per-topic breakdown */}
      <div className="space-y-4">
        {topics.map((topic, i) => {
          const colors = TOPIC_COLORS[topic.colorKey]
          const read = getSectionsRead(topic.id)
          const total = topic.sections.length
          const pct = Math.round((read.length / total) * 100)
          const best = getBestScore(topic.id)
          const attempts = getQuizAttempts(topic.id)
          const qCount = questions.filter((q) => q.topicId === topic.id).length

          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="card p-5"
            >
              <div className="flex items-center gap-4">
                {/* Icon + title */}
                <div className={`w-11 h-11 rounded-2xl ${colors.headerBg} flex items-center justify-center text-xl flex-shrink-0`}>
                  {topic.emoji}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-bold text-zinc-900 text-sm truncate">{topic.title}</h3>
                    <span className="text-xs text-zinc-400 flex-shrink-0">
                      {read.length}/{total} secciones
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="h-1.5 rounded-full bg-zinc-100 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ delay: i * 0.06 + 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className={`h-full rounded-full ${colors.dot}`}
                    />
                  </div>
                </div>

                {/* Ring */}
                <div className="flex-shrink-0">
                  <ProgressRing
                    value={pct}
                    size={48}
                    strokeWidth={4}
                    color={COLOR_RING[topic.colorKey]}
                  />
                </div>
              </div>

              {/* Stats row */}
              <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-4 text-xs text-zinc-500">
                  <span className="flex items-center gap-1">
                    <BookOpen weight="fill" className="w-3.5 h-3.5" />
                    {read.length} leídas
                  </span>
                  {best !== null ? (
                    <span className={`flex items-center gap-1 font-semibold ${colors.text}`}>
                      <Trophy weight="fill" className="w-3.5 h-3.5" />
                      Mejor: {best}%
                    </span>
                  ) : (
                    <span className="text-zinc-300">Sin quiz</span>
                  )}
                  {attempts.length > 0 && (
                    <span className="flex items-center gap-1">
                      <Lightning weight="fill" className="w-3.5 h-3.5" />
                      {attempts.length} intento{attempts.length !== 1 ? 's' : ''}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (window.confirm(`¿Resetear progreso de "${topic.title}"?`)) {
                        resetTopic(topic.id)
                      }
                    }}
                    className="text-xs text-zinc-300 hover:text-red-400 transition-colors"
                  >
                    <ArrowCounterClockwise weight="bold" className="w-4 h-4" />
                  </button>
                  <Link
                    to={`/quiz/${topic.id}`}
                    className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl ${colors.badge} transition-colors`}
                  >
                    Quiz ({qCount})
                    <ArrowRight weight="bold" className="w-3 h-3" />
                  </Link>
                  <Link
                    to={`/topic/${topic.id}`}
                    className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-zinc-100 text-zinc-600 hover:bg-zinc-200 transition-colors"
                  >
                    Estudiar
                    <ArrowRight weight="bold" className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Recent attempts timeline */}
              {attempts.length > 0 && (
                <div className="mt-3 flex gap-2 overflow-x-auto scrollbar-hide">
                  {attempts
                    .slice(-8)
                    .reverse()
                    .map((a, idx) => {
                      const p = Math.round((a.score / a.total) * 100)
                      return (
                        <div
                          key={idx}
                          className="flex-shrink-0 text-center bg-zinc-50 border border-zinc-100 rounded-xl px-3 py-2"
                        >
                          <p className={`text-sm font-bold ${p >= 70 ? 'text-emerald-600' : 'text-red-500'}`}>
                            {p}%
                          </p>
                          <p className="text-[10px] text-zinc-400">
                            {new Date(a.date).toLocaleDateString('es-MX', { month: 'short', day: 'numeric' })}
                          </p>
                        </div>
                      )
                    })}
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
