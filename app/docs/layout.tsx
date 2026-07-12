import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions, navLinks } from "@/lib/layout.shared";

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
