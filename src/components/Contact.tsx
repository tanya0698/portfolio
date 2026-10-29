import { motion } from 'framer-motion'
import { Mail, Phone, WhatsApp, Linkedin, Github, ArrowUpRight } from './icons'

const WHATSAPP_NUMBER = '263787541207'

const CONTACTS = [
  { href: 'mailto:eltonchipuka@gmail.com', label: 'eltonchipuka@gmail.com', Icon: Mail },
  { href: 'tel:+263787541207', label: '+263 78 754 1207', Icon: Phone },
  {
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi Elton, I saw your portfolio and would like to discuss a project.')}`,
    label: 'WhatsApp',
    Icon: WhatsApp,
  },
  { href: 'https://linkedin.com/in/elton-chipuka-497b98121', label: 'linkedin.com/in/elton-chipuka', Icon: Linkedin },
  { href: 'https://github.com/eltonchipuka', label: 'github.com/eltonchipuka', Icon: Github },
]

export default function Contact() {
  return (
    <section id="contact" className="section text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-heading justify-center">Contact</p>
        <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
          Let's build something
        </h2>
        <p className="mx-auto mt-3 max-w-md text-slate-400">
          Open to full-stack, front-end, or back-end roles, and to freelance projects. Reach out any of these ways.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8">
          <a
            href="./docs/resume.html"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            View full résumé
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={`https://wa.me/c/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            Services &amp; prices on WhatsApp
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
