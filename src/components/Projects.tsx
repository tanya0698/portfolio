import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import MoreProjectsGrid from './MoreProjectsGrid'
import SectionHeader from './SectionHeader'
import { inView, stagger } from '../lib/motion'

export default function Projects() {
  const featured = projects.filter((p) => p.tier === 'featured')
  const more = projects.filter((p) => p.tier === 'more')

  return (
    <section id="projects" className="section">
      <SectionHeader eyebrow="Projects" title="Selected work">
        <p className="mt-3 max-w-2xl text-slate-400">
          Production and client systems spanning ERP, workflow automation, microservices,
          mobile apps, and e-commerce — {projects.length} projects in total.
        </p>
      </SectionHeader>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ ...inView, amount: 0.1 }}
        variants={stagger(0.1)}
        className="mt-10 grid gap-6 sm:grid-cols-2"
      >
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </motion.div>

      <MoreProjectsGrid projects={more} />
    </section>
  )
}
