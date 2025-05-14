/** @format */
import { Profile } from "@/components/Profile";
import Text from "@/components/Text/Text";

interface CompleteProfileProps {
  username: string;
}

export const CompleteProfile = async ({ username }: CompleteProfileProps) => {
  const response = await fetch(`http://localhost:3100/api/users/${username}`, {
    headers: {
      accept: "application/json",
    },
  });

  const { data } = await response.json();

  return (
    <Profile.Root>
      <Profile.Banner src={data?.profile_banner_url}>
        <Profile.Avatar src={data?.profile_image_url} variant="elevated" />
        <Text text={data?.username} variant="elevated" weight="semibold" size="xl" />
      </Profile.Banner>
    </Profile.Root>
  );
};
