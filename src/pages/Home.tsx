/*
 * Home.tsx — MedCore Study Dashboard (light theme)
 * Universidad de la Salud · LMGC · PAI 2026
 *
 * Structure:
 *   Hero → Progress card → Tools grid → PAI module cards → Footer
 *
 * All stats pulled from real data (no hardcoded counts).
 */

import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { paiModulos }    from '../data/pai'
import { medlexTerms }   from '../data/medlex-terms'
import { hotspots }      from '../data/anatomyHotspots'

/* ── Stats derived from real data ──────────────────────────── */
const TERMS_COUNT       = medlexTerms.length          // 82
const HOTSPOTS_COUNT    = hotspots.length              // 25
const PAI_TOTAL         = paiModulos.length            // 9
const PAI_DISPONIBLES   = paiModulos.filter(m => m.status === 'disponible').length

/* ── Tools ─────────────────────────────────────────────────── */
const TOOLS = [
  { id: 'anatomia', icon: '🫀', iconBg: '#fde8e8', label: 'Anatomía 2D',   desc: `Visor interactivo · ${HOTSPOTS_COUNT} estructuras`, route: '/anatomia-3d'  },
  { id: 'termino',  icon: '📖', iconBg: '#ede9fe', label: 'Terminología',   desc: `MedLex · ${TERMS_COUNT}+ términos grecolatinos`,       route: '/terminologia' },
  { id: 'quiz',     icon: '📝', iconBg: '#e0f2fe', label: 'Quiz',           desc: 'Exámenes de práctica',                                  route: '/progress'     },
  { id: 'lmgc',     icon: '🏥', iconBg: '#fef9c3', label: 'LMGC',          desc: '37 módulos · Licenciatura',                             route: '/modulos'      },
] as const

/* ── Reusable toast ────────────────────────────────────────── */
function Toast({ msg, onDone }: { msg: string; onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2500)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <div style={{
      position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
      background: '#1a202c', color: '#fff', fontSize: 13, fontWeight: 500,
      padding: '10px 20px', borderRadius: 8, zIndex: 9999,
      boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
      whiteSpace: 'nowrap',
      animation: 'fadeUp 0.2s ease',
    }}>
      {msg}
    </div>
  )
}

/* ── Home page ─────────────────────────────────────────────── */
export function Home() {
  const navigate = useNavigate()
  const [toast, setToast] = useState<string | null>(null)
  const showToast = useCallback((msg: string) => setToast(msg), [])
  const clearToast = useCallback(() => setToast(null), [])

  return (
    <div style={{ background: '#f4f6f9', minHeight: '100dvh', fontFamily: 'inherit' }}>

      {/* Keyframe injection */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translate(-50%, 10px); }
          to   { opacity: 1; transform: translate(-50%, 0);    }
        }
        .mc-card-hover {
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .mc-card-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.10) !important;
        }
        .mc-tool-hover {
          transition: box-shadow 0.15s ease, background 0.15s ease;
        }
        .mc-tool-hover:hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          background: #fafbfc !important;
        }
        @media (max-width: 480px) {
          .hero-stats  { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
          .hero-pills  { flex-wrap: wrap !important; }
          .tools-grid  { grid-template-columns: 1fr 1fr !important; }
          .module-grid { grid-template-columns: 1fr !important; }
          .hero-title  { font-size: 28px !important; }
          .hero-inner  { padding: 24px 20px 20px !important; }
          .stat-div    { display: none !important; }
          .hero-stat   { padding: 0 !important; }
          .progress-row { flex-direction: column !important; gap: 12px !important; }
          .tool-desc   { display: none !important; }
        }
        @media (max-width: 768px) {
          .module-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '20px 16px 48px' }}>

        {/* ── Hero ─────────────────────────────────────────── */}
        <section style={{ marginBottom: 14 }}>
          <div className="hero-inner" style={{
            background: 'linear-gradient(135deg, #0a1628 0%, #0d2744 40%, #0f3d5c 70%, #0a2a3d 100%)',
            borderRadius: 12,
            padding: '32px 32px 28px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Decorative circle */}
            <div style={{
              position: 'absolute', top: -40, right: -40,
              width: 200, height: 200, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(79,195,247,0.12), transparent)',
              pointerEvents: 'none',
            }} />

            {/* Eyebrow */}
            <p style={{
              fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase',
              color: '#7ec8e3', marginBottom: 10, fontWeight: 500,
            }}>
              Universidad de la Salud · CDMX · 2026
            </p>

            {/* Title */}
            <h1 className="hero-title" style={{
              fontSize: 36, fontWeight: 800, letterSpacing: '-0.5px',
              color: '#ffffff', margin: '0 0 6px',
            }}>
              MedCore
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: 15, fontStyle: 'italic',
              color: 'rgba(255,255,255,0.65)', marginBottom: 24,
            }}>
              Licenciatura en Medicina General y Comunitaria
            </p>

            {/* Pills */}
            <div className="hero-pills" style={{ display: 'flex', gap: 10, marginBottom: 28, flexWrap: 'nowrap' }}>
              {[
                { text: 'PAI — Activo', active: true },
                { text: 'LMGC — Año 2 disponible', active: false },
                { text: 'Terminología MedLex', active: false },
              ].map(p => (
                <span key={p.text} style={{
                  fontSize: 12, fontWeight: 500, padding: '5px 14px', borderRadius: 20,
                  background: p.active ? 'rgba(79,195,247,0.2)' : 'rgba(255,255,255,0.10)',
                  border: `1px solid ${p.active ? '#4fc3f7' : 'rgba(255,255,255,0.2)'}`,
                  color: p.active ? '#4fc3f7' : '#fff',
                  whiteSpace: 'nowrap',
                }}>
                  {p.text}
                </span>
              ))}
            </div>

            {/* Stats row */}
            <div className="hero-stats" style={{ display: 'flex', alignItems: 'flex-start' }}>
              {[
                { value: `+${TERMS_COUNT}`, label: 'Términos' },
                { value: `${PAI_DISPONIBLES}/${PAI_TOTAL}`, label: 'PAI listo' },
                { value: '3', label: 'Categorías' },
                { value: `${HOTSPOTS_COUNT}`, label: 'Estructuras' },
              ].map((s, i) => (
                <div key={s.label} className="hero-stat" style={{
                  display: 'flex', flexDirection: 'column', gap: 4,
                  paddingLeft: i === 0 ? 0 : 20,
                  paddingRight: 20,
                  borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.15)',
                }}>
                  <span className="stat-div" style={{ display: 'none' }} />
                  <span style={{ fontSize: 24, fontWeight: 800, color: '#fff', lineHeight: 1 }}>
                    {s.value}
                  </span>
                  <span style={{
                    fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.5px',
                    color: 'rgba(255,255,255,0.5)', fontWeight: 500,
                  }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Progress card ─────────────────────────────────── */}
        <section style={{ marginBottom: 20 }}>
          <div style={{
            background: '#fff',
            border: '0.5px solid #e2e8f0',
            borderRadius: 8,
            padding: '14px 16px',
            display: 'flex', flexDirection: 'column', gap: 12,
          }}>
            {/* PAI row */}
            <ProgressRow
              label="PAI"
              fill={PAI_DISPONIBLES / PAI_TOTAL}
              barColor="#4fc3f7"
              valueLabel={`${PAI_DISPONIBLES} de ${PAI_TOTAL} módulos`}
            />
            {/* LMGC row */}
            <ProgressRow
              label="LMGC"
              fill={0.20}
              barColor="#10b981"
              valueLabel="Año 2 · 7 sistemas"
            />
          </div>
        </section>

        {/* ── Tools ─────────────────────────────────────────── */}
        <section style={{ marginBottom: 20 }}>
          <SectionLabel>Herramientas</SectionLabel>
          <div className="tools-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 10,
          }}>
            {TOOLS.map(tool => (
              <button
                key={tool.id}
                className="mc-tool-hover"
                onClick={() => navigate(tool.route)}
                style={{
                  background: '#fff',
                  border: '0.5px solid #e2e8f0',
                  borderRadius: 8,
                  padding: '14px 16px',
                  display: 'flex', alignItems: 'center', gap: 12,
                  cursor: 'pointer', textAlign: 'left', width: '100%',
                }}
              >
                <div style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: tool.iconBg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, flexShrink: 0,
                }}>
                  {tool.icon}
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: '#1a202c', margin: 0 }}>
                    {tool.label}
                  </p>
                  <p className="tool-desc" style={{ fontSize: 11, color: '#94a3b8', marginTop: 2, marginBottom: 0 }}>
                    {tool.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ── PAI module cards ──────────────────────────────── */}
        <section style={{ marginBottom: 28 }}>
          <SectionLabel>PAI — Módulos</SectionLabel>
          <div className="module-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 10,
          }}>
            {paiModulos.map(mod => (
              <ModuleCard
                key={mod.slug}
                mod={mod}
                onUnavailable={() => showToast('Contenido en preparación. Disponible próximamente.')}
                navigate={navigate}
              />
            ))}
          </div>
        </section>

        {/* ── Footer ───────────────────────────────────────── */}
        <footer style={{
          textAlign: 'center', fontSize: 11, color: '#94a3b8',
          borderTop: '0.5px solid #e2e8f0', paddingTop: 20,
          lineHeight: 1.9,
        }}>
          <p style={{ margin: 0 }}>
            MedCore · Misael Granillo · Universidad de la Salud CDMX
          </p>
          <p style={{ margin: 0 }}>
            Terminología: MedLex (CC BY-SA 4.0) ·&nbsp;
            Modelo anatómico: Z-Anatomy (CC BY-SA 4.0)
          </p>
        </footer>
      </div>

      {/* Toast */}
      {toast && <Toast msg={toast} onDone={clearToast} />}
    </div>
  )
}

/* ── Sub-components ────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase',
      color: '#94a3b8', fontWeight: 500, marginBottom: 10,
    }}>
      {children}
    </p>
  )
}

function ProgressRow({
  label, fill, barColor, valueLabel,
}: {
  label: string; fill: number; barColor: string; valueLabel: string
}) {
  return (
    <div className="progress-row" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ fontSize: 11, fontWeight: 600, color: '#1a202c', width: 36, flexShrink: 0 }}>
        {label}
      </span>
      <div style={{ flex: 1, height: 6, background: '#e2e8f0', borderRadius: 3, overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${Math.min(fill * 100, 100)}%`,
          background: barColor,
          borderRadius: 3,
          transition: 'width 0.6s ease',
        }} />
      </div>
      <span style={{ fontSize: 11, color: '#94a3b8', whiteSpace: 'nowrap' }}>
        {valueLabel}
      </span>
    </div>
  )
}

function ModuleCard({
  mod, onUnavailable, navigate,
}: {
  mod: typeof paiModulos[0]
  onUnavailable: () => void
  navigate: (to: string) => void
}) {
  const available = mod.status === 'disponible'

  return (
    <button
      className="mc-card-hover"
      onClick={() => available ? navigate(`/pai/${mod.slug}`) : onUnavailable()}
      style={{
        background: mod.cardBg,
        border: 'none',
        borderRadius: 8,
        padding: '16px',
        cursor: 'pointer',
        textAlign: 'left',
        width: '100%',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
      }}
    >
      {/* Emoji + name */}
      <p style={{
        fontSize: 12, fontWeight: 700, color: mod.cardColor,
        lineHeight: 1.35, marginBottom: 10,
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}>
        {mod.icono}&nbsp;&nbsp;
        {mod.nombre.replace('MÓDULO — ', '')}
      </p>

      {/* Footer: temas count + status badge */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
        <span style={{ fontSize: 11, fontWeight: 500, color: mod.cardColor, opacity: 0.75 }}>
          {mod.temas !== null ? `${mod.temas} temas` : '—'}
        </span>
        <span style={{
          fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 10,
          background: 'rgba(0,0,0,0.12)', color: mod.cardColor,
          opacity: available ? 1 : 0.65,
        }}>
          {available ? 'Disponible' : 'Próximo'}
        </span>
      </div>
    </button>
  )
}
