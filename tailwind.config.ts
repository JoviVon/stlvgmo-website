import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        // Legacy colors (keeping for compatibility)
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        
        // STLVGMO Brand Colors
        "stlvgmo": {
          "blue": {
            50: "#f0f4ff",
            100: "#e0e9ff",
            200: "#c7d6ff",
            300: "#a5b8ff",
            400: "#8191ff",
            500: "#5d6aff",
            600: "#4148ff",
            700: "#3238eb",
            800: "#2a2fbe",
            900: "#1b3eda", // Primary brand blue
            950: "#151f8a",
          },
          "orange": {
            50: "#fffbf0",
            100: "#fff6e0",
            200: "#ffebc7",
            300: "#ffdba5",
            400: "#ffc681",
            500: "#ffab5d",
            600: "#ff8f41",
            700: "#f9a922", // Primary brand orange
            800: "#e6941f",
            900: "#cc7a1b",
            950: "#8a4f0f",
          },
        },
        
        // Semantic color mappings
        primary: {
          50: "#f0f4ff",
          100: "#e0e9ff",
          200: "#c7d6ff",
          300: "#a5b8ff",
          400: "#8191ff",
          500: "#5d6aff",
          600: "#4148ff",
          700: "#3238eb",
          800: "#2a2fbe",
          900: "#1b3eda",
          950: "#151f8a",
        },
        accent: {
          50: "#fffbf0",
          100: "#fff6e0",
          200: "#ffebc7",
          300: "#ffdba5",
          400: "#ffc681",
          500: "#ffab5d",
          600: "#ff8f41",
          700: "#f9a922",
          800: "#e6941f",
          900: "#cc7a1b",
          950: "#8a4f0f",
        },
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
