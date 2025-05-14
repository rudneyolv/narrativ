/** @format */

import CustomLink from "@/components/CustomLink/CustomLink";

interface ProfileHeaderProps {
  username: string;
}

export const ProfileHeader = ({ username }: ProfileHeaderProps) => {
  return (
    <div className="bg-neutral w-1/1 flex items-center justify-center p-4 shadow-md">
      <nav className="flex items-center flex-row justify-center gap-4">
        <CustomLink
          label="Home"
          href={`/user/${username}`}
          color="foreground"
          hoverColor="primary"
        />

        <CustomLink
          label="Minha lista"
          href={`/user/${username}/watchlist`}
          color="foreground"
          hoverColor="primary"
        />

        <CustomLink
          label="Favoritos"
          href={`/user/${username}/favorites`}
          color="foreground"
          hoverColor="primary"
        />
      </nav>
    </div>
  );
};
