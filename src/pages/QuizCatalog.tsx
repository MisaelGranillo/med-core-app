/* Catálogo de Quizzes — ruta /quiz
 *
 * Arriba, los exámenes semanales reales; abajo, los quizzes de cada tema
 * agrupados como el plan: materia → semana. */

import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Lightning, ArrowRight, Trophy, BookOpen, Exam } from '@phosphor-icons/react'
import { agruparPorMateria, nombreCorto } from '../data/agrupar'
import { topicIndex as topics, totalQuestionCount, examDecks, examQuestionCount } from '../data/generated/topicIndex'
import { TOPIC_COLORS } from '../data/colors'
import { useProgress } from '../store/useProgress'
import { useSettings } from '../store/useSettings'
import { APROBAR_JEFE } from '../utils/juego'

export function QuizCatalog() {
  const { getBestScore } = useProgress()
  const arcade = useSettings(s => s.estilo === 'arcade')
  const { hash } = useLocation()
  // Al llegar con /quiz#examenes o /quiz#<materia>, baja a esa sección.
  useEffect(() => {
    if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
  }, [hash])

  const countFor = (id: string) => topics.find(t => t.id === id)?.questionCount ?? 0
  const totalQuestions = totalQuestionCount

  // Agrupa por materia y semana, solo temas con quiz disponible.
  const groups = agruparPorMateria(topics.filter(t => t.questionCount > 0))

  return (
    <main className="flex-1 pb-20 md:pb-0">
      {/* Hero */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <h1 className="font-display font-light text-[2.25rem] sm:text-[2.75rem] leading-[1.05] tracking-[-0.025em] text-zinc-900 mb-2">
            Catálogo de Quizzes
          </h1>
          <p className="text-zinc-500 text-base max-w-[60ch]">
            {totalQuestions} preguntas en {groups.reduce((n, g) => n + g.total, 0)} temas.
            Practica con los exámenes reales o elige un tema para repasar con flashcards o quiz de opción múltiple.
          </p>
          <nav className="flex flex-wrap gap-1.5 mt-5" aria-label="Ir a una materia">
            <a href="#examenes" className="text-xs font-semibold px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-200">Exámenes</a>
            {groups.map(({ materia: m }) => (
              <a key={m.id} href={`#${m.id}`} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-200 inline-flex items-center gap-1.5">
                <span>{m.emoji}</span>{nombreCorto(m.nombre)}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Exámenes semanales reales */}
      {examDecks.length > 0 && (
        <section id="examenes" className="max-w-7xl mx-auto px-4 sm:px-6 pt-2 pb-4 scroll-mt-20">
          <div className="flex items-center gap-2 mb-1">
            <Exam weight="duotone" className="w-5 h-5 text-zinc-500" />
            <h2 className="font-display font-normal text-zinc-900 text-xl">{arcade ? 'Jefes' : 'Exámenes'} del {examDecks[0].periodoLabel.toLowerCase()}</h2>
            <span className="text-xs font-semibold text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-full">
              {examQuestionCount} preguntas
            </span>
          </div>
          <p className="text-sm text-zinc-500 mb-4 max-w-[70ch]">
            {arcade
              ? `Cada examen semanal es un jefe: lo vences con ${APROBAR_JEFE} % o más y ganas 150 XP.`
              : 'Los exámenes semanales tal como se aplicaron, con las claves revisadas. Cada pregunta también aparece en el quiz de su tema.'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {examDecks.map((d) => {
              const colors = TOPIC_COLORS[d.colorKey]
              const bestAll = getBestScore(`examen-${d.materia}`)
              return (
                <div key={d.materia} className="card p-4 flex flex-col gap-3 h-full">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-2xl flex-shrink-0">{d.emoji}</span>
                      <h3 className="font-bold text-sm leading-snug text-zinc-900">{d.nombre}</h3>
                    </div>
                    {bestAll !== null && (
                      <span className="flex items-center gap-1 text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-500/20 px-1.5 py-0.5 rounded-full flex-shrink-0">
                        <Trophy weight="fill" className="w-3 h-3" />{bestAll}%
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {d.semanas.map((w) => {
                      const best = getBestScore(`examen-${d.materia}-s${w.n}`)
                      return (
                        <Link
                          key={w.n}
                          to={`/quiz/examen-${d.materia}-s${w.n}`}
                          title={`${w.count} preguntas`}
                          className={`flex flex-col items-center rounded-xl py-1.5 text-xs font-semibold ${colors.badge} hover:opacity-80 transition-opacity`}
                        >
                          <span>Sem. {w.n}</span>
                          <span className="text-[0.625rem] font-medium opacity-75">{best !== null ? `${arcade && best >= APROBAR_JEFE ? '✓ ' : ''}${best}%` : `${w.count} p.`}</span>
                        </Link>
                      )
                    })}
                  </div>
                  <Link
                    to={`/quiz/examen-${d.materia}`}
                    className="mt-auto flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-primary text-primary-fg hover:bg-primary-hover transition-colors"
                  >
                    Todo el semestre · {d.total} <ArrowRight weight="bold" className="w-3 h-3" />
                  </Link>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* Quizzes por materia y semana */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-10">
        {groups.map(({ materia: m, semanas, total }) => (
          <section key={m.id} id={m.id} className="scroll-mt-20">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xl">{m.emoji}</span>
              <h2 className="font-display font-normal text-zinc-900 text-xl">{m.nombre}</h2>
              <span className="text-xs font-semibold text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-full">
                {total} temas
              </span>
            </div>
            <div className="space-y-5">
            {semanas.map((w) => (
            <div key={w.n ?? 'repasos'}>
            <h3 className="text-xs font-bold text-zinc-400 mb-2">{w.n !== null ? `Semana ${w.n}` : w.titulo}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {w.temas.map((t, i) => {
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
            </div>
            ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
