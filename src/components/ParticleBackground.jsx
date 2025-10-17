import React from 'react'

const ParticleBackground = () => {
  // Generate random particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    top: Math.random() * 100,
    animationDelay: Math.random() * 20,
    animationDuration: Math.random() * 10 + 15,
  }))

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-neon-orange opacity-20"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animation: `float ${particle.animationDuration}s ease-in-out infinite`,
            animationDelay: `${particle.animationDelay}s`,
          }}
        />
      ))}
      
      {/* Add some connecting lines */}
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={`line-${i}`}
          className="absolute bg-neon-orange opacity-5"
          style={{
            width: `${Math.random() * 200 + 50}px`,
            height: '1px',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animation: `pulse ${Math.random() * 5 + 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  )
}

export default ParticleBackground
