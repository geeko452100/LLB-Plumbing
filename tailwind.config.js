/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#5B2A86",
          purpleDark: "#3D1B5C",
          teal: "#0F6B72",
          tealDark: "#0B4F54",
          cream: "#F5F2EA",
          ink: "#1B1B1B",
          slate: "#5B5850",
        },
      },
      fontFamily: {
        sans: ["'Josefin Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Righteous'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
