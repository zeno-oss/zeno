/** @type {import('tailwindcss').Config} */

const colors = require("../../colors");

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./navigators/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
