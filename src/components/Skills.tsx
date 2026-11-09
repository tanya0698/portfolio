import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'
import { fadeUp, inView, pop, stagger, trackSpotlight } from '../lib/motion'

export default function Skills() {
  return (
    <section id="skills" className="section !pt-0">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={inView}
        variants={stagger(0.08)}
        className="grid gap-6 sm:grid-cols-2"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            onMouseMove={trackSpotlight}
            className="card card-interactive p-5"
          >
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent2">{group.title}</h3>
            <motion.div variants={stagger(0.03, 0.15)} className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <motion.span
                  key={item}
                  variants={pop}
                  whileHover={{ scale: 1.08 }}
                  className="chip cursor-default transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
