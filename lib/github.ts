/**
 * GitHub API Integration
 * Dynamically fetches user repositories, stats, and profile data
 * Enables auto-updating portfolio based on GitHub activity
 */

const GITHUB_USERNAME = "rose1996iv";
const GITHUB_API_BASE = "https://api.github.com";
const githubToken = process.env.GITHUB_TOKEN || process.env.TOKEN || "";

// Cache duration in milliseconds (5 minutes)
const CACHE_DURATION = 5 * 60 * 1000;

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  url: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  topics: string[];
  homepage: string | null;
}

interface GitHubUser {
  login: string;
  name: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  updated_at: string;
}

interface CachedData<T = unknown> {
  data: T;
  timestamp: number;
}

const cache = new Map<string, CachedData>();

/**
 * Check if cached data is still valid
 */
function isCacheValid(key: string): boolean {
  const cached = cache.get(key);
  if (!cached) return false;
  return Date.now() - cached.timestamp < CACHE_DURATION;
}

/**
 * Fetch user data from GitHub API
 */
export async function fetchGitHubUser(): Promise<GitHubUser | null> {
  const cacheKey = `user:${GITHUB_USERNAME}`;

  if (isCacheValid(cacheKey)) {
    return (cache.get(cacheKey) as CachedData<GitHubUser> | undefined)?.data || null;
  }

  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        ...(githubToken && {
          Authorization: `Bearer ${githubToken}`,
        }),
      },
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      console.error("Failed to fetch GitHub user:", response.statusText);
      return null;
    }

    const data = await response.json();
    cache.set(cacheKey, { data, timestamp: Date.now() });
    return data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return null;
  }
}

/**
 * Fetch repositories from GitHub API
 * Sorted by stars, filtered by topics
 */
export async function fetchGitHubRepos(
  topics: string[] = ["portfolio", "research", "project"]
): Promise<GitHubRepo[]> {
  const cacheKey = `repos:${GITHUB_USERNAME}:${topics.join(",")}`;

  if (isCacheValid(cacheKey)) {
    return (cache.get(cacheKey) as CachedData<GitHubRepo[]> | undefined)?.data || [];
  }

  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=stars&order=desc&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(githubToken && {
            Authorization: `Bearer ${githubToken}`,
          }),
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch GitHub repos:", response.statusText);
      return [];
    }

    let repos: GitHubRepo[] = await response.json();

    // Filter repos by topics if specified
    if (topics.length > 0) {
      repos = repos.filter((repo) => repo.topics.some((topic) => topics.includes(topic)));
    }

    cache.set(cacheKey, { data: repos, timestamp: Date.now() });
    return repos;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

/**
 * Fetch all repositories without filtering
 * Used for portfolio project discovery
 */
export async function fetchAllGitHubRepos(): Promise<GitHubRepo[]> {
  const cacheKey = `repos:${GITHUB_USERNAME}:all`;

  if (isCacheValid(cacheKey)) {
    return (cache.get(cacheKey) as CachedData<GitHubRepo[]> | undefined)?.data || [];
  }

  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&order=desc&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(githubToken && {
            Authorization: `Bearer ${githubToken}`,
          }),
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch all repos:", response.statusText);
      return [];
    }

    const data = await response.json();
    cache.set(cacheKey, { data, timestamp: Date.now() });
    return data;
  } catch (error) {
    console.error("Error fetching all repos:", error);
    return [];
  }
}

/**
 * Extract unique skills/languages from repositories
 */
export function extractSkillsFromRepos(repos: GitHubRepo[]): string[] {
  const skills = new Set<string>();

  repos.forEach((repo) => {
    if (repo.language) {
      skills.add(repo.language);
    }
    // Add topics as skills
    repo.topics.forEach((topic) => {
      if (topic.length > 2) skills.add(topic);
    });
  });

  return Array.from(skills).sort();
}

/**
 * Get GitHub contribution stats
 */
export async function fetchGitHubStats(): Promise<{
  publicRepos: number;
  followers: number;
  following: number;
  updated: string;
} | null> {
  const user = await fetchGitHubUser();
  if (!user) return null;

  return {
    publicRepos: user.public_repos,
    followers: user.followers,
    following: user.following,
    updated: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}
