import { motion } from 'framer-motion'
import RevealText from './RevealText'
import Magnetic from './Magnetic'
import { Button } from './ui/button'
import techImg from '../assets/industries/tech-src.jpg'
import financeImg from '../assets/industries/finance-src.jpg'

const ArrowLeft = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-cream stroke-current overflow-visible" fill="none" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10,90 C 10,40 40,20 60,50 C 70,65 80,75 95,70" />
    <path d="M80,55 L95,70 L85,85" />
  </svg>
)

const ArrowRight = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-cream stroke-current overflow-visible" fill="none" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M90,10 C 80,60 60,80 40,60 C 20,40 40,20 60,30 C 80,40 70,70 50,80" />
    <path d="M65,75 L50,80 L55,65" />
  </svg>
)

function CircularBadge() {
  return (
    <Magnetic>
      <a
        href="https://tally.so/r/KY2dkD"
        target="_blank"
        rel="noreferrer"
        className="relative w-16 h-16 md:w-36 md:h-36 bg-cream rounded-full flex items-center justify-center shadow-xl rotate-12 hover:scale-105 transition-transform cursor-pointer"
      >
        <div className="absolute inset-1 animate-[spin_10s_linear_infinite]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path id="badgeCirclePath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
            <text className="text-[11px] font-black tracking-[0.18em] uppercase" fill="var(--color-ink)">
              <textPath href="#badgeCirclePath" startOffset="0%">
                APPLY FOR FREE • APPLY FOR FREE •
              </textPath>
            </text>
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-10 h-10 text-ink stroke-current overflow-visible" fill="none" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20,80 Q 40,50 30,30 T 80,20" />
            <path d="M60,10 L80,20 L70,40" />
          </svg>
        </div>
      </a>
    </Magnetic>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col overflow-hidden bg-red">
      <main className="flex-1 relative z-10 pt-36 pb-12 md:pt-44 md:pb-16 px-4 flex flex-col items-center justify-center w-full max-w-[1440px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-center text-base md:text-lg leading-snug text-black/80 mb-10 md:mb-14"
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 500 }}
        >
          Eurus is a work-based learning platform that places high school students in real,
          company-hosted internships across the industries that will define their careers.
        </motion.p>

        <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center z-10 mb-28 md:mb-36">
          <div className="w-full flex flex-col items-center relative z-10 space-y-3 md:space-y-6">
            <div className="w-full flex justify-center relative z-30">
              <h1
                className="text-extra-bold text-cream leading-[0.85] tracking-tighter m-0 p-0 uppercase"
                style={{ fontSize: 'clamp(3.5rem,11vw,150px)', fontFamily: 'var(--font-eurus)' }}
              >
                <RevealText delay={0.05}>ACCESS</RevealText>
              </h1>
            </div>

            <div className="w-full flex justify-center pr-[6%] md:pr-[14%] -mt-4 md:-mt-8 relative z-20">
              <h1
                className="text-extra-bold text-cream leading-[0.85] tracking-tighter m-0 p-0 uppercase"
                style={{ fontSize: 'clamp(4rem,14vw,200px)', fontFamily: 'var(--font-eurus)' }}
              >
                <RevealText delay={0.15}>
                  <span className="inline-block mr-1 md:mr-2 -translate-x-2 md:-translate-x-4">→</span>SUCCESS
                </RevealText>
              </h1>
            </div>
          </div>

          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-[6%] md:bottom-[-12%] left-[-3%] md:left-[2%] z-30 pointer-events-auto"
            >
              <a href="#industries" className="block w-16 md:w-40 aspect-[3/3.5] bg-cream/90 backdrop-blur-md rounded-xl md:rounded-[2rem] p-2 md:p-4 overflow-hidden rotate-[-10deg] shadow-2xl hover:rotate-0 transition-transform duration-500">
                <img src={techImg} alt="Tech internship" className="absolute inset-0 h-full w-full object-cover opacity-60" />
              </a>
            </motion.div>

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-auto bottom-[-46%] md:top-[-14%] md:bottom-auto right-[4%] md:right-[2%] z-30 pointer-events-auto"
            >
              <a href="#industries" className="relative block w-16 md:w-40 aspect-[3/3.5] bg-cream/90 backdrop-blur-md rounded-xl md:rounded-[2rem] p-2 md:p-4 overflow-hidden rotate-[10deg] shadow-2xl hover:rotate-0 transition-transform duration-500">
                <img src={financeImg} alt="Finance internship" className="absolute inset-0 h-full w-full object-cover opacity-60" />
              </a>
            </motion.div>

            <div className="absolute bottom-[-14%] left-[16%] md:bottom-[-24%] md:left-[20%] w-10 h-10 md:w-24 md:h-24 z-20">
              <ArrowLeft />
            </div>

            <div className="absolute top-[-14%] right-[16%] md:top-[-24%] md:right-[20%] w-10 h-10 md:w-24 md:h-24 z-20">
              <ArrowRight />
            </div>

            <div className="hidden md:block absolute md:bottom-[-30%] md:right-[10%] z-40 pointer-events-auto">
              <CircularBadge />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4 relative z-30"
        >
          <Magnetic>
            <Button asChild size="lg" className="h-auto px-8 py-4 text-lg uppercase tracking-wide bg-cream hover:bg-cream">
              <a href="https://tally.so/r/KY2dkD" target="_blank" rel="noreferrer">
                Apply for an internship
              </a>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button asChild variant="neutral" size="lg" className="h-auto px-8 py-4 text-lg uppercase tracking-wide bg-red">
              <a href="#industries">See the industries</a>
            </Button>
          </Magnetic>
        </motion.div>
      </main>
    </section>
  )
}
