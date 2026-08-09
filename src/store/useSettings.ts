/* Ajustes de la app, persistidos entre sesiones (Zustand + persist).
 * Mismo patrón que atlasStore. Por ahora solo el tamaño de texto. */

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type FontScale = 'pequeno' | 'normal' | 'grande'

const SCALE_VALUES: Record<FontScale, number> = {
  pequeno: 0.875,  // −12,5 %
  normal:  1,
  grande:  1.15,   // +15 %
}

interface SettingsState {
  fontScale: FontScale
  setFontScale: (s: FontScale) => void
}

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      fontScale: 'normal',
      setFontScale: (fontScale) => set({ fontScale }),
    }),
    { name: 'medcore-settings' },
  ),
)

export const scaleValue = (s: FontScale) => SCALE_VALUES[s]
