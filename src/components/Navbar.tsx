/* Navbar MedCore — barra superior + barra de tabs móvil */

import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {
  MagnifyingGlass, X, House, BookOpen, Lightning,
  Cube, BookOpenText, ChartBar, GraduationCap, Brain, Image,
} from '@phosphor-icons/react'

/* Entradas de navegación permanentes. Las cuatro secciones núcleo (Anatomía,
 * Atlas, MedLex, Quizzes) nunca están anidadas ni condicionadas a que haya un
 * plan seleccionado. `mobile: true` marca las que aparecen en la barra inferior
 * móvil. "Buscar" se cubre con el cuadro de búsqueda. */
const NAV_ITEMS = [
  { path: '/',            label: 'Inicio',       icon: House,          mobile: true  },
  { path: '/plan',        label: 'Plan',         icon: BookOpen,       mobile: true  },
  { path: '/estudio',     label: 'Temas',        icon: GraduationCap,  mobile: true  },
  { path: '/anatomia',    label: 'Anatomía',     icon: Cube,           mobile: false },
  { path: '/atlas',       label: 'Atlas',        icon: Image,          mobile: true  },
  { path: '/terminologia',label: 'MedLex',       icon: BookOpenText,   mobile: true  },
  { path: '/quiz',        label: 'Quizzes',      icon: Lightning,      mobile: true  },
  { path: '/progress',    label: 'Progreso',     icon: ChartBar,       mobile: false },
] as const

const MOBILE_ITEMS = NAV_ITEMS.filter(n => n.mobile)

export function Navbar() {
  const [query,   setQuery]   = useState('')
  const [focused, setFocused] = useState(false)
  const inputRef  = useRef<HTMLInputElement>(null)
  const navigate  = useNavigate()
  const location  = useLocation()

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
      if (e.key === 'Escape') { inputRef.current?.blur(); setQuery('') }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) { navigate(`/search?q=${encodeURIComponent(query.trim())}`); inputRef.current?.blur() }
  }

  return (
    <>
      {/* ── Top bar (desktop) ────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-sm border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-3">

          {/* Logo MedCore */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0 group mr-1">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-md flex items-center justify-center shadow-sm">
              <Brain weight="fill" className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-zinc-900 tracking-tight hidden sm:block">
              Med<span className="text-primary">Core</span>
            </span>
          </Link>

          {/* Navegación principal — desktop */}
          <nav className="hidden md:flex items-center gap-0.5 flex-shrink-0">
            {NAV_ITEMS.filter(n => n.path !== '/').map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium
                            transition-all duration-150
                            ${isActive(path)
                              ? 'bg-zinc-900 text-white'
                              : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'}`}
              >
                <Icon weight={isActive(path) ? 'fill' : 'regular'} className="w-3.5 h-3.5" />
                {label}
              </Link>
            ))}
          </nav>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className={`flex-1 max-w-sm relative transition-all duration-200 ${
              focused ? 'ring-2 ring-primary/40 rounded-xl' : ''
            }`}
          >
            <div className="relative flex items-center">
              <MagnifyingGlass weight="regular" className="absolute left-3 w-4 h-4 text-zinc-400 pointer-events-none" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="Buscar conceptos, términos..."
                className="w-full bg-zinc-100 border border-transparent rounded-xl pl-9 pr-16 py-2 text-sm
                           text-zinc-900 placeholder-zinc-400 outline-none
                           focus:bg-surface focus:border-zinc-300 transition-all duration-200"
              />
              {query && (
                <button type="button" onClick={() => setQuery('')} className="absolute right-10 text-zinc-400 hover:text-zinc-600 p-1">
                  <X weight="bold" className="w-3.5 h-3.5" />
                </button>
              )}
              <kbd className="absolute right-3 text-[10px] font-mono text-zinc-400 bg-zinc-200 px-1.5 py-0.5 rounded hidden sm:block">
                ⌘K
              </kbd>
            </div>
          </form>
        </div>
      </header>

      {/* ── Mobile bottom tab bar ───────────────────────── */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-surface/95 backdrop-blur-sm border-t border-zinc-200">
        <div className="grid grid-cols-6 h-16 max-w-lg mx-auto">
          {MOBILE_ITEMS.map(({ path, label, icon: Icon }) => {
            const active = isActive(path)
            return (
              <Link
                key={path}
                to={path}
                className={`flex flex-col items-center justify-center gap-0.5 transition-all duration-150
                  ${active ? 'text-primary' : 'text-zinc-400 hover:text-zinc-600'}`}
              >
                <Icon weight={active ? 'fill' : 'regular'} className="w-5 h-5" />
                <span className={`text-[9px] font-semibold leading-none ${active ? 'text-primary' : 'text-zinc-400'}`}>
                  {label}
                </span>
                {active && (
                  <span className="absolute bottom-1 w-1 h-1 rounded-full bg-primary" />
                )}
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
