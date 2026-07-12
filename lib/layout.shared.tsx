import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { appName, gitConfig } from "./shared";
import { BookText, HeartPlus, List } from "lucide-react";

export const navLinks = [
  {
    text: "Features",
    url: "/features",
    icon: <List />,
  },
  {
    text: "Support Us",
    url: "/support",
    icon: <HeartPlus />,
  },
  {
    text: "Documentation",
    url: "/docs",
    icon: <BookText />,
  },
];

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: appName,
    },
    links: navLinks,
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
