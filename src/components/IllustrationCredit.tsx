/* Crédito por imagen. Fuente única: NIAID NIH BioART Source
 * (bioart.niaid.nih.gov). La mayoría de las entradas son de dominio público
 * (cita apreciada, no obligatoria); algunas son CC BY 4.0 (atribución
 * obligatoria). `sourceUrl` enlaza a la entrada concreta; `license` elige el
 * texto. El crédito por imagen NO exime del crédito global (Ajustes → Créditos). */

export function IllustrationCredit({
  sourceUrl,
  license = 'pd',
  className = '',
}: {
  source?: 'bioart'
  sourceUrl?: string
  license?: 'pd' | 'ccby'
  className?: string
}) {
  const cls = `text-[0.625rem] leading-snug text-zinc-400 ${className}`
  const link = 'underline hover:text-zinc-600'
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
      {license === 'ccby' ? (
        <>
          —{' '}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            CC BY 4.0
          </a>
        </>
      ) : (
        <>— dominio público</>
      )}
    </p>
  )
}
