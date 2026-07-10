"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { appName, gitConfig } from "@/lib/shared";
import { cn } from "@/lib/cn";

const githubUrl = `https://github.com/${gitConfig.user}`;

const footerLinks = {
  documentation: [
    { label: "Overview", href: "/docs" },
    { label: "Installation", href: "/docs/installation" },
    { label: "Development", href: "/docs/development" },
  ],
  community: [
    { label: "Support", href: "/docs/support" },
    { label: "GitHub", href: githubUrl, external: true },
    {
      label: "Latest Release",
      href: "https://github.com/fxManagerProject/fxManager/releases",
      external: true,
    },
  ],
} as const;

export function SiteFooter() {
  const pathname = usePathname();
  const isDocs = pathname.startsWith("/docs");
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto w-full shrink-0">
      {!isDocs && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-24 bg-gradient-to-t from-fd-background to-transparent"
        />
      )}
      <div
        className={cn(
          "relative z-10 border-t border-fd-border",
          isDocs && "bg-fd-card",
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-12 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <Link
                href="/"
                className="inline-flex items-center"
                aria-label={`${appName} home`}
              >
                <Image
                  src="/fxmanager-dark-wide.svg"
                  alt={`${appName} Logo`}
                  width={256}
                  height={56}
                  className="max-h-8 w-fit"
                />
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-fd-muted-foreground">
                The webpanel for running ambitious FiveM and RedM servers.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10 sm:gap-16">
              <div>
                <h2 className="text-sm font-medium text-fd-foreground">
                  Documentation
                </h2>
                <ul className="mt-4 space-y-3">
                  {footerLinks.documentation.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-sm font-medium text-fd-foreground">
                  Community
                </h2>
                <ul className="mt-4 space-y-3">
                  {footerLinks.community.map((link) => (
                    <li key={link.href}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-foreground"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-foreground"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-sm text-fd-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} {appName}. All rights reserved.</p>
            <p className="text-xs">
              Supporting{" "}
              <span className="text-orange-500">FiveM</span> and{" "}
              <span className="text-red-500">RedM</span> servers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
