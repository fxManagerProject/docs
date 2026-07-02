import Link from "next/link";
import Image from "next/image";
import iconSvg from "./icon.svg";
import {
  ChartLine,
  ChevronRight,
  KeyRound,
  Settings,
  Shield,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] flex-1 px-4 py-12 select-none max-w-5xl mx-auto">
      <div className="text-center mb-16 animate-fade-in">
        <div className="mb-6">
          <Image
            src={iconSvg}
            alt="fxManager Logo"
            width={96}
            height={96}
            className="mx-auto drop-shadow-md"
            priority
          />
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-4 text-fd-foreground bg-clip-text">
          A new way to control your server
        </h1>

        <p className="max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
          <span className="font-semibold text-fd-foreground">fxManager</span> is
          a webpanel designed for FiveM and RedM server administrators.
          Providing tools for moderation, live performance tracking and
          configuration.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/docs"
            className="w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-md bg-fd-primary px-8 font-medium text-fd-primary-foreground shadow transition-colors hover:bg-fd-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fd-ring"
          >
            Get Started
            <ChevronRight className="ml-2" />
          </Link>
          {/*<Link
            href="/docs/features"
            className="w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fd-ring"
          >
            View Features
          </Link>*/}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
        <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm shadow-sm hover:border-fd-primary/50 transition-colors">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="text-2xl" />
            <h3 className="text-lg font-bold text-fd-foreground">
              Player Moderation
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Manage your community in real-time. Kick, ban, or warn players
            instantly from an intuitive web interface without opening the game.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm shadow-sm hover:border-fd-primary/50 transition-colors">
          <div className="flex items-center gap-3 mb-3">
            <ChartLine className="text-2xl" />
            <h3 className="text-lg font-bold text-fd-foreground">
              Performance Tracking
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Keep your server stable. Monitor server tick rate, threads, player
            counts and player drop reasons via real-time analytics dashboards.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm shadow-sm hover:border-fd-primary/50 transition-colors">
          <div className="flex items-center gap-3 mb-3">
            <Settings className="text-2xl" />
            <h3 className="text-lg font-bold text-fd-foreground">
              Server Configuration
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Modify server variables, restart resources, and update
            configurations on the fly.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm shadow-sm hover:border-fd-primary/50 transition-colors">
          <div className="flex items-center gap-3 mb-3">
            <KeyRound className="text-2xl" />
            <h3 className="text-lg font-bold text-fd-foreground">
              Permission-Based Roles
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Delegate control safely. Create granular staff roles with explicit
            permissions, ensuring moderators can only access the actions they
            need.
          </p>
        </div>
      </div>
    </div>
  );
}
