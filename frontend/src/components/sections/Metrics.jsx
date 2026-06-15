import React from 'react'
import { motion } from 'framer-motion'
import AnimatedCounter from '../shared/AnimatedCounter'
import { metrics } from '../../data/siteContent'
import SectionHeading from '../shared/SectionHeading'

export default function Metrics() {
  return (
    <section id="results" className="scroll-mt-28 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Results"
        title="Numbers, presented cleanly."
        description="Quick to scan, easy to trust."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <motion.article
            key={metric.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="glass rounded-[1.8rem] p-5"
          >
            <div className="text-[0.65rem] uppercase tracking-[0.24em] text-soft">{metric.label}</div>
            <div className="mt-4 text-4xl font-semibold tracking-tight text-cream">
              <AnimatedCounter to={metric.value} suffix={metric.suffix} />
            </div>
            <p className="mt-2 text-sm leading-6 text-soft">{metric.note}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
