"use client";

import { Features } from "@/components/features";
import { HeroSection } from "@/components/hero-section";
import { PlatformGradient } from "@/components/platform-gradient";
import { useRotatingPlatform } from "@/hooks/use-rotating-platform";

export function HomePage() {
  const { index, isAnimating, current, next } = useRotatingPlatform();

  return (
    <>
      <PlatformGradient index={index} isAnimating={isAnimating} />
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col">
        <HeroSection
          index={index}
          isAnimating={isAnimating}
          current={current}
          next={next}
        />
        <Features />
      </div>
    </>
  );
}
