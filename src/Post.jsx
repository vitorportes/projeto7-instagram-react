import PostTopo from "./PostTopo";
import PostConteudo from "./PostConteudo";
import PostFundo from "./PostFundo";

export default function Post({
  userImg,
  userName,
  contentImg,
  likeImg,
  likeText1,
  likeText2,
}) {
  return (
    <div class="post">
      <PostTopo userImg={userImg} userName={userName} />
      <PostConteudo contentImg={contentImg} />
      <PostFundo
        likeImg={likeImg}
        likeText1={likeText1}
        likeText2={likeText2}
      />
    </div>
  );
}
