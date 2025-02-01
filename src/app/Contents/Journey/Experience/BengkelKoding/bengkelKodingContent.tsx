import { CardProps, CardType, Content } from "@/types/ContentTypes";

const cards : CardProps = {
  type: CardType.Experience,
  description: "In my role as a Research Assistant at Bengkel Koding, a flagship program of the Informatics Engineering S1 program at Universitas Dian Nuswantoro, I contributed to developing a facial recognition-based attendance model combined with duration tracking using computer vision technology on the Jetson Nano. The system was designed not only to identify employee attendance at check-in but also to track their presence continuously during working hours. Additionally, I played a key role in the creation of a research proposal titled 'Implementing Deep Learning for Real-Time Presence Recognition and Detection in the Workplace' alongside a lecturer. This proposal suggests leveraging deep learning algorithms to improve the accuracy, security, and efficiency of attendance management in the workplace. Bengkel Koding also offers a platform for LMS-based learning, assisting students in preparing for LSP certification exams and developing technical and non-technical skills, including programming and teamwork. I had the opportunity to contribute to the development of learning materials and assist students in understanding complex concepts in data science and machine learning. I also supported students in their learning journey by providing guidance on assignments, clarifying complex topics, and giving feedback to help them improve their understanding. Through this program, I was able to contribute to both technological advancements and research in the field of computer vision and deep learning.",
  duration: "17 September 2024 - Present",
  href: "Contents/Journey/Experience/BengkelKoding",
  image: "/assets/journey/experience/bengkod1.jpeg",
  program: "Internship at Bengkel Koding",
  title: "Research Assistant at Bengkel Koding",
}

const bengkelCoding: Content = {
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
      "/assets/journey/experience/bengkod1.jpeg",
      "/assets/journey/experience/bengkod2.jpeg",
      "/assets/journey/experience/bengkod3.jpeg",
    ],
  },
};

export default bengkelCoding;