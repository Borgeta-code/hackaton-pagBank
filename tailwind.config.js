/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'pagbank-blue': '#0078AD',
        'pagbank-yellow-light': '#FFD13A',
        'pagbank-yellow-medium': '#E8B81C',
        'pagbank-yellow-dark': '#8C7324',
      }
    },
  },
  plugins: [],
};
