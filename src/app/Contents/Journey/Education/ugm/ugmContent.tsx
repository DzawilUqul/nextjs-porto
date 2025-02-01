import { CardProps, CardType, Content } from "@/types/ContentTypes";

const cards: CardProps = {
  type: CardType.Education,
  title: "Student Exchange at Universitas Gadjah Mada (UGM)",
  program: "Student Mobility Program",
  duration: "12 February 2024 - 30 July 2024",
  description:
    "As part of the Student Mobility program, I had the privilege of joining Universitas Gadjah Mada (UGM), one of Indonesia’s most prestigious universities. During my exchange, I immersed myself in a multidisciplinary learning environment and worked on impactful projects that honed my technical skills and addressed real-world challenges.",
  image: "/assets/journey/education/ugm/ugm2.webp",
  href: "Contents/Journey/Education/ugm",
}

const ugmContent: Content = {
  cards: cards,

  header: {
    title: cards.title,
    description: cards.description,
    author: "Dzawil Uqul",
    publishedDate: "30-07-2024",
    image: cards.image,
    width: 800,
    height: 550,
  },
  headerTwo: {
    title: "Project Completed:",
  },
  
  ListItems: [
    {
      title: "Elderly Fall Detection System",
      description:
        "Developed a system using computer vision and machine learning to detect and alert caregivers of potential falls among the elderly, contributing to better healthcare monitoring.",
      images: ["/assets/journey/education/ugm/fallDetection1.png",
              "/assets/journey/education/ugm/fallDetection2.png",
              "/assets/journey/education/ugm/fallDetection3.png",
      ],
    },
    {
      title: "Drug E-Commerce Store",
      description:
        "Designed and implemented a web-based platform for pharmaceutical product purchases, ensuring user-friendly navigation, secure transactions, and reliable order management.",
      images: [
        "/assets/journey/education/ugm/wrpl1.png",
        "/assets/journey/education/ugm/wrpl2.png"
      ],
    },
    {
      title: "Cloud-Based Web Music Platform",
      description:
        "Created a music streaming application hosted on the cloud, enabling users to upload, share, and play music seamlessly. Integrated backend and frontend features for an engaging user experience.",
      images: [
        "/assets/journey/education/ugm/cloud1.png",
        "/assets/journey/education/ugm/cloud2.png"
      ],
    },
  ],

  footer: {
    text: "This exchange program was a transformative experience that allowed me to expand my knowledge, collaborate with talented peers, and apply my skills to meaningful projects.",
    images: [
      "/assets/journey/education/ugm1.webp",
      "/assets/journey/education/ugm3.webp",
    ],
  },
};

export default ugmContent;