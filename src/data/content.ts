/* Contenido completo (temas + bancos de preguntas) cargado bajo demanda.
 * Las páginas de lista usan el índice ligero (generated/topicIndex); solo
 * Tema, Quiz y Búsqueda piden el contenido completo, que queda en caché
 * después de la primera carga. */

import { useEffect, useState } from 'react'
import type { Topic, Question } from '../types'

export interface Content {
  topics: Topic[]
  questions: Question[]
}

let cached: Content | null = null
let pending: Promise<Content> | null = null

export function loadContent(): Promise<Content> {
  if (cached) return Promise.resolve(cached)
  pending ??= Promise.all([import('./topics'), import('./quizzes')]).then(([t, q]) => {
    cached = { topics: t.topics, questions: q.questions }
    return cached
  })
  return pending
}

/* Devuelve el contenido o null mientras carga (la primera vez). */
export function useContent(): Content | null {
  const [content, setContent] = useState<Content | null>(cached)
  useEffect(() => {
    if (content) return
    let alive = true
    loadContent().then((c) => { if (alive) setContent(c) })
    return () => { alive = false }
  }, [content])
  return content
}
