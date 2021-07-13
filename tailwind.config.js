module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-green": "#A5D364",
        "custom-gray": "#F3F3F3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};