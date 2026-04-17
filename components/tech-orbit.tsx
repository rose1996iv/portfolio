"use client";

import Image from "next/image";
import { BrainCircuit, DatabaseZap, Shield, TerminalSquare } from "lucide-react";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

const orbitItems = [
  {
    label: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    label: "Flutter",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    label: "TensorFlow",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    label: "Docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
];

export function TechOrbit() {
  return (
    <div className="relative h-[420px] w-full">
      <div className="absolute inset-10 rounded-full border border-cyanx/[0.12]" />
      <div className="absolute inset-20 rounded-full border border-emeraldx/[0.14]" />
      <OrbitingCircles radius={148} duration={26}>
        {orbitItems.map((item) => (
          <Image
            key={item.label}
            src={item.src}
            alt={`${item.label} logo`}
            width={28}
            height={28}
            unoptimized
            className="h-7 w-7 object-contain"
          />
        ))}
      </OrbitingCircles>
      <OrbitingCircles radius={94} duration={18} itemClassName="h-11 w-11 border-cyanx/[0.22]">
        {[
          <Shield key="shield" className="h-5 w-5 text-emeraldx" aria-label="Security" />,
          <BrainCircuit key="brain" className="h-5 w-5 text-cyanx" aria-label="AI" />,
          <TerminalSquare key="terminal" className="h-5 w-5 text-emeraldx" aria-label="Systems" />,
          <DatabaseZap key="data" className="h-5 w-5 text-cyanx" aria-label="Data" />,
        ]}
      </OrbitingCircles>

      <div className="glass-panel absolute left-1/2 top-1/2 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[8px]">
        <div className="flex items-center gap-3">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python logo"
            width={48}
            height={48}
            unoptimized
            className="h-12 w-12"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React logo"
            width={48}
            height={48}
            unoptimized
            className="h-12 w-12"
          />
        </div>
        <span className="font-mono text-xs text-white/60">research stack</span>
      </div>
    </div>
  );
}
