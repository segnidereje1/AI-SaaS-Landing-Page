import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPlayCircle } from 'react-icons/fi'
import { heroPills, serviceStats } from '../../data/siteContent'
import FloatingCard from '../shared/FloatingCard'

function MiniStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
      <div className="text-xs uppercase tracking-[0.2em] text-soft">{label}</div>
      <div className="mt-1 text-lg font-semibold text-cream">{value}</div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative scroll-mt-28 py-16 sm:py-20 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold-300/20 bg-gold-300/10 px-4 py-2 text-xs font-medium text-gold-100"
          >
            Private release for select teams
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="mt-6 max-w-3xl text-6xl font-semibold tracking-tight text-cream sm:text-7xl lg:text-[5.4rem] lg:leading-[0.95]"
          >
            A luxury AI experience
            <span className="gold-gradient block">for teams that expect more.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-soft"
          >
            Aurelia pairs editorial visuals with powerful orchestration, so your product feels polished, calm, and built for
            high-trust decision making.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-300 px-6 py-3 text-sm font-semibold text-[#050816] shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
            >
              Request access
              <FiArrowRight />
            </a>
            <a
              href="#experience"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-cream transition-transform duration-300 hover:-translate-y-0.5"
            >
              <FiPlayCircle />
              Explore the experience
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {heroPills.map((pill) => (
              <div key={pill} className="glass rounded-full px-4 py-2 text-sm text-soft">
                {pill}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(194,145,29,0.2),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(124,92,255,0.16),transparent_30%)] blur-3xl animate-float" />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,16,32,0.98),rgba(5,8,22,0.92))] p-4 shadow-luxury"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_38%)]" />
            <div className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/8 pb-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.24em] text-gold-200">Live studio</div>
                  <div className="mt-1 text-lg font-semibold text-cream">Aurelia command suite</div>
                </div>
                <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Active
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {serviceStats.map((stat) => (
                  <MiniStat key={stat.label} label={stat.label} value={stat.value} />
                ))}
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(194,145,29,0.12),rgba(255,255,255,0.02))] p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-soft">Executive rhythm</div>
                    <div className="text-xs text-soft">Updated moments ago</div>
                  </div>
                  <div className="mt-4 grid h-48 grid-cols-12 items-end gap-2 rounded-[1.25rem] bg-white/[0.03] p-4">
                    {[36, 58, 44, 70, 52, 82, 64, 88, 76, 92, 74, 98].map((height, index) => (
                      <motion.div
                        key={height}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 0.2 + index * 0.05, duration: 0.7 }}
                        className="rounded-full bg-[linear-gradient(180deg,#fff8e8_0%,#c2911d_42%,#805814_100%)]"
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-[1.35rem] border border-white/8 bg-white/[0.04] p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-soft">Priority briefing</div>
                    <div className="mt-2 text-sm leading-6 text-cream">
                      14 approvals moved from inbox chaos into a single elegant review lane.
                    </div>
                  </div>
                  <div className="rounded-[1.35rem] border border-white/8 bg-white/[0.04] p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-soft">Revenue pulse</div>
                    <div className="mt-2 text-sm leading-6 text-cream">
                      The latest campaign is pacing 18% ahead of last month with cleaner handoffs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <FloatingCard className="-left-4 top-8 w-60 sm:-left-10" delay={0.35}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gold-300/15 text-gold-200">
                <FiZap />
              </div>
              <div>
                <div className="text-sm font-semibold text-cream">Signal clarity</div>
                <div className="text-xs text-soft">Intentional alerts and calm visibility</div>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="-bottom-5 right-2 w-64 sm:-right-10" delay={0.5}>
            <div className="text-xs uppercase tracking-[0.22em] text-soft">Workflow tone</div>
            <div className="mt-2 text-sm font-semibold text-cream">
              Less noise, more confidence, and a distinctly premium feel.
            </div>
          </FloatingCard>
        </div>
      </div>
    </section>
  )
}

