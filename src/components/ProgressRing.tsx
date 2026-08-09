interface ProgressRingProps {
  value: number // 0-100
  size?: number
  strokeWidth?: number
  color?: string
  trackColor?: string
  label?: string
}

export function ProgressRing({
  value,
  size = 56,
  strokeWidth = 5,
  color = 'var(--color-accent)',
  trackColor = 'var(--color-surface-subtle)',
  label,
}: ProgressRingProps) {
  const r = (size - strokeWidth) / 2
  const circ = 2 * Math.PI * r
  const offset = circ - (value / 100) * circ

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.6s cubic-bezier(0.16,1,0.3,1)' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-sm font-bold text-zinc-800 leading-none">
          {Math.round(value)}%
        </span>
        {label && (
          <span className="text-[0.5625rem] text-zinc-400 font-medium leading-none mt-0.5">
            {label}
          </span>
        )}
      </div>
    </div>
  )
}
