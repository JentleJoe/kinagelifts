/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Montserrat Fallback', 'sans-serif'],
        heading: ['Bebas Neue', 'Bebas Neue Fallback', 'sans-serif'],
        anton: ['Anton', 'Anton Fallback', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
