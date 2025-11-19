import { memo } from 'react'
import Lottie from 'lottie-react'

// Simple wrapper to render a lightweight lottie animation icon-size
// Props: animationData (object), size (number), loop (bool), className
function LottieIcon({ animationData, size = 24, loop = true, className = '' }) {
  return (
    <div className={className} style={{ width: size, height: size }} aria-hidden>
      <Lottie animationData={animationData} loop={loop} autoplay style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default memo(LottieIcon)
