import { cn } from "@/lib/utils";

type DotPatternProps = {
  className?: string;
};

export function DotPattern({ className }: DotPatternProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(0,245,160,0.22)_1px,transparent_1px)] bg-[size:24px_24px]",
        className,
      )}
    />
  );
}
