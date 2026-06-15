import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const productLinks = [
  { label: 'Work', href: '#experience' },
  { label: 'Flow', href: '#capabilities' },
  { label: 'Proof', href: '#results' },
  { label: 'Pricing', href: '#pricing' },
]

const resourceLinks = ['Docs', 'Blog', 'Support', 'Changelog']

export default function Footer() {
  return (
    <footer className="theme-surface theme-border border-t px-4 py-10 backdrop-blur-2xl sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(194,145,29,0.24),rgba(255,248,232,0.08))] text-sm font-bold text-cream">
              Au
            </div>
            <div>
              <div className="text-lg font-semibold text-cream">Aurelia</div>
              <div className="text-xs text-soft">AI studio</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-soft">
            A refined landing page for modern AI products.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-soft">Product</div>
          <ul className="mt-4 space-y-3 text-sm text-soft">
            {productLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-soft">Links</div>
          <ul className="mt-4 space-y-3 text-sm text-soft">
            {resourceLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="theme-border mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t pt-6 text-sm text-soft sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Aurelia.</p>
        <div className="flex items-center gap-4 text-lg">
          <a href="#" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="#" aria-label="Twitter">
            <FiTwitter />
          </a>
        </div>
      </div>
    </footer>
  )
}
