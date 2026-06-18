import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPlay } from 'react-icons/fi'
import { serviceStats } from '../../data/siteContent'

function StatBadge({ label, value }) {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
      <div className="text-[0.62rem] uppercase tracking-[0.22em] text-soft">{label}</div>
      <div className="mt-1 text-lg font-semibold text-cream">{value}</div>
    </div>
  )
}

function ArtworkCard({ className = '', children }) {
  return (
    <div
      className={`absolute overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.14)] ${className}`}
    >
      {children}
    </div>
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

        <div className="relative min-h-[38rem]">
          <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_20%_20%,rgba(194,145,29,0.18),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(124,92,255,0.12),transparent_32%)] blur-2xl" />

          <ArtworkCard className="left-8 top-4 h-[18rem] w-[15rem] rotate-[-8deg]">
            <div className="flex h-full flex-col justify-between bg-[linear-gradient(180deg,rgba(255,248,232,0.8),rgba(255,255,255,0.95))] p-5">
              <div className="text-[0.62rem] uppercase tracking-[0.24em] text-soft">Hero concept</div>
              <div>
                <div className="text-3xl font-semibold leading-none text-cream">72</div>
                <div className="mt-1 text-sm text-soft">hour prototype guarantee</div>
              </div>
            </div>
          </ArtworkCard>

          <ArtworkCard className="right-2 top-10 h-[22rem] w-[19rem] rotate-[4deg]">
            <div className="flex h-full flex-col bg-white">
              <div className="border-b border-ink-200 p-5">
                <div className="text-xs uppercase tracking-[0.24em] text-gold-700">Live site preview</div>
                <div className="mt-2 text-2xl font-semibold text-cream">Aurelia Studio</div>
              </div>
              <div className="grid flex-1 gap-3 p-5">
                <div className="rounded-[1.25rem] bg-[linear-gradient(135deg,rgba(194,145,29,0.14),rgba(255,248,232,0.9))] p-4">
                  <div className="text-sm font-semibold text-cream">Visual direction</div>
                  <div className="mt-1 text-sm text-soft">Strong hierarchy. Calm pacing.</div>
                </div>
                <div className="rounded-[1.25rem] border border-ink-200 bg-ink-50 p-4">
                  <div className="text-sm font-semibold text-cream">Conversion lift</div>
                  <div className="mt-1 text-sm text-soft">Premium polish that still sells.</div>
                </div>
              </div>
            </div>
          </ArtworkCard>

          <ArtworkCard className="left-0 bottom-4 h-[13rem] w-[18rem] rotate-[6deg]">
            <div className="flex h-full flex-col justify-between p-5">
              <div className="text-xs uppercase tracking-[0.22em] text-soft">Client note</div>
              <p className="max-w-[13rem] text-sm leading-6 text-cream">
                The whole experience feels deliberate instead of templated.
              </p>
              <div className="text-sm font-semibold text-gold-700">Ari Chen, Founder</div>
            </div>
          </ArtworkCard>
        </div>
      </div>
    </section>
  )
}
