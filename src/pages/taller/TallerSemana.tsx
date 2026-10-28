/* Taller — auditoría de 168 horas (/taller/semana)
 *
 * Horas reales y horas objetivo por rubro, total en vivo contra las 168 horas
 * de la semana, gráfica de barras real vs. objetivo y exportación a .md. */

import { useId, useMemo, useState } from 'react'
import { DownloadSimple } from '@phosphor-icons/react'
import { useAlmacenLocal } from './lib/almacen'
import { celdaMd, descargarTexto, horasTexto, hoyIso } from './lib/archivos'
import { Aviso, DatosLocales, EncabezadoHerramienta, btnPrimario } from './ui/comun'

const SEMANA = 168

const RUBROS = [
  { id: 'sueno',     nombre: 'Sueño' },
  { id: 'trabajo',   nombre: 'Trabajo' },
  { id: 'traslados', nombre: 'Traslados' },
  { id: 'familia',   nombre: 'Familia y pareja' },
  { id: 'clases',    nombre: 'Clases' },
  { id: 'estudio',   nombre: 'Estudio autónomo' },
  { id: 'casa',      nombre: 'Comidas, casa e higiene' },
  { id: 'ejercicio', nombre: 'Ejercicio' },
  { id: 'pantallas', nombre: 'Pantallas sin propósito' },
  { id: 'otros',     nombre: 'Otros' },
] as const

type RubroId = typeof RUBROS[number]['id']
interface Fila { real: string; objetivo: string }
interface Datos { filas: Record<RubroId, Fila>; renuncias: string }

const vacio = (): Datos => ({
  filas: Object.fromEntries(RUBROS.map(r => [r.id, { real: '', objetivo: '' }])) as Record<RubroId, Fila>,
  renuncias: '',
})

function normalizar(v: unknown): Datos {
  const base = vacio()
  const d = v as Partial<Datos>
  for (const r of RUBROS) {
    const f = d?.filas?.[r.id]
    if (f) base.filas[r.id] = { real: String(f.real ?? ''), objetivo: String(f.objetivo ?? '') }
  }
  base.renuncias = typeof d?.renuncias === 'string' ? d.renuncias : ''
  return base
}

/** «7,5» o «7.5» → 7.5; vacío o inválido → 0; acotado a 0–168. */
function horas(s: string): number {
  const n = Number(s.replace(',', '.'))
  return Number.isFinite(n) ? Math.min(Math.max(n, 0), SEMANA) : 0
}

function estadoTotal(total: number): { texto: string; tono: 'ok' | 'falta' | 'exceso' } {
  const dif = Math.round((total - SEMANA) * 10) / 10
  if (dif === 0) return { texto: 'Cuadra exacto con las 168 horas.', tono: 'ok' }
  if (dif > 0) return { texto: `Te pasas por ${horasTexto(dif)} h: la semana solo tiene 168.`, tono: 'exceso' }
  return { texto: `Faltan ${horasTexto(-dif)} h por asignar.`, tono: 'falta' }
}

export function TallerSemana() {
  const { valor: datos, setValor, disponible, borrar } = useAlmacenLocal<Datos>('semana', vacio, normalizar)
  const [aviso, setAviso] = useState('')
  const idRenuncias = useId()

  const valores = useMemo(() => RUBROS.map(r => ({
    ...r, real: horas(datos.filas[r.id].real), objetivo: horas(datos.filas[r.id].objetivo),
  })), [datos])
  const totalReal = valores.reduce((s, v) => s + v.real, 0)
  const totalObj = valores.reduce((s, v) => s + v.objetivo, 0)
  const estReal = estadoTotal(totalReal)
  const estObj = estadoTotal(totalObj)
  const maximo = Math.max(1, ...valores.flatMap(v => [v.real, v.objetivo]))

  const cambiar = (id: RubroId, campo: keyof Fila, texto: string) =>
    setValor(d => ({ ...d, filas: { ...d.filas, [id]: { ...d.filas[id], [campo]: texto } } }))

  function exportar() {
    const fecha = hoyIso()
    const filas = valores.map(v =>
      `| ${celdaMd(v.nombre)} | ${horasTexto(v.real)} | ${horasTexto(v.objetivo)} | ${horasTexto(Math.round((v.objetivo - v.real) * 10) / 10)} |`)
    const md = [
      '# Auditoría de 168 horas',
      '',
      `Fecha: ${fecha}`,
      '',
      '| Rubro | Real (h) | Objetivo (h) | Cambio (h) |',
      '| --- | ---: | ---: | ---: |',
      ...filas,
      `| **Total** | **${horasTexto(totalReal)}** | **${horasTexto(totalObj)}** | |`,
      '',
      `- Semana real: ${estReal.texto}`,
      `- Semana objetivo: ${estObj.texto}`,
      '',
      '## Mis renuncias',
      '',
      datos.renuncias.trim() || '_Sin anotar._',
      '',
    ].join('\n')
    descargarTexto(`${fecha}_auditoria-168-horas.md`, md, 'text/markdown')
    setAviso('Archivo .md descargado.')
  }

  const tonoClase = (t: 'ok' | 'falta' | 'exceso') =>
    t === 'exceso' ? 'bg-primary-tint text-primary-ink' : t === 'ok' ? 'bg-surface-2 text-zinc-800' : 'bg-surface-2 text-zinc-700'

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-12 flex flex-col gap-6">
      <EncabezadoHerramienta bloque="Bloque 2 · Podemos mucho, no todo" titulo="Auditoría de 168 horas">
        <p>Anota cuántas horas a la semana se van hoy en cada rubro y cuántas quieres darle. Registra tu semana real, no la que te gustaría.</p>
      </EncabezadoHerramienta>

      <DatosLocales disponible={disponible} onBorrar={() => { borrar(); setAviso('Datos borrados.') }} />

      <section aria-labelledby="h-tabla" className="card p-4 sm:p-6 flex flex-col gap-4">
        <h2 id="h-tabla" className="font-display text-xl font-normal text-zinc-900">Horas por semana</h2>
        <table className="w-full text-[0.9375rem]">
          <thead>
            <tr className="text-left text-sm text-zinc-500">
              <th scope="col" className="font-normal pb-2">Rubro</th>
              <th scope="col" className="font-normal pb-2 w-[5.5rem] sm:w-28 text-right">Real</th>
              <th scope="col" className="font-normal pb-2 w-[5.5rem] sm:w-28 text-right">Objetivo</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200">
            {RUBROS.map(r => (
              <tr key={r.id}>
                <th scope="row" className="font-normal text-zinc-900 py-2 pr-2">{r.nombre}</th>
                {(['real', 'objetivo'] as const).map(c => (
                  <td key={c} className="py-2 pl-2">
                    <input
                      type="text"
                      inputMode="decimal"
                      aria-label={`${r.nombre}, horas ${c === 'real' ? 'reales' : 'objetivo'} por semana`}
                      value={datos.filas[r.id][c]}
                      onChange={e => cambiar(r.id, c, e.target.value.replace(/[^\d.,]/g, ''))}
                      placeholder="0"
                      className="w-full min-h-[44px] rounded-xl border border-zinc-200 bg-surface px-3 text-right tabular-nums text-zinc-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-zinc-300">
              <th scope="row" className="text-left font-medium text-zinc-900 pt-3">Total</th>
              <td className="text-right tabular-nums font-medium text-zinc-900 pt-3 pr-3">{horasTexto(totalReal)}</td>
              <td className="text-right tabular-nums font-medium text-zinc-900 pt-3 pr-3">{horasTexto(totalObj)}</td>
            </tr>
          </tfoot>
        </table>

        <div aria-live="polite" className="grid gap-2 sm:grid-cols-2">
          <p className={`rounded-xl px-3 py-2 text-[0.9375rem] ${tonoClase(estReal.tono)}`}>
            <span className="font-medium">Real:</span> {estReal.texto}
          </p>
          <p className={`rounded-xl px-3 py-2 text-[0.9375rem] ${tonoClase(estObj.tono)}`}>
            <span className="font-medium">Objetivo:</span> {estObj.texto}
          </p>
        </div>
      </section>

      <section aria-labelledby="h-grafica" className="card p-4 sm:p-6 flex flex-col gap-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 id="h-grafica" className="font-display text-xl font-normal text-zinc-900">Real contra objetivo</h2>
          <p className="flex items-center gap-4 text-sm text-zinc-600" aria-hidden="true">
            <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-zinc-400" /> Real</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-primary" /> Objetivo</span>
          </p>
        </div>
        <ul className="flex flex-col gap-3">
          {valores.map(v => (
            <li key={v.id} className="grid grid-cols-[minmax(0,8.5rem)_1fr] sm:grid-cols-[12rem_1fr] items-center gap-3">
              <span className="text-sm text-zinc-700 truncate">{v.nombre}</span>
              <span className="flex flex-col gap-1" aria-label={`${v.nombre}: real ${horasTexto(v.real)} h, objetivo ${horasTexto(v.objetivo)} h`} role="img">
                <span className="flex items-center gap-2">
                  <span className="h-2.5 rounded-full bg-zinc-400" style={{ width: `${(v.real / maximo) * 85}%` }} />
                  <span className="text-xs tabular-nums text-zinc-500">{horasTexto(v.real)}</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2.5 rounded-full bg-primary" style={{ width: `${(v.objetivo / maximo) * 85}%` }} />
                  <span className="text-xs tabular-nums text-zinc-500">{horasTexto(v.objetivo)}</span>
                </span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="h-renuncias" className="card p-4 sm:p-6 flex flex-col gap-3">
        <h2 id="h-renuncias" className="font-display text-xl font-normal text-zinc-900">Mis renuncias</h2>
        <label htmlFor={idRenuncias} className="text-[0.9375rem] text-zinc-600">
          Si el objetivo no cabe en 168 horas, algo tiene que salir. ¿A qué renuncias o qué reduces este módulo?
        </label>
        <textarea
          id={idRenuncias}
          rows={4}
          value={datos.renuncias}
          onChange={e => setValor(d => ({ ...d, renuncias: e.target.value }))}
          className="w-full rounded-xl border border-zinc-200 bg-surface px-3 py-2 text-[0.9375rem] text-zinc-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
      </section>

      <div className="flex flex-col gap-2">
        <div>
          <button type="button" className={btnPrimario} onClick={exportar}>
            <DownloadSimple weight="bold" className="w-[18px] h-[18px]" aria-hidden="true" />
            Exportar a .md
          </button>
        </div>
        <Aviso texto={aviso} />
      </div>
    </div>
  )
}
