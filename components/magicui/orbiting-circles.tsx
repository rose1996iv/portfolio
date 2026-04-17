"use client";

import { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type OrbitingCirclesProps = {
  children: ReactNode[];
  radius?: number;
  duration?: number;
  className?: string;
  itemClassName?: string;
};

export function OrbitingCircles({
  children,
  radius = 118,
  duration = 22,
  className,
  itemClassName,
}: OrbitingCirclesProps) {
  const items = Array.isArray(children) ? children : [children];

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 grid place-items-center", className)}
      style={{ "--orbit-radius": `${radius}px` } as CSSProperties}
    >
      <motion.div
        aria-hidden="true"
        className="absolute h-[calc(var(--orbit-radius)*2)] w-[calc(var(--orbit-radius)*2)] rounded-full border border-emeraldx/[0.18]"
        animate={{ rotate: 360 }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {items.map((child, index) => {
          const angle = (index / items.length) * Math.PI * 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={index}
              className={cn(
                "absolute left-1/2 top-1/2 grid h-12 w-12 place-items-center rounded-[8px] border border-emeraldx/20 bg-background/90 shadow-cyan backdrop-blur",
                itemClassName,
              )}
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              <motion.div
                className="grid h-full w-full place-items-center"
                animate={{ rotate: -360 }}
                transition={{ duration, ease: "linear", repeat: Infinity }}
              >
                {child}
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
