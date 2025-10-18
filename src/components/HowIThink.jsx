import React from 'react'
import { motion } from 'framer-motion'
import { Circle, Crown, Box } from 'lucide-react'
import useScrollFade from '../hooks/useScrollFade'
import SectionParticles from './SectionParticles'

const HowIThink = () => {
  const { elementRef, opacity } = useScrollFade(0.3)

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Same gradient as hero */}
      <div className="absolute inset-0 philosopher-gradient parallax-bg opacity-40"></div>
      
      {/* Section-specific sun particles */}
      <SectionParticles count={9} size="small" />
      
      <div className="container-max relative z-10">
        <motion.div 
          ref={elementRef}
          className="text-readable"
          style={{ 
            opacity: opacity,
            transition: 'opacity 0.8s ease-in-out'
          }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Tennis images on the left */}
            <div className="flex flex-col items-center lg:items-start gap-7 order-2 lg:order-1">
              <motion.div
                className="flex justify-center lg:justify-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.img
                  src="/tennis.jpg"
                  alt="Tennis"
                  className="w-32 h-32 object-cover rounded-lg filter drop-shadow-lg"
                  style={{ 
                    objectPosition: 'left center' // Show left side of image
                  }}
                  initial={{ rotate: -15, scale: 1 }}
                  animate={{ rotate: -15, scale: 1 }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
              
              <motion.div
                className="flex justify-center lg:justify-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.img
                  src="/tennis2.jpg"
                  alt="Tennis 2"
                  className="w-32 h-32 object-cover rounded-lg filter drop-shadow-lg"
                  style={{ 
                    objectPosition: 'left center' // Show left side of image
                  }}
                  initial={{ rotate: 15, scale: 1 }}
                  animate={{ rotate: 15, scale: 1 }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
              
              <motion.div
                className="flex justify-center lg:justify-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.img
                  src="/tennis3.png"
                  alt="Tennis 3"
                  className="w-32 h-32 object-cover rounded-lg filter drop-shadow-lg"
                  style={{ 
                    objectPosition: 'center center' // Show center of image
                  }}
                  initial={{ rotate: -10, scale: 1 }}
                  animate={{ rotate: -10, scale: 1 }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
            </div>
            
            {/* Text content on the right */}
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-light mb-8 text-right text-gray-800 dark:text-philosopher-gray">
                Personal Interests
              </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-philosopher-gray">
              Tennis has become one of the most meaningful parts of my life. I started learning the sport relatively late, after I had already begun working in AI, and somehow the two have always felt connected.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-philosopher-gray">
              As I practiced different techniques and tried to improve, I couldn't help but draw parallels with deep learning and reinforcement learning. Ideas like generalization, overfitting, and non-convexity often came to mind. Every match and practice session felt like a living metaphor for learning itself, adapting, failing, adjusting, and finding better solutions through experience.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-philosopher-gray">
              My passion for the game runs deep. I have always admired Novak Djokovic for his mental strength and discipline, qualities that mirror the patience and persistence I value in research. In today's new era of tennis, I find myself rooting for Jannik Sinner, whose calm precision and consistency on court truly inspire me. I love watching tennis as much as I love playing it, and it continues to teach me about focus, resilience, and the quiet art of getting better.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-philosopher-gray">
              I also enjoy playing chess, solving Rubik's cubes and riddles as well.
            </p>
            </div>
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
