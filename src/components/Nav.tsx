import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { ease } from '../lib/motion'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

// Which section is in the middle of the screen, so the nav can underline it.
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ;['top', 'skills', ...ids].forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])
  // Skills sits under About in the nav.
  return active === 'skills' ? 'about' : active
}

const SECTION_IDS = LINKS.map((l) => l.href.slice(1))

export default function Nav() {
  const active = useActiveSection(SECTION_IDS)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease }}
      className="sticky top-0 z-50 border-b border-white/5 bg-ink/75 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="group font-mono text-sm font-semibold text-slate-100">
          Elton
          <span className="inline-block text-accent transition-transform duration-300 group-hover:scale-150">.</span>
          Chipuka
        </a>
        <ul className="hidden gap-8 sm:flex">
          {LINKS.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative py-1 text-sm transition-colors ${isActive ? 'text-slate-50' : 'text-slate-400 hover:text-accent'}`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-accent to-accent2"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="./docs/resume.html"
            target="_blank"
            rel="noreferrer"
            className="chip transition-colors hover:border-accent/40 hover:text-accent"
          >
            Resume
          </a>
        </div>
      </nav>
      {/* Reading progress */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-accent to-accent2"
      />
    </motion.header>
  )
}
