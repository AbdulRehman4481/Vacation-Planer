const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image1":
          "url('/assets/Images/anders-jilden-cYrMQA7a3Wc-unsplash.jpg')",
        "hero-image2":
          "url('/assets/Images/edgar-chaparro-6ccJQ5qPFvY-unsplash.jpg')",
        "hero-image3":
          "url('/assets/Images/tim-trad-CLm3pWXrS9Q-unsplash.jpg')",
        "plan-image": "url('/assets/Images/team_bg_1.jpg')",
      },
      fontFamily: {
        greyQe: ["Grey_Qo", "cursive"],
        manrope: ["Manrope", "sans-serif"],
        montez: ["Montez", "cursive"],
      },
      colors: {
        primary: "#1CA8CB",
        primary_light: "#E9F6F9",
        secondary: "#113D48",
        text_gray: "#666666",
      },
    },
  },
  plugins: [nextui()],
  experimental: {
    granularChunks: false,
  },
};
