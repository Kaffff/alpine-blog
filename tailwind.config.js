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
        shipporiAntique: ["Shippori Antique"],
        shipporiMincho: ["Shippori Mincho"],
        newTegomin: ["New Tegomin"],
        otomanopeeOne: ["Otomanopee One"],
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
  plugins: [require("@tailwindcss/typography")],
};
