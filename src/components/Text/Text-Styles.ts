/** @format */

import {
  baseColors,
  baseHoverColors,
  baseSizes,
  baseTextCases,
  baseWeights,
} from "@/constants/styles";

import { cva } from "class-variance-authority";

export const TextStyles = cva("", {
  variants: {
    color: baseColors,
    hoverColor: baseHoverColors,
    size: baseSizes,
    weight: baseWeights,
    textCase: baseTextCases,
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
