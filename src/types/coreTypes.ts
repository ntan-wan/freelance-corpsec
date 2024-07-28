import * as FAIcons from "@fortawesome/free-brands-svg-icons";
import * as HIcon from "@heroicons/react/20/solid";

export type FABrandIcons = keyof typeof FAIcons;
export type HeroIcons = keyof typeof HIcon;
export type Theme = "light" | "dark";

export interface IComponentVariant {
  base: string;
  default?: string;
  outlined?: string;
}
export interface IBlog {
  createdAt: string;
  img: string;
  title: string;
  description: string;
  tags: { label: string; category: string }[];
  author: { name: string; avatar: string };
}

