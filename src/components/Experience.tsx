import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { experience } from '../data/experience'
import SectionHeader from './SectionHeader'
import { fadeRight, inView, pop, stagger } from '../lib/motion'

export default function Experience() {
  // The accent line draws down the timeline as you scroll through it.
  const timeline = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: timeline, offset: ['start 80%', 'end 55%'] })
  const draw = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.3 })

  return (
    <section id="experience" className="section">
      <SectionHeader eyebrow="Experience" title="Work history" />

      <div ref={timeline} className="relative mt-10 space-y-10 pl-6">
        <span aria-hidden className="absolute left-0 top-0 h-full w-px bg-white/10" />
        <motion.span
          aria-hidden
          style={{ scaleY: draw }}
          className="absolute left-0 top-0 h-full w-px origin-top bg-gradient-to-b from-accent via-accent2 to-accent"
        />

        {experience.map((role, i) => (
          <motion.div
            key={role.title + role.period}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            variants={stagger(0.06)}
            className="relative"
          >
            <motion.span variants={pop} className="absolute -left-[29px] top-1.5 flex h-2.5 w-2.5">
              {i === 0 && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />}
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-ink" />
            </motion.span>
            <motion.div variants={fadeRight} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-semibold text-slate-100">{role.title}</h3>
              <span className="font-mono text-xs text-slate-500">{role.period}</span>
            </motion.div>
            <motion.p variants={fadeRight} className="text-sm text-accent2">
              {role.company} · {role.location}
            </motion.p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-400">
              {role.bullets.map((b) => (
                <motion.li key={b} variants={fadeRight} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                  <span>{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
