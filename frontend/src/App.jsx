import React, { useEffect, useState } from 'react'
import { MotionConfig, motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Showcase from './components/sections/Showcase'
import Metrics from './components/sections/Metrics'
import Process from './components/sections/Process'
import Testimonials from './components/sections/Testimonials'
import Pricing from './components/sections/Pricing'
import FAQ from './components/sections/FAQ'

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0

      setScrollProgress(progress)
      setShowTopButton(scrollTop > 600)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <div className="theme-page relative min-h-screen overflow-hidden transition-colors duration-300">
        <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent">
          <div
            className="h-full rounded-r-full bg-gradient-to-r from-gold-400 via-gold-300 to-fuchsia-400 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        <div className="pointer-events-none fixed inset-0 opacity-80">
          <div className="absolute left-[-6rem] top-[-10rem] h-80 w-80 rounded-full bg-gold-400/12 blur-3xl animate-drift" />
          <div className="absolute right-[-8rem] top-[16rem] h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl animate-drift [animation-delay:1.4s]" />
          <div className="absolute bottom-[-8rem] left-[18%] h-72 w-72 rounded-full bg-cyan-400/8 blur-3xl animate-drift [animation-delay:2.1s]" />
        </div>

        <Navbar />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative mx-auto flex w-full max-w-7xl flex-col px-4 pb-20 pt-3 sm:px-6 lg:px-8"
        >
          <Hero />
          <Features />
          <Showcase />
          <Metrics />
          <Process />
          <Testimonials />
          <Pricing />
          <FAQ />
        </motion.main>

        <Footer />

        {showTopButton ? (
          <button
            type="button"
            aria-label="Scroll back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-[60] inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold-300/30 bg-white/90 text-gold-700 shadow-[0_18px_45px_rgba(15,23,42,0.18)] backdrop-blur transition-transform hover:-translate-y-1"
          >
            <FiArrowUp />
          </button>
        ) : null}
      </div>
    </MotionConfig>
  )
}
