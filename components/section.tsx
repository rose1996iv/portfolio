"use client";

import { motion } from "framer-motion";
import React from "react";
import type { LucideIcon } from "lucide-react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
  noGradient?: boolean;
}

export function Section({
  id,
  title,
  subtitle,
  icon: Icon,
  children,
  className = "",
  noGradient = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-20 px-4 sm:px-6 lg:px-8 ${!noGradient ? "bg-gradient-to-b from-slate-900/50 to-slate-800/50" : ""} ${className}`}
    >
      {/* Background accent */}
      {!noGradient && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            {Icon && (
              <div className="p-2 rounded-lg bg-emeraldx/10 border border-emeraldx/30">
                <Icon className="w-6 h-6 text-emeraldx" />
              </div>
            )}
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>

          {subtitle && (
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}

          {/* Decorative line */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-emeraldx" />
            <div className="w-2 h-2 rounded-full bg-emeraldx" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyanx" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
