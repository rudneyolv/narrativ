/** @format */

import {
  baseColors,
  baseHoverColors,
  baseSizes,
  baseTextCases,
  baseWeights,
} from "@/constants/styles";
import { cva } from "class-variance-authority";

export const CustomLinkStyles = cva(
  "font-primary font-semibold uppercase transition-all duration-500 ease-in-out",
  {
    variants: {
      color: baseColors,
      hoverColor: baseHoverColors,
      size: baseSizes,
      weight: baseWeights,
      textCase: baseTextCases,
    },

    defaultVariants: {
      color: "frost",
      hoverColor: "ice",
    },
  }
);
