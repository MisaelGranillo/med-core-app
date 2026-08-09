/* Panel de información anatómica — sidebar derecho (desktop) / bottom sheet (móvil) */

import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Bone, Lightning, Heartbeat, BookOpenText, ArrowRight } from '@phosphor-icons/react'
import type { AnatomyPart } from '../data/anatomy-3d-data'

// Mapeo de parte anatómica a sistema MedLex
const PART_TO_MEDLEX: Record<string, string> = {
  'craneo':           'nervioso',
  'columna-vertebral':'nervioso',
  'caja-toracica':    'respiratorio',
  'humero':           'musculoesqueletico',
  'femur':            'musculoesqueletico',
  'biceps':           'musculoesqueletico',
  'cuadriceps':       'musculoesqueletico',
  'diafragma':        'respiratorio',
  'trapecio':         'musculoesqueletico',
  'gastrocnemio':     'musculoesqueletico',
  'cerebro':          'nervioso',
  'corazon':          'cardiovascular',
  'pulmones':         'respiratorio',
  'higado':           'digestivo',
  'estomago':         'digestivo',
}

interface AnatomyInfoPanelProps {
  part: AnatomyPart | null
  onClose: () => void
}

// Paleta visual por sistema
const SISTEMA_STYLES: Record<string, { bg: string; text: string; border: string; badge: string; icon: React.ReactNode }> = {
  'Esquelético': {
    bg:     'bg-amber-50',
    text:   'text-amber-700',
    border: 'border-amber-200',
    badge:  'bg-amber-100 text-amber-800',
    icon:   <Bone weight="fill" className="w-3.5 h-3.5" />,
  },
  'Muscular': {
    bg:     'bg-red-50',
    text:   'text-red-700',
    border: 'border-red-200',
    badge:  'bg-red-100 text-red-800',
    icon:   <Lightning weight="fill" className="w-3.5 h-3.5" />,
  },
  'Órganos': {
    bg:     'bg-purple-50',
    text:   'text-purple-700',
    border: 'border-purple-200',
    badge:  'bg-purple-100 text-purple-800',
    icon:   <Heartbeat weight="fill" className="w-3.5 h-3.5" />,
  },
}

// Colores del punto de bala por sistema
const BULLET_COLOR: Record<string, string> = {
  'Esquelético': 'bg-amber-400',
  'Muscular':    'bg-red-500',
  'Órganos':     'bg-purple-500',
}

/* ── Variantes de animación ──────────────────────────────── */

// Desktop: desliza desde la derecha
const desktopVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0, opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 30, mass: 0.8 },
  },
  exit: {
    x: '100%', opacity: 0,
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  },
}

// Mobile: sube desde abajo
const mobileVariants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: 0, opacity: 1,
    transition: { type: 'spring', stiffness: 320, damping: 32, mass: 0.8 },
  },
  exit: {
    y: '100%', opacity: 0,
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  },
}

function PanelContent({ part, onClose }: { part: AnatomyPart; onClose: () => void }) {
  const s = SISTEMA_STYLES[part.sistema]
  const dot = BULLET_COLOR[part.sistema]
  const medlexSistema = PART_TO_MEDLEX[part.id]

  return (
    <>
      {/* Encabezado */}
      <div className={`${s.bg} ${s.border} border-b px-5 py-4`}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className={`inline-flex items-center gap-1.5 text-[0.625rem] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-2 ${s.badge}`}>
              {s.icon}
              Sistema {part.sistema}
            </span>
            <h2 className="text-lg font-extrabold text-zinc-900 tracking-tight leading-tight">
              {part.nombre}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-8 h-8 rounded-xl bg-surface/70 hover:bg-surface border border-zinc-200 flex items-center justify-center transition-colors mt-0.5"
            aria-label="Cerrar panel"
          >
            <X weight="bold" className="w-4 h-4 text-zinc-500" />
          </button>
        </div>
      </div>

      {/* Cuerpo */}
      <div className="overflow-y-auto flex-1 px-5 py-5 space-y-5">
        {/* Descripción */}
        <div>
          <p className={`text-[0.625rem] font-bold uppercase tracking-widest mb-2 ${s.text}`}>
            Descripción
          </p>
          <p className="text-sm text-zinc-700 leading-relaxed">
            {part.descripcion}
          </p>
        </div>

        {/* Funciones clave */}
        <div>
          <p className={`text-[0.625rem] font-bold uppercase tracking-widest mb-3 ${s.text}`}>
            Funciones clave
          </p>
          <ul className="space-y-2.5">
            {part.funcionesClave.map((fn, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-700">
                <span className={`w-1.5 h-1.5 rounded-full ${dot} flex-shrink-0 mt-[7px]`} />
                <span className="leading-relaxed">{fn}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Enlace a terminología MedLex — VINCULACIÓN BIDIRECCIONAL */}
        {medlexSistema && (
          <Link
            to={`/terminologia?sistema=${medlexSistema}`}
            onClick={onClose}
            className="flex items-center gap-3 p-3 rounded-2xl bg-indigo-50 border border-indigo-200
                       hover:bg-indigo-100 transition-colors group"
          >
            <BookOpenText weight="fill" className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-xs font-bold text-indigo-800">Ver terminología relacionada</p>
              <p className="text-[0.625rem] text-indigo-600 mt-0.5">
                Prefijos, sufijos y raíces de este sistema en MedLex
              </p>
            </div>
            <ArrowRight weight="bold" className="w-4 h-4 text-indigo-400 group-hover:text-indigo-600 transition-colors" />
          </Link>
        )}

        {/* Etiqueta de sistema */}
        <div className={`${s.bg} ${s.border} border rounded-2xl px-4 py-3`}>
          <p className="text-xs font-semibold text-zinc-600">
            Pertenece al{' '}
            <span className={`font-bold ${s.text}`}>Sistema {part.sistema}</span>
          </p>
        </div>
      </div>
    </>
  )
}

/* ── Panel principal exportado ────────────────────────────── */
export function AnatomyInfoPanel({ part, onClose }: AnatomyInfoPanelProps) {
  return (
    <>
      {/* ── Desktop: sidebar derecho ───────────────────────── */}
      <AnimatePresence>
        {part && (
          <motion.aside
            key="desktop-panel"
            variants={desktopVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="hidden md:flex flex-col w-80 flex-shrink-0 bg-surface border-l border-zinc-200 h-full overflow-hidden"
          >
            <PanelContent part={part} onClose={onClose} />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* ── Mobile: bottom sheet ───────────────────────────── */}
      <AnimatePresence>
        {part && (
          <>
            {/* Overlay oscuro */}
            <motion.div
              key="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 z-40 md:hidden"
              onClick={onClose}
            />

            {/* Panel */}
            <motion.div
              key="mobile-panel"
              variants={mobileVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-surface rounded-t-3xl
                         border-t border-zinc-200 shadow-2xl flex flex-col max-h-[65dvh]"
            >
              {/* Indicador de arrastre */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 bg-zinc-300 rounded-full" />
              </div>
              <PanelContent part={part} onClose={onClose} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
