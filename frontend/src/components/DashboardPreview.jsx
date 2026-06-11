import React from 'react'
import { motion } from 'framer-motion'

function StatCard({label, value}){
  return (
    <div className="p-4 bg-white/60 dark:bg-black/30 rounded-lg glass">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="text-xl font-semibold mt-2">{value}</div>
    </div>
  )
}

export default function DashboardPreview(){
  return (
    <section className="py-12">
      <h3 className="text-2xl font-semibold mb-6">Interactive Dashboard Preview</h3>
      <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="font-semibold">Overview</div>
            <div className="text-sm text-slate-500">Updated  2m  ago </div>
          </div>
          <div className="h-40 bg-gradient-to-br from-primary/10 to-cyan-50 rounded-md" />
          <div className="grid grid-cols-3 gap-4 mt-4">
            <StatCard label="Revenue" value="$1.2M" />
            <StatCard label="Active Users" value="12.3K" />
            <StatCard label="Conversion" value="4.6%" />
          </div>
        </div>

        <div className="glass rounded-xl p-6">
          <div className="font-semibold mb-3">Recent Activity</div>
          <div className="space-y-3">
            <div className="flex items-center justify-between"><div className="text-sm">Ran Workflow</div><div className="text-xs text-slate-500">2m</div></div>
            <div className="flex items-center justify-between"><div className="text-sm">New User Signup</div><div className="text-xs text-slate-500">15m</div></div>
            <div className="flex items-center justify-between"><div className="text-sm">API Request Spike</div><div className="text-xs text-slate-500">1h</div></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
