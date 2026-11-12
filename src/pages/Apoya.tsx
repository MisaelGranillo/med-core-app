/* Apoya — Ruta /apoya
 *
 * Aportaciones voluntarias para cubrir lo que cuesta mantener MedCore, al estilo
 * de la recaudación anual de Wikipedia: costos a la vista, nada se bloquea y el
 * pago ocurre fuera (Stripe o PayPal). Configuración en src/data/apoyo.ts. */

import { ArrowSquareOut, CreditCard, PaypalLogo } from '@phosphor-icons/react'
import { APOYO, hayEnlaces, meta as calcularMeta, mxn, totalInvertido, totalPorVenir, type Costo } from '../data/apoyo'

// Nombres de los procesadores configurados, para que los textos no mencionen uno que no está.
const PROCESADORES = [APOYO.stripeUrl && 'Stripe', APOYO.paypalUrl && 'PayPal'].filter(Boolean).join(' o de ')

const PREGUNTAS: { q: string; a: string }[] = [
  {
    q: '¿Tengo que aportar para seguir usando MedCore?',
    a: 'No. Todo el material seguirá abierto y gratis, aportes o no. No hay anuncios ni funciones de pago.',
  },
  {
    q: '¿MedCore ve los datos de mi tarjeta?',
    a: `No. El pago se hace en la página de ${PROCESADORES || 'un procesador de pagos externo'}; MedCore no recibe ni guarda datos de pago.`,
  },
  {
    q: '¿Me dan un recibo deducible de impuestos?',
    a: 'No. Es una aportación voluntaria a un estudiante, no a una donataria autorizada, así que no es deducible.',
  },
]

export function Apoya() {
  const meta = calcularMeta()
  const pct = Math.min(100, Math.round((APOYO.recaudado / meta) * 100))

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
          {meta > 0 && (
            <div className="flex flex-col gap-2">
              <span className="text-sm text-zinc-500">{APOYO.campana?.etiqueta ?? 'Meta'}: lo invertido más lo que viene</span>
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
                  Tarjeta
                  <ArrowSquareOut weight="regular" className="w-4 h-4 opacity-80" />
                </a>
              )}
              {APOYO.paypalUrl && (
                <a href={APOYO.paypalUrl} target="_blank" rel="noopener noreferrer"
                   className={`inline-flex items-center justify-center gap-2 h-12 px-5 rounded-2xl text-[0.9375rem] font-medium transition-colors ${
                     APOYO.stripeUrl
                       ? 'bg-surface border border-zinc-200 text-zinc-800 hover:border-zinc-300'
                       : 'bg-primary text-primary-fg hover:bg-primary-hover'}`}>
                  <PaypalLogo weight="regular" className={`w-5 h-5 ${APOYO.stripeUrl ? 'text-primary' : ''}`} />
                  PayPal
                  <ArrowSquareOut weight="regular" className={`w-4 h-4 ${APOYO.stripeUrl ? 'text-zinc-500' : 'opacity-80'}`} />
                </a>
              )}
            </div>
          ) : (
            <p className="rounded-2xl bg-zinc-100 px-4 py-3 text-[0.9375rem] text-zinc-700">
              Los enlaces para aportar estarán disponibles muy pronto.
            </p>
          )}
          {hayEnlaces() && (
            <p className="text-xs text-zinc-500 -mt-2">El pago se abre en otra pestaña, en la página de {PROCESADORES}.</p>
          )}
        </section>

        {/* En qué se usa */}
        <section className="card p-6 sm:p-7 flex flex-col gap-6" aria-labelledby="h-costos">
          <div>
            <h2 id="h-costos" className="font-display text-xl font-normal text-zinc-900">En qué se usa</h2>
            <p className="text-[0.9375rem] text-zinc-500 mt-1">
              Lo que ha costado MedCore hasta hoy y lo que viene, en pesos.
            </p>
          </div>
          <ListaCostos titulo="Invertido hasta ahora" items={APOYO.invertido} total={totalInvertido()} />
          <ListaCostos titulo="Lo que viene" items={APOYO.porVenir} total={totalPorVenir()} />
          <p className="pt-4 border-t border-zinc-200 flex justify-between gap-4 text-base text-zinc-900">
            <span>Meta</span>
            <span className="tabular-nums">{mxn(meta)}</span>
          </p>
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

function ListaCostos({ titulo, items, total }: { titulo: string; items: Costo[]; total: number }) {
  return (
    <div>
      <h3 className="text-sm text-zinc-500 mb-2">{titulo}</h3>
      <ul className="divide-y divide-zinc-200">
        {items.map((c) => (
          <li key={c.concepto} className="py-3 flex gap-4 items-baseline">
            <span className="min-w-0 flex-1">
              <span className="block text-base text-zinc-900">{c.concepto}</span>
              <span className="block text-sm text-zinc-500 mt-0.5 leading-relaxed">{c.detalle}</span>
            </span>
            <span className="text-[0.9375rem] text-zinc-800 tabular-nums whitespace-nowrap">
              {c.mxn === 0 ? 'Gratis' : mxn(c.mxn)}
            </span>
          </li>
        ))}
      </ul>
      <p className="flex justify-between gap-4 pt-2 text-[0.9375rem] text-zinc-700">
        <span>Subtotal</span>
        <span className="tabular-nums">{mxn(total)}</span>
      </p>
    </div>
  )
}
