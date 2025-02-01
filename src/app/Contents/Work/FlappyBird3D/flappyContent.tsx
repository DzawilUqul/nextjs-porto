import { WorkItemCategoryProps, WorkItemProps, WorksContentProps } from "@/types/ContentTypes";

const cards: WorkItemProps = {
  href: "Contents/Work/FlappyBird3D",
  category: WorkItemCategoryProps.Game,
  img: "/assets/work/flappy/3DFlappyBird.webp",
  title: "3D Flappy Bird",
}

const FlappyBird3D : WorksContentProps = {
  cards: cards,
  header: {
    title: cards.title,
    description: "This game is built to teach the basics of 3D game development in Dian Nuswantoro Computer Club (DNCC). To keep it simple, I used finish line as the goal instead of infinite pipes using object pooling. I used Unity Asset Store to get the 3D assets and the background music. I also used Unity’s built-in physics engine to make the bird fly and fall. I also created full tutorial on how to make this game on my Youtube channel.",
    author: "Dzawil Uqul",
    publishedDate: "30-07-2024",
    image: cards.img,
    width: 800,
    height: 550,
    github: "https://github.com/DzawilUqul/BTNG-3DFlappyBird",
    youtube: "https://www.youtube.com/watch?v=C1x61kK0vEM",
  },
  footer: {
    // generate closing footer text
    text: "",
    images: [
      "/assets/work/flappy/flappy1.webp",
      "/assets/work/flappy/3DFlappyBird.webp",
    ],
  },
}

export default FlappyBird3D;