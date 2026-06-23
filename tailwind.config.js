/** @type {import('tailwindcss').Config} */

/* Neutral ramp — overrides Tailwind's `zinc` so every existing zinc-* utility
 * resolves to clinical-blue tokens that flip automatically in dark mode
 * (no 4,900-line rewrite). All values are token vars defined in tokens.css. */
const neutral = {
  50:  'var(--color-surface-subtle)',
  100: 'var(--color-surface-subtle)',
  200: 'var(--color-border)',
  300: 'var(--color-border-strong)',
  400: 'var(--color-text-muted)',
  500: 'var(--color-text-secondary)',
  600: 'var(--color-text-secondary)',
  700: 'var(--color-text-primary)',
  800: 'var(--color-text-primary)',
  900: 'var(--color-text-primary)',
  950: 'var(--color-text-primary)',
}

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        /* neutral migration: zinc → clinical-blue tokens (dark-adaptive) */
        zinc: neutral,

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
        /* deep header surfaces (was navy hero → warm ink-stamp) */
        navy: {
          600: 'var(--c-stamp-700)',
          700: 'var(--c-stamp-700)',
          800: 'var(--c-stamp-800)',
          900: 'var(--c-stamp-900)',
        },
        stamp: {
          700: 'var(--c-stamp-700)',
          800: 'var(--c-stamp-800)',
          900: 'var(--c-stamp-900)',
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
        'hero-gradient': 'var(--c-header-gradient)',
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
