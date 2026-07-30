import { motion } from 'framer-motion'
import type { ElementType, ReactNode } from 'react'

const line = {
  hidden: { y: '110%' },
  visible: (delay: number) => ({
    y: '0%',
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function RevealText({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  style,
}: {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
  style?: React.CSSProperties
}) {
  const MotionTag = motion(Tag as never)

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
      style={{ overflow: 'hidden', ...style }}
    >
      <motion.span variants={line} custom={delay} style={{ display: 'inline-block' }}>
        {children}
      </motion.span>
    </MotionTag>
  )
}
