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
  CaretRight, Tag, FlipHorizontal, MapPin, ArrowsClockwise, ArrowCounterClockwise,
  Scissors, Selection, type Icon,
} from '@phosphor-icons/react'
import {
  anatomyModels, anatomyRegions, anatomyModelById, availableModelCount,
  type AnatomyModel,
} from '../data/anatomyModels'
import { buildStructures, toSpanish, sideOf, groupOf, GROUP_LABEL } from '../data/anatomyStructures'
import { anatomyParts, type AnatomyPart } from '../data/anatomy-3d-data'
import { AnatomyModelViewer, type ClipConfig, type ClipAxis } from '../components/AnatomyModelViewer'

/* Best-effort map from a GLB node name (Terminologia Anatomica) to a rich
 * AnatomyPart record (función / descripción). First match wins; many bones
 * therefore inherit their regional part's description. */
const PART_MATCHERS: [RegExp, string][] = [
  [/skull|cranium|frontal|parietal|occipital|temporal|sphenoid|ethmoid|maxilla|mandible|nasal bone|zygomat|palatine|vomer/i, 'craneo'],
  [/vertebra|atlas|axis|sacrum|coccyx|spine|spinal/i, 'columna-vertebral'],
  [/\brib\b|costal|sternum|manubrium|xiphoid/i, 'caja-toracica'],
  [/humerus/i, 'humero'],
  [/femur/i, 'femur'],
  [/biceps/i, 'biceps'],
  [/quadricep|rectus femoris|vastus/i, 'cuadriceps'],
  [/diaphragm/i, 'diafragma'],
  [/trapezius/i, 'trapecio'],
  [/gastrocnemius/i, 'gastrocnemio'],
  [/cerebr|brain/i, 'cerebro'],
  [/heart|cardiac/i, 'corazon'],
  [/lung|pulmon/i, 'pulmones'],
  [/liver|hepat/i, 'higado'],
  [/stomach|gastr(?!ocnemius)/i, 'estomago'],
]
function matchPart(node: string): AnatomyPart | null {
  for (const [re, id] of PART_MATCHERS) if (re.test(node)) return anatomyParts[id] ?? null
  return null
}
const SIDE_LABEL: Record<string, string> = { right: 'Derecho', left: 'Izquierdo', central: 'Central / medial' }

/* Round icon button for the floating control bar. Styling + focus ring live in
 * the .stage-tool CSS (index.css); state is exposed via aria-pressed. */
function ToolBtn({ icon: IconCmp, label, active = false, disabled = false, onClick }: {
  icon: Icon
  label: string
  active?: boolean
  disabled?: boolean
  onClick: () => void
}) {
  return (
    <button type="button" onClick={onClick} disabled={disabled}
      aria-label={label} aria-pressed={active} title={label} className="stage-tool">
      <IconCmp weight={active ? 'fill' : 'regular'} className="w-[18px] h-[18px]" />
    </button>
  )
}

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
  const [showDots, setShowDots] = useState(true)
  const [mirror, setMirror] = useState(false)
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set())
  const [autoRotate, setAutoRotate] = useState(false)
  const [isolated, setIsolated] = useState(false)
  const [clip, setClip] = useState<ClipConfig>({ enabled: false, axis: 'x', pos: 0 })
  const [cutOpen, setCutOpen] = useState(false)
  const [resetSignal, setResetSignal] = useState(0)

  // prefers-reduced-motion → never auto-rotate (respected live).
  const [reducedMotion, setReducedMotion] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const on = () => setReducedMotion(mq.matches)
    on(); mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])

  // Reset everything when the model changes
  useEffect(() => {
    setNames([]); setHidden(new Set()); setSelected(null)
    setShowLabels(false); setShowDots(true); setMirror(false); setOpenGroups(new Set())
    setAutoRotate(false); setIsolated(false); setClip({ enabled: false, axis: 'x', pos: 0 }); setCutOpen(false)
  }, [active.id])

  // Keep "isolate" in sync with the current selection.
  useEffect(() => {
    if (!isolated) return
    if (!selected) { setIsolated(false); setHidden(new Set()); return }
    setHidden(new Set(names.filter(n => n !== selected)))
  }, [isolated, selected, names])

  const onStructures = useCallback((n: string[]) => setNames(n), [])
  const { groups, bilateral } = useMemo(() => buildStructures(names), [names])

  // Editorial "ficha" data for the selected structure.
  const part = selected ? matchPart(selected) : null
  const regionLabel = anatomyRegions.find(r => r.id === active.region)?.nombre ?? '—'
  const groupLabel = selected ? (GROUP_LABEL[groupOf(selected)] ?? 'Otros') : '—'
  const sideLabel = selected ? SIDE_LABEL[sideOf(selected)] : '—'

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
  const showAll = () => { setIsolated(false); setHidden(new Set()) }
  const hideAll = () => setHidden(new Set(names))
  const toggleIsolate = () => {
    if (!selected) return
    setIsolated(v => { if (v) setHidden(new Set()); return !v })
  }
  const resetView = () => {
    setIsolated(false); setHidden(new Set())
    setClip({ enabled: false, axis: 'x', pos: 0 }); setCutOpen(false)
    setResetSignal(s => s + 1)
  }
  const setClipAxis = (axis: ClipAxis) => setClip(c => ({ ...c, axis }))
  const setClipPos = (pos: number) => setClip(c => ({ ...c, pos }))
  const toggleCut = () => {
    setClip(c => ({ ...c, enabled: !c.enabled }))
    setCutOpen(o => !clip.enabled ? true : !o)
  }
  const toggleOpen = (id: string) => setOpenGroups(prev => {
    const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next
  })

  return (
    <div className="flex-1 flex flex-col bg-app min-w-0">
      {/* ── Breadcrumb ──────────────────────────────────────── */}
      <div className="border-b border-line bg-surface">
        <div className="max-w-[1500px] mx-auto w-full px-4 sm:px-6 h-12 flex items-center gap-2 catalog-code">
          <Link to="/estudio" className="hover:text-primary-ink transition-colors">Estudio</Link>
          <span className="text-faint">/</span>
          <Link to="/estudio/archivo/aparatos-y-sistemas" className="hover:text-primary-ink transition-colors hidden sm:inline">
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
                      ? <span className="text-[0.625rem] text-faint flex-shrink-0">Próximo</span>
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
        <div className="relative min-w-0 rounded-xl overflow-hidden"
             style={{
               border: '1px solid var(--stage-line)',
               background: 'radial-gradient(115% 85% at 50% 38%, var(--stage-bg-2) 0%, var(--stage-bg) 68%)',
             }}>
          {active.status === 'available' ? (
            <>
              <AnatomyModelViewer
                url={active.glb}
                hidden={hidden}
                showLabels={showLabels}
                showDots={showDots}
                mirror={mirror}
                selected={selected}
                clip={clip}
                autoRotate={autoRotate && !reducedMotion}
                resetSignal={resetSignal}
                onSelect={setSelected}
                onStructures={onStructures}
              />

              {/* Corte: selector de eje + slider (aparece con el corte activo) */}
              {clip.enabled && cutOpen && (
                <div role="group" aria-label="Plano de corte"
                     className="stage-pop absolute left-1/2 -translate-x-1/2 bottom-[4.25rem] z-20 flex flex-col gap-2 px-3 py-2.5"
                     style={{ width: 'min(92%, 320px)' }}>
                  <div className="flex items-center justify-between">
                    <span className="label-mono" style={{ color: 'var(--stage-muted)' }}>Plano de corte</span>
                  </div>
                  <div role="group" aria-label="Eje del corte" className="grid grid-cols-3 gap-1">
                    {([['x', 'Sagital'], ['z', 'Coronal'], ['y', 'Axial']] as [ClipAxis, string][]).map(([ax, lbl]) => (
                      <button key={ax} type="button" onClick={() => setClipAxis(ax)} aria-pressed={clip.axis === ax}
                        className="stage-seg" data-on={clip.axis === ax}>
                        {lbl}
                      </button>
                    ))}
                  </div>
                  <input type="range" min={-1} max={1} step={0.02} value={clip.pos}
                    onChange={e => setClipPos(parseFloat(e.target.value))}
                    aria-label="Posición del plano de corte" className="stage-range" />
                </div>
              )}

              {/* Barra de controles flotante */}
              <div role="toolbar" aria-label="Controles del visor 3D" aria-orientation="horizontal"
                className="stage-bar absolute left-1/2 -translate-x-1/2 bottom-3 z-10 flex items-center gap-0.5 px-1.5 py-1">
                <ToolBtn icon={ArrowsClockwise} label={reducedMotion ? 'Auto-rotar (desactivado por «reduce motion»)' : 'Auto-rotar'}
                  active={autoRotate && !reducedMotion} disabled={reducedMotion} onClick={() => setAutoRotate(v => !v)} />
                <ToolBtn icon={ArrowCounterClockwise} label="Reiniciar vista" onClick={resetView} />
                <ToolBtn icon={Selection} label="Aislar estructura seleccionada" active={isolated} disabled={!selected} onClick={toggleIsolate} />
                <ToolBtn icon={Scissors} label="Corte / sección" active={clip.enabled} onClick={toggleCut} />
                <span className="stage-bar-sep" aria-hidden="true" />
                <ToolBtn icon={MapPin} label="Puntos interactivos" active={showDots} onClick={() => setShowDots(v => !v)} />
                <ToolBtn icon={Tag} label="Etiquetas en escena" active={showLabels} onClick={() => setShowLabels(v => !v)} />
                {bilateral && (
                  <ToolBtn icon={FlipHorizontal} label="Espejo (mostrar lado contrario)" active={mirror} onClick={() => setMirror(v => !v)} />
                )}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center text-center gap-2 px-6"
                 style={{ height: 'min(80vh, 760px)', color: 'var(--stage-ink)' }}>
              <Cube className="w-8 h-8 opacity-50" />
              <p className="text-sm font-medium">{active.nombre}</p>
              <p className="text-xs" style={{ color: 'var(--stage-muted)', maxWidth: 320 }}>
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
              <h1 className="text-base font-semibold text-ink m-0 leading-tight"
                  style={{ fontFamily: 'var(--font-voice)' }}>{active.nombre}</h1>
            </div>
            <p className="catalog-code mb-2" style={{ textTransform: 'none' }}>{active.nombre_en}</p>
            <p className="text-sm text-body leading-relaxed">{active.description}</p>
          </div>

          {/* ── Editorial "ficha" of the selected structure ─────── */}
          {active.status === 'available' && (
            selected ? (
              <div className="flex flex-col gap-2.5">
                {/* Datos clave */}
                <div className="card p-4">
                  <p className="label-mono mb-2">Datos clave</p>
                  <p className="text-lg font-semibold text-ink leading-snug break-words"
                     style={{ fontFamily: 'var(--font-voice)' }}>{toSpanish(selected)}</p>
                  <p className="catalog-code mb-3" style={{ textTransform: 'none' }}>{selected}</p>
                  <dl className="grid grid-cols-[5rem_1fr] gap-x-3 gap-y-1.5 text-xs">
                    {part && (<><dt className="text-muted">Sistema</dt><dd className="text-body font-medium">{part.sistema}</dd></>)}
                    <dt className="text-muted">Región</dt><dd className="text-body font-medium">{regionLabel}</dd>
                    <dt className="text-muted">Grupo</dt><dd className="text-body font-medium">{groupLabel}</dd>
                    <dt className="text-muted">Lado</dt><dd className="text-body font-medium">{sideLabel}</dd>
                  </dl>
                </div>

                {/* Función */}
                {part && (
                  <div className="card p-4">
                    <p className="label-mono mb-2">Función</p>
                    <p className="text-xs text-body leading-relaxed mb-2.5">{part.descripcion}</p>
                    <ul className="flex flex-col gap-1.5">
                      {part.funcionesClave.map((f, i) => (
                        <li key={i} className="text-xs text-body leading-snug flex gap-2">
                          <span className="text-primary mt-[3px] flex-shrink-0">●</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Link to="/terminologia"
                  className="flex items-center gap-1.5 catalog-code hover:text-primary-ink transition-colors">
                  <BookOpenText weight="fill" className="w-3.5 h-3.5" />
                  Buscar «{toSpanish(selected)}» en terminología
                </Link>
              </div>
            ) : (
              <div className="card p-4">
                <p className="label-mono mb-1.5">Estructura seleccionada</p>
                <p className="text-xs text-muted flex items-center gap-1.5">
                  <CursorClick className="w-3.5 h-3.5 flex-shrink-0" />
                  Haz clic en una estructura o en un punto para ver su ficha.
                </p>
              </div>
            )
          )}

          {/* Structure controls + accordion */}
          {active.status === 'available' && groups.length > 0 && (
            <div className="card p-3 flex flex-col gap-2 lg:max-h-[58vh] lg:overflow-y-auto">
              <div className="flex items-center justify-between catalog-code">
                <span>Capas</span>
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
                                  {it.es}
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
          <Link to="/estudio/archivo/aparatos-y-sistemas" className="flex items-center gap-1.5 catalog-code hover:text-primary-ink transition-colors">
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
