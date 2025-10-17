import React from 'react'
import { motion } from 'framer-motion'
import { Circle, Crown, Box } from 'lucide-react'
import useScrollFade from '../hooks/useScrollFade'

const HowIThink = () => {
  const { elementRef, opacity } = useScrollFade(0.3)

  return (
    <section className="section-padding bg-white dark:bg-philosopher-charcoal relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-philosopher-orange/20 to-transparent"></div>
      </div>
      
      <div className="container-max relative z-10">
        <motion.div 
          ref={elementRef}
          className="text-readable"
          style={{ 
            opacity: opacity,
            transition: 'opacity 0.8s ease-in-out'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center text-gray-800 dark:text-philosopher-gray">
            How I Think
          </h2>
          
          <div className="space-y-8">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-philosopher-gray">
              The other thing that has shaped my mind is tennis.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-philosopher-gray">
              I love the{' '}
              <motion.span 
                className="text-philosopher-orange dark:text-neon-orange font-medium cursor-pointer"
                whileHover={{ 
                  color: '#FF6B35',
                  textShadow: '0 0 8px rgba(248, 184, 78, 0.5)',
                  scale: 1.05
                }}
                transition={{ duration: 0.3 }}
              >
                strategy
              </motion.span>
              {' '}— how every point is a problem, every rally a conversation of adjustments.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-philosopher-gray">
              It taught me that{' '}
              <motion.span 
                className="text-philosopher-orange dark:text-neon-orange font-medium cursor-pointer"
                whileHover={{ 
                  color: '#FF6B35',
                  textShadow: '0 0 8px rgba(248, 184, 78, 0.5)',
                  scale: 1.05
                }}
                transition={{ duration: 0.3 }}
              >
                learning
              </motion.span>
              {' '}isn't about knowing the answer, but about adapting with awareness.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-philosopher-gray">
              Chess, riddles, and collecting Rubik's cubes give me the same feeling — the quiet joy of finding structure in complexity.
            </p>
          </div>
          
          {/* Decorative icons */}
          <div className="flex justify-center gap-8 mt-12 opacity-30">
            <motion.div
              whileHover={{ scale: 1.2, opacity: 0.6 }}
              transition={{ duration: 0.3 }}
            >
              <Circle className="w-8 h-8 text-philosopher-orange dark:text-neon-orange" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, opacity: 0.6 }}
              transition={{ duration: 0.3 }}
            >
              <Crown className="w-8 h-8 text-philosopher-orange dark:text-neon-orange" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, opacity: 0.6 }}
              transition={{ duration: 0.3 }}
            >
              <Box className="w-8 h-8 text-philosopher-orange dark:text-neon-orange" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowIThink
