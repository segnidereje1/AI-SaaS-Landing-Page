import React from 'react'
import { motion } from 'framer-motion'
import { FiCpu, FiSettings, FiBarChart2, FiUsers, FiBox, FiClock } from 'react-icons/fi'

const items = [
  {title:'AI Content Generation', icon:FiCpu},
  {title:'Workflow Automation', icon:FiSettings},
  {title:'Smart Analytics', icon:FiBarChart2},
  {title:'Team Collaboration', icon:FiUsers},
  {title:'API Integration', icon:FiBox},
  {title:'Real-time Insights', icon:FiClock}
]

export default function Features(){
  return (
    <section className="py-12">
      <h3 className="text-2xl font-semibold mb-6">Features</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it,i)=>{
          const Icon = it.icon
          return (
            <motion.div key={it.title} whileHover={{y:-6}} className="glass p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary"><Icon /></div>
                <div>
                  <div className="font-semibold">{it.title}</div>
                  <div className="text-sm text-slate-500">Powerful, reliable, and configurable.</div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
