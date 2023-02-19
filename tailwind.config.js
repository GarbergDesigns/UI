/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{tsx,ts}", "./src/**/*.{tsx,ts}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
