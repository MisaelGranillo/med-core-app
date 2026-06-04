/* PaiBlocks.tsx — Renderiza los bloques de contenido PAI */

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
        <h2 className="text-lg font-bold text-zinc-900 tracking-tight pt-4 pb-1 border-b border-zinc-100">
          {b.c}
        </h2>
      )
    case 'h3':
      return (
        <h3 className="text-base font-semibold text-zinc-800 pt-2">
          {b.c}
        </h3>
      )
    case 'p':
      return (
        <p className="text-sm text-zinc-700 leading-relaxed">
          {b.c}
        </p>
      )
    case 'list':
      return (
        <ul className="space-y-1.5">
          {b.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-700">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0 mt-[7px]" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'table':
      return (
        <div className="overflow-x-auto rounded-xl border border-zinc-200">
          <table className="w-full text-xs">
            {b.h && (
              <thead>
                <tr className="bg-zinc-50 border-b border-zinc-200">
                  {b.h.map((h, i) => (
                    <th key={i} className="text-left px-4 py-3 font-semibold text-zinc-700 whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {b.r?.map((row, ri) => (
                <tr key={ri} className={`border-b border-zinc-100 last:border-0 ${ri % 2 === 0 ? 'bg-white' : 'bg-zinc-50/40'}`}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-2.5 text-zinc-700 leading-relaxed align-top">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'note':
      return (
        <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4">
          <span className="text-amber-500 flex-shrink-0 text-base">💡</span>
          <p className="text-sm text-amber-800 leading-relaxed">{b.c}</p>
        </div>
      )
    case 'warning':
      return (
        <div className="flex gap-3 bg-red-50 border border-red-200 rounded-2xl p-4">
          <span className="text-red-500 flex-shrink-0 text-base">⚠️</span>
          <p className="text-sm text-red-800 leading-relaxed">{b.c}</p>
        </div>
      )
    case 'formula':
      return (
        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 space-y-1.5">
          <code className="block text-sm font-mono font-bold text-indigo-800 leading-relaxed">
            {b.f}
          </code>
          {b.d && (
            <p className="text-xs text-indigo-700 leading-relaxed">{b.d}</p>
          )}
        </div>
      )
    case 'comparison':
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {b.left && (
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 space-y-2">
              <p className="text-xs font-bold text-blue-800 uppercase tracking-wider">{b.left.title}</p>
              <ul className="space-y-1.5">
                {b.left.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-blue-800">
                    <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0 mt-[5px]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {b.right && (
            <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 space-y-2">
              <p className="text-xs font-bold text-teal-800 uppercase tracking-wider">{b.right.title}</p>
              <ul className="space-y-1.5">
                {b.right.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-teal-800">
                    <span className="w-1 h-1 rounded-full bg-teal-400 flex-shrink-0 mt-[5px]" />
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
