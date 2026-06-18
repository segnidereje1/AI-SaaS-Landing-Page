import React from 'react'
import { journalPosts } from '../../data/siteContent'
import Reveal from '../shared/Reveal'

export default function Process() {
  return (
    <section id="process" className="scroll-mt-28 py-16 sm:py-20">
      <div className="flex items-end justify-between gap-6">
        <Reveal>
          <div className="section-label text-xs text-gold-700">Studio journal</div>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
            The studio journal.
          </h2>
        </Reveal>
        <a href="#pricing" className="hidden text-sm font-semibold text-gold-700 transition-colors hover:text-cream md:inline-flex">
          Read more articles
        </a>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {journalPosts.map((post, index) => (
          <Reveal key={post.title} delay={index * 0.06}>
            <article className="group h-full rounded-[1.8rem] border border-ink-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.24em] text-soft">
                <span>{post.category}</span>
                <span>April 23, 2025</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-cream">{post.title}</h3>
              <p className="mt-3 text-sm leading-6 text-soft">
                By {post.author} · {post.date}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
