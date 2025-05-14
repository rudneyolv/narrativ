/** @format */

import type { Config } from "tailwindcss";
import { Quicksand } from "next/font/google";
import {
  baseColors,
  baseHoverColors,
  baseSizes,
  baseTextCases,
  baseWeights,
} from "./src/constants/styles";

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
          primary: "hsla(271, 100%, 50%, 1)",
          secondary: "hsla(271, 100%, 70%, 1)",

          dark: "hsla(220, 8%, 25%, 1)",
          xdark: "hsla(220, 8%, 19%, 1)",

          ice: "hsla(220, 14.3%, 94.1%, 1)",

          frost: "hsla(220, 14.3%, 82%, 1)",
          gray: "hsla(220, 9%, 45%, 1)",
          xgray: "hsla(220, 13%, 33%, 1)",

          black: "hsla(220, 10%, 7%, 1)",
          white: "hsla(0, 0%, 100%, 1)",
        },

        transparent: {
          black: "hsla(0, 0%, 0%, 0.2)",
        },

        glass: {
          black: "hsla(0, 0%, 0%, 0.5)",
        },

        shadow: {
          light: "hsl(var(--shadow-light))",
          medium: "hsl(var(--shadow-medium))",
          dark: "hsl(var(--shadow-dark))",
        },

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        neutral: "hsl(var(--neutral))",

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
        elevated: "6px 8px 8px rgba(0, 0, 0, 0.5)",
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
  safelist: [
    ...Object.values(baseColors),
    ...Object.values(baseHoverColors),
    ...Object.values(baseSizes),
    ...Object.values(baseWeights),
    ...Object.values(baseTextCases),
  ],

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
