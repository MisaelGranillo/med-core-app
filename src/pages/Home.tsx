/*
 * Home.tsx — MedCore Study Dashboard
 * Universidad de la Salud · LMGC · PAI 2026
 *
 * Rebuilt on the design-token system (src/styles/tokens.css).
 * Structure: Hero → Progress → Tools → PAI modules → Footer.
 * Inline styles only for values that come from data (module colors).
 */

import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { paiModulos }    from '../data/pai'
import { medlexTerms }   from '../data/medlex-terms'
import { hotspots }      from '../data/anatomyHotspots'
import { atlasTopics }   from '../data/atlas-topics'

/* ── Stats derived from real data ──────────────────────────── */
const TERMS_COUNT     = medlexTerms.length
const HOTSPOTS_COUNT  = hotspots.length
const PAI_TOTAL       = paiModulos.length
const PAI_DISPONIBLES = paiModulos.filter(m => m.status === 'disponible').length
const ATLAS_COUNT     = atlasTopics.length

/* ── Tools ─────────────────────────────────────────────────── */
const TOOLS = [
  { id: 'atlas',    icon: '🗺️',  label: 'Atlas Visual',  desc: `${ATLAS_COUNT} mapas · Estudio por imagen`, route: '/atlas'        },
  { id: 'anatomia', icon: '🫀', label: 'Anatomía 2D',  desc: `Visor · ${HOTSPOTS_COUNT} estructuras`, route: '/anatomia-3d'  },
  { id: 'termino',  icon: '📖', label: 'Terminología', desc: `MedLex · ${TERMS_COUNT}+ términos`,      route: '/terminologia' },
  { id: 'quiz',     icon: '📝', label: 'Quiz',         desc: 'Exámenes de práctica',                   route: '/progress'     },
  { id: 'lmgc',     icon: '🏥', label: 'LMGC',         desc: '37 módulos · Licenciatura',              route: '/modulos'      },
] as const

/* ── Toast ─────────────────────────────────────────────────── */
function Toast({ msg, onDone }: { msg: string; onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2500)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <div
      role="status"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] bg-navy-900 text-white
                 text-sm font-medium px-5 py-2.5 rounded-md shadow-pop whitespace-nowrap animate-fade-up"
    >
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
    <div className="flex-1 bg-app">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-5 pb-12">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="mb-4">
          <div className="relative overflow-hidden rounded-lg bg-hero-gradient px-6 py-7 sm:px-8 sm:py-8">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-10 -right-10 w-52 h-52 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(94,234,212,0.14), transparent 70%)' }}
            />

            <p className="eyebrow mb-2.5" style={{ color: '#7ec8e3' }}>
              Universidad de la Salud · CDMX · 2026
            </p>

            <h1 className="text-[2rem] sm:text-[2.25rem] font-bold tracking-tight text-white leading-none mb-1.5">
              MedCore
            </h1>

            <p className="text-[15px] italic text-white/65 mb-6">
              Licenciatura en Medicina General y Comunitaria
            </p>

            <div className="flex flex-wrap gap-2.5 mb-7">
              {[
                { text: 'PAI — Activo', active: true },
                { text: 'LMGC — Año 2 disponible', active: false },
                { text: 'Terminología MedLex', active: false },
              ].map(p => (
                <span
                  key={p.text}
                  className="text-xs font-medium px-3.5 py-1.5 rounded-full border whitespace-nowrap"
                  style={
                    p.active
                      ? { background: 'rgba(94,234,212,0.18)', borderColor: '#5eead4', color: '#5eead4' }
                      : { background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }
                  }
                >
                  {p.text}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-px">
              {[
                { value: `+${TERMS_COUNT}`, label: 'Términos' },
                { value: `${PAI_DISPONIBLES}/${PAI_TOTAL}`, label: 'PAI listo' },
                { value: '3', label: 'Categorías' },
                { value: `${HOTSPOTS_COUNT}`, label: 'Estructuras' },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col gap-1 pr-5 ${i === 0 ? '' : 'pl-5 border-l border-white/15'}`}
                >
                  <span className="text-2xl font-bold text-white leading-none font-mono">{s.value}</span>
                  <span className="eyebrow text-[10px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Progress ──────────────────────────────────────── */}
        <section className="mb-6">
          <div className="card p-4 flex flex-col gap-3">
            <ProgressRow label="PAI"  fill={PAI_DISPONIBLES / PAI_TOTAL} barColor="var(--c-info)"    valueLabel={`${PAI_DISPONIBLES} de ${PAI_TOTAL} módulos`} />
            <ProgressRow label="LMGC" fill={0.20}                        barColor="var(--c-success)" valueLabel="Año 2 · 7 sistemas" />
          </div>
        </section>

        {/* ── Tools ─────────────────────────────────────────── */}
        <section className="mb-6">
          <p className="label-mono mb-2.5">Herramientas</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
            {TOOLS.map(tool => (
              <button
                key={tool.id}
                onClick={() => navigate(tool.route)}
                className="card card-interactive p-4 flex items-center gap-3 text-left w-full"
              >
                <span className="text-xl flex-shrink-0" aria-hidden>{tool.icon}</span>
                <span className="min-w-0">
                  <span className="block text-[13px] font-semibold text-ink">{tool.label}</span>
                  <span className="block text-xs text-faint mt-0.5 truncate">{tool.desc}</span>
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* ── PAI modules ───────────────────────────────────── */}
        <section className="mb-7">
          <p className="label-mono mb-2.5">PAI — Módulos</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
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

        {/* ── Footer ────────────────────────────────────────── */}
        <footer className="text-center text-xs text-faint border-t border-line pt-5 leading-loose">
          <p className="m-0">MedCore · Misael Granillo · Universidad de la Salud CDMX</p>
          <p className="m-0">Terminología: MedLex (CC BY-SA 4.0) · Modelo anatómico: Z-Anatomy (CC BY-SA 4.0)</p>
        </footer>
      </div>

      {toast && <Toast msg={toast} onDone={clearToast} />}
    </div>
  )
}

/* ── Sub-components ────────────────────────────────────────── */

function ProgressRow({
  label, fill, barColor, valueLabel,
}: {
  label: string; fill: number; barColor: string; valueLabel: string
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold text-ink w-9 flex-shrink-0">{label}</span>
      <div className="flex-1 h-1.5 rounded-full bg-line overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${Math.min(fill * 100, 100)}%`, background: barColor, transition: 'width var(--t-fill)' }}
        />
      </div>
      <span className="text-xs text-faint whitespace-nowrap">{valueLabel}</span>
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
      onClick={() => (available ? navigate(`/pai/${mod.slug}`) : onUnavailable())}
      className="card-interactive rounded-lg p-4 text-left w-full shadow-sm"
      style={{ background: mod.cardBg, border: 'none' }}
    >
      <p className="text-xs font-bold leading-snug mb-2.5 line-clamp-3" style={{ color: mod.cardColor }}>
        {mod.icono}&nbsp;&nbsp;{mod.nombre.replace('MÓDULO — ', '')}
      </p>

      <div className="flex items-center justify-between gap-1.5">
        <span className="text-[11px] font-medium" style={{ color: mod.cardColor, opacity: 0.75 }}>
          {mod.temas !== null ? `${mod.temas} temas` : '—'}
        </span>
        <span
          className="text-[10px] font-bold px-2 py-0.5 rounded-full font-mono"
          style={{ background: 'rgba(0,0,0,0.10)', color: mod.cardColor, opacity: available ? 1 : 0.65 }}
        >
          {available ? 'Disponible' : 'Próximo'}
        </span>
      </div>
    </button>
  )
}
