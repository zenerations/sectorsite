const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      colors:{
        brand:{
          1:"#d1e1ef",
          3:"#bdd4e6",
          2:"#a6c5dd",
          4:"#81acce",
          5:"#6f9abc",
          6:"#4f7898",
          7:"#355269",
          8:"#283c4c",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
