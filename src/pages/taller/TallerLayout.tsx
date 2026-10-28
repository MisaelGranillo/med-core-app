/* Taller — layout de /taller/*
 *
 * Navegación secundaria con las herramientas en el orden del taller y
 * «Descargas» al final. En móvil, Descargas pasa al primer lugar de la tira
 * (order-first) para que siempre esté a la vista sin desplazarse. */

import { NavLink, Outlet } from 'react-router-dom'
import { DownloadSimple, House } from '@phosphor-icons/react'
import { HERRAMIENTAS } from './taller.herramientas'

const base = 'inline-flex items-center gap-2 h-11 px-4 rounded-2xl border text-[0.9375rem] whitespace-nowrap transition-colors duration-150 flex-shrink-0'
const normal = 'bg-surface border-zinc-200 text-zinc-700 hover:border-zinc-300'
const activo = 'bg-primary-tint border-primary text-primary-ink'

export function TallerLayout() {
  return (
    <main className="flex-1 min-w-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
        <nav aria-label="Herramientas del taller" className="min-w-0">
          <ul className="flex gap-2 overflow-x-auto md:flex-wrap md:overflow-visible pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none]">
            <li className="flex-shrink-0">
              <NavLink to="/taller" end className={({ isActive }) => `${base} ${isActive ? activo : normal}`}>
                <House weight="regular" className="w-[18px] h-[18px]" aria-hidden="true" />
                Inicio
              </NavLink>
            </li>
            {HERRAMIENTAS.map(h => (
              <li key={h.slug} className="flex-shrink-0">
                <NavLink to={`/taller/${h.slug}`} className={({ isActive }) => `${base} ${isActive ? activo : normal}`}>
                  {h.corto}
                </NavLink>
              </li>
            ))}
            <li className="flex-shrink-0 order-first md:order-last">
              <NavLink
                to="/taller/descargas"
                className={({ isActive }) => `${base} ${isActive
                  ? 'bg-primary border-primary text-primary-fg'
                  : 'bg-primary-tint border-primary-tint text-primary-ink hover:border-primary'}`}
              >
                <DownloadSimple weight="bold" className="w-[18px] h-[18px]" aria-hidden="true" />
                Descargas
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </main>
  )
}
