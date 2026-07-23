/* Hub de Anatomía — rutas /anatomia (2D) y /anatomia-3d (3D, alias).
 *
 * Sección núcleo, agnóstica a la escuela: funciona sin ningún plan cargado.
 * El visor 2D (AnatomyViewer2D) y el visor 3D (Anatomy3D) se muestran como
 * pestañas. Cada visor se carga de forma diferida para no descargar el
 * bundle 3D (pesado) cuando el usuario solo usa el 2D.
 *
 * No se toca el SVG ni las coordenadas de hotspots (calibradas en
 * AnatomyViewer2D + anatomyHotspots). */

import React, { lazy, Suspense } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Cube, StackSimple } from '@phosphor-icons/react'

const Viewer2D = lazy(() =>
  import('../components/AnatomyViewer2D').then(m => ({ default: m.AnatomyViewer2D })))
const Viewer3D = lazy(() =>
  import('./Anatomy3D').then(m => ({ default: m.Anatomy3D })))

function ViewerFallback() {
  return (
    <div className="flex-1 flex items-center justify-center py-24">
      <div className="w-9 h-9 rounded-full border-4 border-line border-t-primary animate-spin" />
    </div>
  )
}

export function Anatomy() {
  const { pathname } = useLocation()
  const is3D = pathname.startsWith('/anatomia-3d')

  const tab = (active: boolean) =>
    `flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-sm font-semibold transition-all duration-150
     ${active ? 'bg-zinc-900 text-white' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'}`

  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* Pestañas 2D / 3D */}
      <div className="bg-surface border-b border-zinc-200 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-12 flex items-center gap-1">
          <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mr-2 hidden sm:block">
            Anatomía
          </span>
          <Link to="/anatomia" className={tab(!is3D)}>
            <StackSimple weight={!is3D ? 'fill' : 'regular'} className="w-4 h-4" />
            Visor 2D
          </Link>
          <Link to="/anatomia-3d" className={tab(is3D)}>
            <Cube weight={is3D ? 'fill' : 'regular'} className="w-4 h-4" />
            Visor 3D
          </Link>
        </div>
      </div>

      {/* Visor activo */}
      <div className="flex-1 min-h-0 flex flex-col">
        <Suspense fallback={<ViewerFallback />}>
          {is3D ? <Viewer3D /> : <Viewer2D />}
        </Suspense>
      </div>
    </div>
  )
}
