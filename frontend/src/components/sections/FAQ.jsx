import React from 'react'
import { faqs } from '../../data/siteContent'
import SectionHeading from '../shared/SectionHeading'
import Reveal from '../shared/Reveal'

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-28 py-16 sm:py-20">
      <SectionHeading
        eyebrow="FAQ"
        align="center"
        title="Quick answers."
        description="Short, direct, and useful."
        className="mx-auto max-w-3xl"
      />

      <div className="mt-10 grid gap-4">
        {faqs.map((item, index) => (
          <Reveal
            key={item.question}
            delay={index * 0.04}
            className="glass group rounded-[1.4rem] p-5"
          >
            <details>
              <summary className="cursor-pointer list-none text-base font-semibold text-cream [&::-webkit-details-marker]:hidden">
                {item.question}
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-soft">{item.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
