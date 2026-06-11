import React from 'react'
import { motion } from 'framer-motion'

const logos = new Array(8).fill(0).map((_,i)=>`Company ${i+1}`)

export default function Trusted(){
  return (
    <section className="py-12">
      <div className="overflow-hidden">
        <motion.div className="flex gap-8" animate={{ x: [0, -300] }} transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}>
          {logos.concat(logos).map((l,idx)=>(
            <div key={idx} className="min-w-[120px] h-12 flex items-center justify-center text-slate-400 bg-transparent">{l}</div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
