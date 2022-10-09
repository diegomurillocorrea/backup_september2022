module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: "#0FA9E6"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: [ "active" ],
      fontSize: [ "hover" ]
    },
  },
  plugins: [],
}
