/* Hub de Anatomía — rutas /anatomia y /anatomia-3d (alias del mismo visor 3D).
 *
 * Sección núcleo, agnóstica a la escuela: funciona sin ningún plan cargado.
 * Solo se ofrece el visor 3D (Anatomy3D), cargado de forma diferida para no
 * descargar el bundle 3D (pesado) hasta que se entra a la sección. El antiguo
 * visor plano se retiró; su componente queda en el repo pero sin cablear. */

import { lazy, Suspense } from 'react'

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
  return (
    <div className="flex-1 flex flex-col min-h-0">
      <div className="flex-1 min-h-0 flex flex-col">
        <Suspense fallback={<ViewerFallback />}>
          <Viewer3D />
        </Suspense>
      </div>
    </div>
  )
}
