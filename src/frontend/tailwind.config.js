import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        chart: {
          1: "oklch(var(--chart-1))",
          2: "oklch(var(--chart-2))",
          3: "oklch(var(--chart-3))",
          4: "oklch(var(--chart-4))",
          5: "oklch(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "oklch(var(--sidebar))",
          foreground: "oklch(var(--sidebar-foreground))",
          primary: "oklch(var(--sidebar-primary))",
          "primary-foreground": "oklch(var(--sidebar-primary-foreground))",
          accent: "oklch(var(--sidebar-accent))",
          "accent-foreground": "oklch(var(--sidebar-accent-foreground))",
          border: "oklch(var(--sidebar-border))",
          ring: "oklch(var(--sidebar-ring))",
        },
        // Brand colors
        fuchsia: {
          DEFAULT: "oklch(var(--fuchsia))",
          light: "oklch(0.72 0.22 320)",
          dark: "oklch(0.42 0.22 340)",
        },
        "rose-gold": "oklch(var(--rose-gold) / <alpha-value>)",
        "deep-blush": "oklch(var(--deep-blush) / <alpha-value>)",
        "dark-bg": "oklch(var(--dark-bg) / <alpha-value>)",
        "darker-bg": "oklch(var(--darker-bg) / <alpha-value>)",
        "near-white": "oklch(var(--near-white) / <alpha-value>)",
      },
      fontFamily: {
        sans: ['"Syne"', "system-ui", "sans-serif"],
        serif: ['"Playfair Display"', "Georgia", "serif"],
        mono: ['"Geist Mono"', '"Fira Code"', "monospace"],
        playfair: ['"Playfair Display"', "Georgia", "serif"],
        syne: ['"Syne"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0,0,0,0.05)",
        "pink-sm": "0 0 20px oklch(0.58 0.26 340 / 0.3), 0 0 40px oklch(0.58 0.26 340 / 0.1)",
        "pink-lg": "0 0 40px oklch(0.58 0.26 340 / 0.4), 0 0 80px oklch(0.58 0.26 340 / 0.2)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float-particle": {
          "0%": { opacity: "0", transform: "translateY(0) scale(0)" },
          "10%": { opacity: "1" },
          "90%": { opacity: "0.3" },
          "100%": { opacity: "0", transform: "translateY(-120px) scale(1)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "counter-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float-particle": "float-particle 4s ease-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "counter-up": "counter-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [typography, containerQueries, animate],
};
