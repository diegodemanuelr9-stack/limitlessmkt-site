"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, isVisible } = useIntersection<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn("reveal", isVisible && "visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
