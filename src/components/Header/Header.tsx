/** @format */

import { cookies } from "next/headers";
import CustomLink from "../CustomLink/CustomLink";

export default async function Header() {
  const cookieStore = await cookies();
  const username = cookieStore.get("username")?.value;

  return (
    <header className="w-full bg-transparent-black fixed top-0 z-10 gap-3 p-4 transition-colors duration-500 hover:bg-glass-black">
      <nav className="flex items-center justify-center gap-3">
        <CustomLink href="/" label="Home" />
        <CustomLink href={`/user/${username}`} label="Meu perfil" />
        <CustomLink href="/medias" label="medias" />
      </nav>
    </header>
  );
}
