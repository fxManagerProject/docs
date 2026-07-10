import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.className} dark`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <RootProvider
          theme={{
            forcedTheme: "dark",
            defaultTheme: "dark",
            enableSystem: false,
          }}
        >
          <SiteHeader />
          <div className="relative z-[1] flex min-h-0 flex-1 flex-col">
            {children}
          </div>
          <SiteFooter />
        </RootProvider>
      </body>
    </html>
  );
}
