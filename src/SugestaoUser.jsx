export default function SugestaoUser({ src, nome, razao }) {
  return (
    <div class="usuario">
      <img src={src} />
      <div class="texto">
        <div class="nome">{nome}</div>
        <div class="razao">{razao}</div>
      </div>
    </div>
  );
}
