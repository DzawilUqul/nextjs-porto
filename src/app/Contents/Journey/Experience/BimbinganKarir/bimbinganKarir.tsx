import { CardProps, CardType, Content } from "@/types/ContentTypes";

const cards : CardProps = {
  type: CardType.Experience,
  description: "As a Research Assistant at Bengkel Koding, I was entrusted with guiding students in the Data Science Workshop, a part of the Career Guidance course. My responsibilities included developing structured learning materials that covered fundamental to advanced Data Science concepts, incorporating case studies, and preparing students for the Lembaga Sertifikasi Profesi (LSP) Data Science certification exam.Beyond material development, I actively assisted students through in-person and online consultations, helping them with assignments, clarifying complex topics, and providing feedback to strengthen their understanding. Through this role, I was able to support students in their learning journey while refining my own expertise in Data Science education and mentorship.",
  duration: "18 November 2024 - 11 January 2025",
  href: "Contents/Journey/Experience/BimbinganKarir",
  image: "/assets/journey/experience/bk1.jpeg",
  program: "Research Assistant - Bengkel Koding (Data Science Workshop)",
  title: "Teaching Assistant in 'Bimbingan Karir Bengkel Koding'",
}

const bk: Content = {
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
  headerTwo: {
    title: "Work's Done:",
  },
  ListItems: [
    {
      title: "Developed structured learning materials for the Data Science Workshop",
      description: "The materials included case studies and exercises to help students apply theoretical knowledge to real-world scenarios.",
      images: [
        "/assets/journey/experience/kidney1.png",
        "/assets/journey/experience/kidney2.png",
      ],
    },
    {
      title: "Prepared students for the Lembaga Sertifikasi Profesi (LSP) Data Science certification exam.",
      description: "I guided students in understanding the exam's requirements and helped them practice with mock exams.",
      images: [
        "/assets/journey/experience/bk1.jpeg",
        "/assets/journey/experience/bk2.jpeg",
      ]
    },
    {
      title: "Assisted students through in-person and online consultations",
      description: "I provided guidance on assignments, clarified complex topics, and gave feedback to help students improve their understanding.",
      images: [
        "/assets/journey/experience/bk3.jpeg",
        "/assets/journey/experience/bk4.jpeg",
      ]
    },
  ],
};

export default bk;