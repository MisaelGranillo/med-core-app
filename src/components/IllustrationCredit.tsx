/* Crédito por imagen, según la fuente. Dos bibliotecas:
 *  - servier: Servier Medical Art, CC BY 4.0 (atribución obligatoria, enlaza a
 *    la fuente y a la licencia; se indica "adaptada").
 *  - bioart: NIAID NIH BioART Source. La mayoría es de dominio público (cita
 *    apreciada, no obligatoria); `sourceUrl` enlaza a la entrada concreta.
 * El crédito por imagen NO exime del crédito global (Ajustes → Créditos). */

type Source = 'servier' | 'bioart'

export function IllustrationCredit({
  source = 'servier',
  sourceUrl,
  className = '',
}: {
  source?: Source
  sourceUrl?: string
  className?: string
}) {
  const cls = `text-[0.625rem] leading-snug text-zinc-400 ${className}`
  const link = 'underline hover:text-zinc-600'

  if (source === 'bioart') {
    return (
      <p className={cls}>
        Ilustración:{' '}
        <a
          href={sourceUrl ?? 'https://bioart.niaid.nih.gov'}
          target="_blank"
          rel="noopener noreferrer"
          className={link}
        >
          NIAID NIH BioART Source
        </a>{' '}
        — dominio público
      </p>
    )
  }

  return (
    <p className={cls}>
      Ilustración:{' '}
      <a href="https://smart.servier.com" target="_blank" rel="noopener noreferrer" className={link}>
        Servier Medical Art
      </a>{' '}
      —{' '}
      <a
        href="https://creativecommons.org/licenses/by/4.0/"
        target="_blank"
        rel="noopener noreferrer"
        className={link}
      >
        CC BY 4.0
      </a>{' '}
      (adaptada)
    </p>
  )
}
