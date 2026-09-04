/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'blob': 'blob 7s infinite',
        'spin-slow': 'spin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatUp: {
          '0%': { transform: 'translateY(10vh) translateX(0)', opacity: 0 },
          '10%': { opacity: 1, transform: 'translateY(0vh) translateX(-20px)' },
          '50%': { transform: 'translateY(-50vh) translateX(30px)' },
          '90%': { opacity: 1, transform: 'translateY(-90vh) translateX(-20px)' },
          '100%': { transform: 'translateY(-100vh) translateX(0)', opacity: 0 },
        }
      }
    },
  },
  plugins: [],
}
