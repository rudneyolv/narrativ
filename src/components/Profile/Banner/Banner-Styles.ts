/** @format */

import { cva } from "class-variance-authority";

export const BannerWrapperStyles = cva(
  "relative w-full h-[300px] md:h-[400px] bg-center bg-cover p-4 flex items-end"
);

export const BannerContainerStyles = cva("w-1/1 flex flex-row items-center gap-2 md:pl-14");

export const BannerOverlayStyles = cva(
  "absolute inset-0 bg-gradient-to-b from-transparent-black via-transparent-black  to-glass-black z-0"
);
