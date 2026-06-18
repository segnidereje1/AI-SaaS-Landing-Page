import React from 'react'
import { testimonials } from '../../data/siteContent'
import Reveal from '../shared/Reveal'

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <Reveal className="rounded-[2rem] border border-ink-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
          <div className="text-5xl font-semibold text-cream">4.9</div>
          <p className="mt-2 text-sm uppercase tracking-[0.22em] text-soft">(50+ reviews)</p>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
            Where ideas meet extraordinary design.
          </h2>
        </Reveal>

        <div className="grid gap-5">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05}>
              <article className="rounded-[2rem] border border-ink-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                <div className="text-xs uppercase tracking-[0.24em] text-gold-700">{index === 0 ? '4.7' : '4.9'}</div>
                <p className="mt-4 text-lg leading-8 text-cream">“{item.quote}”</p>
                <div className="mt-6 border-t border-ink-200 pt-4">
                  <div className="text-base font-semibold text-cream">{item.name}</div>
                  <div className="text-sm text-soft">
                    {item.role} of {item.company}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
