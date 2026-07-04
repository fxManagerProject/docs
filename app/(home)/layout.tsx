import type { Metadata } from "next";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";

export const metadata: Metadata = {
  title: "fxManager",
  description:
    "fxManager is an alternative webpanel to handle fxserver (fivem/redm) to txAdmin",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return <HomeLayout {...baseOptions()}>{children}</HomeLayout>;
}
