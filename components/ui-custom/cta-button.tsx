import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface CtaButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  size?: "sm" | "default" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export const CtaButton = forwardRef<HTMLButtonElement, CtaButtonProps>(
  (
    { variant = "primary", size = "default", className, children, href, target, rel, ...props },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center font-body font-bold uppercase tracking-[0.3em] rounded-full cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]";

    const sizes = {
      sm: "px-6 py-2.5 text-[9px]",
      default: "px-10 py-4 text-[9px] md:text-[10px]",
      lg: "px-16 py-6 text-xs md:text-sm",
    };

    const variants = {
      primary:
        "bg-gradient-to-r from-[#e7c090] to-[#c5a073] text-[#432b08] hover:shadow-[0_0_40px_rgba(231,192,144,0.5)] hover:-translate-y-1",
      ghost:
        "border border-[rgba(78,69,59,0.25)] text-white bg-black/20 backdrop-blur-sm hover:bg-white/5 hover:-translate-y-1",
    };

    const classes = cn(base, sizes[size], variants[variant], className);

    if (href) {
      return (
        <a href={href} target={target} rel={rel} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

CtaButton.displayName = "CtaButton";
