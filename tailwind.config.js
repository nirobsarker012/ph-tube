/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif;"],
      },
    },
  },
  plugins: [],
};
