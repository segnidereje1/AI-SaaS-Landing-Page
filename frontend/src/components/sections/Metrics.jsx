import React from 'react'
import AnimatedCounter from '../shared/AnimatedCounter'
import { metrics } from '../../data/siteContent'
import Reveal from '../shared/Reveal'

export default function Metrics() {
  return (
    <section id="results" className="scroll-mt-28 py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <Reveal className="glass rounded-[2rem] p-6 sm:p-8">
          <div className="section-label text-xs text-gold-700">About us</div>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
            Unforgettable websites, brands, and visuals for bold visionaries.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-soft sm:text-base">
            We’re a collective of designers, developers, and strategists who believe great digital experiences
            should be beautiful, functional, and human-centered.
          </p>
          <a
            href="#pricing"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-gold-300/30 bg-gold-50 px-5 py-3 text-sm font-semibold text-gold-700 transition-transform hover:-translate-y-0.5"
          >
            Know more about us
          </a>
        </Reveal>

        <Reveal delay={0.08} className="rounded-[2rem] border border-ink-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="grid gap-4">
            <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(20,184,166,0.13),rgba(255,255,255,0.88))] p-5">
              <div className="text-xs uppercase tracking-[0.24em] text-gold-700">Studio highlights</div>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-[1.2rem] border border-ink-200 bg-white p-4">
                    <div className="text-[0.6rem] uppercase tracking-[0.22em] text-soft">{metric.label}</div>
                    <div className="mt-2 text-3xl font-semibold text-cream">
                      <AnimatedCounter to={metric.value} suffix={metric.suffix} />
                    </div>
                    <div className="mt-1 text-sm text-soft">{metric.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-ink-200 bg-ink-50 p-4">
                <div className="text-sm font-semibold text-cream">72 hour prototype guarantee</div>
                <p className="mt-1 text-sm leading-6 text-soft">Fast starts, clear directions, and reliable delivery.</p>
              </div>
              <div className="rounded-[1.4rem] border border-ink-200 bg-ink-50 p-4">
                <div className="text-sm font-semibold text-cream">100+ brands transformed</div>
                <p className="mt-1 text-sm leading-6 text-soft">Built for ambitious teams that need a sharper edge.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
