/* Home.tsx — MedCore Study Dashboard
 * Personal study dashboard for LMGC, Universidad de la Salud, CDMX.
 * Structured around three questions: ¿Dónde estoy? ¿Qué estudiar? ¿Cómo accedo?
 */

import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from '@phosphor-icons/react'
import { paiModulos } from '../data/pai'
import { lmgcModules } from '../data/lmgc-modules'

// ── Design tokens ──────────────────────────────────────────
const T = {
  bg:         '#0d0d0d',
  panel:      'rgba(15,15,20,0.88)',
  border:     'rgba(255,255,255,0.08)',
  borderHover:'#4fc3f7',
  accent:     '#4fc3f7',
  textPrimary:'#e0e0e0',
  textSecond: '#888888',
  mono:       '"IBM Plex Mono", monospace',
}

const panel: React.CSSProperties = {
  background:     T.panel,
  border:         `1px solid ${T.border}`,
  borderRadius:   4,
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
}

// ── Computed stats ─────────────────────────────────────────
const paiDisponibles  = paiModulos.filter(m => m.status === 'disponible').length
const paiTotal        = paiModulos.length
const lmgcYear2       = lmgcModules.filter(m => m.año === 2 && m.tipo === 'modular')
const lmgcDisponibles = lmgcYear2.filter(m => m.status === 'disponible').length

// ── Quick-access tiles ─────────────────────────────────────
const TILES = [
  { id: 'pai',       icon: '🧬', label: 'PAI',         desc: `${paiTotal} módulos · Programa de ingreso`,       route: '/pai'         },
  { id: 'lmgc',      icon: '🏥', label: 'LMGC',        desc: '37 módulos · Licenciatura',                      route: '/modulos'      },
  { id: 'anatomia',  icon: '🫀', label: 'Anatomía 2D',  desc: 'Visor interactivo · 25 estructuras',             route: '/anatomia-3d'  },
  { id: 'termino',   icon: '📖', label: 'Terminología', desc: 'MedLex · Términos grecolatinos',                 route: '/terminologia' },
  { id: 'quiz',      icon: '📝', label: 'Quiz',         desc: 'Exámenes de práctica · PAI + LMGC',              route: '/progress'    },
  { id: 'wiki',      icon: '🔬', label: 'Wiki Médico',  desc: 'Complementos clínicos · Casos', route: null, soon: true },
]

// ── PAI status badge ───────────────────────────────────────
const statusLabel: Record<string, string> = {
  'disponible':      'DISPONIBLE',
  'en-construccion': 'EN CONSTRUCCIÓN',
  'bloqueado':       'BLOQUEADO',
}
const statusColor: Record<string, string> = {
  'disponible':      T.accent,
  'en-construccion': '#f59e0b',
  'bloqueado':       '#555',
}

// ── Toast ─────────────────────────────────────────────────
function Toast({ msg, onClose }: { msg: string; onClose: () => void }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3000)
    return () => clearTimeout(t)
  }, [onClose])
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
      style={{ ...panel, position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
        padding: '12px 20px', zIndex: 100, color: T.textPrimary, fontFamily: T.mono,
        fontSize: 13, display: 'flex', alignItems: 'center', gap: 12, minWidth: 260 }}
    >
      <span>{msg}</span>
      <button onClick={onClose} style={{ color: T.textSecond, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
        <X weight="bold" size={14} />
      </button>
    </motion.div>
  )
}

// ── Main dashboard component ──────────────────────────────
export function Home() {
  const navigate = useNavigate()
  const [toast, setToast] = useState<string | null>(null)

  return (
    <div style={{ background: T.bg, minHeight: '100dvh', fontFamily: T.mono, color: T.textPrimary }}>

      {/* B2 — Context strip */}
      <div style={{
        background: 'rgba(79,195,247,0.04)',
        borderBottom: `1px solid ${T.border}`,
        padding: '8px 24px',
        fontSize: 11, letterSpacing: '0.8px', textTransform: 'uppercase', color: T.textSecond,
        display: 'flex', flexWrap: 'wrap', gap: '6px 16px', alignItems: 'center',
      }}>
        <span>Universidad de la Salud · CDMX</span>
        <span style={{ color: T.border }}>|</span>
        <span>Licenciatura en Medicina General y Comunitaria</span>
        <span style={{ color: T.border }}>|</span>
        <span style={{ color: T.accent }}>PAI — Programa de Apoyo al Ingreso · 2026</span>
      </div>

      {/* Main container */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px 64px' }}>

        {/* B3 — Program status card */}
        <section style={{ ...panel, padding: '24px 28px', marginBottom: 28 }}>
          <p style={{ fontSize: 10, letterSpacing: '1px', textTransform: 'uppercase', color: T.textSecond, marginBottom: 16 }}>
            Estado actual
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: T.accent }}>PAI</span>
            <div style={{ flex: 1, minWidth: 120, height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }}>
              <div style={{ height: '100%', width: `${(paiDisponibles / paiTotal) * 100}%`,
                background: T.accent, borderRadius: 2, transition: 'width 0.6s ease' }} />
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: T.textSecond }}>LMGC</span>
            <span style={{ fontSize: 11, color: T.textSecond, marginLeft: 4 }}>Año 1 → Año 6</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px' }}>
            <span style={{ fontSize: 12, color: T.textSecond }}>
              PAI:{' '}
              <strong style={{ color: T.textPrimary }}>{paiDisponibles} de {paiTotal} módulos disponibles</strong>
            </span>
            <span style={{ fontSize: 12, color: T.textSecond }}>
              LMGC:{' '}
              <strong style={{ color: T.textPrimary }}>Año 2 · {lmgcDisponibles} sistemas corporales disponibles</strong>
            </span>
          </div>
        </section>

        {/* B4 — Quick access grid */}
        <section style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 10, letterSpacing: '1px', textTransform: 'uppercase', color: T.textSecond, marginBottom: 14 }}>
            Acceso rápido
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}
               className="quick-grid">
            {TILES.map(tile => (
              <Tile
                key={tile.id}
                tile={tile}
                onSoon={() => setToast('🔬 Wiki Médico — Próximamente. Módulo en construcción.')}
                navigate={navigate}
              />
            ))}
          </div>
        </section>

        {/* B5 — PAI modules strip */}
        <section style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 10, letterSpacing: '1px', textTransform: 'uppercase', color: T.textSecond, marginBottom: 14 }}>
            PAI — Módulos
          </p>
          <div className="h-strip" style={{ display: 'flex', gap: 10, overflowX: 'auto',
            paddingBottom: 4, scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {paiModulos.map(mod => {
              const available = mod.status === 'disponible'
              const card = (
                <div style={{
                  ...panel,
                  minWidth: 220, flexShrink: 0, padding: '14px 16px',
                  opacity: available ? 1 : 0.4,
                  cursor: available ? 'pointer' : 'default',
                  transition: 'border-color 0.2s, background 0.2s',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 18 }}>{mod.icono}</span>
                    <p style={{ fontSize: 11, fontWeight: 700, color: T.textPrimary, lineHeight: 1.3,
                      overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
                      {mod.nombre.replace('MÓDULO — ', '')}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 10, color: T.textSecond }}>
                      {mod.temas !== null ? `${mod.temas} temas` : '—'}
                    </span>
                    <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.5px',
                      color: statusColor[mod.status] }}>
                      {statusLabel[mod.status]}
                    </span>
                  </div>
                </div>
              )
              return available ? (
                <Link key={mod.slug} to={`/pai/${mod.slug}`}
                  style={{ textDecoration: 'none' }}
                  className="strip-card">
                  {card}
                </Link>
              ) : (
                <div key={mod.slug}>{card}</div>
              )
            })}
          </div>
        </section>

        {/* B6 — Tools row */}
        <section style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 10, letterSpacing: '1px', textTransform: 'uppercase', color: T.textSecond, marginBottom: 14 }}>
            Herramientas
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}
               className="tools-grid">
            {([
              { icon: '🫀', label: 'Anatomía 2D', desc: 'Visor interactivo · Capas: piel, músculo, esquelético · Vista anterior/posterior', cta: 'Abrir visor', route: '/anatomia-3d' },
              { icon: '📖', label: 'Terminología · MedLex', desc: '70+ términos grecolatinos · Filtros por sistema corporal · Quiz de práctica', cta: 'Abrir terminología', route: '/terminologia' },
            ] as const).map(tool => (
              <Link key={tool.route} to={tool.route}
                style={{ textDecoration: 'none' }}
                className="tool-card">
                <div style={{
                  ...panel,
                  padding: '20px 24px',
                  borderLeft: `3px solid ${T.accent}`,
                  height: '100%',
                }}>
                  <p style={{ fontSize: 9, letterSpacing: '1px', textTransform: 'uppercase',
                    color: T.accent, marginBottom: 10, fontWeight: 700 }}>Herramienta</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <span style={{ fontSize: 24 }}>{tool.icon}</span>
                    <p style={{ fontSize: 14, fontWeight: 700, color: T.textPrimary }}>{tool.label}</p>
                  </div>
                  <p style={{ fontSize: 11, color: T.textSecond, lineHeight: 1.6, marginBottom: 16 }}>
                    {tool.desc}
                  </p>
                  <span style={{ fontSize: 11, color: T.accent, display: 'flex', alignItems: 'center', gap: 6 }}>
                    {tool.cta} <ArrowRight weight="bold" size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* B7 — LMGC Year 2 strip */}
        <section style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 10, letterSpacing: '1px', textTransform: 'uppercase', color: T.textSecond, marginBottom: 14 }}>
            LMGC — Año 2 · Sistemas Corporales
          </p>
          <div style={{ display: 'flex', gap: 10, overflowX: 'auto',
            paddingBottom: 4, scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {lmgcYear2.map(mod => {
              const available = mod.status === 'disponible'
              const card = (
                <div style={{
                  ...panel,
                  minWidth: 200, flexShrink: 0, padding: '14px 16px',
                  opacity: available ? 1 : 0.4,
                  cursor: available ? 'pointer' : 'default',
                  transition: 'border-color 0.2s',
                }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: T.textPrimary, marginBottom: 6, lineHeight: 1.3 }}>
                    {mod.nombre}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 10, color: T.textSecond }}>
                      {mod.semanas ? `${mod.semanas} sem · ` : ''}{mod.creditos} créditos
                    </span>
                    <span style={{ fontSize: 9, color: statusColor[mod.status], fontWeight: 700 }}>
                      {statusLabel[mod.status]}
                    </span>
                  </div>
                </div>
              )
              return available ? (
                <Link key={mod.id} to={`/modulos/${mod.id}`}
                  style={{ textDecoration: 'none' }} className="strip-card">
                  {card}
                </Link>
              ) : (
                <div key={mod.id}>{card}</div>
              )
            })}
            {/* Trailing "Ver plan completo" card */}
            <Link to="/modulos" style={{ textDecoration: 'none' }}>
              <div style={{
                ...panel,
                minWidth: 160, flexShrink: 0, padding: '14px 16px',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6,
                cursor: 'pointer', height: '100%',
              }} className="strip-card">
                <p style={{ fontSize: 11, color: T.accent, textAlign: 'center', lineHeight: 1.4 }}>
                  Ver plan<br />completo
                </p>
                <ArrowRight weight="bold" size={14} color={T.accent} />
              </div>
            </Link>
          </div>
        </section>

        {/* B8 — Footer */}
        <footer style={{ textAlign: 'center', fontSize: 10, color: T.textSecond,
          borderTop: `1px solid ${T.border}`, paddingTop: 24, lineHeight: 1.8 }}>
          <p>MedCore · Universidad de la Salud CDMX · LMGC</p>
          <p>Terminología: MedLex (CC BY-SA 4.0) · Modelo anatómico: Z-Anatomy (CC BY-SA 4.0)</p>
        </footer>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && <Toast msg={toast} onClose={() => setToast(null)} />}
      </AnimatePresence>

      {/* Inline responsive CSS */}
      <style>{`
        .quick-grid { grid-template-columns: repeat(3, 1fr) !important; }
        .tools-grid { grid-template-columns: 1fr 1fr !important; }
        .strip-card:hover > div {
          border-color: ${T.accent} !important;
          background: rgba(79,195,247,0.04) !important;
        }
        .tool-card:hover > div { background: rgba(79,195,247,0.06) !important; }
        @media (max-width: 640px) {
          .quick-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .tools-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 400px) {
          .quick-grid { grid-template-columns: 1fr 1fr !important; }
        }
        .h-strip::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  )
}

// ── Tile component ─────────────────────────────────────────
function Tile({
  tile, onSoon, navigate
}: {
  tile: typeof TILES[0]
  onSoon: () => void
  navigate: ReturnType<typeof useNavigate>
}) {
  const [hovered, setHovered] = useState(false)

  const handleClick = () => {
    if (tile.soon) { onSoon(); return }
    if (tile.route) navigate(tile.route)
  }

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={handleClick}
      style={{
        background: hovered && !tile.soon ? 'rgba(79,195,247,0.04)' : T.panel,
        border: `1px solid ${hovered && !tile.soon ? T.accent : T.border}`,
        borderRadius: 4,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        padding: '20px 20px',
        cursor: tile.soon ? 'default' : 'pointer',
        transition: 'border-color 0.2s, background 0.2s',
        position: 'relative',
        opacity: tile.soon ? 0.6 : 1,
      } as React.CSSProperties}
    >
      {tile.soon && (
        <span style={{
          position: 'absolute', top: 10, right: 10,
          fontSize: 8, fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase',
          background: 'rgba(245,158,11,0.15)', color: '#f59e0b',
          border: '1px solid rgba(245,158,11,0.3)', borderRadius: 3,
          padding: '2px 6px',
        }}>Próximamente</span>
      )}
      <div style={{ fontSize: 28, marginBottom: 12 }}>{tile.icon}</div>
      <p style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary, marginBottom: 6 }}>
        {tile.label}
      </p>
      <p style={{ fontSize: 11, color: T.textSecond, lineHeight: 1.5 }}>
        {tile.desc}
      </p>
    </motion.div>
  )
}
