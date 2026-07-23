/* Detalle de Materia — Ruta /plan/:subjectId
 *
 * Agnóstico a la escuela: localiza la materia en cualquier plan del registro
 * vía findSubject. Preserva el enlace cruzado hacia el visor 3D y la
 * terminología MedLex (SISTEMA_LABELS / SISTEMA_COLORS), heredado de la
 * arquitectura LMGC ↔ MedLex. */

import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft, Cube, BookOpenText, Lightning, BookOpen, Flask,
} from '@phosphor-icons/react'
import { findSubject, sistemasDeMateria } from '../data/plans'
import { medlexTerms, SISTEMA_LABELS, SISTEMA_COLORS } from '../data/medlex-terms'

export function SubjectDetail() {
  const { subjectId } = useParams<{ subjectId: string }>()
  const navigate = useNavigate()
  const found = findSubject(subjectId ?? '')

  useEffect(() => {
    if (!found) navigate('/plan')
  }, [found, navigate])

  if (!found) return null

  const { plan, period, subject } = found
  const sistemas = sistemasDeMateria(subject.tags)
  const primarySistema = sistemas[0] ?? null

  // Términos MedLex relacionados (primeros 9) — enlace cruzado deliberado.
  const relatedTerms = primarySistema
    ? medlexTerms.filter(t => t.sistema === primarySistema).slice(0, 9)
    : []

  return (
    <div className="flex-1 flex flex-col pb-20 md:pb-0">

      {/* ── Hero de la materia ─────────────────────────────── */}
      <div className="bg-gradient-to-br from-zinc-900 to-zinc-700 text-white relative overflow-hidden">
        <svg aria-hidden className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="dots-subj" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-subj)" />
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex items-center gap-2 mb-5 text-white/60 text-sm">
            <Link to="/plan" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <ArrowLeft weight="bold" className="w-4 h-4" />
              Plan de Estudios
            </Link>
            <span>/</span>
            <span className="text-white/80">{plan.schoolShort}</span>
            <span>/</span>
            <span className="text-white font-medium">{period.label}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-white/60 border border-white/20 px-2.5 py-1 rounded-full">
              {plan.school}
            </span>
            {subject.hasLab && (
              <span className="flex items-center gap-1 text-[10px] font-bold bg-teal-400 text-teal-900 px-2.5 py-1 rounded-full">
                <Flask weight="fill" className="w-3 h-3" /> Laboratorio
              </span>
            )}
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-none mb-2">
            {subject.name}
          </h1>
          {(subject.tags ?? []).length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {(subject.tags ?? []).map(t => (
                <span key={t} className="text-[10px] font-semibold text-white/70 bg-white/10 px-2 py-0.5 rounded-full">
                  {SISTEMA_LABELS[t] ?? t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Contenido ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6 w-full">

        {/* Accesos rápidos: visor 3D + MedLex (para sistemas corporales) */}
        {primarySistema && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
              <Link
                to={`/anatomia-3d?sistema=${primarySistema}`}
                className="card p-5 flex items-center gap-4 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Cube weight="fill" className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-zinc-900 text-sm mb-0.5">Visor 3D Anatómico</p>
                  <p className="text-xs text-zinc-400">
                    Explora la anatomía del sistema {SISTEMA_LABELS[primarySistema] ?? primarySistema} en 3D interactivo.
                  </p>
                </div>
                <ArrowLeft weight="bold" className="w-4 h-4 text-zinc-400 rotate-180 group-hover:text-primary-600 transition-colors" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Link
                to={`/terminologia?sistema=${primarySistema}`}
                className="card p-5 flex items-center gap-4 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <BookOpenText weight="fill" className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-zinc-900 text-sm mb-0.5">Terminología MedLex</p>
                  <p className="text-xs text-zinc-400">
                    Prefijos, sufijos y raíces del sistema {SISTEMA_LABELS[primarySistema] ?? primarySistema}.
                  </p>
                </div>
                <ArrowLeft weight="bold" className="w-4 h-4 text-zinc-400 rotate-180 group-hover:text-indigo-600 transition-colors" />
              </Link>
            </motion.div>
          </div>
        )}

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
                to={`/terminologia?sistema=${primarySistema}`}
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
                  <Link
                    to={`/terminologia/${term.id}`}
                    key={term.id}
                    className={`rounded-xl border px-3 py-2.5 transition-all hover:shadow-card-hover ${sc.bg} ${sc.border}`}
                  >
                    <p className={`font-bold text-sm font-mono ${sc.text}`}>{term.termino}</p>
                    <p className="text-xs text-zinc-600 mt-0.5">{term.significado}</p>
                    <p className="text-[10px] text-zinc-400 mt-1">{term.ejemplos.slice(0, 2).join(' · ')}</p>
                  </Link>
                )
              })}
            </div>
          </motion.section>
        )}

        {/* Secciones placeholder */}
        {[
          { icon: <BookOpen weight="fill" className="w-5 h-5 text-zinc-400" />, title: 'Contenido teórico', msg: 'Notas y apuntes de la materia próximamente. El contenido se puede añadir en formato Markdown.' },
          { icon: <Lightning weight="fill" className="w-5 h-5 text-zinc-400" />, title: 'Evaluación', msg: 'Quiz de autoevaluación de la materia. Próximamente disponible.' },
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
