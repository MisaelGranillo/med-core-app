/* Visor Anatómico 3D — ruta /anatomia-3d
 * Option B: self-hosted React Three Fiber viewer (client-side WebGL on
 * Cloudflare Pages static hosting). GLBs in /public/models, registry in
 * src/data/anatomyModels.ts. ?model={id} selects the model.
 * Models: Open 3D Model (CC BY-SA 4.0) — see attribution footer.
 */
import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, BookOpenText, Cube, CursorClick } from '@phosphor-icons/react'
import {
  anatomyModels, anatomyRegions, anatomyModelById, availableModelCount,
  type AnatomyModel,
} from '../data/anatomyModels'
import { AnatomyModelViewer } from '../components/AnatomyModelViewer'

function resolveModel(param: string | null): AnatomyModel {
  if (param) {
    const byId = anatomyModelById[param]
    if (byId) return byId
    const byFolder = anatomyModels.find(m => m.viewerModel === param)
    if (byFolder) return byFolder
  }
  return anatomyModelById['skeleton']
}

export function Anatomy3D() {
  const [params, setParams] = useSearchParams()
  const active = resolveModel(params.get('model'))
  const [region, setRegion] = useState<string>('all')
  const [structure, setStructure] = useState<string | null>(null)

  // Clear the selected structure whenever the model changes.
  useEffect(() => setStructure(null), [active.id])

  const select = (id: string) => setParams({ model: id }, { replace: true })
  const shown = anatomyModels.filter(m => region === 'all' || m.region === region)

  return (
    <div className="flex-1 flex flex-col bg-app min-w-0">

      {/* ── Breadcrumb ──────────────────────────────────────── */}
      <div className="border-b border-line bg-surface">
        <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 h-12 flex items-center gap-2 catalog-code">
          <Link to="/pai" className="hover:text-primary-ink transition-colors">PAI</Link>
          <span className="text-faint">/</span>
          <Link to="/pai/aparatos-y-sistemas" className="hover:text-primary-ink transition-colors hidden sm:inline">
            Aparatos y Sistemas
          </Link>
          <span className="text-faint hidden sm:inline">/</span>
          <span className="text-ink">Anatomía 3D</span>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 py-4 grid gap-4
                      grid-cols-1 lg:grid-cols-[260px_1fr_240px] flex-1">

        {/* ── Model browser (left) ──────────────────────────── */}
        <aside className="min-w-0 flex flex-col gap-3">
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
            {anatomyRegions.map(r => (
              <button
                key={r.id}
                onClick={() => setRegion(r.id)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap flex-shrink-0 border transition-colors
                  ${region === r.id
                    ? 'bg-primary-tint border-primary-200 text-primary-ink'
                    : 'bg-surface border-line text-muted hover:border-line-strong'}`}
              >
                {r.nombre}
              </button>
            ))}
          </div>

          <p className="label-mono">{availableModelCount} modelos disponibles</p>

          <div className="flex flex-col gap-1.5 lg:max-h-[62vh] lg:overflow-y-auto pr-0.5">
            {shown.map(m => {
              const on = m.id === active.id
              const disabled = m.status !== 'available'
              return (
                <button
                  key={m.id}
                  onClick={() => !disabled && select(m.id)}
                  disabled={disabled}
                  aria-pressed={on}
                  className={`text-left rounded-md border px-3 py-2 transition-colors
                    ${on ? 'border-primary-200 bg-primary-tint'
                         : 'border-line bg-surface hover:border-line-strong'}
                    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <span className="block text-sm font-medium text-ink leading-snug">{m.nombre}</span>
                  <span className="flex items-center justify-between gap-2 mt-0.5">
                    <span className="catalog-code" style={{ textTransform: 'none' }}>{m.nombre_en}</span>
                    {disabled
                      ? <span className="text-[10px] text-faint flex-shrink-0">Próximo</span>
                      : <span className={`text-xs font-medium flex items-center gap-0.5 flex-shrink-0 ${on ? 'text-primary-ink' : 'text-muted'}`}>
                          {on ? 'Activo' : 'Cargar'} <ArrowRight weight="bold" className="w-3 h-3" />
                        </span>}
                  </span>
                </button>
              )
            })}
          </div>
        </aside>

        {/* ── Viewer (center) ───────────────────────────────── */}
        <div className="min-w-0 rounded-lg overflow-hidden border border-stage-border"
             style={{ background: 'var(--c-stage)' }}>
          {active.status === 'available' ? (
            <AnatomyModelViewer url={active.glb} onSelect={setStructure} />
          ) : (
            <div className="flex flex-col items-center justify-center text-center gap-2 px-6"
                 style={{ height: 'min(80vh, 760px)', color: 'var(--c-stage-text)' }}>
              <Cube className="w-8 h-8 opacity-50" />
              <p className="text-sm font-medium">{active.nombre}</p>
              <p className="text-xs" style={{ color: 'var(--c-stage-muted)', maxWidth: 320 }}>
                Este modelo aún no está disponible en la fuente Open 3D Model. Selecciona otro modelo del navegador.
              </p>
            </div>
          )}
        </div>

        {/* ── Info panel (right) ────────────────────────────── */}
        <aside className="min-w-0">
          <div className="card p-4">
            <div className="flex items-center gap-2 mb-1">
              <Cube weight="fill" className="w-4 h-4 text-primary" />
              <h1 className="text-base font-semibold text-ink m-0 leading-tight">{active.nombre}</h1>
            </div>
            <p className="catalog-code mb-3" style={{ textTransform: 'none' }}>{active.nombre_en}</p>
            <p className="text-sm text-body leading-relaxed mb-4">{active.description}</p>

            {active.status === 'available' && (
              <div className="rounded-md border border-line bg-surface-2 p-3 mb-4">
                <p className="catalog-code mb-1">Estructura seleccionada</p>
                {structure ? (
                  <p className="text-sm font-medium text-primary-ink">{structure}</p>
                ) : (
                  <p className="text-xs text-muted flex items-center gap-1.5">
                    <CursorClick className="w-3.5 h-3.5" /> Haz clic en una estructura del modelo
                  </p>
                )}
              </div>
            )}

            <Link to="/terminologia" className="btn-ghost w-full justify-center">
              <BookOpenText weight="fill" className="w-4 h-4" />
              Ver terminología relacionada
            </Link>
          </div>

          <Link to="/pai/aparatos-y-sistemas"
                className="mt-3 flex items-center gap-1.5 catalog-code hover:text-primary-ink transition-colors">
            <ArrowLeft weight="bold" className="w-3.5 h-3.5" /> Volver al módulo
          </Link>
        </aside>
      </div>

      {/* ── Attribution footer (CC BY-SA 4.0) ───────────────── */}
      <footer className="border-t border-line bg-surface-2 mt-auto">
        <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 py-4 text-xs text-muted leading-relaxed">
          <span className="font-semibold text-body">Modelos anatómicos: Open 3D Model (CC BY-SA 4.0).</span>{' '}
          Texturas musculares: CC BY-NC-SA 4.0 (Claudia Krebs et al., University of British Columbia).
          Departamentos de Anatomía: Leiden, Utrecht, Maastricht, Leuven, Amsterdam, Nijmegen y Gent.
          Basado en BodyParts3D y Z-Anatomy.
        </div>
      </footer>
    </div>
  )
}
