/* Plan de Estudios — Ruta /plan
 *
 * Renderizador agnóstico a la escuela: consume el registro `plans` y muestra
 * el plan seleccionado por periodo. Un selector permite cambiar entre planes
 * (UAD, LMGC). Las materias enlazan a /plan/:subjectId. */

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, Cube, BookOpenText, Flask, CaretDown,
} from '@phosphor-icons/react'
import { plans, sistemasDeMateria, type Plan as PlanType, type Subject } from '../data/plans'
import { usePlanStore } from '../store/usePlanStore'
import { SISTEMA_LABELS } from '../data/medlex-terms'

// ──────────────────────────────────────────────────────────────
// Tarjeta de materia
// ──────────────────────────────────────────────────────────────
function SubjectCard({ subject }: { subject: Subject }) {
  const navigate = useNavigate()
  const open = () => navigate(`/plan/${subject.id}`)
  const sistemas = sistemasDeMateria(subject.tags)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      role="link"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open() } }}
      className="card p-4 flex flex-col gap-3 transition-all duration-200
                 hover:shadow-card-hover hover:-translate-y-0.5 cursor-pointer"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-bold text-sm leading-snug text-zinc-900">{subject.name}</h3>
        {subject.hasLab && (
          <span className="flex items-center gap-1 text-[0.5625rem] bg-teal-100 text-teal-700 border border-teal-200 px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wide flex-shrink-0">
            <Flask weight="fill" className="w-3 h-3" /> Lab
          </span>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-zinc-100 pt-2.5 mt-auto">
        <div className="flex flex-wrap gap-1">
          {(subject.tags ?? []).map(t => (
            <span key={t} className="text-[0.5625rem] bg-zinc-100 text-zinc-500 px-1.5 py-0.5 rounded-full font-semibold">
              {SISTEMA_LABELS[t] ?? t}
            </span>
          ))}
        </div>
        {sistemas.length > 0 && (
          <div className="flex gap-1.5 flex-shrink-0">
            <Link
              to={`/anatomia-3d?sistema=${sistemas[0]}`}
              onClick={e => e.stopPropagation()}
              className="w-6 h-6 rounded-lg bg-primary-50 border border-primary-200 flex items-center justify-center hover:bg-primary-100 transition-colors"
              title="Ver en visor 3D"
            >
              <Cube weight="fill" className="w-3 h-3 text-primary-600" />
            </Link>
            <Link
              to={`/terminologia?sistema=${sistemas[0]}`}
              onClick={e => e.stopPropagation()}
              className="w-6 h-6 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center hover:bg-indigo-100 transition-colors"
              title="Ver terminología"
            >
              <BookOpenText weight="fill" className="w-3 h-3 text-indigo-600" />
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  )
}

// ──────────────────────────────────────────────────────────────
// Selector de plan
// ──────────────────────────────────────────────────────────────
function PlanSelector({ plan, onChange }: { plan: PlanType; onChange: (id: string) => void }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        className="flex items-center gap-2 bg-surface border border-zinc-300 rounded-xl px-3 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 transition-colors"
      >
        <span className="text-primary-700">{plan.schoolShort}</span>
        <span className="text-zinc-400">·</span>
        <span className="text-zinc-600">{plan.degree}</span>
        <CaretDown weight="bold" className={`w-3.5 h-3.5 text-zinc-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute right-0 mt-1 w-64 bg-surface border border-zinc-200 rounded-xl shadow-card-hover z-30 overflow-hidden">
          {plans.map(p => (
            <button
              key={p.id}
              onMouseDown={() => { onChange(p.id); setOpen(false) }}
              className={`w-full text-left px-3 py-2.5 hover:bg-zinc-50 transition-colors
                ${p.id === plan.id ? 'bg-primary-50' : ''}`}
            >
              <p className="text-sm font-bold text-zinc-900">{p.schoolShort} · {p.degree}</p>
              <p className="text-[0.6875rem] text-zinc-400">{p.school} · {p.durationLabel}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ──────────────────────────────────────────────────────────────
// Página principal
// ──────────────────────────────────────────────────────────────
export function Plan() {
  const { selectedPlanId, setPlan } = usePlanStore()
  const plan = plans.find(p => p.id === selectedPlanId) ?? plans[0]
  const [activeIdx, setActiveIdx] = useState<number>(plan.periods[0]?.index ?? 1)

  const activePeriod = plan.periods.find(p => p.index === activeIdx) ?? plan.periods[0]
  const totalSubjects = plan.periods.reduce((n, p) => n + p.subjects.length, 0)

  const handlePlanChange = (id: string) => {
    setPlan(id)
    const next = plans.find(p => p.id === id) ?? plans[0]
    setActiveIdx(next.periods[0]?.index ?? 1)
  }

  return (
    <main className="flex-1 pb-20 md:pb-0">

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="bg-surface border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200
                              text-primary-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5
                              rounded-full mb-3">
                {plan.schoolShort} · {plan.school}
              </div>
              <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight leading-none mb-2">
                Plan de Estudios
              </h1>
              <p className="text-zinc-500 text-sm max-w-[60ch]">
                {plan.degree}
                {plan.modality ? ` · Modalidad ${plan.modality}` : ''}
                {plan.rvoe ? ` · RVOE ${plan.rvoe}` : ''}
                {` · ${plan.durationLabel}`}.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3">
              <PlanSelector plan={plan} onChange={handlePlanChange} />
              <div className="flex gap-3 text-center flex-shrink-0">
                <div><p className="text-2xl font-extrabold text-zinc-900">{plan.periods.length}</p><p className="text-[0.6875rem] text-zinc-400">{plan.periodLabel.toLowerCase()}s</p></div>
                <div><p className="text-2xl font-extrabold text-primary-600">{totalSubjects}</p><p className="text-[0.6875rem] text-zinc-400">materias</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tabs por periodo ──────────────────────────────── */}
      <div className="bg-surface border-b border-zinc-200 sticky top-14 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide py-2">
            {plan.periods.map(p => (
              <button
                key={p.index}
                onClick={() => setActiveIdx(p.index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold
                             whitespace-nowrap transition-all duration-150 flex-shrink-0
                             ${activeIdx === p.index
                               ? 'bg-zinc-900 text-white'
                               : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'}`}
              >
                {p.label}
                <span className={`text-[0.625rem] px-1.5 py-0.5 rounded-full font-bold
                  ${activeIdx === p.index ? 'bg-surface/20 text-white' : 'bg-zinc-100 text-zinc-500'}`}>
                  {p.subjects.length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Grid de materias ─────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${plan.id}-${activeIdx}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {activePeriod?.subjects.map(subject => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── Nota ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        <p className="text-xs text-zinc-400 flex items-center gap-1.5">
          <ArrowRight weight="bold" className="w-3.5 h-3.5 text-primary-500" />
          Las materias con tag de sistema corporal enlazan al visor 3D y a la terminología MedLex.
        </p>
      </div>
    </main>
  )
}
