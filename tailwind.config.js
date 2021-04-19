module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Extra colors
      colors: {
        backgroundColor: {
          DEFAULT: "#0e1212",
        },
      },

      // Extra animations
      animation: {
        fadeInFast: "fadeIn 1s ease-in forwards",
        fadeInSlow: "fadeIn 3s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        }
      },
    },
  },
  variants: {
    extend: {
      animation: ["motion-safe"],
    },
  },
  plugins: [],
};
