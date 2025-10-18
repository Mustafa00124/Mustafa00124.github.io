import React from 'react'
import { motion } from 'framer-motion'
import useScrollFade from '../hooks/useScrollFade'
import SectionParticles from './SectionParticles'

const WhyAI = () => {
  const { elementRef, opacity } = useScrollFade(0.3)

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Same gradient as hero */}
      <div className="absolute inset-0 philosopher-gradient parallax-bg opacity-40"></div>
      
      {/* Section-specific sun particles */}
      <SectionParticles count={10} size="small" />
      
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            ref={elementRef}
            style={{ 
              opacity: opacity,
              transition: 'opacity 0.8s ease-in-out'
            }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-philosopher-orange dark:text-neon-orange pulse-glow">
              Why I Work on AI
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-philosopher-gray">
                In the past few years, I have found philosophy deeply engaging, especially the field of epistemology and the study of decision-making. The ideas of Descartes' rationalism, Hume's empiricism, and Kant's synthesis between them have shaped how I think about knowledge and understanding.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700 dark:text-philosopher-gray">
                Yet, I believe that with the rise of AI, we now have a chance to move beyond these classical debates. For the first time, we can begin to mathematically explore what intelligence, knowledge, and understanding truly are.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700 dark:text-philosopher-gray">
                This pursuit is what drives me. It is the reason I find so much joy in research, the feeling that each new experiment, no matter how small, might bring us a little closer to understanding the nature of thought itself.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Animated SVG */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <svg 
              width="300" 
              height="200" 
              viewBox="0 0 300 200" 
              className="text-philosopher-orange dark:text-neon-orange"
            >
              {/* Animated wave representing thought/connection */}
              <motion.path
                d="M20,100 Q80,50 140,100 T260,100"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.8 }}
              />
              
              {/* Connection dots */}
              <motion.circle
                cx="20"
                cy="100"
                r="4"
                fill="currentColor"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
              />
              <motion.circle
                cx="140"
                cy="100"
                r="4"
                fill="currentColor"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 }}
              />
              <motion.circle
                cx="260"
                cy="100"
                r="4"
                fill="currentColor"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.4 }}
              />
              
              {/* Thought bubbles */}
              <motion.circle
                cx="80"
                cy="60"
                r="8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.6"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.6 }}
              />
              <motion.circle
                cx="200"
                cy="140"
                r="6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.4"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.8 }}
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyAI
