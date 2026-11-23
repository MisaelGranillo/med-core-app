import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { ApoyoBanner } from './components/ApoyoBanner'
import { useSettings, scaleValue, useThemeSync } from './store/useSettings'
import { lazyWithRetry } from './utils/lazyWithRetry'

/* Routes are lazy-loaded so each page + its heavy data (topics, quizzes,
 * anatomy meshes) only ships when navigated to — keeps the initial bundle
 * small for a fast first paint. lazyWithRetry recarga una vez si un chunk
 * falla (p. ej. justo después de un deploy). */
const named = lazyWithRetry

const Home         = named(() => import('./pages/Home'),          'Home')
const Topic        = named(() => import('./pages/Topic'),         'Topic')
const Quiz         = named(() => import('./pages/Quiz'),          'Quiz')
const QuizCatalog  = named(() => import('./pages/QuizCatalog'),   'QuizCatalog')
const Search       = named(() => import('./pages/Search'),        'Search')
const Progress     = named(() => import('./pages/Progress'),      'Progress')
const Anatomy      = named(() => import('./pages/Anatomy'),       'Anatomy')
const Terminologia = named(() => import('./pages/Terminologia'),  'Terminologia')
const MedEn        = named(() => import('./pages/MedEn'),         'MedEn')
const Ajustes      = named(() => import('./pages/Ajustes'),       'Ajustes')
const Apoya        = named(() => import('./pages/Apoya'),         'Apoya')
const NotFound     = named(() => import('./pages/NotFound'),      'NotFound')
const Plan         = named(() => import('./pages/Plan'),          'Plan')
const SubjectDetail= named(() => import('./pages/SubjectDetail'), 'SubjectDetail')
const Temas        = named(() => import('./pages/Temas'),         'Temas')
const Atlas        = named(() => import('./pages/Atlas'),         'Atlas')
const AtlasTopic   = named(() => import('./pages/AtlasTopic'),    'AtlasTopic')
const Libreria     = named(() => import('./pages/Libreria'),      'Libreria')
const Patologias   = named(() => import('./pages/Patologias'),    'Patologias')
const PatologiaDetalle = named(() => import('./pages/Patologias'), 'PatologiaDetalle')
// Taller de autoestudio estratégico: cada página del taller es su propio chunk.
const TallerLayout      = named(() => import('./pages/taller/TallerLayout'),      'TallerLayout')
const TallerInicio      = named(() => import('./pages/taller/TallerInicio'),      'TallerInicio')
const TallerDescargas   = named(() => import('./pages/taller/TallerDescargas'),   'TallerDescargas')
const TallerSemana      = named(() => import('./pages/taller/TallerSemana'),      'TallerSemana')
const TallerPerfil      = named(() => import('./pages/taller/TallerPerfil'),      'TallerPerfil')
const TallerPlanificador= named(() => import('./pages/taller/TallerPlanificador'),'TallerPlanificador')
const TallerMatriz      = named(() => import('./pages/taller/TallerMatriz'),      'TallerMatriz')
const TallerInstrucciones = named(() => import('./pages/taller/TallerInstrucciones'), 'TallerInstrucciones')
const TallerPrompts     = named(() => import('./pages/taller/TallerPrompts'),     'TallerPrompts')
const TallerMarkdown    = named(() => import('./pages/taller/TallerMarkdown'),    'TallerMarkdown')
const TallerGuia        = named(() => import('./pages/taller/TallerGuia'),        'TallerGuia')
const TallerRevision    = named(() => import('./pages/taller/TallerRevision'),    'TallerRevision')

/* Redirige /modulos/:id (LMGC, id en mayúsculas) al nuevo /plan/:subjectId
 * (id en minúsculas), preservando los enlaces antiguos. */
function ModuloRedirect() {
  const { id } = useParams<{ id: string }>()
  return <Navigate to={`/plan/${(id ?? '').toLowerCase()}`} replace />
}

/* Suspense fallback while a route chunk loads */
function RouteFallback() {
  return (
    <div className="flex-1 flex items-center justify-center py-24">
      <div className="w-9 h-9 rounded-full border-4 border-line border-t-primary animate-spin" />
    </div>
  )
}

// Error boundary — muestra el error en pantalla en vez de página en blanco
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: Error | null }
> {
  state: { error: Error | null } = { error: null }

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: '2rem', fontFamily: 'monospace', maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ color: '#dc2626', fontSize: '1.5rem', marginBottom: '1rem' }}>
            Error de renderizado — MedCore
          </h1>
          <pre style={{
            background: '#fef2f2', border: '1px solid #fecaca',
            borderRadius: '8px', padding: '1rem',
            fontSize: '12px', overflow: 'auto', whiteSpace: 'pre-wrap',
            color: '#7f1d1d',
          }}>
            {this.state.error.message}
            {'\n\n'}
            {this.state.error.stack}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}

export default function App() {
  // Aplica el tamaño de texto persistido a --fs-scale en cada carga y cambio.
  const fontScale = useSettings(s => s.fontScale)
  useEffect(() => {
    document.documentElement.style.setProperty('--fs-scale', String(scaleValue(fontScale)))
  }, [fontScale])
  // Aplica el tema (Sistema · Claro · Oscuro) elegido en Ajustes o en la barra.
  useThemeSync()

  return (
    <ErrorBoundary>
      <BrowserRouter>
        {/* pb-16 md:pb-0 deja espacio para la barra de navegación inferior en móvil */}
        <div className="flex flex-col min-h-[100dvh] pb-[calc(4rem+env(safe-area-inset-bottom,0px))] md:pb-0">
          <Navbar />
          <ApoyoBanner />
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/topic/:id" element={<Topic />} />
              <Route path="/quiz" element={<QuizCatalog />} />
              <Route path="/quiz/:id" element={<Quiz />} />
              <Route path="/search" element={<Search />} />
              <Route path="/progress" element={<Progress />} />
              {/* Anatomía — sección núcleo: hub 2D + 3D */}
              <Route path="/anatomia" element={<Anatomy />} />
              <Route path="/anatomia-3d" element={<Anatomy />} />
              {/* MedLex — terminología (deep-linkable) */}
              <Route path="/terminologia" element={<Terminologia />} />
              <Route path="/terminologia/:termId" element={<Terminologia />} />
              {/* MedEN — vocabulario inglés↔español de Inglés Médico */}
              <Route path="/vocabulario" element={<MedEn />} />
              {/* Ajustes — preferencias (tamaño de texto) */}
              <Route path="/ajustes" element={<Ajustes />} />
              <Route path="/apoya" element={<Apoya />} />
              {/* Taller de autoestudio estratégico */}
              <Route path="/taller" element={<TallerLayout />}>
                <Route index element={<TallerInicio />} />
                <Route path="descargas" element={<TallerDescargas />} />
                <Route path="semana" element={<TallerSemana />} />
                <Route path="perfil" element={<TallerPerfil />} />
                <Route path="planificador" element={<TallerPlanificador />} />
                <Route path="matriz" element={<TallerMatriz />} />
                <Route path="instrucciones" element={<TallerInstrucciones />} />
                <Route path="prompts" element={<TallerPrompts />} />
                <Route path="markdown" element={<TallerMarkdown />} />
                <Route path="revision" element={<TallerRevision />} />
                <Route path="guia" element={<TallerGuia />} />
              </Route>
              {/* Plan de estudios (capa curricular enchufable) */}
              <Route path="/plan" element={<Plan />} />
              <Route path="/plan/:subjectId" element={<SubjectDetail />} />
              {/* Redirecciones legacy → /plan (no romper enlaces existentes) */}
              <Route path="/lmgc" element={<Navigate to="/plan" replace />} />
              <Route path="/modulos" element={<Navigate to="/plan" replace />} />
              <Route path="/modulos/:id" element={<ModuloRedirect />} />
              {/* Temas — índice REAL de guías de estudio (topics) */}
              <Route path="/estudio" element={<Temas />} />
              {/* Enlaces antiguos del archivo PAI (retirado en 2026-11) */}
              <Route path="/estudio/*" element={<Navigate to="/estudio" replace />} />
              <Route path="/pai/*" element={<Navigate to="/estudio" replace />} />
              {/* Atlas — Estudio Visual */}
              <Route path="/atlas" element={<Atlas />} />
              <Route path="/atlas/:id" element={<AtlasTopic />} />
              <Route path="/libreria" element={<Libreria />} />
              <Route path="/patologias" element={<Patologias />} />
              <Route path="/patologias/:id" element={<PatologiaDetalle />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
