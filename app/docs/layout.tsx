import { source } from "@/lib/source";
import { DocsLayoutClient } from "@/components/docs-layout";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayoutClient tree={source.getPageTree()}>
      {children}
    </DocsLayoutClient>
  );
}
