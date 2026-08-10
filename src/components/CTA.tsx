import { motion } from 'framer-motion'
import RevealText from './RevealText'
import Magnetic from './Magnetic'
import { FluidParticlesBackground } from './ui/fluid-particles-background'

const EMAIL = 'juancruzsalinasyx2@gmail.com'
const EMAIL_DISPLAY = 'Eurus.help'
const INSTAGRAM_HREF = 'https://instagram.com/eurus' // placeholder — swap in the real Eurus handle
const LINKEDIN_HREF = 'https://linkedin.com/company/eurus' // placeholder — swap in the real Eurus page

export default function CTA() {
  return (
    <section id="contact" className="relative bg-ink text-cream px-6 md:px-10 py-24 md:py-32 overflow-hidden">
      <FluidParticlesBackground
        dark
        particleCount={400}
        className="absolute inset-0 h-full bg-transparent pointer-events-none"
      />
      <div className="relative z-10">
      <h2
        className="font-bold leading-[0.88] tracking-tighter mb-16"
        style={{ fontSize: 'clamp(2.75rem, 9vw, 8rem)', fontFamily: 'var(--font-eurus)' }}
      >
        <RevealText>WHAT DOES</RevealText>
        <RevealText delay={0.08}>
          YOUR <span className="text-red">FUTURE</span>
        </RevealText>
        <RevealText delay={0.16}>DEMAND?</RevealText>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 md:gap-6 border-t border-cream/20 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <Magnetic className="inline-block group">
            <a href={`mailto:${EMAIL}`}>
              <p className="font-mono text-base uppercase tracking-widest text-cream/50 mb-2">Write to us</p>
              <p className="font-display text-3xl md:text-4xl group-hover:text-red transition-colors break-all">
                {EMAIL_DISPLAY}
              </p>
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Magnetic className="inline-block group">
            <a href={INSTAGRAM_HREF} target="_blank" rel="noreferrer">
              <p className="font-mono text-base uppercase tracking-widest text-cream/50 mb-2">Check out our socials</p>
              <p className="font-display text-3xl md:text-4xl group-hover:text-red transition-colors">
                Instagram
              </p>
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Magnetic className="inline-block group">
            <a href={LINKEDIN_HREF} target="_blank" rel="noreferrer">
              <p className="font-mono text-base uppercase tracking-widest text-cream/50 mb-2">Follow us</p>
              <p className="font-display text-3xl md:text-4xl group-hover:text-red transition-colors">
                LinkedIn
              </p>
            </a>
          </Magnetic>
        </motion.div>
      </div>
      </div>
    </section>
  )
}
