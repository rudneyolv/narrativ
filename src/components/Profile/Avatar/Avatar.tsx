/** @format */

import { AvatarProps } from "@/interfaces/profile.interfaces";
import Image from "next/image";
import { AvatarContainerStyles, AvatarStyles } from "./Avatar-Styles";
import { images } from "@/constants/images";

export const Avatar = ({ src, variant }: AvatarProps) => {
  const isValidImage = typeof src === "string" && src.trim().length > 0;

  return (
    <div className={AvatarContainerStyles()}>
      <Image
        src={isValidImage ? src : images.fallback.avatar}
        alt="user_profile_image"
        priority
        fill
        className={AvatarStyles({ variant })}
        sizes="(max-width: 768px) 80, 176px"
      />
    </div>
  );
};
