/* AnatomyModelViewer — self-hosted React Three Fiber viewer (Option B).
 * Loads a GLB from /public/models, fits the camera, lets the user orbit/zoom,
 * and click a mesh to highlight it + report its name (Terminologia Anatomica).
 * Client-side WebGL only — works on Cloudflare Pages static hosting.
 */
import { Suspense, useMemo, useRef } from 'react'
import { Canvas, type ThreeEvent } from '@react-three/fiber'
import { OrbitControls, Bounds, useGLTF, Html } from '@react-three/drei'
import * as THREE from 'three'

function Loader() {
  return (
    <Html center>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          border: '3px solid rgba(255,255,255,0.15)',
          borderTopColor: 'var(--color-accent)',
          animation: 'spin 0.8s linear infinite',
        }} />
        <span style={{ color: 'var(--c-stage-muted)', fontSize: 12, whiteSpace: 'nowrap' }}>
          Cargando modelo…
        </span>
      </div>
    </Html>
  )
}

function Model({ url, onSelect }: { url: string; onSelect: (name: string | null) => void }) {
  const { scene } = useGLTF(url)
  // Clone so material/selection edits never leak into drei's cached GLTF.
  const model = useMemo(() => scene.clone(true), [scene])
  const selected = useRef<{ mesh: THREE.Mesh; material: THREE.Material | THREE.Material[] } | null>(null)

  const restore = () => {
    if (selected.current) {
      selected.current.mesh.material = selected.current.material
      selected.current = null
    }
  }

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    const mesh = e.object as THREE.Mesh
    if (!(mesh as THREE.Mesh).isMesh) return
    restore()
    const base = (Array.isArray(mesh.material) ? mesh.material[0] : mesh.material) as THREE.MeshStandardMaterial
    const highlight = base.clone()
    if ('emissive' in highlight) {
      highlight.emissive = new THREE.Color('#3B82F6')
      highlight.emissiveIntensity = 0.55
    }
    selected.current = { mesh, material: mesh.material }
    mesh.material = highlight
    onSelect(formatName(mesh.name))
  }

  return <primitive object={model} onClick={handleClick} />
}

function formatName(raw: string): string {
  if (!raw) return 'Estructura sin nombre'
  return raw.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

export function AnatomyModelViewer({ url, onSelect }: {
  url: string
  onSelect: (name: string | null) => void
}) {
  return (
    <Canvas
      key={url}
      camera={{ position: [0, 0, 6], fov: 45, near: 0.01, far: 5000 }}
      onPointerMissed={() => onSelect(null)}
      style={{ background: 'var(--c-stage)', height: 'min(80vh, 760px)', width: '100%', display: 'block' }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.9} />
      <hemisphereLight args={['#ffffff', '#1a2438', 0.6]} />
      <directionalLight position={[5, 10, 7]} intensity={1.1} />
      <directionalLight position={[-6, -4, -6]} intensity={0.4} />
      <Suspense fallback={<Loader />}>
        <Bounds fit clip observe margin={1.15}>
          <Model url={url} onSelect={onSelect} />
        </Bounds>
      </Suspense>
      <OrbitControls makeDefault enableDamping dampingFactor={0.1} />
    </Canvas>
  )
}
