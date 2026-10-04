import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "hud" | "rec" | "amber" | "outline" | "solid";
  className?: string;
}

export function Badge({ children, variant = "hud", className }: BadgeProps) {
  const base =
    "inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono tracking-wider uppercase rounded-full select-none transition-colors";

  const variants = {
    hud: "bg-white/[0.04] text-[#a0a0ab] border border-white/10",
    rec: "bg-red-500/10 text-red-400 border border-red-500/25",
    amber: "bg-amber-500/10 text-amber-400 border border-amber-500/30",
    outline: "bg-transparent text-white/70 border border-white/20",
    solid: "bg-white/10 text-white border-transparent",
  };

  return (
    <span className={cn(base, variants[variant], className)}>
      {variant === "rec" && (
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-rec-pulse" />
      )}
      {children}
    </span>
  );
}
