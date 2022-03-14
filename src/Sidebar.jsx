import Copyright from "./Copyright";
import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";
import Links from "./Links";

export default function Sidebar() {
  return (
    <div class="sidebar">
      <Usuario />
      <Sugestoes />
      <Links />
      <Copyright />
    </div>
  );
}
