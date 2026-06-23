/* Visor Anatómico 3D — ruta /anatomia-3d
 * Option A: embeds the AnatomyTOOL Open 3D Model viewer (GPL3) in an iframe,
 * wrapped in MedCore chrome. Reads ?model= to select the loaded model.
 * Model: Open 3D Model (CC BY-SA 4.0) — see attribution footer.
 */
import { useSearchParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowSquareOut, BookOpenText, Cube } from '@phosphor-icons/react'

const VIEWER_BASE = 'https://caskanatomy.info/open3dviewer/'

type ModelId = 'overview-skeleton' | 'upper-limb' | 'lower-limb' | 'vertebrae'

const MODELS: { id: ModelId; label: string; icon: string; desc: string; terminologia?: string }[] = [
  {
    id: 'overview-skeleton',
    label: 'Esqueleto completo',
    icon: '🦴',
    desc: 'Vista general del esqueleto humano, con los huesos principales nombrados según la Terminologia Anatomica.',
    terminologia: 'locomotor',
  },
  {
    id: 'upper-limb',
    label: 'Miembro superior',
    icon: '💪',
    desc: 'Cintura escapular y miembro superior: clavícula, escápula, húmero, radio, cúbito, carpo, metacarpo y falanges.',
    terminologia: 'locomotor',
  },
  {
    id: 'lower-limb',
    label: 'Miembro inferior',
    icon: '🦵',
    desc: 'Cintura pélvica y miembro inferior: coxal, fémur, rótula, tibia, peroné, tarso, metatarso y falanges.',
    terminologia: 'locomotor',
  },
  {
    id: 'vertebrae',
    label: 'Vértebras',
    icon: '🧬',
    desc: 'Columna vertebral: vértebras cervicales, torácicas y lumbares, sacro y cóccix, con sus accidentes óseos.',
    terminologia: 'locomotor',
  },
]

export function Anatomy3D() {
  const [params, setParams] = useSearchParams()
  const raw = params.get('model') as ModelId | null
  const active = MODELS.find(m => m.id === raw) ?? MODELS[0]

  const select = (id: ModelId) => setParams({ model: id }, { replace: true })

  return (
    <div className="flex-1 flex flex-col bg-app min-w-0">

      {/* ── Breadcrumb header ───────────────────────────────── */}
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

      {/* ── Layout: sidebar · viewer · info panel ───────────── */}
      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 py-4 grid gap-4
                      grid-cols-1 lg:grid-cols-[180px_1fr_240px] flex-1">

        {/* Left — model selector */}
        <aside className="min-w-0">
          <p className="label-mono mb-2">Modelos</p>
          <div className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-1">
            {MODELS.map(m => {
              const on = m.id === active.id
              return (
                <button
                  key={m.id}
                  onClick={() => select(m.id)}
                  aria-pressed={on}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium flex-shrink-0 text-left
                    transition-colors border w-full
                    ${on
                      ? 'bg-primary-tint border-primary-200 text-primary-ink'
                      : 'bg-surface border-line text-body hover:border-line-strong'}`}
                >
                  <span aria-hidden>{m.icon}</span>
                  <span className="whitespace-nowrap lg:whitespace-normal">{m.label}</span>
                </button>
              )
            })}
          </div>
        </aside>

        {/* Center — the embedded viewer */}
        <div className="min-w-0 rounded-lg overflow-hidden border border-stage-border"
             style={{ background: 'var(--c-stage)' }}>
          <iframe
            key={active.id}
            src={`${VIEWER_BASE}?model=${active.id}`}
            title="Visor Anatómico 3D — Open 3D Model"
            allow="fullscreen; xr-spatial-tracking"
            className="w-full block"
            style={{ height: 'min(80vh, 760px)', border: 'none' }}
          />
        </div>

        {/* Right — info panel */}
        <aside className="min-w-0">
          <div className="card p-4">
            <div className="flex items-center gap-2 mb-2">
              <Cube weight="fill" className="w-4 h-4 text-primary" />
              <h2 className="text-base font-semibold text-ink m-0">{active.label}</h2>
            </div>
            <p className="catalog-code mb-3">OPEN3D · {active.id}</p>
            <p className="text-sm text-body leading-relaxed mb-4">{active.desc}</p>

            <Link
              to={`/terminologia${active.terminologia ? `?sistema=${active.terminologia}` : ''}`}
              className="btn-ghost w-full justify-center"
            >
              <BookOpenText weight="fill" className="w-4 h-4" />
              Ver terminología relacionada
            </Link>

            <a
              href={`${VIEWER_BASE}?model=${active.id}`}
              target="_blank" rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-1.5 text-sm text-muted hover:text-primary-ink transition-colors"
            >
              Abrir en pantalla completa <ArrowSquareOut className="w-3.5 h-3.5" />
            </a>
          </div>

          <Link to="/pai/aparatos-y-sistemas"
                className="mt-3 flex items-center gap-1.5 catalog-code hover:text-primary-ink transition-colors">
            <ArrowLeft weight="bold" className="w-3.5 h-3.5" /> Volver al módulo
          </Link>
        </aside>
      </div>

      {/* ── Attribution footer (required by CC BY-SA 4.0) ───── */}
      <footer className="border-t border-line bg-surface-2 mt-auto">
        <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 py-4 text-xs text-muted leading-relaxed">
          <span className="font-semibold text-body">Modelo anatómico 3D: Open 3D Model.</span>{' '}
          Departamentos de Anatomía de las Universidades de Leiden, Utrecht, Maastricht, Leuven,
          Amsterdam, Nijmegen y Gent. Licencia: Creative Commons CC&nbsp;BY-SA&nbsp;4.0.
          Basado en BodyParts3D y Z-Anatomy.
        </div>
      </footer>
    </div>
  )
}
