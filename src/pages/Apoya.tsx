/* Apoya — Ruta /apoya
 *
 * Aportaciones voluntarias para cubrir lo que cuesta mantener MedCore, al estilo
 * de la recaudación anual de Wikipedia: costos a la vista, nada se bloquea y el
 * pago ocurre fuera (Stripe o PayPal). Configuración en src/data/apoyo.ts. */

import { ArrowSquareOut, CreditCard, PaypalLogo } from '@phosphor-icons/react'
import { APOYO, costoTotal, hayEnlaces, mxn } from '../data/apoyo'

const PREGUNTAS: { q: string; a: string }[] = [
  {
    q: '¿Tengo que aportar para seguir usando MedCore?',
    a: 'No. Todo el material seguirá abierto y gratis, aportes o no. No hay anuncios ni funciones de pago.',
  },
  {
    q: '¿MedCore ve los datos de mi tarjeta?',
    a: 'No. El pago se hace en la página de Stripe o de PayPal; MedCore no recibe ni guarda datos de pago.',
  },
  {
    q: '¿Me dan un recibo deducible de impuestos?',
    a: 'No. Es una aportación voluntaria a un estudiante, no a una donataria autorizada, así que no es deducible.',
  },
]

export function Apoya() {
  const total = costoTotal()
  const pendientes = APOYO.costos.some((c) => c.mxnAnual === null)
  const meta = !pendientes && total > 0 ? total : null
  const pct = meta ? Math.min(100, Math.round((APOYO.recaudado / meta) * 100)) : 0

  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 pb-12 flex flex-col gap-6">
        <header>
          <h1 className="font-display font-light text-[2.25rem] sm:text-[2.75rem] leading-[1.05] tracking-[-0.025em] text-zinc-900">
            Apoya a MedCore
          </h1>
          <p className="mt-3 text-[1.0625rem] text-zinc-700 leading-relaxed max-w-[60ch]">
            MedCore es gratis, no tiene anuncios y está abierto para todo el grupo. Lo mantiene un estudiante
            de primer semestre. Si te ha servido para estudiar, puedes ayudar a cubrir lo que cuesta mantenerlo en línea.
          </p>
        </header>

        {/* Aportar */}
        <section className="card p-6 sm:p-7 flex flex-col gap-5" aria-labelledby="h-aportar">
          {meta !== null && (
            <div className="flex flex-col gap-2">
              <span className="text-sm text-zinc-500">Cubierto en {APOYO.anio}</span>
              <span className="font-display font-extralight text-[2.75rem] leading-none tracking-[-0.03em] text-zinc-900 tabular-nums">
                {mxn(APOYO.recaudado)}
                <span className="text-lg font-light text-zinc-500 ml-2">de {mxn(meta)}</span>
              </span>
              <span className="h-1.5 rounded-full bg-zinc-100 overflow-hidden" role="progressbar"
                    aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Porcentaje cubierto">
                <span className="block h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
              </span>
            </div>
          )}

          <div>
            <h2 id="h-aportar" className="font-display text-xl font-normal text-zinc-900">Aportar</h2>
            <p className="text-[0.9375rem] text-zinc-500 mt-1">
              Tú eliges la cantidad. Cualquier monto ayuda, también una sola vez.
            </p>
          </div>

          {hayEnlaces() ? (
            <div className="flex flex-col sm:flex-row gap-3">
              {APOYO.stripeUrl && (
                <a href={APOYO.stripeUrl} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-2xl bg-primary text-primary-fg text-[0.9375rem] font-medium hover:bg-primary-hover transition-colors">
                  <CreditCard weight="regular" className="w-5 h-5" />
                  Tarjeta u OXXO
                  <ArrowSquareOut weight="regular" className="w-4 h-4 opacity-80" />
                </a>
              )}
              {APOYO.paypalUrl && (
                <a href={APOYO.paypalUrl} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-2xl bg-surface border border-zinc-200 text-zinc-800 text-[0.9375rem] font-medium hover:border-zinc-300 transition-colors">
                  <PaypalLogo weight="regular" className="w-5 h-5 text-primary" />
                  PayPal
                  <ArrowSquareOut weight="regular" className="w-4 h-4 text-zinc-500" />
                </a>
              )}
            </div>
          ) : (
            <p className="rounded-2xl bg-zinc-100 px-4 py-3 text-[0.9375rem] text-zinc-700">
              Los enlaces para aportar estarán disponibles muy pronto.
            </p>
          )}
          {hayEnlaces() && (
            <p className="text-xs text-zinc-500 -mt-2">El pago se abre en otra pestaña, en la página de Stripe o de PayPal.</p>
          )}
        </section>

        {/* En qué se usa */}
        <section className="card p-6 sm:p-7" aria-labelledby="h-costos">
          <h2 id="h-costos" className="font-display text-xl font-normal text-zinc-900">En qué se usa</h2>
          <p className="text-[0.9375rem] text-zinc-500 mt-1 mb-4">Lo que cuesta mantener MedCore durante un año.</p>
          <ul className="divide-y divide-zinc-200">
            {APOYO.costos.map((c) => (
              <li key={c.concepto} className="py-4 first:pt-0 last:pb-0 flex gap-4 items-baseline">
                <span className="min-w-0 flex-1">
                  <span className="block text-base text-zinc-900">{c.concepto}</span>
                  <span className="block text-sm text-zinc-500 mt-0.5 leading-relaxed">{c.detalle}</span>
                </span>
                <span className="text-[0.9375rem] text-zinc-800 tabular-nums whitespace-nowrap">
                  {c.mxnAnual === null ? <span className="text-zinc-500">Por confirmar</span> : c.mxnAnual === 0 ? 'Gratis' : mxn(c.mxnAnual)}
                </span>
              </li>
            ))}
          </ul>
          {meta !== null && (
            <p className="mt-4 pt-4 border-t border-zinc-200 flex justify-between text-base text-zinc-900">
              <span>Total al año</span>
              <span className="tabular-nums">{mxn(meta)}</span>
            </p>
          )}
        </section>

        {/* Preguntas */}
        <section className="card p-6 sm:p-7" aria-labelledby="h-preguntas">
          <h2 id="h-preguntas" className="font-display text-xl font-normal text-zinc-900 mb-4">Preguntas</h2>
          <dl className="flex flex-col gap-4">
            {PREGUNTAS.map((p) => (
              <div key={p.q}>
                <dt className="text-base text-zinc-900">{p.q}</dt>
                <dd className="text-[0.9375rem] text-zinc-600 mt-1 leading-relaxed max-w-[62ch]">{p.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </main>
  )
}
