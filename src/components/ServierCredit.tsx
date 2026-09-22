/* Crédito obligatorio para las ilustraciones de Servier Medical Art (SMART),
 * usadas bajo licencia CC BY 4.0. La atribución debe enlazar a la fuente y a la
 * licencia e indicar que las imágenes fueron adaptadas (optimizadas). Este
 * crédito por imagen NO exime del crédito global (ver Ajustes → Créditos). */

export function ServierCredit({ className = '' }: { className?: string }) {
  return (
    <p className={`text-[0.625rem] leading-snug text-zinc-400 ${className}`}>
      Ilustración:{' '}
      <a
        href="https://smart.servier.com"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-zinc-600"
      >
        Servier Medical Art
      </a>{' '}
      —{' '}
      <a
        href="https://creativecommons.org/licenses/by/4.0/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-zinc-600"
      >
        CC BY 4.0
      </a>{' '}
      (adaptada)
    </p>
  )
}
