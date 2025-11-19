import { memo, useEffect, useRef, useState } from 'react'
import Lottie from 'lottie-react'

// LottieIcon
// - Lazy mounts when scrolled into view (IntersectionObserver)
// - Respects prefers-reduced-motion (renders a single frame)
// - Small, reusable micro-animation wrapper
function LottieIcon({ animationData, size = 24, loop = true, className = '' }) {
  const containerRef = useRef(null)
  const [inView, setInView] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(!!mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])

  useEffect(() => {
    if (!containerRef.current) return
    const el = containerRef.current
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          setInView(true)
          io.disconnect()
          break
        }
      }
    }, { rootMargin: '100px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={className} style={{ width: size, height: size }} aria-hidden>
      {inView && (
        <Lottie
          animationData={animationData}
          loop={!reduced && loop}
          autoplay={!reduced}
          style={{ width: '100%', height: '100%' }}
          initialSegment={reduced ? [0, 1] : undefined}
        />
      )}
    </div>
  )
}

export default memo(LottieIcon)
