import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      xxs: "420px",
      xs: "520px",
      sm: "640px", // Tailwind default
      md: "768px", // Tailwind default
      lg: "1024px", // Tailwind default
      xl: "1280px", // Tailwind default
      "2xl": "1536px", // Tailwind default
      max500: { max: "500px" },
      short: { raw: "(max-height: 900px)" },
    },
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        custom: {
          "50": "#FAFAFA",
          "100": "#F4F4F5",
          "200": "#E5E7EB",
          "300": "#D1D5DB",
          "400": "#9CA3AF",
          "500": "#6B7280",
          "600": "#4B5563",
          "700": "#374151",
          "800": "#1F2937",
          "900": "#111827",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
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
      fadeIn: {
        "0%": { opacity: "0", transform: "translateY(10px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      slideIn: {
        "0%": { transform: "translateX(-100%)" },
        "100%": { transform: "translateX(0)" },
      },
      shimmer: {
        "100%": { transform: "translateX(100%)" },
      },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-25%)",
          animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
        },
        "50%": {
          transform: "none",
          animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
        },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.3s ease-out",
      "accordion-up": "accordion-up 0.3s ease-out",
      fadeIn: "fadeIn 0.5s ease-in-out",
      slideIn: "slideIn 0.5s ease-in-out",
      shimmer: "shimmer 2s infinite",
      bounce: "bounce 1s infinite",
      fadeInAfterLoad: "fadeIn 0.5s ease-out forwards",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
export default config;
