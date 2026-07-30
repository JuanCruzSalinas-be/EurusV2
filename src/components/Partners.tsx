import RevealText from './RevealText'
import { CircularGallery } from './ui/circular-gallery-2'
import fcwsLogo from '../assets/logos/fcws-logo-cropped.png'
import fitciLogo from '../assets/logos/fitci-logo-cropped.png'
import frederickCountyLogo from '../assets/logos/frederick-county-seal.jpeg'
import ctcLogo from '../assets/logos/ctc-logo.jpeg'
import cteLogo from '../assets/logos/cte-logo.png'
import ausherman from '../assets/logos/ausherman-placeholder.png'

const PARTNERS = [
  { image: fcwsLogo, text: 'Frederick County Workforce Services' },
  { image: fitciLogo, text: 'FITCI' },
  { image: frederickCountyLogo, text: 'Frederick County, Maryland' },
  { image: ctcLogo, text: 'Frederick County Career & Technology Center' },
  { image: cteLogo, text: 'Career & Technical Education — FCPS' },
  { image: ausherman, text: 'Ausherman Family Foundation' },
]

export default function Partners() {
  return (
    <section id="partners" className="bg-cream py-24 md:py-32 border-t border-ink/10">
      <h2
        className="text-ink leading-snug tracking-tight mb-14 px-6 md:px-10 uppercase"
        style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', fontFamily: 'var(--font-garamond)' }}
      >
        <RevealText>OUR OFFICIAL</RevealText>
        <RevealText delay={0.1}>PARTNERS</RevealText>
      </h2>

      <div className="relative h-[50vh] min-h-[320px] w-full">
        <CircularGallery
          items={PARTNERS}
          bend={2}
          borderRadius={0.05}
          scrollEase={0.03}
          className="text-ink"
        />
      </div>
    </section>
  )
}
