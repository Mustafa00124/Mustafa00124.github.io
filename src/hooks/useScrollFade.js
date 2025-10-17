import { useState, useEffect, useRef } from 'react'

const useScrollFade = (threshold = 0.3) => {
  const [isVisible, setIsVisible] = useState(false)
  const [opacity, setOpacity] = useState(0)
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const rect = entry.boundingClientRect
        const windowHeight = window.innerHeight
        
        // Calculate how much of the element is visible
        const elementTop = rect.top
        const elementBottom = rect.bottom
        const elementHeight = rect.height
        
        // Element is entering from bottom
        if (elementTop < windowHeight && elementBottom > 0) {
          const visibleHeight = Math.min(elementBottom, windowHeight) - Math.max(elementTop, 0)
          const visibilityRatio = Math.max(0, Math.min(1, visibleHeight / elementHeight))
          
          // Fade in when entering view
          if (visibilityRatio > threshold) {
            setIsVisible(true)
            setOpacity(1)
          } else {
            // Fade out when leaving view
            setIsVisible(false)
            setOpacity(0)
          }
        } else {
          // Element is completely out of view
          setIsVisible(false)
          setOpacity(0)
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: '0px 0px -10% 0px'
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold])

  return { elementRef, isVisible, opacity }
}

export default useScrollFade
