export default function Story({ src, name }) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={src} />
      </div>
      <div class="usuario">{name}</div>
    </div>
  );
}
