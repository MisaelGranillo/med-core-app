/** @type {import('tailwindcss').Config} */

/* Warm neutral ramp — overrides Tailwind's `zinc` so every existing zinc-*
 * utility across the codebase renders as warm paper/ink (the atlas neutral)
 * without editing 4,900 lines. tokens.css mirrors these values. */
const warm = {
  50:  '#faf7f0',
  100: '#f3eee3',
  200: '#e6dfd1',
  300: '#d4cab8',
  400: '#9a9082',
  500: '#6b6253',
  600: '#544c3f',
  700: '#3a342c',
  800: '#2a241d',
  900: '#1c1814',
  950: '#0f0c08',
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
        /* neutral migration: zinc → warm paper/ink */
        zinc: warm,

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
