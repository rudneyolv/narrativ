/** @format */

export const baseColors = {
  primary: "text-main-primary",
  secondary: "text-main-secondary",
  dark: "text-main-dark",
  xdark: "text-main-xdark",
  ice: "text-main-ice",
  frost: "text-main-frost",
  gray: "text-main-gray",
  xgray: "text-main-xgray",
  black: "text-main-black",
  white: "text-main-white",
};

export const baseHoverColors = {
  primary: "hover:text-main-primary",
  secondary: "hover:text-main-secondary",
  light: "hover:text-main-light",
  medium: "hover:text-main-medium",
  dark: "hover:text-main-dark",
  xdark: "hover:text-main-xdark",
  ice: "hover:text-main-ice",
  pale: "hover:text-main-pale",
  black: "hover:text-main-black",
  white: "hover:text-main-white",
};

export const baseSizes = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
};

export const baseWeights = {
  normal: "font-normal",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

export const baseTextCases = {
  normal: "normal-case",
  uppercase: "uppercase",
  lowercase: "lowercase",
};

export type BaseColors = keyof typeof baseColors;
export type BaseHoverColors = keyof typeof baseHoverColors;
export type BaseSizes = keyof typeof baseSizes;
export type BaseWeights = keyof typeof baseWeights;
export type BaseTextCases = keyof typeof baseTextCases;
