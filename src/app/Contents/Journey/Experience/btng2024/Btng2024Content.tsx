import { CardProps, CardType, Content } from "@/types/ContentTypes";

const cards : CardProps = {
  type: CardType.Experience,
  description: "As a Teaching Assistant in the Game Division for BTNG 2024 at DNCC, I taught Object-Oriented Programming (OOP) in C# and Unity Essentials to new students at Udinus. My role involved introducing core programming concepts, helping students understand how to structure their code using OOP principles, and guiding them through Unity’s fundamental workflows. I also assisted students in troubleshooting their projects and applying best practices in game development. This experience allowed me to refine my teaching skills while supporting aspiring game developers in their learning journey.",
  duration: "",
  href: "Contents/Journey/Experience/btng2024",
  image: "/assets/journey/experience/btng2024-1.webp",
  program: "Dian Nuswantoro Computer Club (DNCC)",
  title: "Teaching Assistant BTNG 2024 - Game Division",
}

const Btng2024Content: Content = {
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
  },
};

export default Btng2024Content;