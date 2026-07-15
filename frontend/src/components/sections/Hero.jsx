import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiMousePointer, FiPlay, FiZap } from 'react-icons/fi'
import { serviceStats } from '../../data/siteContent'

function StatBadge({ label, value }) {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
      <div className="text-[0.62rem] uppercase tracking-[0.22em] text-soft">{label}</div>
      <div className="mt-1 text-lg font-semibold text-cream">{value}</div>
    </div>
  )
}

function Hero3DScene() {
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: 18, rotateY: -18, y: 28 }}
      animate={{ opacity: 1, rotateX: 0, rotateY: 0, y: 0 }}
      transition={{ delay: 0.18, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="hero-stage relative mx-auto h-[34rem] w-full max-w-[34rem] sm:h-[38rem]"
    >
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />

      <motion.div
        animate={{ rotateY: [-8, 8, -8], rotateX: [3, -5, 3], y: [0, -12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="hero-device-3d"
      >
        <div className="hero-device-face">
          <div className="flex items-center justify-between border-b border-ink-200/80 px-5 py-4">
            <div>
              <div className="text-[0.62rem] uppercase tracking-[0.24em] text-gold-700">Live build</div>
              <div className="mt-1 text-xl font-semibold text-cream">Aurelia Studio</div>
            </div>
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            </div>
          </div>

          <div className="grid gap-4 p-5">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/70 bg-[linear-gradient(135deg,rgba(238,199,93,0.34),rgba(124,92,255,0.16),rgba(255,255,255,0.76))] p-5 shadow-inner">
              <div className="absolute inset-x-0 top-0 h-px bg-white/80" />
              <div className="max-w-[13rem] text-3xl font-semibold leading-[0.95] text-cream">
                Digital work that feels alive.
              </div>
              <div className="mt-5 h-2 w-32 rounded-full bg-white/70" />
              <div className="mt-3 h-2 w-20 rounded-full bg-white/55" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-[1.2rem] border border-ink-200 bg-white/75 p-4">
                <FiZap className="text-gold-700" />
                <div className="mt-4 text-2xl font-semibold text-cream">72h</div>
                <div className="text-xs text-soft">prototype sprint</div>
              </div>
              <div className="rounded-[1.2rem] border border-ink-200 bg-white/75 p-4">
                <FiMousePointer className="text-gold-700" />
                <div className="mt-4 text-2xl font-semibold text-cream">+38%</div>
                <div className="text-xs text-soft">CTA lift</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -18, 0], rotateZ: [-7, -2, -7] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="hero-float-card left-1 top-20 w-44 sm:left-0"
      >
        <div className="text-[0.62rem] uppercase tracking-[0.22em] text-soft">Visual system</div>
        <div className="mt-3 flex gap-2">
          <span className="h-10 flex-1 rounded-xl bg-gold-300" />
          <span className="h-10 flex-1 rounded-xl bg-slate-900" />
          <span className="h-10 flex-1 rounded-xl bg-white" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 16, 0], rotateZ: [7, 2, 7] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="hero-float-card bottom-20 right-0 w-52"
      >
        <div className="text-[0.62rem] uppercase tracking-[0.22em] text-soft">Client note</div>
        <p className="mt-3 text-sm leading-6 text-cream">The experience feels deliberate instead of templated.</p>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative scroll-mt-28 py-16 sm:py-20 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <div className="inline-flex items-center rounded-full border border-gold-300/30 bg-gold-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold-700">
            Top 100 design studios in USA
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.65 }}
            className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-cream sm:text-6xl lg:text-[5rem] lg:leading-[0.92]"
          >
            Where stunning design
            <span className="gold-gradient block">meets flawless functionality.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.65 }}
            className="mt-6 max-w-2xl text-base leading-8 text-soft sm:text-lg"
          >
            We craft high-converting websites, apps, and brands for startups, agencies, and businesses that
            refuse to settle for good enough.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.65 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-300 px-6 py-3.5 text-sm font-semibold text-[#050816] transition-transform hover:-translate-y-0.5"
            >
              Book a meeting
              <FiArrowRight />
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-ink-50"
            >
              View selected work
              <FiPlay />
            </a>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {serviceStats.map((stat) => (
              <StatBadge key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        </div>

        <div className="relative min-h-[34rem] lg:min-h-[38rem]">
          <Hero3DScene />
        </div>
      </div>
    </section>
  )
}
