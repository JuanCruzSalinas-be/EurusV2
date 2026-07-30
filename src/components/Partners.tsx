import RevealText from './RevealText'
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
    <section id="partners" className="bg-cream py-24 md:py-32 border-t border-ink/10 overflow-hidden">
      <h2
        className="text-ink leading-snug tracking-tight mb-14 px-6 md:px-10 uppercase"
        style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', fontFamily: 'var(--font-garamond)' }}
      >
        <RevealText>OUR OFFICIAL</RevealText>
        <RevealText delay={0.1}>PARTNERS</RevealText>
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
          className="max-w-xl text-xs uppercase tracking-widest text-ink mb-4"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          How Eurus works?
        </p>
        <p
          className="max-w-2xl text-lg md:text-xl leading-relaxed text-ink/90"
          style={{ fontFamily: 'var(--font-garamond)' }}
        >
          EURUS creates customized internship experiences for high school students across many
          fields (not just STEM), including business, art, fashion, marketing, policy, and more.
          We match every accepted student with one of our company partners across the U.S., so
          there is no rejection; if a spot doesn't fit, we keep matching until it does, and you
          hear back within about two weeks with updates on your placement or the next opportunity.
        </p>
        <p
          className="max-w-2xl text-lg md:text-xl leading-relaxed text-ink/90 mt-6"
          style={{ fontFamily: 'var(--font-garamond)' }}
        >
          All student fees are covered: housing, transportation, and program costs! You choose
          when and how you intern: school year or summer, fall, winter, or spring; remote,
          hybrid, or in-person. Because our partner companies are there to host interns, we can
          focus on building a full-service experience that fits your schedule, your interests,
          and your future goals, not theirs.
        </p>
      </div>
    </section>
  )
}
