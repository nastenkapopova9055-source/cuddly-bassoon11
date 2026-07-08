import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0056b3",
          dark: "#003d80",
          light: "#e8f0fe",
        },
        accent: {
          DEFAULT: "#00c853",
          dark: "#009624",
        },
        ink: "#1a1a2e",
        muted: "#5a5a7a",
        night: "#1a2332",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        sm: "0 2px 8px rgba(0,0,0,0.06)",
        md: "0 8px 32px rgba(0,0,0,0.10)",
        lg: "0 16px 48px rgba(0,0,0,0.12)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        dancer: {
          "0%, 100%": { transform: "translateY(0) rotate(-8deg)" },
          "25%": { transform: "translateY(-8px) rotate(8deg)" },
          "50%": { transform: "translateY(0) rotate(-4deg) scale(1.05)" },
          "75%": { transform: "translateY(-5px) rotate(6deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        dancer: "dancer 1.1s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
