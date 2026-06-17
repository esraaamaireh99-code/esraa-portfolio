export type NavigationItem = {
  label: string;
  href: string;
};

export type Action = NavigationItem & {
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
};

export type Experience = {
  company: string;
  location: string;
  position: string;
  period: string;
  highlights: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  stack: string[];
  highlights: string[];
};
