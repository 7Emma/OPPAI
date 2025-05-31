/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: '#FF6F61',
          light: '#FF8A7B',
          dark: '#E65C50'
        },
        turquoise: {
          DEFAULT: '#40E0D0',
          light: '#66F0E3',
          dark: '#2ABBAE'
        }
      },
    },
  },
  plugins: [],
}