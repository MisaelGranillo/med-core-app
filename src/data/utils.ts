/**
 * src/data/utils.ts — Utilidades de calidad del dataset MedLex
 *
 * Uso en DEV: validateTerms(medlexTerms) se llama en main.tsx.
 * Uso en la capa de datos: deduplicateTerms() se aplica al combinar arrays.
 *
 * Para añadir nuevos términos sin introducir duplicados:
 *   1. Agrega la entrada en el array correcto (prefijos, sufijos o raices).
 *   2. Si el término existe ya como raíz, NO lo agregues a prefijos.
 *   3. Tras agregar, corre: node scripts/find-duplicates.cjs
 *      → debe reportar "Duplicados visuales: 0"
 */

import type { MedLexTerm } from './medlex-terms'

/**
 * Construye la clave de unicidad para un término.
 * Usa termino + tipo para permitir que el mismo texto sea
 * sufijo Y raíz (e.g., "-algia" como sufijo, "algia" como raíz),
 * pero evitar que aparezca dos veces con el mismo tipo.
 *
 * Para detectar duplicados VISUALES (mismo texto, distinto tipo),
 * usa deduplicateByTermino() en su lugar.
 */
export function termKey(term: MedLexTerm): string {
  return `${term.termino.toLowerCase().trim()}|${term.tipo.toLowerCase().trim()}`
}

/**
 * Elimina duplicados usando termino|tipo como clave.
 * Conserva la primera ocurrencia de cada clave única.
 * Aplica en la capa de datos, no en el render.
 */
export function deduplicateTerms(terms: MedLexTerm[]): MedLexTerm[] {
  const seen = new Set<string>()
  return terms.filter(term => {
    const key = termKey(term)
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

/**
 * Elimina duplicados usando sólo termino como clave (duplicados visuales).
 * Útil cuando el mismo término está en múltiples categorías (prefijo + raíz).
 * Conserva la primera ocurrencia.
 */
export function deduplicateByTermino(terms: MedLexTerm[]): MedLexTerm[] {
  const seen = new Set<string>()
  return terms.filter(term => {
    const key = term.termino.toLowerCase().trim()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

/**
 * Valida el dataset y emite warnings en consola si hay duplicados.
 * Llámalo en modo DEV (ver main.tsx).
 * Retorna true si el dataset está limpio, false si hay duplicados.
 */
export function validateTerms(terms: MedLexTerm[]): boolean {
  const hardDupes: Array<{ index: number; term: MedLexTerm }> = []
  const visDupes: Array<{ index: number; term: MedLexTerm }> = []
  const seenHard = new Map<string, number>()
  const seenVis  = new Map<string, number>()

  terms.forEach((term, i) => {
    const hardKey = termKey(term)
    const visKey  = term.termino.toLowerCase().trim()

    if (seenHard.has(hardKey)) hardDupes.push({ index: i, term })
    else seenHard.set(hardKey, i)

    if (seenVis.has(visKey)) visDupes.push({ index: i, term })
    else seenVis.set(visKey, i)
  })

  if (hardDupes.length > 0) {
    console.warn(
      `[MedCore] ⚠️  ${hardDupes.length} DUPLICADO(S) DURO(S) detectado(s) en medlex-terms.ts:`,
      hardDupes.map(d => `[${d.index}] "${d.term.termino}" (${d.term.tipo})`)
    )
  }

  if (visDupes.length > 0) {
    console.warn(
      `[MedCore] ⚠️  ${visDupes.length} DUPLICADO(S) VISUAL(ES) detectado(s) en medlex-terms.ts:`,
      visDupes.map(d => `[${d.index}] "${d.term.termino}" — aparece como ${d.term.tipo} y en otra categoría`)
    )
  }

  if (hardDupes.length === 0 && visDupes.length === 0) {
    console.info(`[MedCore] ✅ medlex-terms.ts: ${terms.length} términos, sin duplicados.`)
    return true
  }

  return false
}
