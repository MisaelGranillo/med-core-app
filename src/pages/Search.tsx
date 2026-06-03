import { useMemo, useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MagnifyingGlass, ArrowRight } from '@phosphor-icons/react'
import Fuse from 'fuse.js'
import { topics } from '../data/topics'
import { questions } from '../data/quizzes'
import { TOPIC_COLORS } from '../data/colors'

interface FlatItem {
  topicId: string
  topicTitle: string
  topicEmoji: string
  colorKey: string
  sectionId: string
  sectionTitle: string
  content: string
  type: 'section' | 'question'
}

const buildIndex = (): FlatItem[] => {
  const items: FlatItem[] = []

  for (const topic of topics) {
    for (const section of topic.sections) {
      const textParts: string[] = [section.title]

      for (const block of section.blocks) {
        if (block.title) textParts.push(block.title)
        if (block.content) textParts.push(block.content)
        if (block.formula) textParts.push(block.formula)
        if (block.items) textParts.push(...block.items)
        if (block.steps) textParts.push(...block.steps)
        if (block.data) {
          textParts.push(...block.data.headers)
          block.data.rows.forEach((r) => textParts.push(...r))
        }
        if (block.left) textParts.push(block.left.title, ...block.left.items)
        if (block.right) textParts.push(block.right.title, ...block.right.items)
      }

      if (section.keyTerms) textParts.push(...section.keyTerms)

      items.push({
        topicId: topic.id,
        topicTitle: topic.title,
        topicEmoji: topic.emoji,
        colorKey: topic.colorKey,
        sectionId: section.id,
        sectionTitle: section.title,
        content: textParts.join(' '),
        type: 'section',
      })
    }
  }

  for (const q of questions) {
    const topic = topics.find((t) => t.id === q.topicId)
    if (!topic) continue
    items.push({
      topicId: q.topicId,
      topicTitle: topic.title,
      topicEmoji: topic.emoji,
      colorKey: topic.colorKey,
      sectionId: '',
      sectionTitle: 'Pregunta de quiz',
      content: `${q.question} ${q.options.join(' ')} ${q.explanation}`,
      type: 'question',
    })
  }

  return items
}

const flatIndex = buildIndex()

const fuse = new Fuse(flatIndex, {
  keys: ['content', 'sectionTitle', 'topicTitle'],
  threshold: 0.35,
  includeScore: true,
  minMatchCharLength: 2,
})

export function Search() {
  const [params] = useSearchParams()
  const query = params.get('q') ?? ''
  const [inputVal, setInputVal] = useState(query)

  useEffect(() => {
    setInputVal(query)
  }, [query])

  const results = useMemo(() => {
    if (!query.trim()) return []
    return fuse
      .search(query.trim())
      .slice(0, 30)
      .filter((r) => r.item.type === 'section')
  }, [query])

  const grouped = useMemo(() => {
    const map: Record<string, typeof results> = {}
    results.forEach((r) => {
      if (!map[r.item.topicId]) map[r.item.topicId] = []
      map[r.item.topicId].push(r)
    })
    return map
  }, [results])

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-zinc-900 tracking-tight mb-1">
          Búsqueda
        </h1>
        {query && (
          <p className="text-zinc-400 text-sm">
            {results.length} resultado{results.length !== 1 ? 's' : ''} para{' '}
            <span className="text-zinc-700 font-semibold">"{query}"</span>
          </p>
        )}
      </div>

      {!query && (
        <div className="card p-10 text-center text-zinc-400">
          <MagnifyingGlass weight="thin" className="w-12 h-12 mx-auto mb-3 opacity-40" />
          <p className="text-sm">Escribe en la barra de búsqueda para encontrar conceptos, fórmulas y términos.</p>
        </div>
      )}

      {query && results.length === 0 && (
        <div className="card p-10 text-center text-zinc-400">
          <p className="font-semibold text-zinc-600 mb-1">Sin resultados</p>
          <p className="text-sm">
            Intenta con otros términos: "glomérulo", "aldosterona", "ECG", "sarcómero"...
          </p>
        </div>
      )}

      {Object.entries(grouped).map(([topicId, items]) => {
        const topic = topics.find((t) => t.id === topicId)!
        const colors = TOPIC_COLORS[topic.colorKey as keyof typeof TOPIC_COLORS]
        return (
          <div key={topicId} className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">{topic.emoji}</span>
              <h2 className={`text-sm font-bold ${colors.text}`}>{topic.title}</h2>
              <span className="text-xs text-zinc-400">({items.length})</span>
            </div>

            <div className="space-y-2">
              {items.map((r, i) => {
                const section = topics
                  .find((t) => t.id === topicId)
                  ?.sections.find((s) => s.id === r.item.sectionId)

                return (
                  <motion.div
                    key={`${r.item.sectionId}-${i}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      to={`/topic/${topicId}`}
                      className="card p-4 flex items-start justify-between gap-4 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 group block"
                    >
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        <span
                          className={`section-number ${colors.headerBg} flex-shrink-0 mt-0.5`}
                        >
                          {section?.number ?? '?'}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-zinc-800 text-sm mb-0.5">
                            {r.item.sectionTitle}
                          </p>
                          <p className="text-xs text-zinc-500 truncate">
                            {r.item.content.slice(0, 120)}...
                          </p>
                        </div>
                      </div>
                      <ArrowRight
                        weight="bold"
                        className="w-4 h-4 text-zinc-300 group-hover:text-zinc-500 flex-shrink-0 mt-1 transition-colors"
                      />
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
