import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Question, TopicColorKey } from '../types'
import { TOPIC_COLORS } from '../data/colors'

interface FlashCardProps {
  question: Question
  colorKey: TopicColorKey
  onCorrect: () => void
  onIncorrect: () => void
}

export function FlashCard({
  question,
  colorKey,
  onCorrect,
  onIncorrect,
}: FlashCardProps) {
  const [flipped, setFlipped] = useState(false)
  const [answered, setAnswered] = useState<'correct' | 'incorrect' | null>(null)
  const colors = TOPIC_COLORS[colorKey]

  const correctAnswer = question.options[question.correctIndex]

  const handleFlip = () => {
    if (!answered) setFlipped((f) => !f)
  }

  const handleAnswer = (isCorrect: boolean) => {
    setAnswered(isCorrect ? 'correct' : 'incorrect')
    if (isCorrect) onCorrect()
    else onIncorrect()
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Card */}
      <div
        className="relative cursor-pointer select-none"
        style={{ perspective: '1200px', height: '280px' }}
        onClick={handleFlip}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 120, damping: 18 }}
          style={{ transformStyle: 'preserve-3d', width: '100%', height: '100%', position: 'relative' }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 card flex flex-col items-center justify-center p-8 text-center"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <span
              className={`text-xs font-bold uppercase tracking-widest mb-4 ${colors.text}`}
            >
              {question.difficulty === 'easy' ? 'Básico' : question.difficulty === 'medium' ? 'Intermedio' : 'Avanzado'}
            </span>
            <p className="text-lg font-semibold text-zinc-800 leading-snug text-balance max-w-[65ch]">
              {question.question}
            </p>
            <p className="text-xs text-zinc-400 mt-6">Toca para ver la respuesta</p>
          </div>

          {/* Back */}
          <div
            className={`absolute inset-0 card flex flex-col items-center justify-center p-8 text-center ${colors.bg}`}
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <span className={`text-xs font-bold uppercase tracking-widest mb-3 ${colors.text}`}>
              Respuesta correcta
            </span>
            <p className="text-xl font-bold text-zinc-900 mb-3">{correctAnswer}</p>
            <p className="text-sm text-zinc-600 leading-relaxed max-w-[55ch]">
              {question.explanation}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Action buttons — appear after flipping */}
      {flipped && !answered && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex gap-3 mt-5 justify-center"
        >
          <button
            onClick={() => handleAnswer(false)}
            className="flex-1 max-w-[180px] py-3 rounded-xl border-2 border-red-200 bg-red-50
                       text-red-700 font-semibold text-sm hover:bg-red-100
                       active:scale-[0.98] transition-all duration-150"
          >
            No lo supe
          </button>
          <button
            onClick={() => handleAnswer(true)}
            className="flex-1 max-w-[180px] py-3 rounded-xl border-2 border-emerald-200 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/15
                       text-emerald-700 dark:text-emerald-300 font-semibold text-sm hover:bg-emerald-100 dark:bg-emerald-500/20
                       active:scale-[0.98] transition-all duration-150"
          >
            Lo supe
          </button>
        </motion.div>
      )}

      {answered && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-5 py-3 rounded-xl text-center text-sm font-semibold ${
            answered === 'correct'
              ? 'bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30'
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}
        >
          {answered === 'correct' ? 'Marcado como correcto' : 'Marcado para repasar'}
        </motion.div>
      )}
    </div>
  )
}
