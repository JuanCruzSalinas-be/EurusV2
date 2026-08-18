import React, { useState, type FC, type ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

/**
 * Props for the Footer component.
 */
interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  /** The source URL for the company logo. */
  logoSrc: string
  /** The name of the company, displayed next to the logo. */
  companyName?: string
  /** A short description of the company. */
  description?: string
  /** An array of objects for generating useful links. */
  usefulLinks?: { label: string; href: string; external?: boolean }[]
  /** An array of objects for generating social media links. */
  socialLinks?: { label: string; href: string; icon: ReactNode }[]
  /** The title for the newsletter subscription section. */
  newsletterTitle?: string
  /** Async function to handle email subscription. Should return `true` for success and `false` for failure. */
  onSubscribe?: (email: string) => Promise<boolean>
}

/**
 * A responsive footer with a newsletter subscription form, built on this
 * project's existing neobrutalist ui/button and ui/input primitives so it
 * shares their look instead of a separate generic shadcn style.
 */
export const Footer: FC<FooterProps> = ({
  logoSrc,
  companyName = 'Eurus',
  description = 'Work-based learning for ambitious high school students — real, company-hosted internships across the industries that will define their careers.',
  usefulLinks = [
    { label: 'Industries', href: '#industries' },
    { label: 'Partners', href: '#partners' },
    { label: 'Watch', href: '#video' },
    { label: 'Apply', href: 'https://tally.so/r/KY2dkD', external: true },
  ],
  socialLinks = [],
  newsletterTitle = 'Subscribe to our newsletter',
  onSubscribe,
  className,
  ...props
}) => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubscribe = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!email || !onSubscribe || isSubmitting) return

    setIsSubmitting(true)
    const success = await onSubscribe(email)

    setSubscriptionStatus(success ? 'success' : 'error')
    setIsSubmitting(false)

    if (success) {
      setEmail('')
    }

    setTimeout(() => {
      setSubscriptionStatus('idle')
    }, 3000)
  }

  return (
    <footer className={cn('bg-ink text-cream', className)} {...props}>
      <div className="mx-auto grid grid-cols-1 gap-8 px-6 md:px-10 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        {/* Company Info */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <img src={logoSrc} alt={`${companyName} Logo`} className="h-10 w-10 rounded-full" />
            <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-eurus)' }}>
              {companyName}
            </span>
          </div>
          <p className="text-sm text-cream/60">{description}</p>
        </div>

        {/* Useful Links */}
        <div className="md:justify-self-center">
          <h3 className="mb-4 text-base font-semibold">Useful Links</h3>
          <ul className="space-y-2">
            {usefulLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  className="text-sm text-cream/60 transition-colors hover:text-red"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        {socialLinks.length > 0 && (
          <div className="md:justify-self-center">
            <h3 className="mb-4 text-base font-semibold">Follow Us</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                    aria-label={link.label}
                    className="flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-red"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Newsletter */}
        <div>
          <h3 className="mb-4 text-base font-semibold">{newsletterTitle}</h3>
          <form onSubmit={handleSubscribe} className="relative w-full max-w-sm">
            <div className="relative">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting || subscriptionStatus !== 'idle'}
                required
                aria-label="Email for newsletter"
                className="pr-28"
              />
              <Button
                type="submit"
                disabled={isSubmitting || subscriptionStatus !== 'idle'}
                className="absolute right-0 top-0 h-full rounded-l-none px-4"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>
            {(subscriptionStatus === 'success' || subscriptionStatus === 'error') && (
              <div
                key={subscriptionStatus}
                className="animate-in fade-in absolute inset-0 flex items-center justify-center rounded-base bg-ink/90 text-center backdrop-blur-sm"
              >
                {subscriptionStatus === 'success' ? (
                  <span className="font-semibold text-emerald-400">Subscribed! 🎉</span>
                ) : (
                  <span className="font-semibold text-red-500">Failed. Try again.</span>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </footer>
  )
}
