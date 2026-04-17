import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ShinyButtonBaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

type ShinyButtonProps = ShinyButtonBaseProps &
  (
    | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
    | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  );

function ShinyButtonContent({ children }: Pick<ShinyButtonProps, "children">) {
  return (
    <>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-y-[-30%] left-0 w-10 animate-shimmer bg-white/[0.45] blur-[6px]" />
    </>
  );
}

export function ShinyButton(props: ShinyButtonProps) {
  const { children, className, variant = "primary", ...rest } = props;
  const classes = cn(
    "focus-ring group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-[8px] border px-5 text-sm font-semibold transition duration-300",
    variant === "primary" &&
      "border-emeraldx/70 bg-emeraldx text-[#04110c] shadow-glow hover:bg-cyanx",
    variant === "secondary" &&
      "border-cyanx/[0.35] bg-white/[0.03] text-cyanx hover:border-emeraldx/60 hover:text-emeraldx",
    className
  );

  if ("href" in rest && rest.href) {
    const { href, ...anchorProps } = rest;
    return (
      <a href={href} className={classes} {...anchorProps}>
        <ShinyButtonContent>{children}</ShinyButtonContent>
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button type={buttonProps.type || "button"} className={classes} {...buttonProps}>
      <ShinyButtonContent>{children}</ShinyButtonContent>
    </button>
  );
}
