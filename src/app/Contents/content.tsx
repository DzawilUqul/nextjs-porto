import { WorkItemCategoryProps, WorksContentProps } from "@/types/ContentTypes"
import ugmContent from "./Journey/Education/ugm/ugmContent"
import Btng2023Content from "./Journey/Experience/btng2023/Btng2023Content"
import nvidiaDeepLearning from "./Journey/Skill/NVidia/nvidiaDeepLearning"
import VerdantSiegeContent from "./Work/VerdantSiege/verdantSiegeContent"
import YumYumDropContent from "./Work/YumYumDrop/yumYumDropContent"
import FlappyBird3D from "./Work/FlappyBird3D/flappyContent"
import Minesweeper from "./Work/Minesweeper/minesweeperContent"
import AStar from "./Work/AStar/minesweeperContent"
import KitchenChaos from "./Work/KitchenChaos/flappyContent"
import Btng2024Content from "./Journey/Experience/btng2024/Btng2024Content"
import gac from "./Journey/Experience/gac/gacContent"
import sedesContent from "./Journey/Experience/Sedes/sedesContent"
import bengkelCoding from "./Journey/Experience/BengkelKoding/bengkelKodingContent"
import bk from "./Journey/Experience/BimbinganKarir/bimbinganKarir"
import aws from "./Journey/Skill/Aws/aws"

export const content = {
  // Journey
    // Education
    ugm: ugmContent,
    
    // Experience
    bk: bk,
    bengkel: bengkelCoding,
    sedes: sedesContent,
    btng2024: Btng2024Content,
    btng2023: Btng2023Content,
    gac: gac,

    // Skills
    nvidia: nvidiaDeepLearning,
    aws: aws,
  // Works
}

const allWorksContentTab: WorksContentProps = {
  header: {
    title: "All Works",
    description:
      "Explore my projects and experiences in game development, data science, and more.",
    author: "Dzawil Uqul",
    publishedDate: "30-07-2024",
    image: "/assets/works/works.webp",
    width: 800,
    height: 550,
  },
  cards: {
    href: "Contents/Works",
    category: WorkItemCategoryProps.All,
    img: "/assets/works/works.webp",
    title: "All Works",
  },
  footer: {
    text: "Thank you for exploring my works. I hope you enjoy them!",
  },
}

export const worksContent = {
  allWorksContentTab: allWorksContentTab,
  verdantSiege: VerdantSiegeContent,
  yumYumDrop: YumYumDropContent,
  flappyBird3D: FlappyBird3D,
  mine: Minesweeper,
  astar: AStar,
  kitchen: KitchenChaos,
}
