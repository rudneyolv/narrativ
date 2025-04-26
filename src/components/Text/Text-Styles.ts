/** @format */

import { colors, sizes, textCases, weights } from "@/constants/styles";
import { cva } from "class-variance-authority";

export const TextStyles = cva("", {
  variants: {
    color: colors,
    weight: weights,
    size: sizes,
    textCase: textCases,
    variant: {
      flat: "",
      elevated: "text-shadow-elevated",
    },
  },

  defaultVariants: {
    color: "white",
    size: "sm",
    weight: "normal",
    textCase: "normal",
    variant: "flat",
  },
});
