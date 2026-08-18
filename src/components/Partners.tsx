import RevealText from './RevealText'
import { MagicText } from './ui/magic-text'
import fcwsLogo from '../assets/logos/fcws-logo-cropped.png'
import fitciLogo from '../assets/logos/fitci-logo-cropped.png'
import frederickCountyLogo from '../assets/logos/frederick-county-seal.jpeg'
import ctcLogo from '../assets/logos/ctc-logo.jpeg'
import cteLogo from '../assets/logos/cte-logo.png'
import ausherman from '../assets/logos/ausherman-placeholder.png'

const PARTNERS = [
  { name: 'Frederick County Workforce Services', img: fcwsLogo },
  { name: 'FITCI', img: fitciLogo },
  { name: 'Frederick County, Maryland', img: frederickCountyLogo },
  { name: 'Frederick County Career & Technology Center', img: ctcLogo },
  { name: 'Career & Technical Education — FCPS', img: cteLogo },
  { name: 'Ausherman Family Foundation', img: ausherman },
]

function LogoCard({ p }: { p: (typeof PARTNERS)[number] }) {
  return (
    <div className="flex shrink-0 items-center justify-center rounded-xl bg-white h-28 md:h-32 w-56 md:w-64 px-6">
      <img src={p.img} alt={p.name} className="max-h-16 md:max-h-20 max-w-full object-contain" />
    </div>
  )
}

export default function Partners() {
  const track = [...PARTNERS, ...PARTNERS]

  return (
    <section id="partners" className="py-24 md:py-32 border-t border-ink/10 overflow-hidden">
      <h2
        className="text-black leading-snug tracking-tight mb-14 px-6 md:px-10 uppercase whitespace-nowrap"
        style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.5rem)', fontFamily: 'var(--font-inter)', fontWeight: 500 }}
      >
        <RevealText>OUR OFFICIAL PARTNERS</RevealText>
      </h2>

      <div className="relative w-full mb-16 md:mb-20">
        <div className="marquee-track flex w-max gap-4 md:gap-6">
          {track.map((p, i) => (
            <LogoCard key={`${p.name}-${i}`} p={p} />
          ))}
        </div>
      </div>

      <div className="px-6 md:px-10">
        <p
          className="max-w-xl text-2xl md:text-3xl uppercase tracking-widest text-black mb-4"
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 500 }}
        >
          How Eurus works?
        </p>
        <MagicText
          className="max-w-2xl text-base md:text-lg leading-relaxed text-black/90"
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 500 }}
          text="EURUS creates customized internship experiences for high school students across many fields (not just STEM), including business, art, fashion, marketing, policy, and more. We match every accepted student with one of our company partners across the U.S., so there is no rejection; if a spot doesn't fit, we keep matching until it does, and you hear back within about two weeks with updates on your placement or the next opportunity."
        />
        <MagicText
          className="max-w-2xl text-base md:text-lg leading-relaxed text-black/90 mt-6"
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 500 }}
          text="All student fees are covered: housing, transportation, and program costs! You choose when and how you intern: school year or summer, fall, winter, or spring; remote, hybrid, or in-person. Because our partner companies are there to host interns, we can focus on building a full-service experience that fits your schedule, your interests, and your future goals, not theirs."
        />
      </div>
    </section>
  )
}
