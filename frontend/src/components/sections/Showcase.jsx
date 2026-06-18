import React from 'react'
import { FiArrowUpRight, FiCalendar, FiClock, FiHeart } from 'react-icons/fi'
import { showcaseHighlights, timelineNotes } from '../../data/siteContent'
import Reveal from '../shared/Reveal'

export default function Showcase() {
  return (
    <section id="capabilities" className="scroll-mt-28 py-16 sm:py-20">
      <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal className="glass rounded-[2rem] p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="section-label text-xs text-gold-200/90">Command</div>
              <h3 className="mt-3 max-w-xl text-2xl font-semibold leading-tight text-cream sm:text-3xl">
                A clear view of what matters.
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-300">
              <FiClock />
              Live
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {showcaseHighlights.map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-soft"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(194,145,29,0.12),rgba(255,255,255,0.02))] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[0.65rem] uppercase tracking-[0.24em] text-soft">Weekly</div>
                  <div className="mt-1 text-lg font-semibold text-cream">Clear trends, fast.</div>
                </div>
                <FiArrowUpRight className="text-gold-200" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[24, 58, 42, 66, 48, 86].map((value, index) => (
                  <div
                    key={`${value}-${index}`}
                    className="rounded-2xl bg-white/[0.04] p-3 text-center text-sm text-soft"
                  >
                    <div className="mx-auto h-20 w-full rounded-xl bg-[linear-gradient(180deg,rgba(255,248,232,0.18),rgba(194,145,29,0.72))]" style={{ height: `${value}px` }} />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gold-300/10 text-gold-200">
                    <FiCalendar />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-cream">Ready for review</div>
                    <div className="text-sm text-soft">Short and ready.</div>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-300">
                    <FiHeart />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-cream">Client signals</div>
                    <div className="text-sm text-soft">Catch issues sooner.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="glass rounded-[2rem] p-6 sm:p-8">
          <div className="section-label text-xs text-gold-200/90">Editorial</div>
          <h3 className="mt-3 max-w-sm text-2xl font-semibold leading-tight text-cream sm:text-3xl">
            Short notes. Clean flow.
          </h3>
          <div className="mt-6 space-y-3">
            {timelineNotes.map((item, index) => (
              <div key={item.title} className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gold-300/10 text-sm font-semibold text-gold-200">
                    0{index + 1}
                  </div>
                  <div>
                    <div className="text-base font-semibold text-cream">{item.title}</div>
                    <p className="mt-1 text-sm leading-6 text-soft">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
