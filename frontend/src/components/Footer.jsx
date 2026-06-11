import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const productLinks = ['Features', 'Dashboard', 'Pricing', 'FAQ']
const resourceLinks = ['Docs', 'Blog', 'Support', 'Changelog']

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/55 px-4 py-10 backdrop-blur-xl dark:bg-slate-950/55 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-cyan-400 text-sm font-bold text-white">
              AI
            </div>
            <div>
              <div className="text-lg font-semibold text-slate-950 dark:text-white">AstraFlow</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Premium AI SaaS landing page</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
            Built to showcase advanced frontend development with React, Tailwind CSS, and Framer Motion.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
            Product
          </div>
          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            {productLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
            Resources
          </div>
          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            {resourceLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} AstraFlow. All rights reserved.</p>
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
