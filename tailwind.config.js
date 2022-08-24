module.exports = {
  mode: "jit",
  content: [
    "./stories/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        newTegomin: ["New Tegomin"],
        mplus: ["M PLUS 1"],
      },
      skew: {
        60: "60deg",
      },
    },
    screens: {
      mobile: { max: "650px" },
      tablet: { max: "900px" },
    },
  },
  purge: {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./stories/**/*.{js,ts,jsx,tsx}"],
  },
  plugins: [require("@tailwindcss/typography")],
};
