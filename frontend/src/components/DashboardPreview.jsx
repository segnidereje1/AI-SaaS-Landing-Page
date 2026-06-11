import React from 'react'
import { motion } from 'framer-motion'
import {
  FiArrowUpRight,
  FiClock,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from 'react-icons/fi'
import AnimatedCounter from './AnimatedCounter'

function Metric({ label, value, delta, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/60 p-4 backdrop-blur-xl dark:bg-slate-950/60">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{label}</div>
          <div className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{value}</div>
        </div>
        <div className="rounded-xl bg-primary-500/12 p-2 text-primary-500">
          <Icon size={18} />
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 text-sm text-emerald-500">
        <FiArrowUpRight />
        <span>{delta}</span>
      </div>
    </div>
  )
}

function ActivityRow({ name, status, time }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/55 px-4 py-3 dark:bg-white/5">
      <div>
        <div className="font-medium text-slate-950 dark:text-white">{name}</div>
        <div className="text-xs text-slate-500 dark:text-slate-400">{status}</div>
      </div>
      <div className="text-sm text-slate-500 dark:text-slate-400">{time}</div>
    </div>
  )
}

export default function DashboardPreview() {
  const chartPoints = '20,84 52,62 84,72 116,38 148,50 180,28 212,36 244,18 276,30 308,12'

  return (
    <section id="dashboard" className="scroll-mt-28 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(30,41,59,0.9))] p-6 shadow-[0_40px_120px_rgba(2,6,23,0.45)] sm:p-8"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="section-label text-xs text-cyan-300/90">Interactive Dashboard</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Everything a serious AI product needs in one polished surface.
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            <FiZap />
            Live model orchestration
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.45fr_0.95fr]">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <Metric label="Monthly Revenue" value="$128.4K" delta="+18.2%" icon={FiTrendingUp} />
              <Metric label="Active Users" value="24.8K" delta="+11.7%" icon={FiUsers} />
              <Metric label="Automation Runs" value="9.4K" delta="+29.4%" icon={FiClock} />
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-5 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-400">Revenue trend</div>
                  <div className="mt-1 text-lg font-semibold text-white">Last 30 days performance</div>
                </div>
                <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  +34.5% YoY
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-white/6 bg-white/5 p-4">
                <svg viewBox="0 0 340 120" className="h-48 w-full">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="55%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#f472b6" />
                    </linearGradient>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(34,211,238,0.42)" />
                      <stop offset="100%" stopColor="rgba(34,211,238,0)" />
                    </linearGradient>
                  </defs>
                  <path d="M20 100 L20 84 L52 62 L84 72 L116 38 L148 50 L180 28 L212 36 L244 18 L276 30 L308 12 L308 100 Z" fill="url(#areaGradient)" />
                  <polyline points={chartPoints} fill="none" stroke="url(#lineGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  {chartPoints.split(' ').map((point) => {
                    const [cx, cy] = point.split(',')
                    return <circle key={point} cx={cx} cy={cy} r="4" fill="#fff" stroke="#8b5cf6" strokeWidth="2" />
                  })}
                </svg>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/60 p-5 backdrop-blur-xl dark:bg-slate-950/70">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">AI throughput</div>
                  <div className="mt-1 text-2xl font-semibold text-slate-950 dark:text-white">
                    <AnimatedCounter to={97.8} suffix="%" />
                  </div>
                </div>
                <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500">
                  Stable
                </div>
              </div>
              <div className="mt-5 h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-cyan-400 via-primary-500 to-fuchsia-400" />
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/60 p-5 backdrop-blur-xl dark:bg-slate-950/70">
              <div className="text-sm text-slate-500 dark:text-slate-400">User activity</div>
              <div className="mt-4 space-y-3">
                <ActivityRow name="Workflow deployed" status="Payment retry automation" time="2m ago" />
                <ActivityRow name="Model retrained" status="Prediction accuracy +4.2%" time="11m ago" />
                <ActivityRow name="API spike detected" status="Auto-scaled 6 nodes" time="34m ago" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
