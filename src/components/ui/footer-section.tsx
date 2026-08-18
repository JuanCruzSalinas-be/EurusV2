import type { ComponentProps, ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Mail } from 'lucide-react'
import eLogo from '../../assets/logos/e_logo.png'

const EMAIL = 'juancruzsalinasyx2@gmail.com'
const INSTAGRAM_HREF = 'https://instagram.com/eurus' // placeholder — swap in the real Eurus handle
const LINKEDIN_HREF = 'https://linkedin.com/company/eurus' // placeholder — swap in the real Eurus page

// lucide-react dropped brand/logo icons in v1, so these two are minimal custom SVGs.
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56z" />
    </svg>
  )
}

interface FooterLink {
  title: string
  href: string
  external?: boolean
  icon?: React.ComponentType<{ className?: string }>
}

interface FooterSection {
  label: string
  links: FooterLink[]
}

const footerLinks: FooterSection[] = [
  {
    label: 'Explore',
    links: [
      { title: 'Industries', href: '#industries' },
      { title: 'Partners', href: '#partners' },
      { title: 'Watch', href: '#video' },
      { title: 'Apply', href: 'https://tally.so/r/KY2dkD', external: true },
    ],
  },
  {
    label: 'Connect',
    links: [
      { title: 'Email', href: `mailto:${EMAIL}`, icon: Mail },
      { title: 'Instagram', href: INSTAGRAM_HREF, external: true, icon: InstagramIcon },
      { title: 'LinkedIn', href: LINKEDIN_HREF, external: true, icon: LinkedinIcon },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-[2.5rem] md:rounded-t-[3.5rem] border-t border-cream/10 bg-ink text-cream px-6 py-12 lg:py-16">
      <div className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream/20 blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <img src={eLogo} alt="Eurus" className="size-8 rounded-full" />
          <p className="text-cream/60 mt-8 text-sm md:mt-0">
            © {new Date().getFullYear()} Eurus. All rights reserved.
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs uppercase tracking-widest">{section.label}</h3>
                <ul className="text-cream/60 mt-4 space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noreferrer' : undefined}
                        className="hover:text-red inline-flex items-center transition-all duration-300"
                      >
                        {link.icon && <link.icon className="me-1 size-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  )
}

type ViewAnimationProps = {
  delay?: number
  className?: ComponentProps<typeof motion.div>['className']
  children: ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return children
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
