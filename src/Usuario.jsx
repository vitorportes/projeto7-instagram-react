export default function Usuario({ src, nome, apelido }) {
  return (
    <div class="usuario">
      <img src={src} />
      <div class="texto">
        <strong>{nome}</strong>
        {apelido}
      </div>
    </div>
  );
}
