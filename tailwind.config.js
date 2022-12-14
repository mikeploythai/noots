/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter var",
      },
      screens: {
        sm: "480px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
