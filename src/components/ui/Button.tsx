"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cine";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isExternal?: boolean;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      href,
      variant = "primary",
      size = "md",
      className,
      children,
      icon,
      iconPosition = "right",
      isExternal = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium tracking-tight transition-all duration-300 select-none outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060608] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "h-9 px-4 text-xs rounded-full gap-2",
      md: "h-11 px-6 text-sm rounded-full gap-2.5",
      lg: "h-14 px-8 text-base rounded-full gap-3",
    };

    const variantStyles = {
      primary:
        "bg-amber-500 text-black font-semibold hover:bg-amber-400 hover:shadow-[0_0_24px_rgba(245,158,11,0.35)] hover:-translate-y-0.5",
      secondary:
        "bg-[#14141c] text-[#f8f8fa] border border-white/10 hover:border-white/25 hover:bg-[#1a1a24] hover:shadow-[0_0_20px_rgba(255,255,255,0.06)] hover:-translate-y-0.5",
      outline:
        "bg-transparent text-[#f8f8fa] border border-white/20 hover:border-amber-500/80 hover:text-amber-400 hover:-translate-y-0.5",
      ghost:
        "bg-transparent text-[#a0a0ab] hover:text-white hover:bg-white/5",
      cine:
        "bg-red-600/90 text-white font-semibold hover:bg-red-500 hover:shadow-[0_0_24px_rgba(239,68,68,0.4)] hover:-translate-y-0.5",
    };

    const content = (
      <>
        {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
      </>
    );

    const mergedClasses = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={mergedClasses}
          >
            {content}
          </a>
        );
      }
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={mergedClasses}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled}
        className={mergedClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
