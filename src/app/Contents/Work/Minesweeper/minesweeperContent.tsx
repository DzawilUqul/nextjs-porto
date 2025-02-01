import { WorkItemCategoryProps, WorkItemProps, WorksContentProps } from "@/types/ContentTypes";

const cards: WorkItemProps = {
  href: "Contents/Work/Minesweeper",
  category: WorkItemCategoryProps.Game,
  img: "/assets/work/minesweeper/minesweeper1.webp",
  title: "Minesweeper Clone",
}

const Minesweeper : WorksContentProps = {
  cards: cards,
  header: {
    title: cards.title,
    description: "I created Minesweeper Clone to learn how to create a game in Unity. I learn how to create a grid system, how to generate mines, how to reveal the grid, and how to flag the grid.",
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
      "/assets/work/minesweeper/minesweeper1.webp",
      "/assets/work/minesweeper/minesweeper2.webp",
    ],
  },
}

export default Minesweeper;