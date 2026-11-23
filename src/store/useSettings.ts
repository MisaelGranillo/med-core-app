/* Ajustes de la app, persistidos entre sesiones (Zustand + persist).
 * Mismo patrón que atlasStore: tamaño de texto y tema (Sistema · Claro · Oscuro).
 * index.html lee `theme` de este mismo almacenamiento ('medcore-settings')
 * antes del primer pintado para evitar el parpadeo. */

import { useEffect } from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type FontScale = 'pequeno' | 'normal' | 'grande'
export type Theme = 'sistema' | 'claro' | 'oscuro'
export type Estilo = 'sereno' | 'deco' | 'arcade'

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
  estilo: Estilo
  setEstilo: (e: Estilo) => void
}

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      fontScale: 'normal',
      setFontScale: (fontScale) => set({ fontScale }),
      theme: 'sistema',
      setTheme: (theme) => set({ theme }),
      estilo: 'sereno',
      setEstilo: (estilo) => set({ estilo }),
    }),
    { name: 'medcore-settings' },
  ),
)

export const scaleValue = (s: FontScale) => SCALE_VALUES[s]

const THEME_COLORS: Record<Estilo, { claro: string; oscuro: string }> = {
  sereno: { claro: '#ECEFF3', oscuro: '#0F1115' },
  deco:   { claro: '#EFE8D8', oscuro: '#0A0A0B' },
  arcade: { claro: '#E9E6FA', oscuro: '#100D24' },
}

/* Fuentes display de cada estilo: se piden solo si el estilo se usa. */
const FUENTES: Partial<Record<Estilo, string>> = {
  deco: 'https://fonts.googleapis.com/css2?family=Poiret+One&display=swap',
  arcade: 'https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;500;600&display=swap',
}
export function cargarFuente(estilo: Estilo) {
  const href = FUENTES[estilo]
  if (!href || document.querySelector(`link[data-estilo-fuente="${estilo}"]`)) return
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  link.dataset.estiloFuente = estilo
  document.head.appendChild(link)
}

/* Aplica el tema elegido: clase .dark en <html> (tokens + `dark:` de
 * Tailwind) y color de la barra del sistema. En «Sistema» sigue al
 * dispositivo y reacciona si cambia mientras la app está abierta. */
export function useThemeSync() {
  const theme = useSettings((s) => s.theme)
  const estilo = useSettings((s) => s.estilo)
  useEffect(() => {
    document.documentElement.dataset.estilo = estilo
    cargarFuente(estilo)
    const THEME_COLOR = THEME_COLORS[estilo]
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
  }, [theme, estilo])
}
