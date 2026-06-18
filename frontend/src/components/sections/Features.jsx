import React from 'react'
import { featureCards } from '../../data/siteContent'
import SectionHeading from '../shared/SectionHeading'
import Reveal from '../shared/Reveal'

export default function Features() {
  return (
    <section id="experience" className="scroll-mt-28 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Capabilities"
        title="A compact feature set with a calmer feel."
        description="Simple hierarchy. More breathing room. Less noise."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {featureCards.map((item, index) => {
          const Icon = item.icon
          return (
            <Reveal
              key={item.title}
              delay={index * 0.06}
              className="glass group rounded-[1.75rem] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-300/25"
            >
              <article className="flex items-start gap-4">
                <div className="rounded-2xl bg-gold-300/10 p-3 text-gold-200 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cream">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-soft">{item.desc}</p>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
