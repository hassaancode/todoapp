/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-bg": "#3A81EB",
        "theme-bg2": "#E11E4A",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
