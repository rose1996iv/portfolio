/**
 * Enhanced Profile Types
 */

import {
  Award,
  Briefcase,
  BrainCircuit,
  Bot,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Network,
  ShieldAlert,
  Sparkles,
  TerminalSquare,
  TrendingUp,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type Skill = {
  label: string;
  icon: LucideIcon;
  category?: "Frontend" | "Backend" | "AI/ML" | "DevOps" | "Other";
  proficiency?: "Expert" | "Advanced" | "Intermediate" | "Beginner";
};

export type Project = {
  name: string;
  repo: string;
  description: string;
  language: string;
  stars: number;
  updated: string;
  demo?: string;
  topics?: string[];
  featured?: boolean;
};

export type Education = {
  degree: string;
  institution: string;
  shortInstitution: string;
  focus: string;
  status: string;
  period: string;
  gpa?: string;
  achievements?: string[];
};

export type Experience = {
  role: string;
  organization: string;
  period: string;
  detail: string;
  highlights?: string[];
  technologies?: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
};

export type Achievement = {
  title: string;
  description: string;
  date: string;
  icon: LucideIcon;
  category: "award" | "publication" | "project" | "competition";
};

export type Statistic = {
  label: string;
  value: string | number;
  suffix?: string;
  icon: LucideIcon;
};

export const profile = {
  // Basic Info
  name: "Joseph",
  title: "CS Researcher & AI Developer",
  subtitle: "Cybersecurity | Adversarial ML | Malware Defense",
  location: "Dehradun, Uttarakhand, India",
  timezone: "IST (UTC+5:30)",
  email: "josephsaimonn@gmail.com",

  // Social Links
  social: {
    github: "https://github.com/rose1996iv",
    linkedin: "https://www.linkedin.com/in/joseph-61734a17a",
    twitter: "https://twitter.com/joseph_research",
    email: "josephsaimonn@gmail.com",
  },

  // URLs
  linkedinUrl: "https://www.linkedin.com/in/joseph-61734a17a",
  githubUrl: "https://github.com/rose1996iv",
  portfolioUrl: "https://rose1996iv.github.io/portfolio/",

  // Professional Summary
  summary:
    "M.Tech Computer Science & Engineering student specializing in Cybersecurity, AI, and Data Science, building research-grade AI systems, malware defense pipelines, and community-focused software. Passionate about certified adversarial robustness and practical AI security.",

  bio: "Researcher focused on certified hybrid CNN defenses against adversarial attacks. Building scalable AI systems for cybersecurity applications with emphasis on randomized smoothing and robustness certification.",

  // Statistics (Auto-updated from GitHub)
  statistics: [
    { label: "Public Repos", value: 0, icon: Code2 },
    { label: "GitHub Followers", value: 0, icon: Users },
    { label: "Years Experience", value: 2, icon: Briefcase },
    { label: "Projects Completed", value: 4, icon: TrendingUp },
  ] as Statistic[],

  // Thesis/Research Focus
  thesis: {
    title: "Certified Hybrid CNN Defenses",
    focus:
      "Certified robustness, adversarial attacks, randomized smoothing, and attack-aware CNN hardening.",
    abstract:
      "Research on developing certified defenses for neural networks against adversarial perturbations using hybrid CNN architectures and randomized smoothing techniques.",
    keywords: [
      "Adversarial Robustness",
      "CNN Defense",
      "Randomized Smoothing",
      "Certified Defenses",
      "Malware Detection",
    ],
  },

  // Education
  education: [
    {
      degree: "M.Tech",
      institution: "Graphic Era Hill University",
      shortInstitution: "GEHU",
      focus: "Computer Science and Engineering with Cybersecurity, AI, and Data Science",
      status: "Currently Pursuing",
      period: "October 2024 - July 2026",
      gpa: "9.0/10",
      achievements: [
        "Research focus on certified adversarial defenses",
        "Published research papers on malware defense",
        "Project lead for hybrid CNN malware detector",
      ],
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
  ] as Education[],

  // Experience
  experience: [
    {
      role: "M.Tech Student & Researcher",
      organization: "Graphic Era Hill University",
      period: "October 2024 - Present",
      detail:
        "Conducting research on certified adversarial robustness and developing malware defense systems.",
      highlights: [
        "Leading research on certified CNN defenses using randomized smoothing",
        "Developing hybrid malware detection systems",
        "Publishing research findings in academic venues",
      ],
      technologies: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "Streamlit"],
    },
    {
      role: "Computer Science Teacher",
      organization: "Victoria Academy, Hakha",
      period: "September 2022 - Present",
      detail: "Teaching computer science and supporting practical technical learning.",
      highlights: [
        "Curriculum development for CS subjects",
        "Mentoring students in programming and algorithms",
        "Organizing coding competitions and workshops",
      ],
      technologies: ["Python", "Java", "Data Structures", "Algorithms"],
    },
    {
      role: "Manager",
      organization: "Beacon Academy",
      period: "April 2017 - April 2019",
      detail: "Handled managerial responsibilities and team coordination.",
      highlights: [
        "Team management and coordination",
        "Administrative oversight",
        "Student support and guidance",
      ],
    },
    {
      role: "President",
      organization: "Technological Christian Fellowship",
      period: "January 2017 - January 2020",
      detail: "Led collaboration, mentoring, and community activities.",
      highlights: [
        "Community engagement and mentoring",
        "Event organization and management",
        "Building collaborative relationships",
      ],
    },
  ] as Experience[],

  // Certifications
  certifications: [
    {
      name: "ANZ - Cyber Security Management Job Simulation",
      issuer: "ANZ",
      date: "2024",
    },
    {
      name: "Generative AI: Introduction and Applications",
      issuer: "Coursera",
      date: "2024",
    },
    {
      name: "Python Data Associate",
      issuer: "DataCamp",
      date: "2024",
    },
    {
      name: "Generative Adversarial Networks (GANs) Specialization",
      issuer: "Coursera",
      date: "2023",
    },
    {
      name: "Adobe Premiere Pro for Beginners: Quickstart Video-Editing",
      issuer: "Udemy",
      date: "2023",
    },
  ] as Certification[],

  // Skills (Categorized)
  skills: [
    // Frontend
    { label: "Next.js", icon: Code2, category: "Frontend", proficiency: "Advanced" },
    {
      label: "React",
      icon: Layers3,
      category: "Frontend",
      proficiency: "Advanced",
    },
    {
      label: "TypeScript",
      icon: TerminalSquare,
      category: "Frontend",
      proficiency: "Advanced",
    },
    {
      label: "JavaScript",
      icon: Code2,
      category: "Frontend",
      proficiency: "Advanced",
    },
    {
      label: "Tailwind CSS",
      icon: Sparkles,
      category: "Frontend",
      proficiency: "Advanced",
    },

    // Backend
    {
      label: "Python",
      icon: BrainCircuit,
      category: "Backend",
      proficiency: "Expert",
    },
    {
      label: "Django",
      icon: Briefcase,
      category: "Backend",
      proficiency: "Advanced",
    },
    { label: "Node.js", icon: Bot, category: "Backend", proficiency: "Advanced" },
    { label: "Java", icon: Code2, category: "Backend", proficiency: "Intermediate" },
    { label: "C#", icon: Code2, category: "Backend", proficiency: "Intermediate" },

    // AI/ML
    {
      label: "CNN",
      icon: Sparkles,
      category: "AI/ML",
      proficiency: "Expert",
    },
    {
      label: "Adversarial ML",
      icon: ShieldAlert,
      category: "AI/ML",
      proficiency: "Expert",
    },
    {
      label: "Malware Defense",
      icon: ShieldAlert,
      category: "AI/ML",
      proficiency: "Advanced",
    },
    {
      label: "Randomized Smoothing",
      icon: Database,
      category: "AI/ML",
      proficiency: "Advanced",
    },
    {
      label: "AI & Data Science",
      icon: GraduationCap,
      category: "AI/ML",
      proficiency: "Advanced",
    },

    // DevOps
    {
      label: "Docker",
      icon: Cloud,
      category: "DevOps",
      proficiency: "Intermediate",
    },
    {
      label: "AWS",
      icon: Cloud,
      category: "DevOps",
      proficiency: "Intermediate",
    },
    {
      label: "Git",
      icon: Code2,
      category: "DevOps",
      proficiency: "Advanced",
    },

    // Other
    {
      label: "Computer Networking",
      icon: Network,
      category: "Other",
      proficiency: "Advanced",
    },
    {
      label: "Cybersecurity",
      icon: ShieldAlert,
      category: "Other",
      proficiency: "Advanced",
    },
    {
      label: "REST APIs",
      icon: Zap,
      category: "Other",
      proficiency: "Advanced",
    },
  ] as Skill[],

  // Projects (Auto-updated from GitHub)
  projects: [
    {
      name: "Lai AI 2.0",
      repo: "https://github.com/rose1996iv/LaiAIv2",
      description:
        "Leoliver's Assistant Intelligence bridges advanced AI with Hakha Lai cultural values as a wise digital mentor for the community.",
      language: "TypeScript",
      stars: 0,
      updated: "April 14, 2026",
      topics: ["AI", "NLP", "Cultural Tech"],
      featured: true,
    },
    {
      name: "Certified Malware Defense",
      repo: "https://github.com/rose1996iv/Certified-Malware-Defense",
      description:
        "Certified hybrid CNN defense framework for adversarially robust malware detection, family attribution, and randomized smoothing certification.",
      language: "Python",
      stars: 1,
      updated: "April 7, 2026",
      topics: ["Cybersecurity", "ML", "Research"],
      featured: true,
    },
    {
      name: "Advanced Matrix",
      repo: "https://github.com/rose1996iv/Advanced-Matrix",
      description:
        "Cinematic Matrix rain wallpaper with webcam vision, audio reactivity, parallax, CRT overlay, and hacker terminal effects.",
      language: "JavaScript",
      stars: 1,
      updated: "March 26, 2026",
      topics: ["Graphics", "Web", "Animation"],
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
      topics: ["Malware", "CNN", "Security"],
      featured: true,
    },
  ] as Project[],

  // Achievements/Awards
  achievements: [
    {
      title: "Research Publication",
      description: "Published research on certified adversarial defenses in malware detection",
      date: "2025",
      icon: Award,
      category: "publication",
    },
    {
      title: "Hybrid CNN Malware Detector",
      description: "Developed advanced hybrid CNN system achieving high accuracy in malware classification",
      date: "2025",
      icon: ShieldAlert,
      category: "project",
    },
    {
      title: "M.Tech Scholar",
      description: "Pursuing M.Tech with focus on cybersecurity and adversarial ML",
      date: "2024",
      icon: GraduationCap,
      category: "award",
    },
  ] as Achievement[],

  // GitHub Stats (Auto-updated)
  github: {
    username: "rose1996iv",
    displayName: "Joseph",
    publicRepos: 19,
    followers: 0,
    following: 3,
    updated: "April 17, 2026",
  },

  // Additional Info
  interests: [
    "Adversarial Machine Learning",
    "Cybersecurity Research",
    "Certified Robustness",
    "Malware Analysis",
    "AI Ethics",
    "Open Source",
  ],

  languages: [
    { name: "English", proficiency: "Fluent" },
    { name: "Burmese", proficiency: "Native" },
    { name: "Shan", proficiency: "Native" },
  ],

  // Availability
  availability: {
    status: "Available for collaboration",
    responseTime: "Within 24-48 hours",
  },
};
