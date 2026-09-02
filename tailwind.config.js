/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleBrand: {
          900: '#3B1F80',
          800: '#5329B0',
          700: '#6D3FD1',
          600: '#7C4DDB',
          500: '#9B6CFF',
          400: '#A78BFA',
          300: '#C4B5FD',
          200: '#DDD6FE',
          100: '#EDE9FE',
          50: '#F5F3FF',
        },
        darkNavy: {
          950: '#0C0F1D',
          900: '#111625',
          850: '#151B2E',
          800: '#1C2337',
          700: '#252B3A',
        },
        softBg: '#F8F8FC',
        softLavender: '#F3F0FF',
        secondaryGrey: '#596174',
        lightGrey: '#9CA3AF',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-purple': '0 10px 30px -5px rgba(109, 63, 209, 0.35)',
        'dark-card': '0 20px 50px rgba(17, 22, 37, 0.35), 0 0 35px rgba(109, 63, 209, 0.12)',
      }
    },
  },
  plugins: [],
}
