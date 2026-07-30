import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'Industries', href: '#industries' },
  { label: 'Partners', href: '#partners' },
  { label: 'Watch', href: '#video' },
  { label: 'Apply', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 mix-blend-difference">
      <a
        href="#top"
        className="text-white text-xl md:text-2xl tracking-tight"
        style={{ fontFamily: "'Archivo Black', sans-serif" }}
      >
        EURUS
      </a>

      <nav className="hidden md:flex items-center gap-8 text-white text-sm font-semibold uppercase tracking-wide">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="hover:opacity-60 transition-opacity">
            {l.label}
          </a>
        ))}
      </nav>

      <button
        onClick={() => setOpen((o) => !o)}
        className="md:hidden flex flex-col gap-1.5 w-8 z-50"
        aria-label="Toggle menu"
      >
        <span className={`h-0.5 bg-white transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`h-0.5 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
        <span className={`h-0.5 bg-white transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-ink flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="hover-invert font-display text-3xl px-4 py-1 text-cream"
              >
                {l.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
