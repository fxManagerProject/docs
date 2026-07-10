"use client";

import type * as PageTree from "fumadocs-core/page-tree";
import { usePathname, useRouter } from "next/navigation";
import { PageBreadcrumb } from "fumadocs-ui/layouts/docs/page";
import { useTreeContext } from "fumadocs-ui/contexts/tree";
import { useMemo } from "react";
import { cn } from "@/lib/cn";

type PageOption = {
  url: string;
  label: string;
  depth: number;
};

function flattenPageTree(
  nodes: PageTree.Node[],
  depth = 0,
  options: PageOption[] = [],
): PageOption[] {
  for (const node of nodes) {
    if (node.type === "separator") continue;

    if (node.type === "folder") {
      if (node.index && !node.index.external) {
        options.push({ url: node.index.url, label: node.name, depth });
      }
      flattenPageTree(node.children, depth + 1, options);
      continue;
    }

    if (node.type === "page" && !node.external) {
      options.push({ url: node.url, label: node.name, depth });
    }
  }

  return options;
}

function getActivePageUrl(pages: PageOption[], pathname: string) {
  const exact = pages.find((page) => page.url === pathname);
  if (exact) return exact.url;

  const nested = pages
    .filter(
      (page) =>
        pathname.startsWith(`${page.url}/`) ||
        (page.url !== "/docs" && pathname.startsWith(page.url)),
    )
    .sort((a, b) => b.url.length - a.url.length)[0];

  return nested?.url ?? pages[0]?.url ?? "";
}

export function DocsMobilePageNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { root } = useTreeContext();

  const pages = useMemo(() => flattenPageTree(root.children), [root]);
  const activeUrl = getActivePageUrl(pages, pathname);

  if (pages.length === 0) return null;

  return (
    <div className="flex flex-col gap-3 border-b border-fd-border pb-4 md:hidden">
      <PageBreadcrumb includeRoot className="min-w-0" />

      <div>
        <label htmlFor="docs-page-picker" className="sr-only">
          Jump to page
        </label>
        <select
          id="docs-page-picker"
          value={activeUrl}
          onChange={(event) => {
            const url = event.target.value;
            if (url && url !== pathname) router.push(url);
          }}
          className={cn(
            "h-10 w-full rounded-lg border border-fd-border bg-fd-card px-3 text-sm text-fd-foreground",
          )}
        >
          {pages.map((page) => (
            <option key={page.url} value={page.url}>
              {`${"\u00A0".repeat(page.depth * 2)}${page.label}`}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
