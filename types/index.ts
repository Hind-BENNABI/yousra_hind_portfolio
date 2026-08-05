export interface Project {
  slug: string;
  image: string;
  gallery?: string[];
  title: string;
  shortTitle: string;
  description: string;
  longDescription?: string;
  features?: string[];
  stack: string[];
  featured: boolean;
  year?: string;
  links?: {
    github?: string;
    live?: string;
  };
}

export interface Skill {
  name: string;
  category: "language" | "framework" | "tool" | "ml" | "design";
  dotColor: "blue" | "pink" | "yellow" | "green";
}

export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "education" | "experience";
}

export interface CreativeCategory {
  emoji: string;
  title: string;
  description: string;
  bg: "pink" | "blue" | "green" | "yellow";

  images: {
    src: string;
    alt: string;
  }[];
}