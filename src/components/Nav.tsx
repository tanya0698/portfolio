const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="font-mono text-sm font-semibold text-slate-100">
          Elton<span className="text-accent">.</span>Chipuka
        </a>
        <ul className="hidden gap-8 sm:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="./docs/resume.html"
          target="_blank"
          rel="noreferrer"
          className="chip hover:border-accent/40 hover:text-accent transition-colors"
        >
          Resume
        </a>
      </nav>
    </header>
  )
}
