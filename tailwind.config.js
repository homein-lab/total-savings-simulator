/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#072146',
        'brand-blue': '#004481',
        'brand-light': '#F4F8FB',
        'brand-cyan': '#2DCCCD',
      }
    },
  },
  plugins: [],
}
