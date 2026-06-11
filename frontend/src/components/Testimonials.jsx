import React from 'react'
import { motion } from 'framer-motion'

const reviews = [
  {name:'Olivia', text:'Game changer for our workflows', rating:5},
  {name:'Liam', text:'Reduced manual work by 80%', rating:5},
  {name:'Ava', text:'Powerful analytics and insights', rating:4}
]

export default function Testimonials(){
  return (
    <section className="py-12">
      <h3 className="text-2xl font-semibold mb-6">Testimonials</h3>
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" initial="hidden" whileInView="show">
        {reviews.map((r,i)=> (
          <motion.div key={r.name} whileHover={{y:-6}} className="glass p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-slate-200" />
              <div>
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs text-slate-500">{Array.from({length:r.rating}).map((_,i)=>'⭐')}</div>
              </div>
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-300">"{r.text}"</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
