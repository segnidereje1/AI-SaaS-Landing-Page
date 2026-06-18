import React from 'react'
import { processSteps } from '../../data/siteContent'
import SectionHeading from '../shared/SectionHeading'
import Reveal from '../shared/Reveal'

export default function Process() {
  return (
    <section id="process" className="scroll-mt-28 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Process"
        title="Three small steps."
        description="Clear, quick, and easy to follow."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <Reveal
            key={step.title}
            delay={index * 0.06}
            className="glass rounded-[1.8rem] p-5"
          >
            <article>
              <div className="text-[0.65rem] uppercase tracking-[0.24em] text-gold-200/90">0{index + 1}</div>
              <h3 className="mt-4 text-2xl font-semibold text-cream">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-soft">{step.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
