export const platforms = [
  {
    label: "FiveM",
    className: "text-orange-500",
    image: "/assets/images/hero/fivem.webp",
    imageAlt: "FiveM server illustration",
    gradient:
      "radial-gradient(100% 50% at 50% 0%, rgba(249, 115, 22, 0.14) 0, rgba(249, 115, 22, 0) 50%, rgba(249, 115, 22, 0) 100%)",
  },
] as const;

export type Platform = (typeof platforms)[number];

export const PLATFORM_INTERVAL_MS = 3000;
export const PLATFORM_DURATION_MS = 500;
