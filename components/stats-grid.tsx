"use client";

import { motion } from "framer-motion";
import type { Statistic } from "@/lib/profile-v2";
import { NumberTicker } from "./magicui/number-ticker";

interface StatsGridProps {
  statistics: Statistic[];
}

export function StatsGrid({ statistics }: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
      {statistics.map((stat, index) => {
        const Icon = stat.icon;
        const isNumeric = typeof stat.value === "number";

        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="relative group"
          >
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emeraldx/20 to-cyanx/20 rounded-lg blur-xl group-hover:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />

            {/* Card */}
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg p-6 backdrop-blur-sm overflow-hidden">
              {/* Top accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emeraldx/10 to-transparent rounded-bl-full" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-emeraldx/20 to-cyanx/20 border border-emeraldx/30 mb-4">
                  <Icon className="w-6 h-6 text-emeraldx" />
                </div>

                {/* Value */}
                <div className="mb-2">
                  {isNumeric ? (
                    <div className="text-3xl md:text-4xl font-bold text-white">
                      <NumberTicker value={stat.value as number} />
                      <span className="text-emeraldx text-lg ml-1">{stat.suffix || ""}</span>
                    </div>
                  ) : (
                    <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                  )}
                </div>

                {/* Label */}
                <p className="text-sm text-slate-300 font-medium">{stat.label}</p>
              </div>

              {/* Bottom border glow */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emeraldx/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
