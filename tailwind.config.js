/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "#1B5B96": "rgba(27, 91, 150, 1)",
        "#0587FF": "rgba(5, 135, 255, 1)",
      },
      fontFamily: {
        Montserrat: ['"Montserrat"', "sans-serif"],
        DMSans: ['"DM+Sans"', "sans-serif"],
        Inter: ['"Inter"', "sans-serif"],
      },
      screens: {
        huge: { min: "1535px" },
        // => @media (min-width: 1535px) { ... }

        xl: { min: "1279px" },
        // => @media (min-width: 1279px) { ... }

        lg: { min: "1223px" },
        // => @media (min-width: 1023px) { ... }

        md: { min: "867px" },
        // => @media (min-width: 767px) { ... }

        sm: { min: "639px" },
        // => @media (min-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
