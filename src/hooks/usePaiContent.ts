/* Hook para carga dinámica del contenido PAI por módulo */

import { useState, useEffect } from 'react'
import type { PaiTema } from '../data/pai-types'

const contentLoaders: Record<string, () => Promise<{ default?: PaiTema[]; [k: string]: unknown }>> = {
  'bioquimica':          () => import('../data/pai-content/bioquimica').then(m => ({ ...m, default: m.bioquimicaTemas })),
  'aparatos-y-sistemas': () => import('../data/pai-content/aparatos').then(m => ({ ...m, default: m.aparatosTemas })),
  'comprension-lectura': () => import('../data/pai-content/lectura').then(m => ({ ...m, default: m.lecturaTemas })),
  'ingles-medico':       () => import('../data/pai-content/ingles').then(m => ({ ...m, default: m.inglesTemas })),
  'matematicas':         () => import('../data/pai-content/matematicas').then(m => ({ ...m, default: m.matematicasTemas })),
  'investigacion':       () => import('../data/pai-content/investigacion').then(m => ({ ...m, default: m.investigacionTemas })),
  'salud-publica':       () => import('../data/pai-content/salud-publica').then(m => ({ ...m, default: m.saludPublicaTemas })),
}

export function usePaiContent(slug: string) {
  const [temas, setTemas] = useState<PaiTema[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loader = contentLoaders[slug]
    if (!loader) { setTemas([]); return }

    setLoading(true)
    loader()
      .then(mod => setTemas((mod.default as PaiTema[]) ?? []))
      .catch(() => setTemas([]))
      .finally(() => setLoading(false))
  }, [slug])

  return { temas, loading }
}

export function usePaiTema(slug: string, temaId: string) {
  const { temas, loading } = usePaiContent(slug)
  const tema = temas.find(t => t.id === temaId) ?? null
  return { tema, loading }
}
