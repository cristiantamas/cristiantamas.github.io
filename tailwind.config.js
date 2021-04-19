module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backgroundColor: {
          DEFAULT: '#0e1212'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
