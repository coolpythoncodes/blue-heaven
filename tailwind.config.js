/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
			xxs: "390px",
      xs: "540px",
			...defaultTheme.screens,
		},
    extend: {
      colors: {
        blueBg: "#295562",
        lightBlueTertiary: "#219EBC",
        textColor: "#333",
        creamSecondaryBg: "#EAE5D9",
        gray2: "#4F4F4F",
        gray3: "#828282",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}
