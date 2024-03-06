/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    // function ({ addUtilities }) {
    //   const newUtilities = {
    //     ".scrollbarThin": {
    //       scrollbarWidth: "thin",
    //       scrollbarColor: "rgba(31 29 29) white",
    //     },
    //     ".scrollbarWebkit": {
    //       "&::-webkit-scrollbar": {
    //         width: "8px",
    //       },
    //       "&::-webkit-scrollbar-track": {
    //         backgroundColor: "white",
    //       },
    //       "&::-webkit-scrollbar-thumb": {
    //         backgroundColor: "rgba(31 41 55)",
    //         borderRadius: "20px",
    //         border: "1px solid white",
    //       },
    //     }
    //   };

    //   addUtilities(newUtilities, ["responsive", "hover"]);
    // }
  ],
};
