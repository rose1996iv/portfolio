"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/lib/profile-v2";

interface SkillsGridProps {
  skills: Skill[];
  showCategory?: boolean;
}

const categories = ["Frontend", "Backend", "AI/ML", "DevOps", "Other"];

export function SkillsGrid({ skills, showCategory = true }: SkillsGridProps) {
  const groupedSkills = showCategory
    ? categories.reduce(
        (acc, category) => {
          acc[category] = skills.filter((skill) => skill.category === category);
          return acc;
        },
        {} as Record<string, Skill[]>
      )
    : { All: skills };

  const categoryColors = {
    Frontend: {
      bg: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-400/30",
      text: "text-blue-300",
      iconBg: "bg-blue-500/10",
      shadow: "hover:shadow-blue-500/20",
      accent: "via-blue-300/50",
    },
    Backend: {
      bg: "from-teal-500/20 to-emerald-500/20",
      border: "border-teal-300/30",
      text: "text-teal-300",
      iconBg: "bg-teal-500/10",
      shadow: "hover:shadow-teal-500/20",
      accent: "via-teal-300/50",
    },
    "AI/ML": {
      bg: "from-emeraldx/20 to-cyanx/20",
      border: "border-emeraldx/30",
      text: "text-emeraldx",
      iconBg: "bg-emeraldx/10",
      shadow: "hover:shadow-emeraldx/20",
      accent: "via-emeraldx/50",
    },
    DevOps: {
      bg: "from-amber-500/20 to-rose-500/20",
      border: "border-amber-300/30",
      text: "text-amber-300",
      iconBg: "bg-amber-500/10",
      shadow: "hover:shadow-amber-500/20",
      accent: "via-amber-300/50",
    },
    Other: {
      bg: "from-slate-500/20 to-zinc-500/20",
      border: "border-slate-300/30",
      text: "text-slate-300",
      iconBg: "bg-slate-500/10",
      shadow: "hover:shadow-slate-500/20",
      accent: "via-slate-300/50",
    },
  };

  const proficiencyBadgeColor = {
    Expert: "bg-emeraldx/20 text-emeraldx border-emeraldx/30",
    Advanced: "bg-cyanx/20 text-cyanx border-cyanx/30",
    Intermediate: "bg-blue-500/20 text-blue-400 border-blue-400/30",
    Beginner: "bg-slate-500/20 text-slate-400 border-slate-400/30",
  };

  return (
    <div className="space-y-12">
      {Object.entries(groupedSkills).map((entry, sectionIndex) => {
        const [category, skillList] = entry;
        if (skillList.length === 0) return null;

        const colors =
          categoryColors[category as keyof typeof categoryColors] || categoryColors.Other;

        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Category Title */}
            {showCategory && (
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`text-xl font-bold mb-6 ${colors.text}`}
              >
                {category}
              </motion.h3>
            )}

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skillList.map((skill, index) => {
                const Icon = skill.icon;
                const proficiencyColor =
                  skill.proficiency &&
                  proficiencyBadgeColor[skill.proficiency as keyof typeof proficiencyBadgeColor];

                return (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: (sectionIndex * 10 + index) * 0.02,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="group"
                  >
                    <div
                      className={`relative h-full bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-lg p-4 backdrop-blur-sm hover:shadow-lg ${colors.shadow} transition-all overflow-hidden`}
                    >
                      {/* Hover glow */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-50 transition-opacity`}
                      />

                      <div className="relative z-10">
                        {/* Icon */}
                        <div className={`inline-flex p-2 rounded-lg ${colors.iconBg} mb-3`}>
                          <Icon className={`w-5 h-5 ${colors.text}`} />
                        </div>

                        {/* Label */}
                        <h4 className="font-semibold text-white text-sm mb-2">{skill.label}</h4>

                        {/* Proficiency Badge */}
                        {skill.proficiency && (
                          <div
                            className={`text-xs px-2 py-1 rounded-full border ${proficiencyColor} inline-block`}
                          >
                            {skill.proficiency}
                          </div>
                        )}
                      </div>

                      {/* Bottom accent */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent ${colors.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
