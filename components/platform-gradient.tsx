"use client";

import { cn } from "@/lib/cn";
import { platforms } from "@/lib/platforms";

export function PlatformGradient({
  index,
  isAnimating,
}: {
  index: number;
  isAnimating: boolean;
}) {
  const nextIndex = (index + 1) % platforms.length;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-0 h-screen w-full"
    >
      {platforms.map((platform, i) => {
        const isCurrent = i === index;
        const isNext = i === nextIndex;
        const isVisible =
          (!isAnimating && isCurrent) || (isAnimating && isNext);
        const isOnTop = isAnimating ? isNext : isCurrent;

        return (
          <div
            key={platform.label}
            className={cn(
              "absolute inset-0 transition-opacity duration-500 ease-in-out",
              isOnTop ? "z-10" : "z-0",
              isVisible ? "opacity-100" : "opacity-0",
            )}
            style={{ background: platform.gradient }}
          />
        );
      })}
    </div>
  );
}
