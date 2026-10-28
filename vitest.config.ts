import { defineConfig } from 'vitest/config'

// Pruebas unitarias de funciones puras (p. ej. el generador .ics del taller).
export default defineConfig({
  test: {
    include: ['src/**/*.test.ts'],
    environment: 'node',
  },
})
