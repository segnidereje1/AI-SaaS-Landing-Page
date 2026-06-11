import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPlayCircle, FiShield, FiSparkles, FiTrendingUp } from 'react-icons/fi'
import FloatingCard from './FloatingCard'

function MiniStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/60 p-3 text-sm dark:bg-slate-950/70">
      <div className="text-slate-500 dark:text-slate-400">{label}</div>
      <div className="mt-1 font-semibold text-slate-950 dark:text-white">{value}</div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative scroll-mt-28 py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-80" />

      <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-2 text-xs font-medium text-primary-700 dark:text-primary-200"
          >
            <FiSparkles />
            Next-gen AI automation for modern teams
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl"
          >
            Build Smarter with AI-Powered Automation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300"
          >
            Ship premium AI workflows, intelligent analytics, and polished team experiences with a frontend that feels
            more like a funded startup than a landing page.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform duration-300 hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
            >
              Get Started Free
              <FiArrowRight />
            </a>
            <a
              href="#dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/70 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              <FiPlayCircle />
              Watch Demo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/55 px-4 py-2 backdrop-blur-xl dark:bg-slate-950/60">
              <FiShield className="text-emerald-500" />
              SOC 2 ready infrastructure
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/55 px-4 py-2 backdrop-blur-xl dark:bg-slate-950/60">
              <FiTrendingUp className="text-cyan-500" />
              Real-time insights and automation
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 animate-pulseGlow rounded-[2.5rem] bg-gradient-to-tr from-primary-500/20 via-cyan-400/10 to-fuchsia-400/20 blur-3xl" />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(30,41,59,0.86))] p-4 shadow-[0_30px_90px_rgba(2,6,23,0.45)]"
          >
            <div className="noise absolute inset-0 opacity-35" />
            <div className="relative rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/6 pb-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">Live overview</div>
                  <div className="mt-1 text-lg font-semibold text-white">AI Ops Control Center</div>
                </div>
                <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Online
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <MiniStat label="Revenue" value="$128.4K" />
                <MiniStat label="Tasks processed" value="9.4K" />
                <MiniStat label="Uptime" value="99.9%" />
                <MiniStat label="Countries" value="120+" />
              </div>

              <div className="mt-4 rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-300">Workflow velocity</div>
                  <div className="text-xs text-slate-400">Updated 2m ago</div>
                </div>
                <div className="mt-4 h-44 rounded-[1.25rem] bg-[linear-gradient(180deg,rgba(34,211,238,0.12),rgba(124,92,255,0.1))] p-4">
                  <div className="grid h-full grid-cols-12 items-end gap-2">
                    {[36, 58, 44, 70, 52, 82, 64, 88, 76, 92, 74, 98].map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 0.3 + index * 0.05, duration: 0.7 }}
                        className="rounded-full bg-gradient-to-t from-cyan-400 via-primary-500 to-fuchsia-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <FloatingCard className="-left-4 top-6 w-56 sm:-left-10" delay={0.35}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-500">
                <FiSparkles />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-950 dark:text-white">AI Insights</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Realtime anomaly detection</div>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="-bottom-5 right-2 w-60 sm:-right-10" delay={0.5}>
            <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Automation</div>
            <div className="mt-2 text-sm font-semibold text-slate-950 dark:text-white">
              Launch workflows from activity spikes
            </div>
          </FloatingCard>
        </div>
      </div>
    </section>
  )
}
