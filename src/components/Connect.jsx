import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Mail, GraduationCap } from 'lucide-react'
import useScrollFade from '../hooks/useScrollFade'
import SectionParticles from './SectionParticles'

const Connect = () => {
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
            If you share similar interests or are interested in working with me, let's connect.
          </p>
          
          <div className="flex justify-center gap-6 flex-wrap">
            <motion.a 
              href="https://www.linkedin.com/in/mustafasid/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-white dark:bg-philosopher-charcoal rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5 text-philosopher-orange dark:text-neon-orange group-hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-700 dark:text-philosopher-gray font-medium">LinkedIn</span>
            </motion.a>
            
            <motion.a 
              href="mailto:mustafa.siddiqiu24@gmail.com" 
              className="group flex items-center gap-3 px-6 py-3 bg-white dark:bg-philosopher-charcoal rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 text-philosopher-orange dark:text-neon-orange group-hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-700 dark:text-philosopher-gray font-medium">Email</span>
            </motion.a>
            
            <motion.a 
              href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AH8HC4zTDiZigG2LLRQ36TWOsLVfbUTpMdLGYW_ir63fItN2UP-879bk2BpZ167n3wBNculXK860rMJalpaBhw&user=FUKguFgAAAAJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-white dark:bg-philosopher-charcoal rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GraduationCap className="w-5 h-5 text-philosopher-orange dark:text-neon-orange group-hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-700 dark:text-philosopher-gray font-medium">Google Scholar</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Connect
