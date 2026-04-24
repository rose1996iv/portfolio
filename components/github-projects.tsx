"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpDown, RefreshCw, Github, AlertCircle } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { cn } from "@/lib/utils";

const GITHUB_USERNAME = "rose1996iv";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  pushed_at: string;
  topics: string[];
  homepage: string | null;
  private: boolean;
  fork: boolean;
}

type SortKey = "updated" | "stars" | "name";

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "updated", label: "Last Modified" },
  { key: "stars", label: "Stars" },
  { key: "name", label: "Name (A–Z)" },
];

function formatUpdated(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function sortRepos(repos: GitHubRepo[], key: SortKey): GitHubRepo[] {
  return [...repos].sort((a, b) => {
    if (key === "updated") {
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    }
    if (key === "stars") {
      return b.stargazers_count - a.stargazers_count;
    }
    if (key === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });
}

// Skeleton loader card
function SkeletonCard({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 h-52"
    >
      <div className="animate-pulse space-y-4">
        <div className="h-3 w-16 rounded-full bg-white/10" />
        <div className="h-5 w-2/3 rounded bg-white/10" />
        <div className="space-y-2">
          <div className="h-3 w-full rounded bg-white/[0.07]" />
          <div className="h-3 w-4/5 rounded bg-white/[0.07]" />
        </div>
        <div className="flex gap-2 pt-2">
          <div className="h-4 w-16 rounded-full bg-white/[0.07]" />
          <div className="h-4 w-12 rounded-full bg-white/[0.07]" />
        </div>
      </div>
    </motion.div>
  );
}

export function GitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [sortKey, setSortKey] = useState<SortKey>("updated");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastFetched, setLastFetched] = useState<Date | null>(null);

  const fetchRepos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch up to 100 public repos, sorted by update time from GitHub
      const res = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?type=public&sort=updated&order=desc&per_page=100`,
        {
          headers: { Accept: "application/vnd.github.v3+json" },
        }
      );
      if (!res.ok) {
        throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
      }
      const data: GitHubRepo[] = await res.json();
      // Exclude forks, only public (type=public already handles this, but double-check)
      const publicRepos = data.filter((r) => !r.private);
      setRepos(publicRepos);
      setLastFetched(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch repositories");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  const sorted = sortRepos(repos, sortKey);

  return (
    <div className="space-y-6">
      {/* Controls bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Sort buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="flex items-center gap-1.5 text-xs text-white/50 mr-1">
            <ArrowUpDown className="h-3.5 w-3.5" />
            Sort by:
          </span>
          {SORT_OPTIONS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setSortKey(key)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                sortKey === key
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                  : "bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white/70"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right: repo count + refresh */}
        <div className="flex items-center gap-3">
          {!loading && repos.length > 0 && (
            <span className="flex items-center gap-1.5 text-xs text-white/40">
              <Github className="h-3.5 w-3.5" />
              {repos.length} public repos
            </span>
          )}
          {lastFetched && (
            <span className="text-xs text-white/30 hidden sm:block">
              Updated {lastFetched.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </span>
          )}
          <button
            onClick={fetchRepos}
            disabled={loading}
            title="Refresh repositories"
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200",
              "bg-white/5 text-white/50 border-white/10 hover:bg-white/10 hover:text-white/70",
              loading && "opacity-50 cursor-not-allowed"
            )}
          >
            <RefreshCw className={cn("h-3.5 w-3.5", loading && "animate-spin")} />
            Refresh
          </button>
        </div>
      </div>

      {/* Error state */}
      {error && !loading && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400"
        >
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{error}</span>
        </motion.div>
      )}

      {/* Loading skeletons */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} index={i} />
          ))}
        </div>
      )}

      {/* Repo grid */}
      {!loading && !error && sorted.length > 0 && (
        <AnimatePresence mode="popLayout">
          <motion.div
            key={sortKey}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {sorted.map((repo, index) => (
              <ProjectCard
                key={repo.id}
                name={repo.name}
                description={repo.description ?? "No description provided."}
                language={repo.language}
                stars={repo.stargazers_count}
                repo={repo.html_url}
                demo={repo.homepage ?? undefined}
                updated={formatUpdated(repo.updated_at)}
                topics={repo.topics}
                featured={false}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      )}

      {/* Empty state */}
      {!loading && !error && sorted.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center gap-3 py-20 text-white/40"
        >
          <Github className="h-12 w-12 opacity-30" />
          <p className="text-sm">No public repositories found.</p>
        </motion.div>
      )}
    </div>
  );
}
