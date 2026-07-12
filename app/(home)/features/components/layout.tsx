import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "fxManager - Features",
  description: "fxManager's features list.",
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
  return <>{children}</>;
}
