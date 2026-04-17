import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a date to a readable string
 */
export function formatDate(date: string | Date, format: "short" | "long" = "short"): string {
  const d = new Date(date);
  const options: Intl.DateTimeFormatOptions =
    format === "short"
      ? { year: "numeric", month: "short" }
      : { year: "numeric", month: "long", day: "numeric" };

  return d.toLocaleDateString("en-US", options);
}

/**
 * Format relative time (e.g., "2 days ago")
 */
export function formatRelativeTime(date: string | Date): string {
  const d = new Date(date);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - d.getTime()) / 1000);

  if (seconds < 60) return "just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;

  return formatDate(date, "short");
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, length: number = 100): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + "...";
}

/**
 * Format language name properly (Python -> python, TypeScript -> typescript)
 */
export function formatLanguage(language: string | null): string {
  if (!language) return "Unknown";
  return language.toLowerCase().replace(/\s+/g, "");
}

/**
 * Get language color for display
 */
export function getLanguageColor(language: string | null): string {
  const colors: Record<string, string> = {
    typescript: "text-blue-400",
    javascript: "text-yellow-400",
    python: "text-green-400",
    java: "text-orange-600",
    csharp: "text-purple-500",
    rust: "text-orange-700",
    go: "text-cyan-500",
    cpp: "text-blue-600",
    c: "text-gray-600",
    shell: "text-green-600",
    html: "text-red-500",
    css: "text-blue-500",
    react: "text-cyan-400",
    nodejs: "text-green-600",
  };

  const key = formatLanguage(language);
  return colors[key] || "text-white/60";
}

/**
 * Sanitize filename for safe use
 */
export function sanitizeFilename(filename: string): string {
  return filename
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Generate slug from text
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Check if URL is valid
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Extract domain from URL
 */
export function getDomain(url: string): string {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return url;
  }
}

/**
 * Merge arrays and remove duplicates
 */
export function mergeUnique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

/**
 * Sort array of objects by property
 */
export function sortBy<T, K extends keyof T>(arr: T[], key: K, descending = false): T[] {
  return arr.slice().sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];

    if (aVal < bVal) return descending ? 1 : -1;
    if (aVal > bVal) return descending ? -1 : 1;
    return 0;
  });
}
