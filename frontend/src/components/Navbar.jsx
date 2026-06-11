import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function Navbar(){
  const { mode, setMode } = useContext(ThemeContext)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-transparent">
      <nav className="flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400">AIMetrics</div>
          <ul className="hidden md:flex gap-6 text-sm text-slate-500 dark:text-slate-300">
            <li>Product</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Docs</li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <button aria-label="Toggle theme" onClick={()=> setMode(mode === 'dark' ? 'light' : 'dark')} className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
            {mode === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button className="hidden md:inline px-4 py-2 rounded-md">Login</button>
          <button className="bg-primary text-white px-4 py-2 rounded-md">Get Started</button>
        </div>
      </nav>
    </header>
  )
}
