"use client";

import { motion } from "framer-motion";
import { Calendar, Award } from "lucide-react";
import type { Experience, Education } from "@/lib/profile-v2";

interface TimelineProps {
  items: (Experience | Education)[];
}

function isEducation(item: Experience | Education): item is Education {
  return "institution" in item && "degree" in item;
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative space-y-8">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emeraldx via-cyanx to-transparent" />

      {items.map((item, index) => {
        const isEdu = isEducation(item);
        const title = isEdu ? item.degree : item.role;
        const organization = isEdu ? item.institution : item.organization;
        const detail = isEdu ? item.focus : item.detail;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-24"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-16 h-16 -ml-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-emeraldx to-cyanx rounded-full opacity-20 blur-md" />
              <div className="relative w-12 h-12 rounded-full bg-slate-900 border-2 border-emeraldx flex items-center justify-center shadow-lg shadow-emeraldx/50">
                {isEdu ? (
                  <Award className="w-6 h-6 text-cyanx" />
                ) : (
                  <Calendar className="w-6 h-6 text-cyanx" />
                )}
              </div>
            </div>

            {/* Content card */}
            <motion.div
              whileHover={{ x: 8 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg p-5 backdrop-blur-sm hover:border-emeraldx/50 transition-colors"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="text-emeraldx font-medium mt-1">{organization}</p>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">{detail}</p>

                  {/* Highlights */}
                  {!isEdu && item.highlights && item.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {item.highlights.slice(0, 2).map((highlight, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="text-cyanx mt-1">-</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technologies */}
                  {!isEdu && item.technologies && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {item.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-emeraldx/10 text-emeraldx border border-emeraldx/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {item.technologies && item.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 text-slate-400">
                          +{item.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Achievements */}
                  {isEdu && item.achievements && item.achievements.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {item.achievements.slice(0, 2).map((achievement, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="text-emeraldx mt-1">-</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Period badge */}
                <div className="flex flex-col items-start gap-2 sm:items-end">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-cyanx/10 border border-cyanx/30">
                    <Calendar className="w-3 h-3 text-cyanx" />
                    <span className="text-xs font-medium text-cyanx">{item.period}</span>
                  </div>
                  {isEdu && item.gpa && (
                    <div className="text-xs font-semibold text-emeraldx">GPA: {item.gpa}</div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
