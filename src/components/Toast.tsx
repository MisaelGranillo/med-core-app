/* Toast — reusable, token-driven, auto-dismiss notification.
 * Bottom-center, fixed. Used across routes (e.g. "Próximo" module taps). */
import { useEffect } from 'react'

export function Toast({ msg, onDone, duration = 2500 }: {
  msg: string
  onDone: () => void
  duration?: number
}) {
  useEffect(() => {
    const t = setTimeout(onDone, duration)
    return () => clearTimeout(t)
  }, [onDone, duration])

  return (
    <div
      role="status"
      style={{
        position: 'fixed',
        bottom: 'var(--space-6)',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'var(--color-text-primary)',
        color: 'var(--color-page-bg)',
        fontSize: 13,
        fontFamily: 'var(--font-body)',
        padding: '10px 20px',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-pop)',
        zIndex: 9999,
        whiteSpace: 'nowrap',
        maxWidth: 'calc(100vw - 32px)',
      }}
    >
      {msg}
    </div>
  )
}
