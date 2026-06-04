import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Topic } from './pages/Topic'
import { Quiz } from './pages/Quiz'
import { Search } from './pages/Search'
import { Progress } from './pages/Progress'
import { Anatomy3D } from './pages/Anatomy3D'
import { Terminologia } from './pages/Terminologia'
import { Modulos } from './pages/Modulos'
import { ModuloDetail } from './pages/ModuloDetail'

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topic/:id" element={<Topic />} />
            <Route path="/quiz/:id" element={<Quiz />} />
            <Route path="/search" element={<Search />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/anatomia-3d" element={<Anatomy3D />} />
            <Route path="/terminologia" element={<Terminologia />} />
            <Route path="/modulos" element={<Modulos />} />
            <Route path="/modulos/:id" element={<ModuloDetail />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
