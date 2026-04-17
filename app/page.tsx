"use client";

import { motion } from "framer-motion";
import { Briefcase, BookOpen, Award, Code2, Zap } from "lucide-react";

import { EnhancedNavbar } from "@/components/enhanced-navbar";
import { EnhancedHeroSection } from "@/components/enhanced-hero-section";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { StatsGrid } from "@/components/stats-grid";
import { Timeline } from "@/components/timeline";
import { SkillsGrid } from "@/components/skills-grid";
import { AchievementsGrid } from "@/components/achievements-grid";
import { CertificationsGrid } from "@/components/certifications-grid";
import { ProjectCard } from "@/components/project-card";
import { MatrixBackground } from "@/components/matrix-background";

import { profile } from "@/lib/profile-v2";

export default function Home() {
  const projects = profile.projects || [];
  const experience = profile.experience || [];
  const education = profile.education || [];
  const skills = profile.skills || [];
  const achievements = profile.achievements || [];
  const certifications = profile.certifications || [];
  const statistics = profile.statistics || [];

  return (
    <main className="relative w-full bg-slate-900 text-foreground">
      {/* Noise overlay */}
      <div className="noise-overlay pointer-events-none fixed inset-0 z-0 opacity-[0.035]" />

      {/* Matrix Background */}
      <MatrixBackground />

      {/* Navigation */}
      <EnhancedNavbar />

      {/* Hero Section */}
      <EnhancedHeroSection />

      {/* About Section */}
      <Section
        id="about"
        title="About Me"
        subtitle="Learn more about my background, research focus, and what drives my passion for tech"
        icon={Briefcase}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-lg text-slate-300 leading-relaxed">{profile.summary}</p>
            </div>

            {/* Thesis Info */}
            <div className="bg-gradient-to-br from-emeraldx/10 to-cyanx/10 border border-emeraldx/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-emeraldx mb-3">Research Focus</h3>
              <p className="text-slate-300 mb-3">{profile.thesis.focus}</p>
              <div className="flex flex-wrap gap-2">
                {profile.thesis.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="text-xs px-3 py-1 rounded-full bg-emeraldx/20 text-emeraldx border border-emeraldx/30"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <StatsGrid statistics={statistics} />
          </motion.div>
        </div>
      </Section>

      {/* Experience & Education Section */}
      <Section
        id="experience"
        title="Experience & Education"
        subtitle="My professional journey and academic background"
        icon={Briefcase}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyanx/10 border border-cyanx/30">
                <Briefcase className="w-5 h-5 text-cyanx" />
              </div>
              Professional Experience
            </h3>
            <Timeline items={experience} />
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emeraldx/10 border border-emeraldx/30">
                <BookOpen className="w-5 h-5 text-emeraldx" />
              </div>
              Education
            </h3>
            <Timeline items={education} />
          </motion.div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section
        id="skills"
        title="Skills & Expertise"
        subtitle="Technologies and areas where I specialize"
        icon={Code2}
      >
        <SkillsGrid skills={skills} showCategory={true} />
      </Section>

      {/* Projects Section */}
      <Section
        id="projects"
        title="Featured Projects"
        subtitle="Showcase of my recent and notable work"
        icon={Zap}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              language={project.language}
              stars={project.stars}
              repo={project.repo}
              demo={project.demo}
              updated={project.updated}
              topics={project.topics}
              featured={project.featured}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Certifications Section */}
      <Section
        id="certifications"
        title="Certifications & Credentials"
        subtitle="Professional certifications and completed courses"
        icon={Award}
      >
        <CertificationsGrid certifications={certifications} />
      </Section>

      {/* Achievements Section */}
      <Section
        id="achievements"
        title="Achievements & Awards"
        subtitle="Notable accomplishments and recognitions"
        icon={Award}
      >
        <AchievementsGrid achievements={achievements} />
      </Section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
