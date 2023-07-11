/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark":"#1E1E20",
        "darker":"#161618",
        "less-dark":"#242528",
        "text":"#CBCBC4",
        "gray-text":"#77767C",
        "vite-blue":"#646CFF"
      }
    },
  },
  plugins: [],
}

