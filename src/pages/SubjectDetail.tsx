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
  ArrowLeft, ArrowRight, Cube, BookOpenText, Lightning, BookOpen, Flask,
  GraduationCap, Clock, Books, LinkSimple, ListChecks, Target, CalendarCheck,
  FilePdf, DownloadSimple, Translate,
} from '@phosphor-icons/react'
import { findSubject, sistemasDeMateria, LIBRARY_BASE } from '../data/plans'
import { medlexTerms, SISTEMA_LABELS, SISTEMA_COLORS } from '../data/medlex-terms'
import { topics } from '../data/topics'
import { questions } from '../data/quizzes'
import { TOPIC_COLORS } from '../data/colors'
import { useProgress } from '../store/useProgress'
import type { Topic } from '../types'

const topicById: Record<string, Topic> = Object.fromEntries(topics.map(t => [t.id, t]))
const resolveTopics = (ids?: string[]): Topic[] => (ids ?? []).map(id => topicById[id]).filter(Boolean)
const quizCount = (id: string) => questions.filter(q => q.topicId === id).length

export function SubjectDetail() {
  const { subjectId } = useParams<{ subjectId: string }>()
  const navigate = useNavigate()
  const found = findSubject(subjectId ?? '')

  useEffect(() => {
    if (!found) navigate('/plan')
  }, [found, navigate])

  if (!found) return null

  const { plan, period, subject } = found
  const content = subject.content
  const { getSectionsRead } = useProgress()
  const subjectTopics = resolveTopics(subject.topicIds)
  const sistemas = sistemasDeMateria(subject.tags)
  const primarySistema = sistemas[0] ?? null
  // Inglés Médico enlaza a MedEN (vocabulario EN↔ES), como Anatomía enlaza a MedLex.
  const isIngles = (subject.tags ?? []).includes('ingles')

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
            <span className="text-[0.625rem] font-bold uppercase tracking-wider text-white/60 border border-white/20 px-2.5 py-1 rounded-full">
              {plan.school}
            </span>
            {subject.code && (
              <span className="text-[0.625rem] font-bold font-mono tracking-wider text-white/90 bg-white/10 px-2.5 py-1 rounded-full">
                {subject.code}
              </span>
            )}
            {subject.hasLab && (
              <span className="flex items-center gap-1 text-[0.625rem] font-bold bg-teal-400 text-teal-900 px-2.5 py-1 rounded-full">
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
                <span key={t} className="text-[0.625rem] font-semibold text-white/70 bg-white/10 px-2 py-0.5 rounded-full">
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

        {/* Acceso rápido a MedEN (Inglés Médico) */}
        {isIngles && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
            <Link
              to="/vocabulario?semana=1"
              className="card p-5 flex items-center gap-4 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center flex-shrink-0">
                <Translate weight="fill" className="w-6 h-6 text-pink-600" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-zinc-900 text-sm mb-0.5">Vocabulario MedEN</p>
                <p className="text-xs text-zinc-400">
                  Términos, abreviaturas y verbos frasales en inglés con su equivalencia en español.
                </p>
              </div>
              <ArrowLeft weight="bold" className="w-4 h-4 text-zinc-400 rotate-180 group-hover:text-pink-600 transition-colors" />
            </Link>
          </motion.div>
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
                    <p className="text-[0.625rem] text-zinc-400 mt-1">{term.ejemplos.slice(0, 2).join(' · ')}</p>
                  </Link>
                )
              })}
            </div>
          </motion.section>
        )}

        {content ? (
          <>
            {/* ── Ficha oficial ─────────────────────────────── */}
            {(content.credits != null || content.teacherHours != null || content.area || content.modality) && (
              <motion.section
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}
                className="card p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap weight="fill" className="w-5 h-5 text-primary-600" />
                  <h2 className="font-bold text-zinc-900">Ficha oficial UAD</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {content.credits != null && (
                    <FichaStat label="Créditos" value={String(content.credits)} />
                  )}
                  {content.teacherHours != null && (
                    <FichaStat label="Horas docente" value={String(content.teacherHours)} />
                  )}
                  {content.independentHours != null && (
                    <FichaStat label="Horas indep." value={String(content.independentHours)} />
                  )}
                  {content.area && <FichaStat label="Área" value={content.area} />}
                </div>
                {content.modality && (
                  <p className="mt-4 flex items-center gap-1.5 text-xs text-zinc-500">
                    <Clock weight="fill" className="w-3.5 h-3.5" /> {content.modality}
                  </p>
                )}
              </motion.section>
            )}

            {/* ── Descripción + competencia ─────────────────── */}
            {(content.description || content.competencia) && (
              <motion.section
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }}
                className="card p-6 space-y-4"
              >
                <div className="flex items-center gap-2">
                  <BookOpen weight="fill" className="w-5 h-5 text-zinc-500" />
                  <h2 className="font-bold text-zinc-900">Descripción</h2>
                </div>
                {content.description && (
                  <p className="text-sm text-zinc-600 leading-relaxed">{content.description}</p>
                )}
                {content.competencia && (
                  <div className="rounded-xl bg-primary-50 border border-primary-100 p-4">
                    <p className="flex items-center gap-1.5 text-[0.6875rem] font-bold uppercase tracking-wider text-primary-700 mb-1.5">
                      <Target weight="fill" className="w-3.5 h-3.5" /> Unidad de competencia
                    </p>
                    <p className="text-sm text-primary-900/80 leading-relaxed">{content.competencia}</p>
                  </div>
                )}
              </motion.section>
            )}

            {/* ── Guías de estudio (Topics navegables) ──────── */}
            {subjectTopics.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}
                className="card p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap weight="fill" className="w-5 h-5 text-primary-600" />
                  <h2 className="font-bold text-zinc-900">Guías de estudio</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {subjectTopics.map(t => (
                    <StudyTopicCard key={t.id} topic={t} read={getSectionsRead(t.id).length} />
                  ))}
                </div>
              </motion.section>
            )}

            {/* ── Plan semanal (contenido en curso) ─────────── */}
            {content.semanas && content.semanas.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}
                className="card p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <CalendarCheck weight="fill" className="w-5 h-5 text-emerald-600" />
                  <h2 className="font-bold text-zinc-900">Plan semanal</h2>
                </div>
                <div className="space-y-3">
                  {content.semanas.map(sem => (
                    <div key={sem.number} className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="flex-shrink-0 text-[0.6875rem] font-bold text-white bg-emerald-600 px-2 py-0.5 rounded-full">
                          Semana {sem.number}
                        </span>
                        <p className="font-semibold text-sm text-zinc-900">{sem.title}</p>
                        {sem.estado === 'adelanto' && (
                          <span
                            title="Contenido tomado del libro de texto, aún no impartido en clase."
                            className="flex-shrink-0 text-[0.625rem] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-full"
                          >
                            Adelanto
                          </span>
                        )}
                      </div>
                      {sem.competencia && (
                        <p className="text-xs text-zinc-600 leading-relaxed mt-2">
                          <span className="font-semibold text-emerald-700">Competencia · </span>
                          {sem.competencia}
                        </p>
                      )}
                      {sem.temas && sem.temas.length > 0 && (
                        <ul className="mt-2.5 flex flex-wrap gap-1.5">
                          {sem.temas.map(tema => (
                            <li key={tema} className="text-[0.6875rem] font-medium text-emerald-800 bg-white border border-emerald-100 px-2 py-0.5 rounded-full">
                              {tema}
                            </li>
                          ))}
                        </ul>
                      )}
                      {resolveTopics(sem.topicIds).length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {resolveTopics(sem.topicIds).map(t => (
                            <Link
                              key={t.id}
                              to={`/topic/${t.id}`}
                              className="inline-flex items-center gap-1.5 text-[0.6875rem] font-semibold text-white bg-emerald-600 hover:bg-emerald-700 px-2.5 py-1 rounded-full transition-colors"
                            >
                              <BookOpen weight="bold" className="w-3 h-3" /> {t.title}
                            </Link>
                          ))}
                        </div>
                      )}
                      {sem.fuentes && sem.fuentes.length > 0 && (
                        <div className="mt-3 space-y-1.5">
                          <p className="text-[0.6875rem] font-bold uppercase tracking-wider text-emerald-700">Lecturas</p>
                          {sem.fuentes.map((f, i) => {
                            const inner = (
                              <>
                                <FilePdf weight="fill" className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span className="leading-snug">
                                  <span className="font-semibold text-zinc-800">{f.title}</span>
                                  {f.nota && <span className="text-zinc-500"> — {f.nota}</span>}
                                  {f.paginas && (
                                    <span className="block text-[0.6875rem] text-emerald-700 font-medium">{f.paginas}</span>
                                  )}
                                </span>
                              </>
                            )
                            const cls = 'flex items-start gap-2 text-xs bg-white border border-emerald-100 rounded-lg px-2.5 py-1.5'
                            return f.file ? (
                              <a
                                key={i}
                                href={`${LIBRARY_BASE}/${subject.id}/${f.file}`}
                                target="_blank"
                                rel="noreferrer"
                                className={`${cls} hover:border-emerald-300 hover:shadow-sm transition-all`}
                              >
                                {inner}
                              </a>
                            ) : (
                              <div key={i} className={cls}>{inner}</div>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* ── Temario / contenido temático ──────────────── */}
            {content.temario && content.temario.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="card p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <ListChecks weight="fill" className="w-5 h-5 text-indigo-600" />
                  <h2 className="font-bold text-zinc-900">Contenido temático</h2>
                </div>
                <div className="space-y-4">
                  {content.temario.map(unit => (
                    <div key={unit.title} className="border-l-2 border-indigo-200 pl-4">
                      <p className="font-semibold text-sm text-zinc-900">{unit.title}</p>
                      {unit.items.length > 0 && (
                        <ul className="mt-1.5 space-y-1">
                          {unit.items.map(item => (
                            <li key={item} className="text-xs text-zinc-500 flex gap-2">
                              <span className="text-indigo-300 mt-0.5">·</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* ── Bibliografía ──────────────────────────────── */}
            {content.bibliografia && content.bibliografia.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34 }}
                className="card p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Books weight="fill" className="w-5 h-5 text-amber-600" />
                  <h2 className="font-bold text-zinc-900">Bibliografía</h2>
                </div>
                <ul className="space-y-2.5">
                  {content.bibliografia.map(ref => (
                    <li key={`${ref.title}-${ref.author ?? ''}`} className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-sm">
                      {ref.tipo && (
                        <span className={`text-[0.5625rem] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${ref.tipo === 'básica' ? 'bg-amber-100 text-amber-700' : 'bg-zinc-100 text-zinc-500'}`}>
                          {ref.tipo}
                        </span>
                      )}
                      <span className="font-semibold text-zinc-800">{ref.title}</span>
                      {ref.author && <span className="text-zinc-500 text-xs">· {ref.author}</span>}
                      {(ref.editorial || ref.year) && (
                        <span className="text-zinc-400 text-xs">
                          {[ref.editorial, ref.year].filter(Boolean).join(', ')}
                        </span>
                      )}
                      {ref.file && (
                        <a
                          href={`${LIBRARY_BASE}/${subject.id}/${encodeURIComponent(ref.file)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[0.6875rem] font-semibold text-rose-700 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded-full hover:bg-rose-100 transition-colors"
                        >
                          <FilePdf weight="fill" className="w-3 h-3" /> PDF
                          <DownloadSimple weight="bold" className="w-3 h-3" />
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* ── Materiales y lecturas (PDF privados) ──────── */}
            {content.materiales && content.materiales.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.36 }}
                className="card p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Books weight="fill" className="w-5 h-5 text-rose-600" />
                  <h2 className="font-bold text-zinc-900">Materiales y lecturas</h2>
                </div>
                <ul className="divide-y divide-zinc-100">
                  {content.materiales.map(m => (
                    <li key={m.file} className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0">
                      {m.kind && (
                        <span className="flex-shrink-0 text-[0.5625rem] font-bold uppercase tracking-wider text-zinc-500 bg-zinc-100 px-1.5 py-0.5 rounded w-20 text-center">
                          {m.kind}
                        </span>
                      )}
                      <span className="flex-1 text-sm text-zinc-800">{m.title}</span>
                      <a
                        href={`${LIBRARY_BASE}/${subject.id}/${encodeURIComponent(m.file)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 inline-flex items-center gap-1 text-[0.6875rem] font-semibold text-rose-700 bg-rose-50 border border-rose-100 px-2 py-1 rounded-full hover:bg-rose-100 transition-colors"
                      >
                        <FilePdf weight="fill" className="w-3 h-3" /> PDF
                        <DownloadSimple weight="bold" className="w-3 h-3" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* ── Recursos digitales ────────────────────────── */}
            {content.recursos && content.recursos.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }}
                className="card p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <LinkSimple weight="bold" className="w-5 h-5 text-teal-600" />
                  <h2 className="font-bold text-zinc-900">Recursos digitales</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {content.recursos.map(r => (
                    <a
                      key={r.url}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-100 px-3 py-1.5 rounded-full hover:bg-teal-100 transition-colors"
                    >
                      {r.label}
                    </a>
                  ))}
                </div>
              </motion.section>
            )}
          </>
        ) : (
          /* Secciones placeholder — materias sin ficha cargada aún */
          [
            { icon: <BookOpen weight="fill" className="w-5 h-5 text-zinc-400" />, title: 'Contenido teórico', msg: 'Ficha y temario oficiales de la materia próximamente.' },
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
          ))
        )}
      </div>
    </div>
  )
}

function FichaStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-zinc-50 border border-zinc-100 px-3 py-2.5">
      <p className="text-[0.625rem] font-bold uppercase tracking-wider text-zinc-400">{label}</p>
      <p className="text-sm font-bold text-zinc-900 mt-0.5">{value}</p>
    </div>
  )
}

/* Tarjeta de Topic con progreso + doble acción Estudiar / Quiz (patrón de
 * Progress.tsx). "Estudiar" primero: leer antes de examinarse. */
function StudyTopicCard({ topic, read }: { topic: Topic; read: number }) {
  const colors = TOPIC_COLORS[topic.colorKey]
  const total = topic.sections.length
  const pct = total > 0 ? Math.round((read / total) * 100) : 0
  const qCount = quizCount(topic.id)
  return (
    <div className="rounded-xl border border-zinc-100 p-3.5 flex flex-col gap-2.5 bg-zinc-50/60">
      <div className="flex items-start gap-2 min-w-0">
        <span className="text-xl flex-shrink-0">{topic.emoji}</span>
        <div className="min-w-0">
          <p className="font-bold text-sm text-zinc-900 leading-snug">{topic.title}</p>
          <p className="text-xs text-zinc-400 line-clamp-2 mt-0.5">{topic.subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-zinc-200 rounded-full overflow-hidden">
          <div className={`h-full ${colors.dot} rounded-full transition-all`} style={{ width: `${pct}%` }} />
        </div>
        <span className="text-[0.625rem] font-semibold text-zinc-400 flex-shrink-0">{read}/{total}</span>
      </div>
      <div className="flex items-center gap-2">
        <Link
          to={`/topic/${topic.id}`}
          className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
        >
          <BookOpen weight="bold" className="w-3.5 h-3.5" /> Estudiar
        </Link>
        {qCount > 0 && (
          <Link
            to={`/quiz/${topic.id}`}
            className={`flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl ${colors.badge} transition-colors`}
          >
            Quiz <ArrowRight weight="bold" className="w-3 h-3" />
          </Link>
        )}
      </div>
    </div>
  )
}
