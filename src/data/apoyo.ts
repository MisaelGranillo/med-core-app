/* Apoya a MedCore: configuración de la página /apoya y del aviso de campaña.
 *
 * - Los enlaces de pago son externos (Stripe Payment Link y PayPal.me): ningún
 *   dato de tarjeta pasa por MedCore. Si un enlace está vacío, su botón no aparece.
 * - El aviso solo aparece entre `campana.inicio` y `campana.fin` (inclusive) y
 *   solo si hay al menos un enlace de pago. Con `campana: null` no aparece nunca.
 *   Para revisarlo fuera de campaña: cualquier ruta con ?apoyo=1.
 * - Meta de la campaña = lo invertido hasta ahora + lo que viene. `recaudado`
 *   (MXN) se actualiza a mano para la barra.
 * - Montos en MXN, de los recibos (Anthropic, PayPal) y del precio de lista de
 *   ResellerClub para .icu (17.89 USD al tipo de cambio de PayPal de jun 2026). */

export interface Costo {
  concepto: string
  detalle: string
  mxn: number
}

export interface Campana {
  /** Cambia el id en cada campaña: quien cerró el aviso lo vuelve a ver en la siguiente. */
  id: string
  inicio: string // AAAA-MM-DD
  fin: string    // AAAA-MM-DD
  /** Texto de la meta, p. ej. «Meta de diciembre de 2026». */
  etiqueta: string
}

export const APOYO = {
  stripeUrl: 'https://donate.stripe.com/9B600i4bve189vy0xc8Vi00',
  paypalUrl: 'https://paypal.me/realturquesa',
  recaudado: 0,
  campana: { id: '2026-12', inicio: '2026-12-01', fin: '2026-12-31', etiqueta: 'Meta de diciembre de 2026' } as Campana | null,
  /** Lo ya pagado desde que empezó MedCore. */
  invertido: [
    {
      concepto: 'Claude Pro por la App Store',
      detalle: 'Mayo a agosto de 2026: 4 meses de $399.',
      mxn: 1596,
    },
    {
      concepto: 'Claude Pro directo con Anthropic',
      detalle: 'Septiembre y octubre de 2026. Es la IA que ayuda a convertir cada clase en temas, quizzes, fichas y láminas; la suscripción sigue activa ($349 al mes).',
      mxn: 698,
    },
    {
      concepto: 'Registro de medcore.icu',
      detalle: 'Junio de 2026, con precio de promoción el primer año (1 USD).',
      mxn: 18,
    },
  ] as Costo[],
  /** Lo que viene en los próximos meses. */
  porVenir: [
    {
      concepto: 'Renovación de medcore.icu',
      detalle: 'Vence el 3 de junio de 2027. Sin promoción cuesta 17.89 USD al año; la cifra en pesos es aproximada.',
      mxn: 326,
    },
    {
      concepto: 'Cloudflare',
      detalle: 'Hospedaje de la app y de la biblioteca de PDF (2.6 GB). Hoy cabe en el plan gratuito; si el grupo crece o la biblioteca pasa de 10 GB, empieza a cobrar.',
      mxn: 0,
    },
  ] as Costo[],
}

const suma = (l: Costo[]) => l.reduce((n, c) => n + c.mxn, 0)
export const totalInvertido = () => suma(APOYO.invertido)
export const totalPorVenir = () => suma(APOYO.porVenir)
export const meta = () => totalInvertido() + totalPorVenir()

export const hayEnlaces = () => Boolean(APOYO.stripeUrl || APOYO.paypalUrl)

export function campanaActiva(hoy = new Date()): Campana | null {
  const c = APOYO.campana
  if (!c) return null
  const d = hoy.toLocaleDateString('en-CA') // AAAA-MM-DD en hora local
  return d >= c.inicio && d <= c.fin ? c : null
}

export const mxn = (n: number) =>
  n.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 })
