/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html", // Scan HTML files in public folder
    "./src/**/*.{html,js}", // Scan HTML and JS files in src
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#f5f5f5", // bg-gray-100
      secondary1: "#86EFAC", // bg-green-300
      secondary2: "#93C5FD", // bg-blue-300
      tertiary: "#1A3D40",
    },
  },
  plugins: [],
};
