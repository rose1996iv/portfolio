/**
 * Environment configuration for GitHub integration
 * Make sure to add GITHUB_TOKEN to your .env.local for higher API rate limits
 */

export const githubConfig = {
  username: "rose1996iv",
  token: process.env.GITHUB_TOKEN || "",
  reposTopics: ["portfolio", "research", "project"], // Topics to filter repos
  cacheRevalidate: 3600, // Cache revalidation in seconds (1 hour)
};

export const siteConfig = {
  name: "Joseph's Portfolio",
  description:
    "M.Tech CS researcher specializing in Cybersecurity, AI, and Data Science",
  url: "https://joseph1997-eng.github.io/portfolio-/",
  ogImage: "https://joseph1997-eng.github.io/portfolio-/og.png",
  links: {
    twitter: "https://twitter.com/joseph_research",
    github: "https://github.com/rose1996iv",
    linkedin: "https://www.linkedin.com/in/joseph-61734a17a",
  },
};

export const analyticsConfig = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
  enableAnalytics: Boolean(process.env.NEXT_PUBLIC_GTM_ID),
};
