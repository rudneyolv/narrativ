/** @format */

import CustomLink from "@/components/CustomLink/CustomLink";

export const ProfileHeader = () => {
  return (
    <div className="bg-black w-1/1 flex items-center justify-center p-4">
      <nav className="flex items-center flex-row justify-center gap-4">
        <CustomLink
          label="Minha lista"
          href={`/user/1/watchlist`}
          color="white"
          hoverColor="primary"
        />

        <CustomLink
          label="Favoritos"
          href={`/user/1/favorites`}
          color="white"
          hoverColor="primary"
        />
      </nav>
    </div>
  );
};
