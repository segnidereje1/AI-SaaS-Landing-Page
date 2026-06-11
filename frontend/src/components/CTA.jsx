import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

export default function CTA() {
  return (
    <section className="py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(37,99,235,0.55))] px-6 py-14 text-center shadow-[0_40px_120px_rgba(2,6,23,0.35)] sm:px-10"
      >
        <div className="noise absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-3xl">
          <div className="section-label text-xs text-cyan-300">Call to action</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Start Building with AI Today
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-200 sm:text-base">
            Launch the landing page that feels like a premium startup, converts attention, and proves you can ship a
            high-end frontend.
          </p>
          <a
            href="#pricing"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
          >
            Get Started Free
            <FiArrowRight />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
