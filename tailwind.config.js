/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#164863",
        secondary: "#427D9D",
        accent: "#F05941",
      },
    },
  },
  plugins: [],
};
