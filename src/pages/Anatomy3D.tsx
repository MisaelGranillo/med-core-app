/* Visor Anatómico 3D — ruta /anatomia-3d
 * Option B (full parity): self-hosted React Three Fiber viewer with a model
 * browser, per-structure / per-group show-hide, in-scene labels, and sagittal
 * mirroring. ?model={id} selects the model. Registry: data/anatomyModels.ts.
 * Models: Open 3D Model (CC BY-SA 4.0) — see attribution footer.
 */
import { useState, useEffect, useCallback, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import {
  ArrowLeft, ArrowRight, BookOpenText, Cube, CursorClick, Eye, EyeSlash,
  CaretRight, Tag, FlipHorizontal,
} from '@phosphor-icons/react'
import {
  anatomyModels, anatomyRegions, anatomyModelById, availableModelCount,
  type AnatomyModel,
} from '../data/anatomyModels'
import { buildStructures } from '../data/anatomyStructures'
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

  // Per-model viewer state
  const [names, setNames] = useState<string[]>([])
  const [hidden, setHidden] = useState<Set<string>>(new Set())
  const [selected, setSelected] = useState<string | null>(null)
  const [showLabels, setShowLabels] = useState(false)
  const [mirror, setMirror] = useState(false)
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set())

  // Reset everything when the model changes
  useEffect(() => {
    setNames([]); setHidden(new Set()); setSelected(null)
    setShowLabels(false); setMirror(false); setOpenGroups(new Set())
  }, [active.id])

  const onStructures = useCallback((n: string[]) => setNames(n), [])
  const { groups, bilateral } = useMemo(() => buildStructures(names), [names])

  const select = (id: string) => setParams({ model: id }, { replace: true })
  const shown = anatomyModels.filter(m => region === 'all' || m.region === region)

  const toggle = (name: string) => setHidden(prev => {
    const next = new Set(prev)
    next.has(name) ? next.delete(name) : next.add(name)
    return next
  })
  const toggleGroup = (items: { name: string }[]) => setHidden(prev => {
    const next = new Set(prev)
    const allHidden = items.every(i => next.has(i.name))
    items.forEach(i => allHidden ? next.delete(i.name) : next.add(i.name))
    return next
  })
  const showAll = () => setHidden(new Set())
  const hideAll = () => setHidden(new Set(names))
  const toggleOpen = (id: string) => setOpenGroups(prev => {
    const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next
  })

  return (
    <div className="flex-1 flex flex-col bg-app min-w-0">
      {/* ── Breadcrumb ──────────────────────────────────────── */}
      <div className="border-b border-line bg-surface">
        <div className="max-w-[1500px] mx-auto w-full px-4 sm:px-6 h-12 flex items-center gap-2 catalog-code">
          <Link to="/pai" className="hover:text-primary-ink transition-colors">PAI</Link>
          <span className="text-faint">/</span>
          <Link to="/pai/aparatos-y-sistemas" className="hover:text-primary-ink transition-colors hidden sm:inline">
            Aparatos y Sistemas
          </Link>
          <span className="text-faint hidden sm:inline">/</span>
          <span className="text-ink">Anatomía 3D</span>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto w-full px-4 sm:px-6 py-4 grid gap-4
                      grid-cols-1 lg:grid-cols-[230px_1fr_300px] flex-1">

        {/* ── Model browser (left) ──────────────────────────── */}
        <aside className="min-w-0 flex flex-col gap-3">
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
            {anatomyRegions.map(r => (
              <button key={r.id} onClick={() => setRegion(r.id)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap flex-shrink-0 border transition-colors
                  ${region === r.id ? 'bg-primary-tint border-primary-200 text-primary-ink'
                                    : 'bg-surface border-line text-muted hover:border-line-strong'}`}>
                {r.nombre}
              </button>
            ))}
          </div>
          <p className="label-mono">{availableModelCount} modelos disponibles</p>
          <div className="flex flex-col gap-1.5 lg:max-h-[70vh] lg:overflow-y-auto pr-0.5">
            {shown.map(m => {
              const on = m.id === active.id
              const disabled = m.status !== 'available'
              return (
                <button key={m.id} onClick={() => !disabled && select(m.id)} disabled={disabled} aria-pressed={on}
                  className={`text-left rounded-md border px-3 py-2 transition-colors
                    ${on ? 'border-primary-200 bg-primary-tint' : 'border-line bg-surface hover:border-line-strong'}
                    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
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
            <AnatomyModelViewer
              url={active.glb}
              hidden={hidden}
              showLabels={showLabels}
              mirror={mirror}
              selected={selected}
              onSelect={setSelected}
              onStructures={onStructures}
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center gap-2 px-6"
                 style={{ height: 'min(80vh, 760px)', color: 'var(--c-stage-text)' }}>
              <Cube className="w-8 h-8 opacity-50" />
              <p className="text-sm font-medium">{active.nombre}</p>
              <p className="text-xs" style={{ color: 'var(--c-stage-muted)', maxWidth: 320 }}>
                Este modelo aún no está disponible en la fuente Open 3D Model. Selecciona otro modelo.
              </p>
            </div>
          )}
        </div>

        {/* ── Control panel (right) ─────────────────────────── */}
        <aside className="min-w-0 flex flex-col gap-3">
          <div className="card p-4">
            <div className="flex items-center gap-2 mb-1">
              <Cube weight="fill" className="w-4 h-4 text-primary" />
              <h1 className="text-base font-semibold text-ink m-0 leading-tight">{active.nombre}</h1>
            </div>
            <p className="catalog-code mb-2" style={{ textTransform: 'none' }}>{active.nombre_en}</p>
            <p className="text-sm text-body leading-relaxed mb-3">{active.description}</p>

            {active.status === 'available' && (
              <div className="rounded-md border border-line bg-surface-2 p-3">
                <p className="catalog-code mb-1">Estructura seleccionada</p>
                {selected
                  ? <p className="text-sm font-medium text-primary-ink break-words">{selected}</p>
                  : <p className="text-xs text-muted flex items-center gap-1.5"><CursorClick className="w-3.5 h-3.5" /> Haz clic en una estructura</p>}
              </div>
            )}
          </div>

          {/* Structure controls + accordion */}
          {active.status === 'available' && groups.length > 0 && (
            <div className="card p-3 flex flex-col gap-2 lg:max-h-[58vh] lg:overflow-y-auto">
              <div className="flex items-center gap-1.5 flex-wrap">
                <button onClick={() => setShowLabels(v => !v)}
                  className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md border transition-colors
                    ${showLabels ? 'bg-primary-tint border-primary-200 text-primary-ink' : 'bg-surface border-line text-muted hover:border-line-strong'}`}>
                  <Tag weight={showLabels ? 'fill' : 'regular'} className="w-3.5 h-3.5" /> Etiquetas
                </button>
                {bilateral && (
                  <button onClick={() => setMirror(v => !v)}
                    className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md border transition-colors
                      ${mirror ? 'bg-primary-tint border-primary-200 text-primary-ink' : 'bg-surface border-line text-muted hover:border-line-strong'}`}
                    title="Reflejar las estructuras del lado derecho para mostrar el izquierdo">
                    <FlipHorizontal weight={mirror ? 'fill' : 'regular'} className="w-3.5 h-3.5" /> Espejo
                  </button>
                )}
              </div>
              <div className="flex items-center justify-between catalog-code">
                <span>Estructuras</span>
                <span className="flex gap-2">
                  <button onClick={showAll} className="hover:text-primary-ink transition-colors">Mostrar todo</button>
                  <button onClick={hideAll} className="hover:text-primary-ink transition-colors">Ocultar todo</button>
                </span>
              </div>

              <div className="flex flex-col gap-0.5">
                {groups.map(g => {
                  const allHidden = g.items.every(i => hidden.has(i.name))
                  const open = openGroups.has(g.id)
                  return (
                    <div key={g.id} className="border-b border-line/60 last:border-0">
                      <div className="flex items-center gap-1.5 py-1.5">
                        <button onClick={() => toggleGroup(g.items)} className="text-muted hover:text-primary-ink transition-colors flex-shrink-0"
                          title={allHidden ? 'Mostrar grupo' : 'Ocultar grupo'}>
                          {allHidden ? <EyeSlash className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                        <button onClick={() => toggleOpen(g.id)} className="flex items-center gap-1 flex-1 min-w-0 text-left">
                          <CaretRight weight="bold" className={`w-3 h-3 text-faint transition-transform flex-shrink-0 ${open ? 'rotate-90' : ''}`} />
                          <span className={`text-sm font-medium truncate ${allHidden ? 'text-faint' : 'text-ink'}`}>{g.label}</span>
                          <span className="catalog-code flex-shrink-0">{g.items.length}</span>
                        </button>
                      </div>
                      {open && (
                        <ul className="pb-1 pl-6 flex flex-col gap-0.5">
                          {g.items.map(it => {
                            const isHidden = hidden.has(it.name)
                            const isSel = selected === it.name
                            return (
                              <li key={it.name} className="flex items-center gap-1.5">
                                <button onClick={() => toggle(it.name)} className="text-muted hover:text-primary-ink transition-colors flex-shrink-0">
                                  {isHidden ? <EyeSlash className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                                </button>
                                <button onClick={() => setSelected(it.name)}
                                  className={`text-left text-xs leading-snug truncate flex-1 transition-colors
                                    ${isSel ? 'text-primary-ink font-medium' : isHidden ? 'text-faint' : 'text-body hover:text-primary-ink'}`}
                                  title={it.name}>
                                  {it.clean}{it.side !== 'central' ? <span className="text-faint"> · {it.side === 'right' ? 'der' : 'izq'}</span> : null}
                                </button>
                              </li>
                            )
                          })}
                        </ul>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          <Link to="/terminologia" className="btn-ghost w-full justify-center">
            <BookOpenText weight="fill" className="w-4 h-4" /> Ver terminología relacionada
          </Link>
          <Link to="/pai/aparatos-y-sistemas" className="flex items-center gap-1.5 catalog-code hover:text-primary-ink transition-colors">
            <ArrowLeft weight="bold" className="w-3.5 h-3.5" /> Volver al módulo
          </Link>
        </aside>
      </div>

      {/* ── Attribution footer (CC BY-SA 4.0) ───────────────── */}
      <footer className="border-t border-line bg-surface-2 mt-auto">
        <div className="max-w-[1500px] mx-auto w-full px-4 sm:px-6 py-4 text-xs text-muted leading-relaxed">
          <span className="font-semibold text-body">Modelos anatómicos: Open 3D Model (CC BY-SA 4.0).</span>{' '}
          Texturas musculares: CC BY-NC-SA 4.0 (Claudia Krebs et al., University of British Columbia).
          Departamentos de Anatomía: Leiden, Utrecht, Maastricht, Leuven, Amsterdam, Nijmegen y Gent.
          Basado en BodyParts3D y Z-Anatomy.
        </div>
      </footer>
    </div>
  )
}
