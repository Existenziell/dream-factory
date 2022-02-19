module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
        'brand': '#003153',
      },
    },
  },
  variants: {},
  plugins: [],
}
