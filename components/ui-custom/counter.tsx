"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { useCounter } from "@/hooks/use-counter";
import { cn } from "@/lib/utils";

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  className?: string;
}

export function Counter({
  target,
  suffix = "",
  prefix = "",
  label,
  duration = 2200,
  className,
}: CounterProps) {
  const { ref, isVisible } = useIntersection<HTMLDivElement>({
    threshold: 0.3,
  });
  const value = useCounter(target, duration, isVisible);

  const isDecimal = target % 1 !== 0;
  const displayed = isDecimal ? value.toFixed(1) : Math.round(value).toString();

  return (
    <div
      ref={ref}
      className={cn("flex flex-col items-center text-center", className)}
    >
      <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#e7c090] leading-none mb-3">
        {prefix}
        {displayed}
        {suffix}
      </div>
      <p className="font-body text-[#d2c4b7] text-xs uppercase tracking-widest leading-relaxed max-w-[140px]">
        {label}
      </p>
    </div>
  );
}
