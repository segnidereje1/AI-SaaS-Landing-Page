import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import Reveal from '../shared/Reveal'

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-28 py-16 sm:py-20">
      <Reveal className="relative overflow-hidden rounded-[2.25rem] border border-ink-200 bg-[linear-gradient(135deg,rgba(236,254,255,0.96),rgba(255,255,255,0.96))] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.1)] sm:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.1),transparent_28%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-2xl">
            <div className="section-label text-xs text-gold-700">Meet the minds behind the magic</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
              Get a free 30-minute strategy session with our lead designer.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-soft sm:text-base">
              We’ll look at your current site, identify the highest-impact changes, and map the fastest path to a
              more polished experience.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <a
              href="#home"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-300 px-6 py-3.5 text-sm font-semibold text-[#050816] transition-transform hover:-translate-y-0.5"
            >
              Book a free call
              <FiArrowRight />
            </a>
            <div className="text-sm text-soft">
              Prefer email? <span className="font-semibold text-cream">hello@aurelia.studio</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
