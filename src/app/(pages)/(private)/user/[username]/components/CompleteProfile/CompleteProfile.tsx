/** @format */
import { Profile } from "@/components/Profile";
import Text from "@/components/Text/Text";
import { cookies } from "next/headers";

interface CompleteProfileProps {
  username: string;
}

export const CompleteProfile = async ({ username }: CompleteProfileProps) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  let data;

  try {
    const response = await fetch(`http://localhost:3100/api/users/${username}`, {
      headers: {
        accept: "application/json",
        Cookie: `token=${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao carregar perfil");
    }

    const json = await response.json();
    data = json.data;
    console.log(data);
  } catch (error) {
    console.log(error);
    data = {
      username: "Erro ao carregar perfil",
    };
  }

  return (
    <Profile.Root>
      <Profile.Banner src={data?.profile_banner_url}>
        <Profile.Avatar src={data?.profile_image_url} variant="elevated" />
        <Text text={data?.username} variant="elevated" weight="semibold" size="xl" />
      </Profile.Banner>
    </Profile.Root>
  );
};
