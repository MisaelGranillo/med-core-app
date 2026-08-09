/* AnatomyModelViewer — self-hosted React Three Fiber viewer (Option B, full parity).
 * Features: orbit/zoom, click-to-select + highlight, per-structure & per-group
 * show/hide, in-scene labels, and sagittal mirroring of right-side structures
 * (the source models are modeled on the right side only).
 * Client-side WebGL — runs on Cloudflare Pages static hosting.
 */
import { Suspense, useEffect, useMemo, useRef } from 'react'
import { Canvas, type ThreeEvent } from '@react-three/fiber'
import { OrbitControls, Bounds, useGLTF, Html } from '@react-three/drei'
import * as THREE from 'three'
import { sideOf, toSpanish } from '../data/anatomyStructures'

const HIGHLIGHT = new THREE.Color('#3B82F6')
const LABEL_CAP = 60 // max in-scene labels at once (perf guard)

function Loader() {
  return (
    <Html center>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          border: '3px solid rgba(255,255,255,0.15)', borderTopColor: 'var(--color-accent)',
          animation: 'spin 0.8s linear infinite',
        }} />
        <span style={{ color: 'var(--c-stage-muted)', fontSize: '0.75rem', whiteSpace: 'nowrap' }}>Cargando modelo…</span>
      </div>
    </Html>
  )
}

interface ModelProps {
  url: string
  hidden: Set<string>
  showLabels: boolean
  mirror: boolean
  selected: string | null
  onSelect: (name: string | null) => void
  onStructures: (names: string[]) => void
}

function Model({ url, hidden, showLabels, mirror, selected, onSelect, onStructures }: ModelProps) {
  const { scene } = useGLTF(url)
  const model = useMemo(() => scene.clone(true), [scene])

  // Named structures (node names = Terminologia Anatomica).
  const named = useMemo(() => {
    const list: { name: string; obj: THREE.Object3D }[] = []
    model.traverse(o => { if (o.name) list.push({ name: o.name, obj: o }) })
    return list
  }, [model])

  useEffect(() => { onStructures(named.map(n => n.name)) }, [named, onStructures])

  // Sagittal plane = the MEDIAL edge of the right-side structures (the plane
  // where the contralateral side meets), so the reflected copy sits adjacent
  // rather than overlapping. Edge nearest the model center is the medial one.
  const midlineX = useMemo(() => {
    model.updateMatrixWorld(true)
    const rightBox = new THREE.Box3(); let any = false
    for (const { name, obj } of named) {
      if (sideOf(name) === 'right') { rightBox.expandByObject(obj); any = true }
    }
    const full = new THREE.Box3().setFromObject(model)
    const fullCenter = new THREE.Vector3(); full.getCenter(fullCenter)
    if (!any || rightBox.isEmpty()) return fullCenter.x
    const rc = new THREE.Vector3(); rightBox.getCenter(rc)
    return rc.x < fullCenter.x ? rightBox.max.x : rightBox.min.x
  }, [named, model])

  // Apply show/hide.
  useEffect(() => {
    for (const { name, obj } of named) obj.visible = !hidden.has(name)
  }, [hidden, named])

  // Selection highlight (clone the material so we can restore it).
  const sel = useRef<{ mesh: THREE.Mesh; mat: THREE.Material | THREE.Material[] } | null>(null)
  useEffect(() => {
    if (sel.current) { sel.current.mesh.material = sel.current.mat; sel.current = null }
    if (!selected) return
    const entry = named.find(n => n.name === selected)
    if (!entry) return
    let mesh: THREE.Mesh | null = null
    entry.obj.traverse(o => { if (!mesh && (o as THREE.Mesh).isMesh) mesh = o as THREE.Mesh })
    if (!mesh) return
    const m = mesh as THREE.Mesh
    const base = (Array.isArray(m.material) ? m.material[0] : m.material) as THREE.MeshStandardMaterial
    const hi = base.clone()
    if ('emissive' in hi) { hi.emissive = HIGHLIGHT; hi.emissiveIntensity = 0.6 }
    sel.current = { mesh: m, mat: m.material }
    m.material = hi
  }, [selected, named])

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    let o: THREE.Object3D | null = e.object
    while (o && !o.name) o = o.parent
    onSelect(o?.name ?? null)
  }

  // Mirror: bake right-side meshes (world transforms) into a flat group and
  // reflect it across the sagittal plane. Flattening avoids container nodes
  // hiding their children, and baking sidesteps stale matrices.
  const mirrorObj = useMemo(() => {
    if (!mirror) return null
    model.updateMatrixWorld(true)
    const dup = (mm: THREE.Material) => { const c = mm.clone(); c.side = THREE.DoubleSide; return c }
    const g = new THREE.Group()
    for (const { name, obj } of named) {
      if (sideOf(name) !== 'right') continue
      obj.traverse(o => {
        const mesh = o as THREE.Mesh
        if (!mesh.isMesh) return
        const mat = Array.isArray(mesh.material) ? mesh.material.map(dup) : dup(mesh.material)
        const baked = new THREE.Mesh(mesh.geometry, mat)
        baked.applyMatrix4(mesh.matrixWorld)
        baked.name = name
        g.add(baked)
      })
    }
    g.scale.x = -1
    g.position.x = 2 * midlineX
    return g
  }, [mirror, model, named, midlineX])

  useEffect(() => {
    if (!mirrorObj) return
    for (const child of mirrorObj.children) child.visible = !hidden.has(child.name)
  }, [mirrorObj, hidden])

  // Label positions (computed once per model).
  const labelPositions = useMemo(() => {
    model.updateMatrixWorld(true)
    return named.map(({ name, obj }) => {
      const b = new THREE.Box3().setFromObject(obj)
      if (b.isEmpty()) return null
      const c = new THREE.Vector3(); b.getCenter(c)
      return { name, pos: [c.x, c.y, c.z] as [number, number, number] }
    }).filter(Boolean) as { name: string; pos: [number, number, number] }[]
  }, [named, model])

  const labels = useMemo(() => {
    if (!showLabels) return []
    const vis = labelPositions.filter(l => !hidden.has(l.name))
    return vis.length <= LABEL_CAP ? vis : []
  }, [showLabels, labelPositions, hidden])

  const selectedLabel = useMemo(
    () => selected ? labelPositions.find(l => l.name === selected) : null,
    [selected, labelPositions],
  )

  return (
    <>
      <primitive object={model} onClick={handleClick} />
      {mirrorObj && <primitive object={mirrorObj} />}
      {labels.map(l => (
        <Html key={l.name} position={l.pos} center style={{ pointerEvents: 'none' }} zIndexRange={[20, 0]}>
          <span className="anat-label">{toSpanish(l.name)}</span>
        </Html>
      ))}
      {selectedLabel && (
        <Html position={selectedLabel.pos} center style={{ pointerEvents: 'none' }} zIndexRange={[40, 10]}>
          <span className="anat-label anat-label-active">{toSpanish(selectedLabel.name)}</span>
        </Html>
      )}
    </>
  )
}

export interface AnatomyViewerProps {
  url: string
  hidden: Set<string>
  showLabels: boolean
  mirror: boolean
  selected: string | null
  onSelect: (name: string | null) => void
  onStructures: (names: string[]) => void
}

export function AnatomyModelViewer(props: AnatomyViewerProps) {
  return (
    <Canvas
      key={props.url}
      camera={{ position: [0, 0, 6], fov: 45, near: 0.01, far: 5000 }}
      onPointerMissed={() => props.onSelect(null)}
      style={{ background: 'var(--c-stage)', height: 'min(80vh, 760px)', width: '100%', display: 'block' }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.9} />
      <hemisphereLight args={['#ffffff', '#1a2438', 0.6]} />
      <directionalLight position={[5, 10, 7]} intensity={1.1} />
      <directionalLight position={[-6, -4, -6]} intensity={0.4} />
      <Suspense fallback={<Loader />}>
        <Bounds fit clip observe margin={1.15}>
          <Model {...props} />
        </Bounds>
      </Suspense>
      <OrbitControls makeDefault enableDamping dampingFactor={0.1} />
    </Canvas>
  )
}
