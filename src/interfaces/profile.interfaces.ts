/** @format */

import {
  AvatarContainerStylesVariants,
  AvatarStylesVariants,
} from "@/components/Profile/Avatar/Avatar-Styles";

export interface BannerProps {
  src?: string;
  children?: React.ReactNode;
}

export interface AvatarProps extends AvatarStylesVariants, AvatarContainerStylesVariants {
  src?: string;
}
