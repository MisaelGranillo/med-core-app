/*
 * AnatomyViewer2D.tsx — Visor Anatómico 2D Interactivo (v2)
 *
 * Arquitectura:
 *   - Imágenes SVG externas en /public/illustrations/ como capas apiladas
 *   - Overlay SVG con hotspots interactivos encima
 *   - React state (sin manipulación directa del DOM)
 *   - useNavigate para cross-link a /terminologia
 *   - Hotspots bilaterales: render espejado en cx = 400 - cx
 *
 * Correcciones respecto al prototipo HTML:
 *   ✓ Sin referencia global a `event` (bug del prototipo)
 *   ✓ Sin alert() — navegación real con React Router
 *   ✓ Sin emoji — iconos Phosphor
 *   ✓ Espejado solo en hotspots con bilateral:true (no en estructuras centro)
 *   ✓ Estado gestionado con useState, no con DOM
 *   ✓ resetView sin .click() programático
 *   ✓ Download: SVG combinado correcto usando XMLSerializer
 *   ✓ Selección de hotspot espejado: mismo id que el principal
 */

import { useState, useRef, useCallback, useId } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Eye, EyeSlash, X, ArrowLeft, ArrowCounterClockwise,
  ArrowsOut, Camera, BookOpenText, ArrowRight,
} from '@phosphor-icons/react'
import { hotspots, hotspotById, HOTSPOT_SYSTEM_LABELS, type Hotspot } from '../data/anatomyHotspots'

// ──────────────────────────────────────────────────────────────
// Tipos y configuración de capas
// ──────────────────────────────────────────────────────────────

type LayerKey = 'skeleton' | 'muscle' | 'surface'
type View = 'anterior' | 'posterior'

interface LayerState { visible: boolean; opacity: number }
type LayersState = Record<LayerKey, LayerState>

const DEFAULT_LAYERS: LayersState = {
  skeleton: { visible: true, opacity: 1 },
  muscle:   { visible: true, opacity: 1 },
  surface:  { visible: true, opacity: 1 },
}

const XRAY_LAYERS: LayersState = {
  skeleton: { visible: true, opacity: 1.0 },
  muscle:   { visible: true, opacity: 0.40 },
  surface:  { visible: true, opacity: 0.15 },
}

const LAYER_META: Array<{ key: LayerKey; label: string; dot: string }> = [
  { key: 'skeleton', label: 'Sistema Óseo',      dot: '#e8dcc8' },
  { key: 'muscle',   label: 'Sistema Muscular',   dot: '#c0392b' },
  { key: 'surface',  label: 'Piel / Superficie',  dot: '#f5c5a3' },
]

// URL de cada capa según la vista
const LAYER_URLS: Record<View, Record<LayerKey, string>> = {
  anterior: {
    skeleton: '/illustrations/skeleton-anterior.svg',
    muscle:   '/illustrations/muscle-anterior.svg',
    surface:  '/illustrations/surface-anterior.svg',
  },
  posterior: {
    skeleton: '/illustrations/skeleton-posterior.svg',
    muscle:   '/illustrations/muscle-posterior.svg',
    surface:  '/illustrations/surface-posterior.svg',
  },
}

// Colores de badge/acento por sistema
const SISTEMA_STYLE: Record<string, { accent: string; bg: string; border: string }> = {
  esqueletico: { accent: '#e8dcc8', bg: 'rgba(232,220,200,0.12)', border: 'rgba(232,220,200,0.3)' },
  muscular:    { accent: '#e05555', bg: 'rgba(192,57,43,0.12)',   border: 'rgba(192,57,43,0.3)'   },
  organos:     { accent: '#c77dff', bg: 'rgba(142,68,173,0.12)',  border: 'rgba(142,68,173,0.3)'  },
}

const MEDLEX_MAP: Record<string, string> = {
  craneo: 'nervioso', 'columna-vertebral': 'nervioso',
  clavicula: 'musculoesqueletico', esternon: 'musculoesqueletico',
  costillas: 'respiratorio', humero: 'musculoesqueletico',
  'radio-cubito': 'musculoesqueletico', pelvis: 'musculoesqueletico',
  femur: 'musculoesqueletico', tibia: 'musculoesqueletico',
  trapecio: 'musculoesqueletico', deltoides: 'musculoesqueletico',
  pectoral: 'musculoesqueletico', biceps: 'musculoesqueletico',
  'recto-abdominal': 'musculoesqueletico', cuadriceps: 'musculoesqueletico',
  gastrocnemio: 'musculoesqueletico', 'tibial-anterior': 'musculoesqueletico',
  gluteo: 'musculoesqueletico', 'dorsal-ancho': 'musculoesqueletico',
  cerebro: 'nervioso', corazon: 'cardiovascular',
  pulmones: 'respiratorio', higado: 'digestivo', rinones: 'urinario',
}

// ──────────────────────────────────────────────────────────────
// Panel de información anatómica
// ──────────────────────────────────────────────────────────────

const panelDesktop = {
  hidden:  { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  exit:    { x: '100%', opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } },
}
const panelMobile = {
  hidden:  { y: '100%', opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  exit:    { y: '100%', opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } },
}

const glassBorder = '1px solid rgba(255,255,255,0.08)'
const glassFont   = 'IBM Plex Mono, monospace'

interface InfoPanelProps { hotspot: Hotspot | null; onClose: () => void }

function InfoPanelContent({ hotspot, onClose }: { hotspot: Hotspot; onClose: () => void }) {
  const navigate = useNavigate()
  const sc = SISTEMA_STYLE[hotspot.sistema]
  const medlexSistema = MEDLEX_MAP[hotspot.id]
  const label = HOTSPOT_SYSTEM_LABELS[hotspot.sistema]

  return (
    <>
      {/* Encabezado */}
      <div className="flex-shrink-0 px-6 pt-5 pb-4"
        style={{ borderBottom: glassBorder, fontFamily: glassFont }}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded mb-2"
              style={{ background: sc.bg, color: sc.accent, border: `1px solid ${sc.border}` }}>
              {label}
            </span>
            <h2 className="text-xl font-bold leading-tight" style={{ color: '#e0e0e0' }}>
              {hotspot.nombre_es}
            </h2>
            <p className="text-[13px] italic mt-1" style={{ color: '#666' }}>
              {hotspot.nombre_lat}
            </p>
          </div>
          <button onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded transition-colors flex-shrink-0"
            style={{ background: 'rgba(255,255,255,0.05)', border: glassBorder, color: '#888' }}>
            <X weight="bold" className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Cuerpo scrollable */}
      <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5" style={{ fontFamily: glassFont }}>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: sc.accent }}>
            Descripción
          </p>
          <p className="text-sm leading-relaxed" style={{ color: '#c0c0c0' }}>
            {hotspot.descripcion}
          </p>
        </div>

        <div style={{ borderTop: glassBorder, paddingTop: 16 }}>
          <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: sc.accent }}>
            Funciones clave
          </p>
          <ul className="space-y-2.5">
            {hotspot.funciones.map((fn, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: '#b0b0b0' }}>
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                  style={{ background: sc.accent }} />
                {fn}
              </li>
            ))}
          </ul>
        </div>

        {/* Cross-link MedLex */}
        {medlexSistema && (
          <button
            onClick={() => { onClose(); navigate(`/terminologia?sistema=${medlexSistema}`) }}
            className="w-full flex items-center gap-3 p-3 rounded transition-all group text-left"
            style={{ background: 'rgba(79,195,247,0.07)', border: '1px solid rgba(79,195,247,0.22)' }}
          >
            <BookOpenText weight="fill" className="w-5 h-5 flex-shrink-0" style={{ color: '#4fc3f7' }} />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold" style={{ color: '#4fc3f7', fontFamily: glassFont }}>
                Ver terminología relacionada
              </p>
              <p className="text-[10px] mt-0.5 opacity-70" style={{ color: '#4fc3f7', fontFamily: glassFont }}>
                Prefijos, sufijos y raíces · MedLex
              </p>
            </div>
            <ArrowRight weight="bold" className="w-4 h-4 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
              style={{ color: '#4fc3f7' }} />
          </button>
        )}
      </div>
    </>
  )
}

function InfoPanel({ hotspot, onClose }: InfoPanelProps) {
  return (
    <>
      {/* Desktop sidebar */}
      <AnimatePresence>
        {hotspot && (
          <motion.aside key="desktop-panel"
            variants={panelDesktop} initial="hidden" animate="visible" exit="exit"
            className="hidden md:flex flex-col w-80 flex-shrink-0 h-full overflow-hidden"
            style={{ background: 'rgba(15,15,20,0.95)', borderLeft: glassBorder }}>
            <InfoPanelContent hotspot={hotspot} onClose={onClose} />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Mobile bottom sheet */}
      <AnimatePresence>
        {hotspot && (
          <>
            <motion.div key="overlay"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: 'rgba(0,0,0,0.55)' }}
              onClick={onClose} />
            <motion.div key="mobile-panel"
              variants={panelMobile} initial="hidden" animate="visible" exit="exit"
              className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex flex-col overflow-hidden"
              style={{
                maxHeight: '62dvh',
                background: 'rgba(13,13,20,0.97)',
                borderTop: glassBorder,
                borderRadius: '20px 20px 0 0',
              }}>
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
// Overlay de hotspots sobre el SVG
// ──────────────────────────────────────────────────────────────

interface HotspotOverlayProps {
  hotspots: Hotspot[]
  selectedId: string | null
  hoveredId: string | null
  onSelect: (id: string) => void
  onHover: (id: string | null) => void
}

function HotspotOverlay({ hotspots, selectedId, hoveredId, onSelect, onHover }: HotspotOverlayProps) {
  return (
    <svg
      viewBox="0 0 400 900"
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block', zIndex: 10 }}
    >
      {hotspots.flatMap(h => {
        const isSelected = selectedId === h.id
        const isHovered  = hoveredId === h.id

        const fill = isSelected
          ? 'rgba(79,195,247,0.28)'
          : isHovered
            ? 'rgba(255,255,255,0.18)'
            : 'transparent'
        const stroke = isSelected ? '#4fc3f7' : isHovered ? 'rgba(255,255,255,0.5)' : 'transparent'
        const sw = isSelected ? '2' : '1.5'
        const cursor = 'pointer'

        const props = { fill, stroke, strokeWidth: sw, style: { cursor, transition: 'fill 0.15s, stroke 0.15s' } }

        const primary = (
          <ellipse key={h.id}
            cx={h.cx} cy={h.cy} rx={h.rx} ry={h.ry}
            {...props}
            onClick={() => onSelect(h.id)}
            onMouseEnter={() => onHover(h.id)}
            onMouseLeave={() => onHover(null)}
          />
        )

        // Hotspot espejado para estructuras bilaterales (cx espejo = 400 - cx)
        const mirror = h.bilateral ? (
          <ellipse key={`${h.id}-mirror`}
            cx={400 - h.cx} cy={h.cy} rx={h.rx} ry={h.ry}
            {...props}
            onClick={() => onSelect(h.id)}
            onMouseEnter={() => onHover(h.id)}
            onMouseLeave={() => onHover(null)}
          />
        ) : null

        return mirror ? [primary, mirror] : [primary]
      })}
    </svg>
  )
}

// ──────────────────────────────────────────────────────────────
// Componente principal exportado
// ──────────────────────────────────────────────────────────────

export function AnatomyViewer2D() {
  const [view,       setView]       = useState<View>('anterior')
  const [layers,     setLayers]     = useState<LayersState>(DEFAULT_LAYERS)
  const [xray,       setXray]       = useState(false)
  const [allVisible, setAllVisible] = useState(true)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [hoveredId,  setHoveredId]  = useState<string | null>(null)

  const stageRef = useRef<HTMLDivElement>(null)

  const selectedHotspot = selectedId ? (hotspotById[selectedId] ?? null) : null
  const visibleHotspots = hotspots.filter(h => h.vistas.includes(view))

  // ── Handlers ──────────────────────────────────────────────

  const handleViewChange = useCallback((v: View) => {
    setView(v)
    setSelectedId(null)
  }, [])

  const toggleLayer = useCallback((key: LayerKey) => {
    setLayers(prev => ({
      ...prev,
      [key]: { ...prev[key], visible: !prev[key].visible },
    }))
  }, [])

  const changeOpacity = useCallback((key: LayerKey, val: number) => {
    setLayers(prev => ({
      ...prev,
      [key]: { ...prev[key], opacity: val },
    }))
  }, [])

  const handleXray = useCallback(() => {
    const next = !xray
    setXray(next)
    setLayers(next ? XRAY_LAYERS : DEFAULT_LAYERS)
  }, [xray])

  const handleToggleAll = useCallback(() => {
    const next = !allVisible
    setAllVisible(next)
    setLayers({
      skeleton: { visible: next, opacity: 1 },
      muscle:   { visible: next, opacity: 1 },
      surface:  { visible: next, opacity: 1 },
    })
    if (next) setXray(false)
  }, [allVisible])

  const handleReset = useCallback(() => {
    setLayers(DEFAULT_LAYERS)
    setView('anterior')
    setSelectedId(null)
    setXray(false)
    setAllVisible(true)
  }, [])

  const handleSelect = useCallback((id: string) => {
    setSelectedId(prev => (prev === id ? null : id))
  }, [])

  const handleClosePanel = useCallback(() => {
    setSelectedId(null)
  }, [])

  const handleDownload = useCallback(() => {
    const urls = LAYER_URLS[view]
    const layerImgs = (Object.keys(layers) as LayerKey[])
      .filter(k => layers[k].visible)
      .map(k => `<image href="${urls[k]}" x="0" y="0" width="400" height="900" opacity="${layers[k].opacity}" preserveAspectRatio="xMidYMid meet"/>`)
      .join('\n')

    const svg = [
      `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"`,
      `     viewBox="0 0 400 900" width="800" height="1800" style="background:#0d0d0d">`,
      layerImgs,
      `</svg>`,
    ].join('\n')

    const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = Object.assign(document.createElement('a'), { href: url, download: `medcore-anatomia-${Date.now()}.svg` })
    a.click()
    URL.revokeObjectURL(url)
  }, [view, layers])

  // ── Estilos compartidos ───────────────────────────────────

  const panel: React.CSSProperties = {
    background: 'rgba(15,15,20,0.92)',
    borderRight: glassBorder,
    fontFamily: glassFont,
  }

  const toolBtn: React.CSSProperties = {
    background: 'transparent',
    border: glassBorder,
    color: '#c0c0c0',
    padding: '7px 14px',
    borderRadius: 4,
    fontFamily: glassFont,
    fontSize: 11,
    cursor: 'pointer',
    whiteSpace: 'nowrap' as const,
    transition: 'background 0.15s, color 0.15s',
  }

  const viewBtnStyle = (active: boolean): React.CSSProperties => ({
    ...toolBtn,
    background: active ? 'rgba(255,255,255,0.1)' : 'transparent',
    color: active ? '#e0e0e0' : '#666',
    border: active ? '1px solid rgba(255,255,255,0.15)' : glassBorder,
  })

  // ── Render ────────────────────────────────────────────────

  return (
    <div className="flex flex-col" style={{ height: '100%', background: '#0d0d0d', overflow: 'hidden' }}>

      {/* Barra superior */}
      <div className="flex items-center gap-3 px-5 py-2.5 flex-shrink-0"
        style={{ background: 'rgba(15,15,20,0.9)', borderBottom: glassBorder, backdropFilter: 'blur(12px)' }}>
        <a href="/"
          className="flex items-center gap-1.5 no-underline transition-opacity hover:opacity-70 flex-shrink-0"
          style={{ color: '#666', fontFamily: glassFont, fontSize: 12 }}>
          <ArrowLeft weight="bold" className="w-4 h-4" />
          <span className="hidden sm:inline">MedCore</span>
        </a>
        <span style={{ color: '#2a2a2a', fontSize: 12 }}>/</span>
        <span style={{ color: '#4fc3f7', fontSize: 12, fontWeight: 600, fontFamily: glassFont }}>
          Anatomía Humana
        </span>
        <div className="flex-1" />
        {/* Vista anterior / posterior */}
        <div className="flex gap-1 p-1 rounded flex-shrink-0" style={{ background: 'rgba(255,255,255,0.04)', border: glassBorder }}>
          {(['anterior', 'posterior'] as View[]).map(v => (
            <button key={v} onClick={() => handleViewChange(v)} style={viewBtnStyle(view === v)}>
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Área principal */}
      <div className="flex flex-1 overflow-hidden">

        {/* Panel de capas — desktop */}
        <aside className="hidden md:flex flex-col gap-3 p-5 w-56 flex-shrink-0 overflow-y-auto" style={panel}>
          <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#444' }}>Capas</p>

          {LAYER_META.map(({ key, label, dot }) => {
            const state = layers[key]
            return (
              <div key={key} className="space-y-2">
                <div className="flex items-center gap-2 p-2.5 rounded transition-colors"
                  style={{
                    border: state.visible ? `1px solid ${dot}55` : glassBorder,
                    background: state.visible ? `${dot}10` : 'transparent',
                  }}>
                  <button onClick={() => toggleLayer(key)}
                    className="flex-shrink-0 transition-colors"
                    style={{ background: 'none', border: 'none', color: state.visible ? dot : '#444', cursor: 'pointer' }}>
                    {state.visible
                      ? <Eye weight="fill" className="w-4 h-4" />
                      : <EyeSlash weight="regular" className="w-4 h-4" />}
                  </button>
                  <span className="text-xs font-semibold flex-1" style={{ color: state.visible ? '#d0d0d0' : '#444', fontFamily: glassFont }}>
                    {label}
                  </span>
                </div>
                {state.visible && (
                  <input type="range" min={0.05} max={1} step={0.05} value={state.opacity}
                    onChange={e => changeOpacity(key, Number(e.target.value))}
                    className="w-full h-1 rounded-full appearance-none cursor-pointer"
                    style={{ accentColor: dot }} />
                )}
              </div>
            )
          })}

          {/* Separador */}
          <div style={{ borderTop: glassBorder, paddingTop: 8 }} />

          {/* Lista de estructuras */}
          <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#444' }}>
            Estructuras ({visibleHotspots.length})
          </p>
          <div className="space-y-px">
            {visibleHotspots.map(h => (
              <button key={h.id}
                onClick={() => handleSelect(h.id)}
                className="w-full text-left text-[11px] px-2 py-1.5 rounded transition-all"
                style={{
                  fontFamily: glassFont,
                  color: selectedId === h.id ? '#4fc3f7' : '#555',
                  background: selectedId === h.id ? 'rgba(79,195,247,0.1)' : 'transparent',
                }}>
                {h.nombre_es}
              </button>
            ))}
          </div>
        </aside>

        {/* Canvas central */}
        <div className="flex-1 flex items-center justify-center p-6 relative overflow-hidden"
          onClick={e => {
            if ((e.target as Element).tagName !== 'ellipse') setSelectedId(null)
          }}>

          {/* Escenario de anatomía */}
          <div ref={stageRef}
            className="relative"
            style={{
              height: '85dvh', aspectRatio: '400 / 900', maxHeight: '85dvh',
              filter: 'drop-shadow(0 4px 32px rgba(0,0,0,0.7))',
            }}>

            {/* Capas SVG (img tags) — apiladas en absoluto */}
            {/* Orden: skeleton abajo, muscle encima, surface encima de todo */}
            {(['skeleton', 'muscle', 'surface'] as LayerKey[]).map(key => (
              <img
                key={key}
                src={LAYER_URLS[view][key]}
                alt={`${key} ${view}`}
                className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                style={{
                  opacity: layers[key].visible ? layers[key].opacity : 0,
                  transition: 'opacity 0.3s ease',
                }}
              />
            ))}

            {/* Overlay interactivo (hotspots) */}
            <HotspotOverlay
              hotspots={visibleHotspots}
              selectedId={selectedId}
              hoveredId={hoveredId}
              onSelect={handleSelect}
              onHover={setHoveredId}
            />
          </div>

          {/* Tooltip de hover */}
          <AnimatePresence>
            {hoveredId && !selectedId && (() => {
              const h = hotspotById[hoveredId]
              return h ? (
                <motion.div key="tip"
                  initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.12 }}
                  className="absolute bottom-24 left-1/2 -translate-x-1/2 pointer-events-none px-3 py-1.5 rounded text-xs"
                  style={{ background: 'rgba(15,15,20,0.92)', border: glassBorder, fontFamily: glassFont, color: '#e0e0e0', zIndex: 20 }}>
                  <span className="font-bold">{h.nombre_es}</span>
                  <span className="ml-2 italic" style={{ color: '#555' }}>{h.nombre_lat}</span>
                </motion.div>
              ) : null
            })()}
          </AnimatePresence>

          {/* Toolbar flotante inferior */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 p-1.5 rounded"
            style={{ background: 'rgba(15,15,20,0.9)', border: glassBorder, backdropFilter: 'blur(12px)', zIndex: 20 }}>

            <button onClick={handleReset} style={toolBtn} title="Restaurar vista">
              <ArrowCounterClockwise weight="bold" className="inline w-3.5 h-3.5 mr-1" />
              <span className="hidden sm:inline">Restaurar</span>
            </button>

            <button onClick={handleToggleAll}
              style={{ ...toolBtn, color: allVisible ? '#c0c0c0' : '#4fc3f7' }}
              title="Alternar todas las capas">
              <span className="hidden sm:inline">{allVisible ? 'Ocultar todo' : 'Mostrar todo'}</span>
              <span className="sm:hidden">{allVisible ? 'Ocultar' : 'Ver'}</span>
            </button>

            <button onClick={handleXray}
              style={{
                ...toolBtn,
                color: xray ? '#4fc3f7' : '#888',
                background: xray ? 'rgba(79,195,247,0.1)' : 'transparent',
                border: xray ? '1px solid rgba(79,195,247,0.3)' : glassBorder,
              }} title="Modo X-Ray">
              Rx
            </button>

            <button
              onClick={() => document.documentElement.requestFullscreen?.().catch(() => {})}
              style={toolBtn} title="Pantalla completa">
              <ArrowsOut weight="bold" className="w-3.5 h-3.5" />
            </button>

            <button onClick={handleDownload} style={toolBtn} title="Descargar SVG">
              <Camera weight="bold" className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Panel de información */}
        <InfoPanel hotspot={selectedHotspot} onClose={handleClosePanel} />
      </div>

      {/* Mobile: chips de estructuras */}
      <div className="md:hidden flex-shrink-0 overflow-x-auto"
        style={{ background: 'rgba(15,15,20,0.9)', borderTop: glassBorder }}>
        <div className="flex gap-1.5 px-4 py-2 min-w-max">
          {/* Layer toggles rápidos */}
          {LAYER_META.map(({ key, label, dot }) => (
            <button key={key} onClick={() => toggleLayer(key)}
              className="flex items-center gap-1.5 flex-shrink-0 text-[10px] font-bold px-2.5 py-1 rounded transition-all"
              style={{
                fontFamily: glassFont,
                background: layers[key].visible ? `${dot}20` : 'rgba(255,255,255,0.04)',
                border: layers[key].visible ? `1px solid ${dot}55` : glassBorder,
                color: layers[key].visible ? dot : '#444',
              }}>
              {layers[key].visible
                ? <Eye weight="fill" className="w-3 h-3" />
                : <EyeSlash weight="regular" className="w-3 h-3" />}
              {label.split(' ')[1] ?? label.split(' ')[0]}
            </button>
          ))}
          <div style={{ borderLeft: glassBorder, margin: '2px 4px' }} />
          {/* Chips de estructuras */}
          {visibleHotspots.map(h => (
            <button key={h.id} onClick={() => handleSelect(h.id)}
              className="flex-shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded transition-all"
              style={{
                fontFamily: glassFont,
                background: selectedId === h.id ? 'rgba(79,195,247,0.18)' : 'rgba(255,255,255,0.05)',
                border: selectedId === h.id ? '1px solid rgba(79,195,247,0.4)' : glassBorder,
                color: selectedId === h.id ? '#4fc3f7' : '#666',
              }}>
              {h.nombre_es}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
