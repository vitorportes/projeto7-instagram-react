export default function PostTopo({ userImg, userName }) {
  return (
    <div class="topo">
      <div class="usuario">
        <img src={userImg} />
        {userName}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}
