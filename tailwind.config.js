/** @type {import('tailwindcss').Config} */

/* Slate ramp — overrides Tailwind's `zinc` so all existing zinc-* utilities
 * across the codebase render as cool slate (the chosen clinical neutral)
 * without editing 4,900 lines. tokens.css mirrors these values. */
const slate = {
  50:  '#f8fafc',
  100: '#f1f5f9',
  200: '#e2e8f0',
  300: '#cbd5e1',
  400: '#94a3b8',
  500: '#64748b',
  600: '#475569',
  700: '#334155',
  800: '#1e293b',
  900: '#0f172a',
  950: '#020617',
}

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        /* neutral migration: zinc → slate */
        zinc: slate,

        /* semantic token utilities (text-ink, bg-surface, border-line, …) */
        ink:   'var(--c-ink)',
        body:  'var(--c-text)',
        muted: 'var(--c-muted)',
        faint: 'var(--c-faint)',
        line: {
          DEFAULT: 'var(--c-border)',
          strong:  'var(--c-border-strong)',
        },
        surface: {
          DEFAULT: 'var(--c-surface)',
          2:       'var(--c-surface-2)',
        },
        app: 'var(--c-bg)',

        primary: {
          DEFAULT: 'var(--c-primary)',
          hover:   'var(--c-primary-hover)',
          ink:     'var(--c-primary-ink)',
          tint:    'var(--c-primary-tint)',
          fg:      'var(--c-primary-fg)',
          50:  'var(--c-primary-50)',
          100: 'var(--c-primary-100)',
          200: 'var(--c-primary-200)',
          300: 'var(--c-primary-300)',
          400: 'var(--c-primary-400)',
          500: 'var(--c-primary-500)',
          600: 'var(--c-primary-600)',
          700: 'var(--c-primary-700)',
          800: 'var(--c-primary-800)',
          900: 'var(--c-primary-900)',
        },
        navy: {
          600: 'var(--c-navy-600)',
          700: 'var(--c-navy-700)',
          800: 'var(--c-navy-800)',
          900: 'var(--c-navy-900)',
        },
        success: { DEFAULT: 'var(--c-success)', tint: 'var(--c-success-tint)', ink: 'var(--c-success-ink)' },
        warning: { DEFAULT: 'var(--c-warning)', tint: 'var(--c-warning-tint)', ink: 'var(--c-warning-ink)' },
        error:   { DEFAULT: 'var(--c-error)',   tint: 'var(--c-error-tint)',   ink: 'var(--c-error-ink)' },
        info:    { DEFAULT: 'var(--c-info)',    tint: 'var(--c-info-tint)',    ink: 'var(--c-info-ink)' },

        /* brand scale retained (maps to primary tokens) */
        brand: {
          50:  'var(--c-primary-50)',
          100: 'var(--c-primary-100)',
          200: 'var(--c-primary-200)',
          300: 'var(--c-primary-300)',
          400: 'var(--c-primary-400)',
          500: 'var(--c-primary-500)',
          600: 'var(--c-primary-600)',
          700: 'var(--c-primary-700)',
          800: 'var(--c-primary-800)',
          900: 'var(--c-primary-900)',
        },
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      backgroundImage: {
        'hero-gradient': 'var(--c-hero-gradient)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'diffuse':    'var(--shadow-sm)',
        'card':       'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        'pop':        'var(--shadow-pop)',
      },
    },
  },
  plugins: [],
}
