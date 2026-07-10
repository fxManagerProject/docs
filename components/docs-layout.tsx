"use client";

import type * as PageTree from "fumadocs-core/page-tree";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { CSSProperties, ReactNode } from "react";
import { DocsMobileSidebarTrigger } from "@/components/docs-mobile-sidebar-trigger";
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
      containerProps={{
        className: "site-docs-layout",
        style: {
          minHeight: "calc(100dvh - var(--site-header-height))",
          "--fd-docs-height": "100dvh",
          "--fd-docs-row-1": "var(--site-header-height)",
          "--fd-docs-row-2":
            "calc(var(--site-header-height) + var(--fd-header-height))",
          "--fd-docs-row-3":
            "calc(var(--fd-docs-row-2) + var(--fd-toc-popover-height))",
        } as CSSProperties,
      }}
      slots={{
        navTitle: NullNavTitle,
      }}
    >
      <DocsMobileSidebarTrigger />
      {children}
    </DocsLayout>
  );
}
