/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#05070f',
        cardBg: 'rgba(15, 23, 42, 0.65)',
        brandRed: '#e51c24',
        deepRed: '#d01b1b',
        darkRed: '#a80c14',
        heroRed: '#d51b22',
        accent: {
          DEFAULT: '#e51c24',
          glow: '#ff4d4d',
          violet: '#7928ca',
          purple: '#b829ea'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Outfit', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'wave': 'wave 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-5%)' },
        }
      }
    },
  },
  plugins: [],
}
