import { useEffect, useState } from 'react'
import { Moon, Sun } from './icons'

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
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
      title={theme === 'light' ? 'Dark theme' : 'Light theme'}
      className="chip flex h-7 w-7 items-center justify-center !p-0 hover:border-accent/40 hover:text-accent transition-colors"
    >
      <Icon className="h-3.5 w-3.5" />
    </button>
  )
}
