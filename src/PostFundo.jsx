export default function PostFundo({ likeImg, likeText1, likeText2 }) {
  return (
    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src={likeImg} />
        <div class="texto">
          Curtido por <strong>{likeText1}</strong> e{" "}
          <strong>{likeText2}</strong>
        </div>
      </div>
    </div>
  );
}
