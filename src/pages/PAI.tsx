/* Página de inicio PAI — ruta /pai */

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  BookOpen, CheckCircle, Clock, ArrowRight, ArrowSquareOut,
  Cube, Sparkle,
} from '@phosphor-icons/react'
import { paiModulos, UNISA_CURSO_URL, type PaiStatus } from '../data/pai'

const STATUS_STYLES: Record<PaiStatus, { label: string; bg: string; text: string; dot: string }> = {
  'disponible':      { label: 'Disponible',       bg: 'bg-teal-100',  text: 'text-teal-700',  dot: 'bg-teal-500' },
  'en-construccion': { label: 'En construcción',  bg: 'bg-amber-100', text: 'text-amber-700', dot: 'bg-amber-500' },
  'bloqueado':       { label: 'Bloqueado',         bg: 'bg-zinc-100',  text: 'text-zinc-500',  dot: 'bg-zinc-400' },
}

export function PAI() {
  const disponibles  = paiModulos.filter(m => m.status === 'disponible').length
  const construccion = paiModulos.filter(m => m.status === 'en-construccion').length

  return (
    <main className="flex-1 bg-zinc-50">
      {/* Header */}
      <section className="bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700
                            text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              <Sparkle weight="fill" className="w-3.5 h-3.5" />
              PAI · Programa de Apoyo al Ingreso — LMGC, UNISA
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tighter leading-tight mb-3">
              Módulos PAI
            </h1>
            <p className="text-zinc-500 text-base leading-relaxed mb-6">
              9 módulos del programa oficial de ingreso a la Licenciatura en Medicina
              General y Comunitaria de la Universidad de la Salud, CDMX.
              Apuntes organizados con mnemotecnias, tablas y puntos clave para examen.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5 text-sm text-zinc-600">
                <CheckCircle weight="fill" className="w-4 h-4 text-teal-500" />
                <span><strong className="text-zinc-900">{disponibles}</strong> módulos disponibles</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-zinc-600">
                <Clock weight="fill" className="w-4 h-4 text-amber-500" />
                <span><strong className="text-zinc-900">{construccion}</strong> en construcción</span>
              </div>
              <a
                href={UNISA_CURSO_URL}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-800 transition-colors"
              >
                <ArrowSquareOut className="w-3.5 h-3.5" />
                Ver en plataforma UNISA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de módulos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {paiModulos.map((mod, i) => {
            const s = STATUS_STYLES[mod.status]
            const isAvailable = mod.status === 'disponible'

            return (
              <motion.div
                key={mod.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {isAvailable ? (
                  <Link
                    to={`/pai/${mod.slug}`}
                    className="group block card p-6 hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5 h-full"
                  >
                    <ModuloCard mod={mod} statusStyle={s} />
                  </Link>
                ) : (
                  <div className="card p-6 opacity-70 h-full">
                    <ModuloCard mod={mod} statusStyle={s} />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

function ModuloCard({
  mod,
  statusStyle: s,
}: {
  mod: typeof paiModulos[0]
  statusStyle: (typeof STATUS_STYLES)[PaiStatus]
}) {
  return (
    <div className="flex flex-col h-full">
      {/* Icono + badge de estado */}
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{mod.icono}</span>
        <span className={`flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full ${s.bg} ${s.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
          {s.label}
        </span>
      </div>

      {/* Número de orden (no en UI prominente, solo orientativo) */}
      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">
        Módulo {mod.orden} de 9
      </p>

      {/* Nombre oficial */}
      <h3 className="font-bold text-zinc-900 text-sm leading-snug mb-2 group-hover:text-teal-700 transition-colors">
        {mod.nombre}
      </h3>

      {/* Descripción */}
      <p className="text-xs text-zinc-400 leading-relaxed flex-1 mb-4">
        {mod.descripcion}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-zinc-100">
        <div className="flex items-center gap-3 text-xs text-zinc-400">
          {mod.temas !== null && (
            <span className="flex items-center gap-1">
              <BookOpen weight="fill" className="w-3.5 h-3.5" />
              {mod.temas} temas
            </span>
          )}
          {mod.relacionado_visor && (
            <span className="flex items-center gap-1 text-teal-600 font-semibold">
              <Cube weight="fill" className="w-3.5 h-3.5" />
              Visor 3D
            </span>
          )}
        </div>
        {mod.status === 'disponible' && (
          <ArrowRight weight="bold" className="w-4 h-4 text-zinc-300 group-hover:text-teal-500 transition-colors" />
        )}
      </div>
    </div>
  )
}
