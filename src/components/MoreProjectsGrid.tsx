import { motion } from 'framer-motion'
import type { Project } from '../data/projects'
import { fadeUp, inView, lineGrow, pop, stagger, trackSpotlight } from '../lib/motion'

export default function MoreProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="mt-12">
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={inView}
        variants={stagger(0.1)}
        className="section-heading flex items-center gap-3"
      >
        <motion.span variants={lineGrow} className="h-px w-8 origin-left bg-accent" />
        <motion.span variants={fadeUp}>More Projects</motion.span>
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ ...inView, amount: 0.1 }}
        variants={stagger(0.07)}
        className="grid gap-4 sm:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.div
            key={project.slug}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            onMouseMove={trackSpotlight}
            className="card card-interactive group p-5"
          >
            <h4 className="font-medium text-slate-100 transition-colors group-hover:text-accent">{project.title}</h4>
            <p className="mt-1.5 text-sm text-slate-400">{project.blurb}</p>
            <motion.div variants={stagger(0.03, 0.2)} className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <motion.span key={tech} variants={pop} className="chip">
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
