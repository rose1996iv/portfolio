"use client";

import { motion } from "framer-motion";
import type { Achievement } from "@/lib/profile-v2";

interface AchievementsGridProps {
  achievements: Achievement[];
  maxItems?: number;
}

export function AchievementsGrid({ achievements, maxItems = 6 }: AchievementsGridProps) {
  const displayAchievements = achievements.slice(0, maxItems);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {displayAchievements.map((achievement, index) => {
        const Icon = achievement.icon;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group"
          >
            <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg p-5 backdrop-blur-sm hover:border-cyanx/50 transition-colors overflow-hidden">
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyanx/10 to-emeraldx/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-cyanx/20 to-emeraldx/20 border border-cyanx/30 mb-4">
                  <Icon className="w-6 h-6 text-cyanx" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-emeraldx">
                    {achievement.date}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 capitalize">
                    {achievement.category}
                  </span>
                </div>
              </div>

              {/* Right accent */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-bl from-cyanx/5 to-transparent rounded-full" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
