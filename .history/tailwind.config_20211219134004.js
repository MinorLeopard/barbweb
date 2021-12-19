module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('images/hero.png)",
      },
      colors: {
        footerBg: "#514F59",
      },
      borderRadius: {
        'none': '8rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
