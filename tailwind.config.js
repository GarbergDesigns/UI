const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{tsx,ts}", "./src/**/*.{tsx,ts}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
        primary: colors.neutral,
        secondary: colors.indigo,
        white: colors.white,
        transparent: colors.transparent,
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
