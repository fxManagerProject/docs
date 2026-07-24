import { unstable_cache } from "next/cache";

export const REPOSITORIES = [
  "fxManager",
  "cli-installer",
  "pterodactyl-egg",
  "fxmanager-docker",
  "docs",
];
const GITHUB_CONTRIBUTORS =
  "https://api.github.com/repos/fxManagerProject/{repository}/contributors";
const REQUEST_TIMEOUT_MS = 5_000;

interface Contributor {
  id: number;
  username: string;
  kofi?: string;
  image?: string | false;
  contributions?: number;
}

interface ContributorSummary {
  core: Contributor[];
  external: Contributor[];
}

interface RawContributor {
  id: number;
  login: string;
  avatar_url: string;
  type: string;
  contributions: number;
}

export const CORE_CONTRIBUTORS: Record<string, Contributor> = {
  Maximus7474: { id: 1, kofi: "Maximus7474", username: "Maximus7474" },
  FjamZoo: { id: 2, kofi: "FjamZoo", username: "FjamZoo" },
  andreutu: { id: 3, username: "andreutu" },
};

async function fetchAndProcessContributors(): Promise<ContributorSummary> {
  const contributors: RawContributor[] = [];
  let successfulFetches = 0;

  for (const repo of REPOSITORIES) {
    try {
      const response = await fetch(
        GITHUB_CONTRIBUTORS.replace("{repository}", repo),
        {
          headers: {
            "User-Agent": "fxManager-Updater",
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          },
          signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
        },
      );

      if (!response.ok)
        throw new Error(`${response.status} - ${response.statusText}`);

      const data = (await response.json()) as RawContributor[];
      successfulFetches++;

      for (const contributor of data) {
        const idx = contributors.findIndex((c) => c.id === contributor.id);

        if (idx !== -1) {
          contributors[idx].contributions += contributor.contributions;
        } else {
          contributors.push(contributor);
        }
      }
    } catch (err) {
      console.warn(
        `[contributors] Failed to fetch repo ${repo}:`,
        (err as Error).message,
      );
    }
  }

  if (successfulFetches === 0 && REPOSITORIES.length > 0) {
    return { core: Object.values(CORE_CONTRIBUTORS), external: [] };
  }

  const value: ContributorSummary = { core: [], external: [] };

  for (const contributor of contributors) {
    if (CORE_CONTRIBUTORS[contributor.login]) {
      value.core.push({
        ...CORE_CONTRIBUTORS[contributor.login],
        id: contributor.id,
        username: contributor.login,
        image: contributor.avatar_url,
        contributions: contributor.contributions,
      });
    } else if (contributor.type === "User") {
      value.external.push({
        id: contributor.id,
        username: contributor.login,
        image: contributor.avatar_url,
        contributions: contributor.contributions,
      });
    }
  }

  return value;
}

// 2. Wrap the function with Next.js caching.
// This natively uses Cloudflare's caching architecture when deployed.
export const getContributorsList = unstable_cache(
  fetchAndProcessContributors,
  ["github-contributors-cache"], // Unique cache key
  {
    revalidate: 3600, // TTL in seconds (1 hour)
  },
);
