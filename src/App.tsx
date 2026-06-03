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

export default function App() {
  return (
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
  )
}
