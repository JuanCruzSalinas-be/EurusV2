import * as React from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'

export interface MagicTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

interface WordProps {
  children: string
  progress: MotionValue<number>
  range: [number, number]
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])

  return (
    <span className="relative mr-[0.3em]">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  )
}

export const MagicText: React.FC<MagicTextProps> = ({ text, className = '', style }) => {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.55'],
  })

  const words = text.split(' ')

  return (
    <p ref={container} className={`flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length

        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        )
      })}
    </p>
  )
}
