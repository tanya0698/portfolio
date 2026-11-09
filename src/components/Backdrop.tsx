// Fixed page background: a faint grid plus slowly drifting colour glows.
// The drift is pure CSS (see tailwind.config.js) and stops under prefers-reduced-motion.
export default function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="grid-bg absolute inset-0" />
      <div
        className="absolute -left-[10vw] -top-[20vh] h-[60vh] w-[60vh] rounded-full blur-3xl animate-drift-a"
        style={{ background: 'rgb(var(--accent) / var(--blob))' }}
      />
      <div
        className="absolute -right-[10vw] top-[10vh] h-[55vh] w-[55vh] rounded-full blur-3xl animate-drift-b"
        style={{ background: 'rgb(var(--accent2) / var(--blob))' }}
      />
      <div
        className="absolute bottom-[-25vh] left-[30vw] h-[50vh] w-[50vh] rounded-full blur-3xl animate-drift-c"
        style={{ background: 'rgb(var(--accent) / calc(var(--blob) * 0.6))' }}
      />
    </div>
  )
}
