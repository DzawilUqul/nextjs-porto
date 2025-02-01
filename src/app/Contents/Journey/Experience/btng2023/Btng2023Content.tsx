import { CardProps, CardType, Content } from "@/types/ContentTypes";

const cards : CardProps = {
  type: CardType.Experience,
  description: "As a Teaching Assistant in the Game Division for BTNG 2023 at DNCC, I had the opportunity to guide new students at Udinus in their first steps into game development. I taught them how to create a basic 3D Flappy Bird game, introducing fundamental concepts of Unity, game physics, and basic scripting. My role involved not only explaining technical aspects but also helping students troubleshoot issues and understand the logic behind game mechanics. This experience strengthened my teaching skills and deepened my passion for mentoring aspiring game developers.",
  duration: "",
  href: "Contents/Journey/Experience/btng2023",
  image: "/assets/journey/experience/btng2023-1.webp",
  program: "Dian Nuswantoro Computer Club (DNCC)",
  title: "Teaching Assistant BTNG 2023 - Game Division",
}

const Btng2023Content: Content = {
  cards: cards,

  header: {
    title: cards.title,
    description: cards.description,
    author: "Dzawil Uqul",
    publishedDate: "01 February 2025",
    image: cards.image,
    width: 800,
    height: 550,
  },
  footer: {
    text: "",
    images: [
      "/assets/journey/experience/btng2023-1.webp",
      "/assets/journey/experience/btng2023-2.webp",
    ],
  },
};

export default Btng2023Content;