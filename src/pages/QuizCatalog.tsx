/* Catálogo de Quizzes — ruta /quiz
 *
 * Sección núcleo, agnóstica a la escuela: lista todos los temas con quiz
 * disponible y permite elegir uno. Funciona sin ningún plan cargado.
 * Los temas se agrupan por módulo (data/modules.ts). */

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Lightning, ArrowRight, Trophy, BookOpen } from '@phosphor-icons/react'
import { modules } from '../data/modules'
import { topicIndex as topics, totalQuestionCount } from '../data/generated/topicIndex'
import { TOPIC_COLORS } from '../data/colors'
import { useProgress } from '../store/useProgress'

export function QuizCatalog() {
  const { getBestScore } = useProgress()

  const topicById = Object.fromEntries(topics.map(t => [t.id, t]))
  const countFor = (id: string) => topicById[id]?.questionCount ?? 0
  const totalQuestions = totalQuestionCount

  // Agrupa por módulo, solo temas con quiz disponible.
  const groups = modules
    .map(m => ({
      module: m,
      temas: m.topicIds
        .map(id => topicById[id])
        .filter((t): t is (typeof topics)[number] => Boolean(t) && countFor(t!.id) > 0),
    }))
    .filter(g => g.temas.length > 0)

  return (
    <main className="flex-1 pb-20 md:pb-0">
      {/* Hero */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <h1 className="font-display font-light text-[2.25rem] sm:text-[2.75rem] leading-[1.05] tracking-[-0.025em] text-zinc-900 mb-2">
            Catálogo de Quizzes
          </h1>
          <p className="text-zinc-500 text-base max-w-[60ch]">
            {totalQuestions} preguntas en {groups.reduce((n, g) => n + g.temas.length, 0)} temas.
            Elige un tema para practicar con flashcards o quiz de opción múltiple.
          </p>
        </div>
      </section>

      {/* Grupos por módulo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8">
        {groups.map(({ module, temas }) => (
          <section key={module.id}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{module.emoji}</span>
              <h2 className="font-display font-normal text-zinc-900 text-xl">{module.title}</h2>
              <span className="text-xs font-semibold text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-full">
                {temas.length} temas
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {temas.map((t, i) => {
                const colors = TOPIC_COLORS[t.colorKey]
                const qCount = countFor(t.id)
                const best = getBestScore(t.id)
                return (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 1, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.25 }}
                  >
                    <div className="card p-4 flex flex-col gap-3 h-full">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-2xl flex-shrink-0">{t.emoji}</span>
                          <h3 className="font-bold text-sm leading-snug text-zinc-900">
                            {t.title}
                          </h3>
                        </div>
                        {best !== null && (
                          <span className="flex items-center gap-1 text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-500/20 border border-amber-200 dark:border-amber-500/30 px-1.5 py-0.5 rounded-full flex-shrink-0">
                            <Trophy weight="fill" className="w-3 h-3" />
                            {best}%
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">{t.subtitle}</p>
                      <div className="flex items-center border-t border-zinc-100 pt-2.5 mt-auto">
                        <span className={`text-[0.6875rem] font-semibold px-2 py-0.5 rounded-full ${colors.badge}`}>
                          {qCount} preguntas
                        </span>
                      </div>
                      {/* Estudiar primero: leer antes de examinarse */}
                      <div className="flex items-center gap-2">
                        <Link
                          to={`/topic/${t.id}`}
                          className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-primary text-primary-fg hover:bg-primary-hover transition-colors"
                        >
                          <BookOpen weight="bold" className="w-3.5 h-3.5" /> Estudiar
                        </Link>
                        <Link
                          to={`/quiz/${t.id}`}
                          className={`flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl ${colors.badge} transition-colors`}
                        >
                          Quiz <ArrowRight weight="bold" className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
