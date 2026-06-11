import React, { useContext, useState } from 'react'
import { ThemeContext } from './ThemeProvider'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const { mode, toggleMode } = useContext(ThemeContext)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/65 backdrop-blur-xl dark:bg-slate-950/55">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-cyan-400 text-sm font-bold text-white shadow-glow">
            AI
          </div>
          <div>
            <div className="text-base font-semibold tracking-tight text-slate-950 dark:text-white">AstraFlow</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">AI SaaS Platform</div>
          </div>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/60 bg-white/70 text-slate-700 transition-transform hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
          >
            {mode === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <a
            href="#"
            className="rounded-full border border-slate-300/60 px-4 py-2 text-sm font-medium text-slate-700 transition-transform hover:-translate-y-0.5 dark:border-white/10 dark:text-slate-200"
          >
            Login
          </a>
          <a
            href="#pricing"
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
          >
            Get Started
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleMode}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/60 bg-white/70 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
          >
            {mode === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/60 bg-white/70 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-white/90 px-4 py-4 backdrop-blur-xl dark:bg-slate-950/90 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="flex-1 rounded-full border border-slate-300/60 px-4 py-3 text-center text-sm font-medium text-slate-700 dark:border-white/10 dark:text-slate-200"
              >
                Login
              </a>
              <a
                href="#pricing"
                className="flex-1 rounded-full bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white dark:bg-white dark:text-slate-950"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
