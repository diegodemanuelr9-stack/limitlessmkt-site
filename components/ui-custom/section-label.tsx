import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: string;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "block font-body text-[#e7c090] font-bold tracking-[0.2em] uppercase text-xs mb-6",
        className
      )}
    >
      {children}
    </span>
  );
}
