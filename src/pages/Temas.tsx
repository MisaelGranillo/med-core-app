/* Índice de Temas — ruta /estudio
 *
 * El índice REAL de guías de estudio: todos los `topics` agrupados por
 * `modules`, con doble acción Estudiar / Quiz. Sustituye al antiguo índice PAI,
 * que se archiva en /estudio/archivo.
 *
 * A diferencia de /quiz (catálogo de quizzes, que filtra los temas sin
 * reactivos), aquí NO se filtra: un tema sin quiz muestra solo "Estudiar". */

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GraduationCap, ArrowRight, BookOpen, Archive } from '@phosphor-icons/react'
import { modules } from '../data/modules'
import { topics } from '../data/topics'
import { questions } from '../data/quizzes'
import { TOPIC_COLORS } from '../data/colors'
import { useProgress } from '../store/useProgress'

export function Temas() {
  const { getSectionsRead } = useProgress()

  const topicById = Object.fromEntries(topics.map(t => [t.id, t]))
  const countFor = (id: string) => questions.filter(q => q.topicId === id).length

  const groups = modules
    .map(m => ({
      module: m,
      temas: m.topicIds
        .map(id => topicById[id])
        .filter((t): t is (typeof topics)[number] => Boolean(t)),
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
            <GraduationCap weight="fill" className="w-3.5 h-3.5" />
            Temas
          </div>
          <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight leading-none mb-2">
            Guías de estudio
          </h1>
          <p className="text-zinc-500 text-sm max-w-[55ch]">
            {topics.length} temas en {groups.length} módulos. Lee la guía y ponte a prueba con el quiz.
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {temas.map((t, i) => {
                const colors = TOPIC_COLORS[t.colorKey]
                const qCount = countFor(t.id)
                const read = getSectionsRead(t.id).length
                const total = t.sections.length
                const pct = total > 0 ? Math.round((read / total) * 100) : 0
                return (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.25 }}
                    className="card p-4 flex flex-col gap-3 h-full"
                  >
                    <div className="flex items-start gap-2 min-w-0">
                      <span className="text-2xl flex-shrink-0">{t.emoji}</span>
                      <div className="min-w-0">
                        <h3 className="font-bold text-sm leading-snug text-zinc-900">{t.title}</h3>
                        <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mt-0.5">{t.subtitle}</p>
                      </div>
                    </div>

                    {/* progreso de lectura */}
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                        <div className={`h-full ${colors.dot} rounded-full transition-all`} style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-[10px] font-semibold text-zinc-400 flex-shrink-0">{read}/{total}</span>
                    </div>

                    <div className="flex items-center gap-2 mt-auto pt-1">
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${colors.badge}`}>
                        {total} secciones{qCount > 0 ? ` · ${qCount} reactivos` : ''}
                      </span>
                    </div>

                    {/* doble acción — Estudiar primero (leer antes de examinarse) */}
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/topic/${t.id}`}
                        className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
                      >
                        <BookOpen weight="bold" className="w-3.5 h-3.5" /> Estudiar
                      </Link>
                      {qCount > 0 && (
                        <Link
                          to={`/quiz/${t.id}`}
                          className={`flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl ${colors.badge} transition-colors`}
                        >
                          Quiz <ArrowRight weight="bold" className="w-3 h-3" />
                        </Link>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </section>
        ))}

        {/* Archivo PAI — sigue siendo útil, ya no ocupa el camino principal */}
        <div className="pt-4 border-t border-zinc-100">
          <Link
            to="/estudio/archivo"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-primary-700 transition-colors"
          >
            <Archive weight="regular" className="w-4 h-4" />
            Guías de admisión (archivo)
          </Link>
        </div>
      </div>
    </main>
  )
}
