/* Página del visor 3D anatómico — ruta /anatomia-3d */

import { useState, lazy, Suspense } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowLeft, BookOpenText } from '@phosphor-icons/react'
import type { SystemFilter } from '../data/anatomy-3d-data'

// Carga diferida del visor R3F (~125 KB gzip para three + ~40 KB R3F stack)
const AnatomyViewerR3F = lazy(() =>
  import('../components/viewer/AnatomyViewerR3F').then(m => ({ default: m.AnatomyViewerR3F }))
)

// Mapeo de sistema corporal (URL param) al filtro del visor
const SISTEMA_TO_FILTER: Record<string, SystemFilter> = {
  musculoesqueletico: 'esqueletico',
  respiratorio: 'todos',
  cardiovascular: 'organos',
  urinario: 'organos',
  digestivo: 'organos',
  endocrino: 'organos',
  nervioso: 'organos',
}

export function Anatomy3D() {
  const [searchParams] = useSearchParams()
  const initialSistema = searchParams.get('sistema')
  const initialFilter: SystemFilter = initialSistema
    ? (SISTEMA_TO_FILTER[initialSistema] ?? 'todos')
    : 'todos'

  const [selectedPartId, setSelectedPartId] = useState<string | null>(null)

  return (
    <div className="flex flex-col flex-1 overflow-hidden" style={{ background: '#0d0d0d' }}>

      {/* ── Barra superior mínima ─────────────────────────────── */}
      <div className="flex items-center gap-3 px-4 py-2.5 flex-shrink-0"
        style={{
          background: 'rgba(15,15,20,0.9)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
        <Link
          to="/"
          className="flex items-center gap-1.5 transition-colors"
          style={{ color: '#888', fontSize: '13px', fontFamily: 'IBM Plex Mono, monospace' }}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
          <span className="hidden sm:inline">MedCore</span>
        </Link>

        <span style={{ color: '#333', fontSize: '12px' }}>/</span>

        <span style={{
          color: '#4fc3f7',
          fontSize: '12px',
          fontFamily: 'IBM Plex Mono, monospace',
          fontWeight: 600,
        }}>
          Anatomía 3D
        </span>

        <div className="flex-1" />

        {/* Cross-link a terminología si hay estructura seleccionada */}
        {selectedPartId && (
          <Link
            to={`/terminologia`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all"
            style={{
              background: 'rgba(79,195,247,0.08)',
              border: '1px solid rgba(79,195,247,0.2)',
              color: '#4fc3f7',
              fontSize: '11px',
              fontFamily: 'IBM Plex Mono, monospace',
            }}
          >
            <BookOpenText weight="fill" className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Terminología</span>
          </Link>
        )}
      </div>

      {/* ── Canvas R3F (ocupa todo el espacio disponible) ─────── */}
      <div className="flex-1 relative overflow-hidden">
        <Suspense fallback={
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3"
            style={{ background: '#0d0d0d' }}>
            <div className="w-12 h-12 rounded-full border-4 border-sky-900 border-t-sky-400 animate-spin" />
            <p style={{ color: '#4fc3f7', fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px' }}>
              Cargando visor 3D...
            </p>
          </div>
        }>
          <AnatomyViewerR3F
            activeFilter={initialFilter}
            onPartSelected={setSelectedPartId}
          />
        </Suspense>
      </div>
    </div>
  )
}
