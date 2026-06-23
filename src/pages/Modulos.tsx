/* Índice de Módulos LMGC — Ruta /modulos */

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Lock, Wrench, ArrowRight, Star, Cube, BookOpenText,
} from '@phosphor-icons/react'
import {
  lmgcModules,
  AÑOS_DISPLAY,
  TIPO_LABELS,
  STATUS_STYLES,
  type LMGCModule,
} from '../data/lmgc-modules'

const AÑOS = [1, 2, 3, 4, 5, 6] as const

// ──────────────────────────────────────────────────────────────
// ModuleCard
// ──────────────────────────────────────────────────────────────
function ModuleCard({ mod }: { mod: LMGCModule }) {
  const navigate = useNavigate()
  const s = STATUS_STYLES[mod.status]
  const isAvailable = mod.status === 'disponible'
  const isLocked    = mod.status === 'bloqueado'
  const open = () => navigate(`/modulos/${mod.id}`)

  const card = (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      role={isAvailable ? 'link' : undefined}
      tabIndex={isAvailable ? 0 : undefined}
      onClick={isAvailable ? open : undefined}
      onKeyDown={isAvailable ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open() } } : undefined}
      className={`card p-4 flex flex-col gap-3 transition-all duration-200
        ${isAvailable ? 'hover:shadow-card-hover hover:-translate-y-0.5 cursor-pointer' : ''}
        ${isLocked ? 'opacity-60' : ''}`}
    >
      {/* Badge de código + tipo */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold text-zinc-400 font-mono">{mod.codigo}</span>
          <span className="text-[9px] bg-zinc-100 text-zinc-500 px-1.5 py-0.5 rounded-full font-semibold">
            {TIPO_LABELS[mod.tipo]}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          {mod.pai && (
            <span className="text-[9px] bg-amber-100 text-amber-700 border border-amber-200 px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wide">
              PAI
            </span>
          )}
          <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full border ${s.bg} ${s.text} ${s.border}`}>
            {isLocked    ? <Lock weight="fill" className="w-3 h-3 inline" /> :
             mod.status === 'en-construccion' ? <Wrench weight="fill" className="w-3 h-3 inline" /> :
             <Star weight="fill" className="w-3 h-3 inline" />}
            {' '}{s.label}
          </span>
        </div>
      </div>

      {/* Nombre */}
      <h3 className={`font-bold text-sm leading-snug ${isLocked ? 'text-zinc-400' : 'text-zinc-900'}`}>
        {mod.nombre}
      </h3>

      {/* Descripción corta */}
      <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
        {mod.descripcion}
      </p>

      {/* Metadatos + enlaces rápidos */}
      <div className="flex items-center justify-between border-t border-zinc-100 pt-2.5 mt-auto">
        <div className="flex gap-3 text-[11px] text-zinc-400">
          {mod.semanas && <span>{mod.semanas} sem</span>}
          <span>{mod.creditos} créditos</span>
        </div>
        {isAvailable && (
          <div className="flex gap-1.5">
            {mod.sistema_corporal && (
              <Link
                to={`/anatomia-3d?sistema=${mod.sistema_corporal}`}
                onClick={e => e.stopPropagation()}
                className="w-6 h-6 rounded-lg bg-primary-50 border border-primary-200 flex items-center justify-center hover:bg-primary-100 transition-colors"
                title="Ver en visor 3D"
              >
                <Cube weight="fill" className="w-3 h-3 text-primary-600" />
              </Link>
            )}
            {mod.medlex_sistema && (
              <Link
                to={`/terminologia?sistema=${mod.medlex_sistema}`}
                onClick={e => e.stopPropagation()}
                className="w-6 h-6 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center hover:bg-indigo-100 transition-colors"
                title="Ver terminología"
              >
                <BookOpenText weight="fill" className="w-3 h-3 text-indigo-600" />
              </Link>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )

  return card
}

// ──────────────────────────────────────────────────────────────
// Página principal
// ──────────────────────────────────────────────────────────────
export function Modulos() {
  const [activeAño, setActiveAño] = useState<number>(2)
  const [showPAI,   setShowPAI]   = useState(false)

  const displayed = lmgcModules.filter(m =>
    showPAI ? m.pai : m.año === activeAño
  )

  const countByAño = (a: number) => lmgcModules.filter(m => m.año === a).length
  const availableCount = lmgcModules.filter(m => m.status === 'disponible').length

  return (
    <main className="flex-1 pb-20 md:pb-0">

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200
                              text-primary-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5
                              rounded-full mb-3">
                LMGC · Universidad de la Salud
              </div>
              <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight leading-none mb-2">
                Plan de Estudios
              </h1>
              <p className="text-zinc-500 text-sm max-w-[55ch]">
                Licenciatura en Medicina General y Comunitaria · 6 años · 37 módulos · 262 créditos.
                Diseño pedagógico ABP + Currículo Invertido (Wiggins & McTighe).
              </p>
            </div>
            <div className="flex gap-3 text-center flex-shrink-0">
              <div><p className="text-2xl font-extrabold text-zinc-900">37</p><p className="text-[11px] text-zinc-400">módulos</p></div>
              <div><p className="text-2xl font-extrabold text-zinc-900">262</p><p className="text-[11px] text-zinc-400">créditos</p></div>
              <div><p className="text-2xl font-extrabold text-primary-600">{availableCount}</p><p className="text-[11px] text-zinc-400">disponibles</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Banner PAI ─────────────────────────────────────── */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
          <span className="text-amber-500 text-base">⭐</span>
          <p className="text-xs text-amber-800 font-medium flex-1">
            <span className="font-bold">PAI (Programa de Admisión Intensiva):</span>{' '}
            El visor 3D y la Terminología MedLex sirven directamente el contenido PAI de Anatomía y Fisiología.
          </p>
          <button
            onClick={() => setShowPAI(p => !p)}
            className={`text-xs font-semibold px-3 py-1 rounded-full border transition-all flex-shrink-0
              ${showPAI
                ? 'bg-amber-500 text-white border-amber-500'
                : 'bg-white text-amber-700 border-amber-300 hover:bg-amber-100'}`}
          >
            {showPAI ? 'Ver todos' : 'Ver solo PAI'}
          </button>
        </div>
      </div>

      {/* ── Tabs por año ──────────────────────────────────── */}
      {!showPAI && (
        <div className="bg-white border-b border-zinc-200 sticky top-14 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex gap-1 overflow-x-auto scrollbar-hide py-2">
              {AÑOS.map(a => (
                <button
                  key={a}
                  onClick={() => setActiveAño(a)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold
                               whitespace-nowrap transition-all duration-150 flex-shrink-0
                               ${activeAño === a
                                 ? 'bg-zinc-900 text-white'
                                 : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'}`}
                >
                  {AÑOS_DISPLAY[a]}
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold
                    ${activeAño === a ? 'bg-white/20 text-white' : 'bg-zinc-100 text-zinc-500'}`}>
                    {countByAño(a)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Grid de módulos ──────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {!showPAI && activeAño === 2 && (
          <div className="mb-4 p-3 rounded-2xl bg-primary-50 border border-primary-200 flex items-center gap-3">
            <Star weight="fill" className="w-4 h-4 text-primary-600 flex-shrink-0" />
            <p className="text-xs text-primary-800 font-medium">
              Los módulos del <strong>Año 2</strong> están disponibles con contenido 3D, terminología médica y recursos de estudio.
            </p>
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={showPAI ? 'pai' : activeAño}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {displayed.map(mod => (
              <ModuleCard key={mod.id} mod={mod} />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── Leyenda de estado ─────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        <div className="flex flex-wrap gap-4 text-xs text-zinc-400">
          <span className="flex items-center gap-1.5">
            <Star weight="fill" className="w-3.5 h-3.5 text-primary-500" />
            Disponible — acceso completo con contenido de estudio
          </span>
          <span className="flex items-center gap-1.5">
            <Wrench weight="fill" className="w-3.5 h-3.5 text-zinc-400" />
            En construcción — estructura lista, contenido próximamente
          </span>
          <span className="flex items-center gap-1.5">
            <Lock weight="fill" className="w-3.5 h-3.5 text-zinc-300" />
            Bloqueado — módulo de ciclos clínicos avanzados
          </span>
          <span className="flex items-center gap-1.5">
            <ArrowRight weight="bold" className="w-3.5 h-3.5 text-amber-500" />
            PAI — contenido relevante para admisión intensiva
          </span>
        </div>
      </div>
    </main>
  )
}
