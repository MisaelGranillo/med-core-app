/* Catálogo de Quizzes — ruta /quiz
 *
 * Sección núcleo, agnóstica a la escuela: lista todos los temas con quiz
 * disponible y permite elegir uno. Funciona sin ningún plan cargado.
 * Los temas se agrupan por módulo (data/modules.ts). */

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Lightning, ArrowRight, Trophy } from '@phosphor-icons/react'
import { modules } from '../data/modules'
import { topics } from '../data/topics'
import { questions } from '../data/quizzes'
import { TOPIC_COLORS } from '../data/colors'
import { useProgress } from '../store/useProgress'

export function QuizCatalog() {
  const { getBestScore } = useProgress()

  const topicById = Object.fromEntries(topics.map(t => [t.id, t]))
  const countFor = (id: string) => questions.filter(q => q.topicId === id).length
  const totalQuestions = questions.length

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
      <section className="bg-surface border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200
                          text-primary-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5
                          rounded-full mb-3">
            <Lightning weight="fill" className="w-3.5 h-3.5" />
            Quizzes
          </div>
          <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight leading-none mb-2">
            Catálogo de Quizzes
          </h1>
          <p className="text-zinc-500 text-sm max-w-[55ch]">
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
              <h2 className="font-bold text-zinc-900">{module.title}</h2>
              <span className="text-[10px] font-semibold text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-full">
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
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.25 }}
                  >
                    <Link
                      to={`/quiz/${t.id}`}
                      className="card p-4 flex flex-col gap-3 h-full hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-2xl flex-shrink-0">{t.emoji}</span>
                          <h3 className="font-bold text-sm leading-snug text-zinc-900 group-hover:text-primary-700 transition-colors">
                            {t.title}
                          </h3>
                        </div>
                        {best !== null && (
                          <span className="flex items-center gap-1 text-[9px] font-bold text-amber-700 bg-amber-100 border border-amber-200 px-1.5 py-0.5 rounded-full flex-shrink-0">
                            <Trophy weight="fill" className="w-3 h-3" />
                            {best}%
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">{t.subtitle}</p>
                      <div className="flex items-center justify-between border-t border-zinc-100 pt-2.5 mt-auto">
                        <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${colors.badge}`}>
                          {qCount} preguntas
                        </span>
                        <ArrowRight weight="bold" className="w-4 h-4 text-zinc-300 group-hover:text-primary-500 transition-colors" />
                      </div>
                    </Link>
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
