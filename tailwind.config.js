/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#1B1953",
        lightBlue: "#746FF2",
        blueColor: "#3A9FF6",
        green: "#006B3D",
        lightGreen: "#3CDA73",
        textDarkBlack: "#161616",
      },
      screens: {
        xs: "370px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1536px",
      },
    },
  },
  plugins: [],
};
