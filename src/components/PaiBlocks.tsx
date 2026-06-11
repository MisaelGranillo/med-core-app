/* PaiBlocks.tsx — Renderiza los bloques de contenido PAI (sistema de diseño) */

import type { Block } from '../data/pai-types'

interface BlocksProps {
  bloques: Block[]
}

export function PaiBlocks({ bloques }: BlocksProps) {
  return (
    <div className="space-y-5">
      {bloques.map((b, i) => <PaiBlock key={i} b={b} />)}
    </div>
  )
}

function PaiBlock({ b }: { b: Block }) {
  switch (b.t) {
    case 'h2':
      return (
        <h2 className="text-lg font-bold text-ink tracking-tight pt-4 pb-1 border-b border-line">
          {b.c}
        </h2>
      )
    case 'h3':
      return (
        <h3 className="text-base font-semibold text-ink pt-2">
          {b.c}
        </h3>
      )
    case 'p':
      return (
        <p className="text-sm text-body leading-relaxed">
          {b.c}
        </p>
      )
    case 'list':
      return (
        <ul className="space-y-1.5">
          {b.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-body">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-[7px]" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'table':
      return (
        <div className="overflow-x-auto rounded-md border border-line">
          <table className="table-base">
            {b.h && (
              <thead>
                <tr>
                  {b.h.map((h, i) => (
                    <th key={i} className="whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {b.r?.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'note':
      return (
        <div className="callout callout-note">
          <span className="flex-shrink-0 text-base" aria-hidden>💡</span>
          <p className="leading-relaxed m-0">{b.c}</p>
        </div>
      )
    case 'warning':
      return (
        <div className="callout callout-critical">
          <span className="flex-shrink-0 text-base" aria-hidden>⚠️</span>
          <p className="leading-relaxed m-0">{b.c}</p>
        </div>
      )
    case 'formula':
      return (
        <div className="callout callout-mnemo flex-col gap-1.5">
          <code className="block font-mono font-bold leading-relaxed">{b.f}</code>
          {b.d && <p className="text-xs leading-relaxed m-0 opacity-80">{b.d}</p>}
        </div>
      )
    case 'comparison':
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {b.left && (
            <div className="callout callout-info flex-col gap-2">
              <p className="text-xs font-bold uppercase tracking-wider m-0">{b.left.title}</p>
              <ul className="space-y-1.5">
                {b.left.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs">
                    <span className="w-1 h-1 rounded-full bg-current opacity-50 flex-shrink-0 mt-[5px]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {b.right && (
            <div className="callout callout-mnemo flex-col gap-2">
              <p className="text-xs font-bold uppercase tracking-wider m-0">{b.right.title}</p>
              <ul className="space-y-1.5">
                {b.right.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs">
                    <span className="w-1 h-1 rounded-full bg-current opacity-50 flex-shrink-0 mt-[5px]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )
    default:
      return null
  }
}
