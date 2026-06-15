import React from 'react'

export default function SectionHeading({ eyebrow, title, description, align = 'left', className = '' }) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
      <div className="section-label text-[0.65rem] text-gold-300/90">{eyebrow}</div>
      <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-3 max-w-2xl text-sm leading-6 text-soft">{description}</p> : null}
    </div>
  )
}
