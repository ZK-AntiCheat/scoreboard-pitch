import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
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
        // Darker Aztec Network inspired colors
        aztec: {
          purple: {
            50: "#f3f1ff",
            100: "#ebe5ff",
            200: "#d9ceff",
            300: "#bea6ff",
            400: "#9f75ff",
            500: "#843dff",
            600: "#7916ff",
            700: "#6b04fd",
            800: "#5a03d4",
            900: "#4b05ad",
            950: "#1a0040",
          },
          pink: {
            50: "#fef7ff",
            100: "#feeeff",
            200: "#fdd5ff",
            300: "#fcb3ff",
            400: "#f981ff",
            500: "#f24ff0",
            600: "#e02dd4",
            700: "#c41db0",
            800: "#a21890",
            900: "#851a74",
            950: "#3d0a2b",
          },
          dark: {
            50: "#f8f7ff",
            100: "#f1efff",
            200: "#e5e2ff",
            300: "#d2ccff",
            400: "#b8a9ff",
            500: "#9b7fff",
            600: "#7c4dff",
            700: "#6b2cff",
            800: "#2a1a4d",
            900: "#1a0f33",
            950: "#0d0619",
          },
        },
        // Add high contrast colors for better visibility
        contrast: {
          high: "#ffffff",
          medium: "#e2e8f0",
          low: "#94a3b8",
        },
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
      },
      backgroundImage: {
        "aztec-gradient": "linear-gradient(135deg, #0d0619 0%, #1a0f33 25%, #2a1a4d 50%, #1a0040 75%, #3d0a2b 100%)",
        "aztec-card": "linear-gradient(135deg, rgba(13, 6, 25, 0.95) 0%, rgba(26, 15, 51, 0.9) 100%)",
        "aztec-pink": "linear-gradient(135deg, #f24ff0 0%, #e02dd4 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
