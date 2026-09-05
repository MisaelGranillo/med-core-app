import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  Image as ImageIcon,
  Lightning,
  BookOpen,
  CheckCircle,
  ArrowsOut,
  X,
} from '@phosphor-icons/react'
import { atlasTopics } from '../data/atlas-topics'
import { useAtlasStore } from '../store/atlasStore'
import { ImageLightbox, DownloadPdfButton } from '../components/ImageLightbox'

type StudyMode = 'view' | 'quiz' | 'recall' | null

export function AtlasTopic() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const topic = atlasTopics.find((t) => t.id === id)

  const recordReview = useAtlasStore((s) => s.recordReview)
  const recordQuizAttempt = useAtlasStore((s) => s.recordQuizAttempt)
  const getMastery = useAtlasStore((s) => s.getMastery)

  const [mode, setMode] = useState<StudyMode>(null)
  const [imageRevealed, setImageRevealed] = useState(false)
  const [quizState, setQuizState] = useState({
    index: 0,
    score: 0,
    answered: false,
    selectedIndex: -1,
    completed: false,
  })
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' } | null>(
    null
  )
  const [lightboxOpen, setLightboxOpen] = useState(false)

  useEffect(() => {
    if (!topic) navigate('/atlas')
  }, [topic, navigate])

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000)
      return () => clearTimeout(timer)
    }
  }, [toast])

  if (!topic) return null

  const handleMarkReviewed = () => {
    recordReview(topic.id)
    setToast({ message: 'Tema marcado como revisado', type: 'success' })
  }

  const handleQuizAnswer = (index: number) => {
    if (quizState.answered) return

    const question = topic.questions[quizState.index]
    const isCorrect = index === question.correctIndex

    setQuizState((s) => ({
      ...s,
      selectedIndex: index,
      answered: true,
      score: isCorrect ? s.score + 1 : s.score,
    }))
  }

  const handleQuizNext = () => {
    if (quizState.index < topic.questions.length - 1) {
      setQuizState((s) => ({
        ...s,
        index: s.index + 1,
        answered: false,
        selectedIndex: -1,
      }))
    } else {
      recordQuizAttempt(topic.id, quizState.score, topic.questions.length)
      setQuizState((s) => ({ ...s, completed: true }))
    }
  }

  const handleQuizReset = () => {
    setQuizState({
      index: 0,
      score: 0,
      answered: false,
      selectedIndex: -1,
      completed: false,
    })
  }

  const handleRecallSubmit = () => {
    recordReview(topic.id)
    setImageRevealed(true)
    setToast({ message: 'Tema revisado. Buena práctica de recall.', type: 'success' })
  }

  const currentMastery = getMastery(topic.id)
  const relatedTopics = topic.relatedTopicIds
    ? atlasTopics.filter((t) => topic.relatedTopicIds?.includes(t.id))
    : []
  const prevIndex = atlasTopics.findIndex((t) => t.id === id) - 1
  const nextIndex = atlasTopics.findIndex((t) => t.id === id) + 1
  const prevTopic = prevIndex >= 0 ? atlasTopics[prevIndex] : null
  const nextTopic = nextIndex < atlasTopics.length ? atlasTopics[nextIndex] : null

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <Link
            to="/atlas"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium mb-4 transition-colors"
          >
            <ArrowLeft weight="bold" className="w-4 h-4" />
            Volver a Atlas
          </Link>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-surface/20 backdrop-blur-sm flex items-center justify-center text-3xl">
                  {topic.emoji}
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{topic.title}</h1>
                  <p className="text-white/70 text-sm">{topic.subtitle}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-white/80">
                <span>{topic.questions.length} preguntas</span>
                <span>•</span>
                <span className="capitalize">{topic.category}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="hidden md:block h-40 bg-surface/10 rounded-lg overflow-hidden flex-shrink-0 cursor-zoom-in group relative"
            >
              <img
                src={topic.imagePath}
                alt={topic.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                <ArrowsOut
                  weight="bold"
                  className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 flex-1">
        {!mode ? (
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <button
              onClick={() => setMode('view')}
              className="card card-interactive p-6 hover:shadow-lg transition-all text-left group"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="p-3 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-200 transition-colors">
                  <ImageIcon weight="fill" className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900">Ver Imagen</h3>
                  <p className="text-xs text-zinc-500 mt-1">Revisa la imagen anotada</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => {
                setMode('quiz')
                handleQuizReset()
              }}
              className="card card-interactive p-6 hover:shadow-lg transition-all text-left group"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="p-3 rounded-lg bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 group-hover:bg-amber-200 dark:bg-amber-500/25 transition-colors">
                  <Lightning weight="fill" className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900">Quiz Rápido</h3>
                  <p className="text-xs text-zinc-500 mt-1">Prueba tus conocimientos</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setMode('recall')}
              className="card card-interactive p-6 hover:shadow-lg transition-all text-left group"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="p-3 rounded-lg bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 group-hover:bg-green-200 dark:bg-green-500/25 transition-colors">
                  <BookOpen weight="fill" className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900">Recall Libre</h3>
                  <p className="text-xs text-zinc-500 mt-1">Escribe lo que recuerdas</p>
                </div>
              </div>
            </button>
          </div>
        ) : (
          <div className="mb-8">
            {mode === 'view' && (
              <ViewMode
                topic={topic}
                onReview={handleMarkReviewed}
                onBack={() => setMode(null)}
                onOpenImage={() => setLightboxOpen(true)}
              />
            )}
            {mode === 'quiz' && (
              <QuizMode
                topic={topic}
                state={quizState}
                onAnswer={handleQuizAnswer}
                onNext={handleQuizNext}
                onReset={() => {
                  handleQuizReset()
                  setMode(null)
                }}
              />
            )}
            {mode === 'recall' && (
              <RecallMode
                topic={topic}
                onSubmit={handleRecallSubmit}
                onBack={() => setMode(null)}
                imageRevealed={imageRevealed}
                setImageRevealed={setImageRevealed}
                onOpenImage={() => setLightboxOpen(true)}
              />
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-3 mt-12">
          {prevTopic && (
            <Link
              to={`/atlas/${prevTopic.id}`}
              className="btn-ghost px-4 py-2 flex items-center gap-2 text-sm font-medium"
            >
              ← {prevTopic.title}
            </Link>
          )}
          {nextTopic && (
            <Link
              to={`/atlas/${nextTopic.id}`}
              className="btn-ghost px-4 py-2 flex items-center gap-2 text-sm font-medium ml-auto"
            >
              {nextTopic.title} →
            </Link>
          )}
        </div>

        {/* PAI Links */}
        {topic.relatedPai && topic.relatedPai.length > 0 && (
          <div className="mt-8 pt-8 border-t border-zinc-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">📚</span>
              <h3 className="font-bold text-zinc-900">Estudiar en PAI</h3>
            </div>
            <p className="text-sm text-zinc-500 mb-4">
              Este tema tiene contenido completo con notas, tablas y mnemotecnia en el PAI.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {topic.relatedPai.map((link) => (
                <Link
                  key={`${link.modulo}-${link.temaId}`}
                  to={`/estudio/archivo/${link.modulo}/${link.temaId}`}
                  className="card card-interactive p-4 hover:shadow-md transition-all flex items-center gap-3 border-l-4 border-l-blue-500"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-base">🎓</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-zinc-900 text-sm truncate">{link.label}</p>
                    <p className="text-xs text-zinc-500 capitalize">PAI · {link.modulo.replace(/-/g, ' ')}</p>
                  </div>
                  <ArrowLeft weight="bold" className="w-4 h-4 text-zinc-400 rotate-180 flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Atlas Topics */}
        {relatedTopics.length > 0 && (
          <div className="mt-6 pt-6 border-t border-zinc-200">
            <h3 className="font-bold text-zinc-900 mb-4">Temas Relacionados</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {relatedTopics.map((t) => (
                <Link
                  key={t.id}
                  to={`/topic/${t.id}`}
                  className="card card-interactive p-4 hover:shadow-md transition-all flex items-center gap-3"
                >
                  <span className="text-2xl">{t.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-zinc-900 truncate">{t.title}</p>
                    <p className="text-xs text-zinc-500">{t.subtitle}</p>
                  </div>
                  <ArrowLeft weight="bold" className="w-4 h-4 text-zinc-400 rotate-180" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {toast && (
          <div
            className={`fixed bottom-6 right-6 rounded-lg px-4 py-3 font-medium text-sm shadow-lg flex items-center gap-2 ${
              toast.type === 'success'
                ? 'bg-green-500 text-white'
                : 'bg-blue-500 text-white'
            }`}
          >
            <CheckCircle weight="fill" className="w-4 h-4" />
            {toast.message}
          </div>
        )}
      </div>

      {lightboxOpen && (
        <ImageLightbox
          src={topic.imagePath}
          title={topic.title}
          filename={`${topic.id}.pdf`}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  )
}

function ViewMode({
  topic,
  onReview,
  onBack,
  onOpenImage,
}: {
  topic: (typeof atlasTopics)[0]
  onReview: () => void
  onBack: () => void
  onOpenImage: () => void
}) {
  return (
    <div className="space-y-4">
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-zinc-900">Imagen del Tema</h3>
          <button
            onClick={onBack}
            className="text-zinc-400 hover:text-zinc-600 transition-colors"
          >
            <X weight="bold" className="w-5 h-5" />
          </button>
        </div>

        {/* Imagen completa, sin recorte. Click → visor a pantalla completa. */}
        <button
          type="button"
          onClick={onOpenImage}
          className="relative block w-full max-w-2xl mx-auto rounded-lg overflow-hidden border border-zinc-200 bg-zinc-50 mb-3 cursor-zoom-in group min-h-[8rem]"
        >
          <span className="absolute inset-0 flex items-center justify-center text-6xl text-zinc-300">
            {topic.emoji}
          </span>
          <img
            src={topic.imagePath}
            alt={`Infografía: ${topic.title}`}
            className="relative w-full h-auto block"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          <span className="absolute top-2 right-2 inline-flex items-center gap-1 bg-black/55 text-white text-xs font-medium px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowsOut weight="bold" className="w-3.5 h-3.5" />
            Ampliar
          </span>
        </button>

        <p className="text-xs text-zinc-400 text-center mb-5">
          Toca la imagen para verla a tamaño completo
        </p>

        <div className="grid sm:grid-cols-3 gap-3">
          <button
            onClick={onOpenImage}
            className="btn-ghost w-full flex items-center justify-center gap-2"
          >
            <ArrowsOut weight="bold" className="w-4 h-4" />
            Pantalla completa
          </button>
          <DownloadPdfButton
            src={topic.imagePath}
            filename={`${topic.id}.pdf`}
            className="btn-ghost w-full flex items-center justify-center gap-2 disabled:opacity-60"
          />
          <button
            onClick={onReview}
            className="btn-primary w-full bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2"
          >
            <CheckCircle weight="fill" className="w-4 h-4" />
            Marcar revisado
          </button>
        </div>
      </div>
    </div>
  )
}

function QuizMode({
  topic,
  state,
  onAnswer,
  onNext,
  onReset,
}: {
  topic: (typeof atlasTopics)[0]
  state: {
    index: number
    score: number
    answered: boolean
    selectedIndex: number
    completed: boolean
  }
  onAnswer: (index: number) => void
  onNext: () => void
  onReset: () => void
}) {
  if (state.completed) {
    const percentage = Math.round((state.score / topic.questions.length) * 100)
    const masteryLevel =
      percentage >= 80 ? 'Dominado ✓' : percentage >= 50 ? 'En Progreso' : 'Necesita Repaso'

    return (
      <div className="card p-8 text-center max-w-md mx-auto">
        <div className="text-6xl mb-4">
          {percentage >= 80 ? '🎉' : percentage >= 50 ? '👍' : '📚'}
        </div>
        <h3 className="text-2xl font-bold text-zinc-900 mb-2">Quiz Completado</h3>
        <p className="text-4xl font-bold text-blue-600 mb-4">
          {state.score}/{topic.questions.length}
        </p>
        <p className="text-lg font-semibold text-zinc-600 mb-6">{masteryLevel}</p>
        <button onClick={onNext} className="btn-primary w-full mb-3">
          Repetir Quiz
        </button>
        <button onClick={onReset} className="btn-ghost w-full">
          Volver
        </button>
      </div>
    )
  }

  const question = topic.questions[state.index]
  const isAnswered = state.answered
  const isCorrect =
    isAnswered && state.selectedIndex === question.correctIndex

  return (
    <div className="card p-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-zinc-500">
            Pregunta {state.index + 1} de {topic.questions.length}
          </span>
          <span className="text-sm font-medium text-blue-600">
            {state.score} puntos
          </span>
        </div>
        <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all"
            style={{
              width: `${((state.index + (isAnswered ? 1 : 0)) / topic.questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <h3 className="text-lg font-bold text-zinc-900 mb-6">{question.question}</h3>

      <div className="space-y-3 mb-6">
        {question.options.map((option, i) => {
          const isSelected = i === state.selectedIndex
          const isCorrectOption = i === question.correctIndex

          let bgClass = 'bg-surface hover:bg-zinc-50 border-zinc-200'
          if (isAnswered) {
            if (isCorrectOption) {
              bgClass = 'bg-green-100 dark:bg-green-500/20 border-green-500'
            } else if (isSelected) {
              bgClass = 'bg-red-100 border-red-500'
            }
          } else if (isSelected) {
            bgClass = 'bg-blue-100 border-blue-500'
          }

          return (
            <button
              key={i}
              onClick={() => onAnswer(i)}
              disabled={isAnswered}
              className={`w-full p-4 text-left border-2 rounded-lg font-medium transition-all ${bgClass} ${
                isAnswered ? 'cursor-default' : 'cursor-pointer'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    isCorrectOption && isAnswered
                      ? 'border-green-500 bg-green-500'
                      : isSelected && isAnswered
                        ? 'border-red-500 bg-red-500'
                        : 'border-zinc-300'
                  }`}
                >
                  {isCorrectOption && isAnswered && (
                    <CheckCircle weight="fill" className="w-3 h-3 text-white" />
                  )}
                  {isSelected && isAnswered && !isCorrectOption && (
                    <X weight="bold" className="w-3 h-3 text-white" />
                  )}
                </div>
                <span>{option}</span>
              </div>
            </button>
          )
        })}
      </div>

      {isAnswered && (
        <div
          className={`p-4 rounded-lg mb-6 ${
            isCorrect ? 'bg-green-100 dark:bg-green-500/20 text-green-900' : 'bg-red-100 text-red-900'
          }`}
        >
          <p className="font-semibold mb-2">{isCorrect ? '✓ Correcto' : '✗ Incorrecto'}</p>
          <p className="text-sm">{question.explanation}</p>
        </div>
      )}

      {isAnswered && (
        <button onClick={onNext} className="btn-primary w-full">
          {state.index < topic.questions.length - 1 ? 'Siguiente' : 'Ver Resultado'}
        </button>
      )}
    </div>
  )
}

function RecallMode({
  topic,
  onSubmit,
  onBack,
  imageRevealed,
  setImageRevealed,
  onOpenImage,
}: {
  topic: (typeof atlasTopics)[0]
  onSubmit: () => void
  onBack: () => void
  imageRevealed: boolean
  setImageRevealed: (v: boolean) => void
  onOpenImage: () => void
}) {
  return (
    <div className="space-y-4">
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-zinc-900">Recall Libre</h3>
          <button
            onClick={onBack}
            className="text-zinc-400 hover:text-zinc-600 transition-colors"
          >
            <X weight="bold" className="w-5 h-5" />
          </button>
        </div>

        <textarea
          placeholder="Escribe todo lo que recuerdas sobre este tema... No hay respuesta correcta o incorrecta, solo practica."
          className="w-full h-32 p-4 border border-zinc-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />

        <button
          onClick={onSubmit}
          className="btn-primary w-full bg-green-600 hover:bg-green-700 mb-3"
        >
          Completar Recall
        </button>

        {!imageRevealed && (
          <button
            onClick={() => setImageRevealed(true)}
            className="btn-ghost w-full"
          >
            Revelar Imagen
          </button>
        )}

        {imageRevealed && (
          <button
            type="button"
            onClick={onOpenImage}
            className="relative mt-4 block w-full max-w-2xl mx-auto rounded-lg overflow-hidden border border-zinc-200 bg-zinc-50 cursor-zoom-in group min-h-[8rem]"
          >
            <span className="absolute inset-0 flex items-center justify-center text-6xl text-zinc-300">
              {topic.emoji}
            </span>
            <img
              src={topic.imagePath}
              alt={`Infografía: ${topic.title}`}
              className="relative w-full h-auto block"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <span className="absolute top-2 right-2 inline-flex items-center gap-1 bg-black/55 text-white text-xs font-medium px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowsOut weight="bold" className="w-3.5 h-3.5" />
              Ampliar
            </span>
          </button>
        )}
      </div>
    </div>
  )
}
