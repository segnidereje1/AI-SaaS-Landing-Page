import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { showcaseHighlights } from '../../data/siteContent'
import Reveal from '../shared/Reveal'

const caseStudies = [
  {
    title: 'FinTech Startup - Stealth Mode',
    tags: ['Simplified IA', 'Data visualization'],
    accent: 'from-gold-100 to-white',
  },
  {
    title: 'LawLex - Webflow Website',
    tags: ['CMS', 'Dynamic filtering'],
    accent: 'from-ink-50 to-white',
  },
  {
    title: 'Greenify - Social Engagement',
    tags: ['Animation', 'Bold palette'],
    accent: 'from-sky-50 to-white',
  },
  {
    title: 'Quizora - No-Code MVP for EdTech',
    tags: ['Gamified', 'Stripe subscription'],
    accent: 'from-cyan-50 to-white',
  },
]

export default function Showcase() {
  return (
    <section id="capabilities" className="scroll-mt-28 py-16 sm:py-20">
      <div className="flex items-end justify-between gap-6">
        <Reveal>
          <div className="section-label text-xs text-gold-700">Selected work</div>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
            Showcase of selected work.
          </h2>
        </Reveal>
        <a href="#pricing" className="hidden text-sm font-semibold text-gold-700 transition-colors hover:text-cream md:inline-flex">
          View all case studies
        </a>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {caseStudies.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <article className="interactive-card group overflow-hidden rounded-[2rem] border border-ink-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1">
              <div className={`h-64 bg-gradient-to-br ${item.accent} p-6`}>
                <div className="flex h-full flex-col justify-between rounded-[1.6rem] border border-white/80 bg-white/60 p-5 backdrop-blur-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.22em] text-soft">Branding</div>
                      <h3 className="mt-2 max-w-sm text-2xl font-semibold leading-tight text-cream">
                        {item.title}
                      </h3>
                    </div>
                    <FiArrowUpRight className="text-gold-700 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {showcaseHighlights.map((highlight) => (
                      <span
                        key={`${item.title}-${highlight}`}
                        className="rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-medium text-soft"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid gap-3 p-5 sm:grid-cols-2">
                {item.tags.map((tag) => (
                  <div key={tag} className="rounded-[1.1rem] border border-ink-200 bg-ink-50 px-4 py-3 text-sm text-soft">
                    {tag}
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
