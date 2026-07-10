"use client";

import type * as PageTree from "fumadocs-core/page-tree";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { CSSProperties, ReactNode } from "react";
import { baseOptions } from "@/lib/layout.shared";

function NullNavTitle() {
  return null;
}

interface DocsLayoutClientProps {
  tree: PageTree.Root;
  children: ReactNode;
}

export function DocsLayoutClient({ tree, children }: DocsLayoutClientProps) {
  const options = baseOptions();

  return (
    <DocsLayout
      tree={tree}
      {...options}
      nav={{ ...options.nav, enabled: true }}
      containerProps={{
        className: "site-docs-layout",
        style: {
          gridTemplate: `"sidebar main toc"
"sidebar main toc"
"sidebar main toc" 1fr / var(--fd-sidebar-col) minmax(0, 1fr) var(--fd-toc-width)`,
          minHeight: "calc(100dvh - var(--site-header-height))",
          "--fd-docs-height": "100dvh",
          "--fd-docs-row-1": "var(--site-header-height)",
        } as CSSProperties,
      }}
      slots={{
        navTitle: NullNavTitle,
      }}
    >
      {children}
    </DocsLayout>
  );
}
