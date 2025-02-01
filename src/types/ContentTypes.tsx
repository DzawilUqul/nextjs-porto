// src/types/contentTypes.ts

export interface Header {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  github?: string;
  youtube?: string;
  relatedLink?: string;
  image: string;
  width: number;
  height: number;
}

export interface ListItem {
  title: string;
  description: string;
  images?: string[];
}

export interface HeaderTwo {
  title: string;
}

export interface Footer {
  text: string;
  images?: string[];
}

export enum CardType {
  Skills = "skills",
  Education = "education",
  Experience = "experience",
}

export enum WorkItemCategoryProps {
  All = "All",
  Game = "Game Dev",
  DataScience = "Data Science",
  ComputerVision = "Computer Vision",
  WebDeveloper = "Web Dev",
}

export interface CardProps {
  type: CardType;
  title: string;
  program: string;
  duration: string;
  description: string;
  image: string;
  href: string;
}

export interface WorkItemProps {
  href: string;
  category: WorkItemCategoryProps;
  img: string;
  title: string;
}

export interface Content {
  header: Header;
  headerTwo?: HeaderTwo;
  ListItems?: ListItem[];
  footer?: Footer;
  cards: CardProps;
}

export interface WorksContentProps {
  header: Header;
  headerTwo?: HeaderTwo;
  ListItems?: ListItem[];
  footer?: Footer;
  cards: WorkItemProps;
}