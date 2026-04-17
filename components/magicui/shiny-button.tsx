import { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ShinyButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ShinyButton({
  children,
  className,
  variant = "primary",
  ...props
}: ShinyButtonProps) {
  return (
    <a
      className={cn(
        "focus-ring group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-[8px] border px-5 text-sm font-semibold transition duration-300",
        variant === "primary" &&
          "border-emeraldx/70 bg-emeraldx text-[#04110c] shadow-glow hover:bg-cyanx",
        variant === "secondary" &&
          "border-cyanx/[0.35] bg-white/[0.03] text-cyanx hover:border-emeraldx/60 hover:text-emeraldx",
        className,
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-y-[-30%] left-0 w-10 animate-shimmer bg-white/[0.45] blur-[6px]" />
    </a>
  );
}
