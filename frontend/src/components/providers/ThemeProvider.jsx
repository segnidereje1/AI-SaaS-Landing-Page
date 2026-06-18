import React, { createContext, useEffect } from 'react'

export const ThemeContext = createContext({
  mode: 'dark',
  setMode: () => {},
  toggleMode: () => {},
})

export function ThemeProvider({ children }) {
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('dark')
    root.style.colorScheme = 'light'
    const themeColor = document.querySelector('meta[name="theme-color"]')
    if (themeColor) {
      themeColor.setAttribute('content', '#f6f1e7')
    }
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        mode: 'light',
        setMode: () => {},
        toggleMode: () => {},
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
