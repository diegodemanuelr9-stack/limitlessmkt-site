"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  label: string;
  category: string;
  onClick: () => void;
  className?: string;
}

export function ContentCard({
  src,
  alt,
  width,
  height,
  label,
  category,
  onClick,
  className,
}: ContentCardProps) {
  return (
    <div
      className={cn(
        "group cursor-pointer overflow-hidden rounded-xl bg-[#1c1b1b] relative",
        className
      )}
      onClick={onClick}
    >
      {/* Image with grayscale to color on hover */}
      <div className="w-full h-full relative">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        />
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        <span className="border border-white/30 rounded-full px-6 py-2.5 backdrop-blur-md uppercase text-[10px] tracking-[0.25em] font-bold text-white font-body">
          View
        </span>
      </div>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <span className="block text-[9px] tracking-[0.3em] uppercase font-bold text-[#e7c090] font-body">
          {category}
        </span>
        <span className="block text-xs font-body text-white/80 mt-0.5 truncate">
          {label}
        </span>
      </div>
    </div>
  );
}
