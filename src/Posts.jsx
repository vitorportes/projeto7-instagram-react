import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      userImg: "assets/img/meowed.svg",
      userName: "meowed",
      contentImg: "assets/img/gato-telefone.svg",
      likeImg: "assets/img/respondeai.svg",
      likeText1: "respondeai",
      likeText2: "outras 101.523 pessoas",
    },
    {
      userImg: "assets/img/barked.svg",
      userName: "barked",
      contentImg: "assets/img/dog.svg",
      likeImg: "assets/img/adorable_animals.svg",
      likeText1: "adorable_animals",
      likeText2: "outras 101.523 pessoas",
    },
  ];
  return (
    <div class="posts">
      {posts.map((post) => (
        <Post
          userImg={post.userImg}
          userName={post.userName}
          contentImg={post.contentImg}
          likeImg={post.likeImg}
          likeText1={post.likeText1}
          likeText2={post.likeText2}
        />
      ))}
    </div>
  );
}
