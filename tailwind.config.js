/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#f3e8ff",
          100: "#e0ccff",
          200: "#c09eff",
          300: "#9c72f5",
          400: "#7948e5",
          500: "#4a22a5",
          600: "#3a1a80",
          700: "#2a125c",
          800: "#1a0b3a",
          900: "#0c031a"
        },
        orange: {
          50: "#fff4e5",
          100: "#ffe1b8",
          200: "#ffc882",
          300: "#ffad4d",
          400: "#ff8f26",
          500: "#eca228",
          600: "#d07d1e",
          700: "#a75f16",
          800: "#7d4310",
          900: "#522b09"
        }
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      }
    }
  },
  plugins: []
};
