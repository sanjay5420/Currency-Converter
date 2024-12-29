/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'black-rgba' : 'rgba(225,225,225,0.1)'
      }
    },
  },
  plugins: [],
}

