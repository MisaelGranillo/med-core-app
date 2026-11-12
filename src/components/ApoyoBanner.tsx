/* Aviso de campaña «Apoya a MedCore» (estilo recaudación anual de Wikipedia).
 * Solo aparece durante la campaña configurada en src/data/apoyo.ts, nunca en
 * las páginas de lectura ni en /apoya, y una vez cerrado no vuelve hasta la
 * siguiente campaña. Vista previa fuera de campaña: ?apoyo=1 en cualquier ruta. */

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HandHeart, X } from '@phosphor-icons/react'
import { campanaActiva, hayEnlaces } from '../data/apoyo'

const CLAVE = 'medcore-apoyo-aviso'
// Rutas de lectura y examen: ahí el contenido manda y no se interrumpe.
const SIN_AVISO = /^\/(topic|quiz\/|atlas\/|patologias\/|apoya|estudio\/archivo\/)/

function leerCerrado(): string | null {
  try { return localStorage.getItem(CLAVE) } catch { return null }
}

export function ApoyoBanner() {
  const { pathname, search } = useLocation()
  const vistaPrevia = new URLSearchParams(search).has('apoyo')
  const campana = campanaActiva()
  const id = campana?.id ?? 'vista-previa'
  const [cerrado, setCerrado] = useState(() => leerCerrado())

  if (cerrado === id || SIN_AVISO.test(pathname)) return null
  if (!vistaPrevia && (!campana || !hayEnlaces())) return null

  const cerrar = () => {
    try { localStorage.setItem(CLAVE, id) } catch { /* sin almacenamiento: se cierra solo en esta visita */ }
    setCerrado(id)
  }

  return (
    <aside aria-label="Apoya a MedCore" className="max-w-5xl w-full mx-auto px-4 sm:px-6 pt-4">
      <div className="card p-4 sm:p-5 flex flex-wrap items-center gap-x-4 gap-y-3">
        <span className="hidden sm:flex w-10 h-10 rounded-2xl bg-primary-tint text-primary items-center justify-center flex-shrink-0" aria-hidden="true">
          <HandHeart weight="regular" className="w-5 h-5" />
        </span>
        <p className="min-w-0 flex-1 basis-[16rem] text-[0.9375rem] text-zinc-700 leading-relaxed">
          <span className="text-zinc-900">MedCore es gratis y lo seguirá siendo.</span>{' '}
          Si te ha servido este semestre, ayuda a cubrir lo que cuesta mantenerlo en línea.
        </p>
        <div className="flex items-center gap-1 flex-shrink-0">
          <Link to="/apoya" onClick={cerrar}
                className="inline-flex items-center h-10 px-4 rounded-2xl bg-primary text-primary-fg text-[0.9375rem] font-medium hover:bg-primary-hover transition-colors">
            Apoyar
          </Link>
          <button onClick={cerrar} aria-label="Cerrar aviso"
                  className="w-10 h-10 rounded-2xl flex items-center justify-center text-zinc-500 hover:text-zinc-800 hover:bg-zinc-100 transition-colors">
            <X weight="regular" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  )
}
