/* Taller — generador de instrucciones personalizadas (/taller/instrucciones)
 *
 * Formulario a la izquierda (arriba en móvil) y el texto generado en vivo con
 * botón Copiar. Incluye dónde pegarlo en ChatGPT, Gemini y Claude, y un
 * ejemplo «estilo directo» colapsable tomado de taller.content.ts. */

import { useId, useMemo, useState } from 'react'
import { Copy } from '@phosphor-icons/react'
import { useAlmacenLocal } from './lib/almacen'
import { copiarTexto } from './lib/portapapeles'
import {
  FORMATOS, IDIOMAS, TONOS, generarInstrucciones,
  type FormatoSalida, type Idioma, type RespuestasInstrucciones, type Tono,
} from './lib/instrucciones'
import { EJEMPLO_INSTRUCCIONES_DIRECTO } from './taller.content'
import { Aviso, DatosLocales, EncabezadoHerramienta, btnPrimario, campo } from './ui/comun'

const vacio = (): RespuestasInstrucciones => ({
  materia: '', semestre: '', domino: '', cuesta: '', libro: '', tono: 'neutral', formato: 'vinetas', idioma: 'es',
})

function normalizar(v: unknown): RespuestasInstrucciones {
  const base = vacio()
  const d = (v ?? {}) as Partial<RespuestasInstrucciones>
  for (const k of ['materia', 'semestre', 'domino', 'cuesta', 'libro'] as const) if (typeof d[k] === 'string') base[k] = d[k]!
  if (TONOS.some(t => t.id === d.tono)) base.tono = d.tono!
  if (FORMATOS.some(f => f.id === d.formato)) base.formato = d.formato!
  if (IDIOMAS.some(i => i.id === d.idioma)) base.idioma = d.idioma!
  return base
}

const DONDE_PEGAR = [
  { app: 'ChatGPT', donde: 'Configuración, Personalización, Instrucciones personalizadas. Pega el texto en el campo de cómo quieres que responda.' },
  { app: 'Gemini', donde: 'Gems: crea un Gem nuevo (por ejemplo «Tutor de Histología») y pega el texto en sus instrucciones.' },
  { app: 'Claude', donde: 'Configuración, Perfil, preferencias personales. También puedes crear un Proyecto por materia y pegarlo en sus instrucciones.' },
]

export function TallerInstrucciones() {
  const { valor: r, setValor, disponible, borrar } = useAlmacenLocal<RespuestasInstrucciones>('instrucciones', vacio, normalizar)
  const [aviso, setAviso] = useState('')
  const uid = useId()
  const id = (s: string) => `${uid}-${s}`
  const texto = useMemo(() => generarInstrucciones(r), [r])

  const set = <K extends keyof RespuestasInstrucciones>(k: K, v: RespuestasInstrucciones[K]) => setValor(p => ({ ...p, [k]: v }))

  async function copiar() {
    setAviso(await copiarTexto(texto) ? 'Instrucciones copiadas al portapapeles.' : 'No se pudo copiar: selecciona el texto y cópialo a mano.')
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-12 flex flex-col gap-6">
      <EncabezadoHerramienta bloque="Bloque 4 · IA como tutor" titulo="Instrucciones para tu IA">
        <p>Llena el formulario y copia el resultado. Las instrucciones personalizadas hacen que la IA te enseñe como tutor (preguntas y pistas) en lugar de darte las respuestas hechas.</p>
      </EncabezadoHerramienta>

      <DatosLocales disponible={disponible} onBorrar={() => { borrar(); setAviso('Datos borrados.') }} />

      <div className="grid gap-6 lg:grid-cols-2 items-start">
        <form className="card p-4 sm:p-6 flex flex-col gap-4" onSubmit={e => e.preventDefault()} aria-label="Datos para tus instrucciones">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor={id('mat')} className="text-sm text-zinc-600">Materia</label>
              <input id={id('mat')} className={campo} value={r.materia} onChange={e => set('materia', e.target.value)} placeholder="Histología" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor={id('sem')} className="text-sm text-zinc-600">Semestre</label>
              <input id={id('sem')} className={campo} value={r.semestre} onChange={e => set('semestre', e.target.value)} placeholder="primer" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor={id('dom')} className="text-sm text-zinc-600">Lo que domino</label>
            <textarea id={id('dom')} rows={2} className={`${campo} py-2`} value={r.domino} onChange={e => set('domino', e.target.value)}
                      placeholder="Tipos de epitelio y sus funciones" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor={id('cue')} className="text-sm text-zinc-600">Lo que me cuesta</label>
            <textarea id={id('cue')} rows={2} className={`${campo} py-2`} value={r.cuesta} onChange={e => set('cuesta', e.target.value)}
                      placeholder="Distinguir los tipos de tejido conjuntivo al microscopio" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor={id('lib')} className="text-sm text-zinc-600">Libro de referencia</label>
            <input id={id('lib')} className={campo} value={r.libro} onChange={e => set('libro', e.target.value)} placeholder="Ross, Histología: texto y atlas" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor={id('tono')} className="text-sm text-zinc-600">Tono</label>
              <select id={id('tono')} className={campo} value={r.tono} onChange={e => set('tono', e.target.value as Tono)}>
                {TONOS.map(t => <option key={t.id} value={t.id}>{t.nombre}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor={id('fmt')} className="text-sm text-zinc-600">Formato de salida</label>
              <select id={id('fmt')} className={campo} value={r.formato} onChange={e => set('formato', e.target.value as FormatoSalida)}>
                {FORMATOS.map(f => <option key={f.id} value={f.id}>{f.nombre}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor={id('idi')} className="text-sm text-zinc-600">Idioma</label>
              <select id={id('idi')} className={campo} value={r.idioma} onChange={e => set('idioma', e.target.value as Idioma)}>
                {IDIOMAS.map(i => <option key={i.id} value={i.id}>{i.nombre}</option>)}
              </select>
            </div>
          </div>
        </form>

        <section aria-labelledby={id('h-res')} className="card p-4 sm:p-6 flex flex-col gap-3 lg:sticky lg:top-20">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 id={id('h-res')} className="font-display text-xl font-normal text-zinc-900">Tus instrucciones</h2>
            <button type="button" className={btnPrimario} onClick={copiar}>
              <Copy weight="bold" className="w-[18px] h-[18px]" aria-hidden="true" />
              Copiar
            </button>
          </div>
          <Aviso texto={aviso} />
          <pre tabIndex={0} aria-label="Texto generado"
               className="whitespace-pre-wrap break-words rounded-2xl bg-surface-2 p-4 text-sm leading-relaxed text-zinc-800 font-sans max-h-[32rem] overflow-y-auto">
            {texto}
          </pre>
        </section>
      </div>

      <section aria-labelledby="h-donde" className="card p-4 sm:p-6 flex flex-col gap-3">
        <h2 id="h-donde" className="font-display text-xl font-normal text-zinc-900">Dónde pegarlo</h2>
        <table className="w-full text-[0.9375rem]">
          <thead>
            <tr className="text-left text-sm text-zinc-500">
              <th scope="col" className="font-normal pb-2 w-24">App</th>
              <th scope="col" className="font-normal pb-2">Dónde</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200">
            {DONDE_PEGAR.map(d => (
              <tr key={d.app}>
                <th scope="row" className="font-medium text-left align-top py-2 pr-3 text-zinc-900">{d.app}</th>
                <td className="py-2 text-zinc-700">{d.donde}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-sm text-zinc-500">Los menús de estas apps cambian seguido; si no encuentras la opción, busca «instrucciones» o «personalización» en su configuración.</p>
      </section>

      {EJEMPLO_INSTRUCCIONES_DIRECTO && (
        <details className="card p-4 sm:p-6 group">
          <summary className="cursor-pointer min-h-[44px] flex items-center font-display text-xl font-normal text-zinc-900">
            Ejemplo: estilo directo
          </summary>
          <pre className="mt-3 whitespace-pre-wrap break-words rounded-2xl bg-surface-2 p-4 text-sm leading-relaxed text-zinc-800 font-sans">
            {EJEMPLO_INSTRUCCIONES_DIRECTO}
          </pre>
        </details>
      )}
    </div>
  )
}
