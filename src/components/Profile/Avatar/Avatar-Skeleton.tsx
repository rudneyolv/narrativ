/** @format */

import { Skeleton } from "@/components/ui/skeleton";
import { AvatarContainerStyles, AvatarStyles } from "./Avatar-Styles";

export const AvatarSkeleton = () => {
  return (
    <div className={AvatarContainerStyles()}>
      <Skeleton className={AvatarStyles({ isSkeleton: true })} />
    </div>
  );
};
