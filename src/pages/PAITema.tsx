/* Página de tema PAI — ruta /pai/:slug/:temaId */

import { useParams, Link } from 'react-router-dom'
import {
  ArrowLeft, Star, Brain, WarningCircle, BookOpenText,
  ArrowSquareOut, ArrowRight,
} from '@phosphor-icons/react'
import { paiBySlug } from '../data/pai'
import { usePaiTema, usePaiContent } from '../hooks/usePaiContent'
import { PaiBlocks } from '../components/PaiBlocks'
import { atlasTopics } from '../data/atlas-topics'

export function PAITema() {
  const { slug, temaId } = useParams<{ slug: string; temaId: string }>()
  const mod = slug ? paiBySlug[slug] : undefined
  const { tema, loading } = usePaiTema(slug ?? '', temaId ?? '')
  const { temas: allTemas } = usePaiContent(slug ?? '')

  // Navega al tema anterior/siguiente
  const idx = allTemas.findIndex(t => t.id === temaId)
  const prevTema = idx > 0 ? allTemas[idx - 1] : null
  const nextTema = idx < allTemas.length - 1 ? allTemas[idx + 1] : null

  // Infografías Atlas vinculadas a este tema PAI
  const atlasLinks = atlasTopics.filter(at =>
    at.relatedPai?.some(p => p.modulo === slug && p.temaId === temaId)
  )

  if (!mod) return <div className="p-8 text-zinc-400">Módulo no encontrado.</div>

  if (loading) return (
    <div className="flex-1 flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-4 border-zinc-200 border-t-primary animate-spin" />
    </div>
  )

  if (!tema) return (
    <div className="p-8 text-center">
      <p className="text-zinc-400 text-sm">Tema no encontrado.</p>
      <Link to={`/pai/${slug}`} className="mt-4 inline-block text-primary-ink text-sm hover:underline">
        ← Volver al módulo
      </Link>
    </div>
  )

  return (
    <main className="flex-1 bg-zinc-50">
      {/* Header */}
      <div className="bg-surface border-b border-zinc-100 sticky top-14 z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
          <Link to={`/pai/${slug}`}
            className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-800 transition-colors flex-shrink-0">
            <ArrowLeft weight="bold" className="w-4 h-4" />
            <span className="hidden sm:block">{mod.nombre.replace('MÓDULO — ', '')}</span>
          </Link>
          <span className="text-zinc-300 text-xs hidden sm:block">/</span>
          <span className="text-sm font-semibold text-zinc-700 truncate hidden sm:block">{tema.titulo}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">

          {/* Contenido principal */}
          <div className="space-y-8 min-w-0">
            {/* Título */}
            <div>
              {tema.generadoPorIA && (
                <div className="flex items-center gap-2 mb-3 text-xs text-zinc-400 bg-zinc-100 rounded-xl px-3 py-2 w-fit">
                  <span>✨</span>
                  <span className="font-semibold">Generado por IA</span>
                  <span>· Basado en programa oficial del PAI</span>
                </div>
              )}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{tema.icono}</span>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                  Tema {tema.orden} · {mod.nombre.replace('MÓDULO — ', '')}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-zinc-900 tracking-tight leading-tight mb-3">
                {tema.titulo}
              </h1>
              <p className="text-zinc-500 text-base leading-relaxed border-l-4 border-primary-200 pl-4">
                {tema.resumen}
              </p>
            </div>

            {/* Bloques de contenido */}
            <div className="card p-6 md:p-8">
              <PaiBlocks bloques={tema.bloques} />
            </div>

            {/* 🧠 Mnemotecnia */}
            {tema.mnemotecnia.items.length > 0 && (
              <div className="rounded-lg border border-line border-l-[3px] border-l-primary bg-primary-tint p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Brain weight="fill" className="w-5 h-5 text-primary" />
                  <h2 className="font-bold text-primary-800">Mnemotecnia</h2>
                </div>
                <div className="space-y-3">
                  {tema.mnemotecnia.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-primary-800">
                      <span className="font-bold text-primary-400 flex-shrink-0 mt-0.5">#{i + 1}</span>
                      <span className="leading-relaxed font-mono text-xs bg-surface/60 rounded-md px-3 py-2 w-full">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ⭐ Puntos clave para examen */}
            {tema.puntosClave.length > 0 && (
              <div className="rounded-lg border border-line border-l-[3px] border-l-warning bg-warning-tint p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Star weight="fill" className="w-5 h-5 text-warning" />
                  <h2 className="font-bold text-warning-ink">Puntos clave para el examen</h2>
                </div>
                <ul className="space-y-2.5">
                  {tema.puntosClave.map((punto, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-warning-ink">
                      <span className="w-5 h-5 rounded-full bg-warning/20 text-warning-ink text-[10px] font-bold font-mono
                                       flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{punto}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* ⚠️ Error frecuente */}
            {tema.errorFrecuente && (
              <div className="rounded-lg border border-line border-l-[3px] border-l-error bg-error-tint p-6">
                <div className="flex items-center gap-2 mb-3">
                  <WarningCircle weight="fill" className="w-5 h-5 text-error" />
                  <h2 className="font-bold text-error-ink">Error frecuente</h2>
                </div>
                <p className="text-sm text-error-ink leading-relaxed">{tema.errorFrecuente}</p>
              </div>
            )}

            {/* Enlace UNISA */}
            <a
              href={mod.unisa_url}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 card hover:shadow-card-hover transition-all group"
            >
              <BookOpenText weight="fill" className="w-5 h-5 text-zinc-400 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-zinc-700">Ver en plataforma UNISA</p>
                <p className="text-xs text-zinc-400 truncate">{mod.unisa_url}</p>
              </div>
              <ArrowSquareOut className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 flex-shrink-0" />
            </a>

            {/* Atlas — infografías vinculadas */}
            {atlasLinks.length > 0 && (
              <div className="rounded-lg border border-line bg-blue-50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base">🗺️</span>
                  <p className="text-sm font-bold text-blue-900">Infografía en Atlas</p>
                </div>
                <p className="text-xs text-blue-700 mb-3">
                  Este tema tiene una infografía visual con quiz y modo recall.
                </p>
                <div className="flex flex-col gap-2">
                  {atlasLinks.map(at => (
                    <Link
                      key={at.id}
                      to={`/atlas/${at.id}`}
                      className="flex items-center gap-3 bg-surface rounded-lg border border-blue-200 px-4 py-3 hover:shadow-sm transition-all"
                    >
                      <span className="text-xl flex-shrink-0">{at.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-zinc-900 truncate">{at.title}</p>
                        <p className="text-xs text-zinc-500 truncate">{at.subtitle}</p>
                      </div>
                      <ArrowRight weight="bold" className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Navegación anterior / siguiente */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {prevTema ? (
                <Link to={`/pai/${slug}/${prevTema.id}`}
                  className="card p-4 hover:shadow-card-hover transition-all group text-left">
                  <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider mb-1">← Anterior</p>
                  <p className="text-sm font-semibold text-zinc-700 leading-tight line-clamp-2">{prevTema.titulo}</p>
                </Link>
              ) : <div />}
              {nextTema ? (
                <Link to={`/pai/${slug}/${nextTema.id}`}
                  className="card p-4 hover:shadow-card-hover transition-all group text-right">
                  <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider mb-1">Siguiente →</p>
                  <p className="text-sm font-semibold text-zinc-700 leading-tight line-clamp-2">{nextTema.titulo}</p>
                </Link>
              ) : <div />}
            </div>
          </div>

          {/* Sidebar — índice de temas */}
          <aside className="hidden lg:block">
            <div className="card p-4 sticky top-28">
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3 px-2">
                Temas del módulo
              </p>
              <nav className="space-y-0.5">
                {allTemas.map(t => (
                  <Link
                    key={t.id}
                    to={`/pai/${slug}/${t.id}`}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all
                      ${t.id === temaId
                        ? 'bg-primary-100 text-primary-ink border border-primary-200'
                        : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-800'
                      }`}
                  >
                    <span className="flex-shrink-0">{t.icono}</span>
                    <span className="leading-snug line-clamp-2">{t.titulo}</span>
                    {t.id === temaId && (
                      <ArrowRight weight="bold" className="w-3 h-3 text-primary flex-shrink-0 ml-auto" />
                    )}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
