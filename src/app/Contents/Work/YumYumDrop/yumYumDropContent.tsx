import { WorkItemCategoryProps, WorkItemProps, WorksContentProps } from "@/types/ContentTypes";

const cards: WorkItemProps = {
  href: "Contents/Work/YumYumDrop",
  category: WorkItemCategoryProps.Game,
  img: "/assets/work/yumYumDrop/cat1.webp",
  title: "Yum Yum Drop",
}

const YumYumDropContent : WorksContentProps = {
  cards: cards,
  header: {
    title: cards.title,
    description: "This game is built to teach the basics of 2D game development in Dian Nuswantoro Computer Club (DNCC). Full tutorial on how to make this game is available on Youtube.",
    author: "Dzawil Uqul",
    publishedDate: "30-07-2024",
    image: cards.img,
    width: 800,
    height: 550,
    github: "https://github.com/DzawilUqul/Spesyeep/tree/cobabranch",
    youtube: "https://www.youtube.com/watch?v=FaZu6IGa3Cs",
  },
  footer: {
    // generate closing footer text
    text: "",
    images: [
      "/assets/work/yumYumDrop/cat2.webp",
      "/assets/work/yumYumDrop/cat1.webp",
    ],
  },
}

export default YumYumDropContent;