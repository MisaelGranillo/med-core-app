import { useState, useCallback } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  Cards,
  ListChecks,
  ArrowRight,
  Trophy,
  ArrowCounterClockwise,
  CheckCircle,
  XCircle,
} from '@phosphor-icons/react'
import { topics } from '../data/topics'
import { questions } from '../data/quizzes'
import { TOPIC_COLORS } from '../data/colors'
import { useProgress } from '../store/useProgress'
import { FlashCard } from '../components/FlashCard'
import { QuizQuestion } from '../components/QuizQuestion'
import type { Question } from '../types'

type Mode = 'select' | 'flashcard' | 'quiz' | 'results'

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

export function Quiz() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const topic = topics.find((t) => t.id === id)
  const topicQuestions = questions.filter((q) => q.topicId === id)
  const colors = topic ? TOPIC_COLORS[topic.colorKey] : TOPIC_COLORS.digestivo
  const { addQuizAttempt, getBestScore } = useProgress()

  const [mode, setMode] = useState<Mode>('select')
  const [deck, setDeck] = useState<Question[]>([])
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [wrongIds, setWrongIds] = useState<string[]>([])

  if (!topic) { navigate('/'); return null }

  const startFlashcard = () => {
    setDeck(shuffle(topicQuestions))
    setCurrent(0)
    setScore(0)
    setWrongIds([])
    setMode('flashcard')
  }

  const startQuiz = () => {
    setDeck(shuffle(topicQuestions))
    setCurrent(0)
    setScore(0)
    setWrongIds([])
    setMode('quiz')
  }

  const handleFlashCorrect = () => {
    setScore((s) => s + 1)
    advanceCard()
  }

  const handleFlashIncorrect = () => {
    setWrongIds((w) => [...w, deck[current].id])
    advanceCard()
  }

  const handleQuizAnswer = useCallback(
    (isCorrect: boolean) => {
      if (isCorrect) setScore((s) => s + 1)
      else setWrongIds((w) => [...w, deck[current].id])
      setTimeout(() => advanceCard(), 1400)
    },
    [current, deck]
  )

  const advanceCard = () => {
    if (current + 1 >= deck.length) {
      finishSession()
    } else {
      setCurrent((c) => c + 1)
    }
  }

  const finishSession = () => {
    addQuizAttempt(topic.id, {
      date: new Date().toISOString(),
      score,
      total: deck.length,
    })
    setMode('results')
  }

  const bestScore = getBestScore(topic.id)
  const pct = deck.length > 0 ? Math.round((score / deck.length) * 100) : 0

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className={`${colors.headerBg} text-white`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
          <Link
            to={`/topic/${topic.id}`}
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium transition-colors"
          >
            <ArrowLeft weight="bold" className="w-4 h-4" />
            {topic.title}
          </Link>
          <span className="text-white/70 text-sm">
            {topicQuestions.length} preguntas
          </span>
        </div>
      </div>

      <div className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-10">
        <AnimatePresence mode="wait">

          {/* Mode selection */}
          {mode === 'select' && (
            <motion.div
              key="select"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <span className="text-4xl mb-3 block">{topic.emoji}</span>
                <h2 className="text-2xl font-extrabold text-zinc-900 tracking-tight mb-2">
                  {topic.title}
                </h2>
                <p className="text-zinc-500 text-sm">Elige cómo quieres repasar</p>
                {bestScore !== null && (
                  <div className={`inline-flex items-center gap-1.5 mt-3 text-sm font-semibold px-3 py-1.5 rounded-full ${colors.badge}`}>
                    <Trophy weight="fill" className="w-4 h-4" />
                    Mejor puntuación: {bestScore}%
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={startFlashcard}
                  className="card p-6 text-left hover:shadow-card-hover hover:-translate-y-0.5
                             transition-all duration-200 active:scale-[0.98] group"
                >
                  <div className={`w-12 h-12 rounded-2xl ${colors.headerBg} flex items-center justify-center mb-4`}>
                    <Cards weight="fill" className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-zinc-900 mb-1">Tarjetas de Repaso</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Estudia con flashcards. Voltea la tarjeta para ver la respuesta y marca si la sabías.
                  </p>
                </button>

                <button
                  onClick={startQuiz}
                  className="card p-6 text-left hover:shadow-card-hover hover:-translate-y-0.5
                             transition-all duration-200 active:scale-[0.98] group"
                >
                  <div className={`w-12 h-12 rounded-2xl ${colors.headerBg} flex items-center justify-center mb-4`}>
                    <ListChecks weight="fill" className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-zinc-900 mb-1">Quiz de Opción Múltiple</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Elige la respuesta correcta entre 4 opciones. Retroalimentación inmediata con explicación.
                  </p>
                </button>
              </div>

              <div className="card p-4 bg-zinc-50">
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                  Distribución de dificultad
                </p>
                <div className="flex gap-2 text-xs">
                  {(['easy', 'medium', 'hard'] as const).map((d) => {
                    const count = topicQuestions.filter((q) => q.difficulty === d).length
                    const labels = { easy: 'Básico', medium: 'Intermedio', hard: 'Avanzado' }
                    const colors2 = {
                      easy: 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300',
                      medium: 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300',
                      hard: 'bg-red-100 text-red-700',
                    }
                    return (
                      <span key={d} className={`px-2.5 py-1 rounded-full font-semibold ${colors2[d]}`}>
                        {labels[d]}: {count}
                      </span>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* Flashcard mode */}
          {mode === 'flashcard' && current < deck.length && (
            <motion.div
              key={`flash-${current}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between text-sm text-zinc-400">
                <span>{current + 1} / {deck.length}</span>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle weight="fill" className="w-4 h-4" />{score}
                  </span>
                  <span className="text-red-500 font-semibold flex items-center gap-1">
                    <XCircle weight="fill" className="w-4 h-4" />{wrongIds.length}
                  </span>
                </div>
              </div>
              <FlashCard
                question={deck[current]}
                colorKey={topic.colorKey}
                onCorrect={handleFlashCorrect}
                onIncorrect={handleFlashIncorrect}
              />
            </motion.div>
          )}

          {/* Quiz mode */}
          {mode === 'quiz' && current < deck.length && (
            <motion.div
              key={`quiz-${current}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
            >
              <QuizQuestion
                question={deck[current]}
                colorKey={topic.colorKey}
                onAnswer={handleQuizAnswer}
                questionNumber={current + 1}
                total={deck.length}
              />
            </motion.div>
          )}

          {/* Results */}
          {mode === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, type: 'spring', stiffness: 120, damping: 20 }}
              className="text-center space-y-6"
            >
              <div className="card p-10">
                <div className={`w-20 h-20 rounded-full ${colors.headerBg} flex items-center justify-center mx-auto mb-5`}>
                  <Trophy weight="fill" className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight mb-1">
                  {pct}%
                </h2>
                <p className="text-zinc-500 text-sm mb-5">
                  {score} de {deck.length} correctas
                </p>

                <div className="flex justify-center gap-6 mb-8">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{score}</p>
                    <p className="text-xs text-zinc-400 font-medium">Correctas</p>
                  </div>
                  <div className="w-px bg-zinc-200" />
                  <div className="text-center">
                    <p className="text-2xl font-bold text-red-500">{deck.length - score}</p>
                    <p className="text-xs text-zinc-400 font-medium">Incorrectas</p>
                  </div>
                  <div className="w-px bg-zinc-200" />
                  <div className="text-center">
                    <p className="text-2xl font-bold text-zinc-700">{deck.length}</p>
                    <p className="text-xs text-zinc-400 font-medium">Total</p>
                  </div>
                </div>

                <p className="text-sm font-semibold text-zinc-600 mb-6">
                  {pct >= 90 ? 'Excelente dominio del tema.' :
                   pct >= 70 ? 'Buen trabajo. Repasa las secciones con errores.' :
                   'Continúa estudiando. Revisa los paneles del tema.'}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setMode('select')}
                    className="btn-primary bg-zinc-100 hover:bg-zinc-200 text-zinc-700 px-5 py-2.5"
                  >
                    <ArrowCounterClockwise weight="bold" className="w-4 h-4" />
                    Intentar de nuevo
                  </button>
                  <Link
                    to={`/topic/${topic.id}`}
                    className={`btn-primary ${colors.button} px-5 py-2.5`}
                  >
                    Volver al tema
                    <ArrowRight weight="bold" className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  )
}
