/* Taller — descargas (/taller/descargas)
 *
 * Todo se genera desde el manifiesto taller.descargas.ts: los botones muestran
 * formato, tamaño y páginas del manifiesto, y los enlaces apuntan a los
 * archivos estáticos de public/taller/descargas/ con su nombre original.
 * Nunca se generan PDF ni ZIP en el navegador. */

import { ArrowSquareOut, DownloadSimple, FilePdf, FileZip } from '@phosphor-icons/react'
import { TALLER } from './taller.config'
import { CARPETA_DESCARGAS, DESCARGAS, type Descarga } from './taller.descargas'
import { formatoTamano } from './formato'

function porId(id: string): Descarga {
  const d = DESCARGAS.find(x => x.id === id)
  if (!d) throw new Error(`Descarga no encontrada en el manifiesto: ${id}`)
  return d
}

function metaDe(d: Descarga): string {
  const partes = [d.formato.toUpperCase(), formatoTamano(d.bytes)]
  if (d.paginas) partes.push(d.paginas === 1 ? '1 página' : `${d.paginas} páginas`)
  return partes.join(' · ')
}

/** Enlace de descarga. El nombre accesible incluye la etiqueta visible,
 *  el nombre del archivo, el formato y el tamaño. */
function EnlaceDescarga({ d, etiqueta, grande = false, principal = false }: {
  d: Descarga; etiqueta: string; grande?: boolean; principal?: boolean
}) {
  const meta = metaDe(d)
  const Ic = d.formato === 'zip' ? FileZip : grande ? FilePdf : DownloadSimple
  const estilo = principal
    ? 'bg-primary text-primary-fg border-primary hover:bg-primary-hover'
    : 'bg-surface text-zinc-900 border-zinc-200 hover:border-primary'
  return (
    <a
      href={`${CARPETA_DESCARGAS}/${d.archivo}`}
      download={d.archivo}
      aria-label={`${etiqueta}: ${d.archivo}, ${meta}`}
      className={`inline-flex items-center gap-3 rounded-2xl border transition-colors duration-150 min-h-[44px]
        ${grande ? 'w-full px-5 py-4' : 'px-4 py-2.5'} ${estilo}`}
    >
      <Ic weight={principal ? 'bold' : 'regular'} className={`${grande ? 'w-6 h-6' : 'w-5 h-5'} flex-shrink-0`} aria-hidden="true" />
      <span className="min-w-0 flex flex-col text-left">
        <span className={grande ? 'text-base sm:text-lg' : 'text-[0.9375rem]'}>{etiqueta}</span>
        <span className={`text-sm ${principal ? 'opacity-90' : 'text-zinc-500'}`}>{meta}</span>
      </span>
    </a>
  )
}

const ETIQUETA_FRECUENCIA: Record<NonNullable<Descarga['frecuencia']>, string> = {
  'diaria': 'Uso diario',
  'semanal': 'Uso semanal',
  'por clase': 'Una por clase',
  'por examen': 'Una por examen',
  'por módulo': 'Una por módulo',
}

export function TallerDescargas() {
  const completo = porId('completo-pdf')
  const zip = porId('todo-zip')
  const cuaderno = porId('cuaderno')
  const kit = porId('kit-plantillas')
  const plantillas = DESCARGAS.filter(d => d.grupo === 'plantilla' && d.id !== 'kit-plantillas')
  const copia = TALLER.enlaces.copiaCuadernoGoogleDocs

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-12 flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="font-display font-light text-[2.25rem] sm:text-[2.75rem] leading-[1.05] tracking-[-0.025em] text-zinc-900">
          Descargas
        </h1>
        <p className="text-base text-zinc-600 max-w-[60ch]">
          Cuaderno de trabajo y kit de plantillas del {TALLER.titulo.toLowerCase()}. Puedes imprimirlos o llenarlos en pantalla.
        </p>
      </header>

      {/* 1. Todo en un solo archivo */}
      <section className="flex flex-col gap-3" aria-labelledby="h-todo">
        <h2 id="h-todo" className="font-display text-xl font-normal text-zinc-900">Todo en un solo archivo</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <EnlaceDescarga d={completo} etiqueta="Descargar todo en PDF" grande principal />
          <EnlaceDescarga d={zip} etiqueta="Descargar todo en ZIP" grande />
        </div>
        <p className="text-[0.9375rem] text-zinc-600 max-w-[65ch]">
          El PDF único sirve para leer e imprimir de corrido. El ZIP trae cada archivo por separado, para imprimir solo lo que usas a diario.
        </p>
      </section>

      {/* 2. Cuaderno de trabajo */}
      <section className="flex flex-col gap-3" aria-labelledby="h-cuaderno">
        <h2 id="h-cuaderno" className="font-display text-xl font-normal text-zinc-900">Cuaderno de trabajo</h2>
        <div className="card p-5 sm:p-6 flex flex-col gap-4">
          <p className="text-[0.9375rem] text-zinc-600 max-w-[65ch]">{cuaderno.descripcion}</p>
          <div className="flex flex-wrap gap-2">
            <EnlaceDescarga d={cuaderno} etiqueta="Descargar PDF" />
            {copia ? (
              <a
                href={copia}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-zinc-200 bg-surface px-4 py-2.5 min-h-[44px] text-[0.9375rem] text-zinc-900 hover:border-primary transition-colors duration-150"
              >
                <ArrowSquareOut weight="regular" className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                Hacer mi copia en Google Docs
                <span className="sr-only">(se abre en una pestaña nueva)</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-3 rounded-2xl border border-dashed border-zinc-300 px-4 py-2.5 min-h-[44px] text-[0.9375rem] text-zinc-500">
                Copia en Google Docs: enlace pendiente
              </span>
            )}
          </div>
          <p className="text-sm text-zinc-500 max-w-[65ch]">
            La copia en Google Docs se llena desde el celular; el PDF es para imprimir.
          </p>
        </div>
      </section>

      {/* 3. Kit de plantillas */}
      <section className="flex flex-col gap-3" aria-labelledby="h-kit">
        <h2 id="h-kit" className="font-display text-xl font-normal text-zinc-900">Kit de plantillas</h2>
        <div>
          <EnlaceDescarga d={kit} etiqueta="Descargar las 9 plantillas en un PDF" />
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {plantillas.map((p, i) => (
            <li key={p.id} className="card p-5 flex flex-col gap-3">
              <div className="min-w-0">
                <h3 className="text-base text-zinc-900">
                  <span className="text-zinc-500 tabular-nums">{i + 1}.</span> {p.titulo}
                </h3>
                <p className="text-[0.9375rem] text-zinc-600 mt-1">{p.descripcion}</p>
              </div>
              <ul className="flex flex-wrap gap-2 text-sm text-zinc-600" aria-label="Uso y formato">
                {p.frecuencia && <li className="rounded-full bg-zinc-100 px-3 py-1">{ETIQUETA_FRECUENCIA[p.frecuencia]}</li>}
                {p.orientacion && <li className="rounded-full bg-zinc-100 px-3 py-1">{p.orientacion === 'horizontal' ? 'Horizontal' : 'Vertical'}</li>}
              </ul>
              <div className="mt-auto">
                <EnlaceDescarga d={p} etiqueta="Descargar PDF" />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
