import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import WhoIAm from './components/WhoIAm'
import WhyAI from './components/WhyAI'
import MyKindOfPeople from './components/MyKindOfPeople'
import HowIThink from './components/HowIThink'
import Connect from './components/Connect'
import DarkModeToggle from './components/DarkModeToggle'
import ScrollToTop from './components/ScrollToTop'
import ParticleBackground from './components/ParticleBackground'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="min-h-screen transition-colors duration-700 ease-in-out">
      <AnimatePresence>
        {darkMode && <ParticleBackground />}
      </AnimatePresence>
      
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <Hero />
        <WhoIAm />
        <WhyAI />
        <MyKindOfPeople />
        <HowIThink />
        <Connect />
      </main>
      
      <ScrollToTop />
    </div>
  )
}

export default App
