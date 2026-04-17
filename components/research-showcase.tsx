"use client";

import { motion } from "framer-motion";
import { Activity, Binary, LockKeyhole, ShieldCheck } from "lucide-react";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { profile } from "@/lib/profile";

const metrics = [
  {
    label: "Average Certified Radius (ACR)",
    value: 0.72,
    decimalPlaces: 2,
    suffix: "",
  },
  {
    label: "Certified Accuracy Delta",
    value: 18.4,
    decimalPlaces: 1,
    suffix: "%",
  },
  {
    label: "Hybrid Defense Modules",
    value: 4,
    decimalPlaces: 0,
    suffix: "",
  },
  {
    label: "Threat Models Evaluated",
    value: 3,
    decimalPlaces: 0,
    suffix: "",
  },
];

const pipeline = [
  { icon: Binary, label: "Input hardening" },
  { icon: Activity, label: "CNN inference" },
  { icon: ShieldCheck, label: "Certification bound" },
  { icon: LockKeyhole, label: "Defense report" },
];

export function ResearchShowcase() {
  return (
    <section id="research" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 max-w-3xl"
        >
          <p className="font-mono text-sm text-emeraldx">M.Tech Thesis</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
            {profile.thesis.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-white/70">
            Robust neural defense research for adversarial and malware-oriented
            environments, combining certification logic with practical CNN
            pipelines.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel metric-grid relative overflow-hidden rounded-[8px] p-5 sm:p-7 lg:p-8"
        >
          <DotPattern className="opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent_76%)]" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <div className="inline-flex rounded-[8px] border border-cyanx/20 bg-cyanx/[0.08] px-3 py-2 font-mono text-xs text-cyanx">
                certified robustness lab
              </div>
              <h3 className="mt-6 max-w-2xl text-2xl font-bold text-white sm:text-3xl">
                A hybrid certification workflow for CNN defenses under security
                pressure.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/[0.68] sm:text-base">
                The thesis centers on measurable resilience: radius estimates,
                certified accuracy, attack-aware evaluation, and implementation
                paths that can move from experiment notebooks into real tools.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-4">
                {pipeline.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.label}
                      className="rounded-[8px] border border-white/10 bg-background/[0.76] p-3"
                    >
                      <Icon className="h-5 w-5 text-emeraldx" aria-hidden="true" />
                      <p className="mt-3 text-xs font-semibold text-white/[0.78]">
                        {step.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[8px] border border-emeraldx/[0.14] bg-black/[0.35] p-5"
                >
                  <p className="text-sm leading-6 text-white/[0.62]">{metric.label}</p>
                  <div className="mt-4 font-mono text-4xl font-bold text-emeraldx">
                    <NumberTicker
                      value={metric.value}
                      decimalPlaces={metric.decimalPlaces}
                      suffix={metric.suffix}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
