import React from 'react'
import { testimonials } from '../../data/siteContent'
import SectionHeading from '../shared/SectionHeading'
import Reveal from '../shared/Reveal'

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="Testimonials"
        title="Short, honest praise."
        description="Clearer work. Calmer teams."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal
            key={item.name}
            delay={index * 0.06}
            className="glass rounded-[1.8rem] p-5"
          >
            <article>
              <p className="text-sm leading-7 text-cream">"{item.quote}"</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="text-base font-semibold text-cream">{item.name}</div>
                <div className="text-sm text-soft">
                  {item.role}, {item.company}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
