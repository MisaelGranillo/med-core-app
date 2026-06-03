import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle } from '@phosphor-icons/react'
import type { Question, TopicColorKey } from '../types'
import { TOPIC_COLORS } from '../data/colors'

interface QuizQuestionProps {
  question: Question
  colorKey: TopicColorKey
  onAnswer: (isCorrect: boolean) => void
  questionNumber: number
  total: number
}

export function QuizQuestion({
  question,
  colorKey,
  onAnswer,
  questionNumber,
  total,
}: QuizQuestionProps) {
  const [selected, setSelected] = useState<number | null>(null)
  const colors = TOPIC_COLORS[colorKey]
  const answered = selected !== null

  const handleSelect = (idx: number) => {
    if (answered) return
    setSelected(idx)
    setTimeout(() => onAnswer(idx === question.correctIndex), 1200)
  }

  const optionState = (idx: number) => {
    if (!answered) return 'idle'
    if (idx === question.correctIndex) return 'correct'
    if (idx === selected && idx !== question.correctIndex) return 'wrong'
    return 'idle'
  }

  const stateStyles: Record<string, string> = {
    idle: 'border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50 text-zinc-700',
    correct: 'border-emerald-400 bg-emerald-50 text-emerald-800',
    wrong: 'border-red-400 bg-red-50 text-red-800',
    selected: 'border-zinc-400 bg-zinc-100',
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-5">
      {/* Progress */}
      <div className="flex items-center justify-between text-xs text-zinc-400 font-medium">
        <span>Pregunta {questionNumber} de {total}</span>
        <div className="flex gap-1">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i < questionNumber - 1
                  ? colors.dot
                  : i === questionNumber - 1
                  ? colors.dot + ' opacity-100 w-6'
                  : 'bg-zinc-200'
              }`}
              style={{ width: i === questionNumber - 1 ? 24 : 8 }}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <div className="card px-6 py-5">
        <span className={`text-xs font-bold uppercase tracking-wider ${colors.text} block mb-2`}>
          {question.difficulty === 'easy' ? 'Básico' : question.difficulty === 'medium' ? 'Intermedio' : 'Avanzado'}
          {question.type === 'true-false' && ' · Verdadero o Falso'}
        </span>
        <p className="text-base font-semibold text-zinc-800 leading-snug">
          {question.question}
        </p>
      </div>

      {/* Options */}
      <div className="space-y-2.5">
        {question.options.map((option, idx) => {
          const state = optionState(idx)
          return (
            <motion.button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={answered}
              whileTap={!answered ? { scale: 0.99 } : {}}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 text-left
                          text-sm font-medium transition-all duration-200 cursor-pointer
                          disabled:cursor-default ${stateStyles[state]}`}
            >
              <span
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-all duration-200
                  ${state === 'correct' ? 'border-emerald-400 bg-emerald-400 text-white' : ''}
                  ${state === 'wrong' ? 'border-red-400 bg-red-400 text-white' : ''}
                  ${state === 'idle' ? 'border-zinc-300 text-zinc-400' : ''}
                `}
              >
                {state === 'correct' ? (
                  <CheckCircle weight="fill" className="w-4 h-4" />
                ) : state === 'wrong' ? (
                  <XCircle weight="fill" className="w-4 h-4" />
                ) : (
                  String.fromCharCode(65 + idx)
                )}
              </span>
              {option}
            </motion.button>
          )
        })}
      </div>

      {/* Explanation */}
      {answered && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`rounded-xl px-4 py-3.5 text-sm leading-relaxed ${
            selected === question.correctIndex
              ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
              : 'bg-amber-50 border border-amber-200 text-amber-800'
          }`}
        >
          <span className="font-bold block mb-1">
            {selected === question.correctIndex ? 'Correcto.' : 'Explicación:'}
          </span>
          {question.explanation}
        </motion.div>
      )}
    </div>
  )
}
