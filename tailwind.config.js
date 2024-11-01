/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html", // Scan HTML files in public folder
    "./src/**/*.{html,js}", // Scan HTML and JS files in src
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f5f5f5",
        secondary1: "#ecfcce",
        secondary2: "#bbd5f5",
        tertiary: "#1A3D40",
        blanc: "#fafafa",
        negre: "#000000",
        gray: "#4B5563",
        blue500: "#3B82F6",
      },
    },
    
  },
  plugins: [],
};
