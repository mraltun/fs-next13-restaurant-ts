/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // Modify default class
    fontSize: {
      "2xsm": "10px",
      xsm: "12px",
      sm: "13px",
      reg: "15px",
      lg: "18px",
      "2lx": "22px",
      "3lx": "25px",
      "4lx": "32px",
      "5lx": "40px",
      "6lx": "50px",
      "7lx": "70px",
    },
  },
  plugins: [],
};
