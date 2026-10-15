/* Ajustes de la app, persistidos entre sesiones (Zustand + persist).
 * Mismo patrón que atlasStore: tamaño de texto y tema (Sistema · Claro · Oscuro).
 * index.html lee `theme` de este mismo almacenamiento ('medcore-settings')
 * antes del primer pintado para evitar el parpadeo. */

import { useEffect } from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type FontScale = 'pequeno' | 'normal' | 'grande'
export type Theme = 'sistema' | 'claro' | 'oscuro'

const SCALE_VALUES: Record<FontScale, number> = {
  pequeno: 0.875,  // −12,5 %
  normal:  1,
  grande:  1.15,   // +15 %
}

interface SettingsState {
  fontScale: FontScale
  setFontScale: (s: FontScale) => void
  theme: Theme
  setTheme: (t: Theme) => void
}

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      fontScale: 'normal',
      setFontScale: (fontScale) => set({ fontScale }),
      theme: 'sistema',
      setTheme: (theme) => set({ theme }),
    }),
    { name: 'medcore-settings' },
  ),
)

export const scaleValue = (s: FontScale) => SCALE_VALUES[s]

const THEME_COLOR = { claro: '#ECEFF3', oscuro: '#0F1115' }

/* Aplica el tema elegido: clase .dark en <html> (tokens + `dark:` de
 * Tailwind) y color de la barra del sistema. En «Sistema» sigue al
 * dispositivo y reacciona si cambia mientras la app está abierta. */
export function useThemeSync() {
  const theme = useSettings((s) => s.theme)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const apply = () => {
      const dark = theme === 'oscuro' || (theme === 'sistema' && mq.matches)
      document.documentElement.classList.toggle('dark', dark)
      document.querySelectorAll('meta[name="theme-color"]').forEach((m) => {
        if (theme === 'sistema') {
          const media = m.getAttribute('media') ?? ''
          m.setAttribute('content', media.includes('dark') ? THEME_COLOR.oscuro : THEME_COLOR.claro)
        } else {
          m.setAttribute('content', dark ? THEME_COLOR.oscuro : THEME_COLOR.claro)
        }
      })
    }
    apply()
    if (theme !== 'sistema') return
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [theme])
}
