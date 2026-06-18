import React from 'react'
import Reveal from '../shared/Reveal'

export default function CTA() {
  return (
    <section className="py-16 sm:py-20">
      <Reveal
        className="theme-accent-panel theme-panel relative overflow-hidden rounded-[2rem] p-8 sm:p-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,248,232,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(124,92,255,0.12),transparent_28%)]" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="section-label text-xs text-gold-100/90">Start here</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
              Make the product feel premium.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-soft">
              Aurelia keeps the page polished, calm, and easy to scan.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
