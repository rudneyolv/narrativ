/** @format */

import { cva, VariantProps } from "class-variance-authority";

export const AvatarContainerStyles = cva("relative w-28 h-28 md:w-44 md:h-44");

export const AvatarStyles = cva("w-full h-full rounded-full object-cover", {
  variants: {
    variant: {
      flat: "",
      elevated: "shadow-elevated",
    },

    isSkeleton: {
      true: "bg-main-ice",
    },
  },

  defaultVariants: {
    variant: "flat",
  },
});

export type AvatarContainerStylesVariants = VariantProps<typeof AvatarContainerStyles>;
export type AvatarStylesVariants = VariantProps<typeof AvatarStyles>;
