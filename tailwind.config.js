/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { nunito: "Nunito", roboto: "Roboto" },
    },

    colors: {
      gray: {
        100: "#808080",
        200: "#323232",
        300: "#212121",
        400: "#131313",
        500: "#090a0e",
      },
      white: "#fff",
      cyan: "#14ffec",
      red: "#d6436e",
      green: "#25da72",
      orange: "#FF6150",
    },
    fontSize: {
      sm: "14px",
      md: "18px",
      lg: "24px",
      xl: "32px",
      xxl: "40px",
      xxxl: "50px",
      base: "16px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
