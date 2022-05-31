module.exports = {
  content: [
    './layouts/*.html'
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
