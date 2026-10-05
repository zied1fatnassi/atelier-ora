"use client";

import { useEffect, useState } from "react";
import { Sparkles, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReducedMotionToggleProps {
  labelReduce?: string;
  labelStandard?: string;
  className?: string;
}

export function ReducedMotionToggle({
  labelReduce = "Motion",
  labelStandard = "Reduced",
  className,
}: ReducedMotionToggleProps) {
  const [reduced, setReduced] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("aura-prod-reduced-motion") || localStorage.getItem("aura-design-reduced-motion");
    if (stored === "true") {
      setReduced(true);
      document.documentElement.setAttribute("data-reduced-motion", "true");
    } else {
      const prefers = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefers) {
        setReduced(true);
        document.documentElement.setAttribute("data-reduced-motion", "true");
      }
    }
  }, []);

  const toggle = () => {
    const next = !reduced;
    setReduced(next);
    if (next) {
      document.documentElement.setAttribute("data-reduced-motion", "true");
      localStorage.setItem("aura-prod-reduced-motion", "true");
    } else {
      document.documentElement.removeAttribute("data-reduced-motion");
      localStorage.setItem("aura-prod-reduced-motion", "false");
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono transition-colors border",
        reduced
          ? "bg-amber-500/15 border-amber-500/40 text-amber-300"
          : "bg-white/[0.03] border-white/10 text-white/50 hover:text-white hover:bg-white/10",
        className
      )}
      title="Toggle reduced motion accessibility mode"
      aria-label="Toggle reduced motion"
      aria-pressed={reduced}
    >
      {reduced ? (
        <>
          <EyeOff className="w-3 h-3 text-amber-400" aria-hidden="true" />
          <span>{labelStandard}</span>
        </>
      ) : (
        <>
          <Sparkles className="w-3 h-3" aria-hidden="true" />
          <span>{labelReduce}</span>
        </>
      )}
    </button>
  );
}
