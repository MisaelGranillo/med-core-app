/* Perfil de quien estudia, guardado solo en este dispositivo (Zustand + persist).
 * No hay cuentas: el nombre nunca sale del navegador. Para llevarlo a otro
 * dispositivo junto con el progreso: Ajustes → Respaldo. */

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ProfileState {
  nombre: string
  setNombre: (n: string) => void
}

export const NOMBRE_MAX = 30

export const useProfile = create<ProfileState>()(
  persist(
    (set) => ({
      nombre: '',
      setNombre: (n) => set({ nombre: n.replace(/\s+/g, ' ').trim().slice(0, NOMBRE_MAX) }),
    }),
    { name: 'medcore-profile' },
  ),
)
