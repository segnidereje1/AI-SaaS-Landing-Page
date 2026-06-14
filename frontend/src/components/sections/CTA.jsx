import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="theme-accent-panel theme-panel relative overflow-hidden rounded-[2rem] p-8 sm:p-10"
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
        </div>
      </motion.div>
    </section>
  )
}
