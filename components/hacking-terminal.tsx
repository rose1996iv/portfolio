"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const defaultResearchLines = [
  "Analyzing Adversarial Attacks...",
  "Hardening CNN Malware Models...",
  "Implementing Randomized Smoothing...",
  "Building Lai AI Cultural Intelligence...",
  "Mapping Malware Family Drift...",
  "Teaching Computer Science Systems...",
  "Validating Certified Radius Bounds...",
];

type HackingTerminalProps = {
  lines?: string[];
  prompt?: string;
  className?: string;
};

export function HackingTerminal({
  lines = defaultResearchLines,
  prompt = "joseph@research-lab:~$",
  className,
}: HackingTerminalProps) {
  const activeLines = lines.length > 0 ? lines : defaultResearchLines;
  const [activeIndex, setActiveIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);

  const activeLine = activeLines[activeIndex % activeLines.length];
  const typedText = activeLine.slice(0, charIndex);

  useEffect(() => {
    if (charIndex < activeLine.length) {
      const timeout = window.setTimeout(() => {
        setCharIndex((current) => current + 1);
      }, 34);

      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      setCompletedLines((current) => [...current, activeLine].slice(-3));
      setActiveIndex((current) => (current + 1) % activeLines.length);
      setCharIndex(0);
    }, 900);

    return () => window.clearTimeout(timeout);
  }, [activeLine, activeLines.length, charIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.88, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "glass-panel mt-8 max-w-2xl overflow-hidden rounded-[8px] bg-black/[0.42] font-mono",
        className,
      )}
    >
      <div className="flex min-h-11 items-center justify-between gap-4 border-b border-emeraldx/[0.14] bg-white/[0.035] px-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-emeraldx" />
        </div>
        <div className="flex items-center gap-2 text-xs text-white/[0.58]">
          <Terminal className="h-3.5 w-3.5 text-cyanx" aria-hidden="true" />
          research-terminal
        </div>
      </div>

      <div className="min-h-[178px] p-4 text-sm leading-7 sm:text-base" aria-live="polite">
        <div className="mb-3 flex items-center gap-2 text-xs text-emeraldx">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          secure-ai-scan --interest-stream
        </div>

        <div className="space-y-1.5">
          {completedLines.map((line, index) => (
            <p key={`${line}-${index}`} className="flex gap-2 text-white/[0.62]">
              <span className="shrink-0 text-cyanx">{prompt}</span>
              <span>{line}</span>
            </p>
          ))}

          <p className="flex gap-2 text-white/[0.86]">
            <span className="shrink-0 text-emeraldx">{prompt}</span>
            <span>
              {typedText}
              <motion.span
                aria-hidden="true"
                className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-emeraldx"
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
