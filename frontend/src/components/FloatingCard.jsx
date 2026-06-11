import React from 'react'
import { motion } from 'framer-motion'

export default function FloatingCard({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute rounded-2xl border border-white/10 bg-white/70 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:bg-slate-950/70 ${className}`}
    >
      {children}
    </motion.div>
  )
}
