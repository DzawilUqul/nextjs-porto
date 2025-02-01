import { WorkItemCategoryProps, WorkItemProps, WorksContentProps } from "@/types/ContentTypes";

const cards: WorkItemProps = {
  href: "Contents/Work/AStar",
  category: WorkItemCategoryProps.Game,
  img: "/assets/work/astar/astar1.webp",
  title: "A* Visualizer",
}

const AStar : WorksContentProps = {
  cards: cards,
  header: {
    title: cards.title,
    description: "I created A* Visualizer to visualize the A* pathfinding algorithm in Unity. I learn how to implement the A* algorithm in C#, how to create a grid system, and how to visualize the pathfinding process. You can also draw the obstacle by clicking on available grid and see how the Algorithm solve it.",
    author: "Dzawil Uqul",
    publishedDate: "30-07-2024",
    image: cards.img,
    width: 800,
    height: 550,
  },
  footer: {
    // generate closing footer text
    text: "",
    images: [
      "/assets/work/astar/astar1.webp",
      "/assets/work/astar/astar2.webp",
    ],
  },
}

export default AStar;