import React from 'react'
import { motion } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'

const stats = [
  { value: 500000, suffix: '+', label: 'Users' },
  { value: 50000000, suffix: '+', label: 'Tasks Completed' },
  { value: 99.9, suffix: '%', label: 'Uptime' },
  { value: 120, suffix: '+', label: 'Countries' },
]

export default function Stats() {
  return (
    <section id="stats" className="scroll-mt-28 py-16 sm:py-20">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.article
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="glass rounded-[1.75rem] p-6 text-center"
          >
            <div className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">
              <AnimatedCounter to={stat.value} suffix={stat.suffix} />
            </div>
            <div className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
              {stat.label}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
