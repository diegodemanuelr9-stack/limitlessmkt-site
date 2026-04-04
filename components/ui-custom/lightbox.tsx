"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface LightboxProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  isOpen: boolean;
  onClose: () => void;
}

export function Lightbox({
  src,
  alt,
  width,
  height,
  isOpen,
  onClose,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ animation: "fadeIn 0.3s cubic-bezier(0.22,1,0.36,1) forwards" }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-xl" />

      {/* Close button */}
      <button
        className="absolute top-6 right-6 z-10 p-3 rounded-full ghost-border text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Image */}
      <div
        className="relative z-10 max-w-[90vw] max-h-[90vh]"
        style={{
          animation: "scaleInLightbox 0.4s cubic-bezier(0.22,1,0.36,1) 0.05s forwards",
          opacity: 0,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
          priority
        />
      </div>

      <style>{`
        @keyframes scaleInLightbox {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
