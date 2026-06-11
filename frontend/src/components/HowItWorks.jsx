import React from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiCpu, FiDatabase } from 'react-icons/fi'

const steps = [
  {
    title: 'Connect Your Data',
    desc: 'Securely connect apps, warehouses, and internal sources in minutes.',
    icon: FiDatabase,
  },
  {
    title: 'Let AI Process It',
    desc: 'The orchestration layer cleans, routes, and enriches everything automatically.',
    icon: FiCpu,
  },
  {
    title: 'Get Intelligent Results',
    desc: 'Receive confident answers, workflows, and measurable outcomes.',
    icon: FiCheckCircle,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-28 py-16 sm:py-20">
      <div className="max-w-2xl">
        <div className="section-label text-xs text-cyan-600 dark:text-cyan-300">How it works</div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          Three steps, but it feels like the product is doing the thinking for you.
        </h2>
      </div>

      <div className="relative mt-12 grid gap-5 md:grid-cols-3">
        <div className="absolute left-1/2 top-12 hidden h-[2px] w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent md:block" />
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.12, duration: 0.55 }}
              className="relative rounded-[1.75rem] border border-white/10 bg-white/65 p-6 backdrop-blur-xl dark:bg-slate-950/65"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                  <Icon size={22} />
                </div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400">0{index + 1}</div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-950 dark:text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{step.desc}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
