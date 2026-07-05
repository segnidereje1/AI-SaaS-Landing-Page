import React, { useContext, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '../../data/siteContent'
import { FiArrowRight, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { ThemeContext } from '../providers/ThemeProvider'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { mode, toggleMode } = useContext(ThemeContext)

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200 bg-white/85 backdrop-blur-2xl">
      <div className="border-b border-ink-100 bg-gold-50/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs font-medium text-soft sm:px-6 lg:px-8">
          <span>Top 100 Design Studios in USA</span>
          <a href="#pricing" className="inline-flex items-center gap-1 text-gold-700 transition-colors hover:text-cream">
            Schedule a call now
            <FiArrowRight />
          </a>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold-300/30 bg-[linear-gradient(135deg,rgba(194,145,29,0.2),rgba(255,248,232,0.9))] text-sm font-bold text-cream shadow-[0_15px_35px_rgba(194,145,29,0.12)]">
            Au
          </div>
          <div>
            <div className="text-base font-semibold tracking-tight text-cream">Aurelia</div>
            <div className="text-xs text-soft">AI studio</div>
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
            onClick={toggleMode}
            aria-label="Toggle color theme"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-cream shadow-sm transition-colors hover:bg-gold-50"
          >
            {mode === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <a
            href="#pricing"
            className="inline-flex items-center rounded-full bg-gold-300 px-5 py-3 text-sm font-semibold text-[#050816] transition-transform hover:-translate-y-0.5"
          >
            Book a meeting
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleMode}
            aria-label="Toggle color theme"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white text-cream shadow-sm"
          >
            {mode === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white text-cream shadow-sm"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink-200 bg-white px-4 md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl border border-ink-200 bg-ink-50 px-4 py-3 text-sm font-medium text-cream transition-colors duration-200 hover:bg-gold-50"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={toggleMode}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-ink-200 bg-white px-4 py-3 text-sm font-medium text-cream"
              >
                {mode === 'dark' ? <FiSun /> : <FiMoon />}
                Switch to {mode === 'dark' ? 'light' : 'dark'} mode
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
