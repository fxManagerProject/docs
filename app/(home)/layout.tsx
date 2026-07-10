import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "fxManager",
  description:
    "fxManager is an alternative webpanel to handle fxserver (fivem/redm) to txAdmin",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return <main className="relative flex flex-1 flex-col">{children}</main>;
}
