import React from 'react'
import { motion } from 'framer-motion'
import { processSteps } from '../../data/siteContent'
import SectionHeading from '../shared/SectionHeading'

export default function Process() {
  return (
    <section id="process" className="scroll-mt-28 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Process"
        title="A simple three-step flow that keeps the experience calm and premium."
        description="The structure is intentionally sparse. Each step focuses on clarity, then lets the visuals carry the sense of luxury."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <motion.article
            key={step.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
            className="glass rounded-[1.8rem] p-6"
          >
            <div className="text-xs uppercase tracking-[0.24em] text-gold-200/90">0{index + 1}</div>
            <h3 className="mt-4 text-3xl font-semibold text-cream">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-soft">{step.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

