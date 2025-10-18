import React from 'react'
import { motion } from 'framer-motion'
import useScrollFade from '../hooks/useScrollFade'
import SectionParticles from './SectionParticles'

const WhoIAm = () => {
  const { elementRef, opacity } = useScrollFade(0.3)

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Same gradient as hero */}
      <div className="absolute inset-0 philosopher-gradient parallax-bg opacity-40"></div>
      
      {/* Section-specific sun particles */}
      <SectionParticles count={8} size="small" />
      
      <div className="container-max relative z-10">
        <motion.div 
          ref={elementRef}
          className="text-readable"
          style={{ 
            opacity: opacity,
            transition: 'opacity 0.8s ease-in-out'
          }}
        >
          <div className="accent-line">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-philosopher-gray mb-6">
              I'm an AI researcher and engineer by profession, currently working part-time at LUMS on foundational deep learning problems and part-time developing agentic AI systems for clients and my own ventures.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-philosopher-gray mb-6">
              But this website is not about my résumé. Those details live on my CV, Scholar, and LinkedIn.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-philosopher-gray mb-6">
              This is where I share the ideas that shape how I think. Much of my curiosity comes from philosophy, especially questions about knowledge, understanding, and intelligence. Alongside philosophy, tennis has been another space where I have learned about focus, balance, and perseverance, teaching me lessons that extend far beyond the court and shape how I approach learning, growth, and research.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-philosopher-gray">
              In many ways, my work in AI and my interests outside it are both part of the same search to understand the world and myself a little better.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhoIAm
