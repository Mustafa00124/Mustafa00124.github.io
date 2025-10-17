import React from 'react'
import { motion } from 'framer-motion'
import useScrollFade from '../hooks/useScrollFade'

const MyKindOfPeople = () => {
  const { elementRef, opacity } = useScrollFade(0.3)

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Orange gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-philosopher-orange/10 via-philosopher-orange/5 to-transparent"></div>
      <div className="dark:absolute dark:inset-0 dark:bg-gradient-to-br dark:from-neon-orange/10 dark:via-neon-orange/5 dark:to-transparent"></div>
      
      <div className="container-max relative z-10">
        <motion.div 
          ref={elementRef}
          className="text-readable text-center"
          style={{ 
            opacity: opacity,
            transition: 'opacity 0.8s ease-in-out'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-gray-800 dark:text-philosopher-gray">
            My Kind of People
          </h2>
          
          <div className="space-y-8">
            <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-philosopher-gray italic">
              I enjoy being around people who question what intelligence really is — people who wonder why we think, not just how.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              Those conversations push research forward in ways no experiment can.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              I hope to keep finding spaces where curiosity isn't just about building systems, but about understanding the minds behind them.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MyKindOfPeople
