/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      maxWidth: {
        mainMaxWidth: "1440px",
        tableMaxWidth: "991px",
      },
      color: {
        mainColor: "#0b2c4c",
      },
      backgroundColor: {
        mainBgColor: "#0b2c4c",
      },
    },
    screens: {
      desktop: "1441px",
      display: "1201px",
      tablet: "992px",
      mobile: "640px",
    },
  },
  plugins: [],
};
