/*
 * AnatomyViewerR3F.tsx — Visor anatómico de alta fidelidad
 * Stack: @react-three/fiber · @react-three/drei · @react-three/postprocessing
 *
 * README — CÓMO REEMPLAZAR EL MODELO PLACEHOLDER CON Z-ANATOMY:
 * ─────────────────────────────────────────────────────────────────
 * FUENTES DEL MODELO:
 *   Modelo base: Z-Anatomy (CC BY-SA 4.0) — https://www.z-anatomy.com/
 *   Alternativa: BodyParts3D (CC BY-SA 2.1 JP)
 *     http://lifesciencedb.jp/bp3d/
 *
 * EXPORTAR DESDE BLENDER:
 *   1. Descarga el archivo .blend de https://www.z-anatomy.com/
 *   2. Abre en Blender 3.x o superior.
 *   3. Selecciona las colecciones anatómicas a exportar
 *      (skeleton, muscles, organs — o por sistema para GLBs separados).
 *   4. File → Export → glTF 2.0 (.glb)
 *      Configuración recomendada:
 *        ✓ Apply Modifiers
 *        ✓ Include Custom Properties
 *        ✓ Export Normals
 *        ✓ Draco Mesh Compression (reduce 70-80% el tamaño)
 *   5. Guarda el archivo en /public/models/anatomy_full.glb
 *      O por sistema: skeleton.glb, muscles.glb, organs.glb
 *
 * CONVENCIÓN DE NOMBRES DE MALLAS:
 *   Z-Anatomy usa Terminologia Anatomica 2019 (latín).
 *   El archivo /src/data/meshNames.ts mapea esos nombres al español.
 *   Asegúrate de que mesh.name en el GLB coincida con el campo meshKey.
 *
 * ACTIVAR EL MODELO REAL:
 *   1. En el componente GLTFBody (más abajo), descomenta la sección GLTF.
 *   2. Comenta o elimina el bloque ProceduralBody.
 *   3. Ajusta el mapeo de sistema en classifyMesh() según tu modelo.
 *
 * DESPLEGAR A CLOUDFLARE PAGES:
 *   git add public/models/anatomy_full.glb src/components/viewer/
 *   git commit -m "feat: integrar modelo Z-Anatomy"
 *   git push origin main
 *   → Cloudflare detecta el push, ejecuta npm run build, despliega /dist.
 *
 * ATRIBUCIÓN (CC BY-SA 4.0 — OBLIGATORIA):
 *   "Modelo anatómico: Z-Anatomy (CC BY-SA 4.0) ·
 *    Basado en BodyParts3D, Database Center for Life Science, Japón"
 */

import {
  useState, useRef, useCallback, Suspense,
  useMemo, useEffect,
} from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Html,
  useProgress,
} from '@react-three/drei'
import {
  EffectComposer,
  Bloom,
  SMAA,
  Outline,
  Selection,
  Select,
} from '@react-three/postprocessing'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Eye, EyeSlash, ArrowCounterClockwise, Aperture,
  Crosshair, Camera, X, BookOpenText, ArrowRight,
  Bone, Lightning, Heartbeat,
} from '@phosphor-icons/react'
import * as THREE from 'three'
import { Link } from 'react-router-dom'
import { meshNameMap } from '../../data/meshNames'
import type { SystemFilter } from '../../data/anatomy-3d-data'

// ──────────────────────────────────────────────────────────────
// Configuración de capas (layers)
// ──────────────────────────────────────────────────────────────

export interface LayerConfig {
  id: string
  label: string
  color: string         // Color hex del sistema
  defaultVisible: boolean
  defaultOpacity: number
}

export const LAYERS: LayerConfig[] = [
  { id: 'esqueletico',    label: 'Esquelético',    color: '#e8dcc8', defaultVisible: true,  defaultOpacity: 1.0  },
  { id: 'muscular',       label: 'Muscular',        color: '#c0392b', defaultVisible: true,  defaultOpacity: 1.0  },
  { id: 'cardiovascular', label: 'Cardiovascular',  color: '#8B0000', defaultVisible: false, defaultOpacity: 1.0  },
  { id: 'respiratorio',   label: 'Respiratorio',    color: '#CD5C5C', defaultVisible: false, defaultOpacity: 1.0  },
  { id: 'digestivo',      label: 'Digestivo',       color: '#8B4513', defaultVisible: false, defaultOpacity: 1.0  },
  { id: 'urinario',       label: 'Urinario',        color: '#4169E1', defaultVisible: false, defaultOpacity: 1.0  },
  { id: 'nervioso',       label: 'Nervioso',        color: '#9370DB', defaultVisible: false, defaultOpacity: 1.0  },
  { id: 'endocrino',      label: 'Endocrino',       color: '#DAA520', defaultVisible: false, defaultOpacity: 1.0  },
]

export type LayersState = Record<string, { visible: boolean; opacity: number }>

const DEFAULT_LAYERS: LayersState = Object.fromEntries(
  LAYERS.map(l => [l.id, { visible: l.defaultVisible, opacity: l.defaultOpacity }])
)

const XRAY_PRESET: LayersState = Object.fromEntries(
  LAYERS.map(l => [
    l.id,
    {
      visible: ['esqueletico', 'muscular', 'cardiovascular', 'respiratorio', 'digestivo'].includes(l.id),
      opacity: l.id === 'esqueletico' ? 1.0
             : l.id === 'muscular'    ? 0.3
             : 0.15,
    }
  ])
)

// ──────────────────────────────────────────────────────────────
// Mapeo de sistema anatómico al layer id
// ──────────────────────────────────────────────────────────────
const SISTEMA_TO_LAYER: Record<string, string> = {
  'Esquelético': 'esqueletico',
  'Muscular':    'muscular',
  'Órganos':     'cardiovascular', // default para órganos sin clasificar
}

const MESH_LAYER_MAP: Record<string, string> = {
  // Esquelético
  craneo: 'esqueletico', 'columna-vertebral': 'esqueletico',
  'caja-toracica': 'esqueletico', humero: 'esqueletico', femur: 'esqueletico',
  // Muscular
  biceps: 'muscular', cuadriceps: 'muscular', diafragma: 'muscular',
  trapecio: 'muscular', gastrocnemio: 'muscular',
  // Órganos → subdivisión por sistema
  corazon: 'cardiovascular', cerebro: 'nervioso',
  pulmones: 'respiratorio', higado: 'digestivo', estomago: 'digestivo',
}

// ──────────────────────────────────────────────────────────────
// Colores de material por sistema (spec)
// ──────────────────────────────────────────────────────────────
const SYSTEM_MATERIAL_COLORS: Record<string, { color: string; roughness: number; metalness: number }> = {
  esqueletico:    { color: '#e8dcc8', roughness: 0.6, metalness: 0.0 },
  muscular:       { color: '#c0392b', roughness: 0.8, metalness: 0.0 },
  cardiovascular: { color: '#8B0000', roughness: 0.4, metalness: 0.05 },
  respiratorio:   { color: '#CD5C5C', roughness: 0.5, metalness: 0.0 },
  digestivo:      { color: '#8B4513', roughness: 0.6, metalness: 0.0 },
  urinario:       { color: '#4169E1', roughness: 0.5, metalness: 0.05 },
  nervioso:       { color: '#9370DB', roughness: 0.4, metalness: 0.05 },
  endocrino:      { color: '#DAA520', roughness: 0.5, metalness: 0.1 },
}

// ──────────────────────────────────────────────────────────────
// Componente de malla anatómica individual (R3F)
// ──────────────────────────────────────────────────────────────
interface AnatomyMeshProps {
  name: string
  layerId: string
  geometry: React.ReactNode
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: [number, number, number] | number
  isSelected: boolean
  opacity: number
  visible: boolean
  onSelect: (name: string) => void
  onHover: (name: string | null) => void
}

function AnatomyMesh({
  name, layerId, geometry, position = [0, 0, 0],
  rotation = [0, 0, 0], scale = 1,
  isSelected, opacity, visible, onSelect, onHover,
}: AnatomyMeshProps) {
  const matConfig = SYSTEM_MATERIAL_COLORS[layerId] ?? SYSTEM_MATERIAL_COLORS.esqueletico

  const materialProps = useMemo(() => ({
    color: new THREE.Color(matConfig.color),
    roughness: matConfig.roughness,
    metalness: matConfig.metalness,
    envMapIntensity: 0.4,
    emissive: new THREE.Color(isSelected ? '#ffffff' : '#000000'),
    emissiveIntensity: isSelected ? 0.12 : 0,
    transparent: opacity < 1,
    opacity,
    side: opacity < 0.5 ? THREE.DoubleSide : THREE.FrontSide,
    depthWrite: opacity >= 0.99,
  }), [matConfig, isSelected, opacity])

  if (!visible) return null

  return (
    <Select enabled={isSelected}>
      <mesh
        name={name}
        position={position}
        rotation={rotation}
        scale={typeof scale === 'number' ? [scale, scale, scale] : scale}
        onClick={(e) => { e.stopPropagation(); onSelect(name) }}
        onPointerOver={(e) => { e.stopPropagation(); onHover(name) }}
        onPointerOut={() => onHover(null)}
        castShadow
        receiveShadow
      >
        {geometry}
        <meshStandardMaterial {...materialProps} />
      </mesh>
    </Select>
  )
}

// ──────────────────────────────────────────────────────────────
// Modelo procedural — placeholder hasta tener el GLB real
// ──────────────────────────────────────────────────────────────
// TODO: Reemplazar este componente con <GLTFBody /> cuando tengas el .glb
//       Ver instrucciones al inicio del archivo.
interface ProceduralBodyProps {
  layers: LayersState
  selectedId: string | null
  onSelect: (name: string) => void
  onHover: (name: string | null) => void
}

function ProceduralBody({ layers, selectedId, onSelect, onHover }: ProceduralBodyProps) {
  const mesh = useCallback((name: string) => ({
    isSelected: selectedId === name,
    opacity: layers[MESH_LAYER_MAP[name] ?? 'esqueletico']?.opacity ?? 1,
    visible: layers[MESH_LAYER_MAP[name] ?? 'esqueletico']?.visible ?? true,
    onSelect, onHover,
  }), [selectedId, layers, onSelect, onHover])

  const E = 'esqueletico', M = 'muscular'
  const O_CARDIO = 'cardiovascular', O_RESP = 'respiratorio', O_DIG = 'digestivo', O_NER = 'nervioso'

  return (
    <group>
      {/* ── SISTEMA ESQUELÉTICO ──────────────────────────────────── */}
      {/* Cráneo */}
      <AnatomyMesh name="craneo" layerId={E} {...mesh('craneo')}
        position={[0, 0.95, 0]}
        geometry={<sphereGeometry args={[0.165, 20, 16]} />}
      />
      {/* Columna vertebral (torácica + lumbar) */}
      <AnatomyMesh name="columna-vertebral" layerId={E} {...mesh('columna-vertebral')}
        position={[0, 0.22, -0.06]}
        geometry={<cylinderGeometry args={[0.028, 0.040, 0.92, 10]} />}
      />
      {/* Vértebras cervicales */}
      <AnatomyMesh name="columna-vertebral" layerId={E} {...mesh('columna-vertebral')}
        position={[0, 0.73, -0.02]}
        geometry={<cylinderGeometry args={[0.036, 0.032, 0.16, 8]} />}
      />
      {/* Caja torácica */}
      <AnatomyMesh name="caja-toracica" layerId={E} {...mesh('caja-toracica')}
        position={[0, 0.33, 0]}
        geometry={<cylinderGeometry args={[0.215, 0.168, 0.52, 14, 1, true]} />}
      />
      {/* Esternón */}
      <AnatomyMesh name="caja-toracica" layerId={E} {...mesh('caja-toracica')}
        position={[0, 0.34, 0.216]}
        geometry={<boxGeometry args={[0.045, 0.36, 0.032]} />}
      />
      {/* Costillas (5 pares simplificados) */}
      {[0, 1, 2, 3, 4].map(i => (
        <AnatomyMesh key={`rib-l-${i}`} name="caja-toracica" layerId={E} {...mesh('caja-toracica')}
          position={[0, 0.14 + i * 0.082, 0]}
          rotation={[0, Math.PI / 2, Math.PI / 2]}
          geometry={<torusGeometry args={[0.19 - i * 0.012, 0.011, 5, 16, Math.PI]} />}
        />
      ))}
      {/* Clavículas */}
      <AnatomyMesh name="caja-toracica" layerId={E} {...mesh('caja-toracica')}
        position={[-0.19, 0.61, 0.09]} rotation={[0, -0.3, Math.PI * 0.25]}
        geometry={<cylinderGeometry args={[0.018, 0.018, 0.27, 6]} />}
      />
      <AnatomyMesh name="caja-toracica" layerId={E} {...mesh('caja-toracica')}
        position={[0.19, 0.61, 0.09]} rotation={[0, 0.3, -Math.PI * 0.25]}
        geometry={<cylinderGeometry args={[0.018, 0.018, 0.27, 6]} />}
      />
      {/* Pelvis */}
      <AnatomyMesh name="femur" layerId={E} {...mesh('femur')}
        position={[0, -0.24, 0]} rotation={[Math.PI / 2, -Math.PI * 0.15, 0]}
        geometry={<torusGeometry args={[0.195, 0.042, 8, 18, Math.PI * 1.3]} />}
      />
      {/* Húmeros */}
      <AnatomyMesh name="humero" layerId={E} {...mesh('humero')}
        position={[-0.32, 0.35, 0]} rotation={[0, 0, 0.12]}
        geometry={<cylinderGeometry args={[0.036, 0.030, 0.37, 8]} />}
      />
      <AnatomyMesh name="humero" layerId={E} {...mesh('humero')}
        position={[0.32, 0.35, 0]} rotation={[0, 0, -0.12]}
        geometry={<cylinderGeometry args={[0.036, 0.030, 0.37, 8]} />}
      />
      {/* Antebrazos */}
      <AnatomyMesh name="humero" layerId={E} {...mesh('humero')}
        position={[-0.38, 0.01, 0.03]}
        geometry={<cylinderGeometry args={[0.026, 0.021, 0.33, 8]} />}
      />
      <AnatomyMesh name="humero" layerId={E} {...mesh('humero')}
        position={[0.38, 0.01, 0.03]}
        geometry={<cylinderGeometry args={[0.026, 0.021, 0.33, 8]} />}
      />
      {/* Fémures */}
      <AnatomyMesh name="femur" layerId={E} {...mesh('femur')}
        position={[-0.11, -0.58, 0]} rotation={[0, 0, 0.045]}
        geometry={<cylinderGeometry args={[0.048, 0.040, 0.50, 10]} />}
      />
      <AnatomyMesh name="femur" layerId={E} {...mesh('femur')}
        position={[0.11, -0.58, 0]} rotation={[0, 0, -0.045]}
        geometry={<cylinderGeometry args={[0.048, 0.040, 0.50, 10]} />}
      />
      {/* Tibias */}
      <AnatomyMesh name="femur" layerId={E} {...mesh('femur')}
        position={[-0.11, -1.10, 0]}
        geometry={<cylinderGeometry args={[0.031, 0.025, 0.45, 8]} />}
      />
      <AnatomyMesh name="femur" layerId={E} {...mesh('femur')}
        position={[0.11, -1.10, 0]}
        geometry={<cylinderGeometry args={[0.031, 0.025, 0.45, 8]} />}
      />
      {/* Pies */}
      <AnatomyMesh name="femur" layerId={E} {...mesh('femur')}
        position={[-0.11, -1.39, 0.06]}
        geometry={<boxGeometry args={[0.09, 0.06, 0.21]} />}
      />
      <AnatomyMesh name="femur" layerId={E} {...mesh('femur')}
        position={[0.11, -1.39, 0.06]}
        geometry={<boxGeometry args={[0.09, 0.06, 0.21]} />}
      />

      {/* ── SISTEMA MUSCULAR ─────────────────────────────────────── */}
      {/* Trapecio */}
      <AnatomyMesh name="trapecio" layerId={M} {...mesh('trapecio')}
        position={[0, 0.69, -0.09]}
        geometry={<boxGeometry args={[0.51, 0.19, 0.075]} />}
      />
      {/* Pectorales */}
      <AnatomyMesh name="biceps" layerId={M} {...mesh('biceps')}
        position={[-0.145, 0.40, 0.145]}
        scale={[1.4, 0.82, 0.67]}
        geometry={<sphereGeometry args={[0.10, 10, 8]} />}
      />
      <AnatomyMesh name="biceps" layerId={M} {...mesh('biceps')}
        position={[0.145, 0.40, 0.145]}
        scale={[1.4, 0.82, 0.67]}
        geometry={<sphereGeometry args={[0.10, 10, 8]} />}
      />
      {/* Bíceps */}
      <AnatomyMesh name="biceps" layerId={M} {...mesh('biceps')}
        position={[-0.32, 0.32, 0.06]}
        scale={[1, 2.5, 0.85]}
        geometry={<sphereGeometry args={[0.063, 10, 8]} />}
      />
      <AnatomyMesh name="biceps" layerId={M} {...mesh('biceps')}
        position={[0.32, 0.32, 0.06]}
        scale={[1, 2.5, 0.85]}
        geometry={<sphereGeometry args={[0.063, 10, 8]} />}
      />
      {/* Diafragma */}
      <AnatomyMesh name="diafragma" layerId={M} {...mesh('diafragma')}
        position={[0, -0.02, 0]}
        geometry={<cylinderGeometry args={[0.188, 0.178, 0.026, 14]} />}
      />
      {/* Cuádriceps */}
      <AnatomyMesh name="cuadriceps" layerId={M} {...mesh('cuadriceps')}
        position={[-0.11, -0.54, 0.07]}
        scale={[1, 3.1, 0.87]}
        geometry={<sphereGeometry args={[0.085, 10, 8]} />}
      />
      <AnatomyMesh name="cuadriceps" layerId={M} {...mesh('cuadriceps')}
        position={[0.11, -0.54, 0.07]}
        scale={[1, 3.1, 0.87]}
        geometry={<sphereGeometry args={[0.085, 10, 8]} />}
      />
      {/* Gastrocnemio */}
      <AnatomyMesh name="gastrocnemio" layerId={M} {...mesh('gastrocnemio')}
        position={[-0.11, -1.06, -0.04]}
        scale={[1, 2.6, 0.75]}
        geometry={<sphereGeometry args={[0.054, 8, 6]} />}
      />
      <AnatomyMesh name="gastrocnemio" layerId={M} {...mesh('gastrocnemio')}
        position={[0.11, -1.06, -0.04]}
        scale={[1, 2.6, 0.75]}
        geometry={<sphereGeometry args={[0.054, 8, 6]} />}
      />

      {/* ── SISTEMA DE ÓRGANOS ───────────────────────────────────── */}
      {/* Cerebro */}
      <AnatomyMesh name="cerebro" layerId={O_NER} {...mesh('cerebro')}
        position={[0, 0.95, 0.02]}
        scale={[1, 0.85, 0.96]}
        geometry={<sphereGeometry args={[0.133, 18, 14]} />}
      />
      {/* Corazón */}
      <AnatomyMesh name="corazon" layerId={O_CARDIO} {...mesh('corazon')}
        position={[-0.072, 0.30, 0.12]}
        scale={[1, 1.18, 0.92]}
        geometry={<sphereGeometry args={[0.082, 14, 10]} />}
      />
      {/* Pulmones */}
      <AnatomyMesh name="pulmones" layerId={O_RESP} {...mesh('pulmones')}
        position={[-0.135, 0.34, 0.065]}
        scale={[0.87, 1.58, 0.72]}
        geometry={<sphereGeometry args={[0.096, 14, 10]} />}
      />
      <AnatomyMesh name="pulmones" layerId={O_RESP} {...mesh('pulmones')}
        position={[0.135, 0.34, 0.065]}
        scale={[0.92, 1.58, 0.72]}
        geometry={<sphereGeometry args={[0.096, 14, 10]} />}
      />
      {/* Hígado */}
      <AnatomyMesh name="higado" layerId={O_DIG} {...mesh('higado')}
        position={[0.108, 0.01, 0.095]}
        scale={[1.32, 0.80, 0.70]}
        geometry={<sphereGeometry args={[0.122, 14, 10]} />}
      />
      {/* Estómago */}
      <AnatomyMesh name="estomago" layerId={O_DIG} {...mesh('estomago')}
        position={[-0.108, -0.05, 0.10]}
        scale={[0.97, 0.90, 0.80]}
        geometry={<sphereGeometry args={[0.090, 10, 8]} />}
      />
    </group>
  )
}

// ──────────────────────────────────────────────────────────────
// Contenido de la escena 3D (dentro del Canvas)
// ──────────────────────────────────────────────────────────────
interface SceneContentProps {
  layers: LayersState
  selectedId: string | null
  hoveredId: string | null
  onSelect: (id: string | null) => void
  onHover: (id: string | null) => void
  wireframe: boolean
  controlsRef: React.RefObject<any>
}

function SceneContent({
  layers, selectedId, hoveredId, onSelect, onHover, wireframe, controlsRef,
}: SceneContentProps) {
  const { camera } = useThree()

  // Wireframe global
  useFrame(() => {
    /* frame loop is empty — wireframe handled via material props */
  })

  return (
    <>
      {/* ── Iluminación (three-point rig) ─────────────────────── */}
      <ambientLight intensity={0.45} color="#fff8f0" />

      {/* Key light — cálido, frontal superior derecho */}
      <directionalLight
        position={[2.5, 4.5, 3.5]}
        intensity={1.2}
        color="#fff5e8"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={0.5}
        shadow-camera-far={20}
        shadow-camera-left={-3}
        shadow-camera-right={3}
        shadow-camera-top={3}
        shadow-camera-bottom={-3}
        shadow-radius={3}
      />
      {/* Fill light — frío, frontal izquierdo */}
      <directionalLight position={[-3.5, 2.5, 2]} intensity={0.4} color="#d0e8ff" />
      {/* Rim light — trasero azulado */}
      <pointLight position={[0, 2.5, -3]} intensity={0.35} color="#8899ff" />

      {/* ── Environment HDR (PBR reflections) ─────────────────── */}
      <Environment preset="studio" />

      {/* ── Modelo (Selection + efectos de post-procesado) ────── */}
      <Selection>
        <EffectComposer multisampling={0} autoClear={false}>
          <Outline
            blur
            visibleEdgeColor={0x4fc3f7 as any}
            hiddenEdgeColor={0x4fc3f7 as any}
            edgeStrength={4}
            pulseSpeed={0}
          />
          <Bloom
            mipmapBlur
            threshold={0.85}
            strength={0.18}
            radius={0.4}
          />
          <SMAA />
        </EffectComposer>

        {/* Limpiar selección al hacer clic en el fondo */}
        <mesh
          visible={false}
          position={[0, 0, -10]}
          onClick={() => onSelect(null)}
        >
          <planeGeometry args={[100, 100]} />
          <meshBasicMaterial />
        </mesh>

        <ProceduralBody
          layers={layers}
          selectedId={selectedId}
          onSelect={onSelect}
          onHover={onHover}
        />

        {/* Tooltip Html (hovered) */}
        {hoveredId && (() => {
          const info = meshNameMap.get(hoveredId)
          return info ? (
            <Html
              position={[0.5, 0.5, 0]}
              style={{ pointerEvents: 'none', userSelect: 'none' }}
              zIndexRange={[10, 0]}
            >
              <div style={{
                background: 'rgba(15,15,20,0.88)',
                border: '1px solid rgba(79,195,247,0.4)',
                borderRadius: '8px',
                padding: '6px 10px',
                color: '#e0e0e0',
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '11px',
                whiteSpace: 'nowrap',
              }}>
                <div style={{ color: '#4fc3f7', fontWeight: 600 }}>{info.nombreEspanol}</div>
                <div style={{ color: '#888', fontSize: '10px' }}>{info.nombreLatino}</div>
              </div>
            </Html>
          ) : null
        })()}
      </Selection>

      {/* ── Sombra de contacto en el suelo ─────────────────────── */}
      <ContactShadows
        position={[0, -1.62, 0]}
        blur={2.5}
        opacity={0.4}
        scale={10}
        resolution={512}
        far={1.62}
      />

      {/* ── Controles de órbita ────────────────────────────────── */}
      <OrbitControls
        ref={controlsRef}
        enableDamping
        dampingFactor={0.05}
        target={[0, 0.1, 0]}
        minDistance={1.5}
        maxDistance={6.0}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  )
}

// ──────────────────────────────────────────────────────────────
// Panel de capas (izquierda)
// ──────────────────────────────────────────────────────────────
interface LayerPanelProps {
  layers: LayersState
  onToggle: (id: string) => void
  onOpacity: (id: string, val: number) => void
}

function LayerPanel({ layers, onToggle, onOpacity }: LayerPanelProps) {
  return (
    <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-1"
      style={{
        background: 'rgba(15,15,20,0.85)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '14px',
        padding: '10px 8px',
        minWidth: '180px',
      }}>
      <p style={{ color: '#888', fontSize: '9px', fontFamily: 'IBM Plex Mono, monospace',
        textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px', paddingLeft: '4px' }}>
        Capas
      </p>
      {LAYERS.map(layer => {
        const state = layers[layer.id]
        return (
          <div key={layer.id} className="flex items-center gap-2 px-1 py-0.5">
            {/* Toggle visibilidad */}
            <button
              onClick={() => onToggle(layer.id)}
              style={{ color: state.visible ? '#4fc3f7' : '#444', flexShrink: 0 }}
            >
              {state.visible
                ? <Eye weight="fill" className="w-3.5 h-3.5" />
                : <EyeSlash weight="fill" className="w-3.5 h-3.5" />}
            </button>

            {/* Color dot + label */}
            <span className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: layer.color }} />
            <span style={{
              color: state.visible ? '#e0e0e0' : '#555',
              fontSize: '11px',
              fontFamily: 'IBM Plex Mono, monospace',
              flex: 1,
            }}>
              {layer.label}
            </span>

            {/* Slider de opacidad */}
            {state.visible && (
              <input
                type="range"
                min={0.1} max={1} step={0.05}
                value={state.opacity}
                onChange={e => onOpacity(layer.id, parseFloat(e.target.value))}
                className="w-14 accent-sky-400"
                style={{ cursor: 'pointer' }}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

// ──────────────────────────────────────────────────────────────
// Barra de herramientas inferior
// ──────────────────────────────────────────────────────────────
interface ToolbarProps {
  wireframe: boolean
  onWireframe: () => void
  onXRay: () => void
  onReset: () => void
  onScreenshot: () => void
}

function ViewerToolbar({ wireframe, onWireframe, onXRay, onReset, onScreenshot }: ToolbarProps) {
  const btnStyle: React.CSSProperties = {
    background: 'rgba(15,15,20,0.85)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '10px',
    color: '#e0e0e0',
    padding: '8px 12px',
    cursor: 'pointer',
    display: 'flex', alignItems: 'center', gap: '6px',
    fontSize: '11px',
    fontFamily: 'IBM Plex Mono, monospace',
    transition: 'all 0.15s',
  }

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
      <button style={btnStyle} onClick={onReset} title="Restablecer cámara">
        <ArrowCounterClockwise weight="bold" className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Reset</span>
      </button>
      <button style={{
        ...btnStyle,
        borderColor: wireframe ? 'rgba(79,195,247,0.6)' : 'rgba(255,255,255,0.08)',
        color: wireframe ? '#4fc3f7' : '#e0e0e0',
      }} onClick={onWireframe} title="Modo wireframe">
        <Aperture weight={wireframe ? 'fill' : 'regular'} className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Wireframe</span>
      </button>
      <button style={btnStyle} onClick={onXRay} title="Preset X-Ray">
        <Crosshair weight="bold" className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">X-Ray</span>
      </button>
      <button style={btnStyle} onClick={onScreenshot} title="Captura de pantalla">
        <Camera weight="fill" className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Captura</span>
      </button>
    </div>
  )
}

// ──────────────────────────────────────────────────────────────
// Panel de información (derecha — dark glassmorphic)
// ──────────────────────────────────────────────────────────────
function ViewerInfoPanel({ meshId, onClose }: { meshId: string | null; onClose: () => void }) {
  const info = meshId ? meshNameMap.get(meshId) : null

  return (
    <>
      {/* Desktop: slide desde la derecha */}
      <AnimatePresence>
        {info && (
          <motion.div
            key="info-desktop"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="hidden md:flex flex-col absolute right-0 top-0 bottom-0 w-72 z-20 overflow-hidden"
            style={{
              background: 'rgba(15,15,20,0.90)',
              backdropFilter: 'blur(16px)',
              borderLeft: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <InfoPanelContent info={info} onClose={onClose} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile: sube desde abajo */}
      <AnimatePresence>
        {info && (
          <>
            <motion.div
              key="overlay-mobile"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={onClose}
            />
            <motion.div
              key="info-mobile"
              initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="fixed bottom-16 left-0 right-0 z-50 md:hidden rounded-t-3xl overflow-hidden max-h-[65dvh] flex flex-col"
              style={{ background: 'rgba(15,15,20,0.96)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }} />
              </div>
              <InfoPanelContent info={info} onClose={onClose} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function InfoPanelContent({ info, onClose }: { info: NonNullable<ReturnType<typeof meshNameMap.get>>; onClose: () => void }) {
  const systemColors: Record<string, string> = {
    'Esquelético': '#e8dcc8',
    'Muscular': '#c0392b',
    'Órganos': '#8B4513',
  }
  const accentColor = systemColors[info.sistema] ?? '#4fc3f7'

  return (
    <>
      {/* Header */}
      <div className="px-5 py-4 flex-shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
              style={{ color: accentColor, border: `1px solid ${accentColor}40`, background: `${accentColor}10` }}>
              {info.sistema}
            </span>
            <h2 className="font-bold text-base mt-1.5 leading-tight" style={{ color: '#e0e0e0', fontFamily: 'IBM Plex Mono, monospace' }}>
              {info.nombreEspanol}
            </h2>
            <p className="text-[11px] mt-0.5" style={{ color: '#888', fontFamily: 'IBM Plex Mono, monospace', fontStyle: 'italic' }}>
              {info.nombreLatino}
            </p>
          </div>
          <button onClick={onClose} className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <X weight="bold" className="w-3.5 h-3.5" style={{ color: '#888' }} />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="overflow-y-auto flex-1 px-5 py-4 space-y-4">
        {/* Descripción */}
        <div>
          <p className="text-[9px] font-bold uppercase tracking-widest mb-2" style={{ color: '#4fc3f7' }}>
            Descripción
          </p>
          <p className="text-[12px] leading-relaxed" style={{ color: '#ccc' }}>
            {info.descripcion}
          </p>
        </div>

        {/* Funciones clave */}
        <div>
          <p className="text-[9px] font-bold uppercase tracking-widest mb-2" style={{ color: '#4fc3f7' }}>
            Funciones clave
          </p>
          <ul className="space-y-2">
            {info.funcionesClave.map((fn, i) => (
              <li key={i} className="flex items-start gap-2 text-[12px]" style={{ color: '#bbb' }}>
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[5px]"
                  style={{ backgroundColor: accentColor }} />
                {fn}
              </li>
            ))}
          </ul>
        </div>

        {/* Cross-link a MedLex */}
        <Link
          to={`/terminologia?sistema=${info.medlexSistema}`}
          onClick={onClose}
          className="flex items-center gap-3 p-3 rounded-xl"
          style={{ background: 'rgba(79,195,247,0.08)', border: '1px solid rgba(79,195,247,0.2)' }}
        >
          <BookOpenText weight="fill" className="w-4 h-4 flex-shrink-0" style={{ color: '#4fc3f7' }} />
          <div className="flex-1">
            <p className="text-[11px] font-bold" style={{ color: '#4fc3f7' }}>Ver terminología relacionada</p>
            <p className="text-[10px]" style={{ color: '#888' }}>Prefijos, sufijos y raíces · MedLex</p>
          </div>
          <ArrowRight weight="bold" className="w-3.5 h-3.5" style={{ color: '#4fc3f7' }} />
        </Link>

        {/* Atribución CC BY-SA */}
        <p className="text-[9px] leading-relaxed" style={{ color: '#444', fontFamily: 'IBM Plex Mono, monospace' }}>
          Modelo anatómico: Z-Anatomy (CC BY-SA 4.0) · Basado en BodyParts3D, Database Center for Life Science, Japón
        </p>
      </div>
    </>
  )
}

// ──────────────────────────────────────────────────────────────
// Pantalla de carga
// ──────────────────────────────────────────────────────────────
function ViewerLoadingScreen() {
  const { active, progress } = useProgress()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (!active) {
      const t = setTimeout(() => setVisible(false), 600)
      return () => clearTimeout(t)
    }
  }, [active])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-6"
          style={{ background: '#0d0d0d' }}
        >
          {/* SVG skeleton animation */}
          <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
            <style>{`
              @keyframes dash { to { stroke-dashoffset: 0; } }
              .skel { stroke: #4fc3f7; stroke-width: 2; stroke-dasharray: 400; stroke-dashoffset: 400; animation: dash 2s ease forwards; fill: none; }
            `}</style>
            {/* Skull */}
            <ellipse cx="40" cy="18" rx="15" ry="16" className="skel" style={{ animationDelay: '0s' }} />
            {/* Spine */}
            <line x1="40" y1="34" x2="40" y2="90" className="skel" style={{ animationDelay: '0.3s' }} />
            {/* Ribs (simplified) */}
            <path d="M40 45 Q28 50 24 58" className="skel" style={{ animationDelay: '0.6s' }} />
            <path d="M40 45 Q52 50 56 58" className="skel" style={{ animationDelay: '0.6s' }} />
            <path d="M40 55 Q27 60 23 68" className="skel" style={{ animationDelay: '0.8s' }} />
            <path d="M40 55 Q53 60 57 68" className="skel" style={{ animationDelay: '0.8s' }} />
            {/* Arms */}
            <line x1="40" y1="40" x2="18" y2="65" className="skel" style={{ animationDelay: '1s' }} />
            <line x1="40" y1="40" x2="62" y2="65" className="skel" style={{ animationDelay: '1s' }} />
            {/* Legs */}
            <line x1="36" y1="90" x2="28" y2="118" className="skel" style={{ animationDelay: '1.2s' }} />
            <line x1="44" y1="90" x2="52" y2="118" className="skel" style={{ animationDelay: '1.2s' }} />
          </svg>

          <div className="text-center">
            <p style={{ color: '#4fc3f7', fontFamily: 'IBM Plex Mono, monospace', fontSize: '13px' }}>
              Cargando modelo...{' '}
              <span style={{ fontWeight: 600 }}>
                {active ? `${progress.toFixed(0)}%` : ''}
              </span>
            </p>
            <p style={{ color: '#444', fontSize: '11px', fontFamily: 'IBM Plex Mono, monospace', marginTop: '4px' }}>
              Preparando visor anatómico
            </p>
          </div>

          {/* Barra de progreso */}
          <div style={{
            width: '160px', height: '2px',
            background: 'rgba(79,195,247,0.15)',
            borderRadius: '2px', overflow: 'hidden',
          }}>
            <motion.div
              style={{
                height: '100%', background: '#4fc3f7', borderRadius: '2px',
                width: `${active ? progress : 100}%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ──────────────────────────────────────────────────────────────
// COMPONENTE PRINCIPAL EXPORTADO
// ──────────────────────────────────────────────────────────────
interface AnatomyViewerR3FProps {
  activeFilter?: SystemFilter
  onPartSelected?: (partId: string | null) => void
}

export function AnatomyViewerR3F({ activeFilter, onPartSelected }: AnatomyViewerR3FProps) {
  const [layers, setLayers]       = useState<LayersState>(DEFAULT_LAYERS)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [hoveredId, setHoveredId]   = useState<string | null>(null)
  const [wireframe, setWireframe]   = useState(false)
  const canvasRef   = useRef<HTMLCanvasElement>(null)
  const controlsRef = useRef<any>(null)

  // Sincronizar filtro externo → capa visible
  useEffect(() => {
    if (!activeFilter || activeFilter === 'todos') return
    const filterToLayer: Record<string, string> = {
      esqueletico: 'esqueletico',
      muscular: 'muscular',
      organos: 'cardiovascular',
    }
    const layerId = filterToLayer[activeFilter]
    if (layerId) {
      setLayers(prev => {
        const next = { ...prev }
        Object.keys(next).forEach(k => { next[k] = { ...next[k], visible: false } })
        next[layerId] = { visible: true, opacity: 1 }
        return next
      })
    }
  }, [activeFilter])

  const handleSelect = useCallback((id: string | null) => {
    setSelectedId(id)
    onPartSelected?.(id)
  }, [onPartSelected])

  const handleLayerToggle = useCallback((id: string) => {
    setLayers(prev => ({
      ...prev,
      [id]: { ...prev[id], visible: !prev[id].visible },
    }))
  }, [])

  const handleLayerOpacity = useCallback((id: string, val: number) => {
    setLayers(prev => ({ ...prev, [id]: { ...prev[id], opacity: val } }))
  }, [])

  const handleReset = useCallback(() => {
    if (controlsRef.current) {
      controlsRef.current.reset()
    }
  }, [])

  const handleXRay = useCallback(() => {
    setLayers(XRAY_PRESET)
  }, [])

  const handleScreenshot = useCallback(() => {
    const canvas = document.querySelector('canvas')
    if (canvas) {
      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png')
      link.download = `medcore-anatomy-${Date.now()}.png`
      link.click()
    }
  }, [])

  return (
    <div className="relative w-full h-full" style={{ background: '#0d0d0d' }}>

      {/* ── Canvas R3F ───────────────────────────────────────── */}
      <Canvas
        ref={canvasRef}
        camera={{ position: [0, 1.2, 3.5], fov: 45, near: 0.1, far: 100 }}
        gl={{
          antialias: false,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        dpr={[1, 2]}
        shadows
        style={{ background: '#0d0d0d' }}
      >
        <Suspense fallback={null}>
          <SceneContent
            layers={layers}
            selectedId={selectedId}
            hoveredId={hoveredId}
            onSelect={handleSelect}
            onHover={setHoveredId}
            wireframe={wireframe}
            controlsRef={controlsRef}
          />
        </Suspense>
      </Canvas>

      {/* ── Pantalla de carga ─────────────────────────────────── */}
      <ViewerLoadingScreen />

      {/* ── Panel de capas (izquierda) ───────────────────────── */}
      <div className="hidden md:block">
        <LayerPanel
          layers={layers}
          onToggle={handleLayerToggle}
          onOpacity={handleLayerOpacity}
        />
      </div>

      {/* ── Instrucción de interacción ───────────────────────── */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none md:ml-24">
        <span style={{
          background: 'rgba(15,15,20,0.75)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.08)',
          color: '#888',
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '10px',
          padding: '4px 12px',
          borderRadius: '20px',
        }}>
          Clic en una estructura · Arrastra para rotar · Rueda para zoom
        </span>
      </div>

      {/* ── Barra de herramientas (bottom center) ────────────── */}
      <ViewerToolbar
        wireframe={wireframe}
        onWireframe={() => setWireframe(w => !w)}
        onXRay={handleXRay}
        onReset={handleReset}
        onScreenshot={handleScreenshot}
      />

      {/* ── Panel de información ──────────────────────────────── */}
      <ViewerInfoPanel meshId={selectedId} onClose={() => handleSelect(null)} />

      {/* ── Atribución ───────────────────────────────────────── */}
      <div className="absolute bottom-16 left-3 z-10 hidden lg:block pointer-events-none">
        <p style={{
          color: '#333',
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '9px',
          lineHeight: 1.4,
        }}>
          Modelo: Z-Anatomy (CC BY-SA 4.0)<br />
          BodyParts3D · DBCLS, Japón
        </p>
      </div>
    </div>
  )
}
