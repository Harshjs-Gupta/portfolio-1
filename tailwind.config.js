/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      primaryColor: "hsl(164, 60%, 50%)",
      white: "hsl(0, 100%, 100%)",
      black: "hsl(0,0%, 0%)",
      red: "hsl(0, 100%, 50%)",
      transparency: "transparency",

      // light mode colors
      PrimaryColorHex: "#33cca3",
      titleColor: "#000",
      textColor: "#262626",
      bgColor: "#f0ebe3",
      bgColorAlt: "#fff",
      containerColor: "#fff",
      borderColor: "#000",

      // dark mode colors
      titleColorDark: "hsl(0, 0%, 100%)",
      textColorDark: "hsl(0, 0%, 92%)",
      bgColorDark: "hsl(216, 18%, 16%)",
      bgColorAltDark: "hsl(213, 10%, 21%)",
      containerColorDark: "hsl(217, 18%, 14%)",
      borderColorDark: "hsl(210, 2%, 65%)",
      primaryColorDark: "hsl(164, 60%, 50%)",
    },
    // additional small screen breakpoints
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    fontSize: {
      biggest: "90px",
      h1Size: "44px",
      h2Size: "30px",
      h3Size: "28px",
      h4Size: "24px",
      h5Size: "22px",
      largest: "21px",
      larger: "20px",
      large: "18px",
      normal: "16px",
      small: "15px",
      smaller: "14px",
      tiny: "13px",
    },
    extend: {
      dropShadow: {
        textShadow: [
          "2px 2px hsl(0, 0% ,0%)",
          "-2px 2px hsl(0, 0% ,0%)",
          "2px -2px hsl(0, 0% ,0%)",
          "-2px -2px hsl(0, 0% ,0%)",
          "5px 5px rgba(0,0,0,0.2)",
        ],
      },
      screens: {
        "3xl": "1700px",
        "4xl": "1800px",
        "5xl": "1950px",
      },
    },
    // defaults to these values for text-stroke plugin
    textFillColor: (theme) => theme("borderColor"),
    textStrokeColor: (theme) => theme("borderColor"),
    textStrokeWidth: (theme) => theme("borderWidth"),
    paintOrder: {
      fsm: { paintOrder: "fill stroke markers" },
      fms: { paintOrder: "fill markers stroke" },
      sfm: { paintOrder: "stroke fill markers" },
      smf: { paintOrder: "stroke markers fill" },
      mfs: { paintOrder: "markers fill stroke" },
      msf: { paintOrder: "markers stroke fill" },
    },
  },
  plugins: [
    // Plugin for hiding scrollbar
    require("tailwind-scrollbar-hide"),

    // plugin for text-stroke
    require("tailwindcss-text-fill-stroke")(),

    // plugin for bg gradient degree
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-gradient": (angle) => ({
            "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(
            theme("bgGradientDeg", {}), // name of config key. Must be unique
            {
              0: "0deg",
              10: "10deg", // bg-gradient-10
              15: "15deg",
              20: "20deg",
              25: "25deg",
              30: "30deg",
              45: "45deg",
              60: "60deg",
              90: "90deg",
              135: "135deg",
              155: "155deg",
              180: "180deg",
            }
          ),
        }
      );
    }),
  ],
};
