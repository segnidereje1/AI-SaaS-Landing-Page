import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  {
    question: 'Can I switch between dark and light mode?',
    answer:
      'Yes. The theme toggle is built into the navbar and persists the last chosen theme in local storage.',
  },
  {
    question: 'Is the layout responsive?',
    answer:
      'Absolutely. The sections are built with mobile-first Tailwind utilities and adapt cleanly across breakpoints.',
  },
  {
    question: 'Does the page include smooth animations?',
    answer:
      'Yes. Framer Motion powers the staggered reveals, marquee effects, counters, hover interactions, and modal transitions.',
  },
  {
    question: 'Can I use this as a portfolio project?',
    answer:
      'That is exactly what it is designed for. It reads like a premium startup homepage and demonstrates senior frontend skills.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="scroll-mt-28 py-16 sm:py-20">
      <div className="max-w-2xl">
        <div className="section-label text-xs text-cyan-600 dark:text-cyan-300">FAQ</div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          Answers to the details people always ask before they trust the product.
        </h2>
      </div>

      <div className="mt-10 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = index === openIndex

          return (
            <motion.article
              key={faq.question}
              layout
              className="rounded-[1.5rem] border border-white/10 bg-white/65 p-5 backdrop-blur-xl dark:bg-slate-950/65"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="text-base font-semibold text-slate-950 dark:text-white">{faq.question}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/5 text-slate-600 dark:bg-white/5 dark:text-slate-300"
                >
                  <FiChevronDown />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
