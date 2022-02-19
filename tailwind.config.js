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
        'brand': '#7A009B',
      },
    },
  },
  variants: {},
  plugins: [],
}
