/* Terminología Médica · MedLex — Ruta /terminologia */

import { useState, useMemo, useCallback } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MagnifyingGlass, Cube, X, CheckCircle, XCircle,
  ArrowRight, Trophy, ArrowCounterClockwise,
} from '@phosphor-icons/react'
import {
  medlexTerms, SISTEMA_LABELS, SISTEMA_COLORS, MEDLEX_STATS,
  type MedLexTerm,
} from '../data/medlex-terms'

// ──────────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildQuizQuestion(terms: MedLexTerm[], term: MedLexTerm) {
  const distractors = shuffle(terms.filter(t => t.id !== term.id)).slice(0, 3)
  const options = shuffle([term.significado, ...distractors.map(d => d.significado)])
  return { term, options, correctIndex: options.indexOf(term.significado) }
}

type QuizState = 'idle' | 'playing' | 'done'

interface QuizQuestion {
  term: MedLexTerm
  options: string[]
  correctIndex: number
}

const TIPO_LABELS: Record<string, string> = {
  prefijo: 'Prefijo', sufijo: 'Sufijo', raiz: 'Raíz',
}

const TIPO_COLORS: Record<string, string> = {
  prefijo: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  sufijo:  'bg-rose-100 text-rose-800 border-rose-200',
  raiz:    'bg-amber-100 text-amber-800 border-amber-200',
}

const ORIGEN_COLORS: Record<string, string> = {
  griego: 'bg-blue-50 text-blue-700 border-blue-200',
  latino: 'bg-green-50 text-green-700 border-green-200',
}

// ──────────────────────────────────────────────────────────────
// TermCard — tarjeta individual de término
// ──────────────────────────────────────────────────────────────
function TermCard({ term }: { term: MedLexTerm }) {
  const sc = SISTEMA_COLORS[term.sistema] ?? SISTEMA_COLORS.general
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className="card p-4 hover:shadow-card-hover transition-shadow duration-200"
    >
      {/* Header: término + tipo + origen */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="font-bold text-zinc-900 text-lg font-mono tracking-tight leading-none">
          {term.termino}
        </span>
        <div className="flex gap-1.5 flex-shrink-0">
          <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md border ${TIPO_COLORS[term.tipo]}`}>
            {TIPO_LABELS[term.tipo]}
          </span>
          <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md border ${ORIGEN_COLORS[term.origen]}`}>
            {term.origen === 'griego' ? 'GR' : 'LA'}
          </span>
        </div>
      </div>

      {/* Significado */}
      <p className="text-sm font-semibold text-zinc-800 mb-3 leading-snug">
        {term.significado}
      </p>

      {/* Ejemplos */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {term.ejemplos.slice(0, 4).map((ej, i) => (
          <span key={i} className="text-[11px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-full font-medium">
            {ej}
          </span>
        ))}
      </div>

      {/* Sistema tag */}
      <div className="flex items-center justify-between">
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${sc.bg} ${sc.text} ${sc.border}`}>
          {SISTEMA_LABELS[term.sistema] ?? term.sistema}
        </span>
        <Link
          to={`/anatomia-3d?sistema=${term.sistema}`}
          className="text-[10px] text-zinc-400 hover:text-teal-600 flex items-center gap-1 transition-colors"
        >
          <Cube weight="fill" className="w-3 h-3" />
          Ver en 3D
        </Link>
      </div>
    </motion.div>
  )
}

// ──────────────────────────────────────────────────────────────
// Quiz — motor de 10 preguntas
// ──────────────────────────────────────────────────────────────
function QuizEngine({ terms, onClose }: { terms: MedLexTerm[]; onClose: () => void }) {
  const source = terms.length >= 10 ? terms : medlexTerms
  const [questions] = useState<QuizQuestion[]>(() =>
    shuffle(source).slice(0, 10).map(t => buildQuizQuestion(source, t))
  )
  const [current, setCurrent]   = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answers, setAnswers]   = useState<boolean[]>([])
  const [state, setState]       = useState<QuizState>('playing')

  const q = questions[current]
  const score = answers.filter(Boolean).length

  const handleAnswer = useCallback((idx: number) => {
    if (selected !== null) return
    setSelected(idx)
    const correct = idx === q.correctIndex
    const newAnswers = [...answers, correct]
    setAnswers(newAnswers)

    setTimeout(() => {
      if (current + 1 >= questions.length) {
        setState('done')
      } else {
        setCurrent(c => c + 1)
        setSelected(null)
      }
    }, 1200)
  }, [selected, q, answers, current, questions.length])

  if (state === 'done') {
    const pct = Math.round((score / questions.length) * 100)
    const label = pct >= 80 ? '¡Excelente!' : pct >= 60 ? '¡Buen trabajo!' : 'Sigue practicando'
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-10 px-6 text-center">
        <div className="w-20 h-20 rounded-full bg-teal-50 border-4 border-teal-200 flex items-center justify-center">
          <Trophy weight="fill" className="w-9 h-9 text-teal-600" />
        </div>
        <div>
          <p className="text-3xl font-extrabold text-zinc-900">{score}/{questions.length}</p>
          <p className="text-sm text-zinc-500 mt-1">{label} · {pct}%</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="btn-primary bg-zinc-100 hover:bg-zinc-200 text-zinc-700 px-5 py-2.5"
          >
            Cerrar quiz
          </button>
          <button
            onClick={() => window.location.reload()}
            className="btn-primary bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5"
          >
            <ArrowCounterClockwise weight="bold" className="w-4 h-4" />
            Intentar de nuevo
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      {/* Progreso */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-zinc-500">
          Pregunta {current + 1} de {questions.length}
        </span>
        <span className="text-xs font-semibold text-teal-600">
          {score} correctas
        </span>
      </div>
      <div className="h-1.5 bg-zinc-200 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-teal-500 rounded-full transition-all duration-500"
          style={{ width: `${((current) / questions.length) * 100}%` }}
        />
      </div>

      {/* Pregunta */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-center mb-6">
            <div className="inline-block bg-zinc-900 rounded-2xl px-6 py-4 mb-4">
              <span className="font-mono font-bold text-2xl text-white tracking-tight">
                {q.term.termino}
              </span>
            </div>
            <p className="text-sm text-zinc-500 font-medium">¿Qué significa este término?</p>
          </div>

          {/* Opciones */}
          <div className="grid gap-2.5">
            {q.options.map((opt, i) => {
              let style = 'bg-white border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50 text-zinc-800'
              if (selected !== null) {
                if (i === q.correctIndex) style = 'bg-teal-50 border-teal-400 text-teal-800'
                else if (i === selected && i !== q.correctIndex) style = 'bg-red-50 border-red-400 text-red-800'
                else style = 'bg-white border-zinc-100 text-zinc-400'
              }
              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={selected !== null}
                  className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium
                              transition-all duration-150 flex items-center gap-3 ${style}`}
                >
                  {selected !== null && i === q.correctIndex && (
                    <CheckCircle weight="fill" className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  )}
                  {selected !== null && i === selected && i !== q.correctIndex && (
                    <XCircle weight="fill" className="w-4 h-4 text-red-500 flex-shrink-0" />
                  )}
                  {(selected === null || (i !== q.correctIndex && i !== selected)) && (
                    <span className="w-4 h-4 rounded-full border-2 border-current flex-shrink-0 opacity-50" />
                  )}
                  {opt}
                </button>
              )
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ──────────────────────────────────────────────────────────────
// Página principal Terminología
// ──────────────────────────────────────────────────────────────
export function Terminologia() {
  const [searchParams] = useSearchParams()
  const initialSistema = searchParams.get('sistema') ?? 'todos'

  const [query,        setQuery]        = useState('')
  const [filterTipo,   setFilterTipo]   = useState<string>('todos')
  const [filterOrigen, setFilterOrigen] = useState<string>('todos')
  const [filterSistema,setFilterSistema]= useState(initialSistema)
  const [showQuiz,     setShowQuiz]     = useState(false)

  // Filtrado reactivo
  const filtered = useMemo(() => {
    return medlexTerms.filter(t => {
      if (filterTipo   !== 'todos' && t.tipo    !== filterTipo)   return false
      if (filterOrigen !== 'todos' && t.origen  !== filterOrigen) return false
      if (filterSistema!== 'todos' && t.sistema !== filterSistema)return false
      if (query) {
        const q = query.toLowerCase()
        return t.termino.toLowerCase().includes(q)
          || t.significado.toLowerCase().includes(q)
          || t.ejemplos.some(e => e.toLowerCase().includes(q))
      }
      return true
    })
  }, [filterTipo, filterOrigen, filterSistema, query])

  // Lista de sistemas únicos
  const sistemas = useMemo(() => {
    const set = new Set(medlexTerms.map(t => t.sistema))
    return ['todos', ...Array.from(set).sort()]
  }, [])

  return (
    <main className="flex-1 pb-20 md:pb-0">

      {/* ── Encabezado ──────────────────────────────────────── */}
      <section className="bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200
                              text-indigo-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5
                              rounded-full mb-3">
                Terminología · MedLex
              </div>
              <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight leading-none mb-2">
                Términos Médicos
              </h1>
              <p className="text-zinc-500 text-sm max-w-[55ch]">
                Prefijos, sufijos y raíces greco-latinas del lenguaje médico. Fuente: ENP UNAM.
              </p>
              {/* Stats */}
              <div className="flex flex-wrap gap-4 mt-4">
                {[
                  { n: MEDLEX_STATS.total,    l: 'términos'  },
                  { n: MEDLEX_STATS.prefijos,  l: 'prefijos'  },
                  { n: MEDLEX_STATS.sufijos,   l: 'sufijos'   },
                  { n: MEDLEX_STATS.raices,    l: 'raíces'    },
                ].map(({ n, l }) => (
                  <div key={l} className="text-center">
                    <p className="text-xl font-extrabold text-zinc-900">{n}</p>
                    <p className="text-[11px] text-zinc-400 font-medium">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Botón quiz */}
            <button
              onClick={() => setShowQuiz(true)}
              className="btn-primary bg-zinc-900 hover:bg-zinc-700 text-white px-5 py-2.5 self-start md:self-end"
            >
              <Trophy weight="fill" className="w-4 h-4" />
              Iniciar Quiz (10 preguntas)
            </button>
          </div>
        </div>
      </section>

      {/* ── Filtros ──────────────────────────────────────────── */}
      <div className="bg-white border-b border-zinc-100 sticky top-14 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 space-y-2.5">
          {/* Barra de búsqueda */}
          <div className="relative max-w-md">
            <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Buscar término, significado o ejemplo..."
              className="w-full bg-zinc-100 pl-9 pr-9 py-2 rounded-xl text-sm outline-none
                         focus:ring-2 focus:ring-indigo-300 focus:bg-white transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700"
              >
                <X weight="bold" className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Chips de filtro */}
          <div className="flex flex-wrap gap-2">
            {/* Tipo */}
            {(['todos', 'prefijo', 'sufijo', 'raiz'] as const).map(t => (
              <button
                key={t}
                onClick={() => setFilterTipo(t)}
                className={`text-xs font-semibold px-3 py-1 rounded-full border transition-all duration-150
                  ${filterTipo === t ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400'}`}
              >
                {t === 'todos' ? 'Todos los tipos' : TIPO_LABELS[t]}
              </button>
            ))}

            <div className="w-px h-5 bg-zinc-200 self-center mx-0.5" />

            {/* Origen */}
            {(['todos', 'griego', 'latino'] as const).map(o => (
              <button
                key={o}
                onClick={() => setFilterOrigen(o)}
                className={`text-xs font-semibold px-3 py-1 rounded-full border transition-all duration-150
                  ${filterOrigen === o ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400'}`}
              >
                {o === 'todos' ? 'Griego + Latino' : o.charAt(0).toUpperCase() + o.slice(1)}
              </button>
            ))}

            <div className="w-px h-5 bg-zinc-200 self-center mx-0.5" />

            {/* Sistema */}
            <select
              value={filterSistema}
              onChange={e => setFilterSistema(e.target.value)}
              className="text-xs font-semibold px-3 py-1 rounded-full border border-zinc-200 bg-white
                         text-zinc-600 outline-none focus:border-zinc-400 cursor-pointer"
            >
              {sistemas.map(s => (
                <option key={s} value={s}>
                  {s === 'todos' ? 'Todos los sistemas' : SISTEMA_LABELS[s] ?? s}
                </option>
              ))}
            </select>
          </div>

          {/* Resultado count */}
          <p className="text-xs text-zinc-400 font-medium">
            Mostrando <span className="text-zinc-700 font-bold">{filtered.length}</span> de {MEDLEX_STATS.total} términos
          </p>
        </div>
      </div>

      {/* ── Grid de términos ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
            <p className="text-4xl">🔍</p>
            <p className="font-semibold text-zinc-700">Sin resultados</p>
            <p className="text-sm text-zinc-400">Prueba con otros filtros o una búsqueda diferente.</p>
            <button
              onClick={() => { setQuery(''); setFilterTipo('todos'); setFilterOrigen('todos'); setFilterSistema('todos') }}
              className="btn-primary bg-zinc-100 hover:bg-zinc-200 text-zinc-700 px-4 py-2 mt-2"
            >
              <ArrowCounterClockwise weight="bold" className="w-4 h-4" />
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map(term => (
                <TermCard key={term.id} term={term} />
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* ── Enlace al módulo MedLex activo ───────────────────── */}
      {filterSistema !== 'todos' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
          <div className="card p-4 flex items-center gap-4 bg-indigo-50 border-indigo-200">
            <div className="flex-1">
              <p className="text-sm font-bold text-indigo-800">
                Estudiando sistema: {SISTEMA_LABELS[filterSistema] ?? filterSistema}
              </p>
              <p className="text-xs text-indigo-600 mt-0.5">
                Explora la anatomía de este sistema en el visor 3D interactivo.
              </p>
            </div>
            <Link
              to={`/anatomia-3d?sistema=${filterSistema}`}
              className="btn-primary bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 flex-shrink-0"
            >
              <Cube weight="fill" className="w-4 h-4" />
              Ver en 3D
              <ArrowRight weight="bold" className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}

      {/* ── Atribución ──────────────────────────────────────── */}
      <footer className="border-t border-zinc-100 bg-zinc-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs text-zinc-400 leading-relaxed">
            Contenido terminológico basado en{' '}
            <span className="font-semibold text-zinc-600">MedLex</span>
            {' '}· ENP UNAM · Paula Abramo Tostado, 2015.
            Adaptado e integrado en MedCore para uso educativo.
          </p>
        </div>
      </footer>

      {/* ── Modal de quiz ────────────────────────────────────── */}
      <AnimatePresence>
        {showQuiz && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
              onClick={() => setShowQuiz(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 400, damping: 35 }}
              className="fixed inset-x-4 top-16 bottom-4 md:inset-auto md:left-1/2 md:-translate-x-1/2
                         md:top-12 md:w-full md:max-w-lg md:max-h-[85dvh]
                         bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden"
            >
              {/* Header del modal */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-100 flex-shrink-0">
                <div>
                  <p className="font-bold text-zinc-900 text-sm">Quiz de Terminología</p>
                  <p className="text-xs text-zinc-400">
                    10 preguntas · {filtered.length >= 10 ? 'del filtro actual' : 'términos generales'}
                  </p>
                </div>
                <button
                  onClick={() => setShowQuiz(false)}
                  className="w-8 h-8 rounded-xl bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition-colors"
                >
                  <X weight="bold" className="w-4 h-4 text-zinc-500" />
                </button>
              </div>
              {/* Quiz content */}
              <div className="overflow-y-auto flex-1">
                <QuizEngine terms={filtered} onClose={() => setShowQuiz(false)} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  )
}
