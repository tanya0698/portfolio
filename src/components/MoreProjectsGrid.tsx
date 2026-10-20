import { motion } from 'framer-motion'
import type { Project } from '../data/projects'

export default function MoreProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="mt-8">
      <p className="section-heading">More Projects</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
            className="card p-5"
          >
            <h4 className="font-medium text-slate-100">{project.title}</h4>
            <p className="mt-1.5 text-sm text-slate-400">{project.blurb}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
