"use client";

import { useEffect, useState } from "react";
import {
  PLATFORM_DURATION_MS,
  PLATFORM_INTERVAL_MS,
  platforms,
} from "@/lib/platforms";

export function useRotatingPlatform() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
    }, PLATFORM_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isAnimating) return;

    const timeout = setTimeout(() => {
      setIndex((current) => (current + 1) % platforms.length);
      setIsAnimating(false);
    }, PLATFORM_DURATION_MS);

    return () => clearTimeout(timeout);
  }, [isAnimating]);

  const nextIndex = (index + 1) % platforms.length;

  return {
    index,
    isAnimating,
    current: platforms[index],
    next: platforms[nextIndex],
  };
}
