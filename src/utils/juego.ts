/* Mecánica de juego del estilo Arcade. Todo se calcula a partir del progreso
 * que ya se guarda (secciones leídas, intentos de quiz y días con actividad),
 * así que no hay puntajes aparte que se puedan desincronizar.
 *
 *   XP     10 por sección leída · 5 por respuesta correcta en el MEJOR intento
 *          de cada quiz · 20 por quiz terminado (una vez) · 150 por jefe vencido.
 *   Nivel  el nivel N empieza en 50·N·(N−1) XP (100, 300, 600, 1000…).
 *   Jefes  los exámenes semanales reales; se vencen con 70 % o más.
 *   LV     nivel 0–10 de cada materia: mitad lectura, mitad dominio en quizzes.
 *   Racha  días seguidos con actividad (leer o terminar un quiz). */

import { useMemo } from 'react'
import { topicIndex, examDecks } from '../data/generated/topicIndex'
import { useProgress, hoyLocal } from '../store/useProgress'
import { useSettings } from '../store/useSettings'
import type { TopicProgress } from '../types'

export const APROBAR_JEFE = 70

export type Logro = { id: string; titulo: string; descripcion: string; ok: boolean }
export type Juego = {
  xp: number
  nivel: number
  xpEnNivel: number
  xpParaSubir: number
  racha: number
  jefes: { vencidos: number; total: number }
  lv: Record<string, number>
  logros: Logro[]
}

const xpInicioNivel = (n: number) => 50 * n * (n - 1)

export function nivelDe(xp: number) {
  let n = 1
  while (xpInicioNivel(n + 1) <= xp) n++
  return { nivel: n, xpEnNivel: xp - xpInicioNivel(n), xpParaSubir: xpInicioNivel(n + 1) - xpInicioNivel(n) }
}

const mejor = (tp?: TopicProgress) => {
  const a = tp?.quizAttempts ?? []
  if (a.length === 0) return null
  return a.reduce((m, x) => (x.score / x.total > m.score / m.total ? x : m), a[0])
}

function racha(dias: string[]): number {
  const set = new Set(dias)
  const d = new Date()
  if (!set.has(hoyLocal(d))) d.setDate(d.getDate() - 1) // la racha sigue viva hasta el final de hoy
  let n = 0
  while (set.has(hoyLocal(d))) { n++; d.setDate(d.getDate() - 1) }
  return n
}

export function calcularJuego(progress: Record<string, TopicProgress>, dias: string[]): Juego {
  let xp = 0
  let perfecto = false
  let algunQuiz = false
  let algunaLectura = false
  const diasTodos = new Set(dias)

  for (const tp of Object.values(progress)) {
    xp += tp.sectionsRead.length * 10
    if (tp.sectionsRead.length) algunaLectura = true
    const m = mejor(tp)
    if (m) {
      algunQuiz = true
      xp += m.score * 5 + 20
      if (m.total > 0 && m.score === m.total) perfecto = true
    }
    for (const a of tp.quizAttempts) diasTodos.add(hoyLocal(new Date(a.date)))
  }

  let vencidos = 0
  let total = 0
  let cazador = false
  for (const d of examDecks) {
    let todos = true
    for (const w of d.semanas) {
      total++
      const m = mejor(progress[`examen-${d.materia}-s${w.n}`])
      const ok = !!m && (m.score / m.total) * 100 >= APROBAR_JEFE
      if (ok) { vencidos++; xp += 150 } else todos = false
    }
    if (todos && d.semanas.length) cazador = true
  }

  const lv: Record<string, number> = {}
  const porMateria: Record<string, { leidas: number; secciones: number; dominio: number; conQuiz: number }> = {}
  for (const t of topicIndex) {
    if (!t.materia) continue
    const g = (porMateria[t.materia] ??= { leidas: 0, secciones: 0, dominio: 0, conQuiz: 0 })
    g.secciones += t.sectionCount
    g.leidas += progress[t.id]?.sectionsRead.length ?? 0
    if (t.questionCount > 0) {
      g.conQuiz++
      const m = mejor(progress[t.id])
      if (m) g.dominio += m.score / m.total
    }
  }
  for (const [id, g] of Object.entries(porMateria)) {
    const lectura = g.secciones ? g.leidas / g.secciones : 0
    const dominio = g.conQuiz ? g.dominio / g.conQuiz : 0
    lv[id] = Math.min(10, Math.floor(10 * (lectura + dominio) / 2))
  }

  const r = racha([...diasTodos])
  const { nivel, xpEnNivel, xpParaSubir } = nivelDe(xp)
  const logros: Logro[] = [
    { id: 'inicio', titulo: 'Insert coin', descripcion: 'Lee tu primera sección.', ok: algunaLectura },
    { id: 'quiz', titulo: 'Primera partida', descripcion: 'Termina tu primer quiz.', ok: algunQuiz },
    { id: 'perfecto', titulo: 'Perfect!', descripcion: 'Saca 100 % en un quiz.', ok: perfecto },
    { id: 'jefe', titulo: 'Primer jefe', descripcion: `Vence un examen semanal con ${APROBAR_JEFE} % o más.`, ok: vencidos > 0 },
    { id: 'cazador', titulo: 'Cazajefes', descripcion: 'Vence todos los exámenes de una materia.', ok: cazador },
    { id: 'racha', titulo: 'Combo x7', descripcion: 'Estudia 7 días seguidos.', ok: r >= 7 },
    { id: 'maestria', titulo: 'Max level', descripcion: 'Lleva una materia a LV 10.', ok: Object.values(lv).some((v) => v >= 10) },
    { id: 'nivel10', titulo: 'Nivel 10', descripcion: 'Llega al nivel 10 de jugador.', ok: nivel >= 10 },
  ]

  return { xp, nivel, xpEnNivel, xpParaSubir, racha: r, jefes: { vencidos, total }, lv, logros }
}

/* Estado del juego (o null si el estilo no es Arcade). */
export function useJuego(): Juego | null {
  const arcade = useSettings((s) => s.estilo === 'arcade')
  const progress = useProgress((s) => s.progress)
  const dias = useProgress((s) => s.dias ?? [])
  return useMemo(() => (arcade ? calcularJuego(progress, dias) : null), [arcade, progress, dias])
}
