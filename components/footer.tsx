"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, MapPin, Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/lib/profile-v2";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const socialLinks = [
    {
      name: "GitHub",
      href: profile.githubUrl,
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: profile.linkedinUrl,
      icon: Linkedin,
    },
  ];

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 420);

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      id="contact"
      className="relative border-t border-white/10 bg-gradient-to-b from-background via-background/50 to-background"
    >
      <motion.button
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-lg bg-emeraldx/10 text-emeraldx hover:bg-emeraldx/20 transition-all ${
          showScrollTop ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white">{profile.name}</h3>
              <p className="mt-1 text-sm text-white/60">{profile.title}</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <MapPin className="h-4 w-4 flex-shrink-0 text-cyanx" />
              <span>{profile.location}</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80">
              Contact
            </h4>
            <div className="space-y-2">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-emeraldx"
              >
                <Mail className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                Email
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80">
              Social
            </h4>
            <div className="space-y-2">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-emeraldx"
                >
                  <Icon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  {name}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80">
              GitHub Stats
            </h4>
            <div className="space-y-2 text-sm">
              <div className="text-white/60">
                <span className="font-semibold text-white">{profile.github.publicRepos}</span>{" "}
                Public Repos
              </div>
              <div className="text-white/60">
                <span className="font-semibold text-white">{profile.github.followers}</span>{" "}
                Followers
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5" />

        <div className="mt-12 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="flex items-center gap-2 text-xs text-white/50">
            Made with <Heart className="h-3 w-3 fill-emeraldx text-emeraldx" /> by{" "}
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/70 transition-colors hover:text-emeraldx"
            >
              {profile.name}
            </a>
          </p>

          <p className="text-xs text-white/50">
            (c) {currentYear} {profile.name}. All rights reserved.
          </p>

          <div className="text-xs text-white/50">GitHub data updated {profile.github.updated}</div>
        </div>
      </div>
    </footer>
  );
}
