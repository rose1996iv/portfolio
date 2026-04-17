import { fetchAllGitHubRepos, fetchGitHubStats } from "@/lib/github";
import { profile } from "@/lib/profile";
import { sortBy } from "@/lib/utils";


/**
 * Dynamic portfolio data that merges static profile with GitHub data
 * This component fetches data at build time and caches it
 */
export async function getDynamicPortfolioData() {
  try {
    // Fetch GitHub data in parallel
    const [repos, stats] = await Promise.all([
      fetchAllGitHubRepos(),
      fetchGitHubStats(),
    ]);

    // Filter repos that should be featured (manually selected in profile)
    const featuredRepoNames = profile.projects.map((p) =>
      p.repo.split("/").pop()
    );
    const featuredRepos = repos.filter((repo) =>
      featuredRepoNames.includes(repo.name)
    );

    // Extract unique languages from all repos
    const languages = new Set<string>();
    repos.forEach((repo) => {
      if (repo.language) languages.add(repo.language);
    });

    // Merge with static profile data
    return {
      ...profile,
      github: {
        ...profile.github,
        ...stats,
      },
      // Update projects with live GitHub data
      projects: profile.projects.map((staticProject) => {
        const liveRepo = featuredRepos.find(
          (r) => r.url === staticProject.repo
        );
        return {
          ...staticProject,
          stars: liveRepo?.stargazers_count ?? staticProject.stars,
          updated: liveRepo?.updated_at ?? staticProject.updated,
          description: liveRepo?.description ?? staticProject.description,
        };
      }),
      // All available repos for discovery
      allRepos: sortBy(repos, "stargazers_count", true),
      // Detected languages
      detectedLanguages: Array.from(languages).sort(),
      featuredRepos,
    };
  } catch (error) {
    console.error("Failed to fetch dynamic portfolio data:", error);
    // Fallback to static profile if API fails
    return {
      ...profile,
      allRepos: [],
      detectedLanguages: profile.skills
        .filter((s) =>
          ["Python", "TypeScript", "JavaScript", "Java", "C#"].includes(
            s.label
          )
        )
        .map((s) => s.label),
    };
  }
}

export type PortfolioData = Awaited<
  ReturnType<typeof getDynamicPortfolioData>
>;
