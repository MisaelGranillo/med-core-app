/* Taller — portada (/taller)
 *
 * Qué es el taller, cuándo y cómo; la regla del taller; los tres materiales
 * principales y las herramientas en el orden de los bloques. Fecha, modalidad
 * y enlaces salen de taller.config.ts. */

import { Link } from 'react-router-dom'
import { ArrowRight, ArrowSquareOut, CalendarPlus, DeviceMobile, DownloadSimple, FileDoc, Presentation } from '@phosphor-icons/react'
import type { Icon } from '@phosphor-icons/react'
import { TALLER } from './taller.config'
import { HERRAMIENTAS } from './taller.herramientas'

const POR_CONFIRMAR = 'Por confirmar'

function MaterialExterno({ href, titulo, detalle, icon: Ic }: { href: string; titulo: string; detalle: string; icon: Icon }) {
  const contenido = (
    <>
      <span className="w-11 h-11 rounded-2xl bg-primary-tint text-primary flex items-center justify-center flex-shrink-0">
        <Ic weight="regular" className="w-5 h-5" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-base text-zinc-900">{titulo}</span>
        <span className="block text-sm text-zinc-500">{href ? detalle : 'Enlace pendiente'}</span>
      </span>
      {href && <ArrowSquareOut weight="regular" className="w-5 h-5 text-zinc-400 flex-shrink-0" aria-hidden="true" />}
    </>
  )
  if (!href) {
    return (
      <div className="card p-5 flex items-center gap-4 opacity-70" aria-disabled="true">
        {contenido}
      </div>
    )
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="card card-interactive p-5 flex items-center gap-4">
      {contenido}
      <span className="sr-only">(se abre en una pestaña nueva)</span>
    </a>
  )
}

export function TallerInicio() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-12 flex flex-col gap-8">
      <header className="flex flex-col gap-4">
        <h1 className="font-display font-light text-[2.25rem] sm:text-[2.75rem] leading-[1.05] tracking-[-0.025em] text-zinc-900 [text-wrap:balance]">
          {TALLER.titulo}
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 max-w-[60ch]">{TALLER.resumen}</p>
        <dl className="flex flex-wrap gap-x-8 gap-y-3 text-[0.9375rem]">
          <div>
            <dt className="text-sm text-zinc-500">Fecha</dt>
            <dd className="text-zinc-900">{TALLER.fecha || POR_CONFIRMAR}</dd>
          </div>
          <div>
            <dt className="text-sm text-zinc-500">Modalidad</dt>
            <dd className="text-zinc-900">{TALLER.modalidad || POR_CONFIRMAR}</dd>
          </div>
          <div>
            <dt className="text-sm text-zinc-500">Duración</dt>
            <dd className="text-zinc-900">{TALLER.duracion}</dd>
          </div>
          <div>
            <dt className="text-sm text-zinc-500">Para</dt>
            <dd className="text-zinc-900">{TALLER.publico}</dd>
          </div>
        </dl>
        {TALLER.enlaces.calendarioTaller && (
          <a
            href={TALLER.enlaces.calendarioTaller}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start inline-flex items-center gap-2 min-h-[44px] px-4 rounded-2xl bg-primary text-primary-fg text-[0.9375rem] hover:bg-primary-hover transition-colors duration-150"
          >
            <CalendarPlus weight="bold" className="w-[18px] h-[18px]" aria-hidden="true" />
            Agregar a mi Google Calendar
            <span className="sr-only">(se abre en una pestaña nueva)</span>
          </a>
        )}
        <p className="flex items-start gap-3 rounded-2xl bg-surface-2 px-4 py-3 text-[0.9375rem] text-zinc-800 max-w-[60ch]">
          <DeviceMobile weight="regular" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
          <span><span className="font-medium">Regla del taller:</span> {TALLER.regla}</span>
        </p>
      </header>

      <section className="flex flex-col gap-3" aria-labelledby="h-materiales">
        <h2 id="h-materiales" className="font-display text-xl font-normal text-zinc-900">Materiales</h2>
        <div className="grid gap-3 md:grid-cols-3">
          <Link to="/taller/descargas" className="card card-interactive p-5 flex items-center gap-4 border-primary">
            <span className="w-11 h-11 rounded-2xl bg-primary text-primary-fg flex items-center justify-center flex-shrink-0">
              <DownloadSimple weight="bold" className="w-5 h-5" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-base text-zinc-900">Descargar todo</span>
              <span className="block text-sm text-zinc-500">Cuaderno y 9 plantillas en PDF</span>
            </span>
            <ArrowRight weight="regular" className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
          </Link>
          <MaterialExterno
            href={TALLER.enlaces.copiaCuadernoGoogleDocs}
            titulo="Hacer mi copia del cuaderno"
            detalle="En tu Google Docs, para llenarla desde el celular"
            icon={FileDoc}
          />
          <MaterialExterno
            href={TALLER.enlaces.presentacionCanva}
            titulo="Presentación del taller"
            detalle="Diapositivas en Canva"
            icon={Presentation}
          />
        </div>
      </section>

      <section className="flex flex-col gap-3" aria-labelledby="h-herramientas">
        <h2 id="h-herramientas" className="font-display text-xl font-normal text-zinc-900">Herramientas</h2>
        <p className="text-[0.9375rem] text-zinc-500 -mt-1 max-w-[60ch]">
          En el orden del taller. Todo se guarda solo en tu dispositivo y puedes borrarlo cuando quieras.
        </p>
        <ol className="grid gap-3 sm:grid-cols-2">
          {HERRAMIENTAS.map((h, i) => {
            const Ic = h.icon
            return (
              <li key={h.slug}>
                <Link to={`/taller/${h.slug}`} className="card card-interactive h-full p-5 flex items-start gap-4">
                  <span className="w-11 h-11 rounded-2xl bg-primary-tint text-primary flex items-center justify-center flex-shrink-0">
                    <Ic weight="regular" className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm text-zinc-500">{i + 1}. {h.bloque}</span>
                    <span className="block text-base text-zinc-900 mt-0.5">{h.titulo}</span>
                    <span className="block text-sm text-zinc-600 mt-1">{h.resumen}</span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ol>
      </section>
    </div>
  )
}
