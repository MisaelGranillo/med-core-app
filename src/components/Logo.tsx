/* Marca MedCore: cuadro azul con un trazo de ECG (dirección A del logo).
 * Usa los tokens de acento, así acompaña al tema claro/oscuro. El icono de
 * pantalla de inicio (public/icons) es la versión fija en azul. */

export function LogoMark({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="var(--c-primary)" />
      <path
        d="M5 17h5l2.5-6 4 11 3-8 1.5 3H27"
        fill="none"
        stroke="var(--c-primary-fg)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
