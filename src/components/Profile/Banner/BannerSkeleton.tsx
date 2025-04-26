/** @format */

import { Skeleton } from "@/components/ui/skeleton";
import { BannerProps } from "@/interfaces/profile.interfaces";
import { BannerContainerStyles, BannerWrapperStyles } from "./Banner-Styles";

export const BannerSkeleton = ({ children }: BannerProps) => {
  return (
    <Skeleton className={BannerWrapperStyles()}>
      <div className={BannerContainerStyles()}>{children}</div>
    </Skeleton>
  );
};
