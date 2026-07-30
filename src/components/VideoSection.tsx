import { motion } from 'framer-motion'

export default function VideoSection() {
  return (
    <section id="video" className="bg-cream px-6 md:px-10 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative aspect-video w-full rounded-3xl overflow-hidden bg-ink flex items-center justify-center"
      >
        {/* Placeholder — swap this block for a <video> tag once the Eurus reel is ready */}
        <button
          type="button"
          className="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-red cursor-default"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 md:h-9 md:w-9 ml-1 text-cream">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </motion.div>
    </section>
  )
}
