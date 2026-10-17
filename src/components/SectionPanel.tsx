import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CaretRight, CheckCircle, Equals, ArrowRight, Heartbeat, Lightbulb, Brain, ClockCounterClockwise, Info } from '@phosphor-icons/react'
import type { Section, ContentBlock, TopicColorKey } from '../types'
import { TOPIC_COLORS } from '../data/colors'
import { IllustrationCredit } from './IllustrationCredit'

interface SectionPanelProps {
  section: Section
  colorKey: TopicColorKey
  isRead: boolean
  onRead: () => void
  defaultOpen?: boolean
}

export function SectionPanel({
  section, colorKey, isRead, onRead, defaultOpen = false,
}: SectionPanelProps) {
  const [open, setOpen] = useState(defaultOpen)
  const colors = TOPIC_COLORS[colorKey]

  const handleOpen = () => {
    const next = !open
    setOpen(next)
    if (next && !isRead) onRead()
  }

  return (
    <div className="card overflow-hidden transition-shadow duration-200">
      <button
        onClick={handleOpen}
        aria-expanded={open}
        className="w-full flex items-center gap-4 px-5 sm:px-6 py-5 text-left hover:bg-zinc-50 transition-colors duration-150 group"
      >
        <span className={`section-number flex-shrink-0 ${isRead ? 'bg-primary text-primary-fg' : 'bg-primary-tint text-primary-ink'}`}>
          {section.number}
        </span>
        <span className="flex-1 font-display text-lg font-normal text-zinc-900 leading-snug">
          {section.title}
        </span>
        {section.keyTerms && section.keyTerms.length > 0 && (
          <span className="hidden lg:block text-xs text-zinc-500 mr-2 max-w-[180px] truncate">
            {section.keyTerms.slice(0, 3).join(' · ')}
          </span>
        )}
        <div className="flex items-center gap-2 flex-shrink-0">
          {isRead && (
            <CheckCircle weight="fill" className="w-5 h-5 text-primary" aria-label="Leída" />
          )}
          <CaretRight
            weight="bold"
            className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-7 pt-5 space-y-6 border-t border-zinc-200">
              {section.blocks.map((block, i) => (
                <BlockRenderer key={i} block={block} colorKey={colorKey} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function BlockLabel({ text }: { text: string; colorKey?: TopicColorKey }) {
  return (
    <p className="text-sm font-medium text-zinc-500 mb-2.5">
      {text}
    </p>
  )
}

export function BlockRenderer({ block, colorKey }: { block: ContentBlock; colorKey: TopicColorKey }) {
  const colors = TOPIC_COLORS[colorKey]

  switch (block.type) {

    case 'paragraph':
      return (
        <div>
          {block.title && <BlockLabel text={block.title} colorKey={colorKey} />}
          <p className="text-base text-zinc-800 leading-relaxed">{block.content}</p>
        </div>
      )

    case 'definition':
      return (
        <div className="rounded-2xl bg-primary-tint px-5 py-4">
          {block.title && <p className="text-sm font-medium text-primary-ink mb-1">{block.title}</p>}
          <blockquote className="text-base text-zinc-800 leading-relaxed">
            {block.content}
          </blockquote>
        </div>
      )

    case 'list':
      return (
        <div>
          {block.title && <BlockLabel text={block.title} colorKey={colorKey} />}
          <ul className="space-y-2">
            {block.items?.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-base text-zinc-800">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-[11px]" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )

    case 'keypoints':
      return (
        <div>
          {block.title && <BlockLabel text={block.title} colorKey={colorKey} />}
          <ul className="space-y-1.5">
            {block.items?.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-base text-zinc-800 leading-relaxed">
                <CheckCircle weight="fill" className="w-5 h-5 text-primary flex-shrink-0 mt-[2px]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )

    case 'table':
      return (
        <div>
          {block.title && <BlockLabel text={block.title} colorKey={colorKey} />}
          <div className="overflow-x-auto -mx-1 px-1">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {block.data?.headers.map((h, i) => (
                    <th key={i}
                      className="text-left text-xs font-medium text-zinc-500 px-3 pb-2.5 pt-1 whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.data?.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}
                        className={`py-3 px-3 border-t border-zinc-200 align-top text-[0.9375rem] leading-relaxed
                                    ${j === 0 ? 'text-zinc-500' : 'text-zinc-800'}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )

    case 'formula':
      return (
        <div>
          {block.title && <BlockLabel text={block.title} colorKey={colorKey} />}
          <div className="bg-zinc-100 rounded-2xl overflow-hidden">
            {/* Formula display */}
            <div className="flex items-center gap-3 px-5 py-4">
              <Equals weight="bold" className="w-4 h-4 text-primary flex-shrink-0" />
              <code className="font-display text-base text-zinc-900 leading-relaxed">
                {block.formula}
              </code>
            </div>
            {block.description && (
              <div className="px-5 pb-4 border-t border-zinc-200">
                <p className="text-sm text-zinc-600 leading-relaxed mt-3">{block.description}</p>
              </div>
            )}
          </div>
        </div>
      )

    case 'note':
      return (
        <div className="bg-zinc-100 rounded-2xl px-5 py-4 flex items-start gap-3">
          <Info weight="regular" className="w-5 h-5 text-primary flex-shrink-0 mt-[3px]" />
          <p className="text-base text-zinc-800 leading-relaxed">{block.content}</p>
        </div>
      )

    case 'correlacion': {
      const CORR = {
        clinica:     { Icon: Heartbeat,             label: 'Correlación clínica', text: 'text-rose-600 dark:text-rose-400' },
        dato:        { Icon: Lightbulb,             label: 'Dato de interés',     text: 'text-primary' },
        mnemotecnia: { Icon: Brain,                 label: 'Mnemotecnia',         text: 'text-amber-700 dark:text-amber-400' },
        historia:    { Icon: ClockCounterClockwise, label: 'Nota histórica',      text: 'text-violet-600 dark:text-violet-400' },
      }
      const cfg = CORR[block.variant ?? 'dato']
      const Icon = cfg.Icon
      return (
        <div className="rounded-2xl bg-zinc-100 px-5 py-4">
          <div className={`flex items-center gap-2 mb-2 ${cfg.text}`}>
            <Icon weight="regular" className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">{cfg.label}</span>
          </div>
          {block.title && <p className="text-base font-medium text-zinc-900 mb-1">{block.title}</p>}
          <p className="text-base text-zinc-800 leading-relaxed">{block.content}</p>
        </div>
      )
    }

    case 'steps':
      return (
        <div>
          {block.title && <BlockLabel text={block.title} colorKey={colorKey} />}
          <ol className="space-y-0 relative">
            {block.steps?.map((step, i) => (
              <li key={i} className="flex items-start gap-3 relative pb-4 last:pb-0">
                {/* Connecting line */}
                {i < (block.steps?.length ?? 0) - 1 && (
                  <div className="absolute left-[11px] top-7 bottom-1 w-px bg-zinc-300" />
                )}
                <span className="w-6 h-6 rounded-full bg-primary-tint text-primary-ink
                                  text-xs font-medium flex items-center justify-center flex-shrink-0
                                  z-10 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-base text-zinc-800 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )

    case 'comparison':
      return (
        <div>
          {block.title && <BlockLabel text={block.title} colorKey={colorKey} />}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative">
            {/* VS divider on desktop */}
            <div className="hidden md:flex absolute inset-y-0 left-1/2 -translate-x-1/2 items-center justify-center z-10 pointer-events-none">
              <span className="bg-surface border border-zinc-200 text-zinc-500 text-[0.6875rem] px-2 py-0.5 rounded-full">
                VS
              </span>
            </div>

            {[
              { side: block.left, accent: true },
              { side: block.right, accent: false },
            ].map(({ side, accent }, idx) =>
              side ? (
                <div
                  key={idx}
                  className={`rounded-2xl p-5 ${accent ? 'bg-primary-tint' : 'bg-zinc-100'}`}
                >
                  <p className={`font-display text-base font-medium mb-3 ${
                    accent ? 'text-primary-ink' : 'text-zinc-900'
                  }`}>
                    {side.title}
                  </p>
                  <ul className="space-y-2">
                    {side.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[0.9375rem] text-zinc-800">
                        <ArrowRight
                          weight="regular"
                          className={`w-3.5 h-3.5 flex-shrink-0 mt-[5px] ${accent ? 'text-primary' : 'text-zinc-500'}`}
                        />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null
            )}
          </div>
        </div>
      )

    case 'image':
      if (!block.src) return null
      return (
        <figure>
          {block.title && <BlockLabel text={block.title} colorKey={colorKey} />}
          {/* Fondo blanco fijo: las ilustraciones de línea/transparentes pueden
              desaparecer sobre superficies oscuras en dark mode. */}
          <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden">
            <img
              src={block.src}
              alt={block.alt ?? ''}
              loading="lazy"
              className="block w-full h-auto max-h-96 object-contain mx-auto p-3"
            />
          </div>
          {block.caption && (
            <figcaption className="text-xs text-muted leading-relaxed mt-2">{block.caption}</figcaption>
          )}
          <IllustrationCredit sourceUrl={block.sourceUrl} license={block.license} className="mt-1" />
        </figure>
      )

    default:
      return null
  }
}
