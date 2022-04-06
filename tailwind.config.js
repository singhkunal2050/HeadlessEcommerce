module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darknight': '#111b25',
        'primaryaccent': '#d8dad9',
        'secondaryaccent': '#cd8f61',
      },
      fontFamily: {
        'montserrat': ['"Montserrat"', 'sans-serif']
      }
    },
  },
  plugins: [],
}