import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { appName, gitConfig } from "./shared";
import { BookText, List } from "lucide-react";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: appName,
    },links: [
      {
        text: 'Features',
        url: '/features',
        icon: <List />,
      },
      {
        text: 'Documentation',
        url: '/docs',
        icon: <BookText />,
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
