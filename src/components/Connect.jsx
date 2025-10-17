import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'
import useScrollFade from '../hooks/useScrollFade'

const Connect = () => {
  const { elementRef, opacity } = useScrollFade(0.3)

  return (
    <section className="section-padding bg-philosopher-cream dark:bg-gray-900">
      <div className="container-max">
        <motion.div 
          ref={elementRef}
          className="text-center"
          style={{ 
            opacity: opacity,
            transition: 'opacity 0.8s ease-in-out'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-800 dark:text-philosopher-gray">
            Let's Connect
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-philosopher-gray mb-12 max-w-2xl mx-auto">
            If you think about intelligence, learning, or meaning the way I do, I'd love to talk.
          </p>
          
          <div className="flex justify-center gap-8">
            <motion.a 
              href="https://linkedin.com/in/mustafa-siddiqui" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-white dark:bg-philosopher-charcoal rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6 text-philosopher-orange dark:text-neon-orange group-hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-700 dark:text-philosopher-gray font-medium">LinkedIn</span>
            </motion.a>
            
            <motion.a 
              href="mailto:mustafa@example.com" 
              className="group flex items-center gap-3 px-8 py-4 bg-white dark:bg-philosopher-charcoal rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6 text-philosopher-orange dark:text-neon-orange group-hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-700 dark:text-philosopher-gray font-medium">Email</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Connect
