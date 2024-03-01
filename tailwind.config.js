/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0057ff",

          secondary: "#0059ff",

          accent: "#00c900",

          neutral: "#133229",

          "base-100": "#132938",

          info: "#00d1ff",

          success: "#4a8100",

          warning: "#d27d00",

          error: "#e64248",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
