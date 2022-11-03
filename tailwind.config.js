/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  colors: {
      "amazon" : "#131921",
      "amazon_orange" : "#ff971a"
    },
    },
  
  },
  
  plugins: [],
}
