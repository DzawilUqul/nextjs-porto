import { CardProps, CardType, Content } from "@/types/ContentTypes";

const cards : CardProps = {
  type: CardType.Experience,
  description: "In my contribution to the Game AI Code (GAC) project, I developed key gameplay mechanics, including player and enemy health systems, a battle timer to regulate combat duration, and a movement path mechanism. Additionally, I enhanced the game's visual experience by implementing VFX from the Unity Asset Store. Through this project, I deepened my understanding of game AI, system design, and real-time effects integration in Unity.",
  duration: "",
  href: "Contents/Journey/Experience/gac",
  image: "/assets/journey/experience/gac1.webp",
  program: "Internship at Game AI Code (GAC)",
  title: "GAC Mech AI",
}

const gac: Content = {
  cards: cards,

  header: {
    title: cards.title,
    description: cards.description,
    author: "Dzawil Uqul",
    publishedDate: "01 February 2025",
    image: cards.image,
    width: 800,
    height: 550,
    github: "https://github.com/gac-research-club",
    relatedLink: "https://gaclab.com/",
  },
  footer: {
    text: "",
    images: [
      "/assets/journey/experience/gac1.webp",
      "/assets/journey/experience/gac2.webp",
      "/assets/journey/experience/gac3.webp",
    ],
  },
};

export default gac;