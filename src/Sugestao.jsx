import SugestaoUser from "./SugestaoUser";

export default function Sugestao({ src, nome, razao }) {
  return (
    <div class="sugestao">
      <SugestaoUser src={src} nome={nome} razao={razao} />

      <div class="seguir">Seguir</div>
    </div>
  );
}
