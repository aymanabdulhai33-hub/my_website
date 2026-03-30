/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        300: "300px",
        400: "400px",
        600: "600px",
      },
      minHeight: {
        75: "75px",
        600: "600px",
      },
    },
  },
  plugins: [],
};
