import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import RevealText from './RevealText'
import tape from '../assets/decor/tape-clear.png'
import brookeCagle from '../assets/placeholders/brooke-cagle.jpg'
import img1047 from '../assets/placeholders/img-1047.png'

function PlaceholderPhoto({ rotate, image, alt }: { rotate: number; image: string; alt: string }) {
  return (
    <div
      className="relative mx-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-sm bg-white border-2 border-ink shadow-2xl"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <img src={image} alt={alt} className="h-full w-full object-cover" />
    </div>
  )
}

export default function TransitionSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)')
    setIsMobile(mql.matches)
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  const toRed = isMobile ? [0, 0.01, 0.02, 0.94, 0.96] : [0, 0.02, 0.04, 0.94, 0.96]

  const background = useTransform(
    scrollYProgress,
    toRed,
    ['#fdfcfa', '#fdfcfa', '#fbc123', '#fbc123', '#fdfcfa'],
  )
  const textColor = useTransform(
    scrollYProgress,
    toRed,
    ['#0a1f3d', '#0a1f3d', '#0a1f3d', '#0a1f3d', '#0a1f3d'],
  )

  return (
    <motion.section
      ref={ref}
      style={{ background }}
      className="relative py-24 md:py-40 px-6 md:px-10 overflow-hidden"
    >
      <div className="md:grid md:grid-cols-2 md:gap-16 md:items-center">
        <div>
          <motion.h2
            style={{ color: textColor, fontFamily: 'var(--font-eurus)' }}
            className="font-bold leading-[0.88] tracking-tighter mb-10 max-w-4xl"
          >
            <RevealText style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}>INTERNSHIPS</RevealText>
            <RevealText delay={0.08} style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}>
              BUILT AROUND YOU
            </RevealText>
          </motion.h2>

          <motion.p
            style={{ color: textColor, fontFamily: 'var(--font-mono)' }}
            className="max-w-xl text-2xl md:text-3xl uppercase tracking-widest mb-4"
          >
            What Eurus does?
          </motion.p>

          <motion.p
            style={{ color: textColor, fontFamily: 'var(--font-jetbrains)' }}
            className="max-w-xl text-lg md:text-xl leading-relaxed mb-20 md:mb-0"
          >
            High school shouldn't be all stress and guessing about the future. EURUS is here so you
            don't end up spending thousands of dollars on a degree without ever really seeing what
            that industry feels like in real life. You get real-world experience now, while time is
            still on your side. Internships aren't meant to lock you into a career; they're meant to
            help you figure out whether you even like that industry, so you can make choices with
            confidence instead of anxiety.
          </motion.p>
        </div>

        <div className="relative flex flex-col items-center max-w-xl mx-auto md:max-w-none">
          <img
            src={tape}
            alt=""
            className="relative z-10 w-20 -mb-6 drop-shadow-md"
            style={{ transform: 'rotate(5deg)' }}
          />

          <PlaceholderPhoto rotate={-2} image={brookeCagle} alt="Placeholder photo" />

          <img
            src={tape}
            alt=""
            className="relative z-10 w-20 -my-6 drop-shadow-md"
            style={{ transform: 'rotate(-3deg)' }}
          />

          <PlaceholderPhoto rotate={1.5} image={img1047} alt="Placeholder photo" />
        </div>
      </div>
    </motion.section>
  )
}
