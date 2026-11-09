import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Moon, Sun } from './icons'
import Tooltip from './Tooltip'

type Theme = 'light' | 'dark'

// index.html applies the starting theme before React loads; this keeps it in sync.
const current = (): Theme =>
  document.documentElement.classList.contains('light') ? 'light' : 'dark'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(current)

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

  // Follow the system setting until the visitor picks a theme themselves.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = (e: MediaQueryListEvent) => {
      let saved: string | null = null
      try { saved = localStorage.getItem('theme') } catch { /* storage blocked */ }
      if (!saved) setTheme(e.matches ? 'light' : 'dark')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    try { localStorage.setItem('theme', next) } catch { /* storage blocked */ }
  }

  const Icon = theme === 'light' ? Moon : Sun
  const label = theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
  return (
    <Tooltip content={label}>
      <button
        type="button"
        onClick={toggle}
        aria-label={label}
        className="chip flex h-7 w-7 items-center justify-center !p-0 hover:border-accent/40 hover:text-accent transition-colors"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex"
          >
            <Icon className="h-3.5 w-3.5" />
          </motion.span>
        </AnimatePresence>
      </button>
    </Tooltip>
  )
}
