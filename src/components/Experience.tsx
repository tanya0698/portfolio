import { motion } from 'framer-motion'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-heading">Experience</p>
        <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">Work history</h2>
      </motion.div>

      <div className="mt-10 space-y-8 border-l border-white/10 pl-6">
        {experience.map((role, i) => (
          <motion.div
            key={role.title + role.period}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative"
          >
            <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-semibold text-slate-100">{role.title}</h3>
              <span className="font-mono text-xs text-slate-500">{role.period}</span>
            </div>
            <p className="text-sm text-accent2">
              {role.company} · {role.location}
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-400">
              {role.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
