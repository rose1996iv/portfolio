"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

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

export function EnhancedNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50 shadow-2xl shadow-emeraldx/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-emeraldx to-cyanx flex items-center justify-center font-bold text-slate-900 group-hover:shadow-lg group-hover:shadow-emeraldx/50 transition-all">
                J
              </div>
              <span className="font-bold text-white hidden sm:inline">
                Joseph
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setActiveSection(item.label.toLowerCase())}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all relative group ${
                  activeSection === item.label.toLowerCase()
                    ? "text-emeraldx"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.label.toLowerCase() && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-emeraldx/10 rounded-lg -z-10"
                    transition={{ type: "spring", bounce: 0.2 }}
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emeraldx to-cyanx scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.a>
            ))}
          </div>

          {/* Social Links & Mobile Toggle */}
          <div className="flex items-center gap-2">
            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center gap-2 pl-4 border-l border-slate-700/50">
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
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                    className="p-2 rounded-lg text-slate-400 hover:text-emeraldx hover:bg-emeraldx/10 transition-all"
                    title={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-emeraldx hover:bg-emeraldx/10 transition-all"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50"
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={() => {
                setActiveSection(item.label.toLowerCase());
                setIsOpen(false);
              }}
              className="block px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-emeraldx/10 transition-all"
            >
              {item.label}
            </motion.a>
          ))}

          {/* Mobile Social Links */}
          <div className="pt-4 border-t border-slate-700/50">
            <div className="flex items-center gap-2 px-4 py-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="p-3 rounded-lg text-slate-400 hover:text-emeraldx hover:bg-emeraldx/10 transition-all flex-1 flex items-center justify-center gap-2"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm">{link.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
