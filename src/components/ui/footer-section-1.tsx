import { motion, type Variants } from 'framer-motion'
import { SocialCloud } from './footer-section-1-utils/social-cloud'
import eLogo from '../../assets/logos/e_logo.png'

const NAV_LINKS = [
  { label: 'Industries', href: '#industries' },
  { label: 'Partners', href: '#partners' },
  { label: 'Watch', href: '#video' },
  { label: 'Apply', href: 'https://tally.so/r/KY2dkD', external: true },
]

export default function Footer1() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
  }

  return (
    <footer className="w-full py-12 bg-ink text-cream overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        variants={containerVariants}
        className="container mx-auto px-4 flex flex-col items-center gap-10 mb-12"
      >
        <motion.div variants={itemVariants} className="flex justify-center">
          <img src={eLogo} alt="Eurus" className="h-12 w-12 rounded-full" />
        </motion.div>

        <motion.nav
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xl md:text-2xl font-medium relative z-10"
        >
          {NAV_LINKS.map((l) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noreferrer' : undefined}
              className="relative px-2 py-1"
              whileHover={{ scale: 1.2, rotate: -6 }}
              whileTap={{ scale: 0.95 }}
            >
              {l.label}
            </motion.a>
          ))}
        </motion.nav>

        <motion.div variants={itemVariants}>
          <SocialCloud className="text-cream" />
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full h-12 border-y border-cream opacity-10 text-cream bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"
        style={{ backgroundSize: '10px 10px' }}
        initial={{ backgroundPositionX: '0%' }}
        whileInView={{ backgroundPositionX: '100%' }}
        viewport={{ once: true }}
        transition={{
          ease: 'linear',
          duration: 20,
        }}
      />

      <motion.div
        className="container mx-auto px-4 mt-8 text-center text-base md:text-lg text-cream/60"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
      >
        <p>&copy; {new Date().getFullYear()} Eurus, All rights reserved</p>
      </motion.div>
    </footer>
  )
}
