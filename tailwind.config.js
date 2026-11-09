/** @type {import('tailwindcss').Config} */

// Colours come from CSS variables (see src/index.css) so the whole palette
// flips between dark and light themes without per-component dark: classes.
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['class', '.dark'],
  theme: {
    extend: {
      colors: {
        ink: v('ink'),
        surface: v('surface'),
        accent: v('accent'),
        accent2: v('accent2'),
        // "white" is used for hairline borders and overlays (border-white/10, bg-white/5),
        // so in light mode it becomes the dark ink colour.
        white: v('contrast'),
        slate: {
          50: v('slate-50'),
          100: v('slate-100'),
          200: v('slate-200'),
          300: v('slate-300'),
          400: v('slate-400'),
          500: v('slate-500'),
          600: v('slate-600'),
        },
      },
      keyframes: {
        'drift-a': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(12vw, 8vh) scale(1.15)' },
          '100%': { transform: 'translate(4vw, 18vh) scale(0.95)' },
        },
        'drift-b': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-10vw, 14vh) scale(0.9)' },
          '100%': { transform: 'translate(-4vw, -6vh) scale(1.1)' },
        },
        'drift-c': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(-14vw, -10vh) scale(1.2)' },
        },
        shimmer: {
          to: { backgroundPosition: '200% center' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(6px)', opacity: '0.4' },
        },
      },
      animation: {
        'drift-a': 'drift-a 26s ease-in-out infinite alternate',
        'drift-b': 'drift-b 32s ease-in-out infinite alternate',
        'drift-c': 'drift-c 22s ease-in-out infinite alternate',
        shimmer: 'shimmer 6s linear infinite',
        'bounce-soft': 'bounce-soft 1.8s ease-in-out infinite',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
