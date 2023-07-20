/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "inter":['Inter']
      },
      colors:{
        "dark":"#1e1e20",
        "darker":"#161618",
        "less-dark":"#242528",
        "gray-dark":"#313037",
        "text":"#CBCBC4",
        "gray-text":"#77767C",
        "less-gray-text":"#9C9CA3",
        "brand":"#646CFF",
        "brand-light":"#747bff",
        "sponsor":"#db2777",
      },
      zIndex:{
        "-1":-1,
        "1":"1",
      },
      borderWidth:{
        2:"1px",
      },
     
    },
  },
  plugins: [],
}

