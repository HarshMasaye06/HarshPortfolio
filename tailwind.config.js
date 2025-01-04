/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "786px",
        lg: "960px",
        xl: "1200px",
      },
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#272727",
        accent: {
          // green-accents
          // DEFAULT: "#00ff99",
          // hover: "#00e187",
          // blue-accents
          // DEFAULT: "#038aff",
          // hover: "#2c82c9",

          // red-accents
          // text: "#17080a",
          // background: "#fbeff1",
          hover: "#cd374e",
          // secondary: "#e68997",
          // accent: "#c22940",

          // red-accents-dark
          // text: "#f7e8ea",
          // background: "#100406",
          // DEFAULT: "#c83248",
          // secondary: "#761927",
          DEFAULT: "#d63d54",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
