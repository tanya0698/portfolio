import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import MoreProjectsGrid from './MoreProjectsGrid'

export default function Projects() {
  const featured = projects.filter((p) => p.tier === 'featured')
  const more = projects.filter((p) => p.tier === 'more')

  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-heading">Projects</p>
        <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
          Selected work
        </h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          Production and client systems spanning ERP, workflow automation, microservices,
          mobile apps, and e-commerce — {projects.length} projects in total.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {featured.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      <MoreProjectsGrid projects={more} />
    </section>
  )
}
