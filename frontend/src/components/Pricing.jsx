import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheck, FiZap } from 'react-icons/fi'

const plans = [
  {
    name: 'Starter',
    price: { monthly: 19, yearly: 190 },
    description: 'For individuals and small teams getting started.',
    features: ['5 AI workflows', 'Basic analytics', 'Email support', 'Community access'],
  },
  {
    name: 'Professional',
    price: { monthly: 49, yearly: 490 },
    description: 'For growing teams that need serious automation.',
    features: ['Unlimited workflows', 'Advanced analytics', 'Priority support', 'API access', 'Collaboration tools'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: 99, yearly: 990 },
    description: 'For orgs that need scale, control, and custom support.',
    features: ['SSO & roles', 'Dedicated support', 'Custom SLAs', 'Private deployment', 'Security reviews'],
  },
]

function PriceValue({ amount, yearly }) {
  return (
    <div className="flex items-end gap-1">
      <span className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">
        ${amount}
      </span>
      <span className="pb-1 text-sm text-slate-500 dark:text-slate-400">/{yearly ? 'yr' : 'mo'}</span>
    </div>
  )
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="scroll-mt-28 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="section-label text-xs text-cyan-600 dark:text-cyan-300">Pricing</div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          Simple pricing with enough polish to feel enterprise-ready.
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Toggle between monthly and yearly billing. The yearly plan keeps things friendly for teams ready to commit.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-full border border-white/10 bg-white/60 p-1 backdrop-blur-xl dark:bg-slate-950/70">
          <button
            type="button"
            onClick={() => setYearly(false)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              !yearly ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setYearly(true)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              yearly ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {plans.map((plan, index) => {
          const price = yearly ? plan.price.yearly : plan.price.monthly

          return (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-[1.75rem] border p-6 backdrop-blur-xl transition-all duration-300 ${
                plan.popular
                  ? 'border-primary-500/30 bg-gradient-to-b from-primary-500/15 to-white/70 shadow-glow dark:from-primary-500/20 dark:to-slate-950/80'
                  : 'border-white/10 bg-white/65 dark:bg-slate-950/70'
              }`}
            >
              {plan.popular ? (
                <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-primary-500 px-3 py-1 text-xs font-semibold text-white">
                  <FiZap />
                  Most Popular
                </div>
              ) : null}

              <div className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{plan.name}</div>
              <div className="mt-3">
                <PriceValue amount={price} yearly={yearly} />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{plan.description}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
                      <FiCheck size={12} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                  plan.popular
                    ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                    : 'border border-slate-300/70 bg-white/70 text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-white'
                }`}
              >
                {plan.popular ? 'Start Free Trial' : 'Choose Plan'}
              </a>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
