import React, { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { paiModulos } from './data/pai'
import { useSettings, scaleValue } from './store/useSettings'

/* Routes are lazy-loaded so each page + its heavy data (topics, quizzes,
 * anatomy meshes) only ships when navigated to — keeps the initial bundle
 * small for a fast first paint. */
const named = <T extends Record<string, React.ComponentType<unknown>>>(
  loader: () => Promise<T>, key: keyof T,
) => lazy(() => loader().then(m => ({ default: m[key] })))

const Home         = named(() => import('./pages/Home'),          'Home')
const Topic        = named(() => import('./pages/Topic'),         'Topic')
const Quiz         = named(() => import('./pages/Quiz'),          'Quiz')
const QuizCatalog  = named(() => import('./pages/QuizCatalog'),   'QuizCatalog')
const Search       = named(() => import('./pages/Search'),        'Search')
const Progress     = named(() => import('./pages/Progress'),      'Progress')
const Anatomy      = named(() => import('./pages/Anatomy'),       'Anatomy')
const Terminologia = named(() => import('./pages/Terminologia'),  'Terminologia')
const MedEn        = named(() => import('./pages/MedEn'),         'MedEn')
const NotFound     = named(() => import('./pages/NotFound'),      'NotFound')
const Plan         = named(() => import('./pages/Plan'),          'Plan')
const SubjectDetail= named(() => import('./pages/SubjectDetail'), 'SubjectDetail')
const Temas        = named(() => import('./pages/Temas'),         'Temas')
const Estudio      = named(() => import('./pages/PAI'),           'PAI')
const EstudioModulo= named(() => import('./pages/PAIModulo'),     'PAIModulo')
const EstudioTema  = named(() => import('./pages/PAITema'),       'PAITema')
const Atlas        = named(() => import('./pages/Atlas'),         'Atlas')
const AtlasTopic   = named(() => import('./pages/AtlasTopic'),    'AtlasTopic')

/* Redirige /modulos/:id (LMGC, id en mayúsculas) al nuevo /plan/:subjectId
 * (id en minúsculas), preservando los enlaces antiguos. */
function ModuloRedirect() {
  const { id } = useParams<{ id: string }>()
  return <Navigate to={`/plan/${(id ?? '').toLowerCase()}`} replace />
}

/* Redirige el antiguo espacio /pai/* al nuevo /estudio/*, preservando la
 * ruta restante (slug y temaId). Encadena con los redirects de compatibilidad
 * de abajo: /pai/bioquimica → /estudio/bioquimica → /estudio/archivo/bioquimica. */
function PaiRedirect() {
  const { '*': rest } = useParams()
  return <Navigate to={`/estudio${rest ? `/${rest}` : ''}`} replace />
}

/* Compatibilidad: /estudio/:slug ahora es el índice PAI archivado. Solo se
 * redirige si el slug corresponde a un módulo PAI real; si no, 404 normal
 * (para no capturar rutas inexistentes en silencio). */
function EstudioSlugRedirect() {
  const { slug } = useParams<{ slug: string }>()
  return paiModulos.some(m => m.slug === slug)
    ? <Navigate to={`/estudio/archivo/${slug}`} replace />
    : <NotFound />
}
function EstudioTemaRedirect() {
  const { slug, temaId } = useParams<{ slug: string; temaId: string }>()
  return paiModulos.some(m => m.slug === slug)
    ? <Navigate to={`/estudio/archivo/${slug}/${temaId}`} replace />
    : <NotFound />
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

  return (
    <ErrorBoundary>
      <BrowserRouter>
        {/* pb-16 md:pb-0 deja espacio para la barra de navegación inferior en móvil */}
        <div className="flex flex-col min-h-[100dvh] pb-16 md:pb-0">
          <Navbar />
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
              {/* Plan de estudios (capa curricular enchufable) */}
              <Route path="/plan" element={<Plan />} />
              <Route path="/plan/:subjectId" element={<SubjectDetail />} />
              {/* Redirecciones legacy → /plan (no romper enlaces existentes) */}
              <Route path="/lmgc" element={<Navigate to="/plan" replace />} />
              <Route path="/modulos" element={<Navigate to="/plan" replace />} />
              <Route path="/modulos/:id" element={<ModuloRedirect />} />
              {/* Temas — índice REAL de guías de estudio (topics) */}
              <Route path="/estudio" element={<Temas />} />
              {/* Archivo PAI — guías de admisión, se conservan navegables */}
              <Route path="/estudio/archivo" element={<Estudio />} />
              <Route path="/estudio/archivo/:slug" element={<EstudioModulo />} />
              <Route path="/estudio/archivo/:slug/:temaId" element={<EstudioTema />} />
              {/* Compatibilidad de enlaces antiguos /estudio/:slug → /estudio/archivo/:slug */}
              <Route path="/estudio/:slug" element={<EstudioSlugRedirect />} />
              <Route path="/estudio/:slug/:temaId" element={<EstudioTemaRedirect />} />
              {/* Redirecciones legacy /pai/* → /estudio/* (encadena con lo anterior) */}
              <Route path="/pai/*" element={<PaiRedirect />} />
              {/* Atlas — Estudio Visual */}
              <Route path="/atlas" element={<Atlas />} />
              <Route path="/atlas/:id" element={<AtlasTopic />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
