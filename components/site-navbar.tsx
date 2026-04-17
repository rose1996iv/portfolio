"use client";

import { motion } from "framer-motion";
import { BookOpen, Cpu, FlaskConical, Home, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#research", label: "Research", icon: FlaskConical },
  { href: "#stack", label: "Stack", icon: Cpu },
  { href: "#work", label: "Work", icon: BookOpen },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function SiteNavbar() {
  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-3xl -translate-x-1/2"
      aria-label="Primary navigation"
    >
      <div className="glass-panel flex h-14 items-center justify-between rounded-[8px] px-2 sm:px-3">
        <a
          href="#home"
          className="focus-ring hidden rounded-[8px] px-3 py-2 font-mono text-xs font-semibold text-emeraldx sm:block"
        >
          joseph.sec.ai
        </a>
        <div className="flex w-full items-center justify-between gap-1 sm:w-auto sm:justify-end">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring group inline-flex h-10 min-w-10 items-center justify-center rounded-[8px] px-2 text-sm text-white/70 transition",
                  "hover:bg-white/[0.06] hover:text-emeraldx sm:min-w-0 sm:px-3",
                )}
              >
                <Icon className="h-4 w-4 sm:mr-2" aria-hidden="true" />
                <span className="hidden sm:inline">{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
