import React, { useMemo } from 'react'

const SectionParticles = ({ count = 6, size = 'small' }) => {
  // Generate random particles for this specific section
  const particles = useMemo(() => {
    const sizeRange = size === 'large' ? { min: 10, max: 18 } : { min: 4, max: 10 }
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * (sizeRange.max - sizeRange.min) + sizeRange.min,
      left: Math.random() * 100, // 0-100%
      top: Math.random() * 100, // 0-100%
      animationDelay: Math.random() * 10, // 0-10s delay
      animationDuration: Math.random() * 8 + 12, // 12-20s duration
      opacity: Math.random() * 0.4 + 0.3, // 0.3-0.7 opacity (more visible)
    }))
  }, [count, size])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            // Multiple glow layers with dark orange tones
            boxShadow: `
              0 0 ${particle.size * 3}px rgba(255, 165, 0, 0.9),
              0 0 ${particle.size * 6}px rgba(255, 140, 0, 0.7),
              0 0 ${particle.size * 9}px rgba(255, 140, 0, 0.5),
              0 0 ${particle.size * 12}px rgba(255, 140, 0, 0.3),
              0 0 ${particle.size * 15}px rgba(255, 140, 0, 0.1)
            `,
            // Dark orange radial gradient for sun-like effect
            background: `radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, #FF8C00 40%, #FF7F00 70%, #FF6B00 100%)`,
            animation: `floatUp ${particle.animationDuration}s ease-in-out infinite`,
            animationDelay: `${particle.animationDelay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default SectionParticles
