// eslint-disable-next-line
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: false,
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Nunito'],
        'serif': ['Nunito'],
        'mono': ['Nunito'],
        'display': ['Nunito'],
        'body': ['Nunito']
      },
      colors: {
        'brand': '#7A009B',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};
