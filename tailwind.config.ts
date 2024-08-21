import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        csSkyBlue: "#C3EBFA",
        csLightSkyBlue: "#EDF9FD",
        csPurple: "#CFCEFF",
        csPurpleLight: "#F1F0FF",
        csYellow: "#FAE27C",
        csYellowLight: "#FEFCE8",
      }
    },
  },
  plugins: [],
};
export default config;
