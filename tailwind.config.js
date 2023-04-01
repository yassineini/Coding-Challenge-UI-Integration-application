/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      primaryCustom : 'rgb(245 245 245)',
      purpleCustom :'purple',
      bgPrimary : 'rgb(250 250 250)'
    }
  },
  variants: {
  extend: {},
  },
  plugins: [],
};