/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "veryDarkGray": "hsl(0, 0%, 17%)",
        "darkGray": "hsl(0, 0%, 59%)",
      }
    },
  },
  plugins: [],
}

