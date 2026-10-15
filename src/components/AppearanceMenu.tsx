/* Apariencia rápida (barra superior): tema y tamaño de texto sin ir a Ajustes.
 * Popover ligero, no modal: se cierra al hacer clic fuera o con Escape. */

import { useEffect, useRef, useState } from 'react'
import { Moon, Sun, Desktop, TextAa } from '@phosphor-icons/react'
import { useSettings, type Theme, type FontScale } from '../store/useSettings'

const THEMES: { value: Theme; label: string; icon: typeof Sun }[] = [
  { value: 'sistema', label: 'Sistema', icon: Desktop },
  { value: 'claro',   label: 'Claro',   icon: Sun },
  { value: 'oscuro',  label: 'Oscuro',  icon: Moon },
]
const SIZES: { value: FontScale; label: string; cls: string }[] = [
  { value: 'pequeno', label: 'Pequeño', cls: 'text-[13px]' },
  { value: 'normal',  label: 'Normal',  cls: 'text-[16px]' },
  { value: 'grande',  label: 'Grande',  cls: 'text-[20px]' },
]

export function AppearanceMenu() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { theme, setTheme, fontScale, setFontScale } = useSettings()

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false) }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', onDown); document.removeEventListener('keydown', onKey) }
  }, [open])

  const Current = theme === 'oscuro' ? Moon : theme === 'claro' ? Sun : TextAa

  return (
    <div ref={ref} className="relative flex-shrink-0">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Apariencia: tema y tamaño de texto"
        className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
      >
        <Current weight="regular" className="w-5 h-5" />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Apariencia"
          className="absolute right-0 top-12 z-50 w-72 card p-4 shadow-pop space-y-4"
        >
          <div>
            <p className="text-xs text-zinc-500 mb-2">Tema</p>
            <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-zinc-100">
              {THEMES.map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setTheme(value)}
                  aria-pressed={theme === value}
                  className={`flex flex-col items-center gap-1 py-2 rounded-lg text-xs transition-colors
                    ${theme === value ? 'bg-surface text-zinc-900 shadow-diffuse' : 'text-zinc-500 hover:text-zinc-800'}`}
                >
                  <Icon weight={theme === value ? 'fill' : 'regular'} className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-zinc-500 mb-2">Tamaño de texto</p>
            <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-zinc-100">
              {SIZES.map(({ value, label, cls }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setFontScale(value)}
                  aria-pressed={fontScale === value}
                  aria-label={`Texto ${label.toLowerCase()}`}
                  className={`h-11 rounded-lg font-display font-light transition-colors ${cls}
                    ${fontScale === value ? 'bg-surface text-zinc-900 shadow-diffuse' : 'text-zinc-500 hover:text-zinc-800'}`}
                >
                  Aa
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
