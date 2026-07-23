/*
 * Home.tsx — MedCore Study Dashboard · Clinical Blue design system
 * Route: /  ·  All values from tokens.css. Stats from real data files.
 * Light default; dark mode automatic via prefers-color-scheme (tokens flip).
 */
import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Heart, BookOpen, PencilSimple, FirstAid } from '@phosphor-icons/react'
import type { Icon } from '@phosphor-icons/react'
import { paiModulos } from '../data/pai'
import { medlexTerms } from '../data/medlex-terms'
import { hotspots } from '../data/anatomyHotspots'
import { getActivePlan } from '../data/plans'
import { Toast } from '../components/Toast'

/* ── Stats from real data ──────────────────────────────────── */
const TERMS_COUNT     = medlexTerms.length
const HOTSPOTS_COUNT  = hotspots.length
const GUIAS_TOTAL     = paiModulos.length
const GUIAS_DISPON    = paiModulos.filter(m => m.status === 'disponible').length

// Hero derivado del plan activo (capa curricular enchufable). Las secciones
// núcleo funcionan sin plan; el hero solo lo usa para etiquetar el plan activo.
const ACTIVE_PLAN     = getActivePlan()
const PLAN_MATERIAS   = ACTIVE_PLAN.periods.reduce((n, p) => n + p.subjects.length, 0)

const TOOLS: { name: string; desc: string; route: string; icon: Icon }[] = [
  { name: 'Anatomía',     desc: 'Visor 2D + 3D',                  route: '/anatomia',     icon: Heart },
  { name: 'Terminología', desc: `MedLex · ${TERMS_COUNT} términos`, route: '/terminologia', icon: BookOpen },
  { name: 'Quizzes',      desc: 'Exámenes de práctica',            route: '/quiz',         icon: PencilSimple },
  { name: 'Plan',         desc: `${ACTIVE_PLAN.schoolShort} · ${PLAN_MATERIAS} materias`, route: '/plan', icon: FirstAid },
]

const HERO_PILLS = [
  { text: `${ACTIVE_PLAN.schoolShort} · ${ACTIVE_PLAN.degree}`, active: true },
  { text: 'Anatomía 2D/3D', active: false },
  { text: 'MedLex',         active: false },
]

const HERO_STATS = [
  { value: `+${TERMS_COUNT}`,     label: 'Términos'    },
  { value: `${HOTSPOTS_COUNT}`,   label: 'Estructuras' },
  { value: `${GUIAS_DISPON}`,     label: 'Guías'       },
  { value: `${PLAN_MATERIAS}`,    label: 'Materias'    },
]

export function Home() {
  const navigate = useNavigate()
  const [toast, setToast] = useState<string | null>(null)
  const clearToast = useCallback(() => setToast(null), [])

  return (
    <div style={{ background: 'var(--color-page-bg)', flex: 1 }}>
      <style>{HOME_CSS}</style>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '20px 24px 0' }}>

        {/* ── Hero ─────────────────────────────────────────── */}
        <section
          className="home-hero"
          style={{
            background: 'var(--color-hero-gradient)',
            borderRadius: 'var(--radius-lg)',
            padding: '28px 28px 24px',
            marginBottom: 14,
          }}
        >
          <p className="home-eyebrow" style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '2px',
            textTransform: 'uppercase', color: '#93C5FD', marginBottom: 10,
          }}>
            Plataforma de estudio médico
          </p>

          <h1 className="home-title" style={{
            fontFamily: 'var(--font-body)', fontSize: 30, fontWeight: 500,
            letterSpacing: '-0.3px', color: '#FFFFFF', margin: 0,
          }}>
            MedCore
          </h1>

          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', margin: '4px 0 18px' }}>
            Plan activo: {ACTIVE_PLAN.school} · {ACTIVE_PLAN.degree}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 22 }}>
            {HERO_PILLS.map(p => (
              <span key={p.text} style={{
                fontSize: 11, padding: '4px 12px', borderRadius: 'var(--radius-pill)',
                background: p.active ? 'var(--hero-pill-active-bg)' : 'var(--hero-pill-bg-light)',
                border: `1px solid ${p.active ? 'var(--hero-pill-active-border)' : 'var(--hero-pill-border-light)'}`,
                color: p.active ? '#FFFFFF' : '#E0F2FE',
                whiteSpace: 'nowrap',
              }}>
                {p.text}
              </span>
            ))}
          </div>

          <div className="home-hero-stats" style={{ display: 'flex' }}>
            {HERO_STATS.map((s, i) => (
              <div key={s.label} className="home-stat" style={{
                display: 'flex', flexDirection: 'column', gap: 3,
                paddingLeft: i === 0 ? 0 : 18, paddingRight: 18,
                borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.15)',
                alignSelf: 'stretch',
              }}>
                <span style={{ fontSize: 20, fontWeight: 500, color: '#FFFFFF', lineHeight: 1.1 }}>{s.value}</span>
                <span style={{
                  fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.5px', color: '#93C5FD',
                }}>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Progress card ─────────────────────────────────── */}
        <section
          className="home-progress"
          style={{
            background: 'var(--color-surface)',
            border: '0.5px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: '13px 15px',
            marginBottom: 14,
            display: 'flex', flexDirection: 'column', gap: 10,
          }}
        >
          <ProgressRow label="Estudio" fill={GUIAS_DISPON / GUIAS_TOTAL}      color="var(--color-accent)"       value={`${GUIAS_DISPON} de ${GUIAS_TOTAL} guías`} />
          <ProgressRow label="Plan"    fill={1 / ACTIVE_PLAN.periods.length} color="var(--color-progress-lmgc)" value={`${ACTIVE_PLAN.schoolShort} · ${ACTIVE_PLAN.periods.length} ${ACTIVE_PLAN.periodLabel.toLowerCase()}s`} />
        </section>

        {/* ── Tools ─────────────────────────────────────────── */}
        <SectionLabel>Herramientas</SectionLabel>
        <div className="home-tools-grid">
          {TOOLS.map(t => {
            const Ic = t.icon
            return (
              <button key={t.name} className="home-tool" onClick={() => navigate(t.route)}>
                <span className="home-tool-icon"><Ic weight="fill" size={18} /></span>
                <span style={{ minWidth: 0 }}>
                  <span style={{ display: 'block', fontSize: 12, fontWeight: 500, color: 'var(--color-text-primary)' }}>{t.name}</span>
                  <span className="home-tool-desc" style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>{t.desc}</span>
                </span>
              </button>
            )
          })}
        </div>

        {/* ── Guías de estudio ─────────────────────────────── */}
        <SectionLabel>Estudio · Guías</SectionLabel>
        <div className="home-module-grid">
          {paiModulos.map(mod => {
            const available = mod.status === 'disponible'
            return (
              <button
                key={mod.slug}
                className={`home-module${available ? ' is-available' : ''}`}
                style={{ borderLeft: `3px solid ${mod.cardAccent}` }}
                onClick={() => available
                  ? navigate(`/estudio/${mod.slug}`)
                  : setToast('Contenido en preparación. Disponible próximamente.')}
              >
                <span style={{
                  fontSize: 11, fontWeight: 500, lineHeight: 1.35,
                  color: 'var(--color-text-primary)',
                }}>
                  {mod.icono}&nbsp; {mod.nombre.replace('MÓDULO — ', '')}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, gap: 6 }}>
                  <span style={{ fontSize: 10, color: 'var(--color-text-secondary)' }}>
                    {mod.temas !== null ? `${mod.temas} temas` : '—'}
                  </span>
                  <span style={{
                    fontSize: 10, fontWeight: 500, padding: '2px 7px', borderRadius: 'var(--radius-sm)',
                    background: available ? 'var(--color-badge-ok-bg)' : 'var(--color-badge-wip-bg)',
                    color: available ? 'var(--color-badge-ok-text)' : 'var(--color-badge-wip-text)',
                  }}>
                    {available ? 'Disponible' : 'Próximo'}
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        {/* ── Footer ────────────────────────────────────────── */}
        <footer style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-text-muted)',
          textAlign: 'center', marginTop: 24, paddingBottom: 24, lineHeight: 1.8,
        }}>
          Misael Granillo · MedCore<br />
          Terminología: MedLex (CC BY-SA 4.0) · Modelo anatómico: Open 3D Model (CC BY-SA 4.0)
        </footer>
      </div>

      {toast && <Toast msg={toast} onDone={clearToast} />}
    </div>
  )
}

/* ── Sub-components ────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase',
      letterSpacing: '1.2px', color: 'var(--color-text-secondary)', margin: '14px 0 9px',
    }}>
      {children}
    </p>
  )
}

function ProgressRow({ label, fill, color, value }: {
  label: string; fill: number; color: string; value: string
}) {
  return (
    <div className="home-progress-row" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--color-text-primary)', width: 38, flexShrink: 0 }}>{label}</span>
      <span style={{ flex: 1, height: 4, background: 'var(--color-surface-subtle)', borderRadius: 'var(--radius-pill)', overflow: 'hidden' }}>
        <span style={{ display: 'block', height: '100%', width: `${Math.min(fill * 100, 100)}%`, background: color, borderRadius: 'var(--radius-pill)', transition: 'width var(--t-fill)' }} />
      </span>
      <span style={{ fontSize: 11, color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>{value}</span>
    </div>
  )
}

/* ── Scoped CSS (responsive + hover; tokens only) ──────────── */
const HOME_CSS = `
  .home-tools-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; }
  .home-module-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 7px; }

  .home-tool {
    display: flex; align-items: center; gap: 10px; text-align: left; width: 100%;
    background: var(--color-surface);
    border: 0.5px solid var(--color-border);
    border-left: 3px solid var(--color-accent);
    border-radius: var(--radius-md);
    padding: 11px 13px; cursor: pointer;
    transition: border-color var(--t-fast), transform var(--t-fast);
  }
  .home-tool:hover { border-color: var(--color-border-strong); transform: translateY(-1px); }
  .home-tool-icon {
    width: 32px; height: 32px; border-radius: 7px; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    background: var(--color-tool-icon-bg); color: var(--color-tool-icon);
  }
  .home-tool-desc { display: block; }

  .home-module {
    background: var(--color-surface);
    border: 0.5px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: 13px; cursor: pointer; text-align: left; width: 100%;
    display: flex; flex-direction: column;
    transition: border-color 0.15s ease, transform 0.15s ease;
  }
  .home-module.is-available:hover { border-color: var(--color-border-strong); transform: translateY(-1px); }

  @media (max-width: 768px) {
    .home-module-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 480px) {
    .home-module-grid { grid-template-columns: 1fr; }
    .home-tool-desc { display: none; }
    .home-hero { padding: 20px 18px !important; }
    .home-title { font-size: 24px !important; }
    .home-hero-stats { display: grid !important; grid-template-columns: 1fr 1fr; gap: 14px; }
    .home-stat { border-left: none !important; padding-left: 0 !important; }
    .home-progress-row { flex-wrap: wrap; }
  }
`
