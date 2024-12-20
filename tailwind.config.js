/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'], // Manrope shriftini qo'shish
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
    },
  },
  darkMode: "class",
  plugins: [],
}

