import React from 'react'
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'

const productLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#results' },
  { label: 'Services', href: '#experience' },
  { label: 'Portfolio', href: '#capabilities' },
  { label: 'Contact', href: '#pricing' },
]

const resourceLinks = ['Docs', 'Blog', 'Support', 'Changelog']

export default function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(20,184,166,0.26),rgba(236,254,255,0.95))] text-sm font-bold text-cream">
              Au
            </div>
            <div>
              <div className="text-lg font-semibold text-cream">Aurelia</div>
              <div className="text-xs text-soft">AI studio</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-soft">
            We craft high-performance digital experiences that drive real business results.
          </p>
          <div className="mt-5 flex items-center gap-4 text-lg text-soft">
            <a href="#" aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href="#" aria-label="Facebook">
              <FiFacebook />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="#" aria-label="X">
              <FiTwitter />
            </a>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-soft">Quick Links</div>
          <ul className="mt-4 space-y-3 text-sm text-soft">
            {productLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-soft">Services</div>
          <ul className="mt-4 space-y-3 text-sm text-soft">
            {resourceLinks.map((link) => (
              <li key={link}>
                <a href="#pricing">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-ink-200 pt-6 text-sm text-soft sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} Aurelia All rights reserved</p>
        <a href="#home" className="font-semibold text-gold-700">
          Scroll to top
        </a>
      </div>
    </footer>
  )
}
