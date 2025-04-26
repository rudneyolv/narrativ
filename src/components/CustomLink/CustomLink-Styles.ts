/** @format */

import { colors, hoverColors, sizes, textCases, weights } from "@/constants/styles";
import { cva } from "class-variance-authority";

export const CustomLinkStyles = cva(
  "font-primary font-semibold uppercase transition-all duration-500 ease-in-out",
  {
    variants: {
      color: colors,
      hoverColor: hoverColors,
      size: sizes,
      weight: weights,
      textCase: textCases,
    },

    defaultVariants: {
      color: "pale",
      hoverColor: "primary",
    },
  }
);
