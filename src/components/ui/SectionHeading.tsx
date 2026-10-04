import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  children?: React.ReactNode;
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = "left",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4 mb-12 md:mb-16",
        align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      {tag && (
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-500 uppercase">
          <span className="w-2 h-0.5 bg-amber-500 inline-block" />
          <span>{tag}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight text-[#f8f8fa] leading-[1.12]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-[#a0a0ab] leading-relaxed font-light">
          {subtitle}
        </p>
      )}
      {children && <div className="pt-2">{children}</div>}
    </div>
  );
}
