import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { fadeUp, inView, pop, stagger } from '../lib/motion'
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
      <SectionHeader center eyebrow="Contact" title={<>Let&apos;s build <span className="text-gradient">something</span></>}>
        <p className="mx-auto mt-3 max-w-md text-slate-400">
          Open to full-stack, front-end, or back-end roles, and to freelance projects. Reach out any of these ways.
        </p>
      </SectionHeader>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={inView}
        variants={stagger(0.07, 0.1)}
        className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
      >
        {CONTACTS.map(({ href, label, Icon }) => (
          <motion.a
            key={label}
            variants={pop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="chip flex items-center gap-2 transition-colors hover:border-accent/40 hover:text-accent"
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={inView}
        variants={stagger(0.1, 0.3)}
        className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8"
      >
        {[
          { href: "./docs/resume.html", label: "View full résumé" },
          { href: `https://wa.me/c/${WHATSAPP_NUMBER}`, label: "Creedence services & prices on WhatsApp" },
        ].map(({ href, label }) => (
          <motion.a
            key={label}
            variants={fadeUp}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent"
          >
            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
              {label}
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}
