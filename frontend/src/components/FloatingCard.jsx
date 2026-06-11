import React from 'react'
import { motion } from 'framer-motion'

export default function FloatingCard({ children, className = '', delay = 0 }){
  return (
    <motion.div initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{delay, type:'spring'}} className={`absolute glass p-3 rounded-xl shadow-lg ${className}`}>
      {children}
    </motion.div>
  )
}
