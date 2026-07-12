"use client";

import React, { useState } from "react";
import { Activity, History } from "lucide-react";
import Image from "next/image";
import perf_histogram from "./images/perf_histogram.webp";
import perf_charts from "./images/perf_charts.webp";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";

export default function PerformanceShowcase() {
  const [activeView, setActiveView] = useState<"live" | "history">("live");

  return (
    <div className="rounded-xl border border-border bg-card shadow-lg overflow-hidden flex flex-col">
      <div className="bg-muted/30 px-4 py-2.5 flex items-center justify-end">
        <div className="flex items-center gap-1 p-0.5 rounded-lg border border-border bg-background">
          <button
            onClick={() => setActiveView("live")}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors ${
              activeView === "live"
                ? "bg-[oklch(0.473_0.137_46.201)] text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Activity className="w-3 h-3" /> Live Threads
          </button>
          <button
            onClick={() => setActiveView("history")}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors ${
              activeView === "history"
                ? "bg-[oklch(0.473_0.137_46.201)] text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <History className="w-3 h-3" /> Time Series
          </button>
        </div>
      </div>

      <div className="relative bg-background aspect-video flex items-center justify-center p-4">
        <ImageZoom
          src={activeView === "live" ? perf_charts : perf_histogram}
          alt={
            activeView === "live"
              ? "Live Threads Performance"
              : "Historical Histogram"
          }
          className="w-full h-auto rounded shadow-sm cursor-zoom-in transition-all duration-300"
        />
      </div>
    </div>
  );
}
