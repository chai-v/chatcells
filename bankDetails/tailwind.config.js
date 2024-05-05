const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,css}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}
