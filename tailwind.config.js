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
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
