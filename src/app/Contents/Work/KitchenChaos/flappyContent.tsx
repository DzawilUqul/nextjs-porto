import { WorkItemCategoryProps, WorkItemProps, WorksContentProps } from "@/types/ContentTypes";

const cards: WorkItemProps = {
  href: "Contents/Work/KitchenChaos",
  category: WorkItemCategoryProps.Game,
  img: "/assets/work/kitchenChaos/kitchen2.webp",
  title: "Tutorial: Kitchen Chaos",
}

const KitchenChaos : WorksContentProps = {
  cards: cards,
  header: {
    title: cards.title,
    description: "I made this game from CodeMonkey Youtube channel tutorial. I learn how to make a 3D Top Down game where you play as a chef who has to cook and serve food to customers. I also learn how make my code cleaner, more readable, and still efficient. I learnt how to implement scriptable objects, events, and delegates. I also learn how to use Unity’s built-in physics engine and animation to make the chef move and rotate.",
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
      "/assets/work/kitchenChaos/kitchen1.webp",
      "/assets/work/kitchenChaos/KitchenChaos.webp",
    ],
  },
}

export default KitchenChaos;