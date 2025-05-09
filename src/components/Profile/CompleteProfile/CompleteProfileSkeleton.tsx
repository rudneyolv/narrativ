/** @format */
import { Profile } from "@/components/Profile";
import Text from "@/components/Text/Text";

export const CompleteProfileSkeleton = () => {
  return (
    <Profile.Root>
      <Profile.BannerSkeleton>
        <Profile.AvatarSkeleton />
        <Text color="primary" text="loading..." variant="elevated" weight="normal" size="xl" />
      </Profile.BannerSkeleton>
    </Profile.Root>
  );
};
