/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        rose: {
          '100': '#FECDD3',
          '200': '#FCA3AC',
          '300': '#F97A86',
          '400': '#F75160', // Custom color definition
          '500': '#F5273A',
          // Add more shades if needed
        }
      }
    }
  },
  plugins: [],
}

