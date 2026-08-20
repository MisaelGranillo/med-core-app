import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CaretRight, CheckCircle, Equals, ArrowRight, Heartbeat, Lightbulb, Brain, ClockCounterClockwise } from '@phosphor-icons/react'
import type { Section, ContentBlock, TopicColorKey } from '../types'
import { TOPIC_COLORS } from '../data/colors'

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
    <div className={`card overflow-hidden transition-shadow duration-200 ${
      isRead ? 'border-l-[3px] ' + colors.border : ''
    }`}>
      <button
        onClick={handleOpen}
        className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-zinc-50/80 transition-colors duration-150 group"
      >
        <span className={`section-number ${colors.headerBg} flex-shrink-0 shadow-sm`}>
          {section.number}
        </span>
        <span className="flex-1 font-semibold text-zinc-800 text-sm leading-snug">
          {section.title}
        </span>
        {section.keyTerms && section.keyTerms.length > 0 && (
          <span className="hidden sm:block text-[0.625rem] text-zinc-400 font-medium mr-2 max-w-[140px] truncate">
            {section.keyTerms.slice(0, 3).join(' · ')}
          </span>
        )}
        <div className="flex items-center gap-2 flex-shrink-0">
          {isRead && (
            <CheckCircle weight="fill" className={`w-4 h-4 ${colors.text}`} />
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
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 pt-2 space-y-5 border-t border-zinc-100">
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

function BlockLabel({ text, colorKey }: { text: string; colorKey: TopicColorKey }) {
  const colors = TOPIC_COLORS[colorKey]
  return (
    <p className={`text-[0.625rem] font-bold uppercase tracking-widest mb-2 ${colors.text}`}>
      {text}
    </p>
  )
}

function BlockRenderer({ block, colorKey }: { block: ContentBlock; colorKey: TopicColorKey }) {
  const colors = TOPIC_COLORS[colorKey]

  switch (block.type) {

    case 'paragraph':
      return (
        <div>
          {block.title && <BlockLabel text={block.title} colorKey={colorKey} />}
          <p className="text-sm text-zinc-700 leading-relaxed">{block.content}</p>
        </div>
      )

    case 'definition':
      return (
        <div className={`border-l-[3px] ${colors.border} pl-4 py-1`}>
          {block.title && <BlockLabel text={block.title} colorKey={colorKey} />}
          <blockquote className={`text-sm font-medium ${colors.text} leading-relaxed italic`}>
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
              <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-700">
                <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} flex-shrink-0 mt-[7px]`} />
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
              <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-700 leading-relaxed">
                <CheckCircle weight="fill" className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-[2px]`} />
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
          <div className="overflow-x-auto rounded-xl border border-zinc-200">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className={`${colors.bg}`}>
                  {block.data?.headers.map((h, i) => (
                    <th key={i}
                      className={`text-left text-[0.6875rem] font-bold uppercase tracking-wider
                                  ${colors.text} px-3 py-2.5 border-b ${colors.border}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.data?.rows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-surface' : 'bg-zinc-50/60'}>
                    {row.map((cell, j) => (
                      <td key={j}
                        className={`py-2.5 px-3 text-zinc-700 border-b border-zinc-100 align-top text-[0.8125rem]
                                    ${j === 0 ? 'font-semibold text-zinc-800' : ''}`}>
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
          <div className={`${colors.bg} ${colors.border} border rounded-2xl overflow-hidden`}>
            {/* Formula display */}
            <div className="flex items-center gap-3 px-5 py-4">
              <Equals weight="bold" className={`w-4 h-4 ${colors.text} flex-shrink-0`} />
              <code className={`font-mono text-sm font-semibold ${colors.text} leading-relaxed`}>
                {block.formula}
              </code>
            </div>
            {block.description && (
              <div className="px-5 pb-4 border-t border-zinc-200/60">
                <p className="text-xs text-zinc-500 leading-relaxed mt-3">{block.description}</p>
              </div>
            )}
          </div>
        </div>
      )

    case 'note':
      return (
        <div className={`${colors.bgLight} rounded-2xl px-4 py-3.5 flex items-start gap-3`}>
          <span className={`text-base mt-0.5 flex-shrink-0 ${colors.text}`}>
            <InfoDot color={colors.dot} />
          </span>
          <p className="text-sm text-zinc-700 leading-relaxed">{block.content}</p>
        </div>
      )

    case 'correlacion': {
      const CORR = {
        clinica:     { Icon: Heartbeat,             label: 'Correlación clínica', border: 'border-l-rose-400',   text: 'text-rose-500' },
        dato:        { Icon: Lightbulb,             label: 'Dato de interés',     border: 'border-l-sky-400',    text: 'text-sky-500' },
        mnemotecnia: { Icon: Brain,                 label: 'Mnemotecnia',         border: 'border-l-amber-400',  text: 'text-amber-500' },
        historia:    { Icon: ClockCounterClockwise, label: 'Nota histórica',      border: 'border-l-violet-400', text: 'text-violet-500' },
      }
      const cfg = CORR[block.variant ?? 'dato']
      const Icon = cfg.Icon
      return (
        <div className={`rounded-2xl border border-zinc-200 border-l-4 ${cfg.border} bg-zinc-50 px-4 py-3.5`}>
          <div className={`flex items-center gap-1.5 mb-1.5 ${cfg.text}`}>
            <Icon weight="fill" className="w-4 h-4 flex-shrink-0" />
            <span className="text-[0.625rem] font-bold uppercase tracking-widest">{cfg.label}</span>
          </div>
          {block.title && <p className="text-sm font-semibold text-zinc-800 mb-0.5">{block.title}</p>}
          <p className="text-sm text-zinc-700 leading-relaxed">{block.content}</p>
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
                  <div className={`absolute left-[10px] top-6 bottom-0 w-px ${colors.bg} border-l-2 ${colors.border} border-dashed`} />
                )}
                <span className={`w-[22px] h-[22px] rounded-full ${colors.headerBg} text-white
                                  text-[0.625rem] font-bold flex items-center justify-center flex-shrink-0
                                  shadow-sm z-10 mt-0.5`}>
                  {i + 1}
                </span>
                <span className="text-sm text-zinc-700 leading-relaxed">{step}</span>
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
              <span className="bg-surface border border-zinc-200 text-zinc-400 text-[0.625rem] font-bold px-1.5 py-0.5 rounded-full shadow-sm">
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
                  className={`rounded-2xl p-4 border ${
                    accent
                      ? `${colors.bg} ${colors.border}`
                      : 'bg-zinc-50 border-zinc-200'
                  }`}
                >
                  <p className={`font-bold text-xs uppercase tracking-wide mb-3 ${
                    accent ? colors.text : 'text-zinc-600'
                  }`}>
                    {side.title}
                  </p>
                  <ul className="space-y-1.5">
                    {side.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-zinc-700">
                        <ArrowRight
                          weight="bold"
                          className={`w-3 h-3 flex-shrink-0 mt-1 ${accent ? colors.text : 'text-zinc-400'}`}
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

    default:
      return null
  }
}

function InfoDot({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="9" className={color} fill="currentColor" opacity="0.15" />
      <circle cx="9" cy="6.5" r="1" fill="currentColor" className={color} />
      <rect x="8" y="8.5" width="2" height="5" rx="1" fill="currentColor" className={color} />
    </svg>
  )
}
