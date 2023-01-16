/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: '#232f3e',
          DEFAULT: '#131921'
        },
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
