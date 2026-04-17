import {
  BrainCircuit,
  Bot,
  BriefcaseBusiness,
  Cloud,
  Code2,
  DatabaseZap,
  FileBadge,
  GraduationCap,
  Layers3,
  Network,
  ShieldAlert,
  Sparkles,
  TerminalSquare,
  type LucideIcon,
} from "lucide-react";

export type Skill = {
  label: string;
  icon: LucideIcon;
};

export type Project = {
  name: string;
  repo: string;
  description: string;
  language: string;
  stars: number;
  updated: string;
  demo?: string;
};

export const profile = {
  name: "Joseph",
  title: "CS Researcher & AI Developer",
  location: "Dehradun, Uttarakhand, India",
  email: "josephsaimonn@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/joseph-61734a17a",
  githubUrl: "https://github.com/rose1996iv",
  portfolioUrl: "https://rose1996iv.github.io/portfolio/",
  summary:
    "M.Tech Computer Science & Engineering student specializing in Cybersecurity, AI, and Data Science, building research-grade AI systems, malware defense pipelines, and community-focused software.",
  education: [
    {
      degree: "M.Tech",
      institution: "Graphic Era Hill University",
      shortInstitution: "GEHU",
      focus: "Computer Science and Engineering with Cybersecurity, AI, and Data Science",
      status: "M.Tech CSE student",
      period: "October 2024 - July 2026",
    },
    {
      degree: "Diploma",
      institution: "ChinBridge Institute",
      shortInstitution: "ChinBridge",
      focus: "Politics and Governance",
      status: "Completed",
      period: "January 2023 - December 2023",
    },
    {
      degree: "Bachelor of Engineering",
      institution: "Technological University (Kalay)",
      shortInstitution: "TU Kalay",
      focus: "Electronics Engineering",
      status: "Completed",
      period: "December 2017 - November 2019",
    },
    {
      degree: "Bachelor of Technology",
      institution: "Technological University, Kalay",
      shortInstitution: "TU Kalay",
      focus: "Electronic Engineering",
      status: "Completed",
      period: "December 2013 - January 2017",
    },
  ],
  experience: [
    {
      role: "Student",
      organization: "Graphic Era Hill University",
      period: "October 2024 - Present",
      detail: "Master of Technology in Computer Science and Engineering.",
    },
    {
      role: "Computer Science Teacher",
      organization: "Victoria Academy, Hakha",
      period: "September 2022 - Present",
      detail: "Teaching computer science and supporting practical technical learning.",
    },
    {
      role: "Manager",
      organization: "Beacon Academy",
      period: "April 2017 - April 2019",
      detail: "Handled managerial responsibilities and team coordination.",
    },
    {
      role: "President",
      organization: "Technological Christian Fellowship",
      period: "January 2017 - January 2020",
      detail: "Led collaboration, mentoring, and community activities.",
    },
  ],
  thesis: {
    title: "Certified Hybrid CNN Defenses",
    focus:
      "Certified robustness, adversarial attacks, randomized smoothing, and attack-aware CNN hardening.",
  },
  github: {
    username: "rose1996iv",
    displayName: "Beacon Academy",
    publicRepos: 19,
    followers: 0,
    following: 3,
    updated: "March 27, 2026",
  },
  projects: [
    {
      name: "Lai AI 2.0",
      repo: "https://github.com/rose1996iv/LaiAIv2",
      description:
        "Leoliver's Assistant Intelligence bridges advanced AI with Hakha Lai cultural values as a wise digital mentor for the community.",
      language: "TypeScript",
      stars: 0,
      updated: "April 14, 2026",
    },
    {
      name: "Certified Malware Defense",
      repo: "https://github.com/rose1996iv/Certified-Malware-Defense",
      description:
        "Certified hybrid CNN defense framework for adversarially robust malware detection, family attribution, and randomized smoothing certification.",
      language: "Python",
      stars: 1,
      updated: "April 7, 2026",
    },
    {
      name: "Advanced Matrix",
      repo: "https://github.com/rose1996iv/Advanced-Matrix",
      description:
        "Cinematic Matrix rain wallpaper with webcam vision, audio reactivity, parallax, CRT overlay, and hacker terminal effects.",
      language: "JavaScript",
      stars: 1,
      updated: "March 26, 2026",
    },
    {
      name: "Hybrid CNN Malware Detector",
      repo: "https://github.com/rose1996iv/hybrid-cnn-malware-detector",
      demo: "https://hybrid-cnn-malware-detector.streamlit.app/",
      description:
        "Zero-day malware research system that fuses static binary-image features with dynamic network logs for resilient CNN classification.",
      language: "Python",
      stars: 0,
      updated: "February 20, 2026",
    },
  ] satisfies Project[],
  certifications: [
    "ANZ - Cyber Security Management Job Simulation",
    "Generative AI: Introduction and Applications",
    "Python Data Associate",
    "Generative Adversarial Networks (GANs) Specialization",
    "Adobe Premiere Pro for Beginners: Quickstart Video-Editing",
  ],
  skills: [
    { label: "Next.js", icon: Code2 },
    { label: "React", icon: Layers3 },
    { label: "TypeScript", icon: TerminalSquare },
    { label: "Python", icon: BrainCircuit },
    { label: "JavaScript", icon: Code2 },
    { label: "Java", icon: FileBadge },
    { label: "C#", icon: FileBadge },
    { label: "Node.js", icon: Bot },
    { label: "Django", icon: BriefcaseBusiness },
    { label: "Docker", icon: Cloud },
    { label: "AWS", icon: Cloud },
    { label: "Computer Networking", icon: Network },
    { label: "Cybersecurity", icon: ShieldAlert },
    { label: "CNN", icon: Sparkles },
    { label: "Malware Defense", icon: ShieldAlert },
    { label: "Randomized Smoothing", icon: DatabaseZap },
    { label: "Adversarial ML", icon: ShieldAlert },
    { label: "AI & Data Science", icon: GraduationCap },
  ] satisfies Skill[],
};
