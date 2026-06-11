import React from 'react'
import AnimatedCounter from './AnimatedCounter'

export default function Stats(){
  return (
    <section className="py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="p-6 glass rounded-xl text-center">
          <AnimatedCounter to={500000} suffix="+" />
          <div className="text-sm text-slate-500 mt-2">Users</div>
        </div>
        <div className="p-6 glass rounded-xl text-center">
          <AnimatedCounter to={50000000} suffix="+" />
          <div className="text-sm text-slate-500 mt-2">Tasks Completed</div>
        </div>
        <div className="p-6 glass rounded-xl text-center">
          <AnimatedCounter to={99.9} suffix="%" />
          <div className="text-sm text-slate-500 mt-2">Uptime</div>
        </div>
        <div className="p-6 glass rounded-xl text-center">
          <AnimatedCounter to={120} suffix="+" />
          <div className="text-sm text-slate-500 mt-2">Countries</div>
        </div>
      </div>
    </section>
  )
}
