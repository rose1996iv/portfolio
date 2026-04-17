"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, ShieldCheck } from "lucide-react";
import { HackingTerminal } from "@/components/hacking-terminal";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { WordPullUp } from "@/components/magicui/word-pull-up";
import { TechOrbit } from "@/components/tech-orbit";
import { profile } from "@/lib/profile";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8"
    >
      <RetroGrid />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_420px]">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 rounded-[8px] border border-emeraldx/25 bg-emeraldx/[0.08] px-3 py-2 text-sm text-emeraldx"
          >
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Certified robustness, malware intelligence, applied AI
          </motion.div>

          <WordPullUp
            text={`${profile.name} | ${profile.title}`}
            className="max-w-4xl text-5xl font-black leading-[1.04] text-white sm:text-6xl lg:text-7xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.56, duration: 0.55, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-base leading-8 text-white/[0.72] sm:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.55, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <ShinyButton href="#research">
              View Thesis <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </ShinyButton>
            <ShinyButton href="https://github.com/" target="_blank" rel="noreferrer" variant="secondary">
              Open GitHub <Github className="ml-2 h-4 w-4" aria-hidden="true" />
            </ShinyButton>
          </motion.div>

          <HackingTerminal />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.42, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden min-h-[420px] lg:block"
          id="stack"
        >
          <TechOrbit />
        </motion.div>
      </div>
    </section>
  );
}
