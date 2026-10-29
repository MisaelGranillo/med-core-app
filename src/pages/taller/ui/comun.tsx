/* Piezas compartidas por las herramientas del taller: encabezado, aviso de
 * guardado local con «Borrar mis datos» y clases de botones. */

import { useState, type ReactNode } from 'react'
import { Trash, WarningCircle } from '@phosphor-icons/react'

export const btnPrimario = 'inline-flex items-center justify-center gap-2 min-h-[44px] px-4 rounded-2xl bg-primary text-primary-fg text-[0.9375rem] hover:bg-primary-hover transition-colors duration-150 disabled:opacity-50'
export const btnSecundario = 'inline-flex items-center justify-center gap-2 min-h-[44px] px-4 rounded-2xl border border-zinc-200 bg-surface text-zinc-800 text-[0.9375rem] hover:border-zinc-300 transition-colors duration-150 disabled:opacity-50'
export const campo = 'w-full min-h-[44px] rounded-xl border border-zinc-200 bg-surface px-3 text-[0.9375rem] text-zinc-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30'

export function EncabezadoHerramienta({ bloque, titulo, children }: { bloque: string; titulo: string; children?: ReactNode }) {
  return (
    <header className="flex flex-col gap-2">
      <p className="text-sm text-zinc-500">{bloque}</p>
      <h1 className="font-display font-light text-[2.25rem] sm:text-[2.75rem] leading-[1.05] tracking-[-0.025em] text-zinc-900 [text-wrap:balance]">
        {titulo}
      </h1>
      {children && <div className="text-base text-zinc-600 max-w-[65ch] flex flex-col gap-2">{children}</div>}
    </header>
  )
}

/** Estado del guardado local y botón para borrar los datos de la herramienta,
 *  con confirmación en línea (sin cuadros de diálogo del navegador). */
export function DatosLocales({ disponible, onBorrar, etiqueta = 'Borrar mis datos' }: { disponible: boolean; onBorrar: () => void; etiqueta?: string }) {
  const [confirmando, setConfirmando] = useState(false)
  return (
    <div className="flex flex-wrap items-center gap-3 print:hidden">
      {disponible ? (
        <p className="text-sm text-zinc-500 flex-1 min-w-[12rem]">Se guarda solo en este dispositivo.</p>
      ) : (
        <p role="status" className="flex items-start gap-2 text-sm text-zinc-800 bg-surface-2 rounded-xl px-3 py-2 flex-1 min-w-[12rem]">
          <WarningCircle weight="regular" className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
          Este navegador no permite guardar: puedes usar la herramienta, pero los datos se perderán al recargar. Exporta antes de salir.
        </p>
      )}
      {confirmando ? (
        <span className="flex items-center gap-2">
          <span className="text-sm text-zinc-700">¿Borrar todo?</span>
          <button type="button" className={btnPrimario} onClick={() => { onBorrar(); setConfirmando(false) }}>Sí, borrar</button>
          <button type="button" className={btnSecundario} onClick={() => setConfirmando(false)}>Cancelar</button>
        </span>
      ) : (
        <button type="button" className={btnSecundario} onClick={() => setConfirmando(true)}>
          <Trash weight="regular" className="w-[18px] h-[18px]" aria-hidden="true" />
          {etiqueta}
        </button>
      )}
    </div>
  )
}

/** Región aria-live para confirmaciones breves («Descargado», «Copiado»). */
export function Aviso({ texto }: { texto: string }) {
  return <p role="status" aria-live="polite" className="text-sm text-primary-ink min-h-[1.25rem]">{texto}</p>
}
