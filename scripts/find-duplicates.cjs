#!/usr/bin/env node
/**
 * scripts/find-duplicates.js
 * Diagnóstico de términos duplicados en el dataset MedLex.
 *
 * Uso: node scripts/find-duplicates.js
 *
 * Detecta duplicados por dos claves:
 *   1. termino|tipo  — duplicados "duros" (misma forma Y mismo tipo)
 *   2. termino       — duplicados "visuales" (misma forma, distinto tipo)
 */

const fs = require('fs')
const path = require('path')

// ── Leer el archivo TypeScript como texto y extraer los datos ──
const filePath = path.join(__dirname, '../src/data/medlex-terms.ts')
const source   = fs.readFileSync(filePath, 'utf8')

// Extraer todos los objetos de término con regex
const entryRegex = /\{\s*id:\s*'([^']+)',\s*termino:\s*'([^']+)',\s*tipo:\s*'([^']+)',\s*origen:\s*'([^']+)',\s*significado:\s*'([^']+)'/g

const terms = []
let match
while ((match = entryRegex.exec(source)) !== null) {
  terms.push({
    id:         match[1],
    termino:    match[2],
    tipo:       match[3],
    origen:     match[4],
    significado:match[5],
  })
}

console.log('━'.repeat(60))
console.log('MedCore — Diagnóstico de duplicados en MedLex')
console.log('━'.repeat(60))
console.log(`Total de términos leídos: ${terms.length}`)
console.log()

// ── Clave 1: termino|tipo (duplicados "duros") ─────────────────
console.log('▸ ANÁLISIS 1: Duplicados DUROS (mismo termino + mismo tipo)')
console.log('  Clave: termino.toLowerCase()|tipo.toLowerCase()')
console.log()

const seenHard = new Map()
const hardDupes = []

terms.forEach((term, index) => {
  const key = `${term.termino.toLowerCase().trim()}|${term.tipo.toLowerCase().trim()}`
  if (seenHard.has(key)) {
    hardDupes.push({ index, term, firstSeenAt: seenHard.get(key) })
  } else {
    seenHard.set(key, index)
  }
})

if (hardDupes.length === 0) {
  console.log('  ✓ Sin duplicados duros encontrados.')
} else {
  hardDupes.forEach(d => {
    console.log(`  [${d.index}] "${d.term.termino}" (${d.term.tipo}) — duplicado de entrada #${d.firstSeenAt}`)
  })
}
console.log(`  → Duplicados duros: ${hardDupes.length}`)
console.log()

// ── Clave 2: termino solamente (duplicados "visuales") ─────────
console.log('▸ ANÁLISIS 2: Duplicados VISUALES (mismo termino, cualquier tipo)')
console.log('  Clave: termino.toLowerCase()')
console.log()

const seenVis = new Map()
const visDupes = []

terms.forEach((term, index) => {
  const key = term.termino.toLowerCase().trim()
  if (seenVis.has(key)) {
    visDupes.push({ index, term, firstIndex: seenVis.get(key).index, firstTerm: seenVis.get(key).term })
  } else {
    seenVis.set(key, { index, term })
  }
})

if (visDupes.length === 0) {
  console.log('  ✓ Sin duplicados visuales encontrados.')
} else {
  visDupes.forEach(d => {
    console.log(`  [${d.index}] "${d.term.termino}" (${d.term.tipo}) — visual-dup de [${d.firstIndex}] "${d.firstTerm.termino}" (${d.firstTerm.tipo})`)
  })
}
console.log(`  → Duplicados visuales: ${visDupes.length}`)
console.log()

// ── Resumen ───────────────────────────────────────────────────
console.log('━'.repeat(60))
console.log('RESUMEN')
console.log('━'.repeat(60))
console.log(`  Total de entradas   : ${terms.length}`)
console.log(`  Duplicados duros    : ${hardDupes.length}`)
console.log(`  Duplicados visuales : ${visDupes.length}`)

const dupeIds = new Set(visDupes.map(d => d.index))
console.log(`  Entradas únicas     : ${terms.length - dupeIds.size}`)
console.log()

if (visDupes.length === 0 && hardDupes.length === 0) {
  console.log('  ✅ Dataset limpio. Sin duplicados.')
} else {
  console.log('  ⚠️  Acción requerida: eliminar entradas duplicadas del array "prefijos"')
  console.log('     en src/data/medlex-terms.ts.')
  console.log()
  console.log('  IDs que deben ELIMINARSE de prefijos (son raíces, no prefijos):')
  visDupes.forEach(d => {
    console.log(`    '${d.term.id}'  →  "${d.term.termino}" (${d.term.tipo})`)
  })
}
console.log()
