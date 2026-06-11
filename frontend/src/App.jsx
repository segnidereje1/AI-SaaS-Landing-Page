import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trusted from './components/Trusted'
import Features from './components/Features'
import DashboardPreview from './components/DashboardPreview'
import Stats from './components/Stats'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(90,102,255,0.18),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.16),_transparent_28%),linear-gradient(180deg,_var(--bg-page)_0%,_var(--bg-page-alt)_100%)] text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute left-[-8rem] top-[-10rem] h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-[-7rem] top-[18rem] h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-[22%] h-64 w-64 rounded-full bg-fuchsia-400/10 blur-3xl" />
      </div>

      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative mx-auto flex w-full max-w-7xl flex-col px-4 pb-20 sm:px-6 lg:px-8"
      >
        <Hero />
        <Trusted />
        <Features />
        <DashboardPreview />
        <Stats />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </motion.main>

      <Footer />
    </div>
  )
}
