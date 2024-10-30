/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      layout:{
        mobile: "375px",
        desktop: "1440px",
      }
      color: {
        primary: {
          orange: "hsl(35, 77%, 62%)",
          red: "hsl(5, 85%, 63%)",
        },
        neutral: {
          "Off-white": "hsl(36, 100%, 99%)",
          "Grayish-blue": "hsl(233, 8%, 79%)",
          "Dark-grayish-blue": "hsl(236, 13%, 42%)",
          "Very-dark-blue": "hsl(240, 100%, 5%)",
        },
      typography: {
          bodycopy: {
            "Font-size": "(paragraph): 15px",
          },
          font: {
            Family: "[Inter](https://fonts.google.com/specimen/Inter)",
            Weights: "400, 700, 800",
          },
        },
      },
    },
  },
  plugins: [],
};
