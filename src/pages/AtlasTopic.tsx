/* AtlasTopic — Ruta /atlas/:id
 *
 * El póster es el protagonista: se muestra grande desde que se entra (sin
 * menú de modos previo). Debajo, «Practica con este póster» ofrece el quiz
 * rápido y el ejercicio de recordar sin mirar; mientras se recuerda, el
 * póster queda cubierto hasta revelarlo. Diseño «Monitor suave» (DESIGN.md). */

import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Lightning,
  PencilSimpleLine,
  CheckCircle,
  ArrowsOut,
  EyeSlash,
  X,
} from '@phosphor-icons/react'
import { atlasTopics, type AtlasTopic as AtlasTopicData } from '../data/atlas-topics'
import { useAtlasStore } from '../store/atlasStore'
import { ImageLightbox, DownloadPdfButton } from '../components/ImageLightbox'
import { ATLAS_CATEGORY_LABELS, MASTERY_LABELS, atlasThumb } from './atlasShared'

type Practice = 'quiz' | 'recall' | null

const initialQuiz = { index: 0, score: 0, answered: false, selectedIndex: -1, completed: false }
type QuizState = typeof initialQuiz

export function AtlasTopic() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const topic = atlasTopics.find((t) => t.id === id)

  const recordReview = useAtlasStore((s) => s.recordReview)
  const recordQuizAttempt = useAtlasStore((s) => s.recordQuizAttempt)
  const getMastery = useAtlasStore((s) => s.getMastery)

  const [practice, setPractice] = useState<Practice>(null)
  const [posterHidden, setPosterHidden] = useState(false)
  const [quizState, setQuizState] = useState<QuizState>(initialQuiz)
  const [toast, setToast] = useState<string | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  useEffect(() => {
    if (!topic) navigate('/atlas')
  }, [topic, navigate])

  // Al cambiar de póster (anterior/siguiente) se reinicia la práctica.
  useEffect(() => {
    setPractice(null)
    setPosterHidden(false)
    setQuizState(initialQuiz)
    window.scrollTo({ top: 0 })
  }, [id])

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(null), 3000)
    return () => clearTimeout(timer)
  }, [toast])

  if (!topic) return null

  const mastery = getMastery(topic.id)
  const idx = atlasTopics.findIndex((t) => t.id === topic.id)
  const prevTopic = idx > 0 ? atlasTopics[idx - 1] : null
  const nextTopic = idx < atlasTopics.length - 1 ? atlasTopics[idx + 1] : null
  const relatedTopics = atlasTopics.filter((t) => t.id !== topic.id && topic.relatedTopicIds?.includes(t.id))

  const handleMarkReviewed = () => {
    recordReview(topic.id)
    setToast('Póster marcado como revisado')
  }

  const startPractice = (p: Exclude<Practice, null>) => {
    setPractice(p)
    setQuizState(initialQuiz)
    setPosterHidden(p === 'recall')
  }

  const closePractice = () => {
    setPractice(null)
    setPosterHidden(false)
  }

  const handleQuizAnswer = (index: number) => {
    if (quizState.answered) return
    const isCorrect = index === topic.questions[quizState.index].correctIndex
    setQuizState((s) => ({ ...s, selectedIndex: index, answered: true, score: isCorrect ? s.score + 1 : s.score }))
  }

  const handleQuizNext = () => {
    if (quizState.index < topic.questions.length - 1) {
      setQuizState((s) => ({ ...s, index: s.index + 1, answered: false, selectedIndex: -1 }))
    } else {
      recordQuizAttempt(topic.id, quizState.score, topic.questions.length)
      setQuizState((s) => ({ ...s, completed: true }))
    }
  }

  const handleRecallDone = () => {
    recordReview(topic.id)
    setPosterHidden(false)
    setToast('Listo: compara lo que escribiste con el póster')
  }

  return (
    <main className="flex-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-12 flex flex-col gap-6">

        {/* ── Encabezado ─────────────────────────────────── */}
        <header className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-3" aria-label="Ruta">
              <Link to="/atlas" className="inline-flex items-center gap-1.5 hover:text-zinc-900 transition-colors">
                <ArrowLeft weight="regular" className="w-4 h-4" />
                Atlas
              </Link>
              <span className="text-zinc-300" aria-hidden="true">/</span>
              <Link to={`/atlas?materia=${topic.category}`} className="hover:text-zinc-900 transition-colors">
                {ATLAS_CATEGORY_LABELS[topic.category]}
              </Link>
            </nav>
            <h1 className="font-display font-light text-[2rem] sm:text-[2.6rem] leading-[1.08] tracking-[-0.025em] text-zinc-900 text-balance">
              {topic.title}
            </h1>
            <p className="mt-2 text-base text-zinc-600 max-w-[60ch]">{topic.subtitle}</p>
            <p className="mt-2 text-sm text-zinc-500 flex items-center gap-2 flex-wrap">
              <span>{topic.questions.length} preguntas</span>
              <span aria-hidden="true">·</span>
              <MasteryTag mastery={mastery} />
            </p>
          </div>
          <PosterActions topic={topic} onFullscreen={() => setLightboxOpen(true)} onReviewed={handleMarkReviewed} />
        </header>

        {/* ── Póster ─────────────────────────────────────── */}
        <section aria-label="Póster" className="card p-2 sm:p-3">
          <div className="relative max-w-4xl mx-auto">
            <button
              type="button"
              onClick={() => !posterHidden && setLightboxOpen(true)}
              className={`block w-full rounded-2xl overflow-hidden bg-white ${posterHidden ? 'cursor-default' : 'cursor-zoom-in'} group`}
              aria-label={posterHidden ? 'Póster oculto mientras recuerdas' : 'Ver póster a pantalla completa'}
              tabIndex={posterHidden ? -1 : 0}
            >
              <img
                src={topic.imagePath}
                alt={`Póster: ${topic.title}`}
                width={2048}
                height={3072}
                className={`block w-full h-auto transition-[filter] duration-200 ${posterHidden ? 'blur-2xl' : ''}`}
              />
              {!posterHidden && (
                <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 bg-black/60 text-white text-xs px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                  <ArrowsOut weight="regular" className="w-3.5 h-3.5" />
                  Ampliar
                </span>
              )}
            </button>
            {posterHidden && (
              <div className="absolute inset-0 flex items-start justify-center pt-24 sm:pt-40">
                <div className="card p-5 sm:p-6 max-w-xs text-center flex flex-col items-center gap-3 mx-4">
                  <EyeSlash weight="regular" className="w-6 h-6 text-primary" />
                  <p className="text-[0.9375rem] text-zinc-800">Póster oculto mientras recuerdas</p>
                  <button
                    onClick={() => setPosterHidden(false)}
                    className="text-sm text-primary hover:text-primary-hover"
                  >
                    Revelar póster
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── Practicar ──────────────────────────────────── */}
        <section className="card p-5 sm:p-7 flex flex-col gap-5" aria-labelledby="h-practica">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 id="h-practica" className="font-display text-xl font-normal text-zinc-900">Practica con este póster</h2>
            {practice && (
              <button onClick={closePractice} className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900">
                <X weight="regular" className="w-4 h-4" /> Cerrar práctica
              </button>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <PracticeChoice
              active={practice === 'quiz'}
              onClick={() => startPractice('quiz')}
              icon={<Lightning weight="regular" className="w-5 h-5" />}
              title="Quiz rápido"
              hint={`${topic.questions.length} preguntas de opción múltiple`}
            />
            <PracticeChoice
              active={practice === 'recall'}
              onClick={() => startPractice('recall')}
              icon={<PencilSimpleLine weight="regular" className="w-5 h-5" />}
              title="Recordar sin mirar"
              hint="Oculta el póster y escribe lo que recuerdas"
            />
          </div>

          {practice === 'quiz' && (
            <QuizPanel
              topic={topic}
              state={quizState}
              onAnswer={handleQuizAnswer}
              onNext={handleQuizNext}
              onRestart={() => setQuizState(initialQuiz)}
            />
          )}
          {practice === 'recall' && (
            <RecallPanel posterHidden={posterHidden} onReveal={() => setPosterHidden(false)} onDone={handleRecallDone} />
          )}
        </section>

        {/* ── Anterior / siguiente ───────────────────────── */}
        {(prevTopic || nextTopic) && (
          <nav className="grid grid-cols-2 gap-3" aria-label="Pósters vecinos">
            {prevTopic ? <NeighborLink topic={prevTopic} dir="prev" /> : <span />}
            {nextTopic ? <NeighborLink topic={nextTopic} dir="next" /> : <span />}
          </nav>
        )}

        {/* ── Relacionados ───────────────────────────────── */}
        {relatedTopics.length > 0 && (
          <section className="flex flex-col gap-3" aria-labelledby="h-rel">
            <h2 id="h-rel" className="font-display text-xl font-normal text-zinc-900 px-1">Pósters relacionados</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {relatedTopics.map((t) => (
                <Link key={t.id} to={`/atlas/${t.id}`} className="card card-interactive p-2 flex flex-col gap-2">
                  <img
                    src={atlasThumb(t.imagePath)}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width={480}
                    height={720}
                    className="w-full aspect-[4/3] object-cover object-top rounded-xl bg-white"
                  />
                  <span className="px-1.5 pb-1 text-[0.9375rem] text-zinc-900 leading-snug">{t.title}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── Estudiar en PAI ────────────────────────────── */}
        {topic.relatedPai && topic.relatedPai.length > 0 && (
          <section className="flex flex-col gap-3" aria-labelledby="h-pai">
            <h2 id="h-pai" className="font-display text-xl font-normal text-zinc-900 px-1">Estudiar a fondo</h2>
            <div className="card divide-y divide-zinc-200 overflow-hidden">
              {topic.relatedPai.map((link) => (
                <Link
                  key={`${link.modulo}-${link.temaId}`}
                  to={`/estudio/archivo/${link.modulo}/${link.temaId}`}
                  className="flex items-center gap-4 px-5 py-4 hover:bg-zinc-50 transition-colors"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-base text-zinc-900 truncate">{link.label}</span>
                    <span className="block text-sm text-zinc-500 capitalize">PAI · {link.modulo.replace(/-/g, ' ')}</span>
                  </span>
                  <ArrowRight weight="regular" className="w-4 h-4 text-zinc-500 flex-shrink-0" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {toast && (
        <div
          role="status"
          className="fixed left-1/2 -translate-x-1/2 z-50 card shadow-pop px-4 py-3 text-sm text-zinc-900 flex items-center gap-2"
          style={{ bottom: 'calc(5rem + env(safe-area-inset-bottom, 0px))' }}
        >
          <CheckCircle weight="fill" className="w-4 h-4 text-primary" />
          {toast}
        </div>
      )}

      {lightboxOpen && (
        <ImageLightbox
          src={topic.imagePath}
          title={topic.title}
          filename={`${topic.id}.pdf`}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </main>
  )
}

/* ── Piezas ──────────────────────────────────────────────── */

function PosterActions({
  topic, onFullscreen, onReviewed,
}: { topic: AtlasTopicData; onFullscreen: () => void; onReviewed: () => void }) {
  const ghost = 'inline-flex items-center justify-center gap-2 h-11 px-4 rounded-2xl border border-zinc-200 bg-surface text-[0.9375rem] text-zinc-800 hover:border-zinc-300 transition-colors disabled:opacity-60'
  return (
    <div className="grid grid-cols-3 gap-2 lg:flex lg:flex-shrink-0">
      <button onClick={onFullscreen} className={ghost}>
        <ArrowsOut weight="regular" className="w-4 h-4" />
        <span className="hidden sm:inline">Pantalla completa</span>
        <span className="sm:hidden">Ampliar</span>
      </button>
      <DownloadPdfButton src={topic.imagePath} filename={`${topic.id}.pdf`} label="PDF" className={ghost} />
      <button
        onClick={onReviewed}
        className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-2xl bg-primary text-primary-fg hover:bg-primary-hover text-[0.9375rem] transition-colors"
      >
        <CheckCircle weight="regular" className="w-4 h-4" />
        <span className="hidden sm:inline">Marcar revisado</span>
        <span className="sm:hidden">Revisado</span>
      </button>
    </div>
  )
}

function MasteryTag({ mastery }: { mastery: 0 | 1 | 2 | 3 }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${mastery === 3 ? 'text-primary' : ''}`}>
      {mastery === 3
        ? <CheckCircle weight="fill" className="w-4 h-4" />
        : <span className={`w-2 h-2 rounded-full ${mastery === 0 ? 'bg-zinc-300' : mastery === 1 ? 'bg-zinc-500' : 'bg-primary'}`} aria-hidden="true" />}
      {MASTERY_LABELS[mastery]}
    </span>
  )
}

function PracticeChoice({
  active, onClick, icon, title, hint,
}: { active: boolean; onClick: () => void; icon: React.ReactNode; title: string; hint: string }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`flex items-center gap-4 p-4 rounded-2xl border text-left transition-colors
        ${active ? 'bg-primary-tint border-primary' : 'bg-surface border-zinc-200 hover:border-zinc-300'}`}
    >
      <span className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0
        ${active ? 'bg-primary text-primary-fg' : 'bg-primary-tint text-primary'}`}>
        {icon}
      </span>
      <span className="min-w-0">
        <span className={`block text-base ${active ? 'text-primary-ink' : 'text-zinc-900'}`}>{title}</span>
        <span className="block text-sm text-zinc-500">{hint}</span>
      </span>
    </button>
  )
}

function QuizPanel({
  topic, state, onAnswer, onNext, onRestart,
}: {
  topic: AtlasTopicData
  state: QuizState
  onAnswer: (index: number) => void
  onNext: () => void
  onRestart: () => void
}) {
  const total = topic.questions.length

  if (state.completed) {
    const pct = Math.round((state.score / total) * 100)
    const verdict = pct >= 80 ? 'Dominado' : pct >= 50 ? 'En progreso' : 'Necesita repaso'
    return (
      <div className="rounded-2xl bg-zinc-100 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="flex-1">
          <p className="text-sm text-zinc-500">Resultado</p>
          <p className="font-display font-extralight text-[3.5rem] leading-none tracking-[-0.03em] text-zinc-900 tabular-nums mt-1">
            {state.score}<span className="text-2xl font-light text-zinc-500 ml-1">/{total}</span>
          </p>
          <p className="mt-2 text-base text-zinc-700">{verdict} · {pct} %</p>
        </div>
        <button onClick={onRestart} className="h-11 px-5 rounded-2xl bg-primary text-primary-fg hover:bg-primary-hover text-[0.9375rem]">
          Repetir quiz
        </button>
      </div>
    )
  }

  const question = topic.questions[state.index]
  const answered = state.answered
  const isCorrect = answered && state.selectedIndex === question.correctIndex

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-4">
        <span className="text-sm text-zinc-500 whitespace-nowrap">Pregunta {state.index + 1} de {total}</span>
        <span className="flex-1 h-1.5 rounded-full bg-zinc-100 overflow-hidden">
          <span className="block h-full bg-primary rounded-full transition-[width] duration-300"
                style={{ width: `${((state.index + (answered ? 1 : 0)) / total) * 100}%` }} />
        </span>
        <span className="text-sm text-zinc-500 tabular-nums">{state.score} ✓</span>
      </div>

      <h3 className="text-lg text-zinc-900 leading-snug">{question.question}</h3>

      <div className="flex flex-col gap-2.5">
        {question.options.map((option, i) => {
          const selected = i === state.selectedIndex
          const correct = i === question.correctIndex
          let cls = 'bg-surface border-zinc-200 hover:border-zinc-300'
          if (answered && correct) cls = 'bg-success-tint border-success'
          else if (answered && selected) cls = 'bg-error-tint border-error'
          return (
            <button
              key={i}
              onClick={() => onAnswer(i)}
              disabled={answered}
              className={`w-full flex items-center gap-3 px-4 py-3.5 text-left border rounded-2xl text-[0.9375rem] text-zinc-900 transition-colors ${cls} ${answered ? 'cursor-default' : ''}`}
            >
              <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-600 text-xs flex items-center justify-center flex-shrink-0">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{option}</span>
              {answered && correct && <CheckCircle weight="fill" className="w-5 h-5 text-success flex-shrink-0" />}
              {answered && selected && !correct && <X weight="bold" className="w-4 h-4 text-error flex-shrink-0" />}
            </button>
          )
        })}
      </div>

      {answered && (
        <div className={`rounded-2xl px-5 py-4 ${isCorrect ? 'bg-success-tint' : 'bg-error-tint'}`}>
          <p className={`text-sm mb-1 ${isCorrect ? 'text-success-ink' : 'text-error-ink'}`}>{isCorrect ? 'Correcto' : 'Incorrecto'}</p>
          <p className="text-[0.9375rem] text-zinc-800 leading-relaxed">{question.explanation}</p>
        </div>
      )}

      {answered && (
        <button onClick={onNext} className="self-end h-11 px-5 rounded-2xl bg-primary text-primary-fg hover:bg-primary-hover text-[0.9375rem]">
          {state.index < total - 1 ? 'Siguiente' : 'Ver resultado'}
        </button>
      )}
    </div>
  )
}

function RecallPanel({
  posterHidden, onReveal, onDone,
}: { posterHidden: boolean; onReveal: () => void; onDone: () => void }) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="recall-text" className="text-[0.9375rem] text-zinc-600">
        Escribe todo lo que recuerdas del póster: estructuras, colores, relaciones. Después compáralo.
      </label>
      <textarea
        id="recall-text"
        rows={6}
        placeholder="Lo que recuerdo…"
        className="w-full p-4 rounded-2xl border border-zinc-200 bg-surface text-base text-zinc-900 placeholder-zinc-500 resize-y focus:outline-none focus:border-primary"
      />
      <div className="flex flex-wrap gap-2 justify-end">
        {posterHidden && (
          <button onClick={onReveal} className="h-11 px-4 rounded-2xl border border-zinc-200 bg-surface text-[0.9375rem] text-zinc-800 hover:border-zinc-300">
            Revelar póster
          </button>
        )}
        <button onClick={onDone} className="h-11 px-5 rounded-2xl bg-primary text-primary-fg hover:bg-primary-hover text-[0.9375rem]">
          Terminé: comparar
        </button>
      </div>
    </div>
  )
}

function NeighborLink({ topic, dir }: { topic: AtlasTopicData; dir: 'prev' | 'next' }) {
  return (
    <Link
      to={`/atlas/${topic.id}`}
      className={`card card-interactive p-3 flex items-center gap-3 min-w-0 ${dir === 'next' ? 'flex-row-reverse text-right' : ''}`}
    >
      <img
        src={atlasThumb(topic.imagePath)}
        alt=""
        loading="lazy"
        decoding="async"
        width={480}
        height={720}
        className="w-14 h-14 rounded-xl object-cover object-top bg-white flex-shrink-0 hidden sm:block"
      />
      <span className="min-w-0 flex-1">
        <span className={`flex items-center gap-1 text-xs text-zinc-500 ${dir === 'next' ? 'justify-end' : ''}`}>
          {dir === 'prev' ? <><ArrowLeft className="w-3.5 h-3.5" /> Anterior</> : <>Siguiente <ArrowRight className="w-3.5 h-3.5" /></>}
        </span>
        <span className="block text-[0.9375rem] text-zinc-900 truncate">{topic.title}</span>
      </span>
    </Link>
  )
}
