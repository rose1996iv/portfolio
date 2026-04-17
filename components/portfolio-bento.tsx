"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  FileBadge,
  Github,
  GraduationCap,
  Star,
} from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { profile } from "@/lib/profile";

export function PortfolioBento() {
  const [laiAi, certifiedDefense] = profile.projects;
  const additionalProjects = profile.projects.slice(2);
  const primaryEducation = profile.education[0];

  return (
    <section id="work" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 max-w-3xl"
        >
          <p className="font-mono text-sm text-cyanx">Research operating system</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
            Skills, systems, and current focus.
          </h2>
          <p className="mt-4 text-base leading-8 text-white/70">
            A practical stack for experiments, secure applications, and AI-powered
            tools that survive contact with real constraints.
          </p>
        </motion.div>

        <BentoGrid>
          <BentoCard className="md:col-span-3 lg:col-span-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-sm text-emeraldx">Core Skills</p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  Research-ready engineering
                </h3>
              </div>
              <Code2 className="h-9 w-9 text-cyanx" aria-hidden="true" />
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {profile.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.label}
                    className="flex min-h-14 items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.035] px-3"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-emeraldx" aria-hidden="true" />
                    <span className="text-sm font-semibold text-white/[0.78]">
                      {skill.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-3 lg:col-span-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-sm text-cyanx">Project</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{laiAi.name}</h3>
              </div>
              <Github className="h-9 w-9 text-emeraldx" aria-hidden="true" />
            </div>
            <p className="mt-5 text-sm leading-7 text-white/[0.66]">
              {laiAi.description}
            </p>
            <div className="mt-7 flex items-center justify-between rounded-[8px] border border-emeraldx/[0.18] bg-background/70 p-4">
              <div>
                <p className="text-xs text-white/[0.54]">
                  {laiAi.language} repo stars
                </p>
                <div className="mt-1 flex items-center gap-2 font-mono text-3xl font-bold text-emeraldx">
                  <NumberTicker value={laiAi.stars} />
                  <Star className="h-5 w-5 fill-emeraldx text-emeraldx" aria-hidden="true" />
                </div>
              </div>
              <ShinyButton href={laiAi.repo} target="_blank" rel="noreferrer" variant="secondary">
                Repo
              </ShinyButton>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-6 lg:col-span-3">
            <GraduationCap className="h-9 w-9 text-cyanx" aria-hidden="true" />
            <p className="mt-6 font-mono text-sm text-emeraldx">Current Status</p>
            <h3 className="mt-2 text-2xl font-bold leading-9 text-white">
              {primaryEducation.status} at {primaryEducation.shortInstitution}
            </h3>
            <p className="mt-5 text-sm leading-7 text-white/[0.66]">
              {primaryEducation.focus}
            </p>
          </BentoCard>

          <BentoCard className="md:col-span-6 lg:col-span-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-sm text-cyanx">Education</p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  Academic path
                </h3>
              </div>
              <GraduationCap className="h-9 w-9 text-emeraldx" aria-hidden="true" />
            </div>
            <div className="mt-6 grid gap-3">
              {profile.education.slice(0, 4).map((item) => (
                <div
                  key={`${item.degree}-${item.institution}`}
                  className="rounded-[8px] border border-white/10 bg-white/[0.035] p-4"
                >
                  <div className="flex flex-col justify-between gap-2 sm:flex-row">
                    <p className="font-semibold text-white">
                      {item.degree} - {item.focus}
                    </p>
                    <span className="font-mono text-xs text-cyanx">{item.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-white/[0.62]">{item.institution}</p>
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-6 lg:col-span-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-sm text-emeraldx">Experience</p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  Teaching, leadership, research
                </h3>
              </div>
              <BriefcaseBusiness className="h-9 w-9 text-cyanx" aria-hidden="true" />
            </div>
            <div className="mt-6 space-y-4">
              {profile.experience.slice(0, 3).map((item) => (
                <div key={`${item.role}-${item.organization}`}>
                  <div className="flex flex-col justify-between gap-1 sm:flex-row">
                    <p className="font-semibold text-white">{item.role}</p>
                    <span className="font-mono text-xs text-white/[0.52]">{item.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-emeraldx">{item.organization}</p>
                  <p className="mt-2 text-sm leading-6 text-white/[0.62]">{item.detail}</p>
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-6 lg:col-span-7">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="font-mono text-sm text-cyanx">Research Repository</p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  {certifiedDefense.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/[0.66]">
                  {certifiedDefense.description}
                </p>
                <a
                  href={certifiedDefense.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring mt-5 inline-flex items-center gap-2 rounded-[8px] text-sm font-semibold text-emeraldx transition hover:text-cyanx"
                >
                  Open repository
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <div className="rounded-[8px] border border-emeraldx/[0.16] bg-background/70 p-4">
                <p className="font-mono text-xs text-emeraldx">GitHub profile</p>
                <p className="mt-3 text-lg font-semibold text-white">
                  @{profile.github.username}
                </p>
                <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-[8px] border border-white/10 bg-white/[0.035] p-3">
                    <p className="font-mono text-2xl font-bold text-emeraldx">
                      {profile.github.publicRepos}
                    </p>
                    <p className="mt-1 text-xs text-white/[0.54]">repos</p>
                  </div>
                  <div className="rounded-[8px] border border-white/10 bg-white/[0.035] p-3">
                    <p className="font-mono text-2xl font-bold text-cyanx">
                      {profile.github.followers}
                    </p>
                    <p className="mt-1 text-xs text-white/[0.54]">followers</p>
                  </div>
                  <div className="rounded-[8px] border border-white/10 bg-white/[0.035] p-3">
                    <p className="font-mono text-2xl font-bold text-emeraldx">
                      {profile.github.following}
                    </p>
                    <p className="mt-1 text-xs text-white/[0.54]">following</p>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-6 lg:col-span-5">
            <FileBadge className="h-9 w-9 text-emeraldx" aria-hidden="true" />
            <p className="mt-6 font-mono text-sm text-cyanx">Certifications</p>
            <div className="mt-5 space-y-3">
              {profile.certifications.slice(0, 5).map((certification) => (
                <p
                  key={certification}
                  className="rounded-[8px] border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-white/[0.72]"
                >
                  {certification}
                </p>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-6 lg:col-span-12">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-sm text-cyanx">Featured repositories</p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  Applied builds and research systems
                </h3>
              </div>
              <Github className="h-9 w-9 text-emeraldx" aria-hidden="true" />
            </div>
            <div className="mt-6 grid gap-3 lg:grid-cols-2">
              {additionalProjects.map((project) => (
                <div
                  key={project.repo}
                  className="rounded-[8px] border border-white/10 bg-white/[0.035] p-4"
                >
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <p className="font-semibold text-white">{project.name}</p>
                      <p className="mt-2 text-sm leading-6 text-white/[0.62]">
                        {project.description}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-[8px] border border-cyanx/[0.24] bg-cyanx/[0.08] px-2.5 py-1 font-mono text-xs text-cyanx">
                      {project.language}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring inline-flex items-center gap-2 rounded-[8px] text-sm font-semibold text-emeraldx transition hover:text-cyanx"
                    >
                      Repository
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring inline-flex items-center gap-2 rounded-[8px] text-sm font-semibold text-cyanx transition hover:text-emeraldx"
                      >
                        Live demo
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ) : null}
                    <span className="font-mono text-xs text-white/[0.48]">
                      Updated {project.updated}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>
        </BentoGrid>
      </div>
    </section>
  );
}
