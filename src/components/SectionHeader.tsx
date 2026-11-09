import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, inView, lineGrow, stagger } from '../lib/motion'

type Props = { eyebrow: string; title: ReactNode; children?: ReactNode; center?: boolean }

export default function SectionHeader({ eyebrow, title, children, center = false }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={inView}
      variants={stagger(0.1)}
      className={center ? 'text-center' : undefined}
    >
      <motion.p variants={fadeUp} className={`section-heading flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
        <motion.span variants={lineGrow} className="h-px w-8 origin-left bg-accent" />
        {eyebrow}
        {center && <motion.span variants={lineGrow} className="h-px w-8 origin-right bg-accent" />}
      </motion.p>
      <motion.h2 variants={fadeUp} className="text-2xl font-semibold text-slate-50 sm:text-3xl">
        {title}
      </motion.h2>
      {children && <motion.div variants={fadeUp}>{children}</motion.div>}
    </motion.div>
  )
}
