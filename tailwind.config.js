const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'], // Manrope shriftini qo'shish
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

