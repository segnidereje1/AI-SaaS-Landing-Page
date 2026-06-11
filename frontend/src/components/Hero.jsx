import React from 'react'
import { motion } from 'framer-motion'
import FloatingCard from './FloatingCard'

export default function Hero(){
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-hero" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="text-4xl md:text-6xl font-extrabold leading-tight">Build Smarter with AI-Powered Automation</motion.h1>
          <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="mt-6 text-lg text-slate-600 dark:text-slate-300">Automate workflows, generate content, and surface insights—faster and safer with enterprise-grade controls.</motion.p>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="mt-8 flex gap-4">
            <button className="bg-primary text-white px-6 py-3 rounded-md">Get Started</button>
            <button className="px-6 py-3 rounded-md border">Request Demo</button>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div initial={{scale:0.95,opacity:0}} whileInView={{scale:1,opacity:1}} transition={{type:'spring'}} className="w-full bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 glass">
            <div className="h-64 md:h-80 w-full rounded-lg overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">
              <div className="p-4">
                <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-24 mb-4" />
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-32 mb-2" />
                <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-16" />
              </div>
            </div>
          </motion.div>

          <FloatingCard className="-top-6 left-6" delay={0.4}>
            <div className="text-sm font-semibold">AI Insights</div>
            <div className="text-xs text-slate-500">Realtime anomaly  detection</div>
          </FloatingCard>

          <FloatingCard className="-bottom-6 right-6" delay={0.6}>
            <div className="text-sm font-semibold">Automation</div>
            <div className="text-xs text-slate-500">Trigger workflows from data</div>
          </FloatingCard>
        </div>
      </div>
    </section>
  )
}
