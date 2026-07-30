import RevealText from './RevealText'
import fashionImg from '../assets/industries/charlota-blunarova-r5xHI_H44aM-unsplash.jpg'
import marketingImg from '../assets/industries/marketing-src.jpg'
import financeImg from '../assets/industries/finance-src.jpg'
import techImg from '../assets/industries/tech-src.jpg'
import healthcareImg from '../assets/industries/healthcare-src.jpg'
import lawPolicyImg from '../assets/industries/law-policy-src.jpg'

const INDUSTRIES = [
  { image: fashionImg, name: 'Fashion', blurb: 'Design, styling & retail' },
  { image: marketingImg, name: 'Marketing', blurb: 'Brand & campaign strategy' },
  { image: financeImg, name: 'Finance', blurb: 'Markets, investing & analysis' },
  { image: techImg, name: 'Tech', blurb: 'Engineering & product' },
  { image: healthcareImg, name: 'Healthcare', blurb: 'Clinical & biotech' },
  { image: lawPolicyImg, name: 'Law / Policy', blurb: 'Government & advocacy' },
]

function IndustryCard({ ind }: { ind: (typeof INDUSTRIES)[number] }) {
  return (
    <a
      href="#contact"
      className="group relative block shrink-0 h-[420px] w-[320px] overflow-hidden rounded-2xl bg-ink"
    >
      <img
        src={ind.image}
        alt={ind.name}
        className="absolute inset-0 h-full w-full object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6 font-mono text-cream">
        <p className="text-2xl font-bold uppercase tracking-tight">{ind.name}</p>
        <p className="text-sm text-cream/70 mt-1">{ind.blurb}</p>
      </div>
    </a>
  )
}

export default function Industries() {
  const track = [...INDUSTRIES, ...INDUSTRIES]

  return (
    <section id="industries" className="bg-cream py-24 md:py-32 overflow-hidden">
      <h2
        className="text-ink leading-snug font-normal uppercase px-6 md:px-10"
        style={{ fontSize: 'clamp(0.75rem, 1.3vw, 1rem)', fontFamily: 'var(--font-garamond)', letterSpacing: '0.25em' }}
      >
        <RevealText>SOME OF THE INDUSTRIES WE PLACE IN</RevealText>
      </h2>

      <div className="relative w-full">
        <div className="marquee-track flex w-max gap-4 md:gap-6">
          {track.map((ind, i) => (
            <IndustryCard key={`${ind.name}-${i}`} ind={ind} />
          ))}
        </div>
      </div>
    </section>
  )
}
