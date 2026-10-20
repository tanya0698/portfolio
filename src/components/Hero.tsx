import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github } from './icons'

const CONTACTS = [
  { href: 'mailto:eltonchipuka@gmail.com', label: 'eltonchipuka@gmail.com', Icon: Mail },
  { href: 'tel:+263787541207', label: '+263 78 754 1207', Icon: Phone },
  { href: 'https://linkedin.com/in/elton-chipuka-497b98121', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://github.com/eltonchipuka', label: 'GitHub', Icon: Github },
]

export default function Hero() {
  return (
    <section id="top" className="section flex min-h-[85vh] flex-col justify-center">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-heading"
      >
        Full-Stack Software Developer
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-6xl"
      >
        Elton Chipuka
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 max-w-2xl text-lg text-slate-400"
      >
        I build enterprise-grade full-stack systems — from ERP platforms and workflow
        engines to event-driven microservices and mobile apps —
        across React/TypeScript, Node.js, C#/.NET, and SQL Server/PostgreSQL.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex flex-wrap gap-3"
      >
        {CONTACTS.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
            className="chip flex items-center gap-2 hover:border-accent/40 hover:text-accent transition-colors"
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </a>
        ))}
      </motion.div>
    </section>
  )
}
