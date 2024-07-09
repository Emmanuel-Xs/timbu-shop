/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        primary2: "var(--primary2)",
        secondary: "var(--secondary)",
        cartBlue: "var(--cartBlue)",
        border: "var(--border)",
      },
    },
  },
  plugins: [],
};
