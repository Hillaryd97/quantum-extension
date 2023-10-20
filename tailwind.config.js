/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        quantum_50: "#F3F6F3",
        quantum_500: "#597257",
        quantum_900: "#243024",
        quantum_950: "#141A14",
        white: "#FFFFFF",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
