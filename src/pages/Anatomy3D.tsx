/* Visor Anatómico 2D — ruta /anatomia-3d */
import { AnatomyViewer2D } from '../components/AnatomyViewer2D'

export function Anatomy3D() {
  return (
    <div className="flex-1 overflow-hidden" style={{ background: '#0d0d0d' }}>
      <AnatomyViewer2D />
    </div>
  )
}
