/* Página central de cada materia — ruta /plan/:subjectId
 *
 * Reúne todo lo de la materia en pestañas (?tab=…):
 *   Semanas · Temas · Practicar · Consulta · Materiales · Ficha oficial.
 * Arriba quedan los accesos al visor 3D, MedLex y EnLex según la materia.
 * Consulta (láminas y fichas) carga sus datos solo al abrir la pestaña. */

import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate, useSearchParams } from 'react-router-dom'
import {
  ArrowLeft, ArrowRight, Cube, BookOpenText, BookOpen, Flask, Clock, Target,
  FilePdf, DownloadSimple, Translate, Exam, Stethoscope, Image as ImageIcon,
} from '@phosphor-icons/react'
import { findSubject, sistemasDeMateria, libraryUrl, type Subject } from '../data/plans'
import { medlexTerms, SISTEMA_LABELS, SISTEMA_COLORS } from '../data/medlex-terms'
import { topicIndex as topics, examDecks, type TopicSummary } from '../data/generated/topicIndex'
import { agruparPorMateria } from '../data/agrupar'
import { TOPIC_COLORS } from '../data/colors'
import { useProgress } from '../store/useProgress'

const topicById: Record<string, TopicSummary> = Object.fromEntries(topics.map(t => [t.id, t]))
const resolveTopics = (ids?: string[]): TopicSummary[] => (ids ?? []).map(id => topicById[id]).filter(Boolean)

type TabId = 'semanas' | 'temas' | 'practicar' | 'consulta' | 'materiales' | 'ficha'

export function SubjectDetail() {
  const { subjectId } = useParams<{ subjectId: string }>()
  const navigate = useNavigate()
  const [params, setParams] = useSearchParams()
  const found = findSubject(subjectId ?? '')
  const { getSectionsRead } = useProgress()

  useEffect(() => {
    if (!found) navigate('/plan')
  }, [found, navigate])

  if (!found) return null

  const { plan, period, subject } = found
  const content = subject.content
  const subjectTopics = topics.filter(t => t.materia === subject.id)
  const grupos = agruparPorMateria(subjectTopics)[0]?.semanas ?? []
  const deck = examDecks.find(d => d.materia === subject.id)
  const sistemas = sistemasDeMateria(subject.tags)
  const primarySistema = sistemas[0] ?? null
  const isIngles = (subject.tags ?? []).includes('ingles')
  const nPreguntas = subjectTopics.reduce((n, t) => n + t.questionCount, 0)

  const tabs: { id: TabId; label: string; show: boolean }[] = [
    { id: 'semanas', label: 'Semanas', show: !!content?.semanas?.length },
    { id: 'temas', label: 'Temas', show: subjectTopics.length > 0 },
    { id: 'practicar', label: 'Practicar', show: nPreguntas > 0 || !!deck },
    { id: 'consulta', label: 'Consulta', show: subjectTopics.length > 0 || !!primarySistema },
    { id: 'materiales', label: 'Materiales', show: !!(content?.materiales?.length || content?.bibliografia?.length || content?.recursos?.length) },
    { id: 'ficha', label: 'Ficha oficial', show: !!content },
  ]
  const visibles = tabs.filter(t => t.show)
  const pedida = params.get('tab') as TabId | null
  const tab: TabId | undefined = visibles.find(t => t.id === pedida)?.id ?? visibles[0]?.id
  const irA = (id: TabId) => {
    const p = new URLSearchParams(params); p.set('tab', id); setParams(p, { replace: true })
  }

  return (
    <div className="flex-1 flex flex-col pb-20 md:pb-0">
      {/* ── Encabezado ───────────────────────────────────── */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pt-6">
        <div className="card p-6 sm:p-8 flex flex-col gap-4">
          <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-500" aria-label="Ruta">
            <Link to="/plan" className="inline-flex items-center gap-1.5 hover:text-zinc-900 transition-colors">
              <ArrowLeft weight="regular" className="w-4 h-4" />
              Plan de estudios
            </Link>
            <span className="text-zinc-300" aria-hidden="true">/</span>
            <span>{plan.schoolShort}</span>
            <span className="text-zinc-300" aria-hidden="true">/</span>
            <span className="text-zinc-700">{period.label}</span>
          </nav>

          <h1 className="font-display font-light text-[2rem] sm:text-[2.6rem] leading-[1.08] tracking-[-0.025em] text-zinc-900 text-balance">
            {subject.name}
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-sm">
            {subject.code && <span className="px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700">{subject.code}</span>}
            {subject.hasLab && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-tint text-primary-ink">
                <Flask weight="regular" className="w-3.5 h-3.5" /> Laboratorio
              </span>
            )}
            {subjectTopics.length > 0 && <span className="text-zinc-500">{subjectTopics.length} temas · {nPreguntas} preguntas{deck ? ` · ${deck.semanas.length} exámenes` : ''}</span>}
          </div>

          {/* Accesos según la materia */}
          {(primarySistema || isIngles) && (
            <div className="flex flex-wrap gap-2">
              {primarySistema && (
                <>
                  <QuickLink to={`/anatomia-3d?sistema=${primarySistema}`} icon={<Cube weight="fill" className="w-4 h-4" />} label="Visor 3D" />
                  <QuickLink to={`/terminologia?sistema=${primarySistema}`} icon={<BookOpenText weight="fill" className="w-4 h-4" />} label={`MedLex · ${SISTEMA_LABELS[primarySistema] ?? primarySistema}`} />
                </>
              )}
              {isIngles && <QuickLink to="/vocabulario" icon={<Translate weight="fill" className="w-4 h-4" />} label="Vocabulario EnLex" />}
            </div>
          )}
        </div>

        {/* Pestañas */}
        {visibles.length > 0 && (
          <div role="tablist" aria-label="Secciones de la materia" className="flex gap-1 overflow-x-auto mt-4 -mx-1 px-1 pb-1">
            {visibles.map(t => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => irA(t.id)}
                className={`flex-shrink-0 text-sm font-semibold px-4 py-2 rounded-xl transition-colors ${
                  tab === t.id ? 'bg-primary text-primary-fg' : 'text-zinc-600 hover:bg-zinc-100'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Contenido de la pestaña ──────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6 w-full">
        {!content && subjectTopics.length === 0 && (
          <section className="card p-6">
            <div className="rounded-xl bg-zinc-50 border-2 border-dashed border-zinc-200 p-6 text-center">
              <p className="text-sm text-zinc-400">El contenido de esta materia se cargará cuando empiece el semestre.</p>
            </div>
          </section>
        )}

        {tab === 'semanas' && content?.semanas && <Semanas subject={subject} />}

        {tab === 'temas' && (
          <div className="space-y-6">
            {grupos.map(w => (
              <section key={w.n ?? 'repasos'}>
                <h2 className="text-xs font-bold text-zinc-400 mb-2">
                  {w.n !== null ? `Semana ${w.n}` : w.titulo}{w.n !== null && w.titulo ? <span className="font-medium"> · {w.titulo}</span> : null}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {w.temas.map(t => <StudyTopicCard key={t.id} topic={t} read={getSectionsRead(t.id).length} />)}
                </div>
              </section>
            ))}
          </div>
        )}

        {tab === 'practicar' && <Practicar materia={subject.id} grupos={grupos} />}

        {tab === 'consulta' && <Consulta topicIds={subjectTopics.map(t => t.id)} sistema={primarySistema} />}

        {tab === 'materiales' && content && <Materiales subject={subject} />}

        {tab === 'ficha' && content && <FichaOficial subject={subject} />}
      </div>
    </div>
  )
}

function QuickLink({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  return (
    <Link to={to} className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition-colors">
      {icon}{label}
    </Link>
  )
}

/* ── Semanas: el plan semanal con temas y lecturas ───────────── */
function Semanas({ subject }: { subject: Subject }) {
  const semanas = subject.content?.semanas ?? []
  return (
    <div className="space-y-3">
      {semanas.map(sem => {
        const weekTopics = resolveTopics(sem.topicIds)
        return (
          <section key={sem.number} className="card p-5">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="flex-shrink-0 text-[0.6875rem] font-bold text-white bg-emerald-600 px-2 py-0.5 rounded-full">Semana {sem.number}</span>
              <h2 className="font-semibold text-sm text-zinc-900">{sem.title}</h2>
            </div>
            {sem.competencia && (
              <p className="text-xs text-zinc-600 leading-relaxed mt-2">
                <span className="font-semibold text-emerald-700 dark:text-emerald-300">Competencia · </span>{sem.competencia}
              </p>
            )}
            {weekTopics.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {weekTopics.map(t => (
                  <Link key={t.id} to={`/topic/${t.id}`}
                    className="inline-flex items-center gap-1.5 text-[0.6875rem] font-semibold text-white bg-emerald-600 hover:bg-emerald-700 px-2.5 py-1 rounded-full transition-colors">
                    <BookOpen weight="bold" className="w-3 h-3" /> {t.title}
                  </Link>
                ))}
              </div>
            )}
            {sem.temas && sem.temas.length > 0 && (
              <details className="mt-3 group">
                <summary className="text-xs font-semibold text-zinc-500 cursor-pointer hover:text-zinc-800">Temario de las clases</summary>
                <ul className="mt-2 space-y-1">
                  {sem.temas.map(tema => (
                    <li key={tema} className="text-xs text-zinc-600 leading-relaxed flex gap-2"><span className="text-emerald-500">·</span><span>{tema}</span></li>
                  ))}
                </ul>
              </details>
            )}
            {sem.fuentes && sem.fuentes.length > 0 && (
              <div className="mt-3 space-y-1.5">
                <p className="text-[0.6875rem] font-bold text-emerald-700 dark:text-emerald-300">Lecturas</p>
                {sem.fuentes.map((f, i) => {
                  const inner = (
                    <>
                      <FilePdf weight="fill" className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">
                        <span className="font-semibold text-zinc-800">{f.title}</span>
                        {f.nota && <span className="text-zinc-500">: {f.nota}</span>}
                        {f.paginas && <span className="block text-[0.6875rem] text-emerald-700 dark:text-emerald-300 font-medium">{f.paginas}</span>}
                      </span>
                    </>
                  )
                  const cls = 'flex items-start gap-2 text-xs bg-surface border border-emerald-100 dark:border-emerald-500/25 rounded-lg px-2.5 py-1.5'
                  return f.file ? (
                    <a key={i} href={libraryUrl(subject.id, f.file)} target="_blank" rel="noreferrer" className={`${cls} hover:border-emerald-300 hover:shadow-sm transition-all`}>{inner}</a>
                  ) : (
                    <div key={i} className={cls}>{inner}</div>
                  )
                })}
              </div>
            )}
          </section>
        )
      })}
    </div>
  )
}

/* ── Practicar: exámenes reales y quizzes por tema ───────────── */
function Practicar({ materia, grupos }: { materia: string; grupos: ReturnType<typeof agruparPorMateria>[number]['semanas'] }) {
  const { getBestScore } = useProgress()
  const deck = examDecks.find(d => d.materia === materia)
  return (
    <div className="space-y-6">
      {deck && (
        <section className="card p-5">
          <div className="flex items-center gap-2 mb-3">
            <Exam weight="duotone" className="w-5 h-5 text-zinc-500" />
            <h2 className="font-display font-normal text-zinc-900 text-lg">Exámenes semanales</h2>
            <span className="text-xs text-zinc-400">{deck.total} preguntas</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {deck.semanas.map(w => {
              const best = getBestScore(`examen-${materia}-s${w.n}`)
              return (
                <Link key={w.n} to={`/quiz/examen-${materia}-s${w.n}`}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-xl ${TOPIC_COLORS[deck.colorKey].badge} hover:opacity-80`}>
                  Semana {w.n} · {best !== null ? `${best}%` : `${w.count} p.`}
                </Link>
              )
            })}
            <Link to={`/quiz/examen-${materia}`} className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-primary text-primary-fg hover:bg-primary-hover inline-flex items-center gap-1">
              Todo el semestre <ArrowRight weight="bold" className="w-3 h-3" />
            </Link>
          </div>
        </section>
      )}
      {grupos.map(w => (
        <section key={w.n ?? 'repasos'}>
          <h2 className="text-xs font-bold text-zinc-400 mb-2">{w.n !== null ? `Semana ${w.n}` : w.titulo}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {w.temas.filter(t => t.questionCount > 0).map(t => {
              const best = getBestScore(t.id)
              return (
                <Link key={t.id} to={`/quiz/${t.id}`} className="card px-4 py-3 flex items-center gap-3 hover:shadow-card-hover transition-shadow">
                  <span className="text-xl">{t.emoji}</span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-sm font-semibold text-zinc-900 leading-snug truncate">{t.title}</span>
                    <span className="block text-xs text-zinc-400">{t.questionCount} preguntas{best !== null ? ` · mejor ${best}%` : ''}</span>
                  </span>
                  <ArrowRight weight="bold" className="w-3.5 h-3.5 text-zinc-400" />
                </Link>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}

/* ── Consulta: láminas, fichas de patologías y terminología ──── */
type AtlasMini = { id: string; title: string; subtitle: string; emoji: string }
type FichaMini = { id: string; title: string; aka?: string; ambito?: string }

function Consulta({ topicIds, sistema }: { topicIds: string[]; sistema: string | null }) {
  const [atlas, setAtlas] = useState<AtlasMini[] | null>(null)
  const [fichas, setFichas] = useState<FichaMini[] | null>(null)
  const clave = topicIds.join(',')

  useEffect(() => {
    let vivo = true
    const propios = new Set(clave.split(','))
    import('../data/atlas-topics').then(({ atlasTopics }) => {
      if (!vivo) return
      setAtlas(atlasTopics
        .filter(a => propios.has(a.id) || (a.relatedTopicIds ?? []).some(id => propios.has(id)))
        .map(a => ({ id: a.id, title: a.title, subtitle: a.subtitle, emoji: a.emoji })))
    })
    import('../data/patologias').then(({ FICHAS }) => {
      if (!vivo) return
      setFichas(FICHAS
        .filter(f => (f.bases ?? []).some(b => propios.has(b.topicId)))
        .map(f => ({ id: f.id, title: f.title, aka: f.aka, ambito: f.ambito })))
    })
    return () => { vivo = false }
  }, [clave])

  const terminos = sistema ? medlexTerms.filter(t => t.sistema === sistema).slice(0, 9) : []

  return (
    <div className="space-y-6">
      <section className="card p-5">
        <div className="flex items-center gap-2 mb-3">
          <ImageIcon weight="duotone" className="w-5 h-5 text-zinc-500" />
          <h2 className="font-display font-normal text-zinc-900 text-lg">Láminas del atlas</h2>
          {atlas && <span className="text-xs text-zinc-400">{atlas.length}</span>}
        </div>
        {atlas === null ? <p className="text-sm text-zinc-400">Cargando…</p> : atlas.length === 0 ? (
          <p className="text-sm text-zinc-400">Todavía no hay láminas de esta materia.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {atlas.map(a => (
              <Link key={a.id} to={`/atlas/${a.id}`} className="group rounded-xl border border-zinc-200 overflow-hidden hover:shadow-card-hover transition-shadow bg-surface">
                <img src={`/atlas/thumbs/${a.id}.webp`} alt="" loading="lazy" className="w-full aspect-[2/3] object-cover object-top bg-zinc-100" />
                <span className="block px-3 py-2 text-xs font-semibold text-zinc-800 leading-snug">{a.title}</span>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="card p-5">
        <div className="flex items-center gap-2 mb-3">
          <Stethoscope weight="duotone" className="w-5 h-5 text-zinc-500" />
          <h2 className="font-display font-normal text-zinc-900 text-lg">Fichas de patologías</h2>
          {fichas && <span className="text-xs text-zinc-400">{fichas.length}</span>}
        </div>
        {fichas === null ? <p className="text-sm text-zinc-400">Cargando…</p> : fichas.length === 0 ? (
          <p className="text-sm text-zinc-400">Todavía no hay fichas enlazadas a esta materia.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {fichas.map(f => (
              <li key={f.id}>
                <Link to={`/patologias/${f.id}`} className="block rounded-xl border border-zinc-200 px-3 py-2 hover:border-zinc-300 hover:bg-zinc-50 transition-colors">
                  <span className="block text-sm font-semibold text-zinc-900">{f.title}</span>
                  {(f.ambito || f.aka) && <span className="block text-xs text-zinc-500 truncate">{f.ambito ?? f.aka}</span>}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      {terminos.length > 0 && sistema && (
        <section className="card p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <BookOpenText weight="duotone" className="w-5 h-5 text-zinc-500" />
              <h2 className="font-display font-normal text-zinc-900 text-lg">Terminología clave</h2>
            </div>
            <Link to={`/terminologia?sistema=${sistema}`} className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 inline-flex items-center gap-1">
              Ver todos <ArrowRight weight="bold" className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {terminos.map(term => {
              const sc = SISTEMA_COLORS[term.sistema] ?? SISTEMA_COLORS.general
              return (
                <Link to={`/terminologia/${term.id}`} key={term.id} className={`rounded-xl border px-3 py-2.5 transition-all hover:shadow-card-hover ${sc.bg} ${sc.border}`}>
                  <p className={`font-bold text-sm font-mono ${sc.text}`}>{term.termino}</p>
                  <p className="text-xs text-zinc-600 mt-0.5">{term.significado}</p>
                </Link>
              )
            })}
          </div>
        </section>
      )}
    </div>
  )
}

/* ── Materiales: lecturas, bibliografía y recursos ───────────── */
function Materiales({ subject }: { subject: Subject }) {
  const content = subject.content!
  return (
    <div className="space-y-6">
      {content.materiales && content.materiales.length > 0 && (
        <section className="card p-5">
          <h2 className="font-display font-normal text-zinc-900 text-lg mb-3">Materiales y lecturas</h2>
          <ul className="divide-y divide-zinc-100">
            {content.materiales.map(m => (
              <li key={m.file ?? m.title} className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0">
                {m.kind && <span className="flex-shrink-0 text-xs font-bold text-zinc-500 bg-zinc-100 px-1.5 py-0.5 rounded w-20 text-center">{m.kind}</span>}
                <span className="flex-1 text-sm text-zinc-800">{m.title}</span>
                {m.file ? <PdfLink href={libraryUrl(subject.id, m.file)} /> : <span className="flex-shrink-0 text-[0.6875rem] text-zinc-400 px-2 py-1">Sin PDF</span>}
              </li>
            ))}
          </ul>
        </section>
      )}
      {content.bibliografia && content.bibliografia.length > 0 && (
        <section className="card p-5">
          <h2 className="font-display font-normal text-zinc-900 text-lg mb-3">Bibliografía</h2>
          <ul className="space-y-2.5">
            {content.bibliografia.map(ref => (
              <li key={`${ref.title}-${ref.author ?? ''}`} className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-sm">
                {ref.tipo && (
                  <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${ref.tipo === 'básica' ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300' : 'bg-zinc-100 text-zinc-500'}`}>{ref.tipo}</span>
                )}
                <span className="font-semibold text-zinc-800">{ref.title}</span>
                {ref.author && <span className="text-zinc-500 text-xs">· {ref.author}</span>}
                {(ref.editorial || ref.year) && <span className="text-zinc-400 text-xs">{[ref.editorial, ref.year].filter(Boolean).join(', ')}</span>}
                {ref.file && <PdfLink href={libraryUrl(subject.id, ref.file)} />}
              </li>
            ))}
          </ul>
        </section>
      )}
      {content.recursos && content.recursos.length > 0 && (
        <section className="card p-5">
          <h2 className="font-display font-normal text-zinc-900 text-lg mb-3">Recursos digitales</h2>
          <div className="flex flex-wrap gap-2">
            {content.recursos.map(r => {
              const interno = r.url.startsWith('/')
              const cls = 'text-xs font-semibold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-500/15 border border-teal-100 dark:border-teal-500/25 px-3 py-1.5 rounded-full hover:bg-teal-100 dark:hover:bg-teal-500/20 transition-colors'
              return interno
                ? <Link key={r.url} to={r.url} className={cls}>{r.label}</Link>
                : <a key={r.url} href={r.url} target="_blank" rel="noopener noreferrer" className={cls}>{r.label}</a>
            })}
          </div>
        </section>
      )}
    </div>
  )
}

function PdfLink({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="flex-shrink-0 inline-flex items-center gap-1 text-[0.6875rem] font-semibold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-500/15 border border-rose-100 dark:border-rose-500/25 px-2 py-0.5 rounded-full hover:bg-rose-100 dark:hover:bg-rose-500/20 transition-colors">
      <FilePdf weight="fill" className="w-3 h-3" /> PDF <DownloadSimple weight="bold" className="w-3 h-3" />
    </a>
  )
}

/* ── Ficha oficial UAD ───────────────────────────────────────── */
function FichaOficial({ subject }: { subject: Subject }) {
  const content = subject.content!
  return (
    <div className="space-y-6">
      {(content.credits != null || content.teacherHours != null || content.area || content.modality) && (
        <section className="card p-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {content.credits != null && <FichaStat label="Créditos" value={String(content.credits)} />}
            {content.teacherHours != null && <FichaStat label="Horas docente" value={String(content.teacherHours)} />}
            {content.independentHours != null && <FichaStat label="Horas indep." value={String(content.independentHours)} />}
            {content.area && <FichaStat label="Área" value={content.area} />}
          </div>
          {content.modality && (
            <p className="mt-4 flex items-center gap-1.5 text-xs text-zinc-500"><Clock weight="fill" className="w-3.5 h-3.5" /> {content.modality}</p>
          )}
        </section>
      )}
      {(content.description || content.competencia) && (
        <section className="card p-5 space-y-4">
          <h2 className="font-display font-normal text-zinc-900 text-lg">Descripción</h2>
          {content.description && <p className="text-sm text-zinc-600 leading-relaxed">{content.description}</p>}
          {content.competencia && (
            <div className="rounded-xl bg-primary-50 border border-primary-100 p-4">
              <p className="flex items-center gap-1.5 text-[0.6875rem] font-bold text-primary-700 mb-1.5"><Target weight="fill" className="w-3.5 h-3.5" /> Unidad de competencia</p>
              <p className="text-sm text-primary-900/80 leading-relaxed">{content.competencia}</p>
            </div>
          )}
        </section>
      )}
      {content.temario && content.temario.length > 0 && (
        <section className="card p-5">
          <h2 className="font-display font-normal text-zinc-900 text-lg mb-3">Contenido temático</h2>
          <div className="space-y-4">
            {content.temario.map(unit => (
              <div key={unit.title}>
                <p className="font-semibold text-sm text-zinc-900">{unit.title}</p>
                {unit.items.length > 0 && (
                  <ul className="mt-1.5 space-y-1">
                    {unit.items.map(item => (
                      <li key={item} className="text-xs text-zinc-500 flex gap-2"><span className="text-indigo-300 mt-0.5">·</span><span>{item}</span></li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function FichaStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-zinc-50 border border-zinc-100 px-3 py-2.5">
      <p className="text-xs font-bold text-zinc-400">{label}</p>
      <p className="text-sm font-bold text-zinc-900 mt-0.5">{value}</p>
    </div>
  )
}

/* Tarjeta de tema con progreso y doble acción Estudiar / Quiz. */
function StudyTopicCard({ topic, read }: { topic: TopicSummary; read: number }) {
  const colors = TOPIC_COLORS[topic.colorKey]
  const total = topic.sectionCount
  const pct = total > 0 ? Math.round((read / total) * 100) : 0
  return (
    <div className="card p-4 flex flex-col gap-2.5">
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
        <span className="text-xs font-semibold text-zinc-400 flex-shrink-0">{read}/{total}</span>
      </div>
      <div className="flex items-center gap-2 mt-auto">
        <Link to={`/topic/${topic.id}`} className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-primary text-primary-fg hover:bg-primary-hover transition-colors">
          <BookOpen weight="bold" className="w-3.5 h-3.5" /> Estudiar
        </Link>
        {topic.questionCount > 0 && (
          <Link to={`/quiz/${topic.id}`} className={`flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl ${colors.badge} transition-colors`}>
            Quiz <ArrowRight weight="bold" className="w-3 h-3" />
          </Link>
        )}
      </div>
    </div>
  )
}
