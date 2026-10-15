/* Atlas — Ruta /atlas
 *
 * Cuadrícula de pósters agrupada por materia, en orden fijo (como el plan;
 * dentro de cada materia, en el orden de las semanas). La miniatura vertical
 * es la protagonista; debajo, solo el título y el estado. Filtro por materia
 * con conteo (?materia=anatomia), sin materias vacías. */

import { Link, useSearchParams } from 'react-router-dom'
import { CheckCircle } from '@phosphor-icons/react'
import { atlasTopics, type AtlasTopic } from '../data/atlas-topics'
import { useAtlasStore } from '../store/atlasStore'
import {
  ATLAS_CATEGORY_ORDER, ATLAS_CATEGORY_LABELS, MASTERY_LABELS, atlasThumb, type AtlasCategory,
} from './atlasShared'

const GROUPS = ATLAS_CATEGORY_ORDER
  .map((cat) => ({ cat, topics: atlasTopics.filter((t) => t.category === cat) }))
  .filter((g) => g.topics.length > 0)

export function Atlas() {
  const [params, setParams] = useSearchParams()
  const getMastery = useAtlasStore((s) => s.getMastery)

  const selected = params.get('materia') as AtlasCategory | null
  const active = selected && GROUPS.some((g) => g.cat === selected) ? selected : null
  const visible = active ? GROUPS.filter((g) => g.cat === active) : GROUPS

  const setFilter = (cat: AtlasCategory | null) => {
    setParams(cat ? { materia: cat } : {}, { replace: true })
  }

  const chip = (on: boolean) =>
    `inline-flex items-center gap-2 h-10 px-4 rounded-full text-[0.9375rem] whitespace-nowrap transition-colors flex-shrink-0
     ${on ? 'bg-primary text-primary-fg' : 'bg-surface border border-zinc-200 text-zinc-700 hover:border-zinc-300'}`

  return (
    <main className="flex-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-12 flex flex-col gap-8">
        <header>
          <h1 className="font-display font-light text-[2.25rem] sm:text-[2.75rem] leading-[1.05] tracking-[-0.025em] text-zinc-900">
            Atlas visual
          </h1>
          <p className="mt-2 text-base text-zinc-500">
            {atlasTopics.length} pósters anotados para repasar con imágenes
          </p>
        </header>

        {/* Filtro por materia */}
        <div className="flex gap-2 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 pb-1 scrollbar-hide" role="group" aria-label="Filtrar por materia">
          <button onClick={() => setFilter(null)} aria-pressed={!active} className={chip(!active)}>
            Todas <span className={!active ? 'opacity-80' : 'text-zinc-500'}>{atlasTopics.length}</span>
          </button>
          {GROUPS.map((g) => (
            <button key={g.cat} onClick={() => setFilter(g.cat)} aria-pressed={active === g.cat} className={chip(active === g.cat)}>
              {ATLAS_CATEGORY_LABELS[g.cat]}
              <span className={active === g.cat ? 'opacity-80' : 'text-zinc-500'}>{g.topics.length}</span>
            </button>
          ))}
        </div>

        {visible.map((g) => (
          <section key={g.cat} className="flex flex-col gap-4" aria-labelledby={`h-${g.cat}`}>
            <h2 id={`h-${g.cat}`} className="font-display text-2xl font-light text-zinc-900 flex items-baseline gap-3">
              {ATLAS_CATEGORY_LABELS[g.cat]}
              <span className="text-sm text-zinc-500 font-normal">{g.topics.length} pósters</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
              {g.topics.map((t) => (
                <PosterCard key={t.id} topic={t} mastery={getMastery(t.id)} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}

function PosterCard({ topic, mastery }: { topic: AtlasTopic; mastery: 0 | 1 | 2 | 3 }) {
  return (
    <Link
      to={`/atlas/${topic.id}`}
      className="group card card-interactive p-2 flex flex-col gap-2.5"
    >
      <span className="block aspect-[3/4] rounded-[14px] overflow-hidden bg-white">
        <img
          src={atlasThumb(topic.imagePath)}
          alt=""
          loading="lazy"
          decoding="async"
          width={480}
          height={720}
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </span>
      <span className="px-1.5 pb-1.5 flex flex-col gap-1">
        <span className="text-[0.9375rem] leading-snug text-zinc-900 line-clamp-2">{topic.title}</span>
        <span className={`flex items-center gap-1.5 text-xs ${mastery === 3 ? 'text-primary' : 'text-zinc-500'}`}>
          {mastery === 3
            ? <CheckCircle weight="fill" className="w-3.5 h-3.5" />
            : <span className={`w-1.5 h-1.5 rounded-full ${mastery === 0 ? 'bg-zinc-300' : mastery === 1 ? 'bg-zinc-500' : 'bg-primary'}`} aria-hidden="true" />}
          {MASTERY_LABELS[mastery]} · {topic.questions.length} preguntas
        </span>
      </span>
    </Link>
  )
}
