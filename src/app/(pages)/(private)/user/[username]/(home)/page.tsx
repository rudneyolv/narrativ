/** @format */

interface HomeProps {
  params: { username: string };
}

export default async function Home({ params }: HomeProps) {
  // const { username } = await params;

  // Realizando o fetch da API com o username
  // const response = await fetch(`http://localhost:3100/api/users/${username}`, {
  //   headers: {
  //     accept: "application/json",
  //   },
  // });

  // Aqui você pode usar os dados do perfil como quiser

  return <div>Profile Home</div>;
}
