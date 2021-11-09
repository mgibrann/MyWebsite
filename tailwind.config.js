module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: {
          blue: "#7579E7",
          white: "#EDEEF7",
          grey: "#555555",
        },
        dark: {
          light: "#ff7ce5",
          DEFAULT: "#ff49db",
          dark: "#ff16d1",
        },
      },
    },
  },
  variants: {
    extend: {
      grayscale: ["hover", "focus", "active"],
      zIndex: ["hover"],
    },
  },
  plugins: [],
};
