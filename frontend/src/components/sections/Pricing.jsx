import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheck, FiZap } from 'react-icons/fi'
import { pricingPlans } from '../../data/siteContent'
import SectionHeading from '../shared/SectionHeading'

function PriceValue({ amount, yearly }) {
  return (
    <div className="flex items-end gap-1">
      <span className="text-4xl font-semibold tracking-tight text-cream">${amount}</span>
      <span className="pb-1 text-sm text-soft">/{yearly ? 'yr' : 'mo'}</span>
    </div>
  )
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="scroll-mt-28 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Pricing"
        align="center"
        title="Simple pricing."
        description="Monthly or yearly. Pick the fit."
        className="mx-auto max-w-3xl"
      />

      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-xl">
          <button
            type="button"
            onClick={() => setYearly(false)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              !yearly ? 'bg-gold-300 text-[#050816]' : 'text-soft'
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setYearly(true)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              yearly ? 'bg-gold-300 text-[#050816]' : 'text-soft'
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => {
          const price = yearly ? plan.yearly : plan.monthly

          return (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-[1.8rem] border p-5 backdrop-blur-xl transition-all duration-300 ${
                plan.popular
                  ? 'border-gold-300/30 bg-[linear-gradient(180deg,rgba(194,145,29,0.16),rgba(255,255,255,0.03))] shadow-glow'
                  : 'border-white/10 bg-white/[0.04]'
              }`}
            >
              {plan.popular ? (
                <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-gold-300 px-3 py-1 text-xs font-semibold text-[#050816]">
                  <FiZap />
                  Most requested
                </div>
              ) : null}

              <div className="text-[0.65rem] uppercase tracking-[0.24em] text-soft">{plan.name}</div>
              <div className="mt-3">
                <PriceValue amount={price} yearly={yearly} />
              </div>
              <p className="mt-2 text-sm leading-6 text-soft">{plan.description}</p>

              <ul className="mt-5 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-cream">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
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
                    ? 'bg-gold-300 text-[#050816]'
                    : 'border border-white/10 bg-white/[0.04] text-cream'
                }`}
              >
                {plan.popular ? 'Start trial' : 'Choose'}
              </a>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
