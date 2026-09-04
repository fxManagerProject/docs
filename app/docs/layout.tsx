import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions, navLinks } from "@/lib/layout.shared";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "fxManager Docs",
  description:
    "Documentation to integrate, use and install fxManager",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function Layout({ children }: LayoutProps<"/docs">) {
  const filteredLinks = navLinks.filter((link) => link.url !== "/docs");

  return (
    <DocsLayout
      {...baseOptions()}
      tree={source.getPageTree()}
      links={filteredLinks}
    >
      {children}
    </DocsLayout>
  );
}
