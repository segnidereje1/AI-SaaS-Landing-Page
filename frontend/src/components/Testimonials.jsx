import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'

const reviews = [
  {
    name: 'Olivia Carter',
    role: 'VP Growth, Northstar',
    text: 'The interface feels more like a premium product launch than a marketing page. It instantly signals trust.',
    rating: 5,
  },
  {
    name: 'Liam Chen',
    role: 'Head of Product, Relay',
    text: 'We cut manual ops work dramatically. The dashboard section alone makes the product story click.',
    rating: 5,
  },
  {
    name: 'Ava Patel',
    role: 'Founder, Loopline',
    text: 'Clean typography, excellent motion, and thoughtful spacing. It looks like a funded startup landing page.',
    rating: 5,
  },
]

function Avatar({ name }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-cyan-400 text-sm font-semibold text-white">
      {name
        .split(' ')
        .map((part) => part[0])
        .slice(0, 2)
        .join('')}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % reviews.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  const review = reviews[active]

  return (
    <section id="testimonials" className="scroll-mt-28 py-16 sm:py-20">
      <div className="max-w-2xl">
        <div className="section-label text-xs text-cyan-600 dark:text-cyan-300">Testimonials</div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          Teams trust products that look and feel this polished.
        </h2>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/70 p-6 backdrop-blur-xl dark:bg-slate-950/70 sm:p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar name={review.name} />
              <div>
                <div className="font-semibold text-slate-950 dark:text-white">{review.name}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{review.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: review.rating }).map((_, index) => (
                <FiStar key={index} />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={review.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="mt-8 text-2xl font-medium leading-10 tracking-tight text-slate-950 dark:text-white"
            >
              {review.text}
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === active ? 'w-8 bg-primary-500' : 'w-2.5 bg-slate-300 dark:bg-slate-700'
                  }`}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setActive((current) => (current - 1 + reviews.length) % reviews.length)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/70 bg-white/60 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft />
              </button>
              <button
                type="button"
                onClick={() => setActive((current) => (current + 1) % reviews.length)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/70 bg-white/60 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                aria-label="Next testimonial"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {reviews.map((item, index) => (
            <motion.button
              key={item.name}
              type="button"
              onClick={() => setActive(index)}
              whileHover={{ y: -4 }}
              className={`text-left rounded-[1.5rem] border p-5 transition-all ${
                index === active
                  ? 'border-primary-500/30 bg-primary-500/10'
                  : 'border-white/10 bg-white/60 dark:bg-slate-950/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <Avatar name={item.name} />
                <div>
                  <div className="font-semibold text-slate-950 dark:text-white">{item.name}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{item.role}</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.text}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
