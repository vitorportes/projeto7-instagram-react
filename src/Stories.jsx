import Story from "./Story";

export default function Stories() {
  const stories = [
    { src: "assets/img/9gag.svg", name: "9gag" },
    { src: "assets/img/meowed.svg", name: "meowed" },
    { src: "assets/img/barked.svg", name: "barked" },
    {
      src: "assets/img/nathanwpylestrangeplanet.svg",
      name: "nathanwpylestrangeplanet",
    },
    { src: "assets/img/wawawicomics.svg", name: "wawawicomics" },
    { src: "assets/img/respondeai.svg", name: "respondeai" },
    { src: "assets/img/filomoderna.svg", name: "filomoderna" },
    { src: "assets/img/memeriagourmet.svg", name: "memeriagourmet" },
  ];
  return (
    <div class="stories">
      {stories.map((story) => (
        <Story src={story.src} name={story.name} />
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
