/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./component/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Gilroy: ["Gilroy-Medium", "sans-serif"],
        "GentyDemo-Regular": ["GentyDemo-Regular", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#53B1750A",
          200: "#53B175A",
          300: "#53B175",
        },
        accent: {
          100: "#FBFBFD",
        },
        black: {
          DEFAULT: "#000000",
          100: "#8C8E98",
          200: "#666876",
          300: "#191D31",
        },
        green: {
          DEFAULT: '#3E612F'
        },
        danger: "#F75555",
      },
    },
  },
  plugins: [],
};