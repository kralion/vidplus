import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        background: "#7204FD",
        primary: "#150030",
        secondary: "#FF603D",
        tertiary: "#F8E439",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
