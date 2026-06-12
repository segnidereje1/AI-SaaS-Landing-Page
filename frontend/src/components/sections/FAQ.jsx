import React from 'react'
import { motion } from 'framer-motion'
import { faqs } from '../../data/siteContent'
import SectionHeading from '../shared/SectionHeading'

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-28 py-16 sm:py-20">
      <SectionHeading
        eyebrow="FAQ"
        align="center"
        title="A few practical questions, answered with the same clarity as the design."
        description="If you’re refining the product experience or adapting the structure, this section keeps the answers short and credible."
        className="mx-auto max-w-3xl"
      />

      <div className="mt-10 grid gap-4">
        {faqs.map((item, index) => (
          <motion.details
            key={item.question}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.05, duration: 0.45 }}
            className="glass group rounded-[1.4rem] p-5"
          >
            <summary className="cursor-pointer list-none text-lg font-semibold text-cream [&::-webkit-details-marker]:hidden">
              {item.question}
            </summary>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-soft">{item.answer}</p>
          </motion.details>
        ))}
      </div>
    </section>
  )
}

