/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': `#23262F`,
        'accent': `#286F6C`,
      },
      fontFamily: {
        'sans': ['Saira', 'sans-serif'],
      }
    },
  },
  plugins: [],
}