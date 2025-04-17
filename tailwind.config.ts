/** @format */

import type { Config } from "tailwindcss";
import { Quicksand } from "next/font/google";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          primary: "hsl(var(--primary))",
          secondary: "hsl(var(--secondary))",
          light: "hsl(var(--light))",
          medium: "hsl(var(--medium))",
          dark: "hsl(var(--dark))",
          xdark: "hsl(var(--xdark))",
          ice: "hsl(var(--ice))",
          pale: "hsl(var(--pale))",
          black: "hsl(var(--black))",
          white: "hsl(var(--white))",
          red: "hsl(var(--red))",
          lightRed: "hsl(var(--light-red))",
          darkRed: "hsl(var(--dark-red))",
        },

        shadow: {
          light: "hsl(var(--shadow-light))",
          medium: "hsl(var(--shadow-medium))",
          dark: "hsl(var(--shadow-dark))",
        },

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },

      fontFamily: {
        primary: ["var(--font-quicksand)", "sans-serif"],
      },

      boxShadow: {
        neumorphicInset:
          "inset 4px 4px 6px hsl(var(--shadow-neumorphic)), inset -1px -1px 8px hsl(var(--light-base))",
        neumorphic:
          "4px 4px 6px hsl(var(--shadow-neumorphic)), -1px -1px 8px hsl(var(--light-base))",
        elevated: "10px 15px 10px rgba(0, 0, 0, 0.5)",
      },

      textShadow: {
        elevated: "5px 7px 5px rgba(0, 0, 0, 0.5)",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      spacing: {
        neumorphism: "12px",
      },

      transitionProperty: {
        allColors: "background-color, border-color, color, box-shadow", // Adicionando box-shadow
      },

      transitionDuration: {
        default: "var(--default-transition-duration)", // Usando a variável de duração
      },

      animation: {
        spin360Right: "spin360Right 1s ease-out forwards",
        spin360Left: "spin360Left 1s ease-out forwards",
      },

      keyframes: {
        spin360Right: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        spin360Left: {
          "0%": {
            transform: "rotate(360deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-textshadow"),

    function ({ addComponents }) {
      addComponents({
        ".transition-all-colors": {
          transitionProperty: "background-color, border-color, color, box-shadow",
          transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
          transitionDuration: "var(--default-transition-duration)",
        },
      });
    },
  ],
} satisfies Config;
