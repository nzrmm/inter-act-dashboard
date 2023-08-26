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
          "05": "#2E4B85",
          "06": "#5C6CA5",
        },
        "custom-gray": {
          "01": "#6C747D",
          "02": "#8A92A6",
          "03": "#D3D3D3",
          "04": "#9F9F9F",
          "05": "#828282",
        },
        "custom-green": {
          "01": "#0BB885",
          "02": "#98FFE0",
        },
        "custom-orange": {
          "01": "#FF814A",
        },
      },
    },
  },
  plugins: [],
};
