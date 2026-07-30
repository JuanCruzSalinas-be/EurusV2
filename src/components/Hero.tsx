import { motion } from 'framer-motion'
import RevealText from './RevealText'
import Magnetic from './Magnetic'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center bg-cream px-6 md:px-10 pt-32 pb-20 overflow-hidden">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl text-base md:text-lg leading-snug text-ink/80 mb-6"
        style={{ fontFamily: 'var(--font-garamond)' }}
      >
        Eurus is a work-based learning platform that places high school students in real,
        company-hosted internships across the industries that will define their careers —
        we handle the curriculum, the logistics, and the housing, so students just have to show up.
      </motion.p>

      <h1
        className="font-display text-extra-bold text-red leading-[0.85] tracking-tighter"
        style={{ fontSize: 'clamp(3.5rem, 14vw, 13rem)' }}
      >
        <RevealText delay={0.05}>ACCESS</RevealText>
        <RevealText delay={0.15}>→ SUCCESS</RevealText>
      </h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <Magnetic>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-ink text-cream px-7 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-red transition-colors"
          >
            Apply for an internship
          </a>
        </Magnetic>
        <Magnetic>
          <a
            href="#industries"
            className="hover-invert inline-flex items-center rounded-full border border-ink px-7 py-3 text-sm font-semibold uppercase tracking-wide"
          >
            See the industries
          </a>
        </Magnetic>
      </motion.div>
    </section>
  )
}
