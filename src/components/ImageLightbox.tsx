import { useEffect, useState } from 'react'
import {
  X,
  ArrowsOut,
  ArrowsIn,
  DownloadSimple,
  CircleNotch,
} from '@phosphor-icons/react'
import { downloadImageAsPdf } from '../utils/imageToPdf'

/** Botón reutilizable que genera y descarga la imagen como PDF, con estado. */
export function DownloadPdfButton({
  src,
  filename,
  label = 'Descargar PDF',
  className = '',
}: {
  src: string
  filename: string
  label?: string
  className?: string
}) {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(false)

  const handle = async () => {
    setBusy(true)
    setError(false)
    try {
      await downloadImageAsPdf(src, filename)
    } catch {
      setError(true)
    } finally {
      setBusy(false)
    }
  }

  return (
    <button onClick={handle} disabled={busy} className={className}>
      {busy ? (
        <CircleNotch weight="bold" className="w-4 h-4 animate-spin" />
      ) : (
        <DownloadSimple weight="bold" className="w-4 h-4" />
      )}
      {busy ? 'Generando…' : error ? 'Reintentar PDF' : label}
    </button>
  )
}

/** Visor a pantalla completa: ajustar / tamaño real + descarga PDF. */
export function ImageLightbox({
  src,
  title,
  filename,
  onClose,
}: {
  src: string
  title: string
  filename: string
  onClose: () => void
}) {
  const [realSize, setRealSize] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/10">
        <h3 className="text-white font-semibold text-sm truncate">{title}</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setRealSize((v) => !v)}
            className="inline-flex items-center gap-1.5 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors"
          >
            {realSize ? (
              <ArrowsIn weight="bold" className="w-4 h-4" />
            ) : (
              <ArrowsOut weight="bold" className="w-4 h-4" />
            )}
            <span className="hidden sm:inline">{realSize ? 'Ajustar' : 'Tamaño real'}</span>
          </button>

          <DownloadPdfButton
            src={src}
            filename={filename}
            className="inline-flex items-center gap-1.5 text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors disabled:opacity-60"
          />

          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="inline-flex items-center justify-center text-white/90 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg w-9 h-9 transition-colors"
          >
            <X weight="bold" className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        className="flex-1 overflow-auto p-4 flex items-start justify-center"
        onClick={onClose}
      >
        <img
          src={src}
          alt={`Infografía a tamaño completo: ${title}`}
          onClick={(e) => {
            e.stopPropagation()
            setRealSize((v) => !v)
          }}
          className={
            realSize
              ? 'max-w-none cursor-zoom-out shadow-2xl rounded'
              : 'max-w-full max-h-full object-contain cursor-zoom-in shadow-2xl rounded'
          }
        />
      </div>
    </div>
  )
}
