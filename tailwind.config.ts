import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#1C1D1D",
      white: "#FFFFFF",
      lightBlue: "#47AAF8",
      blue: "#4079B7",
      grey: "#94A3B8",
      linkBlue: "#0000FF",
      transparent: "transparent",
    },
    fontSize: {
      paragraph: [
        "1rem",
        {
          fontWeight: "300",
          lineHeight: "140%",
        },
      ],
      subheading: [
        "1rem",
        {
          letterSpacing: "-0.02rem",
          fontWeight: "700",
          lineHeight: "120%",
        },
      ],
      heading: [
        "2.25rem",
        {
          letterSpacing: "-0.045rem",
          fontWeight: "400",
          lineHeight: "110%",
        },
      ],
    },
    screens: {
      phone: "425px",
      tablet: "800px",
      desktop: "1280px",
    },
    extend: {
      margin: {
        15: "60px",
      },
      padding: {
        15: "60px",
      },
      gap: {
        15: "60px",
      },
    },
  },
  plugins: [],
} satisfies Config;
