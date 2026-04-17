"use client";

import {
  ExternalLink,
  Github,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import { formatRelativeTime, cn, getLanguageColor } from "@/lib/utils";
import { ShinyButton } from "@/components/magicui/shiny-button";

interface ProjectCardProps {
  name: string;
  description: string;
  language: string | null;
  stars: number;
  repo: string;
  demo?: string;
  updated: string;
  topics?: string[];
  featured?: boolean;
  index?: number;
}

export function ProjectCard({
  name,
  description,
  language,
  stars,
  repo,
  demo,
  updated,
  topics = [],
  featured = false,
  index = 0,
}: ProjectCardProps) {
  const isRecentlyUpdated =
    new Date().getTime() - new Date(updated).getTime() <
    30 * 24 * 60 * 60 * 1000; // 30 days

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "group relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 transition-all duration-300",
        "hover:border-white/20 hover:bg-gradient-to-b hover:from-white/[0.12] hover:to-white/[0.04]",
        featured &&
          "md:col-span-2 border-emeraldx/[0.3] bg-gradient-to-b from-emeraldx/[0.08] to-transparent"
      )}
    >
      {/* Background gradient effect */}
      <div
        className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at top right, rgb(34, 197, 94, 0.1), transparent 50%)",
        }}
      />

      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            {featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-emeraldx/10 px-2 py-1 text-xs font-semibold text-emeraldx">
                <Star className="h-3 w-3 fill-current" />
                Featured
              </span>
            )}
            {isRecentlyUpdated && (
              <span className="inline-flex items-center gap-1 rounded-full bg-cyanx/10 px-2 py-1 text-xs font-semibold text-cyanx">
                Recently Updated
              </span>
            )}
          </div>
          <h3 className="truncate text-xl font-bold text-white group-hover:text-emeraldx transition-colors">
            {name}
          </h3>
        </div>
        <Github className="h-6 w-6 shrink-0 text-white/40 group-hover:text-emeraldx transition-colors" />
      </div>

      {/* Description */}
      <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-white/70">
        {description}
      </p>

      {/* Topics/Tags */}
      {topics.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-0.5 text-xs font-medium text-white/60 hover:text-white/80 transition-colors"
            >
              {topic}
            </span>
          ))}
          {topics.length > 3 && (
            <span className="text-xs text-white/40">
              +{topics.length - 3} more
            </span>
          )}
        </div>
      )}

      {/* Metadata */}
      <div className="mb-6 flex flex-wrap items-center gap-4 text-xs text-white/60">
        {language && (
          <div className="flex items-center gap-1.5">
            <div className={cn("h-2 w-2 rounded-full", getLanguageColor(language))} />
            <span className="capitalize">{language}</span>
          </div>
        )}
        {stars > 0 && (
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5" />
            <span>{stars} stars</span>
          </div>
        )}
        <span className="ml-auto">{formatRelativeTime(updated)}</span>
      </div>

      {/* Footer buttons */}
      <div className="flex gap-2">
        <ShinyButton
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-xs"
          variant="secondary"
        >
          <Github className="h-3.5 w-3.5" />
          Repository
        </ShinyButton>
        {demo && (
          <ShinyButton
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-xs"
            variant="secondary"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Demo
          </ShinyButton>
        )}
      </div>
    </motion.div>
  );
}

/**
 * Responsive grid container for project cards
 */
export function ProjectGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-4 md:gap-6",
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}
