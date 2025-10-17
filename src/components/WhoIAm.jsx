import React from 'react'
import { motion } from 'framer-motion'
import useScrollFade from '../hooks/useScrollFade'

const WhoIAm = () => {
  const { elementRef, opacity } = useScrollFade(0.3)

  return (
    <section className="section-padding bg-white dark:bg-philosopher-charcoal">
      <div className="container-max">
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
              I'm an AI researcher and engineer by profession, but I like to think of myself mostly as a philosopher.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-philosopher-gray mb-6">
              My life's aim right now is to understand the world and my own reality. I spend a lot of time thinking about ideas from epistemology and the philosophy of knowledge.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-philosopher-gray">
              That's exactly why I'm drawn to my work in AI research and foundational deep learning. Each experiment feels like it brings me closer to my ultimate question — what does it really mean to understand?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhoIAm
