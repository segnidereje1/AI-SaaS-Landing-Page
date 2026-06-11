module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#7c5cff'
      },
      backgroundImage: {
        'gradient-hero': 'radial-gradient(closest-corner at 20% 10%, rgba(124,92,255,0.12), transparent 20%), radial-gradient(closest-corner at 80% 90%, rgba(0,210,255,0.06), transparent 20%)'
      }
    }
  },
  plugins: []
}
