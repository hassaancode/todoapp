/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-bg": "#3A81EB",
        "theme-bg2": "#E11E4A",
      },
      keyframes: {
        fadein: {
          "0%": {
            opacity: 0,
            transform: "translateX(-10%)",
          },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        frombottom: {
          "0%": {
            opacity: 0,
            transform: "translateY(-50%)",
          },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadein: "fadein 400ms ",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
