import React from 'react'
import { motion } from 'framer-motion'

export default function FloatingCard({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: 'easeOut' }}
      className={`glass absolute rounded-[1.5rem] p-4 shadow-luxury ${className}`}
    >
      {children}
    </motion.div>
  )
}

