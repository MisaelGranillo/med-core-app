import { describe, expect, it } from 'vitest'
import { generarInstrucciones } from './instrucciones'
import { CATEGORIAS_PROMPTS, camposDe, llenarPrompt } from '../taller.prompts'

describe('generarInstrucciones', () => {
  const base = { materia: 'Histología', semestre: 'primer', domino: 'Epitelios', cuesta: 'Conjuntivo', libro: 'Ross', tono: 'directo', formato: 'md', idioma: 'es' } as const

  it('incluye las siete secciones en orden', () => {
    const t = generarInstrucciones(base)
    const orden = ['## Rol', '## Mi nivel', '## Fuente de referencia', '## Método', '## Formato', '## Honestidad', '## Objetivo'].map(s => t.indexOf(s))
    expect(orden.every(i => i >= 0)).toBe(true)
    expect([...orden].sort((a, b) => a - b)).toEqual(orden)
  })

  it('usa las respuestas y las opciones elegidas', () => {
    const t = generarInstrucciones(base)
    expect(t).toContain('tutor de Histología')
    expect(t).toContain('Ross')
    expect(t).toContain('Markdown (.md)')
    expect(t).toContain('sin rodeos')
  })

  it('deja marcadores visibles para los campos vacíos', () => {
    const t = generarInstrucciones({ ...base, materia: ' ', libro: '' })
    expect(t).toContain('[materia]')
    expect(t).toContain('[libro de referencia]')
  })

  it('no usa guiones largos', () => {
    expect(generarInstrucciones(base)).not.toContain('—')
  })
})

describe('prompts', () => {
  it('extrae campos sin repetir y en orden', () => {
    expect(camposDe('[tema] de [materia] y otra vez [tema]')).toEqual(['tema', 'materia'])
  })

  it('llena los campos con valor y conserva los vacíos', () => {
    expect(llenarPrompt('Estudio [tema] de [materia]', { tema: 'Krebs', materia: ' ' })).toBe('Estudio Krebs de [materia]')
  })

  it('las ocho categorías tienen prompts con id único y sin guiones largos', () => {
    expect(CATEGORIAS_PROMPTS).toHaveLength(8)
    const ids = CATEGORIAS_PROMPTS.flatMap(c => c.prompts.map(p => p.id))
    expect(new Set(ids).size).toBe(ids.length)
    for (const c of CATEGORIAS_PROMPTS) for (const p of c.prompts) expect(p.texto + p.titulo + p.uso).not.toContain('—')
  })
})
