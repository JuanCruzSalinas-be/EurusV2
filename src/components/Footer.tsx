import { Mail } from 'lucide-react'
import { Footer as UIFooter } from './ui/footer'
import eLogo from '../assets/logos/e_logo.png'

const EMAIL = 'juancruzsalinasyx2@gmail.com'
const INSTAGRAM_HREF = 'https://instagram.com/eurus' // placeholder — swap in the real Eurus handle
const LINKEDIN_HREF = 'https://linkedin.com/company/eurus' // placeholder — swap in the real Eurus page

// lucide-react dropped brand/logo icons, so these two are minimal custom SVGs.
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56z" />
  </svg>
)

// No newsletter backend is wired up yet — simulates success so the form
// gives real feedback instead of silently doing nothing on submit.
const handleSubscribe = async (email: string) => {
  console.log(`Subscribe: ${email}`)
  await new Promise((resolve) => setTimeout(resolve, 800))
  return true
}

export default function Footer() {
  return (
    <>
      <UIFooter
        logoSrc={eLogo}
        socialLinks={[
          { label: 'Email', href: `mailto:${EMAIL}`, icon: <Mail className="h-5 w-5" /> },
          { label: 'Instagram', href: INSTAGRAM_HREF, icon: <InstagramIcon /> },
          { label: 'LinkedIn', href: LINKEDIN_HREF, icon: <LinkedinIcon /> },
        ]}
        onSubscribe={handleSubscribe}
      />
      <div className="bg-ink text-cream/60 px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm uppercase tracking-widest border-t border-cream/10">
        <span>© Eurus — {new Date().getFullYear()}</span>
        <span>ACCESS → SUCCESS</span>
      </div>
    </>
  )
}
