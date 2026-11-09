import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Mail, Phone, Linkedin, Github } from './icons'
import { ease, fadeUp, pop, stagger } from '../lib/motion'

const CONTACTS = [
  { href: 'mailto:eltonchipuka@gmail.com', label: 'eltonchipuka@gmail.com', Icon: Mail },
  { href: 'tel:+263787541207', label: '+263 78 754 1207', Icon: Phone },
  { href: 'https://linkedin.com/in/elton-chipuka-497b98121', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://github.com/eltonchipuka', label: 'GitHub', Icon: Github },
]

const NAME = 'Elton Chipuka'
const BUILDS = ['ERP platforms', 'workflow engines', 'microservices', 'mobile apps', 'online stores']

const letter = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 0.75, ease } },
}

function RotatingWord() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % BUILDS.length), 2600)
    return () => clearInterval(t)
  }, [])
  return (
    <>
      <span className="sr-only">{BUILDS.join(', ')}</span>
      <span aria-hidden className="relative inline-flex overflow-hidden align-bottom">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={BUILDS[i]}
            initial={{ y: '100%', opacity: 0, filter: 'blur(4px)' }}
            animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: '-100%', opacity: 0, filter: 'blur(4px)' }}
            transition={{ duration: 0.4, ease }}
            className="text-gradient whitespace-nowrap pb-1 font-semibold"
          >
            {BUILDS[i]}
          </motion.span>
        </AnimatePresence>
      </span>
    </>
  )
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -90])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <motion.section
      ref={ref}
      id="top"
      style={{ y, opacity }}
      initial="hidden"
      animate="show"
      variants={stagger(0.12, 0.1)}
      className="section relative flex min-h-[90vh] flex-col justify-center"
    >
      <motion.div variants={fadeUp} className="mb-6">
        <span className="chip inline-flex items-center gap-2 !py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Open to roles &amp; freelance projects
        </span>
      </motion.div>

      <motion.p variants={fadeUp} className="section-heading">
        Full-Stack Software Developer
      </motion.p>

      <motion.h1
        aria-label={NAME}
        variants={stagger(0.035)}
        className="text-5xl font-semibold tracking-tight text-slate-50 sm:text-7xl"
      >
        {NAME.split(' ').map((word) => (
          <span key={word} aria-hidden className="mr-[0.25em] inline-flex overflow-hidden pb-2 last:mr-0">
            {word.split('').map((ch, i) => (
              <motion.span key={i} variants={letter} className="inline-block">
                {ch}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.h1>

      <motion.p variants={fadeUp} className="mt-4 text-xl text-slate-300 sm:text-2xl">
        I build <RotatingWord /> that hold up in production.
      </motion.p>

      <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg text-slate-400">
        Enterprise-grade full-stack systems — from ERP platforms and workflow engines to
        event-driven microservices and mobile apps — across React/TypeScript, Node.js,
        C#/.NET, and SQL Server/PostgreSQL.
      </motion.p>

      <motion.div variants={stagger(0.07)} className="mt-10 flex flex-wrap gap-3">
        {CONTACTS.map(({ href, label, Icon }) => (
          <motion.a
            key={label}
            variants={pop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
            className="chip flex items-center gap-2 transition-colors hover:border-accent/40 hover:text-accent"
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </motion.a>
        ))}
      </motion.div>

      <motion.a
        href="#about"
        variants={fadeUp}
        aria-label="Scroll to About"
        className="absolute inset-x-0 bottom-6 mx-auto hidden w-fit flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500 transition-colors hover:text-accent sm:flex"
      >
        Scroll
        <span className="flex h-8 w-5 justify-center rounded-full border border-white/20 pt-1.5">
          <span className="h-1.5 w-1 rounded-full bg-accent animate-bounce-soft" />
        </span>
      </motion.a>
    </motion.section>
  )
}
