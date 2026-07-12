import React from "react";
import {
  LayoutDashboard,
  Users,
  Terminal,
  Layers,
  Activity,
  UserCheck,
  Settings,
  Shield,
  Sliders,
  Play,
  Square,
  RefreshCw,
  ExternalLink,
  ArrowUpCircle,
  MonitorCog,
  Sidebar,
  PanelLeft,
} from "lucide-react";
import SidebarDemo from "./components/sidebar";
import PerformanceShowcase from "./components/perf_showcase";

export default function FeaturesPage() {
  const primaryModules = [
    {
      icon: <LayoutDashboard className="w-5 h-5 text-muted-foreground" />,
      title: "Project Dashboard",
      description:
        "Overview of real-time server status, session uptimes, concurrent player and linked staff counts, and historical player trends over the active session lifecycle.",
    },
    {
      icon: <Users className="w-5 h-5 text-muted-foreground" />,
      title: "Online Playerlist",
      description:
        "Live monitor showcasing connected player health indicators, real-time pings, and direct administrative fast-actions to warn, kick, ban, or log notes.",
    },
    {
      icon: <Terminal className="w-5 h-5 text-muted-foreground" />,
      title: "Live Console",
      description:
        "Interactive terminal view mirror for standard FXServer standard outputs. Includes dedicated input mechanisms to pipe raw commands back to the server process.",
    },
    {
      icon: <Activity className="w-5 h-5 text-muted-foreground" />,
      title: "Performance Analytics",
      description:
        "Dedicated telemetry tracks main script threads (svMain, svSync, svNetwork), collects session disconnect context strings, and archives metrics across historic session cycles.",
    },
    {
      icon: <UserCheck className="w-5 h-5 text-muted-foreground" />,
      title: "Deep Player Search & Profiles",
      description:
        "Query full player index archives by unique hardware or community identifiers. Drill down into session history, lifetime playtimes, active logs, and multi-field identifier copying.",
    },
    {
      icon: <Layers className="w-5 h-5 text-muted-foreground" />,
      title: "Resource & Config Tooling",
      description:
        "Dynamically start or halt individual native scripts. Inspect, modify, and update local server configuration chains (.cfg) safely over a standardized browser-based layout code view.",
    },
    {
      icon: <Shield className="w-5 h-5 text-muted-foreground" />,
      title: "Access & Admin Controls",
      description:
        "Provision granular staff profiles with distinct role permission groups, link admin panel credentials to active game profiles, and trace admin actions via structural audit histories.",
    },
    {
      icon: <Settings className="w-5 h-5 text-muted-foreground" />,
      title: "Flexible Allow-lists & Restarts",
      description:
        "Toggle flexible access rules (Discord guild checks, direct hardware identifiers, or admin restrictions) alongside clean server restart orchestrations.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] flex-1 px-4 py-12 select-none max-w-5xl mx-auto animate-fade-in">
      {/* Page Header */}
      <div className="text-center mb-16 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4 text-primary">
          Features & Capabilities
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          <span className="font-semibold text-primary">
            fx<span className="text-foreground">Manager</span>
          </span>{" "}
          is built entirely as an open-source hobby project. It functions as an
          alternative environment to txAdmin, focused on straightforward utility
          and clean layouts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left mb-16">
        {primaryModules.map((feat, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-fd-border bg-fd-card/50 backdrop-blur-sm shadow-sm
                       transition-all duration-300 ease-in-out
                       hover:border-fd-primary/50 hover:bg-fd-card hover:shadow-md hover:-translate-y-1
                       flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-3">
              {feat.icon}
              <h3 className="text-lg font-bold text-fd-foreground">
                {feat.title}
              </h3>
            </div>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              {feat.description}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full text-left border border-border bg-card/30 rounded-xl p-6 sm:p-8 backdrop-blur-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-muted-foreground">
              <PanelLeft className="w-4 h-4" /> Sidebar Actions
            </div>

            <SidebarDemo />
          </div>

          <div className="lg:col-span-8 w-full flex flex-col h-full space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-muted-foreground">
              <MonitorCog className="w-4 h-4" /> Performance Metrics
            </div>

            <PerformanceShowcase />

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
              <div>
                <h4 className="text-sm font-semibold text-foreground">Real-time Threading</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Monitor svMain, svSync, and svNetwork threads instantly to identify script bottlenecks before they affect player experience.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">Historical Context</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Compare current performance against session history to detect gradual degradation or resource leaks over long uptimes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
