/* Visor Anatómico 2D — ruta /anatomia-3d */

import { useSearchParams } from 'react-router-dom'
import { AnatomyViewer2D } from '../components/AnatomyViewer2D'

export function Anatomy3D() {
  const [searchParams] = useSearchParams()
  const initialSystem  = searchParams.get('sistema') ?? undefined

  return (
    <div className="flex-1 overflow-hidden" style={{ background: '#0d0d0d' }}>
      <AnatomyViewer2D initialSystemFilter={initialSystem} />
    </div>
  )
}
