/* Taller — marcador temporal para herramientas que aún no se construyen.
 * Cada herramienta lo sustituye por su propia página en su fase. */

import { Link, useLocation } from 'react-router-dom'
import { HERRAMIENTAS } from './taller.herramientas'

export function TallerProximamente() {
  const slug = useLocation().pathname.split('/')[2] ?? ''
  const h = HERRAMIENTAS.find(x => x.slug === slug)
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-12 flex flex-col gap-3">
      <h1 className="font-display font-light text-[2.25rem] leading-[1.05] tracking-[-0.025em] text-zinc-900">
        {h?.titulo ?? 'Herramienta'}
      </h1>
      <p className="text-base text-zinc-600 max-w-[60ch]">
        Esta herramienta estará lista antes del taller. Mientras tanto, puedes usar su plantilla en PDF desde{' '}
        <Link to="/taller/descargas" className="text-primary underline underline-offset-2">Descargas</Link>.
      </p>
    </div>
  )
}
