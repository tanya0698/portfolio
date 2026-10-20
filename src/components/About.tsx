import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-heading">About</p>
        <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
          Full-stack, top to bottom
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-slate-400">
          <p>
            I'm a software developer based in Harare, Zimbabwe, with a BSc (Honours) in
            Computer Science and three years building enterprise-grade applications —
            front-end, back-end, databases, and everything that connects them.
          </p>
          <p>
            Most of my work has been on a long-running enterprise ERP platform — CRM,
            helpdesk, task management, workforce and asset management, payments, and
            reporting — which I've taken from early ASP.NET MVC apps to a single sign-on
            portal backed by independently deployed microservices. Lately I've been
            building the workflow engine underneath it, which runs ticketing, tasks,
            approvals, and customer queries, with AI-generated reporting on top.
          </p>
          <p>
            Alongside that I take on client work — most recently a GPS smart-parking
            mobile app and an e-commerce and quotation platform with online payments.
          </p>
          <p>
            I care about building things that hold up under real production load —
            graceful degradation when a dependency goes down, concurrency-aware database
            access, and documentation that means the next person (often future-me)
            isn't starting from zero.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
