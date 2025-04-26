/** @format */
import { Profile } from "@/components/Profile";
import Text from "@/components/Text/Text";

export const ProfileFetcher = async (username) => {
  const response = await fetch(`http://localhost:3100/api/users/${username}`, {
    headers: {
      accept: "application/json",
    },
  });

  const { data } = await response.json();

  return (
    <Profile.Root>
      <Profile.Banner src={data.banner}>
        <Profile.Avatar src={data.avatar} />
        <Text color="primary" text={data.username} variant="elevated" weight="normal" size="xl" />
      </Profile.Banner>
    </Profile.Root>
  );
};
