/*
 * AnatomyViewer2D.tsx — Visor anatómico 2D interactivo
 *
 * SVG inline, sin WebGL, sin dependencias de Three.js.
 * ViewBox: "0 0 400 900" — coordenadas calibradas con anatomyHotspots.ts
 *
 * Capas:
 *   skin     → silueta y superficie corporal (#f5c5a3)
 *   muscle   → grupos musculares principales (#c0392b)
 *   skeleton → estructuras óseas (#e8dcc8)
 *
 * El overlay de hotspots es una capa SVG transparente encima de todas.
 */

import { useState, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X, ArrowLeft, Eye, EyeSlash, ArrowCounterClockwise,
  Bone, Lightning, Heartbeat, BookOpenText, ArrowRight,
  ArrowsOut, Camera,
} from '@phosphor-icons/react'
import { hotspots, hotspotById, HOTSPOT_SYSTEM_LABELS, type Hotspot } from '../data/anatomyHotspots'

// ──────────────────────────────────────────────────────────────
// Tipos y constantes
// ──────────────────────────────────────────────────────────────

type LayerKey = 'skin' | 'muscle' | 'skeleton'
type View = 'anterior' | 'posterior'

interface LayerState {
  visible: boolean
  opacity: number
}

type LayersState = Record<LayerKey, LayerState>

const DEFAULT_LAYERS: LayersState = {
  skin:     { visible: true, opacity: 1 },
  muscle:   { visible: true, opacity: 1 },
  skeleton: { visible: true, opacity: 1 },
}

const XRAY_LAYERS: LayersState = {
  skin:     { visible: true, opacity: 0.18 },
  muscle:   { visible: true, opacity: 0.35 },
  skeleton: { visible: true, opacity: 1 },
}

const LAYER_META: Array<{ id: LayerKey; label: string; color: string }> = [
  { id: 'skin',     label: 'Piel / Superficie', color: '#f5c5a3' },
  { id: 'muscle',   label: 'Sistema Muscular',  color: '#c0392b' },
  { id: 'skeleton', label: 'Sistema Óseo',      color: '#e8dcc8' },
]

const SYSTEM_ICON: Record<string, React.ReactNode> = {
  esqueletico: <Bone weight="fill" className="w-3.5 h-3.5" />,
  muscular:    <Lightning weight="fill" className="w-3.5 h-3.5" />,
  organos:     <Heartbeat weight="fill" className="w-3.5 h-3.5" />,
}

const SYSTEM_COLORS: Record<string, { accent: string; bg: string; border: string; badge: string }> = {
  esqueletico: { accent: '#e8dcc8', bg: 'rgba(232,220,200,0.12)', border: 'rgba(232,220,200,0.3)', badge: 'rgba(232,220,200,0.2)' },
  muscular:    { accent: '#e05555', bg: 'rgba(192,57,43,0.12)',  border: 'rgba(192,57,43,0.3)',  badge: 'rgba(192,57,43,0.2)'  },
  organos:     { accent: '#c77dff', bg: 'rgba(142,68,173,0.12)', border: 'rgba(142,68,173,0.3)', badge: 'rgba(142,68,173,0.2)' },
}

const MEDLEX_MAP: Record<string, string> = {
  craneo:            'nervioso',
  'columna-vertebral': 'nervioso',
  clavicula:         'musculoesqueletico',
  esternon:          'musculoesqueletico',
  costillas:         'respiratorio',
  humero:            'musculoesqueletico',
  'radio-cubito':    'musculoesqueletico',
  pelvis:            'musculoesqueletico',
  femur:             'musculoesqueletico',
  tibia:             'musculoesqueletico',
  trapecio:          'musculoesqueletico',
  deltoides:         'musculoesqueletico',
  pectoral:          'musculoesqueletico',
  biceps:            'musculoesqueletico',
  'recto-abdominal': 'musculoesqueletico',
  cuadriceps:        'musculoesqueletico',
  gastrocnemio:      'musculoesqueletico',
  'tibial-anterior': 'musculoesqueletico',
  gluteo:            'musculoesqueletico',
  'dorsal-ancho':    'musculoesqueletico',
  cerebro:           'nervioso',
  corazon:           'cardiovascular',
  pulmones:          'respiratorio',
  higado:            'digestivo',
  rinones:           'urinario',
}

// ──────────────────────────────────────────────────────────────
// CAPA PIEL / SUPERFICIE  (ViewBox 0 0 400 900)
// ──────────────────────────────────────────────────────────────
function SkinLayer() {
  const fill = '#f5c5a3'
  const stroke = '#d4935e'
  const sw = '2'
  return (
    <g>
      {/* Cabeza */}
      <ellipse cx="200" cy="73" rx="65" ry="68" fill={fill} stroke={stroke} strokeWidth={sw} />
      {/* Orejas */}
      <ellipse cx="134" cy="72" rx="10" ry="18" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <ellipse cx="266" cy="72" rx="10" ry="18" fill={fill} stroke={stroke} strokeWidth="1.5" />
      {/* Cuello */}
      <path d="M172 138 Q200 148 228 138 L230 186 L170 186 Z" fill={fill} stroke={stroke} strokeWidth={sw} />
      {/* Torso */}
      <path
        d="M170 186 C150 186 122 190 105 202 C80 215 63 238 58 272 C52 310 55 355 63 395
           C72 432 86 462 100 490 C114 516 130 530 140 535
           L260 535
           C270 530 286 516 300 490 C314 462 328 432 337 395
           C345 355 348 310 342 272 C337 238 320 215 295 202
           C278 190 250 186 230 186 Z"
        fill={fill} stroke={stroke} strokeWidth={sw}
      />
      {/* Brazo superior izquierdo */}
      <rect x="86" y="198" width="36" height="142" rx="18"
        transform="rotate(8 104 198)" fill={fill} stroke={stroke} strokeWidth={sw} />
      {/* Antebrazo izquierdo */}
      <rect x="68" y="342" width="30" height="128" rx="15"
        transform="rotate(5 83 342)" fill={fill} stroke={stroke} strokeWidth={sw} />
      {/* Mano izquierda */}
      <ellipse cx="72" cy="482" rx="20" ry="28" fill={fill} stroke={stroke} strokeWidth="1.5" />
      {/* Brazo superior derecho */}
      <rect x="278" y="198" width="36" height="142" rx="18"
        transform="rotate(-8 296 198)" fill={fill} stroke={stroke} strokeWidth={sw} />
      {/* Antebrazo derecho */}
      <rect x="302" y="342" width="30" height="128" rx="15"
        transform="rotate(-5 317 342)" fill={fill} stroke={stroke} strokeWidth={sw} />
      {/* Mano derecha */}
      <ellipse cx="328" cy="482" rx="20" ry="28" fill={fill} stroke={stroke} strokeWidth="1.5" />
      {/* Muslo izquierdo */}
      <rect x="122" y="530" width="68" height="175" rx="32" fill={fill} stroke={stroke} strokeWidth={sw} />
      {/* Pierna inferior izquierda */}
      <rect x="130" y="700" width="54" height="162" rx="25" fill={fill} stroke={stroke} strokeWidth={sw} />
      {/* Pie izquierdo */}
      <ellipse cx="157" cy="877" rx="44" ry="20" fill={fill} stroke={stroke} strokeWidth={sw} />
      {/* Muslo derecho */}
      <rect x="210" y="530" width="68" height="175" rx="32" fill={fill} stroke={stroke} strokeWidth={sw} />
      {/* Pierna inferior derecha */}
      <rect x="216" y="700" width="54" height="162" rx="25" fill={fill} stroke={stroke} strokeWidth={sw} />
      {/* Pie derecho */}
      <ellipse cx="243" cy="877" rx="44" ry="20" fill={fill} stroke={stroke} strokeWidth={sw} />
      {/* Detalles faciales mínimos */}
      <ellipse cx="183" cy="68" rx="7" ry="9" fill="rgba(0,0,0,0.08)" />
      <ellipse cx="217" cy="68" rx="7" ry="9" fill="rgba(0,0,0,0.08)" />
      <path d="M188 95 Q200 106 212 95" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  )
}

// ──────────────────────────────────────────────────────────────
// CAPA MUSCULAR
// ──────────────────────────────────────────────────────────────
function MuscleLayer() {
  const m  = (opacity = 0.82) => `rgba(192,57,43,${opacity})`
  const ms = (opacity = 0.9)  => `rgba(160,40,28,${opacity})`
  return (
    <g>
      {/* Trapecio (porciones superiores, visibles de frente) */}
      <path
        d="M170 186 Q200 176 230 186 Q265 190 298 204 Q248 196 200 193 Q152 196 102 204 Z"
        fill={m(0.7)} stroke={ms(0.85)} strokeWidth="1.5"
      />
      {/* Deltoides izquierdo */}
      <path d="M102 200 Q82 214 78 234 Q83 252 97 262 Q108 242 116 222 Z"
        fill={m()} stroke={ms()} strokeWidth="1.5" />
      {/* Deltoides derecho */}
      <path d="M298 200 Q318 214 322 234 Q317 252 303 262 Q292 242 284 222 Z"
        fill={m()} stroke={ms()} strokeWidth="1.5" />
      {/* Pectoral mayor izquierdo */}
      <path d="M168 206 Q126 218 110 244 Q106 268 118 280 Q140 270 162 257 Q170 240 168 206 Z"
        fill={m(0.76)} stroke={ms()} strokeWidth="1.5" />
      {/* Pectoral mayor derecho */}
      <path d="M232 206 Q274 218 290 244 Q294 268 282 280 Q260 270 238 257 Q230 240 232 206 Z"
        fill={m(0.76)} stroke={ms()} strokeWidth="1.5" />
      {/* Serrato anterior izquierdo */}
      <path d="M108 268 L112 284 L108 298 L105 282 Z" fill={m(0.6)} />
      <path d="M108 298 L112 316 L108 330 L105 314 Z" fill={m(0.55)} />
      {/* Serrato anterior derecho */}
      <path d="M292 268 L288 284 L292 298 L295 282 Z" fill={m(0.6)} />
      <path d="M292 298 L288 316 L292 330 L295 314 Z" fill={m(0.55)} />
      {/* Bíceps braquial izquierdo */}
      <rect x="87" y="232" width="24" height="140" rx="12"
        fill={m()} stroke={ms()} strokeWidth="1.5" transform="rotate(8 99 232)" />
      {/* Braquial anterior izquierdo (debajo del bíceps) */}
      <rect x="87" y="338" width="22" height="52" rx="10"
        fill={m(0.65)} transform="rotate(8 98 338)" />
      {/* Bíceps derecho */}
      <rect x="289" y="232" width="24" height="140" rx="12"
        fill={m()} stroke={ms()} strokeWidth="1.5" transform="rotate(-8 301 232)" />
      <rect x="291" y="338" width="22" height="52" rx="10"
        fill={m(0.65)} transform="rotate(-8 302 338)" />
      {/* Recto abdominal + intersecciones tendinosas */}
      <rect x="178" y="288" width="44" height="145" rx="8"
        fill={m(0.70)} stroke={ms()} strokeWidth="1.5" />
      <line x1="178" y1="320" x2="222" y2="320" stroke={ms(0.65)} strokeWidth="1.5" />
      <line x1="178" y1="354" x2="222" y2="354" stroke={ms(0.65)} strokeWidth="1.5" />
      <line x1="178" y1="388" x2="222" y2="388" stroke={ms(0.65)} strokeWidth="1.5" />
      {/* Línea alba (centro) */}
      <line x1="200" y1="288" x2="200" y2="433" stroke={ms(0.5)} strokeWidth="1" />
      {/* Oblicuo externo izquierdo */}
      <path d="M138 286 Q122 335 128 395 Q137 398 147 388 Q148 340 158 298 Z"
        fill={m(0.62)} stroke={ms(0.75)} strokeWidth="1.5" />
      {/* Oblicuo externo derecho */}
      <path d="M262 286 Q278 335 272 395 Q263 398 253 388 Q252 340 242 298 Z"
        fill={m(0.62)} stroke={ms(0.75)} strokeWidth="1.5" />
      {/* Cuádriceps izquierdo (con separación de 4 cabezas) */}
      <rect x="124" y="532" width="62" height="172" rx="28"
        fill={m(0.76)} stroke={ms()} strokeWidth="1.5" />
      <line x1="146" y1="536" x2="142" y2="700" stroke={ms(0.4)} strokeWidth="1" />
      <line x1="160" y1="533" x2="157" y2="703" stroke={ms(0.4)} strokeWidth="1" />
      <line x1="174" y1="536" x2="171" y2="700" stroke={ms(0.4)} strokeWidth="1" />
      {/* Cuádriceps derecho */}
      <rect x="214" y="532" width="62" height="172" rx="28"
        fill={m(0.76)} stroke={ms()} strokeWidth="1.5" />
      <line x1="236" y1="536" x2="232" y2="700" stroke={ms(0.4)} strokeWidth="1" />
      <line x1="250" y1="533" x2="247" y2="703" stroke={ms(0.4)} strokeWidth="1" />
      <line x1="264" y1="536" x2="261" y2="700" stroke={ms(0.4)} strokeWidth="1" />
      {/* Tibial anterior izquierdo */}
      <rect x="134" y="706" width="22" height="148" rx="10"
        fill={m(0.72)} stroke={ms()} strokeWidth="1.5" />
      {/* Tibial anterior derecho */}
      <rect x="244" y="706" width="22" height="148" rx="10"
        fill={m(0.72)} stroke={ms()} strokeWidth="1.5" />
      {/* Gastrocnemio izquierdo (visible desde frente en porción distal) */}
      <rect x="150" y="706" width="20" height="148" rx="10"
        fill="rgba(155,35,20,0.65)" stroke={ms(0.75)} strokeWidth="1.5" />
      {/* Gastrocnemio derecho */}
      <rect x="230" y="706" width="20" height="148" rx="10"
        fill="rgba(155,35,20,0.65)" stroke={ms(0.75)} strokeWidth="1.5" />
    </g>
  )
}

// ──────────────────────────────────────────────────────────────
// CAPA ESQUELÉTICA
// ──────────────────────────────────────────────────────────────
function SkeletonLayer() {
  const bf = '#e8dcc8'   // bone fill
  const bs = '#b8a070'   // bone stroke
  const bc = '#d4b890'   // lighter bone for smaller structures
  return (
    <g>
      {/* Cráneo */}
      <ellipse cx="200" cy="70" rx="57" ry="60" fill={bf} stroke={bs} strokeWidth="2" />
      {/* Calvaria (sutura sagital) */}
      <line x1="200" y1="15" x2="200" y2="70" stroke={bs} strokeWidth="1" strokeDasharray="3,3" />
      {/* Mandíbula */}
      <path d="M153 118 Q200 148 247 118" fill="none" stroke={bs} strokeWidth="3" strokeLinecap="round" />
      {/* Órbitas */}
      <ellipse cx="183" cy="68" rx="12" ry="10" fill="rgba(0,0,0,0.12)" stroke={bs} strokeWidth="1" />
      <ellipse cx="217" cy="68" rx="12" ry="10" fill="rgba(0,0,0,0.12)" stroke={bs} strokeWidth="1" />
      {/* Vértebras cervicales (cuello) */}
      <rect x="188" y="144" width="24" height="44" rx="5" fill={bf} stroke={bs} strokeWidth="1.5" />
      <line x1="188" y1="158" x2="212" y2="158" stroke={bs} strokeWidth="0.8" />
      <line x1="188" y1="172" x2="212" y2="172" stroke={bs} strokeWidth="0.8" />
      {/* Clavícula izquierda */}
      <path d="M186 196 Q150 188 112 200" fill="none" stroke={bc} strokeWidth="6" strokeLinecap="round" />
      {/* Clavícula derecha */}
      <path d="M214 196 Q250 188 288 200" fill="none" stroke={bc} strokeWidth="6" strokeLinecap="round" />
      {/* Esternón (manubrio + cuerpo + apéndice) */}
      <rect x="190" y="196" width="20" height="132" rx="7" fill={bf} stroke={bs} strokeWidth="1.5" />
      {/* Articulación condroesternal (líneas) */}
      <line x1="190" y1="218" x2="210" y2="218" stroke={bs} strokeWidth="0.8" />
      <line x1="190" y1="236" x2="210" y2="236" stroke={bs} strokeWidth="0.8" />
      <line x1="190" y1="254" x2="210" y2="254" stroke={bs} strokeWidth="0.8" />
      {/* Columna torácica (detrás del esternón) */}
      <rect x="190" y="192" width="20" height="200" rx="5" fill={bf} stroke={bs} strokeWidth="1.5" />
      {/* Segmentos vertebrales */}
      {[212, 228, 244, 260, 276, 292, 308, 324, 340, 356, 372].map((y, i) => (
        <line key={i} x1="190" y1={y} x2="210" y2={y} stroke={bs} strokeWidth="0.7" />
      ))}
      {/* Columna lumbar */}
      <rect x="190" y="392" width="20" height="82" rx="5" fill={bf} stroke={bs} strokeWidth="1.5" />
      <line x1="190" y1="410" x2="210" y2="410" stroke={bs} strokeWidth="0.8" />
      <line x1="190" y1="428" x2="210" y2="428" stroke={bs} strokeWidth="0.8" />
      <line x1="190" y1="446" x2="210" y2="446" stroke={bs} strokeWidth="0.8" />
      {/* Costillas izquierdas (5 pares visibles anteriores) */}
      {[210, 228, 246, 264, 282].map((y, i) => (
        <path key={`ribL${i}`}
          d={`M188 ${y} Q${155 - i * 2} ${y - 3} ${118 - i * 2} ${y + 15}`}
          fill="none" stroke={bc} strokeWidth="4" strokeLinecap="round" />
      ))}
      {/* Costillas derechas (espejo) */}
      {[210, 228, 246, 264, 282].map((y, i) => (
        <path key={`ribR${i}`}
          d={`M212 ${y} Q${245 + i * 2} ${y - 3} ${282 + i * 2} ${y + 15}`}
          fill="none" stroke={bc} strokeWidth="4" strokeLinecap="round" />
      ))}
      {/* Sacro */}
      <path d="M188 474 Q200 468 212 474 L215 510 Q200 516 185 510 Z"
        fill={bf} stroke={bs} strokeWidth="1.5" />
      {/* Pelvis (crestas ilíacas) */}
      <path d="M108 455 Q145 438 188 446 Q200 442 212 446 Q255 438 292 455"
        fill="none" stroke={bc} strokeWidth="8" strokeLinecap="round" />
      {/* Líneas ilíacas inferiores */}
      <path d="M108 455 Q134 490 156 522" fill="none" stroke={bc} strokeWidth="7" strokeLinecap="round" />
      <path d="M292 455 Q266 490 244 522" fill="none" stroke={bc} strokeWidth="7" strokeLinecap="round" />
      {/* Cabeza del fémur izquierdo */}
      <ellipse cx="156" cy="526" rx="18" ry="18" fill={bf} stroke={bs} strokeWidth="2" />
      {/* Cabeza del fémur derecho */}
      <ellipse cx="244" cy="526" rx="18" ry="18" fill={bf} stroke={bs} strokeWidth="2" />
      {/* Húmero izquierdo */}
      <rect x="88" y="202" width="22" height="138" rx="11"
        fill={bf} stroke={bs} strokeWidth="2" transform="rotate(8 99 202)" />
      {/* Húmero derecho */}
      <rect x="290" y="202" width="22" height="138" rx="11"
        fill={bf} stroke={bs} strokeWidth="2" transform="rotate(-8 301 202)" />
      {/* Radio izquierdo */}
      <rect x="72" y="346" width="14" height="126" rx="7"
        fill={bf} stroke={bs} strokeWidth="1.5" transform="rotate(5 79 346)" />
      {/* Cúbito izquierdo */}
      <rect x="88" y="344" width="12" height="122" rx="6"
        fill={bf} stroke={bs} strokeWidth="1.5" transform="rotate(4 94 344)" />
      {/* Radio derecho */}
      <rect x="314" y="346" width="14" height="126" rx="7"
        fill={bf} stroke={bs} strokeWidth="1.5" transform="rotate(-5 321 346)" />
      {/* Cúbito derecho */}
      <rect x="300" y="344" width="12" height="122" rx="6"
        fill={bf} stroke={bs} strokeWidth="1.5" transform="rotate(-4 306 344)" />
      {/* Fémur izquierdo */}
      <rect x="140" y="528" width="32" height="174" rx="16" fill={bf} stroke={bs} strokeWidth="2" />
      {/* Fémur derecho */}
      <rect x="228" y="528" width="32" height="174" rx="16" fill={bf} stroke={bs} strokeWidth="2" />
      {/* Rótula izquierda */}
      <ellipse cx="156" cy="702" rx="14" ry="14" fill={bf} stroke={bs} strokeWidth="2" />
      {/* Rótula derecha */}
      <ellipse cx="244" cy="702" rx="14" ry="14" fill={bf} stroke={bs} strokeWidth="2" />
      {/* Tibia izquierda */}
      <rect x="142" y="716" width="24" height="152" rx="10" fill={bf} stroke={bs} strokeWidth="2" />
      {/* Peroné izquierdo */}
      <rect x="168" y="720" width="12" height="145" rx="6" fill={bf} stroke={bs} strokeWidth="1.5" />
      {/* Tibia derecha */}
      <rect x="234" y="716" width="24" height="152" rx="10" fill={bf} stroke={bs} strokeWidth="2" />
      {/* Peroné derecho */}
      <rect x="220" y="720" width="12" height="145" rx="6" fill={bf} stroke={bs} strokeWidth="1.5" />
      {/* Tarsos (tobillo izquierdo) */}
      <ellipse cx="157" cy="876" rx="26" ry="16" fill={bf} stroke={bs} strokeWidth="1.5" />
      {/* Tarsos (tobillo derecho) */}
      <ellipse cx="243" cy="876" rx="26" ry="16" fill={bf} stroke={bs} strokeWidth="1.5" />
    </g>
  )
}

// ──────────────────────────────────────────────────────────────
// Overlay de hotspots (capa transparente encima)
// ──────────────────────────────────────────────────────────────
interface HotspotOverlayProps {
  visible: Hotspot[]
  selectedId: string | null
  hoveredId: string | null
  onSelect: (id: string) => void
  onHover: (id: string | null) => void
}

function HotspotOverlay({ visible, selectedId, hoveredId, onSelect, onHover }: HotspotOverlayProps) {
  return (
    <g>
      {visible.map(h => {
        const isSelected = selectedId === h.id
        const isHovered  = hoveredId  === h.id
        return (
          <ellipse
            key={h.id}
            cx={h.cx} cy={h.cy} rx={h.rx} ry={h.ry}
            fill={isSelected
              ? 'rgba(79,195,247,0.28)'
              : isHovered
                ? 'rgba(255,255,255,0.18)'
                : 'transparent'}
            stroke={isSelected ? '#4fc3f7' : isHovered ? 'rgba(255,255,255,0.5)' : 'transparent'}
            strokeWidth={isSelected ? 2 : 1.5}
            style={{ cursor: 'pointer', transition: 'fill 0.15s, stroke 0.15s' }}
            onClick={() => onSelect(h.id)}
            onMouseEnter={() => onHover(h.id)}
            onMouseLeave={() => onHover(null)}
          />
        )
      })}
    </g>
  )
}

// ──────────────────────────────────────────────────────────────
// Panel de información
// ──────────────────────────────────────────────────────────────
const panelDesktop = {
  hidden:  { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 280, damping: 28 } },
  exit:    { x: '100%', opacity: 0, transition: { duration: 0.22 } },
}
const panelMobile = {
  hidden:  { y: '100%', opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 280, damping: 28 } },
  exit:    { y: '100%', opacity: 0, transition: { duration: 0.22 } },
}

function InfoPanelContent({ hotspot, onClose }: { hotspot: Hotspot; onClose: () => void }) {
  const sc    = SYSTEM_COLORS[hotspot.sistema]
  const icon  = SYSTEM_ICON[hotspot.sistema]
  const label = HOTSPOT_SYSTEM_LABELS[hotspot.sistema]
  const medlexSistema = MEDLEX_MAP[hotspot.id]

  const panelStyle: React.CSSProperties = {
    background:    'rgba(15,15,20,0.92)',
    borderLeft:    '1px solid rgba(255,255,255,0.08)',
    fontFamily:    'IBM Plex Mono, monospace',
  }

  return (
    <div className="flex flex-col h-full" style={panelStyle}>
      {/* Encabezado */}
      <div className="px-5 py-4 flex-shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2"
              style={{ background: sc.badge, color: sc.accent, border: `1px solid ${sc.border}` }}>
              {icon}
              {label}
            </span>
            <h2 className="text-base font-bold leading-tight" style={{ color: '#e0e0e0' }}>
              {hotspot.nombre_es}
            </h2>
            <p className="text-xs italic mt-0.5" style={{ color: '#666' }}>
              {hotspot.nombre_lat}
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#888' }}
          >
            <X weight="bold" className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Cuerpo */}
      <div className="overflow-y-auto flex-1 px-5 py-5 space-y-5">
        {/* Descripción */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: sc.accent }}>
            Descripción
          </p>
          <p className="text-sm leading-relaxed" style={{ color: '#c0c0c0' }}>
            {hotspot.descripcion}
          </p>
        </div>

        {/* Funciones */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: sc.accent }}>
            Funciones clave
          </p>
          <ul className="space-y-2.5">
            {hotspot.funciones.map((fn, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: '#b8b8b8' }}>
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[7px]"
                  style={{ background: sc.accent }} />
                <span className="leading-relaxed">{fn}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cross-link a terminología */}
        {medlexSistema && (
          <Link
            to={`/terminologia?sistema=${medlexSistema}`}
            onClick={onClose}
            className="flex items-center gap-3 p-3 rounded-2xl transition-all group"
            style={{
              background: 'rgba(79,195,247,0.07)',
              border: '1px solid rgba(79,195,247,0.2)',
            }}
          >
            <BookOpenText weight="fill" className="w-5 h-5 flex-shrink-0" style={{ color: '#4fc3f7' }} />
            <div className="flex-1">
              <p className="text-xs font-bold" style={{ color: '#4fc3f7' }}>Ver terminología relacionada</p>
              <p className="text-[10px] mt-0.5" style={{ color: '#4fc3f7', opacity: 0.7 }}>
                Prefijos, sufijos y raíces · MedLex
              </p>
            </div>
            <ArrowRight weight="bold" className="w-4 h-4 flex-shrink-0" style={{ color: '#4fc3f7', opacity: 0.6 }} />
          </Link>
        )}
      </div>
    </div>
  )
}

function InfoPanel({ hotspot, onClose }: { hotspot: Hotspot | null; onClose: () => void }) {
  return (
    <>
      {/* Desktop */}
      <AnimatePresence>
        {hotspot && (
          <motion.aside
            key="desktop-panel"
            variants={panelDesktop}
            initial="hidden" animate="visible" exit="exit"
            className="hidden md:flex flex-col w-80 flex-shrink-0 h-full overflow-hidden"
          >
            <InfoPanelContent hotspot={hotspot} onClose={onClose} />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Mobile bottom sheet */}
      <AnimatePresence>
        {hotspot && (
          <>
            <motion.div
              key="mobile-overlay"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: 'rgba(0,0,0,0.5)' }}
              onClick={onClose}
            />
            <motion.div
              key="mobile-panel"
              variants={panelMobile}
              initial="hidden" animate="visible" exit="exit"
              className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex flex-col"
              style={{
                maxHeight: '62dvh',
                background: 'rgba(13,13,20,0.97)',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '20px 20px 0 0',
              }}
            >
              <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
                <div className="w-10 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }} />
              </div>
              <InfoPanelContent hotspot={hotspot} onClose={onClose} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

// ──────────────────────────────────────────────────────────────
// Componente principal exportado
// ──────────────────────────────────────────────────────────────
interface AnatomyViewer2DProps {
  initialSystemFilter?: string
}

export function AnatomyViewer2D({ initialSystemFilter }: AnatomyViewer2DProps) {
  const [layers,     setLayers]     = useState<LayersState>(DEFAULT_LAYERS)
  const [view,       setView]       = useState<View>('anterior')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [hoveredId,  setHoveredId]  = useState<string | null>(null)
  const [xray,       setXray]       = useState(false)
  const svgRef = useRef<SVGSVGElement>(null)

  const selectedHotspot = selectedId ? (hotspotById[selectedId] ?? null) : null

  // Hotspots visibles según vista activa
  const visibleHotspots = hotspots.filter(h => h.vistas.includes(view))

  const handleLayerToggle = useCallback((key: LayerKey) => {
    setLayers(prev => ({ ...prev, [key]: { ...prev[key], visible: !prev[key].visible } }))
  }, [])

  const handleOpacity = useCallback((key: LayerKey, val: number) => {
    setLayers(prev => ({ ...prev, [key]: { ...prev[key], opacity: val } }))
  }, [])

  const handleReset = useCallback(() => {
    setLayers(DEFAULT_LAYERS)
    setXray(false)
    setSelectedId(null)
  }, [])

  const handleXray = useCallback(() => {
    setXray(x => {
      const next = !x
      setLayers(next ? XRAY_LAYERS : DEFAULT_LAYERS)
      return next
    })
  }, [])

  const handleScreenshot = useCallback(() => {
    const svg = svgRef.current
    if (!svg) return
    const xml   = new XMLSerializer().serializeToString(svg)
    const blob  = new Blob([xml], { type: 'image/svg+xml' })
    const url   = URL.createObjectURL(blob)
    const a     = document.createElement('a')
    a.href      = url
    a.download  = `medcore-anatomia-${Date.now()}.svg`
    a.click()
    URL.revokeObjectURL(url)
  }, [])

  const glassBg: React.CSSProperties = {
    background: 'rgba(15,15,20,0.88)',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    border: '1px solid rgba(255,255,255,0.07)',
    fontFamily: 'IBM Plex Mono, monospace',
  }

  const btnBase: React.CSSProperties = {
    ...glassBg,
    color: '#aaa',
    padding: '7px 14px',
    borderRadius: 10,
    fontSize: 11,
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    transition: 'all 0.15s',
    whiteSpace: 'nowrap' as const,
  }

  return (
    <div className="flex flex-col" style={{ background: '#0d0d0d', height: '100%' }}>

      {/* ── Barra superior ───────────────────────────────────── */}
      <div className="flex items-center gap-3 px-4 py-2.5 flex-shrink-0 overflow-x-auto"
        style={{ ...glassBg, borderBottom: '1px solid rgba(255,255,255,0.06)', borderRadius: 0, backdropFilter: 'blur(12px)' }}>
        <Link to="/" className="flex items-center gap-1.5 transition-colors flex-shrink-0"
          style={{ color: '#888', fontSize: 13 }}>
          <ArrowLeft weight="bold" className="w-4 h-4" />
          <span className="hidden sm:inline">MedCore</span>
        </Link>
        <span style={{ color: '#333', fontSize: 12 }}>/</span>
        <span style={{ color: '#4fc3f7', fontSize: 12, fontWeight: 600 }}>Anatomía 2D</span>

        <div className="flex-1" />

        {/* Vista anterior / posterior */}
        <div className="flex items-center gap-1 flex-shrink-0">
          {(['anterior', 'posterior'] as View[]).map(v => (
            <button key={v} onClick={() => { setView(v); setSelectedId(null) }}
              style={{
                ...btnBase,
                color: view === v ? '#4fc3f7' : '#666',
                background: view === v ? 'rgba(79,195,247,0.12)' : 'rgba(255,255,255,0.04)',
                border: view === v ? '1px solid rgba(79,195,247,0.3)' : '1px solid rgba(255,255,255,0.06)',
              }}>
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* ── Área principal ───────────────────────────────────── */}
      <div className="flex flex-1 overflow-hidden">

        {/* ── Panel de capas (izquierda) ──────────────────── */}
        <div className="hidden md:flex flex-col gap-3 p-4 w-[188px] flex-shrink-0 overflow-y-auto"
          style={{ ...glassBg, borderRight: '1px solid rgba(255,255,255,0.06)', borderRadius: 0 }}>

          <p className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: '#555' }}>
            Capas
          </p>

          {LAYER_META.map(layer => {
            const state = layers[layer.id]
            const isTransparent = state.opacity < 0.4
            return (
              <div key={layer.id} className="space-y-2">
                <button
                  onClick={() => handleLayerToggle(layer.id)}
                  className="flex items-center gap-2 w-full transition-all"
                  style={{
                    padding: '7px 10px',
                    borderRadius: 10,
                    background: state.visible ? 'rgba(255,255,255,0.06)' : 'transparent',
                    border: state.visible
                      ? `1px solid rgba(${layer.id === 'skin' ? '245,197,163' : layer.id === 'muscle' ? '192,57,43' : '232,220,200'},0.35)`
                      : '1px solid rgba(255,255,255,0.06)',
                    color: state.visible ? '#ddd' : '#444',
                  }}
                >
                  {state.visible
                    ? <Eye weight="fill" className="w-3.5 h-3.5 flex-shrink-0" style={{ color: layer.color }} />
                    : <EyeSlash weight="regular" className="w-3.5 h-3.5 flex-shrink-0" />}
                  <span className="text-[11px] font-semibold flex-1 text-left">{layer.label}</span>
                  {isTransparent && (
                    <span className="text-[9px]" style={{ color: '#555' }}>trans.</span>
                  )}
                </button>

                {state.visible && (
                  <input
                    type="range" min={0.1} max={1} step={0.05}
                    value={state.opacity}
                    onChange={e => handleOpacity(layer.id, Number(e.target.value))}
                    className="w-full h-1 rounded-full appearance-none cursor-pointer"
                    style={{ accentColor: layer.color }}
                  />
                )}
              </div>
            )
          })}

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 8, marginTop: 4 }}>
            <p className="text-[9px] font-bold uppercase tracking-widest mb-2" style={{ color: '#555' }}>
              Partes ({visibleHotspots.length})
            </p>
            <div className="space-y-0.5">
              {visibleHotspots.map(h => (
                <button
                  key={h.id}
                  onClick={() => setSelectedId(h.id === selectedId ? null : h.id)}
                  className="w-full text-left text-[10px] px-2 py-1 rounded-lg transition-all"
                  style={{
                    color: selectedId === h.id ? '#4fc3f7' : '#666',
                    background: selectedId === h.id ? 'rgba(79,195,247,0.1)' : 'transparent',
                  }}
                >
                  {h.nombre_es}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Canvas SVG ──────────────────────────────────── */}
        <div className="flex-1 relative overflow-hidden flex items-center justify-center"
          onClick={(e) => {
            if ((e.target as SVGElement).tagName !== 'ellipse') setSelectedId(null)
          }}>

          <svg
            ref={svgRef}
            viewBox="0 0 400 900"
            className="h-full"
            style={{
              maxHeight: '100%',
              maxWidth: '100%',
              width: 'auto',
              filter: 'drop-shadow(0 4px 32px rgba(0,0,0,0.7))',
              userSelect: 'none',
            }}
          >
            {/* Capa piel */}
            <g opacity={layers.skin.opacity}
              style={{ display: layers.skin.visible ? undefined : 'none', transition: 'opacity 0.3s' }}>
              <SkinLayer />
            </g>
            {/* Capa muscular */}
            <g opacity={layers.muscle.opacity}
              style={{ display: layers.muscle.visible ? undefined : 'none', transition: 'opacity 0.3s' }}>
              <MuscleLayer />
            </g>
            {/* Capa esquelética */}
            <g opacity={layers.skeleton.opacity}
              style={{ display: layers.skeleton.visible ? undefined : 'none', transition: 'opacity 0.3s' }}>
              <SkeletonLayer />
            </g>
            {/* Overlay de hotspots */}
            <HotspotOverlay
              visible={visibleHotspots}
              selectedId={selectedId}
              hoveredId={hoveredId}
              onSelect={id => setSelectedId(prev => prev === id ? null : id)}
              onHover={setHoveredId}
            />
          </svg>

          {/* Etiqueta de vista posterior placeholder */}
          {view === 'posterior' && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[11px] px-3 py-1.5 rounded-full"
              style={{ ...glassBg, color: '#4fc3f7' }}>
              Vista posterior — girar 180°
            </div>
          )}

          {/* Tooltip de hover */}
          <AnimatePresence>
            {hoveredId && !selectedId && (
              <motion.div
                key="tooltip"
                initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.12 }}
                className="absolute bottom-20 left-1/2 -translate-x-1/2 pointer-events-none px-3 py-1.5 rounded-xl text-[11px]"
                style={{ ...glassBg, color: '#e0e0e0', zIndex: 10 }}
              >
                <span className="font-bold">{hotspotById[hoveredId]?.nombre_es}</span>
                <span className="ml-2 italic" style={{ color: '#666' }}>{hotspotById[hoveredId]?.nombre_lat}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Barra de controles inferior */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-2xl"
            style={{ ...glassBg, zIndex: 10 }}>
            <button onClick={handleReset} style={btnBase} title="Restablecer vista">
              <ArrowCounterClockwise weight="bold" className="w-4 h-4" />
              <span className="hidden sm:inline">Restablecer</span>
            </button>
            <button onClick={handleXray} title="Modo Rx"
              style={{ ...btnBase, color: xray ? '#4fc3f7' : '#aaa',
                background: xray ? 'rgba(79,195,247,0.12)' : 'rgba(255,255,255,0.04)',
                border: xray ? '1px solid rgba(79,195,247,0.3)' : '1px solid rgba(255,255,255,0.07)',
              }}>
              <span className="text-[10px]">Rx</span>
              <span className="hidden sm:inline" style={{ fontSize: 10 }}>X-Ray</span>
            </button>
            <button onClick={() => document.documentElement.requestFullscreen?.()}
              style={btnBase} title="Pantalla completa">
              <ArrowsOut weight="bold" className="w-4 h-4" />
            </button>
            <button onClick={handleScreenshot} style={btnBase} title="Capturar SVG">
              <Camera weight="bold" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Panel de información */}
        <InfoPanel hotspot={selectedHotspot} onClose={() => setSelectedId(null)} />
      </div>

      {/* Mobile: lista de partes (barra inferior desplazable) */}
      <div className="md:hidden flex-shrink-0 overflow-x-auto"
        style={{ ...glassBg, borderTop: '1px solid rgba(255,255,255,0.06)', borderRadius: 0 }}>
        <div className="flex gap-1.5 px-4 py-2">
          {visibleHotspots.map(h => (
            <button
              key={h.id}
              onClick={() => setSelectedId(h.id === selectedId ? null : h.id)}
              className="flex-shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-full transition-all"
              style={{
                background: selectedId === h.id ? 'rgba(79,195,247,0.18)' : 'rgba(255,255,255,0.06)',
                border: selectedId === h.id ? '1px solid rgba(79,195,247,0.4)' : '1px solid rgba(255,255,255,0.08)',
                color: selectedId === h.id ? '#4fc3f7' : '#888',
              }}
            >
              {h.nombre_es}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
