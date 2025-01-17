import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#f6f6e9",
        primary: "#3d81a8",
        secondary: "#a89a64",
        heading: "#f8e894",
        primaryHover: "#346e8f",
        primaryText: "#cfcfcf",
      },
      gradientColorStops: {
        primaryBlueStart: "#7eb1cd",
        primaryBlueEnd: "#3d81a8",
      },
      fontFamily: {
        recoleta: ["Recoleta", "sans-serif"],
      },
      spacing: {
        sm: "2rem",
        md: "3rem", // Custom margin for medium screens
        lg: "5rem", // Custom margin for large screens
        "2xl": "14rem", // Custom margin for 2xl screens
      },
    },
  },
  plugins: [],
} satisfies Config;
