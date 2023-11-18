/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E0F4FF",
        secondary: "#39A7FF",
        accent: "#87C4FF",
      },
    },
  },
  plugins: [],
};
