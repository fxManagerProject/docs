import {
  ChartLine,
  KeyRound,
  Settings,
  Shield,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  placeholderClass: string;
};

const features = [
  {
    title: "Player Moderation",
    description:
      "Manage your community in real-time. Kick, ban, or warn players instantly from an intuitive web interface without opening the game.",
    icon: Shield,
    image: "/assets/images/features/moderation.webp",
    imageAlt: "Player moderation dashboard",
    placeholderClass:
      "bg-[radial-gradient(ellipse_at_top_right,#1e3a5f_0%,#0f1419_70%)]",
  },
  {
    title: "Performance Tracking",
    description:
      "Monitor server tick rate, threads, player counts and player drop reasons via real-time analytics dashboards.",
    icon: ChartLine,
    image: "/assets/images/features/performance.webp",
    imageAlt: "Performance tracking analytics",
    placeholderClass:
      "bg-[radial-gradient(ellipse_at_top_left,#134e4a_0%,#0f1419_70%)]",
  },
  {
    title: "Server Configuration",
    description:
      "Modify server variables, restart resources, and update configurations on the fly.",
    icon: Settings,
    image: "/assets/images/features/configuration.webp",
    imageAlt: "Server configuration panel",
    placeholderClass:
      "bg-[radial-gradient(ellipse_at_bottom_left,#78350f_0%,#0f1419_70%)]",
  },
  {
    title: "Permission-Based Roles",
    description:
      "Create granular staff roles with explicit permissions, ensuring moderators can only access the actions they need.",
    icon: KeyRound,
    image: "/assets/images/features/roles.webp",
    imageAlt: "Permission-based roles management",
    placeholderClass:
      "bg-[radial-gradient(ellipse_at_bottom_right,#312e81_0%,#0f1419_70%)]",
  },
] satisfies Feature[];

function FeatureCard({
  feature,
  className,
}: {
  feature: Feature;
  className?: string;
}) {
  const Icon = feature.icon;

  return (
    <Link
      href="/docs/installation"
      aria-label={feature.imageAlt}
      className={cn(
        "group relative block min-h-[300px] cursor-pointer overflow-hidden rounded-2xl border border-fd-border/50 sm:min-h-[340px]",
        className,
      )}
    >
      <div
        className={cn("absolute inset-0", feature.placeholderClass)}
        aria-hidden
      />
      <div
        className="absolute inset-0 origin-center bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
        style={{ backgroundImage: `url('${feature.image}')` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-black/20"
        aria-hidden
      />
      <div className="relative z-10 flex min-h-[300px] flex-col justify-end p-6 sm:min-h-[340px] sm:p-8">
        <h3 className="text-lg font-semibold text-fd-foreground">
          {feature.title}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-fd-muted-foreground">
          {feature.description}
        </p>
      </div>
    </Link>
  );
}

export function Features() {
  return (
    <section className="px-6 pb-12 sm:px-10 lg:px-16">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <FeatureCard feature={features[0]} className="md:w-[60%]" />
          <FeatureCard feature={features[1]} className="md:w-[40%]" />
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <FeatureCard feature={features[2]} className="md:w-[40%]" />
          <FeatureCard feature={features[3]} className="md:w-[60%]" />
        </div>
      </div>
    </section>
  );
}
