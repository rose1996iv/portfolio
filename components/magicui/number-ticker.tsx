"use client";

import {
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type NumberTickerProps = {
  value: number;
  decimalPlaces?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function NumberTicker({
  value,
  decimalPlaces = 0,
  prefix = "",
  suffix = "",
  duration = 1.6,
  className,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(latest),
    });

    return controls.stop;
  }, [duration, inView, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue.toFixed(decimalPlaces)}
      {suffix}
    </span>
  );
}
