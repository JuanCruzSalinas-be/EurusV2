import { useEffect, useRef } from 'react'
import eurusVideo from '../assets/video/eurus-video.mp4'

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const inViewRef = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="video" className="bg-cream py-24 md:py-32">
      <div className="relative left-1/2 w-screen -translate-x-1/2">
        <video
          ref={videoRef}
          src={eurusVideo}
          muted
          loop
          playsInline
          autoPlay
          disablePictureInPicture
          disableRemotePlayback
          controlsList="nodownload noplaybackrate nofullscreen"
          tabIndex={-1}
          onContextMenu={(e) => e.preventDefault()}
          onPause={(e) => {
            if (inViewRef.current) e.currentTarget.play().catch(() => {})
          }}
          className="block w-full h-auto pointer-events-none select-none"
        />
      </div>
    </section>
  )
}
