/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montreal: ["Montreal", "sans-serif"],
        FoundersGroteskXCondensed: ["Founders Grotesk X Condensed", "sans-serif"],
      }
    },
  },
  plugins: [],
}

