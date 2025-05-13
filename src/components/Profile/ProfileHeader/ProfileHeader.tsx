/** @format */

import CustomLink from "@/components/CustomLink/CustomLink";

interface ProfileHeaderProps {
  username: string;
}

export const ProfileHeader = ({ username }: ProfileHeaderProps) => {
  return (
    <div className="bg-main-black w-1/1 flex items-center justify-center p-4">
      <nav className="flex items-center flex-row justify-center gap-4">
        <CustomLink label="Home" href={`/user/${username}`} color="frost" hoverColor="ice" />

        <CustomLink
          label="Minha lista"
          href={`/user/${username}/watchlist`}
          color="frost"
          hoverColor="ice"
        />

        <CustomLink
          label="Favoritos"
          href={`/user/${username}/favorites`}
          color="frost"
          hoverColor="ice"
        />
      </nav>
    </div>
  );
};
