import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {title:'Connect Your Data', desc:'Securely connect sources and warehouses.'},
  {title:'Let AI Process It', desc:'Model and enrich data with powerful AI.'},
  {title:'Get Intelligent Results', desc:'Actionable recommendations and automations.'}
]

export default function HowItWorks(){
  return (
    <section className="py-12">
      <h3 className="text-2xl font-semibold mb-6">How It Works</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s,i)=> (
          <motion.div key={s.title} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.15}} className="glass p-6 rounded-xl">
            <div className="text-xl font-bold mb-2">{i+1}. {s.title}</div>
            <div className="text-sm text-slate-500">{s.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
