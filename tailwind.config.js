module.exports = {
  purge: ["./src/**/**/**/*.jsx", "./public/index.html", "./src/index.css"],
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
      width: {
        "2px": "2px",
      },
    },
  },
  variants: {
    extend: {
      grayscale: ["hover"],
      zIndex: ["hover"],
    },
  },
  plugins: [],
};
