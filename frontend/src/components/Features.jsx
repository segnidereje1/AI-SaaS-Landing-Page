import React from 'react'
import { motion } from 'framer-motion'
import {
  FiBarChart2,
  FiBox,
  FiCpu,
  FiLayers,
  FiMessageSquare,
  FiUsers,
} from 'react-icons/fi'

const items = [
  {
    title: 'AI Content Generation',
    desc: 'Create product copy, emails, and knowledge-base content instantly.',
    icon: FiCpu,
  },
  {
    title: 'Workflow Automation',
    desc: 'Route approvals, trigger actions, and remove manual busywork.',
    icon: FiLayers,
  },
  {
    title: 'Smart Analytics',
    desc: 'Turn product usage into sharp decisions with modern analytics.',
    icon: FiBarChart2,
  },
  {
    title: 'Team Collaboration',
    desc: 'Keep everyone aligned with shared context and live handoffs.',
    icon: FiUsers,
  },
  {
    title: 'API Integration',
    desc: 'Connect your stack with clean APIs, SDKs, and webhooks.',
    icon: FiBox,
  },
  {
    title: 'Real-time Insights',
    desc: 'See what matters as it happens with live anomaly detection.',
    icon: FiMessageSquare,
  },
]

export default function Features() {
  return (
    <section id="features" className="scroll-mt-28 py-16 sm:py-20">
      <div className="max-w-2xl">
        <div className="section-label text-xs text-cyan-600 dark:text-cyan-300">Platform features</div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          A feature set that feels like a category leader, not a template.
        </h2>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              whileHover={{ y: -8 }}
              className="glass group rounded-[1.75rem] p-6 transition-all duration-300 hover:border-primary-500/30"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-primary-500/10 p-3 text-primary-500 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.desc}</p>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
