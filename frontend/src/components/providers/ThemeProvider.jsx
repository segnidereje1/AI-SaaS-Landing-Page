import React, { createContext, useEffect, useMemo, useState } from 'react'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light'

  const storedTheme = window.localStorage.getItem('aurelia-theme')
  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export const ThemeContext = createContext({
  mode: 'light',
  setMode: () => {},
  toggleMode: () => {},
})

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    const isDark = mode === 'dark'

    root.classList.toggle('dark', isDark)
    root.style.colorScheme = isDark ? 'dark' : 'light'
    window.localStorage.setItem('aurelia-theme', mode)

    const themeColor = document.querySelector('meta[name="theme-color"]')
    if (themeColor) {
      themeColor.setAttribute('content', isDark ? '#050816' : '#f6f1e7')
    }
  }, [mode])

  const toggleMode = () => {
    setMode((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  const value = useMemo(() => ({ mode, setMode, toggleMode }), [mode])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
