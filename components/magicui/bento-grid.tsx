import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BentoGrid({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

type BentoCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function BentoCard({ className, children, ...props }: BentoCardProps) {
  return (
    <article
      className={cn(
        "glass-panel relative overflow-hidden rounded-[8px] p-5 transition duration-300 hover:border-emeraldx/40 hover:shadow-glow",
        className,
      )}
      {...props}
    >
      {children}
    </article>
  );
}
