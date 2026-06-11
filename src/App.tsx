import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'

/* Routes are lazy-loaded so each page + its heavy data (topics, quizzes,
 * anatomy meshes) only ships when navigated to — keeps the initial bundle
 * small for a fast first paint. */
const named = <T extends Record<string, React.ComponentType<unknown>>>(
  loader: () => Promise<T>, key: keyof T,
) => lazy(() => loader().then(m => ({ default: m[key] })))

const Home         = named(() => import('./pages/Home'),          'Home')
const Topic        = named(() => import('./pages/Topic'),         'Topic')
const Quiz         = named(() => import('./pages/Quiz'),          'Quiz')
const Search       = named(() => import('./pages/Search'),        'Search')
const Progress     = named(() => import('./pages/Progress'),      'Progress')
const Anatomy3D    = named(() => import('./pages/Anatomy3D'),     'Anatomy3D')
const Terminologia = named(() => import('./pages/Terminologia'),  'Terminologia')
const Modulos      = named(() => import('./pages/Modulos'),       'Modulos')
const ModuloDetail = named(() => import('./pages/ModuloDetail'),  'ModuloDetail')
const PAI          = named(() => import('./pages/PAI'),           'PAI')
const PAIModulo    = named(() => import('./pages/PAIModulo'),     'PAIModulo')
const PAITema      = named(() => import('./pages/PAITema'),       'PAITema')

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
              <Route path="/quiz/:id" element={<Quiz />} />
              <Route path="/search" element={<Search />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/anatomia-3d" element={<Anatomy3D />} />
              <Route path="/terminologia" element={<Terminologia />} />
              {/* LMGC módulos (plan de estudios) */}
              <Route path="/modulos" element={<Modulos />} />
              <Route path="/modulos/:id" element={<ModuloDetail />} />
              {/* PAI — Programa de Apoyo al Ingreso */}
              <Route path="/pai" element={<PAI />} />
              <Route path="/pai/:slug" element={<PAIModulo />} />
              <Route path="/pai/:slug/:temaId" element={<PAITema />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
