"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowUpCircle,
  ExternalLink,
  Play,
  RefreshCw,
  Square,
} from "lucide-react";

export default function Sidebar() {
  const [uptimeSeconds, setUptimeSeconds] = useState(0.9 * 3_600);

  /** 3 hours in seconds  */
  const RESTART_INTERVAL = 1 * 3_600;
  const [restartSeconds, setRestartSeconds] = useState(RESTART_INTERVAL);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptimeSeconds((prev) => prev + 1);
      setRestartSeconds((prev) => (prev <= 0 ? RESTART_INTERVAL : prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Helper function to format seconds into XXh YYm ZZs
  const formatTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    if (h > 0)
      return `${h.toString().padStart(2, "0")}h ${m.toString().padStart(2, "0")}m`;
    return `${m.toString().padStart(2, "0")}m ${s.toString().padStart(2, "0")}s`;
  };

  return (
    <div className="rounded-xl border border-border bg-card text-card-foreground shadow-sm">
      <div className="p-4 sm:p-5 space-y-4 text-sm">
        <div className="space-y-3">
          <div className="flex flex-row justify-between items-center">
            <p className="text-muted-foreground">Status</p>
            <span className="inline-flex items-center rounded-md border border-green-500/20 bg-green-500/10 px-2.5 py-0.5 text-xs font-semibold text-green-500 transition-colors">
              running
            </span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-muted-foreground">Uptime</p>
            <p className="font-medium text-foreground tabular-nums tracking-tight">
              {formatTime(uptimeSeconds)}
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-muted-foreground">Players:</p>
            <p className="font-medium text-foreground">124</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-muted-foreground">Next restart</p>
            <p className="tabular-nums font-medium text-foreground tracking-tight">
              in {formatTime(restartSeconds)}{" "}
              <span className="text-muted-foreground/70 font-normal tracking-normal">
                (auto)
              </span>
            </p>
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium text-muted-foreground">
            Actions
          </p>
          <div className="flex w-full flex-row gap-2">
            <button
              disabled
              className="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium border border-green-400/30
              bg-[oklch(1_0_0)] dark:bg-[oklch(0.141_0.005_285.823)] shadow-sm h-8 opacity-40 cursor-not-allowed"
            >
              <Play className="h-3.5 w-3.5 text-green-500" />
            </button>
            <button
              className="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium border border-red-500/30
              bg-[oklch(1_0_0)] dark:bg-[oklch(0.141_0.005_285.823)] shadow-sm h-8 hover:bg-red-500/10 transition-colors"
            >
              <Square className="h-3.5 w-3.5 text-red-500" />
            </button>
            <button
              className="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium border border-[oklch(0.555_0.163_48.998)]/30
                dark:border-[oklch(0.473_0.137_46.201)] bg-[oklch(1_0_0)] dark:bg-[oklch(0.141_0.005_285.823)] shadow-sm h-8 hover:bg-[oklch(0.555_0.163_48.998)]/10
                dark:hover:bg-[oklch(0.473_0.137_46.201)]/10 transition-colors"
            >
              <RefreshCw className="h-3.5 w-3.5 text-[oklch(0.555_0.163_48.998)] dark:text-[oklch(0.473_0.137_46.201)]" />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground">
            Quick restart
          </p>
          <div className="flex w-full flex-row gap-2">
            {[5, 15, 30].map((m) => (
              <button
                key={m}
                onClick={() => setRestartSeconds(m * 60)}
                className="flex-1 inline-flex items-center justify-center rounded-md border border-border bg-[oklch(1_0_0)] dark:bg-[oklch(0.141_0.005_285.823)] h-8 text-xs font-medium hover:bg-muted transition-colors"
              >
                +{m}m
              </button>
            ))}
          </div>
          <button
            onClick={() => setRestartSeconds(RESTART_INTERVAL)}
            className="w-full inline-flex items-center justify-center rounded-md h-8 text-xs font-medium text-foreground hover:bg-muted transition-colors"
          >
            Cancel / Reset restart
          </button>
        </div>

        <div className="space-y-3 border-t border-border pt-4">
          <div className="flex flex-row justify-between items-center">
            <p className="text-muted-foreground">Artifact</p>
            <p className="font-mono text-xs text-foreground">b7341</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-muted-foreground">Recommended</p>
            <div className="inline-flex items-center gap-1 font-mono text-xs text-[oklch(0.555_0.163_48.998)] dark:text-[oklch(0.473_0.137_46.201)] hover:underline cursor-pointer">
              b7341
              <ExternalLink className="h-3 w-3" />
            </div>
          </div>
        </div>

        <div className="space-y-2 border-t border-border pt-4">
          <div className="flex flex-row justify-between items-center">
            <p className="text-muted-foreground">Panel</p>
            <p className="font-mono text-xs text-[oklch(0.555_0.163_48.998)] dark:text-[oklch(0.473_0.137_46.201)] hover:underline cursor-pointer">
              v1.2.0
            </p>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            title="View the latest patch notes on GitHub"
            href="https://github.com/fxManagerProject/fxManager/releases/latest"
            className="flex items-center gap-2 rounded-md border border-[oklch(0.555_0.163_48.998)/0.3] dark:border-[oklch(0.473_0.137_46.201)/0.3] bg-[oklch(0.555_0.163_48.998)/0.1] dark:bg-[oklch(0.473_0.137_46.201)/0.1] px-2 py-1.5 text-xs text-[oklch(0.555_0.163_48.998)] dark:text-[oklch(0.473_0.137_46.201)] cursor-pointer hover:bg-[oklch(0.555_0.163_48.998)/0.2] dark:hover:bg-[oklch(0.473_0.137_46.201)/0.2] transition-colors"
          >
            <ArrowUpCircle className="h-3.5 w-3.5 shrink-0" />
            <span className="flex-1">
              <span className="font-mono">v1.3.1</span> available
            </span>
            <ExternalLink className="h-3 w-3 shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
}
