/** @format */

import { cookies } from "next/headers";
import CustomLink from "../CustomLink/CustomLink";

export default async function Header() {
  const cookieStore = await cookies();
  const username = cookieStore.get("username")?.value;

  console.log(username);

  return (
    <header className="bg-main-light flex items-center justify-center gap-3 p-4">
      <nav className="flex items-center justify-center gap-3">
        <CustomLink href="/" label="Home" />
        <CustomLink href={`/user/rudney`} label="Meu perfil" />
        <CustomLink href="/medias" label="medias" />
      </nav>
    </header>
  );
}
