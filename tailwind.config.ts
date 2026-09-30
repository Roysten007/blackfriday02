import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        solara: {
          white: "#FFFFFF",
          emerald: "#0E5A45",
          "emerald-light": "#15785C",
          "emerald-dark": "#093F30",
          "emerald-deep": "#05261D",
          "emerald-soft": "#EDF7F3",
          orange: "#FF7A1A",
          "orange-hover": "#E8680C",
          "orange-light": "#FFF3EA",
          "orange-badge": "#FF7A1A",
          charcoal: "#18201E",
          muted: "#4F605A",
          border: "#E2EBE7",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Fraunces", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        arch: "160px 160px 32px 32px",
        "arch-sm": "100px 100px 24px 24px",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
