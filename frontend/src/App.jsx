import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Trusted from './components/sections/Trusted'
import Features from './components/sections/Features'
import Showcase from './components/sections/Showcase'
import Metrics from './components/sections/Metrics'
import Process from './components/sections/Process'
import Testimonials from './components/sections/Testimonials'
import Pricing from './components/sections/Pricing'
import FAQ from './components/sections/FAQ'
import CTA from './components/sections/CTA'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(194,145,29,0.2),_transparent_26%),radial-gradient(circle_at_80%_10%,_rgba(95,71,188,0.16),_transparent_30%),linear-gradient(180deg,_#050816_0%,_#0b1020_42%,_#060913_100%)] text-cream transition-colors duration-300">
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
        <Trusted />
        <Features />
        <Showcase />
        <Metrics />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </motion.main>

      <Footer />
    </div>
  )
}
