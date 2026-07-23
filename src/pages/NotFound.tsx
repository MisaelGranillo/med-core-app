/* Página 404 — ruta comodín. Reemplaza el antiguo fallback a Home, que
 * ocultaba silenciosamente los enlaces rotos. */

import { Link, useLocation } from 'react-router-dom'
import { House, MagnifyingGlass, Compass } from '@phosphor-icons/react'

export function NotFound() {
  const { pathname } = useLocation()
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-24">
      <div className="max-w-md text-center">
        <p className="text-6xl font-extrabold text-primary-600 tracking-tight mb-2">404</p>
        <h1 className="text-xl font-bold text-zinc-900 mb-2">Página no encontrada</h1>
        <p className="text-sm text-zinc-500 mb-1">
          No existe ninguna página en
        </p>
        <p className="text-xs font-mono text-zinc-400 bg-zinc-100 rounded-lg px-3 py-1.5 inline-block mb-6 break-all">
          {pathname}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="btn-primary bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5">
            <House weight="fill" className="w-4 h-4" />
            Inicio
          </Link>
          <Link to="/anatomia" className="flex items-center gap-1.5 text-sm font-semibold text-zinc-600 hover:text-zinc-900 border border-zinc-300 rounded-xl px-4 py-2.5 transition-colors">
            <Compass weight="fill" className="w-4 h-4" />
            Anatomía
          </Link>
          <Link to="/search" className="flex items-center gap-1.5 text-sm font-semibold text-zinc-600 hover:text-zinc-900 border border-zinc-300 rounded-xl px-4 py-2.5 transition-colors">
            <MagnifyingGlass weight="bold" className="w-4 h-4" />
            Buscar
          </Link>
        </div>
      </div>
    </main>
  )
}
