/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", ...fontFamily.serif],
    },
    extend: {
      colors: {
        dark: {
          "01": "#151A2E",
          "02": "#171E37",
          "03": "#1F2849",
          "04": "#1C243F",
        },
      },
    },
  },
  plugins: [],
};
