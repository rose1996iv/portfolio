"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type WordPullUpProps = {
  text: string;
  className?: string;
};

export function WordPullUp({ text, className }: WordPullUpProps) {
  const words = text.split(" ");

  return (
    <h1 className={cn("flex flex-wrap items-center gap-x-3 gap-y-2", className)}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: 54, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.58,
              delay: 0.08 * index,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
