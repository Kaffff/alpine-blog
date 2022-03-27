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
        shippori: ["ShipporiAntique"],
      },
    },
    screens: {
      mobile: { max: "650px" },
      tablet: { max: "900px" },
    },
  },
  plugins: [],
};
