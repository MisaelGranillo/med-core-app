/* Página de detalle de módulo LMGC — Ruta /modulos/:id */

import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft, Cube, BookOpenText, Lightning, BookOpen,
  Users, Star, Lock, Wrench,
} from '@phosphor-icons/react'
import { getModuleById, STATUS_STYLES, AÑOS_DISPLAY, TIPO_LABELS } from '../data/lmgc-modules'
import { medlexTerms, SISTEMA_LABELS, SISTEMA_COLORS } from '../data/medlex-terms'

export function ModuloDetail() {
  const { id }   = useParams<{ id: string }>()
  const navigate = useNavigate()
  const mod      = getModuleById(id ?? '')

  useEffect(() => {
    if (!mod) navigate('/modulos')
  }, [mod, navigate])

  if (!mod) return null

  const s = STATUS_STYLES[mod.status]

  // Términos MedLex relacionados (primeros 9)
  const relatedTerms = mod.medlex_sistema
    ? medlexTerms.filter(t => t.sistema === mod.medlex_sistema).slice(0, 9)
    : []

  // Mapeo de sistema corporal a filtro del visor 3D
  const viewerFilter = mod.sistema_corporal

  const StatusIcon = mod.status === 'disponible'
    ? Star
    : mod.status === 'en-construccion' ? Wrench : Lock

  return (
    <div className="flex-1 flex flex-col pb-20 md:pb-0">

      {/* ── Hero del módulo ────────────────────────────────── */}
      <div className="bg-gradient-to-br from-zinc-900 to-zinc-700 text-white relative overflow-hidden">
        {/* Patrón puntilleado decorativo */}
        <svg aria-hidden className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="dots-mod" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-mod)" />
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-5 text-white/60 text-sm">
            <Link to="/modulos" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <ArrowLeft weight="bold" className="w-4 h-4" />
              Plan de Estudios
            </Link>
            <span>/</span>
            <span className="text-white font-mono">{mod.codigo}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end gap-6">
            <div className="flex-1">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/60 border border-white/20 px-2.5 py-1 rounded-full">
                  {AÑOS_DISPLAY[mod.año]} · {TIPO_LABELS[mod.tipo]}
                </span>
                <span className={`flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full ${s.bg} ${s.text}`}>
                  <StatusIcon weight="fill" className="w-3 h-3" />
                  {s.label}
                </span>
                {mod.pai && (
                  <span className="text-[10px] font-bold bg-amber-400 text-amber-900 px-2.5 py-1 rounded-full">
                    ⭐ PAI
                  </span>
                )}
              </div>

              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-none mb-2">
                {mod.nombre}
              </h1>
              <p className="text-white/70 text-sm leading-relaxed max-w-[60ch]">
                {mod.descripcion}
              </p>

              {/* Stats */}
              <div className="flex gap-4 mt-4">
                {mod.semanas && (
                  <div className="text-center">
                    <p className="font-extrabold text-lg">{mod.semanas}</p>
                    <p className="text-[11px] text-white/50">semanas</p>
                  </div>
                )}
                <div className="text-center">
                  <p className="font-extrabold text-lg">{mod.creditos}</p>
                  <p className="text-[11px] text-white/50">créditos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Contenido del módulo ──────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6 w-full">

        {/* Accesos rápidos (solo módulos disponibles) */}
        {mod.status === 'disponible' && (viewerFilter || mod.medlex_sistema) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {viewerFilter && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
              >
                <Link
                  to={`/anatomia-3d?sistema=${viewerFilter}`}
                  className="card p-5 flex items-center gap-4 hover:shadow-card-hover
                             hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Cube weight="fill" className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-zinc-900 text-sm mb-0.5">Visor 3D Anatómico</p>
                    <p className="text-xs text-zinc-400">
                      Explora la anatomía del sistema {SISTEMA_LABELS[viewerFilter] ?? viewerFilter} en 3D interactivo.
                    </p>
                  </div>
                  <ArrowLeft weight="bold" className="w-4 h-4 text-zinc-400 rotate-180 group-hover:text-primary-600 transition-colors" />
                </Link>
              </motion.div>
            )}
            {mod.medlex_sistema && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  to={`/terminologia?sistema=${mod.medlex_sistema}`}
                  className="card p-5 flex items-center gap-4 hover:shadow-card-hover
                             hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <BookOpenText weight="fill" className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-zinc-900 text-sm mb-0.5">Terminología MedLex</p>
                    <p className="text-xs text-zinc-400">
                      Prefijos, sufijos y raíces del sistema {SISTEMA_LABELS[mod.medlex_sistema] ?? mod.medlex_sistema}.
                    </p>
                  </div>
                  <ArrowLeft weight="bold" className="w-4 h-4 text-zinc-400 rotate-180 group-hover:text-indigo-600 transition-colors" />
                </Link>
              </motion.div>
            )}
          </div>
        )}

        {/* Objetivo del módulo */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="card p-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <Star weight="fill" className="w-5 h-5 text-amber-500" />
            <h2 className="font-bold text-zinc-900">Objetivo del módulo</h2>
          </div>
          <p className="text-sm text-zinc-700 leading-relaxed">
            {mod.descripcion}
          </p>
        </motion.section>

        {/* Términos MedLex relacionados */}
        {relatedTerms.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BookOpenText weight="fill" className="w-5 h-5 text-indigo-600" />
                <h2 className="font-bold text-zinc-900">Terminología clave</h2>
              </div>
              <Link
                to={`/terminologia?sistema=${mod.medlex_sistema}`}
                className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1 transition-colors"
              >
                Ver todos
                <ArrowLeft weight="bold" className="w-3.5 h-3.5 rotate-180" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {relatedTerms.map(term => {
                const sc = SISTEMA_COLORS[term.sistema] ?? SISTEMA_COLORS.general
                return (
                  <div key={term.id} className={`rounded-xl border px-3 py-2.5 ${sc.bg} ${sc.border}`}>
                    <p className={`font-bold text-sm font-mono ${sc.text}`}>{term.termino}</p>
                    <p className="text-xs text-zinc-600 mt-0.5">{term.significado}</p>
                    <p className="text-[10px] text-zinc-400 mt-1">{term.ejemplos.slice(0, 2).join(' · ')}</p>
                  </div>
                )
              })}
            </div>
          </motion.section>
        )}

        {/* Secciones placeholder */}
        {[
          { icon: <BookOpen weight="fill" className="w-5 h-5 text-zinc-400" />, title: 'Contenido teórico', msg: 'Notas y apuntes del módulo próximamente. El contenido se puede añadir en formato Markdown.' },
          { icon: <Users weight="fill" className="w-5 h-5 text-zinc-400" />, title: 'Casos ABP', msg: 'Casos de Aprendizaje Basado en Problemas para este módulo. Próximamente disponibles.' },
          { icon: <Lightning weight="fill" className="w-5 h-5 text-zinc-400" />, title: 'Evaluación', msg: 'Quiz de autoevaluación del módulo. Próximamente disponible.' },
        ].map((sec, i) => (
          <motion.section
            key={sec.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + i * 0.05 }}
            className="card p-6"
          >
            <div className="flex items-center gap-2 mb-3">
              {sec.icon}
              <h2 className="font-bold text-zinc-900">{sec.title}</h2>
            </div>
            <div className="rounded-xl bg-zinc-50 border-2 border-dashed border-zinc-200 p-6 text-center">
              <p className="text-sm text-zinc-400">{sec.msg}</p>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  )
}
