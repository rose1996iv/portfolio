"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Skill {
  label: string;
  icon: LucideIcon;
  category?: string;
}

interface SkillShowcaseProps {
  skills: Skill[];
  columns?: number;
  showCategory?: boolean;
}

export function SkillShowcase({
  skills,
  columns = 2,
  showCategory = false,
}: SkillShowcaseProps) {
  // Group skills by category if needed
  const groupedSkills = showCategory
    ? skills.reduce(
        (acc, skill) => {
          const category = skill.category || "Other";
          if (!acc[category]) acc[category] = [];
          acc[category].push(skill);
          return acc;
        },
        {} as Record<string, Skill[]>
      )
    : { All: skills };

  return (
    <div className="space-y-8">
      {Object.entries(groupedSkills).map(([category, categorySkills]) => (
        <div key={category}>
          {showCategory && (
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/60">
              {category}
            </h3>
          )}
          <div
            className={cn(
              "grid gap-3 sm:gap-4",
              `grid-cols-1 sm:grid-cols-${columns} lg:grid-cols-${columns}`
            )}
          >
            {categorySkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative"
                >
                  <div
                    className={cn(
                      "relative flex min-h-14 items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.035] px-3 py-2 transition-all duration-300",
                      "hover:border-emeraldx/50 hover:bg-emeraldx/[0.08] hover:shadow-lg hover:shadow-emeraldx/20"
                    )}
                  >
                    {/* Gradient background on hover */}
                    <div
                      className="absolute inset-0 -z-10 rounded-[8px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(circle at center, rgb(34, 197, 94, 0.05), transparent)",
                      }}
                    />

                    <Icon
                      className="h-5 w-5 shrink-0 text-emeraldx transition-all group-hover:text-emeraldx"
                      aria-hidden="true"
                    />
                    <span className="truncate text-sm font-semibold text-white/[0.78] group-hover:text-white transition-colors">
                      {skill.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Skill card component for individual display
 */
export function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer"
    >
      <div className="flex flex-col items-center gap-3 rounded-lg border border-white/10 bg-white/[0.05] p-4 transition-all duration-300 hover:border-emeraldx/40 hover:bg-emeraldx/[0.1]">
        <Icon className="h-8 w-8 text-emeraldx" />
        <span className="text-center text-xs font-semibold text-white/70">
          {skill.label}
        </span>
      </div>
    </motion.div>
  );
}

/**
 * Inline skill badge for use in prose
 */
export function SkillBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emeraldx/10 px-2.5 py-1 text-xs font-semibold text-emeraldx">
      {label}
    </span>
  );
}
