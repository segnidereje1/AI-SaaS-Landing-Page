module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        luxury: '0 30px 90px rgba(5, 8, 22, 0.34)',
        glow: '0 0 0 1px rgba(194, 145, 29, 0.12), 0 24px 70px rgba(194, 145, 29, 0.18)',
      },
      colors: {
        cream: '#0f172a',
        ink: {
          50: '#f8fafc',
          100: '#eef2f7',
          200: '#dce3ee',
          300: '#c0ccda',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0b1020',
          950: '#050816',
        },
        gold: {
          50: '#fff8e8',
          100: '#fbecc0',
          200: '#f5d98a',
          300: '#eec75d',
          400: '#deb038',
          500: '#c2911d',
          600: '#a17417',
          700: '#805814',
          800: '#654312',
          900: '#4f3410',
        }
      },
      backgroundImage: {
        'luxury-radial': 'radial-gradient(circle at top, rgba(194,145,29,0.16), transparent 32%), radial-gradient(circle at 20% 20%, rgba(124,92,255,0.12), transparent 26%), linear-gradient(180deg, rgba(5,8,22,1), rgba(11,16,32,1))',
        'grid-fade': 'linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -12px, 0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(0, -18px, 0) scale(1.04)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '100% 0' },
          '100%': { backgroundPosition: '0 0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translate3d(0, 18px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        drift: 'drift 10s ease-in-out infinite',
        shimmer: 'shimmer 1.6s infinite linear',
        'fade-up': 'fade-up 0.7s ease-out both',
      }
    }
  },
  plugins: []
}
