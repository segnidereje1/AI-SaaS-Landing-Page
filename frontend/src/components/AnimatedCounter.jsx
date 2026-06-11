import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export default function AnimatedCounter({ to, suffix = '', className='' }){
  const controls = useAnimation()
  const [ref, inView] = useInView({triggerOnce:true, threshold:0.3})

  useEffect(()=>{
    if(inView){
      controls.start({ count: to, transition: { duration: 1.8 } })
    }
  },[inView])

  return (
    <div ref={ref} className={className}>
      <motion.div initial={{count:0}} animate={controls}>{(latest)=>(
        <span className="font-bold">{Math.floor(latest.count || 0).toLocaleString()}{suffix}</span>
      )}</motion.div>
    </div>
  )
}
