import { CardProps, CardType, Content } from "@/types/ContentTypes";

const cards : CardProps = {
  type: CardType.Skills,
  description: "In this course, I learned the basics of cloud computing and how to use the AWS Cloud Academy platform. I gained hands-on experience with AWS services, including EC2, S3, and RDS, and learned how to deploy and manage cloud infrastructure using the AWS Management Console.",
  duration: "",
  href: "/Contents/Journey/Skill/Aws",
  image: "/assets/certificates/aws.png",
  program: "AWS Cloud Academy",
  title: "AWS Cloud Academy Cloud Foundation",
}

const aws: Content = {
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

export default aws;