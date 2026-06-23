/* Página de módulo PAI — ruta /pai/:slug */

import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft, BookOpen, ArrowSquareOut, Cube, ArrowRight,
  Star, CheckCircle, Clock, Brain,
} from '@phosphor-icons/react'
import { paiBySlug, type PaiModulo } from '../data/pai'
import { usePaiContent } from '../hooks/usePaiContent'

const MODULO_COLORS: Record<string, { accent: string; badge: string; bg: string }> = {
  'perfil-de-egreso':      { accent: 'text-indigo-600',  badge: 'bg-indigo-100 text-indigo-700',  bg: 'bg-indigo-50'  },
  'salud-publica':         { accent: 'text-cyan-600',    badge: 'bg-cyan-100 text-cyan-700',      bg: 'bg-cyan-50'    },
  'bioquimica':            { accent: 'text-violet-600',  badge: 'bg-violet-100 text-violet-700',  bg: 'bg-violet-50'  },
  'aparatos-y-sistemas':   { accent: 'text-red-600',     badge: 'bg-red-100 text-red-700',        bg: 'bg-red-50'     },
  'comprension-lectura':   { accent: 'text-emerald-600', badge: 'bg-emerald-100 text-emerald-700',bg: 'bg-emerald-50' },
  'ingles-medico':         { accent: 'text-blue-600',    badge: 'bg-blue-100 text-blue-700',      bg: 'bg-blue-50'    },
  'matematicas':           { accent: 'text-amber-600',   badge: 'bg-amber-100 text-amber-700',    bg: 'bg-amber-50'   },
  'investigacion':         { accent: 'text-zinc-700',    badge: 'bg-zinc-100 text-zinc-700',      bg: 'bg-zinc-50'    },
  'diversidad':            { accent: 'text-pink-600',    badge: 'bg-pink-100 text-pink-700',      bg: 'bg-pink-50'    },
}

function getColor(slug: string) {
  return MODULO_COLORS[slug] ?? MODULO_COLORS['investigacion']
}

export function PAIModulo() {
  const { slug } = useParams<{ slug: string }>()
  const mod: PaiModulo | undefined = slug ? paiBySlug[slug] : undefined
  const { temas, loading } = usePaiContent(slug ?? '')

  if (!mod) return <Navigate to="/pai" replace />

  const c = getColor(mod.slug)
  const isUnderConstruction = mod.status === 'en-construccion'

  return (
    <main className="flex-1 bg-zinc-50">
      {/* Header */}
      <div className="bg-white border-b border-zinc-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <Link to="/pai"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-800 mb-5 transition-colors">
            <ArrowLeft weight="bold" className="w-4 h-4" />
            PAI
          </Link>

          <div className="flex items-start gap-4">
            <span className="text-4xl flex-shrink-0">{mod.icono}</span>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-1">
                Módulo {mod.orden} · PAI — LMGC · UNISA
              </p>
              <h1 className="text-2xl md:text-3xl font-extrabold text-zinc-900 tracking-tight leading-tight mb-2">
                {mod.nombre}
              </h1>
              <p className="text-zinc-500 text-sm leading-relaxed">{mod.descripcion}</p>
            </div>
          </div>

          {/* Metadata row */}
          <div className="flex flex-wrap items-center gap-4 mt-5">
            {mod.temas !== null && (
              <span className="flex items-center gap-1.5 text-sm text-zinc-600">
                <BookOpen weight="fill" className="w-4 h-4 text-zinc-400" />
                {mod.temas} temas
              </span>
            )}
            {mod.relacionado_visor && (
              <Link to="/anatomia-3d?model=overview-skeleton"
                className="flex items-center gap-1.5 text-sm text-primary-600 font-semibold hover:text-primary-800 transition-colors">
                <Cube weight="fill" className="w-4 h-4" />
                Ver en Visor Anatómico
              </Link>
            )}
            <a href={mod.unisa_url} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-800 transition-colors">
              <ArrowSquareOut className="w-3.5 h-3.5" />
              Ver en UNISA
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6">

        {/* Aviso "En construcción" */}
        {isUnderConstruction && (
          <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <Clock weight="fill" className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-amber-800 mb-1">Contenido en construcción</p>
              <p className="text-sm text-amber-700 leading-relaxed">
                Este módulo aún no tiene apuntes propios del estudiante.
                El contenido mostrado es una guía general basada en el programa oficial del PAI.
                Actualización pendiente con apuntes reales del curso.
              </p>
            </div>
          </div>
        )}

        {/* Fuente oficial UNISA */}
        <div className={`flex gap-3 ${c.bg} border ${c.badge.split(' ')[0].replace('bg', 'border')}/50 rounded-2xl p-5`}>
          <Brain weight="fill" className={`w-5 h-5 flex-shrink-0 mt-0.5 ${c.accent}`} />
          <div className="min-w-0">
            <p className={`text-sm font-bold mb-0.5 ${c.accent}`}>Fuente oficial</p>
            <p className="text-xs text-zinc-600 mb-2">
              Este módulo corresponde al PAI de la Universidad de la Salud (UNISA), CDMX.
            </p>
            <a
              href={mod.unisa_url}
              target="_blank" rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs font-semibold ${c.accent} hover:underline`}
            >
              Ver material oficial en plataforma UNISA
              <ArrowSquareOut className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Lista de temas */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="card p-5 animate-pulse">
                <div className="h-4 bg-zinc-200 rounded w-3/4 mb-2" />
                <div className="h-3 bg-zinc-100 rounded w-full mb-1" />
                <div className="h-3 bg-zinc-100 rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : temas.length > 0 ? (
          <>
            <h2 className="text-lg font-bold text-zinc-900 tracking-tight">
              Temas del módulo
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {temas.map((tema, i) => (
                <motion.div
                  key={tema.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    to={`/pai/${mod.slug}/${tema.id}`}
                    className="group card p-5 hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5 block"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <span className="text-2xl">{tema.icono}</span>
                      <div className="flex items-center gap-2">
                        {tema.generadoPorIA && (
                          <span className="text-[9px] text-zinc-400 font-medium">✨ IA</span>
                        )}
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${c.badge}`}>
                          Tema {tema.orden}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-bold text-zinc-900 text-sm leading-snug mb-1.5 group-hover:text-primary-700 transition-colors">
                      {tema.titulo}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-3">
                      {tema.resumen}
                    </p>
                    <div className="flex items-center justify-between pt-2.5 border-t border-zinc-100">
                      <div className="flex items-center gap-3 text-[11px] text-zinc-400">
                        <span className="flex items-center gap-1">
                          <Star weight="fill" className="w-3 h-3 text-amber-400" />
                          {tema.puntosClave.length} puntos clave
                        </span>
                        {tema.mnemotecnia.items.length > 0 && (
                          <span className="flex items-center gap-1">
                            <CheckCircle weight="fill" className="w-3 h-3 text-primary-400" />
                            {tema.mnemotecnia.items.length} mnemotecnia{tema.mnemotecnia.items.length !== 1 ? 's' : ''}
                          </span>
                        )}
                      </div>
                      <ArrowRight weight="bold" className="w-4 h-4 text-zinc-300 group-hover:text-primary-500 transition-colors" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <div className="card p-8 text-center">
            <p className="text-zinc-400 text-sm">Contenido no disponible aún para este módulo.</p>
          </div>
        )}
      </div>
    </main>
  )
}
