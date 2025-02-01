import { WorkItemCategoryProps, WorkItemProps, WorksContentProps } from "@/types/ContentTypes";

const cards: WorkItemProps = {
  href: "Contents/Work/VerdantSiege",
  category: WorkItemCategoryProps.Game,
  img: "/assets/work/verdantSiege/verdant1.webp",
  title: "Game Seed : Verdant Siege",
}

const VerdantSiegeContent : WorksContentProps = {
  cards: cards,
  header: {
    title: cards.title,
    description: "This game is a collaborative project with Excatz Studio, created for participation in Game Seed 2024, the largest game competition in Indonesia. I served as the lead programmer on this project, developing several core features, including enemy pathfinding, enemy wave systems, player movement, camera control, seed-growing mechanics, shooting mechanics, enemy attacks, and more.",
    author: "Dzawil Uqul",
    publishedDate: "30-07-2024",
    image: "/assets/work/verdantSiege/verdant1.webp",
    width: 800,
    height: 550,
    github: "https://github.com/ulungsubekti/Project-Verdant/tree/main",
    youtube: "https://www.youtube.com/embed/83v0TeyKe7s?si=P1fzngsm7Pf7BKR1",
    relatedLink: "https://ulungsubekti.itch.io/verdant-siege",
  },
  headerTwo: {
    title: "Play Now !!!",
  },
  ListItems: [
    {
      title: "Free at Itch.io",
      description: "You can play Verdant Siege for free on Itch.io",
      images: ["/assets/work/verdantSiege/verdant2.webp", "/assets/work/verdantSiege/verdant3.webp"],
    }
  ],
  footer: {
    // generate closing footer text
    text: "Thank you for playing our game, we hope you enjoy it. Please give us feedback so we can improve our game in the future.",
    // images: [
    //   "/assets/work/verdantSiege/verdant1.webp",
    //   "/assets/work/verdantSiege/verdant2.webp",
    // ],
  },
}

export default VerdantSiegeContent;