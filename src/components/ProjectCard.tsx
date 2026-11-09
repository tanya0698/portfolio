import { motion } from 'framer-motion'
import type { Project } from '../data/projects'
import { fadeRight, fadeUp, pop, stagger, trackSpotlight } from '../lib/motion'

// Animates as part of the grid in Projects.tsx (staggered with its siblings).
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      onMouseMove={trackSpotlight}
      className="card card-interactive group flex flex-col gap-4 p-6"
    >
      <h3 className="text-lg font-semibold text-slate-50 transition-colors group-hover:text-accent">
        {project.title}
      </h3>
      <p className="text-sm text-slate-400">{project.blurb}</p>

      {project.highlights.length > 0 && (
        <motion.ul variants={stagger(0.06, 0.2)} className="space-y-1.5 text-sm text-slate-400">
          {project.highlights.map((h) => (
            <motion.li key={h} variants={fadeRight} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
              <span>{h}</span>
            </motion.li>
          ))}
        </motion.ul>
      )}

      <motion.div variants={stagger(0.03, 0.3)} className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.stack.map((tech) => (
          <motion.span key={tech} variants={pop} className="chip">
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </motion.article>
  )
}
