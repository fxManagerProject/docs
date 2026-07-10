"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { platforms, type Platform } from "@/lib/platforms";

export function HeroSection({
  index,
  isAnimating,
  current,
  next,
}: {
  index: number;
  isAnimating: boolean;
  current: Platform;
  next: Platform;
}) {
  return (
    <section className="px-6 pt-20 pb-6 sm:px-10 lg:px-16 lg:pt-28">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl shrink-0">
          <h1 className="mb-5 max-w-4xl text-2xl tracking-tight text-fd-foreground transition-transform duration-300 ease-in-out sm:text-4xl">
            The webpanel for running <br /> ambitious{" "}
            <span className="relative inline-block h-[1.15em] min-w-[3.5ch] translate-y-[9px] overflow-hidden align-baseline">
              <span
                className={cn(
                  "block whitespace-nowrap",
                  current.className,
                  isAnimating
                    ? "translate-y-full transition-transform duration-500 ease-in-out"
                    : "translate-y-0",
                )}
              >
                {current.label}
              </span>
              <span
                className={cn(
                  "absolute inset-x-0 top-0 block whitespace-nowrap",
                  next.className,
                  isAnimating
                    ? "translate-y-0 transition-transform duration-500 ease-in-out"
                    : "-translate-y-full",
                )}
              >
                {next.label}
              </span>
            </span>{" "}
            servers.
          </h1>
          <p className="text-sm tracking-wide text-fd-muted-foreground">
            Providing tools for moderation, live performance tracking and
            configuration.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <Link
              href="/docs"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-fd-primary px-6 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90 sm:w-fit"
            >
              View Docs
              <ChevronRight className="size-4" />
            </Link>
            <Link
              href="/docs/support"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-fd-border px-6 text-sm font-medium text-fd-foreground transition-colors hover:bg-fd-muted sm:w-fit"
            >
              Support Us
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="relative hidden h-56 w-full max-w-sm shrink-0 lg:block lg:h-72 lg:max-w-md xl:h-80">
          {platforms.map((platform, i) => {
            const nextIndex = (index + 1) % platforms.length;
            const isCurrent = i === index;
            const isNext = i === nextIndex;
            const isVisible =
              (!isAnimating && isCurrent) || (isAnimating && isNext);
            const isOnTop = isAnimating ? isNext : isCurrent;

            return (
              <Image
                key={platform.label}
                src={platform.image}
                alt={platform.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 28rem, 0px"
                aria-hidden={!isVisible}
                className={cn(
                  "absolute inset-0 object-contain object-center transition-opacity duration-500 ease-in-out",
                  isOnTop ? "z-10" : "z-0",
                  isVisible ? "opacity-100" : "opacity-0",
                )}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
