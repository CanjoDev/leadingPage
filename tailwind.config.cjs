/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 18px 45px rgba(0,0,0,.08)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};
