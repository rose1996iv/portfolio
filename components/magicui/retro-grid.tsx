import { cn } from "@/lib/utils";

type RetroGridProps = {
  className?: string;
};

export function RetroGrid({ className }: RetroGridProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden opacity-80",
        className,
      )}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-cyanx/30" />
      <div className="absolute inset-0 [perspective:220px]">
        <div className="absolute inset-x-[-16%] bottom-[-28%] h-[72%] origin-bottom animate-grid overflow-hidden [transform:rotateX(64deg)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,245,160,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(50,213,255,0.16)_1px,transparent_1px)] bg-[size:52px_52px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,4,3,0.2),rgba(2,4,3,0.74)_74%,#020403)]" />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/70 to-transparent" />
    </div>
  );
}
