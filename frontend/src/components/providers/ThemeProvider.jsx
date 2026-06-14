import React, { createContext, useEffect } from 'react'

export const ThemeContext = createContext({
  mode: 'dark',
  setMode: () => {},
  toggleMode: () => {},
})

export function ThemeProvider({ children }) {
  useEffect(() => {
    const root = document.documentElement
    root.classList.add('dark')
    root.style.colorScheme = 'dark'
    const themeColor = document.querySelector('meta[name="theme-color"]')
    if (themeColor) {
      themeColor.setAttribute('content', '#050816')
    }
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        mode: 'dark',
        setMode: () => {},
        toggleMode: () => {},
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
