/* Taller — biblioteca de prompts (/taller/prompts)
 *
 * Los prompts vienen de taller.prompts.ts. Cada campo [x] se llena en línea
 * antes de copiar; un mismo campo (p. ej. [tema]) comparte valor en todos los
 * prompts para no escribirlo varias veces. */

import { useId, useState } from 'react'
import { Copy } from '@phosphor-icons/react'
import { useAlmacenLocal } from './lib/almacen'
import { copiarTexto } from './lib/portapapeles'
import { CATEGORIAS_PROMPTS, camposDe, llenarPrompt, type Prompt } from './taller.prompts'
import { DatosLocales, EncabezadoHerramienta, btnPrimario, campo } from './ui/comun'

/** Campos que suelen ser textos largos: se llenan con un área de texto. */
const LARGOS = new Set(['mi explicación', 'mi respuesta', 'texto', 'transcripción'])

interface Datos { valores: Record<string, string> }
const vacio = (): Datos => ({ valores: {} })
function normalizar(v: unknown): Datos {
  const d = v as Partial<Datos>
  const valores: Record<string, string> = {}
  if (d?.valores && typeof d.valores === 'object') {
    for (const [k, x] of Object.entries(d.valores)) if (typeof x === 'string') valores[k] = x
  }
  return { valores }
}

function TarjetaPrompt({ p, valores, onCampo }: { p: Prompt; valores: Record<string, string>; onCampo: (c: string, v: string) => void }) {
  const uid = useId()
  const [aviso, setAviso] = useState('')
  const campos = camposDe(p.texto)
  const final = llenarPrompt(p.texto, valores)
  const pendientes = campos.filter(c => !valores[c]?.trim())

  async function copiar() {
    const ok = await copiarTexto(final)
    setAviso(ok
      ? pendientes.length ? `Copiado. Faltan por llenar: ${pendientes.join(', ')}.` : 'Copiado al portapapeles.'
      : 'No se pudo copiar: selecciona el texto y cópialo a mano.')
  }

  return (
    <li className="card p-4 sm:p-5 flex flex-col gap-3">
      <div>
        <h3 className="text-base text-zinc-900">{p.titulo}</h3>
        <p className="text-sm text-zinc-500">{p.uso}</p>
      </div>
      {campos.length > 0 && (
        <div className="grid gap-3 sm:grid-cols-2">
          {campos.map(c => {
            const id = `${uid}-${c}`
            const largo = LARGOS.has(c)
            return (
              <div key={c} className={`flex flex-col gap-1.5 ${largo ? 'sm:col-span-2' : ''}`}>
                <label htmlFor={id} className="text-sm text-zinc-600 first-letter:uppercase">{c}</label>
                {largo ? (
                  <textarea id={id} rows={3} className={`${campo} py-2`} value={valores[c] ?? ''} onChange={e => onCampo(c, e.target.value)}
                            placeholder="Pégalo aquí o déjalo vacío y pégalo en el chat" />
                ) : (
                  <input id={id} className={campo} value={valores[c] ?? ''} onChange={e => onCampo(c, e.target.value)} />
                )}
              </div>
            )
          })}
        </div>
      )}
      <p className="whitespace-pre-wrap break-words rounded-2xl bg-surface-2 p-3 text-sm leading-relaxed text-zinc-800">{final}</p>
      <div className="flex flex-wrap items-center gap-3">
        <button type="button" className={btnPrimario} onClick={copiar} aria-label={`Copiar el prompt «${p.titulo}»`}>
          <Copy weight="bold" className="w-[18px] h-[18px]" aria-hidden="true" />
          Copiar
        </button>
        <p role="status" aria-live="polite" className="text-sm text-primary-ink">{aviso}</p>
      </div>
    </li>
  )
}

export function TallerPrompts() {
  const { valor, setValor, disponible, borrar } = useAlmacenLocal<Datos>('prompts', vacio, normalizar)
  const [cat, setCat] = useState(CATEGORIAS_PROMPTS[0].id)
  const actual = CATEGORIAS_PROMPTS.find(c => c.id === cat) ?? CATEGORIAS_PROMPTS[0]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-12 flex flex-col gap-6">
      <EncabezadoHerramienta bloque="Bloque 4 · IA como tutor" titulo="Biblioteca de prompts">
        <p>Llena los campos y copia. Los campos que repites (como el tema o la materia) se llenan una vez y sirven para todos los prompts.</p>
      </EncabezadoHerramienta>

      <DatosLocales disponible={disponible} onBorrar={borrar} />

      <div role="group" aria-label="Categorías" className="flex gap-2 overflow-x-auto md:flex-wrap md:overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0 pb-1 [scrollbar-width:none]">
        {CATEGORIAS_PROMPTS.map(c => (
          <button
            key={c.id}
            type="button"
            aria-pressed={cat === c.id}
            onClick={() => setCat(c.id)}
            className={`flex-shrink-0 whitespace-nowrap min-h-[44px] px-4 rounded-2xl border text-[0.9375rem] transition-colors
              ${cat === c.id ? 'bg-primary-tint border-primary text-primary-ink' : 'bg-surface border-zinc-200 text-zinc-700 hover:border-zinc-300'}`}
          >
            {c.nombre}
          </button>
        ))}
      </div>

      <section aria-labelledby="h-cat-prompts" className="flex flex-col gap-3">
        <h2 id="h-cat-prompts" className="font-display text-xl font-normal text-zinc-900">{actual.nombre}</h2>
        <ul className="flex flex-col gap-3">
          {actual.prompts.map(p => (
            <TarjetaPrompt key={p.id} p={p} valores={valor.valores}
                           onCampo={(c, v) => setValor(d => ({ valores: { ...d.valores, [c]: v } }))} />
          ))}
        </ul>
      </section>
    </div>
  )
}
