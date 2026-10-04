"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "text">("default");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rootReducedMotion = document.documentElement.getAttribute("data-reduced-motion") === "true";

    if (isTouch || prefersReducedMotion || rootReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], input, textarea, select");
      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;

      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "";
        setCursorText(text);
        setCursorVariant("text");
      } else if (interactive) {
        setCursorText("");
        setCursorVariant("hover");
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full will-change-transform"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: cursorVariant === "text" ? 80 : cursorVariant === "hover" ? 44 : 12,
        height: cursorVariant === "text" ? 80 : cursorVariant === "hover" ? 44 : 12,
        backgroundColor:
          cursorVariant === "text"
            ? "rgba(245, 158, 11, 0.95)"
            : cursorVariant === "hover"
            ? "rgba(255, 255, 255, 0.15)"
            : "rgba(245, 158, 11, 0.8)",
        backdropFilter: cursorVariant === "hover" ? "blur(4px)" : "none",
        border: cursorVariant === "hover" ? "1px solid rgba(255, 255, 255, 0.4)" : "none",
      }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
    >
      {cursorText && (
        <span className="text-[10px] font-bold tracking-widest text-black uppercase select-none">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
