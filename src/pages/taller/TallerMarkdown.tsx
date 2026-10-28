/* Taller — laboratorio .md (/taller/markdown)
 *
 * Editor a la izquierda y vista previa a la derecha; en móvil, pestañas
 * Editar / Vista previa. Plantillas precargables, guía mínima de sintaxis y
 * descarga como AAAA-MM-DD_materia_tipo.md. La vista previa se sanea con
 * DOMPurify (lib/markdown.ts). */

import { useDeferredValue, useId, useMemo, useState } from 'react'
import { DownloadSimple } from '@phosphor-icons/react'
import { useAlmacenLocal } from './lib/almacen'
import { descargarTexto, hoyIso } from './lib/archivos'
import { renderMarkdown, slug } from './lib/markdown'
import { PLANTILLAS_MD } from './taller.plantillas-md'
import { Aviso, DatosLocales, EncabezadoHerramienta, btnPrimario, btnSecundario, campo } from './ui/comun'
import './taller.css'

interface Datos { texto: string; materia: string; tipo: string }
const vacio = (): Datos => ({ texto: PLANTILLAS_MD[0].contenido, materia: '', tipo: PLANTILLAS_MD[0].tipo })
function normalizar(v: unknown): Datos {
  const d = v as Partial<Datos>
  const base = vacio()
  return {
    texto: typeof d?.texto === 'string' ? d.texto : base.texto,
    materia: typeof d?.materia === 'string' ? d.materia : '',
    tipo: typeof d?.tipo === 'string' && d.tipo ? d.tipo : base.tipo,
  }
}

const GUIA = [
  { md: '# Título', efecto: 'Título principal' },
  { md: '## Sección', efecto: 'Subtítulo' },
  { md: '- elemento', efecto: 'Lista con viñetas' },
  { md: '1. elemento', efecto: 'Lista numerada' },
  { md: '**negritas**', efecto: 'Texto en negritas' },
  { md: '| A | B |\n| --- | --- |\n| 1 | 2 |', efecto: 'Tabla (encabezado, separador y filas)' },
]

export function TallerMarkdown() {
  const { valor: d, setValor, disponible, borrar } = useAlmacenLocal<Datos>('markdown', vacio, normalizar)
  const [pestana, setPestana] = useState<'editar' | 'vista'>('editar')
  const [plantilla, setPlantilla] = useState(PLANTILLAS_MD[0].id)
  const [confirmar, setConfirmar] = useState(false)
  const [aviso, setAviso] = useState('')
  const uid = useId()
  const id = (s: string) => `${uid}-${s}`
  const diferido = useDeferredValue(d.texto)
  const html = useMemo(() => renderMarkdown(diferido), [diferido])

  const nombreArchivo = `${hoyIso()}_${slug(d.materia) || 'materia'}_${d.tipo}.md`

  function cargarPlantilla() {
    const p = PLANTILLAS_MD.find(x => x.id === plantilla)!
    setValor(prev => ({ ...prev, texto: p.contenido, tipo: p.tipo }))
    setConfirmar(false)
    setAviso(`Plantilla «${p.nombre}» cargada.`)
  }

  function descargar() {
    descargarTexto(nombreArchivo, d.texto, 'text/markdown')
    setAviso(`Descargado como ${nombreArchivo}.`)
  }

  const tabBase = 'flex-1 min-h-[44px] rounded-xl text-[0.9375rem]'

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-12 flex flex-col gap-6">
      <EncabezadoHerramienta bloque="Bloque 5 · El formato .md" titulo="Laboratorio .md">
        <p>Markdown es texto simple con unas marcas (#, -, **) que cualquier app y cualquier IA entienden. Tus apuntes quedan ligeros, buscables y tuyos para siempre.</p>
      </EncabezadoHerramienta>

      <DatosLocales disponible={disponible} onBorrar={() => { borrar(); setAviso('Datos borrados.') }} />

      <div className="card p-4 sm:p-5 grid gap-3 sm:grid-cols-[1fr_auto] items-end">
        <div className="flex flex-col gap-1.5 min-w-0">
          <label htmlFor={id('pl')} className="text-sm text-zinc-600">Plantilla</label>
          <select id={id('pl')} className={campo} value={plantilla} onChange={e => { setPlantilla(e.target.value); setConfirmar(false) }}>
            {PLANTILLAS_MD.map(p => <option key={p.id} value={p.id}>{p.nombre}</option>)}
          </select>
        </div>
        {confirmar ? (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-zinc-700">¿Reemplazar lo que escribiste?</span>
            <button type="button" className={btnPrimario} onClick={cargarPlantilla}>Sí, reemplazar</button>
            <button type="button" className={btnSecundario} onClick={() => setConfirmar(false)}>Cancelar</button>
          </div>
        ) : (
          <button type="button" className={btnSecundario} onClick={() => (d.texto.trim() ? setConfirmar(true) : cargarPlantilla())}>
            Cargar plantilla
          </button>
        )}
      </div>

      {/* Pestañas (móvil) */}
      <div role="tablist" aria-label="Vista" className="flex gap-1 p-1 rounded-2xl bg-surface-2 md:hidden">
        <button type="button" role="tab" id={id('tab-e')} aria-selected={pestana === 'editar'} aria-controls={id('panel-e')}
                onClick={() => setPestana('editar')}
                className={`${tabBase} ${pestana === 'editar' ? 'bg-surface text-zinc-900 shadow-sm' : 'text-zinc-600'}`}>Editar</button>
        <button type="button" role="tab" id={id('tab-v')} aria-selected={pestana === 'vista'} aria-controls={id('panel-v')}
                onClick={() => setPestana('vista')}
                className={`${tabBase} ${pestana === 'vista' ? 'bg-surface text-zinc-900 shadow-sm' : 'text-zinc-600'}`}>Vista previa</button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div id={id('panel-e')} role="tabpanel" aria-labelledby={id('tab-e')}
             className={`${pestana === 'editar' ? '' : 'hidden'} md:block min-w-0`}>
          <label htmlFor={id('ed')} className="sr-only">Texto en Markdown</label>
          <textarea
            id={id('ed')}
            value={d.texto}
            onChange={e => setValor(p => ({ ...p, texto: e.target.value }))}
            spellCheck
            className="w-full h-[28rem] md:h-[36rem] rounded-2xl border border-zinc-200 bg-surface p-4 text-[0.9375rem] leading-relaxed text-zinc-900 font-mono focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div id={id('panel-v')} role="tabpanel" aria-labelledby={id('tab-v')}
             className={`${pestana === 'vista' ? '' : 'hidden'} md:block min-w-0`}>
          <div className="card p-4 sm:p-5 h-[28rem] md:h-[36rem] overflow-y-auto">
            <div className="md-vista" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>

      <div className="card p-4 sm:p-5 grid gap-3 sm:grid-cols-[1fr_auto] items-end">
        <div className="flex flex-col gap-1.5 min-w-0">
          <label htmlFor={id('mat')} className="text-sm text-zinc-600">Materia (para el nombre del archivo)</label>
          <input id={id('mat')} className={campo} value={d.materia} onChange={e => setValor(p => ({ ...p, materia: e.target.value }))} placeholder="Histología" />
          <p className="text-sm text-zinc-500 break-all">Se guardará como <span className="text-zinc-800">{nombreArchivo}</span></p>
        </div>
        <button type="button" className={btnPrimario} onClick={descargar}>
          <DownloadSimple weight="bold" className="w-[18px] h-[18px]" aria-hidden="true" />
          Descargar .md
        </button>
      </div>
      <Aviso texto={aviso} />

      <details className="card p-4 sm:p-5">
        <summary className="cursor-pointer min-h-[44px] flex items-center font-display text-xl font-normal text-zinc-900">Guía rápida de sintaxis</summary>
        <table className="w-full text-[0.9375rem] mt-3">
          <thead>
            <tr className="text-left text-sm text-zinc-500">
              <th scope="col" className="font-normal pb-2">Escribes</th>
              <th scope="col" className="font-normal pb-2">Obtienes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200">
            {GUIA.map(g => (
              <tr key={g.md}>
                <td className="py-2 pr-3 align-top"><code className="whitespace-pre text-sm bg-surface-2 rounded-md px-1.5 py-0.5 inline-block">{g.md}</code></td>
                <td className="py-2 text-zinc-700 align-top">{g.efecto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </div>
  )
}
