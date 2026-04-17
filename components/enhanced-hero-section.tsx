"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { ShinyButton } from "./magicui/shiny-button";

export function EnhancedHeroSection() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/rose1996iv",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/joseph-61734a17a",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:josephsaimonn@gmail.com",
      label: "Email",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center pt-16"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800" />

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        {/* Glow orbs */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-emeraldx/20 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-cyanx/20 rounded-full blur-3xl opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emeraldx/10 border border-emeraldx/30 text-emeraldx text-sm font-medium">
            <span className="w-2 h-2 bg-emeraldx rounded-full animate-pulse" />
            Welcome to My Portfolio
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              Hi, I&apos;m
            </span>
            <br />
            <span className="bg-gradient-to-r from-emeraldx via-cyanx to-emeraldx bg-clip-text text-transparent">Joseph</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            CS Researcher specializing in <span className="text-emeraldx font-semibold">Cybersecurity</span>,{" "}
            <span className="text-cyanx font-semibold">Adversarial ML</span>, and{" "}
            <span className="text-emeraldx font-semibold">AI Security</span>.
          </p>
          <p className="text-sm text-slate-400 mt-3">
            Building certified robust neural networks and malware defense systems at GEHU.
          </p>
          <p className="text-sm text-slate-400 mt-3">
            Building certified robust neural networks and malware defense systems at GEHU.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <ShinyButton
            onClick={() => scrollToSection("projects")}
            className="text-base"
          >
            View My Work
          </ShinyButton>

          <motion.a
            href="https://github.com/rose1996iv"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg border-2 border-slate-600 text-white font-semibold hover:border-emeraldx hover:text-emeraldx hover:bg-emeraldx/5 transition-all"
          >
            Explore on GitHub
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-emeraldx hover:border-emeraldx hover:bg-emeraldx/10 transition-all"
                title={link.label}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("about")}
          className="p-3 rounded-full border border-slate-600 text-slate-400 hover:text-emeraldx hover:border-emeraldx transition-all"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
}
