import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import TailwindCSSAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clashDisplay: "var(--font-clash-display)", // note: you can call the left side of this whatever you want - barlow-bold or title-font or foo-bar, this is what you'll use in your Tailwind css classes to use this font
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      aspectRatio: {
        "2/3": "2 / 3",
        "3/4": "3 / 4",
        "3/2": "3 / 2",
        "4/3": "4 / 3",
        "16/9": "16 / 9",
        "9/16": "9 / 16",
      },
      transitionTimingFunction: {
        cubic: "cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [typography, TailwindCSSAnimate],
};
export default config;
