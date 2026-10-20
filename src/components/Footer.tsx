export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 text-xs text-slate-500 sm:px-8">
        <p>© {new Date().getFullYear()} Elton Chipuka. Built with React, TypeScript & Tailwind.</p>
      </div>
    </footer>
  )
}
