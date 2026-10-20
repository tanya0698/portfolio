import { motion } from 'framer-motion'
import type { Project } from '../data/projects'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.06 }}
      className="card flex flex-col gap-4 p-6"
    >
      <h3 className="text-lg font-semibold text-slate-50">{project.title}</h3>
      <p className="text-sm text-slate-400">{project.blurb}</p>

      {project.highlights.length > 0 && (
        <ul className="space-y-1.5 text-sm text-slate-400">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.stack.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  )
}
