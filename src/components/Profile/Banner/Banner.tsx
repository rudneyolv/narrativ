/** @format */

import { images } from "@/constants/images";
import { BannerProps } from "@/interfaces/profile.interfaces";
import { BannerContainerStyles, BannerOverlayStyles, BannerWrapperStyles } from "./Banner-Styles";

export const Banner = ({ src, children }: BannerProps) => {
  const bannerImage =
    typeof src === "string" && src.trim().length > 0 ? src : images.fallback.banner;

  return (
    <div className={BannerWrapperStyles()} style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className={BannerOverlayStyles()} />

      <div className="relative z-10">
        <div className={BannerContainerStyles()}>{children}</div>
      </div>
    </div>
  );
};
