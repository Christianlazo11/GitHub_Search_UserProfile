/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blue: "#22272E",
        blueDark: "#0A0C10",
        blueLight: "#FA4549",
        white: "#F5F5F5",
        gray: "#e1e1e1",
      },
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
  },
  plugins: [],
};
