/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'header':[ "Exile",'system-ui'],
        'body1':[ "Space Grotesk", 'sans-serif'],
        'body2':["Poiret One",'sans-serif'],
      }
    },
  },
  plugins: [],
}