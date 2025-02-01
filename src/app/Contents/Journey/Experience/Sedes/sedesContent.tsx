import { CardProps, CardType, Content } from "@/types/ContentTypes";

const cards : CardProps = {
  type: CardType.Experience,
  description: "I had the opportunity to be a Teaching Assistant at Sedes Sapientiae High School, where I assisted my lecturer in teaching high school students about AI and data science. As part of the learning process, we worked on a project focused on diabetes prediction, applying machine learning techniques to analyze health data. To further share our insights and inspire more students, I presented our project at Bengkel Koding in Udinus. This experience allowed me to contribute to AI education at an early stage while refining my ability to explain complex concepts in a simple and engaging way.",
  duration: "10 December 2024 - 11 December 2024",
  href: "Contents/Journey/Experience/Sedes",
  image: "/assets/journey/experience/sedes1.webp",
  program: "Sedes Sapientiae High School",
  title: "Teaching Assistant at Sedes Sapientiae High School (SMA SEDES)",
}

const sedesContent: Content = {
  cards: cards,

  header: {
    title: cards.title,
    description: cards.description,
    author: "Dzawil Uqul",
    publishedDate: cards.duration,
    image: cards.image,
    width: 800,
    height: 550,
  },
  footer: {
    text: "",
    images: [
      "/assets/journey/experience/sedes1.webp",
      "/assets/journey/experience/sedes2.webp",
      "/assets/journey/experience/sedes3.jpeg",
    ],
  },
};

export default sedesContent;