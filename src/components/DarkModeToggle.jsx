import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.button
      onClick={toggleDarkMode}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-philosopher-charcoal shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? (
          <Sun className="w-6 h-6 text-philosopher-orange" />
        ) : (
          <Moon className="w-6 h-6 text-philosopher-orange" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default DarkModeToggle
