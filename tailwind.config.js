/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      primaryCustom : 'rgb(245 245 245)',
      purpleCustom :'#7B68EE',
      bgPrimary : 'rgb(250 250 250)',
      textprimary: '#979797',
      lightPurple : 'rgb(123 104 238 / 25%)'
    }
  },
  variants: {
  extend: {},
  },
  plugins: [],
};