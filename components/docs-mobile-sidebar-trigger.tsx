"use client";

import { useDocsLayout } from "fumadocs-ui/layouts/docs";
import { SidebarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";

export const DOCS_SIDEBAR_TRIGGER_SLOT_ID = "docs-sidebar-trigger-slot";

export function DocsMobileSidebarTrigger() {
  const { slots } = useDocsLayout();
  const Trigger = slots.sidebar.trigger;
  const [slot, setSlot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setSlot(document.getElementById(DOCS_SIDEBAR_TRIGGER_SLOT_ID));
  }, []);

  if (!slot) return null;

  return createPortal(
    <Trigger
      className={cn(
        "inline-flex size-9 shrink-0 items-center justify-center rounded-md text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground md:hidden",
      )}
    >
      <SidebarIcon className="size-4" />
    </Trigger>,
    slot,
  );
}
