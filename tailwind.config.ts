import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vora: {
          bg: "#000D26",
          primary: "#00B8F5",
          primaryDark: "#0068C9",
          cyan: "#00D9FF",
          metal: "#D9E1EA",
          orange: "#FF6A00",
          yellow: "#FFD21A",
          white: "#FFFFFF",
        }
      },
    },
  },
  plugins: [],
};
export default config;