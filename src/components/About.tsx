import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { fadeUp, inView, stagger } from '../lib/motion'

const PARAGRAPHS = [
  `I'm a software developer based in Harare, Zimbabwe, with a BSc (Honours) in
  Computer Science and three years building enterprise-grade applications —
  front-end, back-end, databases, and everything that connects them.`,
  `Most of my work has been on a long-running enterprise ERP platform — CRM,
  helpdesk, task management, workforce and asset management, payments, and
  reporting — which I've taken from early ASP.NET MVC apps to a single sign-on
  portal backed by independently deployed microservices. Lately I've been
  building the workflow engine underneath it, which runs ticketing, tasks,
  approvals, and customer queries, with AI-generated reporting on top.`,
  `Alongside that I take on client work — most recently a GPS smart-parking
  mobile app and an e-commerce and quotation platform with online payments.`,
  `I care about building things that hold up under real production load —
  graceful degradation when a dependency goes down, concurrency-aware database
  access, and documentation that means the next person (often future-me)
  isn't starting from zero.`,
]

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeader eyebrow="About" title="Full-stack, top to bottom" />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={inView}
        variants={stagger(0.12)}
        className="mt-6 max-w-3xl space-y-4 text-slate-400"
      >
        {PARAGRAPHS.map((p) => (
          <motion.p key={p.slice(0, 20)} variants={fadeUp}>
            {p}
          </motion.p>
        ))}
      </motion.div>
    </section>
  )
}
