const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./renderer/src/pages/**/*.{js,ts,jsx,tsx}",
    "./renderer/src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // use colors only specified
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
    },
    extend: {},
  },
  plugins: [],
};
