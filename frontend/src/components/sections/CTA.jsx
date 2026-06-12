import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

export default function CTA() {
  return (
    <section className="py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative overflow-hidden rounded-[2rem] border border-gold-300/20 bg-[linear-gradient(135deg,rgba(194,145,29,0.22),rgba(5,8,22,0.9),rgba(255,248,232,0.06))] p-8 shadow-luxury sm:p-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,248,232,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(124,92,255,0.12),transparent_28%)]" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="section-label text-xs text-gold-100/90">Final call</div>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-cream sm:text-5xl">
              Make the product feel as premium as the brand behind it.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-soft">
              Aurelia gives your landing page the same level of polish that your customers expect from the product itself.
            </p>
          </div>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-300 px-6 py-3 text-sm font-semibold text-[#050816] transition-transform hover:-translate-y-0.5"
          >
            Request access
            <FiArrowRight />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

