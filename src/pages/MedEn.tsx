/* Vocabulario Médico · MedEN — Ruta /vocabulario
 *
 * Hermana de MedLex (/terminologia): mientras aquella cubre morfemas
 * grecolatinos, esta cubre el vocabulario inglés↔español de Inglés Médico.
 * El término y los ejemplos van en inglés; las etiquetas y glosas, en español.
 * Soporta ?categoria=, ?pos= y ?semana= como parámetros de búsqueda. */

import { useState, useMemo, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MagnifyingGlass, X, CheckCircle, XCircle,
  Trophy, ArrowCounterClockwise, CaretDown, Translate, DownloadSimple,
} from '@phosphor-icons/react'
import {
  medenTerms, POS_LABELS, CATEGORIA_LABELS, MEDEN_STATS,
  type MedEnTerm, type MedEnPos,
} from '../data/meden-terms'
import { abreviaturas } from '../data/abbreviations'

// Abreviaturas ordenadas alfabéticamente por sigla (una sola vez).
const abreviaturasSorted = [...abreviaturas].sort((a, b) =>
  a.abbr.localeCompare(b.abbr, 'en', { sensitivity: 'base' }))

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

const POS_COLORS: Record<string, string> = {
  noun: 'bg-sky-100 text-sky-800 border-sky-200',
  verb: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  adjective: 'bg-amber-100 text-amber-800 border-amber-200',
  adverb: 'bg-orange-100 text-orange-800 border-orange-200',
  pronoun: 'bg-violet-100 text-violet-800 border-violet-200',
  preposition: 'bg-teal-100 text-teal-800 border-teal-200',
  conjunction: 'bg-lime-100 text-lime-800 border-lime-200',
  interjection: 'bg-rose-100 text-rose-800 border-rose-200',
  article: 'bg-zinc-100 text-zinc-700 border-zinc-200',
  'phrasal-verb': 'bg-indigo-100 text-indigo-800 border-indigo-200',
  abbreviation: 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200',
  'word-part': 'bg-cyan-100 text-cyan-800 border-cyan-200',
}

interface QuizQuestion {
  term: MedEnTerm
  options: string[]
  correctIndex: number
}

function buildQuizQuestion(terms: MedEnTerm[], term: MedEnTerm): QuizQuestion {
  const distractors = shuffle(terms.filter(t => t.id !== term.id && t.es !== term.es)).slice(0, 3)
  const options = shuffle([term.es, ...distractors.map(d => d.es)])
  return { term, options, correctIndex: options.indexOf(term.es) }
}

// ──────────────────────────────────────────────────────────────
// TermCard — tarjeta expandible
// ──────────────────────────────────────────────────────────────
function TermCard({ term, expanded, onToggle }: { term: MedEnTerm; expanded: boolean; onToggle: () => void }) {
  const posColor = POS_COLORS[term.pos] ?? POS_COLORS.article
  const hasDetail = Boolean(term.forms?.length || term.example || term.nota)
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.2 }}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      onClick={onToggle}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggle() } }}
      className="card p-4 hover:shadow-card-hover transition-shadow duration-200 cursor-pointer"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="font-bold text-zinc-900 text-lg leading-tight">{term.term}</span>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className={`text-[0.5625rem] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md border ${posColor}`}>
            {POS_LABELS[term.pos]}
          </span>
          {hasDetail && (
            <CaretDown
              weight="bold"
              className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
            />
          )}
        </div>
      </div>

      <p className="text-sm font-semibold text-zinc-800 leading-snug">{term.es}</p>

      <AnimatePresence initial={false}>
        {expanded && hasDetail && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pt-3 mt-3 border-t border-zinc-100 space-y-2.5">
              {term.forms?.map((f, i) => (
                <div key={i} className="flex items-baseline gap-2 text-xs">
                  <span className={`text-[0.5rem] font-bold uppercase tracking-wider px-1 py-0.5 rounded border ${POS_COLORS[f.pos] ?? POS_COLORS.article}`}>
                    {POS_LABELS[f.pos]}
                  </span>
                  <span className="font-semibold text-zinc-800">{f.word}</span>
                  {f.es && <span className="text-zinc-400">— {f.es}</span>}
                </div>
              ))}
              {term.example && (
                <p className="text-xs italic text-zinc-500 leading-relaxed">“{term.example}”</p>
              )}
              {term.nota && (
                <p className="text-[0.6875rem] text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-2.5 py-1.5 leading-relaxed">
                  {term.nota}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ──────────────────────────────────────────────────────────────
// Quiz — motor de 10 preguntas
// ──────────────────────────────────────────────────────────────
function QuizEngine({ terms, onClose }: { terms: MedEnTerm[]; onClose: () => void }) {
  const source = terms.length >= 10 ? terms : medenTerms
  const [questions] = useState<QuizQuestion[]>(() =>
    shuffle(source).slice(0, 10).map(t => buildQuizQuestion(source, t))
  )
  const [current, setCurrent]   = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answers, setAnswers]   = useState<boolean[]>([])
  const [done, setDone]         = useState(false)

  const q = questions[current]
  const score = answers.filter(Boolean).length

  const handleAnswer = useCallback((idx: number) => {
    if (selected !== null) return
    setSelected(idx)
    setAnswers(prev => [...prev, idx === q.correctIndex])
    setTimeout(() => {
      if (current + 1 >= questions.length) setDone(true)
      else { setCurrent(c => c + 1); setSelected(null) }
    }, 1200)
  }, [selected, q, current, questions.length])

  if (done) {
    const pct = Math.round((score / questions.length) * 100)
    const label = pct >= 80 ? '¡Excelente!' : pct >= 60 ? '¡Buen trabajo!' : 'Sigue practicando'
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-10 px-6 text-center">
        <div className="w-20 h-20 rounded-full bg-primary-50 border-4 border-primary-200 flex items-center justify-center">
          <Trophy weight="fill" className="w-9 h-9 text-primary-600" />
        </div>
        <div>
          <p className="text-3xl font-extrabold text-zinc-900">{score}/{questions.length}</p>
          <p className="text-sm text-zinc-500 mt-1">{label} · {pct}%</p>
        </div>
        <div className="flex gap-2">
          <button onClick={onClose} className="btn-primary bg-zinc-100 hover:bg-zinc-200 text-zinc-700 px-5 py-2.5">
            Cerrar quiz
          </button>
          <button onClick={() => window.location.reload()} className="btn-primary bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5">
            <ArrowCounterClockwise weight="bold" className="w-4 h-4" />
            Intentar de nuevo
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-zinc-500">Pregunta {current + 1} de {questions.length}</span>
        <span className="text-xs font-semibold text-primary-600">{score} correctas</span>
      </div>
      <div className="h-1.5 bg-zinc-200 rounded-full mb-6 overflow-hidden">
        <div className="h-full bg-primary-500 rounded-full transition-all duration-500" style={{ width: `${(current / questions.length) * 100}%` }} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={current} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
          <div className="text-center mb-6">
            <div className="inline-block bg-zinc-900 rounded-2xl px-6 py-4 mb-4">
              <span className="font-bold text-2xl text-white leading-tight">{q.term.term}</span>
            </div>
            <p className="text-sm text-zinc-500 font-medium">What does this term mean? — ¿Qué significa?</p>
          </div>

          <div className="grid gap-2.5">
            {q.options.map((opt, i) => {
              let style = 'bg-surface border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50 text-zinc-800'
              if (selected !== null) {
                if (i === q.correctIndex) style = 'bg-primary-50 border-primary-400 text-primary-800'
                else if (i === selected) style = 'bg-red-50 border-red-400 text-red-800'
                else style = 'bg-surface border-zinc-100 text-zinc-400'
              }
              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={selected !== null}
                  className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all duration-150 flex items-center gap-3 ${style}`}
                >
                  {selected !== null && i === q.correctIndex && <CheckCircle weight="fill" className="w-4 h-4 text-primary-600 flex-shrink-0" />}
                  {selected !== null && i === selected && i !== q.correctIndex && <XCircle weight="fill" className="w-4 h-4 text-red-500 flex-shrink-0" />}
                  {(selected === null || (i !== q.correctIndex && i !== selected)) && <span className="w-4 h-4 rounded-full border-2 border-current flex-shrink-0 opacity-50" />}
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
// Página principal MedEN
// ──────────────────────────────────────────────────────────────
export function MedEn() {
  const [searchParams] = useSearchParams()
  const initialCategoria = searchParams.get('categoria') ?? 'todas'
  const initialPos = (searchParams.get('pos') as MedEnPos | null) ?? 'todos'
  const initialSemana = searchParams.get('semana') ?? 'todas'

  const [view, setView]             = useState<'vocabulario' | 'abreviaturas'>('vocabulario')
  const [query, setQuery]           = useState('')
  const [filterPos, setFilterPos]   = useState<string>(initialPos)
  const [filterCat, setFilterCat]   = useState<string>(initialCategoria)
  const [filterSem, setFilterSem]   = useState<string>(initialSemana)
  const [expanded, setExpanded]     = useState<string | null>(null)
  const [showQuiz, setShowQuiz]     = useState(false)

  const posPresent = useMemo(() => {
    const set = new Set(medenTerms.map(t => t.pos))
    return Array.from(set)
  }, [])
  const semanasPresent = useMemo(() => {
    const set = new Set(medenTerms.map(t => t.semana))
    return Array.from(set).sort((a, b) => a - b)
  }, [])

  const filtered = useMemo(() => {
    return medenTerms.filter(t => {
      if (filterPos !== 'todos' && t.pos !== filterPos) return false
      if (filterCat !== 'todas' && t.categoria !== filterCat) return false
      if (filterSem !== 'todas' && String(t.semana) !== filterSem) return false
      if (query) {
        const q = query.toLowerCase()
        return t.term.toLowerCase().includes(q)
          || t.es.toLowerCase().includes(q)
          || (t.example?.toLowerCase().includes(q) ?? false)
          || (t.forms?.some(f => f.word.toLowerCase().includes(q)) ?? false)
      }
      return true
    })
  }, [filterPos, filterCat, filterSem, query])

  const filteredAbrev = useMemo(() => {
    if (!query) return abreviaturasSorted
    const q = query.toLowerCase()
    return abreviaturasSorted.filter(a =>
      a.abbr.toLowerCase().includes(q) || a.meaning.toLowerCase().includes(q))
  }, [query])

  const resetFilters = () => { setQuery(''); setFilterPos('todos'); setFilterCat('todas'); setFilterSem('todas') }

  return (
    <main className="flex-1 pb-20 md:pb-0">
      {/* Encabezado */}
      <section className="bg-surface border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-200 text-pink-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                <Translate weight="fill" className="w-3.5 h-3.5" />
                EnLex · Vocabulario de Inglés Médico
              </div>
              <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight leading-none mb-2">
                EnLex · Vocabulario de Inglés Médico
              </h1>
              <p className="text-zinc-500 text-sm max-w-[55ch]">
                Términos, abreviaturas, derivaciones y verbos frasales de Inglés Médico I. Fuente: clases de la Dra. Ana Paulina Nájera Soto.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                {[
                  { n: MEDEN_STATS.total, l: 'términos' },
                  { n: MEDEN_STATS.historiaClinica, l: 'historia clínica' },
                  { n: MEDEN_STATS.sintomas, l: 'síntomas' },
                  { n: MEDEN_STATS.gramatica, l: 'gramática' },
                ].map(({ n, l }) => (
                  <div key={l} className="text-center">
                    <p className="text-xl font-extrabold text-zinc-900">{n}</p>
                    <p className="text-[0.6875rem] text-zinc-400 font-medium">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {view === 'vocabulario' && (
              <button
                onClick={() => setShowQuiz(true)}
                className="btn-primary bg-zinc-900 hover:bg-zinc-700 text-white px-5 py-2.5 self-start md:self-end"
              >
                <Trophy weight="fill" className="w-4 h-4" />
                Iniciar Quiz (10 preguntas)
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Filtros */}
      <div className="bg-surface border-b border-zinc-100 sticky top-14 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 space-y-2.5">
          {/* Conmutador Vocabulario / Abreviaturas */}
          <div className="inline-flex items-center gap-1 bg-zinc-100 rounded-xl p-1">
            {([['vocabulario', 'Vocabulario'], ['abreviaturas', 'Abreviaturas']] as const).map(([v, label]) => (
              <button
                key={v}
                onClick={() => { setView(v); setQuery('') }}
                className={`text-xs font-bold px-4 py-1.5 rounded-lg transition-all duration-150
                  ${view === v ? 'bg-surface text-zinc-900 shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="relative max-w-md">
            <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={view === 'abreviaturas' ? 'Buscar sigla o significado...' : 'Buscar término, significado o ejemplo...'}
              className="w-full bg-zinc-100 pl-9 pr-9 py-2 rounded-xl text-sm outline-none focus:ring-2 focus:ring-pink-300 focus:bg-surface transition-all"
            />
            {query && (
              <button onClick={() => setQuery('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700">
                <X weight="bold" className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {view === 'abreviaturas' ? (
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs text-zinc-400 font-medium">
                <span className="text-zinc-700 font-bold">{filteredAbrev.length}</span>
                {query ? ` de ${abreviaturas.length}` : ''} abreviaturas
              </p>
              <a
                href="/descargas/medical-abbreviations-enlex.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border border-pink-200 bg-pink-50 text-pink-700 hover:bg-pink-100 transition-colors"
              >
                <DownloadSimple weight="bold" className="w-3.5 h-3.5" />
                Descargar PDF
              </a>
            </div>
          ) : (
          <>
          <div className="flex flex-wrap gap-2 items-center">
            {/* Categoría gramatical (pos) */}
            <button
              onClick={() => setFilterPos('todos')}
              className={`text-xs font-semibold px-3 py-1 rounded-full border transition-all duration-150
                ${filterPos === 'todos' ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-surface text-zinc-600 border-zinc-200 hover:border-zinc-400'}`}
            >
              Todas las categorías
            </button>
            {posPresent.map(p => (
              <button
                key={p}
                onClick={() => setFilterPos(p)}
                className={`text-xs font-semibold px-3 py-1 rounded-full border transition-all duration-150
                  ${filterPos === p ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-surface text-zinc-600 border-zinc-200 hover:border-zinc-400'}`}
              >
                {POS_LABELS[p]}
              </button>
            ))}

            <div className="w-px h-5 bg-zinc-200 self-center mx-0.5" />

            {/* Categoría temática */}
            <select
              value={filterCat}
              onChange={e => setFilterCat(e.target.value)}
              className="text-xs font-semibold px-3 py-1 rounded-full border border-zinc-200 bg-surface text-zinc-600 outline-none focus:border-zinc-400 cursor-pointer"
            >
              <option value="todas">Todas las áreas</option>
              {Object.entries(CATEGORIA_LABELS).map(([k, v]) => (
                <option key={k} value={k}>{v}</option>
              ))}
            </select>

            {/* Semana */}
            <select
              value={filterSem}
              onChange={e => setFilterSem(e.target.value)}
              className="text-xs font-semibold px-3 py-1 rounded-full border border-zinc-200 bg-surface text-zinc-600 outline-none focus:border-zinc-400 cursor-pointer"
            >
              <option value="todas">Todas las semanas</option>
              {semanasPresent.map(s => (
                <option key={s} value={String(s)}>Semana {s}</option>
              ))}
            </select>
          </div>

          <p className="text-xs text-zinc-400 font-medium">
            Mostrando <span className="text-zinc-700 font-bold">{filtered.length}</span> de {MEDEN_STATS.total} términos
          </p>
          </>
          )}
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {view === 'abreviaturas' ? (
          filteredAbrev.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
              <p className="text-4xl">🔍</p>
              <p className="font-semibold text-zinc-700">Sin resultados</p>
              <p className="text-sm text-zinc-400">Prueba con otra búsqueda.</p>
              <button onClick={() => setQuery('')} className="btn-primary bg-zinc-100 hover:bg-zinc-200 text-zinc-700 px-4 py-2 mt-2">
                <ArrowCounterClockwise weight="bold" className="w-4 h-4" />
                Limpiar búsqueda
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1.5">
              {filteredAbrev.map(a => (
                <div
                  key={a.abbr}
                  className="flex items-baseline gap-3 py-1.5 px-3 rounded-lg hover:bg-zinc-50 transition-colors"
                >
                  <span className="font-bold text-pink-700 text-sm shrink-0 min-w-[3.5rem]">{a.abbr}</span>
                  <span className="text-sm text-zinc-500 leading-snug">{a.meaning}</span>
                </div>
              ))}
            </div>
          )
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
            <p className="text-4xl">🔍</p>
            <p className="font-semibold text-zinc-700">Sin resultados</p>
            <p className="text-sm text-zinc-400">Prueba con otros filtros o una búsqueda diferente.</p>
            <button onClick={resetFilters} className="btn-primary bg-zinc-100 hover:bg-zinc-200 text-zinc-700 px-4 py-2 mt-2">
              <ArrowCounterClockwise weight="bold" className="w-4 h-4" />
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-start">
            <AnimatePresence mode="popLayout">
              {filtered.map(term => (
                <TermCard
                  key={term.id}
                  term={term}
                  expanded={expanded === term.id}
                  onToggle={() => setExpanded(prev => (prev === term.id ? null : term.id))}
                />
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* Atribución */}
      <footer className="border-t border-zinc-100 bg-zinc-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs text-zinc-400 leading-relaxed">
            <span className="font-semibold text-zinc-600">EnLex</span> · Vocabulario de Inglés Médico I (UAD).
            Contenido tomado de las clases y de los libros de texto de la materia, para uso educativo.
          </p>
        </div>
      </footer>

      {/* Modal de quiz */}
      <AnimatePresence>
        {showQuiz && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
              onClick={() => setShowQuiz(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 400, damping: 35 }}
              className="fixed inset-x-4 top-16 bottom-4 md:inset-auto md:left-1/2 md:-translate-x-1/2 md:top-12 md:w-full md:max-w-lg md:max-h-[85dvh] bg-surface rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-100 flex-shrink-0">
                <div>
                  <p className="font-bold text-zinc-900 text-sm">Quiz de Vocabulario</p>
                  <p className="text-xs text-zinc-400">
                    10 preguntas · {filtered.length >= 10 ? 'del filtro actual' : 'de todo el vocabulario'}
                  </p>
                </div>
                <button onClick={() => setShowQuiz(false)} className="w-8 h-8 rounded-xl bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition-colors">
                  <X weight="bold" className="w-4 h-4 text-zinc-500" />
                </button>
              </div>
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
