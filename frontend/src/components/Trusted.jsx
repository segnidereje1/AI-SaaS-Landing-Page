import React from 'react'
import { motion } from 'framer-motion'

const logos = ['Northstar', 'Cloudbase', 'Vertex', 'Orbit', 'Pulse', 'Nova', 'Relay', 'Cortex']

export default function Trusted() {
  return (
    <section id="trusted" className="scroll-mt-28 py-16 sm:py-20">
      <div className="rounded-[2rem] border border-white/10 bg-white/50 px-4 py-6 backdrop-blur-xl dark:bg-slate-950/50">
        <div className="mb-5 text-center text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
          Trusted by modern teams
        </div>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[var(--bg-page)] to-transparent dark:from-[var(--bg-page)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[var(--bg-page)] to-transparent dark:from-[var(--bg-page)]" />
          <motion.div
            className="flex w-[200%] items-center gap-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex min-w-[180px] items-center justify-center rounded-2xl border border-white/10 bg-white/60 px-5 py-4 text-sm font-medium text-slate-500 dark:bg-white/5 dark:text-slate-300"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
