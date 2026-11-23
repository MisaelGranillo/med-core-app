/* Búsqueda — ruta /search?q=…&tipo=…
 *
 * Un solo buscador para todo MedCore: temas (y sus secciones), fichas de
 * patologías, láminas del atlas, MedLex, EnLex, libros de la Librería,
 * materiales de clase y preguntas. Las fuentes se cargan al abrir la página;
 * el índice se arma una vez. Sin acentos ni mayúsculas (ignoreDiacritics). */

import { useEffect, useMemo, useState } from 'react'
import { useSearchParams, useNavigate, Link } from 'react-router-dom'
import { MagnifyingGlass, ArrowRight, ArrowSquareOut } from '@phosphor-icons/react'
import Fuse from 'fuse.js'
import { loadContent } from '../data/content'
import { topicIndex } from '../data/generated/topicIndex'
import { getActivePlan, libraryUrl } from '../data/plans'
import { nombreCorto } from '../data/agrupar'

type Tipo = 'tema' | 'seccion' | 'ficha' | 'lamina' | 'medlex' | 'enlex' | 'libro' | 'material' | 'pregunta'

interface Item {
  tipo: Tipo
  titulo: string
  detalle: string
  texto: string
  href: string
  externo?: boolean
  emoji?: string
  contexto?: string
}

const GRUPOS: { tipo: Tipo; label: string }[] = [
  { tipo: 'tema', label: 'Temas' },
  { tipo: 'seccion', label: 'Secciones de temas' },
  { tipo: 'ficha', label: 'Fichas de patologías' },
  { tipo: 'lamina', label: 'Láminas del atlas' },
  { tipo: 'medlex', label: 'MedLex' },
  { tipo: 'enlex', label: 'EnLex' },
  { tipo: 'material', label: 'Materiales de clase' },
  { tipo: 'libro', label: 'Librería' },
  { tipo: 'pregunta', label: 'Preguntas' },
]

const materiaDe: Record<string, string> = {}
const nombreMateria: Record<string, string> = {}
for (const p of getActivePlan().periods) for (const s of p.subjects) nombreMateria[s.id] = nombreCorto(s.name)
for (const t of topicIndex) if (t.materia) materiaDe[t.id] = nombreMateria[t.materia] ?? ''

const recorte = (s: string, n = 140) => (s.length > n ? `${s.slice(0, n).trimEnd()}…` : s)

async function construirIndice(): Promise<Item[]> {
  const [content, atlasMod, patoMod, medlexMod, medenMod, libMod] = await Promise.all([
    loadContent(),
    import('../data/atlas-topics'),
    import('../data/patologias'),
    import('../data/medlex-terms'),
    import('../data/meden-terms'),
    import('../data/libreria'),
  ])
  const items: Item[] = []

  for (const t of content.topics) {
    items.push({ tipo: 'tema', titulo: t.title, detalle: t.subtitle, texto: `${t.subtitle} ${(t.keyPoints ?? []).join(' ')}`, href: `/topic/${t.id}`, emoji: t.emoji, contexto: materiaDe[t.id] })
    for (const s of t.sections) {
      const partes: string[] = [...(s.keyTerms ?? [])]
      for (const b of s.blocks) {
        if (b.title) partes.push(b.title)
        if (b.content) partes.push(b.content)
        if (b.items) partes.push(...b.items)
        if (b.steps) partes.push(...b.steps)
        if (b.data) { partes.push(...b.data.headers); b.data.rows.forEach(r => partes.push(...r)) }
        if (b.left) partes.push(b.left.title, ...b.left.items)
        if (b.right) partes.push(b.right.title, ...b.right.items)
      }
      const texto = partes.join(' ')
      items.push({ tipo: 'seccion', titulo: s.title, detalle: recorte(texto), texto, href: `/topic/${t.id}#${s.id}`, emoji: t.emoji, contexto: t.title })
    }
  }

  const tituloTema = Object.fromEntries(content.topics.map(t => [t.id, t.title]))
  for (const q of content.questions) {
    items.push({ tipo: 'pregunta', titulo: q.question, detalle: `Respuesta: ${q.options[q.correctIndex]}`, texto: `${q.options[q.correctIndex]} ${q.explanation}`, href: `/quiz/${q.topicId}`, contexto: q.examen ? `Examen Semana ${q.examen.semana} · ${nombreMateria[q.examen.materia] ?? ''}` : tituloTema[q.topicId] })
  }

  for (const f of patoMod.FICHAS) {
    items.push({ tipo: 'ficha', titulo: f.title, detalle: recorte(f.resumen ?? ''), texto: `${f.aka ?? ''} ${f.ambito ?? ''} ${f.resumen ?? ''}`, href: `/patologias/${f.id}`, contexto: f.materia })
  }

  for (const a of atlasMod.atlasTopics) {
    items.push({ tipo: 'lamina', titulo: a.title, detalle: recorte(a.subtitle), texto: a.subtitle, href: `/atlas/${a.id}`, emoji: a.emoji })
  }

  for (const m of medlexMod.medlexTerms) {
    items.push({ tipo: 'medlex', titulo: m.termino, detalle: m.significado, texto: `${m.significado} ${m.ejemplos.join(' ')}`, href: `/terminologia/${m.id}` })
  }

  for (const e of medenMod.medenTerms) {
    items.push({ tipo: 'enlex', titulo: e.term, detalle: `${e.es}${e.example ? ` · «${e.example}»` : ''}`, texto: `${e.es} ${(e.forms ?? []).map(f => `${f.word} ${f.es ?? ''}`).join(' ')}`, href: `/vocabulario?semana=${e.semana}` })
  }

  for (const l of libMod.LIBROS) {
    items.push({ tipo: 'libro', titulo: l.titulo, detalle: [l.autores[0], l.edicion, l.editorial, l.anio].filter(Boolean).join(' · '), texto: `${l.autores.join(' ')} ${l.serie ?? ''} ${l.nota ?? ''}`, href: libraryUrl(l.archivo.subjectId, l.archivo.file), externo: true })
  }

  // Materiales de clase del plan (lecturas semanales y lista de materiales).
  const vistos = new Set<string>()
  for (const p of getActivePlan().periods) for (const s of p.subjects) {
    const c = s.content
    if (!c) continue
    const add = (titulo: string, file: string | undefined, nota?: string) => {
      if (!file || vistos.has(`${s.id}/${file}`)) return
      vistos.add(`${s.id}/${file}`)
      items.push({ tipo: 'material', titulo: titulo, detalle: nota ?? '', texto: nota ?? '', href: libraryUrl(s.id, file), externo: true, contexto: nombreCorto(s.name) })
    }
    for (const w of c.semanas ?? []) for (const f of w.fuentes ?? []) add(f.title, f.file, f.nota)
    for (const m of c.materiales ?? []) add(m.title, m.file)
    for (const b of c.bibliografia ?? []) {
      if (!b.file || vistos.has(`${s.id}/${b.file}`)) continue
      vistos.add(`${s.id}/${b.file}`)
      items.push({ tipo: 'libro', titulo: b.title, detalle: [b.author, b.editorial, b.year].filter(Boolean).join(' · '), texto: `${b.author ?? ''} ${b.editorial ?? ''}`, href: libraryUrl(s.id, b.file), externo: true, contexto: nombreCorto(s.name) })
    }
  }

  return items
}

/* Índice: coincidencia exacta (sin acentos) en título y texto; si no hay
 * ninguna, búsqueda tolerante a errores solo sobre los títulos. */
const norm = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
type Indice = { items: (Item & { _t: string; _x: string })[]; fuse: Fuse<Item> }
let indiceCache: Promise<Indice> | null = null
const getIndice = () => (indiceCache ??= construirIndice().then(items => ({
  items: items.map(i => ({ ...i, _t: norm(i.titulo), _x: norm(`${i.contexto ?? ''} ${i.texto}`) })),
  fuse: new Fuse(items, { keys: ['titulo'], threshold: 0.34, ignoreLocation: true, ignoreDiacritics: true, minMatchCharLength: 2 }),
})))

function buscar(ix: Indice, q: string): Item[] {
  const n = norm(q)
  const palabras = n.split(/\s+/).filter(Boolean)
  type Ix = Indice['items'][number]
  const enTitulo: Ix[] = [], enTexto: Ix[] = []
  for (const i of ix.items) {
    if (palabras.every(w => i._t.includes(w))) enTitulo.push(i)
    else if (palabras.every(w => i._t.includes(w) || i._x.includes(w))) enTexto.push(i)
  }
  enTitulo.sort((a, b) => (a._t.startsWith(n) ? 0 : 1) - (b._t.startsWith(n) ? 0 : 1) || a._t.length - b._t.length)
  const exactos = [...enTitulo, ...enTexto]
  return exactos.length ? exactos : ix.fuse.search(q, { limit: 60 }).map(r => r.item)
}

export function Search() {
  const [params, setParams] = useSearchParams()
  const navigate = useNavigate()
  const query = params.get('q') ?? ''
  const tipo = (params.get('tipo') ?? '') as Tipo | ''
  const [inputVal, setInputVal] = useState(query)
  const [fuse, setFuse] = useState<Indice | null>(null)
  const [abiertos, setAbiertos] = useState<Set<Tipo>>(new Set())

  useEffect(() => { setInputVal(query) }, [query])
  useEffect(() => {
    let vivo = true
    getIndice().then(f => { if (vivo) setFuse(f) })
    return () => { vivo = false }
  }, [])

  const resultados = useMemo(() => {
    const q = query.trim()
    if (!q || !fuse) return [] as Item[]
    return buscar(fuse, q)
  }, [query, fuse])

  const porTipo = useMemo(() => {
    const m = new Map<Tipo, Item[]>()
    for (const r of resultados) m.set(r.tipo, [...(m.get(r.tipo) ?? []), r])
    return m
  }, [resultados])

  const setTipo = (t: Tipo | '') => {
    const p = new URLSearchParams(params)
    if (t) p.set('tipo', t); else p.delete('tipo')
    setParams(p, { replace: true })
  }

  const grupos = GRUPOS.filter(g => porTipo.has(g.tipo) && (!tipo || g.tipo === tipo))

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-10">
      <h1 className="font-display font-light text-[2.25rem] sm:text-[2.75rem] leading-[1.05] tracking-[-0.025em] text-zinc-900 mb-4">
        Búsqueda
      </h1>

      <form
        onSubmit={e => { e.preventDefault(); if (inputVal.trim()) navigate(`/search?q=${encodeURIComponent(inputVal.trim())}`) }}
        className="relative mb-4"
        role="search"
      >
        <MagnifyingGlass className="w-5 h-5 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          autoFocus={!query}
          placeholder="Busca un tema, una patología, un término, un libro…"
          className="w-full bg-surface border border-zinc-200 rounded-2xl pl-11 pr-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </form>

      {query && (
        <div className="flex flex-wrap gap-1.5 mb-8">
          <button onClick={() => setTipo('')}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${!tipo ? 'bg-primary text-primary-fg' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'}`}>
            Todo <span className="opacity-60">{resultados.length}</span>
          </button>
          {GRUPOS.filter(g => porTipo.has(g.tipo)).map(g => (
            <button key={g.tipo} onClick={() => setTipo(g.tipo)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${tipo === g.tipo ? 'bg-primary text-primary-fg' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'}`}>
              {g.label} <span className="opacity-60">{porTipo.get(g.tipo)!.length}</span>
            </button>
          ))}
        </div>
      )}

      {!query && (
        <div className="card p-8 text-center text-zinc-500">
          <MagnifyingGlass weight="thin" className="w-12 h-12 mx-auto mb-3 opacity-40" />
          <p className="text-sm">Busca en temas, fichas de patologías, láminas del atlas, MedLex, EnLex, materiales de clase, libros y preguntas.</p>
        </div>
      )}

      {query && !fuse && <div className="card p-8 text-center text-zinc-500"><p className="text-sm">Preparando el índice…</p></div>}

      {query && fuse && resultados.length === 0 && (
        <div className="card p-8 text-center text-zinc-500">
          <p className="font-semibold text-zinc-700 mb-1">Sin resultados</p>
          <p className="text-sm">Prueba con otra palabra o con menos letras: «placenta», «Duchenne», «hioides», «-itis».</p>
        </div>
      )}

      <div className="space-y-8">
        {grupos.map(g => {
          const lista = porTipo.get(g.tipo)!
          const limite = tipo || abiertos.has(g.tipo) ? lista.length : 6
          return (
            <section key={g.tipo}>
              <h2 className="text-sm font-bold text-zinc-500 mb-2">{g.label} <span className="font-medium text-zinc-400">({lista.length})</span></h2>
              <ul className="space-y-2">
                {lista.slice(0, limite).map((r, i) => (
                  <li key={`${r.href}-${i}`}><Resultado r={r} /></li>
                ))}
              </ul>
              {lista.length > limite && (
                <button onClick={() => setAbiertos(new Set([...abiertos, g.tipo]))} className="mt-2 text-xs font-semibold text-primary hover:text-primary-hover">
                  Ver los {lista.length}
                </button>
              )}
            </section>
          )
        })}
      </div>
    </div>
  )
}

function Resultado({ r }: { r: Item }) {
  const cuerpo = (
    <>
      {r.emoji && <span className="text-lg flex-shrink-0 leading-none mt-0.5">{r.emoji}</span>}
      <span className="flex-1 min-w-0">
        <span className="block font-semibold text-zinc-900 text-sm leading-snug">{r.titulo}</span>
        {r.contexto && <span className="block text-[0.6875rem] font-semibold text-zinc-400 mt-0.5">{r.contexto}</span>}
        {r.detalle && <span className="block text-xs text-zinc-500 mt-0.5 line-clamp-2">{r.detalle}</span>}
      </span>
      {r.externo
        ? <ArrowSquareOut weight="bold" className="w-4 h-4 text-zinc-300 group-hover:text-zinc-500 flex-shrink-0 mt-0.5" />
        : <ArrowRight weight="bold" className="w-4 h-4 text-zinc-300 group-hover:text-zinc-500 flex-shrink-0 mt-0.5" />}
    </>
  )
  const cls = 'card px-4 py-3 flex items-start gap-3 hover:shadow-card-hover transition-shadow group'
  return r.externo
    ? <a href={r.href} target="_blank" rel="noopener noreferrer" className={cls}>{cuerpo}</a>
    : <Link to={r.href} className={cls}>{cuerpo}</Link>
}
