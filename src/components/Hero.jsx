import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Typed from 'typed.js'
import { Linkedin, Mail, GraduationCap } from 'lucide-react'
import SectionParticles from './SectionParticles'

const Hero = () => {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Caught somewhere between knowing too much and understanding nothing.',
        'Learning to live in the tension between reason and wonder.'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 philosopher-gradient parallax-bg opacity-40"></div>
      
      {/* Section-specific sun particles */}
      <SectionParticles count={12} size="large" />
      
      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Portrait */}
          <motion.div 
            className="flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.img
                src="/WebPic.jpeg"
                alt="Mustafa Siddiqui"
                className="w-80 h-auto object-contain rounded-2xl image-tilt filter drop-shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 90 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-philosopher-orange to-transparent rounded-2xl opacity-20 blur-xl"></div>
            </div>
            
            {/* Social Links */}
            <motion.div 
              className="flex gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a 
                href="https://www.linkedin.com/in/mustafasid/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glow-hover p-3 rounded-full bg-white dark:bg-philosopher-charcoal shadow-lg"
              >
                <Linkedin className="w-6 h-6 text-philosopher-orange dark:text-neon-orange" />
              </a>
              <a 
                href="mailto:mustafa.siddiqiu24@gmail.com" 
                className="glow-hover p-3 rounded-full bg-white dark:bg-philosopher-charcoal shadow-lg"
              >
                <Mail className="w-6 h-6 text-philosopher-orange dark:text-neon-orange" />
              </a>
              <a 
                href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AH8HC4zTDiZigG2LLRQ36TWOsLVfbUTpMdLGYW_ir63fItN2UP-879bk2BpZ167n3wBNculXK860rMJalpaBhw&user=FUKguFgAAAAJ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glow-hover p-3 rounded-full bg-white dark:bg-philosopher-charcoal shadow-lg"
              >
                <GraduationCap className="w-6 h-6 text-philosopher-orange dark:text-neon-orange" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Text */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-light mb-6 text-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Hi, I'm{' '}
              <span className="text-philosopher-orange dark:text-neon-orange font-medium bg-gradient-to-r from-philosopher-orange via-orange-500 to-amber-500 dark:from-neon-orange dark:via-orange-400 dark:to-yellow-400 bg-clip-text text-transparent" style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.05)',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
              }}>
                Mustafa Siddiqui
              </span>
            </motion.h1>
            
            <motion.div 
              className="text-xl md:text-2xl text-gray-600 dark:text-philosopher-gray font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span ref={typedRef} className="min-h-[2.5rem] block"></span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
