import React from "react";
import { Bug, ExternalLink, FileText, Server } from "lucide-react";
import { Cards, Card } from "fumadocs-ui/components/card";
import { Metadata } from "next";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Callout } from "fumadocs-ui/components/callout";
import { Step, Steps } from "fumadocs-ui/components/steps";

export const metadata: Metadata = {
  title: "Support fxManager",
  description: "Support the team of fxManager and the project.",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function SupportPage() {
  const teamMembers = [
    { name: "Maximus", handle: "Maximus7474", kofi: "Maximus7474" },
    { name: "Andreutu", handle: "andreutu" },
    { name: "Zoo", handle: "FjamZoo", kofi: "FjamZoo" },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="container max-w-4xl pt-2 pb-6 px-4">
        <div className="text-center my-8 text-2xl text-fd-foreground max-w-2xl mx-auto">
          Support the project, the team behind <strong>fxManager</strong>.{" "}
          <br />
          Get support, report bugs, or simply connect with the team and users
          using it.
        </div>

        <Cards>
          <Card
            icon={<FileText className="text-blue-500" />}
            title="Documentation"
            description="Check out our guides and API references."
            href="/docs"
          />
          <Card
            icon={<Bug className="text-red-500" />}
            title="GitHub Issues"
            description="Found a bug, have a feature request or need help? Open an issue on our repository."
            href="https://github.com/fxManagerProject/fxManager/issues"
            external
          />
        </Cards>

        <hr className="my-12 border-fd-border" />

        <h2 className="text-2xl font-bold tracking-tight inline-flex items-center">
          <div className="inline-flex aspect-square h-6 w-6 items-center justify-center rounded-md bg-[oklch(0.555_0.163_48.998)] text-white align-middle ml-2">
            <Server className="h-4 w-4" />
          </div>
          <span className="ml-2">Meet the Team</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
          {teamMembers.map((member) => (
            <div
              key={member.handle}
              className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl border bg-fd-card text-fd-card-foreground hover:bg-fd-accent"
            >
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={`https://github.com/${member.handle}.png?size=80`}
                  alt={member.name}
                  className="w-11 h-11 rounded-full border m-0 shrink-0"
                />
                <div className="flex flex-col min-w-0">
                  <span className="font-semibold text-sm text-fd-foreground truncate">
                    {member.name}
                  </span>
                  <span className="text-xs text-fd-muted-foreground truncate">
                    @{member.handle}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <a
                  href={`https://github.com/${member.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`View ${member.name}'s GitHub`}
                  className="flex items-center justify-center p-2 rounded-lg border bg-fd-background text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-accent transition-colors"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </a>

                {member.kofi && (
                  <a
                    href={`https://ko-fi.com/${member.kofi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Support ${member.name} on Ko-fi`}
                    className="flex items-center justify-center p-2 rounded-lg bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                      <line x1="6" x2="6" y1="2" y2="4" />
                      <line x1="10" x2="10" y1="2" y2="4" />
                      <line x1="14" x2="14" y1="2" y2="4" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto px-4 mt-8">
          <a
            href="https://github.com/fxManagerProject/fxManager"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-11 px-5 w-full sm:w-auto rounded-lg border border-fd-border bg-transparent text-fd-foreground hover:bg-fd-accent/50 dark:border-transparent dark:bg-fd-foreground dark:text-fd-background dark:hover:bg-fd-foreground/70 font-medium transition-colors no-underline box-border whitespace-nowrap"
          >
            <img
              src="/github.svg"
              alt="GitHub Logo"
              className="w-5 h-5 min-w-[20px] min-h-[20px] shrink-0 object-contain pointer-events-none text-foreground"
              aria-hidden="true"
            />
            <span>Star on GitHub</span>
          </a>

          <a
            href="https://discord.gg/WxFGydWfhP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-11 px-5 w-full sm:w-auto rounded-lg bg-[#5865F2] text-white hover:bg-[#4752C4] font-medium transition-colors no-underline box-border whitespace-nowrap"
          >
            <img
              src="/discord.svg"
              alt="Discord Logo"
              className="w-5 h-5 min-w-[20px] min-h-[20px] shrink-0 object-contain pointer-events-none"
              aria-hidden="true"
            />
            <span>Join our Discord</span>
          </a>
        </div>

        <hr className="my-12 border-fd-border" />

        <div className="my-8">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            Frequently Asked Questions
          </h2>
          <Accordions type="multiple">
            <Accordion title="How do I update fxManager to the latest version?">
              <div className="space-y-4 text-sm text-fd-muted-foreground leading-relaxed">
                <Callout>
                  A full update guide will be made available soon within the
                  documentation.
                </Callout>

                <p className="mb-6">
                  To update to the latest version, follow these steps:
                </p>

                <Steps>
                  <Step>
                    <h3 className="font-semibold text-fd-foreground text-base mt-0">
                      Download Release Packages
                    </h3>
                    <p className="mt-1">
                      Get the appropriate package for your operating system (
                      <code className="text-fd-foreground bg-fd-muted px-1.5 py-0.5 rounded text-xs font-mono">
                        fxmanager-windows.zip
                      </code>{" "}
                      or{" "}
                      <code className="text-fd-foreground bg-fd-muted px-1.5 py-0.5 rounded text-xs font-mono">
                        fxmanager-linux.zip
                      </code>
                      ) along with the game files (
                      <code className="text-fd-foreground bg-fd-muted px-1.5 py-0.5 rounded text-xs font-mono">
                        fxmanager-resource.zip
                      </code>
                      ) from the{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/fxManagerProject/fxManager/releases/latest"
                        className="text-fd-primary underline hover:text-fd-primary/80 font-medium inline-flex items-center gap-1"
                      >
                        Latest GitHub Releases
                        <ExternalLink size={16} />
                      </a>
                    </p>
                    <div className="mb-2 h-2" />
                  </Step>

                  <Step>
                    <h3 className="font-semibold text-fd-foreground text-base">
                      Extract the Files
                    </h3>
                    <p className="mt-1">
                      Extract the archive and locate your executable file and
                      the new assets folder.
                    </p>
                    <div className="mb-2 h-2" />
                  </Step>

                  <Step>
                    <h3 className="font-semibold text-fd-foreground text-base">
                      Replace Core Assets
                    </h3>
                    <p className="mt-1">
                      Delete your old executable and old assets folder, then
                      replace them with the newly extracted ones.
                    </p>
                    <div className="mb-2 h-2" />
                  </Step>

                  <Step>
                    <h3 className="font-semibold text-fd-foreground text-base">
                      Update In-game Resources
                    </h3>
                    <p className="mt-1">
                      Delete your existing in-game resource entry entirely and
                      replace it with the fresh folders provided inside the{" "}
                      <code className="text-fd-foreground bg-fd-muted px-1.5 py-0.5 rounded text-xs font-mono">
                        fxmanager-resource.zip
                      </code>{" "}
                      bundle.
                    </p>
                    <div className="mb-2 h-2" />
                  </Step>
                </Steps>

                <Callout type="warn" className="mt-6">
                  <span className="text-fd-foreground font-medium">DO NOT</span>{" "}
                  delete or overwrite the{" "}
                  <code className="bg-fd-background border px-1.5 py-0.5 rounded text-xs font-mono font-bold text-red-500">
                    data/
                  </code>{" "}
                  directory. Doing so will permanently wipe your current
                  configurations and all player data.
                </Callout>
              </div>
            </Accordion>
            <Accordion title="Is fxManager free to use for commercial projects?">
              <p className="text-sm text-fd-muted-foreground leading-relaxed">
                Yes! fxManager is open-source software licensed under the{" "}
                <strong>AGPL v3 (GNU Affero General Public License v3)</strong>.
                You are free to use, modify, and run it for commercial purposes.
                However, due to the copyleft nature of the AGPL, if you modify
                the source code and run it on a server as a network service, you
                must make your modified source code publicly available under the
                same license.
              </p>
            </Accordion>
            <Accordion title="I found a critical security vulnerability, where do I report it?">
              <div className="text-sm text-fd-muted-foreground leading-relaxed space-y-3">
                <p>
                  Please <strong>do not</strong> open a public GitHub Issue for
                  security bugs or vulnerabilities.
                </p>
                <p className="leading-relaxed">
                  To report security flaws securely, please submit a private
                  draft advisory directly through our repository's security
                  panel via{" "}
                  <a
                    href="https://github.com/fxManagerProject/fxManager/security/advisories/new"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fd-primary underline hover:text-fd-primary/80 font-medium inline-flex items-center gap-1"
                  >
                    GitHub Security Advisories
                    <ExternalLink size={14} className="ml-0.5" />
                  </a>
                </p>
                <p>
                  This keeps the details hidden from the public eye until our
                  team can review the threat and issue a security patch.
                </p>
              </div>
            </Accordion>
          </Accordions>
        </div>
      </div>
    </div>
  );
}
