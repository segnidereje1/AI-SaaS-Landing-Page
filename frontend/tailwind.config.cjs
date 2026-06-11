module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        glow: '0 24px 80px rgba(79, 70, 229, 0.22)',
      },
      colors: {
        primary: {
          DEFAULT: '#7c5cff',
          50: '#f3efff',
          100: '#e7ddff',
          200: '#cfbdff',
          300: '#b092ff',
          400: '#9161ff',
          500: '#7c5cff',
          600: '#6844f1',
          700: '#5533cc',
          800: '#45299f',
          900: '#372174',
        }
      },
      backgroundImage: {
        'gradient-hero': 'radial-gradient(closest-corner at 20% 10%, rgba(124,92,255,0.18), transparent 20%), radial-gradient(closest-corner at 80% 90%, rgba(0,210,255,0.12), transparent 20%)',
        'grid-fade': 'linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -12px, 0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        marquee: 'marquee 22s linear infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
      }
    }
  },
  plugins: []
}
