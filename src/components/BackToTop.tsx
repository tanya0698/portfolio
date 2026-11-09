import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { ArrowUp } from './icons'
import Tooltip from './Tooltip'

export default function BackToTop() {
  const { scrollY } = useScroll()
  const [show, setShow] = useState(false)
  useMotionValueEvent(scrollY, 'change', (y) => setShow(y > 700))

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Tooltip content="Back to top" side="left">
            <motion.a
              href="#top"
              aria-label="Back to top"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.92 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-surface/80 text-slate-200 shadow-lg shadow-black/20 backdrop-blur-md transition-colors hover:border-accent/50 hover:text-accent"
            >
              <ArrowUp className="h-4 w-4" />
            </motion.a>
          </Tooltip>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
