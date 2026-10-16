/* Navbar MedCore — barra superior + barra de tabs móvil */

import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {
  MagnifyingGlass, X, House, BookOpen, Lightning,
  Cube, BookOpenText, ChartBar, GraduationCap, Image, Translate, Gear, DotsThreeOutline, Books,
} from '@phosphor-icons/react'
import { LogoMark } from './Logo'
import { AppearanceMenu } from './AppearanceMenu'

/* Entradas de navegación permanentes. Las cuatro secciones núcleo (Anatomía,
 * Atlas, MedLex, Quizzes) nunca están anidadas ni condicionadas a que haya un
 * plan seleccionado. `mobile: true` marca las cuatro que van directo en la
 * barra inferior móvil; el resto vive en «Más». "Buscar" es el cuadro de búsqueda. */
const NAV_ITEMS = [
  { path: '/',            label: 'Inicio',       icon: House,          mobile: true  },
  { path: '/plan',        label: 'Plan',         icon: BookOpen,       mobile: false },
  { path: '/estudio',     label: 'Temas',        icon: GraduationCap,  mobile: true  },
  { path: '/anatomia',    label: 'Anatomía',     icon: Cube,           mobile: false },
  { path: '/atlas',       label: 'Atlas',        icon: Image,          mobile: true  },
  { path: '/terminologia',label: 'MedLex',       icon: BookOpenText,   mobile: false },
  { path: '/vocabulario', label: 'EnLex',         icon: Translate,      mobile: false },
  { path: '/libreria',    label: 'Librería',     icon: Books,          mobile: false },
  { path: '/quiz',        label: 'Quizzes',      icon: Lightning,      mobile: true  },
  { path: '/progress',    label: 'Progreso',     icon: ChartBar,       mobile: false },
  { path: '/ajustes',     label: 'Ajustes',      icon: Gear,           mobile: false },
] as const

const MOBILE_ITEMS = NAV_ITEMS.filter(n => n.mobile)
const MORE_ITEMS = NAV_ITEMS.filter(n => !n.mobile)

export function Navbar() {
  const [query,   setQuery]   = useState('')
  const [focused, setFocused] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
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

  // Cierra «Más» al cambiar de ruta.
  useEffect(() => { setMoreOpen(false) }, [location.pathname])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) { navigate(`/search?q=${encodeURIComponent(query.trim())}`); inputRef.current?.blur() }
  }

  return (
    <>
      {/* ── Top bar (desktop) ────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-surface border-b border-zinc-200" style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-3">

          {/* Logo MedCore */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0 group mr-1">
            <LogoMark className="w-8 h-8" />
            <span className="font-display font-medium text-zinc-900 tracking-tight hidden sm:block">
              MedCore
            </span>
          </Link>

          {/* Navegación principal — desktop */}
          <nav className="hidden md:flex items-center gap-0.5 flex-shrink-0">
            {NAV_ITEMS.filter(n => n.path !== '/').map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                title={label}
                aria-label={label}
                className={`flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-xl text-sm font-medium
                            transition-all duration-150
                            ${isActive(path)
                              ? 'bg-primary-tint text-primary-ink'
                              : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'}`}
              >
                <Icon weight={isActive(path) ? 'fill' : 'regular'} className="w-4 h-4 xl:w-3.5 xl:h-3.5" />
                {/* Entre md y xl solo el icono: con las etiquetas la barra no cabía y la página se desplazaba de lado. */}
                <span className="hidden xl:inline">{label}</span>
              </Link>
            ))}
          </nav>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className={`flex-1 min-w-0 max-w-sm relative transition-all duration-200 ${
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
              <kbd className="absolute right-3 text-xs font-mono text-zinc-400 bg-zinc-200 px-1.5 py-0.5 rounded hidden sm:block">
                ⌘K
              </kbd>
            </div>
          </form>

          <AppearanceMenu />
        </div>
      </header>

      {/* ── Mobile bottom tab bar: 4 destinos + «Más» ─────── */}
      {moreOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMoreOpen(false)}>
          <div className="absolute inset-0 bg-black/30" />
          <div
            className="absolute left-3 right-3 card p-2 shadow-pop grid grid-cols-3 gap-1"
            style={{ bottom: 'calc(4.5rem + env(safe-area-inset-bottom, 0px))' }}
            onClick={e => e.stopPropagation()}
          >
            {MORE_ITEMS.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex flex-col items-center justify-center gap-1.5 min-h-[4.5rem] rounded-xl text-xs
                  ${isActive(path) ? 'bg-primary-tint text-primary-ink' : 'text-zinc-600 hover:bg-zinc-100'}`}
              >
                <Icon weight={isActive(path) ? 'fill' : 'regular'} className="w-5 h-5" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-surface border-t border-zinc-200"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <div className="grid grid-cols-5 h-16 max-w-lg mx-auto">
          {MOBILE_ITEMS.map(({ path, label, icon: Icon }) => {
            const active = isActive(path)
            return (
              <Link
                key={path}
                to={path}
                className={`flex flex-col items-center justify-center gap-1 transition-colors duration-150
                  ${active ? 'text-primary' : 'text-zinc-500 hover:text-zinc-700'}`}
              >
                <Icon weight={active ? 'fill' : 'regular'} className="w-6 h-6" />
                <span className="text-[0.6875rem] leading-none">{label}</span>
              </Link>
            )
          })}
          <button
            type="button"
            onClick={() => setMoreOpen(o => !o)}
            aria-expanded={moreOpen}
            className={`flex flex-col items-center justify-center gap-1 transition-colors duration-150
              ${moreOpen || MORE_ITEMS.some(n => isActive(n.path)) ? 'text-primary' : 'text-zinc-500 hover:text-zinc-700'}`}
          >
            <DotsThreeOutline weight={moreOpen ? 'fill' : 'regular'} className="w-6 h-6" />
            <span className="text-[0.6875rem] leading-none">Más</span>
          </button>
        </div>
      </nav>
    </>
  )
}
