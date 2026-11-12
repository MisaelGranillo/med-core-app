/* Apoya a MedCore: configuración de la página /apoya y del aviso de campaña.
 *
 * - Los enlaces de pago son externos (Stripe Payment Link y PayPal.me): ningún
 *   dato de tarjeta pasa por MedCore. Si un enlace está vacío, su botón no aparece.
 * - El aviso solo aparece entre `campana.inicio` y `campana.fin` (inclusive) y
 *   solo si hay al menos un enlace de pago. Con `campana: null` no aparece nunca.
 *   Para revisarlo fuera de campaña: cualquier ruta con ?apoyo=1.
 * - `recaudado` se actualiza a mano (MXN) para la barra «cubierto este año». */

export interface Costo {
  concepto: string
  detalle: string
  /** MXN al año; null = por confirmar (no se muestra cifra ni entra al total). */
  mxnAnual: number | null
}

export interface Campana {
  /** Cambia el id en cada campaña: quien cerró el aviso lo vuelve a ver en la siguiente. */
  id: string
  inicio: string // AAAA-MM-DD
  fin: string    // AAAA-MM-DD
}

export const APOYO = {
  stripeUrl: '',
  paypalUrl: 'https://paypal.me/realturquesa',
  anio: 2027,
  recaudado: 0,
  campana: null as Campana | null,
  costos: [
    {
      concepto: 'Dominio medcore.icu',
      detalle: 'Renovación anual; la actual vence el 3 de junio de 2027.',
      mxnAnual: null,
    },
    {
      concepto: 'Cloudflare',
      detalle: 'Hospedaje de la app, la biblioteca de PDF (2.6 GB) y el control de acceso. Hoy cabe en el plan gratuito; si el grupo crece o la biblioteca pasa de 10 GB, empieza a cobrar.',
      mxnAnual: 0,
    },
    {
      concepto: 'Herramientas para preparar el material',
      detalle: 'Transcripción de clases, modelos 3D y la IA que ayuda a convertir cada clase en temas, quizzes y láminas.',
      mxnAnual: null,
    },
  ] as Costo[],
}

export const costoTotal = () =>
  APOYO.costos.reduce((n, c) => n + (c.mxnAnual ?? 0), 0)

export const hayEnlaces = () => Boolean(APOYO.stripeUrl || APOYO.paypalUrl)

export function campanaActiva(hoy = new Date()): Campana | null {
  const c = APOYO.campana
  if (!c) return null
  const d = hoy.toLocaleDateString('en-CA') // AAAA-MM-DD en hora local
  return d >= c.inicio && d <= c.fin ? c : null
}

export const mxn = (n: number) =>
  n.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 })
