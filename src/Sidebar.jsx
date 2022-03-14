import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";
import Links from "./Links";
import Copyright from "./Copyright";

export default function Sidebar() {
  const usuarios = [
    {
      src: "assets/img/catanacomics.svg",
      nome: "catanacomics",
      apelido: "Catana",
    },
  ];
  return (
    <div class="sidebar">
      {usuarios.map((usuario) => (
        <Usuario
          src={usuario.src}
          nome={usuario.nome}
          apelido={usuario.apelido}
        />
      ))}
      <Sugestoes />

      <Links />
      <Copyright />
    </div>
  );
}
