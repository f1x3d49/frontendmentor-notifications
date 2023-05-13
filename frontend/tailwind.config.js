/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pred: "hsl(var(--color-pred) / <alpha-value>)",
        pblue: "hsl(var(--color-pblue) / <alpha-value>)",
        nwhite: "hsl(var(--color-nwhite) / <alpha-value>)",
        nvlgb: "hsl(var(--color-nvlgb) / <alpha-value>)",
        nlgb1: "hsl(var(--color-nlgb1) / <alpha-value>)",
        nlgb2: "hsl(var(--color-nlgb2) / <alpha-value>)",
        ngb: "hsl(var(--color-ngb) / <alpha-value>)",
        ndgb: "hsl(var(--color-ndgb) / <alpha-value>)",
        nvdb: "hsl(var(--color-nvdb) / <alpha-value>)",
      },
      fontFamily: {
        main: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
