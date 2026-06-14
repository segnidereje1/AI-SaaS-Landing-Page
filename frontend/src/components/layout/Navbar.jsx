import React, { useContext, useState } from 'react'
import { ThemeContext } from '../providers/ThemeProvider'
import { navLinks } from '../../data/siteContent'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'

export default function Navbar() {
  const { mode, toggleMode } = useContext(ThemeContext)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="theme-surface theme-border sticky top-0 z-50 border-b backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold-300/20 bg-[linear-gradient(135deg,rgba(194,145,29,0.22),rgba(255,248,232,0.08))] text-sm font-bold text-cream shadow-glow">
            Au
          </div>
          <div>
            <div className="text-base font-semibold tracking-tight text-cream">Aurelia</div>
            <div className="text-xs text-soft">Luxury AI studio</div>
          </div>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-soft transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleMode}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cream transition-transform hover:-translate-y-0.5"
          >
            {mode === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <a
            href="#pricing"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5"
          >
            Request Demo
          </a>
          <a
            href="#pricing"
            className="rounded-full bg-gold-300 px-4 py-2 text-sm font-semibold text-[#050816] transition-transform hover:-translate-y-0.5"
          >
            Get Access
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleMode}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cream"
          >
            {mode === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cream"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="theme-surface-strong theme-border border-t px-4 py-4 backdrop-blur-2xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm font-medium text-cream"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              className="mt-1 rounded-2xl bg-gold-300 px-4 py-3 text-center text-sm font-semibold text-[#050816]"
            >
              Get Access
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
