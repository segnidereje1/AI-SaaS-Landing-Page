import React from 'react'
import { motion } from 'framer-motion'
import { trustedPartners } from '../../data/siteContent'

export default function Trusted() {
  return (
    <section className="py-8 sm:py-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="glass rounded-[2rem] px-6 py-5"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="section-label text-xs text-gold-200/90">Trusted by modern teams</div>
            <p className="mt-2 text-sm leading-7 text-soft">
              Chosen by product leaders, operators, and creative teams that want a more refined AI workflow.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {trustedPartners.map((partner) => (
              <div
                key={partner}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-cream"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

