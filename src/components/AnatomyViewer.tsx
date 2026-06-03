/*
 * AnatomyViewer.tsx — Visor 3D Anatómico
 *
 * Este componente crea una escena Three.js con un modelo PROCEDURAL del cuerpo humano.
 * Para reemplazar con un modelo GLTF real:
 *   1. Descarga un .glb de https://3d.nih.gov o https://sketchfab.com/tags/anatomy
 *   2. Colócalo en /public/models/body.glb
 *   3. Descomenta la sección "CARGA DE MODELO GLTF" al final de buildScene()
 *   4. Elimina la sección "MODELO PROCEDURAL PLACEHOLDER"
 *   5. Asegúrate que mesh.name en el GLB coincida con las claves de anatomyParts
 */

import { useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Minus, Plus, ArrowCounterClockwise } from '@phosphor-icons/react'
import type { SystemFilter } from '../data/anatomy-3d-data'
import { SYSTEM_COLORS } from '../data/anatomy-3d-data'

interface AnatomyViewerProps {
  activeFilter: SystemFilter
  wireframe: boolean
  onPartSelected: (partId: string | null) => void
}

// Colores de emisión al seleccionar una malla
const HIGHLIGHT_EMISSIVE = 0xffffff
const HIGHLIGHT_INTENSITY = 0.45

// ──────────────────────────────────────────────────────────────
// Función auxiliar: crea una malla con material propio para
// poder cambiar emissive individualmente sin afectar otras mallas.
// ──────────────────────────────────────────────────────────────
function createMesh(
  geometry: THREE.BufferGeometry,
  sistema: 'Esquelético' | 'Muscular' | 'Órganos',
  nombre: string,
  opts: { opacity?: number; roughness?: number; metalness?: number } = {}
): THREE.Mesh {
  const color = SYSTEM_COLORS[sistema]
  const material = new THREE.MeshStandardMaterial({
    color,
    roughness:  opts.roughness  ?? (sistema === 'Órganos' ? 0.4 : 0.75),
    metalness:  opts.metalness  ?? 0.0,
    transparent: (opts.opacity ?? 1) < 1,
    opacity:     opts.opacity   ?? 1,
    depthWrite:  (opts.opacity ?? 1) >= 0.99,
  })
  const mesh = new THREE.Mesh(geometry, material)
  mesh.name = nombre
  mesh.castShadow = true
  mesh.receiveShadow = true
  mesh.userData.sistema = sistema
  return mesh
}

// ──────────────────────────────────────────────────────────────
// Construye el modelo PROCEDURAL del cuerpo humano.
// Retorna los tres grupos (skeleton, muscular, organs) y la lista
// plana de mallas para wireframe.
// ──────────────────────────────────────────────────────────────
function buildProceduralBody(): {
  esqueleticoGroup: THREE.Group
  muscularGroup: THREE.Group
  organosGroup: THREE.Group
  allMeshes: THREE.Mesh[]
} {
  const esqueleticoGroup = new THREE.Group()
  esqueleticoGroup.name = 'sistema-esqueletico'

  const muscularGroup = new THREE.Group()
  muscularGroup.name = 'sistema-muscular'

  const organosGroup = new THREE.Group()
  organosGroup.name = 'sistema-organos'

  const allMeshes: THREE.Mesh[] = []

  // Coordenadas de referencia (y=0 en el ombligo):
  //   Cabeza: y ≈ +0.90
  //   Hombros: y ≈ +0.60
  //   Pecho: y ≈ +0.35
  //   Ombligo: y = 0
  //   Cadera: y ≈ −0.25
  //   Rodillas: y ≈ −0.80
  //   Tobillos: y ≈ −1.30

  const E = 'Esquelético' as const
  const M = 'Muscular' as const
  const O = 'Órganos' as const

  // ── SISTEMA ESQUELÉTICO ────────────────────────────────────

  // Cráneo
  const craneoMesh = createMesh(new THREE.SphereGeometry(0.165, 18, 14), E, 'craneo')
  craneoMesh.position.set(0, 0.95, 0)
  esqueleticoGroup.add(craneoMesh)

  // Vértebras cervicales (cuello)
  const cuelloMesh = createMesh(new THREE.CylinderGeometry(0.04, 0.05, 0.16, 8), E, 'columna-vertebral')
  cuelloMesh.position.set(0, 0.72, -0.02)
  esqueleticoGroup.add(cuelloMesh)

  // Columna vertebral (torácica + lumbar)
  const columnaMesh = createMesh(new THREE.CylinderGeometry(0.027, 0.038, 0.9, 8), E, 'columna-vertebral', { opacity: 0.9 })
  columnaMesh.position.set(0, 0.22, -0.07)
  esqueleticoGroup.add(columnaMesh)

  // Caja torácica (cilindro hueco)
  const toraxMesh = createMesh(
    new THREE.CylinderGeometry(0.215, 0.165, 0.50, 12, 1, true), E, 'caja-toracica', { opacity: 0.7 }
  )
  toraxMesh.position.set(0, 0.33, 0)
  esqueleticoGroup.add(toraxMesh)

  // Esternón (frente del tórax)
  const esternon = createMesh(new THREE.BoxGeometry(0.04, 0.34, 0.03), E, 'caja-toracica')
  esternon.position.set(0, 0.34, 0.215)
  esqueleticoGroup.add(esternon)

  // Costillas (pares simplificados como arcos de toro)
  for (let i = 0; i < 5; i++) {
    const y = 0.13 + i * 0.085
    const rib = createMesh(
      new THREE.TorusGeometry(0.19 - i * 0.01, 0.012, 5, 16, Math.PI), E, 'caja-toracica'
    )
    rib.position.set(0, y, 0)
    rib.rotation.y = Math.PI / 2
    rib.rotation.z = Math.PI / 2
    esqueleticoGroup.add(rib)
  }

  // Pelvis (arco)
  const pelvis = createMesh(
    new THREE.TorusGeometry(0.2, 0.04, 8, 16, Math.PI * 1.3), E, 'caja-toracica'
  )
  pelvis.position.set(0, -0.25, 0)
  pelvis.rotation.x = Math.PI / 2
  pelvis.rotation.z = -Math.PI * 0.15
  esqueleticoGroup.add(pelvis)

  // Clavícula izquierda
  const clavL = createMesh(new THREE.CylinderGeometry(0.02, 0.02, 0.26, 6), E, 'caja-toracica')
  clavL.position.set(-0.19, 0.60, 0.09)
  clavL.rotation.z = Math.PI * 0.25
  clavL.rotation.y = -0.3
  esqueleticoGroup.add(clavL)

  // Clavícula derecha
  const clavR = clavL.clone()
  clavR.position.set(0.19, 0.60, 0.09)
  clavR.rotation.z = -Math.PI * 0.25
  clavR.rotation.y = 0.3
  esqueleticoGroup.add(clavR)

  // Húmero izquierdo
  const humeroL = createMesh(new THREE.CylinderGeometry(0.038, 0.030, 0.36, 8), E, 'humero')
  humeroL.position.set(-0.33, 0.35, 0)
  humeroL.rotation.z = 0.12
  esqueleticoGroup.add(humeroL)

  // Húmero derecho (clon con material propio)
  const humeroR = createMesh(new THREE.CylinderGeometry(0.038, 0.030, 0.36, 8), E, 'humero')
  humeroR.position.set(0.33, 0.35, 0)
  humeroR.rotation.z = -0.12
  esqueleticoGroup.add(humeroR)

  // Radio + cúbito izquierdo
  const antebrazoL = createMesh(new THREE.CylinderGeometry(0.028, 0.022, 0.33, 8), E, 'humero')
  antebrazoL.position.set(-0.38, 0.0, 0.03)
  esqueleticoGroup.add(antebrazoL)

  // Radio + cúbito derecho
  const antebrazoR = createMesh(new THREE.CylinderGeometry(0.028, 0.022, 0.33, 8), E, 'humero')
  antebrazoR.position.set(0.38, 0.0, 0.03)
  esqueleticoGroup.add(antebrazoR)

  // Fémur izquierdo
  const femurL = createMesh(new THREE.CylinderGeometry(0.048, 0.040, 0.50, 8), E, 'femur')
  femurL.position.set(-0.11, -0.58, 0)
  femurL.rotation.z = 0.05
  esqueleticoGroup.add(femurL)

  // Fémur derecho
  const femurR = createMesh(new THREE.CylinderGeometry(0.048, 0.040, 0.50, 8), E, 'femur')
  femurR.position.set(0.11, -0.58, 0)
  femurR.rotation.z = -0.05
  esqueleticoGroup.add(femurR)

  // Tibia + peroné izquierdo
  const tibiaL = createMesh(new THREE.CylinderGeometry(0.032, 0.025, 0.44, 8), E, 'femur')
  tibiaL.position.set(-0.11, -1.09, 0)
  esqueleticoGroup.add(tibiaL)

  // Tibia + peroné derecho
  const tibiaR = createMesh(new THREE.CylinderGeometry(0.032, 0.025, 0.44, 8), E, 'femur')
  tibiaR.position.set(0.11, -1.09, 0)
  esqueleticoGroup.add(tibiaR)

  // Pie izquierdo
  const pieL = createMesh(new THREE.BoxGeometry(0.09, 0.06, 0.20), E, 'femur')
  pieL.position.set(-0.11, -1.38, 0.06)
  esqueleticoGroup.add(pieL)

  // Pie derecho
  const pieR = createMesh(new THREE.BoxGeometry(0.09, 0.06, 0.20), E, 'femur')
  pieR.position.set(0.11, -1.38, 0.06)
  esqueleticoGroup.add(pieR)

  // ── SISTEMA MUSCULAR ───────────────────────────────────────

  // Trapecio (espalda superior)
  const trapecioMesh = createMesh(
    new THREE.BoxGeometry(0.50, 0.18, 0.07), M, 'trapecio', { opacity: 0.85 }
  )
  trapecioMesh.position.set(0, 0.68, -0.09)
  muscularGroup.add(trapecioMesh)

  // Pectoral mayor izquierdo
  const pectL = createMesh(new THREE.SphereGeometry(0.10, 10, 8), M, 'biceps', { opacity: 0.82 })
  pectL.scale.set(1.4, 0.8, 0.65)
  pectL.position.set(-0.14, 0.40, 0.14)
  muscularGroup.add(pectL)

  // Pectoral mayor derecho
  const pectR = createMesh(new THREE.SphereGeometry(0.10, 10, 8), M, 'biceps', { opacity: 0.82 })
  pectR.scale.set(1.4, 0.8, 0.65)
  pectR.position.set(0.14, 0.40, 0.14)
  muscularGroup.add(pectR)

  // Bíceps braquial izquierdo
  const bicepsL = createMesh(new THREE.SphereGeometry(0.065, 10, 8), M, 'biceps', { opacity: 0.87 })
  bicepsL.scale.set(1, 2.4, 0.85)
  bicepsL.position.set(-0.32, 0.32, 0.06)
  muscularGroup.add(bicepsL)

  // Bíceps braquial derecho
  const bicepsR = createMesh(new THREE.SphereGeometry(0.065, 10, 8), M, 'biceps', { opacity: 0.87 })
  bicepsR.scale.set(1, 2.4, 0.85)
  bicepsR.position.set(0.32, 0.32, 0.06)
  muscularGroup.add(bicepsR)

  // Diafragma (disco plano)
  const diafragmaMesh = createMesh(
    new THREE.CylinderGeometry(0.185, 0.175, 0.025, 14), M, 'diafragma', { opacity: 0.80 }
  )
  diafragmaMesh.position.set(0, -0.03, 0)
  muscularGroup.add(diafragmaMesh)

  // Cuádriceps izquierdo
  const cuadL = createMesh(new THREE.SphereGeometry(0.085, 10, 8), M, 'cuadriceps', { opacity: 0.85 })
  cuadL.scale.set(1, 3.0, 0.85)
  cuadL.position.set(-0.11, -0.54, 0.06)
  muscularGroup.add(cuadL)

  // Cuádriceps derecho
  const cuadR = createMesh(new THREE.SphereGeometry(0.085, 10, 8), M, 'cuadriceps', { opacity: 0.85 })
  cuadR.scale.set(1, 3.0, 0.85)
  cuadR.position.set(0.11, -0.54, 0.06)
  muscularGroup.add(cuadR)

  // Gastrocnemio izquierdo (gemelo)
  const gastroL = createMesh(new THREE.SphereGeometry(0.055, 8, 6), M, 'gastrocnemio', { opacity: 0.85 })
  gastroL.scale.set(1, 2.5, 0.75)
  gastroL.position.set(-0.11, -1.05, -0.04)
  muscularGroup.add(gastroL)

  // Gastrocnemio derecho
  const gastroR = createMesh(new THREE.SphereGeometry(0.055, 8, 6), M, 'gastrocnemio', { opacity: 0.85 })
  gastroR.scale.set(1, 2.5, 0.75)
  gastroR.position.set(0.11, -1.05, -0.04)
  muscularGroup.add(gastroR)

  // ── SISTEMA DE ÓRGANOS ─────────────────────────────────────

  // Cerebro (ligeramente más pequeño que el cráneo, en su interior)
  const cerebroMesh = createMesh(
    new THREE.SphereGeometry(0.135, 16, 12), O, 'cerebro', { roughness: 0.35, metalness: 0.05 }
  )
  cerebroMesh.position.set(0, 0.95, 0.02)
  cerebroMesh.scale.set(1, 0.85, 0.95)
  organosGroup.add(cerebroMesh)

  // Corazón (ligeramente a la izquierda, posición anatómica correcta)
  const corazonMesh = createMesh(
    new THREE.SphereGeometry(0.082, 12, 10), O, 'corazon', { roughness: 0.3 }
  )
  corazonMesh.position.set(-0.07, 0.30, 0.12)
  corazonMesh.scale.set(1, 1.15, 0.9)
  organosGroup.add(corazonMesh)

  // Pulmón izquierdo
  const pulmonL = createMesh(
    new THREE.SphereGeometry(0.095, 12, 10), O, 'pulmones', { roughness: 0.45 }
  )
  pulmonL.position.set(-0.13, 0.34, 0.06)
  pulmonL.scale.set(0.85, 1.55, 0.7)
  organosGroup.add(pulmonL)

  // Pulmón derecho (ligeramente más grande anatomicamente)
  const pulmonR = createMesh(
    new THREE.SphereGeometry(0.095, 12, 10), O, 'pulmones', { roughness: 0.45 }
  )
  pulmonR.position.set(0.13, 0.34, 0.06)
  pulmonR.scale.set(0.9, 1.55, 0.7)
  organosGroup.add(pulmonR)

  // Hígado (hipocondrio derecho — cuadrante superior derecho)
  const higadoMesh = createMesh(
    new THREE.SphereGeometry(0.12, 12, 10), O, 'higado', { roughness: 0.35 }
  )
  higadoMesh.position.set(0.1, 0.0, 0.09)
  higadoMesh.scale.set(1.3, 0.78, 0.68)
  organosGroup.add(higadoMesh)

  // Estómago (hipocondrio izquierdo)
  const estomagoMesh = createMesh(
    new THREE.SphereGeometry(0.09, 10, 8), O, 'estomago', { roughness: 0.4 }
  )
  estomagoMesh.position.set(-0.1, -0.06, 0.10)
  estomagoMesh.scale.set(0.95, 0.88, 0.78)
  organosGroup.add(estomagoMesh)

  // Recopilar todas las mallas para wireframe
  const groups = [esqueleticoGroup, muscularGroup, organosGroup]
  groups.forEach(g => g.traverse(obj => {
    if (obj instanceof THREE.Mesh) allMeshes.push(obj)
  }))

  // ── CARGA DE MODELO GLTF (descomenta para usar modelo real) ─
  //
  // import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
  //
  // const loader = new GLTFLoader()
  // loader.load(
  //   '/models/body.glb',          // Archivo en /public/models/body.glb
  //   (gltf) => {
  //     gltf.scene.traverse((child) => {
  //       if (child instanceof THREE.Mesh) {
  //         child.castShadow = true
  //         child.receiveShadow = true
  //         // Clasificar por sistema según child.name (ajustar a tu modelo):
  //         if (child.name.startsWith('bone_') || child.name.startsWith('skeleton_')) {
  //           child.material = new THREE.MeshStandardMaterial({ color: SYSTEM_COLORS['Esquelético'] })
  //           child.userData.sistema = 'Esquelético'
  //           esqueleticoGroup.add(child)
  //         } else if (child.name.startsWith('muscle_')) {
  //           child.material = new THREE.MeshStandardMaterial({ color: SYSTEM_COLORS['Muscular'] })
  //           child.userData.sistema = 'Muscular'
  //           muscularGroup.add(child)
  //         } else {
  //           child.material = new THREE.MeshStandardMaterial({ color: SYSTEM_COLORS['Órganos'] })
  //           child.userData.sistema = 'Órganos'
  //           organosGroup.add(child)
  //         }
  //         allMeshes.push(child)
  //       }
  //     })
  //   },
  //   undefined,
  //   (error) => console.error('Error al cargar el modelo GLTF:', error)
  // )

  return { esqueleticoGroup, muscularGroup, organosGroup, allMeshes }
}

// ──────────────────────────────────────────────────────────────
// Componente principal del visor
// ──────────────────────────────────────────────────────────────
export function AnatomyViewer({ activeFilter, wireframe, onPartSelected }: AnatomyViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null)

  // Referencias a objetos Three.js para controles imperativos
  const cameraRef    = useRef<THREE.PerspectiveCamera | null>(null)
  const controlsRef  = useRef<OrbitControls | null>(null)
  const rendererRef  = useRef<THREE.WebGLRenderer | null>(null)
  const initialCamPos = new THREE.Vector3(0, 0.15, 3.2)

  // Referencias a grupos para filtro de sistema
  const groupsRef = useRef<{
    esqueletico: THREE.Group
    muscular:    THREE.Group
    organos:     THREE.Group
  } | null>(null)

  // Lista de todas las mallas para wireframe
  const meshesRef = useRef<THREE.Mesh[]>([])

  // Malla actualmente seleccionada
  const selectedMeshRef = useRef<THREE.Mesh | null>(null)

  // ── Inicialización Three.js ──────────────────────────────────
  useEffect(() => {
    const el = mountRef.current
    if (!el) return

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(el.clientWidth, el.clientHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.setClearColor(0xf8fafc)
    el.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Escena
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf8fafc)

    // Niebla suave para profundidad
    scene.fog = new THREE.Fog(0xf8fafc, 5, 18)

    // Cámara
    const camera = new THREE.PerspectiveCamera(50, el.clientWidth / el.clientHeight, 0.05, 50)
    camera.position.copy(initialCamPos)
    camera.lookAt(0, 0.15, 0)
    cameraRef.current = camera

    // Controles de órbita (soporta touch automáticamente)
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.07
    controls.target.set(0, 0.1, 0)
    controls.minDistance = 1.0
    controls.maxDistance = 7.0
    controls.minPolarAngle = 0.2
    controls.maxPolarAngle = Math.PI - 0.2
    controlsRef.current = controls

    // ── Iluminación ────────────────────────────────────────────

    // Luz ambiental suave
    const ambient = new THREE.AmbientLight(0xfff8f0, 0.65)
    scene.add(ambient)

    // Luz direccional principal (delantera superior derecha)
    const dirLight = new THREE.DirectionalLight(0xfff5e8, 1.2)
    dirLight.position.set(2.5, 4, 3)
    dirLight.castShadow = true
    dirLight.shadow.mapSize.set(1024, 1024)
    dirLight.shadow.camera.near = 0.5
    dirLight.shadow.camera.far = 20
    dirLight.shadow.camera.left = dirLight.shadow.camera.bottom = -3
    dirLight.shadow.camera.right = dirLight.shadow.camera.top = 3
    dirLight.shadow.radius = 3
    scene.add(dirLight)

    // Luz de relleno (izquierda, fría)
    const fillLight = new THREE.DirectionalLight(0xd0e8ff, 0.5)
    fillLight.position.set(-3, 2, 1)
    scene.add(fillLight)

    // Luz de contorno (trasera)
    const rimLight = new THREE.PointLight(0x88aaff, 0.4, 8)
    rimLight.position.set(0, 1, -2.5)
    scene.add(rimLight)

    // ── Plataforma base ────────────────────────────────────────
    const platGeo = new THREE.CylinderGeometry(0.45, 0.45, 0.04, 32)
    const platMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.9 })
    const platform = new THREE.Mesh(platGeo, platMat)
    platform.position.set(0, -1.58, 0)
    platform.receiveShadow = true
    platform.name = '' // no seleccionable
    scene.add(platform)

    // ── Modelo procedural ──────────────────────────────────────
    const { esqueleticoGroup, muscularGroup, organosGroup, allMeshes } =
      buildProceduralBody()

    scene.add(esqueleticoGroup)
    scene.add(muscularGroup)
    scene.add(organosGroup)

    groupsRef.current = {
      esqueletico: esqueleticoGroup,
      muscular:    muscularGroup,
      organos:     organosGroup,
    }
    meshesRef.current = allMeshes

    // ── Raycasting: click y touch ──────────────────────────────
    const raycaster = new THREE.Raycaster()
    const pointer   = new THREE.Vector2()

    function getPointerFromEvent(e: MouseEvent | Touch, rect: DOMRect) {
      const clientX = (e as MouseEvent).clientX ?? (e as Touch).clientX
      const clientY = (e as MouseEvent).clientY ?? (e as Touch).clientY
      return new THREE.Vector2(
        ((clientX - rect.left) / rect.width)  * 2 - 1,
        -((clientY - rect.top)  / rect.height) * 2 + 1
      )
    }

    function castRay(ndc: THREE.Vector2) {
      raycaster.setFromCamera(ndc, camera)
      const hits = raycaster.intersectObjects(allMeshes, false)
      return hits.length > 0 ? hits[0].object as THREE.Mesh : null
    }

    function selectMesh(mesh: THREE.Mesh | null) {
      // Restablecer la anterior
      if (selectedMeshRef.current) {
        const mat = selectedMeshRef.current.material as THREE.MeshStandardMaterial
        mat.emissive.setHex(0x000000)
        mat.emissiveIntensity = 0
      }

      selectedMeshRef.current = mesh

      if (mesh) {
        // Aplicar emissive highlight
        const mat = mesh.material as THREE.MeshStandardMaterial
        mat.emissive.setHex(HIGHLIGHT_EMISSIVE)
        mat.emissiveIntensity = HIGHLIGHT_INTENSITY
        onPartSelected(mesh.name)
      } else {
        onPartSelected(null)
      }
    }

    function onCanvasClick(e: MouseEvent) {
      const rect = renderer.domElement.getBoundingClientRect()
      const ndc  = getPointerFromEvent(e, rect)
      selectMesh(castRay(ndc))
    }

    let touchStartPos: THREE.Vector2 | null = null

    function onTouchStart(e: TouchEvent) {
      const rect = renderer.domElement.getBoundingClientRect()
      touchStartPos = getPointerFromEvent(e.touches[0], rect)
    }

    function onTouchEnd(e: TouchEvent) {
      if (!touchStartPos) return
      const rect = renderer.domElement.getBoundingClientRect()
      const endPos = getPointerFromEvent(e.changedTouches[0], rect)
      const delta  = Math.hypot(
        endPos.x - touchStartPos.x,
        endPos.y - touchStartPos.y
      )
      // Solo disparar selección si el toque fue un tap (no un arrastre)
      if (delta < 0.02) selectMesh(castRay(endPos))
      touchStartPos = null
    }

    renderer.domElement.addEventListener('click',      onCanvasClick,  { passive: true })
    renderer.domElement.addEventListener('touchstart', onTouchStart,   { passive: true })
    renderer.domElement.addEventListener('touchend',   onTouchEnd,     { passive: true })

    // ── Redimensionamiento ────────────────────────────────────
    const resizeObserver = new ResizeObserver(() => {
      if (!el) return
      camera.aspect = el.clientWidth / el.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(el.clientWidth, el.clientHeight)
    })
    resizeObserver.observe(el)

    // ── Bucle de animación ────────────────────────────────────
    let raf = 0
    function animate() {
      raf = requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      resizeObserver.disconnect()
      renderer.domElement.removeEventListener('click',      onCanvasClick)
      renderer.domElement.removeEventListener('touchstart', onTouchStart)
      renderer.domElement.removeEventListener('touchend',   onTouchEnd)
      controls.dispose()
      renderer.dispose()
      meshesRef.current = []
      groupsRef.current = null
      cameraRef.current = null
      controlsRef.current = null
      rendererRef.current = null
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── Reaccionar al filtro de sistema ──────────────────────────
  useEffect(() => {
    const g = groupsRef.current
    if (!g) return
    g.esqueletico.visible = activeFilter === 'todos' || activeFilter === 'esqueletico'
    g.muscular.visible    = activeFilter === 'todos' || activeFilter === 'muscular'
    g.organos.visible     = activeFilter === 'todos' || activeFilter === 'organos'
  }, [activeFilter])

  // ── Reaccionar al modo wireframe ─────────────────────────────
  useEffect(() => {
    meshesRef.current.forEach(mesh => {
      if (mesh.material instanceof THREE.MeshStandardMaterial) {
        mesh.material.wireframe = wireframe
      }
    })
  }, [wireframe])

  // ── Controles de cámara (zoom / reset) ───────────────────────
  const handleZoomIn = useCallback(() => {
    controlsRef.current?.dollyIn(1.25)
    controlsRef.current?.update()
  }, [])

  const handleZoomOut = useCallback(() => {
    controlsRef.current?.dollyOut(1.25)
    controlsRef.current?.update()
  }, [])

  const handleReset = useCallback(() => {
    const cam = cameraRef.current
    const ctrl = controlsRef.current
    if (!cam || !ctrl) return
    cam.position.copy(initialCamPos)
    ctrl.target.set(0, 0.1, 0)
    ctrl.update()
  }, [])

  return (
    <div className="relative w-full h-full bg-zinc-50">
      {/* Canvas Three.js */}
      <div ref={mountRef} className="absolute inset-0" />

      {/* Instrucción de interacción */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <span className="text-[11px] text-zinc-400 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full border border-zinc-200 font-medium">
          Haz clic en una parte para ver información
        </span>
      </div>

      {/* Controles de cámara — overlay */}
      <div className="absolute bottom-5 right-5 z-10 flex flex-col gap-2">
        <button
          onClick={handleZoomIn}
          className="w-9 h-9 bg-white border border-zinc-200 rounded-xl shadow-sm flex items-center justify-center hover:bg-zinc-50 active:scale-95 transition-all"
          title="Acercar"
        >
          <Plus weight="bold" className="w-4 h-4 text-zinc-600" />
        </button>
        <button
          onClick={handleZoomOut}
          className="w-9 h-9 bg-white border border-zinc-200 rounded-xl shadow-sm flex items-center justify-center hover:bg-zinc-50 active:scale-95 transition-all"
          title="Alejar"
        >
          <Minus weight="bold" className="w-4 h-4 text-zinc-600" />
        </button>
        <button
          onClick={handleReset}
          className="w-9 h-9 bg-white border border-zinc-200 rounded-xl shadow-sm flex items-center justify-center hover:bg-zinc-50 active:scale-95 transition-all"
          title="Restablecer posición"
        >
          <ArrowCounterClockwise weight="bold" className="w-4 h-4 text-zinc-600" />
        </button>
      </div>

      {/* Leyenda de colores */}
      <div className="absolute bottom-5 left-4 z-10 flex flex-col gap-1.5">
        {[
          { label: 'Esquelético', color: '#e8dcc8' },
          { label: 'Muscular',    color: '#c0392b' },
          { label: 'Órganos',     color: '#8e44ad' },
        ].map(({ label, color }) => (
          <div key={label} className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-sm flex-shrink-0 border border-zinc-300"
              style={{ backgroundColor: color }}
            />
            <span className="text-[11px] text-zinc-500 font-medium bg-white/70 backdrop-blur-sm px-1.5 py-0.5 rounded-full">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
