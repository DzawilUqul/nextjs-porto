import { CardProps, CardType, Content } from "@/types/ContentTypes";

const cards : CardProps = {
  type: CardType.Skills,
  description: "In this course, I learned the basics of deep learning and how to use the NVIDIA Deep Learning Institute (DLI) platform. I gained hands-on experience with deep learning frameworks, including TensorFlow, PyTorch, and Keras, and learned how to build deep learning models for image classification, object detection, and natural language processing.",
  duration: "",
  href: "/Contents//Journey/Skill/NVidia",
  image: "/assets/certificates/nvidia.png",
  program: "NVidia Deep Learning Institute",
  title: "Getting Started with Deep Learning",
}

const nvidiaDeepLearning: Content = {
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
};

export default nvidiaDeepLearning;