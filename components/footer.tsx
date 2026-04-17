import { Github, Globe, Linkedin, Mail, MapPin, Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/lib/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      name: "GitHub",
      href: profile.githubUrl,
      icon: Github,
      label: "@rose1996iv",
    },
    {
      name: "LinkedIn",
      href: profile.linkedinUrl,
      icon: Linkedin,
      label: "Joseph",
    },
  ];

  return (
    <footer id="contact" className="relative border-t border-white/10 bg-gradient-to-b from-background via-background/50 to-background">
      {/* Scroll to top button - hidden until scrolled */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-emeraldx/10 text-emeraldx hover:bg-emeraldx/20 transition-all"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white">{profile.name}</h3>
              <p className="mt-1 text-sm text-white/60">{profile.title}</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <MapPin className="h-4 w-4 text-cyanx flex-shrink-0" />
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80">
              Contact
            </h4>
            <div className="space-y-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-emeraldx transition-colors group"
              >
                <Mail className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Email
              </a>
            </div>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80">
              Social
            </h4>
            <div className="space-y-2">
              {socialLinks.map(({ name, href, icon: Icon, label }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-emeraldx transition-colors group"
                >
                  <Icon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80">
              GitHub Stats
            </h4>
            <div className="space-y-2 text-sm">
              <div className="text-white/60">
                <span className="font-semibold text-white">{profile.github.publicRepos}</span>
                {" "}Public Repos
              </div>
              <div className="text-white/60">
                <span className="font-semibold text-white">{profile.github.followers}</span>
                {" "}Followers
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5" />

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="flex items-center gap-2 text-xs text-white/50">
            Made with <Heart className="h-3 w-3 text-emeraldx fill-emeraldx" /> by{" "}
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/70 hover:text-emeraldx transition-colors"
            >
              Joseph
            </a>
          </p>

          <p className="text-xs text-white/50">
            © {currentYear} Joseph. All rights reserved.
          </p>

          <div className="flex gap-4 text-xs text-white/50">
            <a
              href="#"
              className="hover:text-white/70 transition-colors"
            >
              Privacy
            </a>
            <span className="text-white/20">•</span>
            <a
              href="#"
              className="hover:text-white/70 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
