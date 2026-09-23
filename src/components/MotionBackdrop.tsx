"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function MotionBackdrop() {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  // Mouse position tracker for subtle spotlight
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll progress for top indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* ── Top Executive Scroll Progress Bar ── */}
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          transformOrigin: "0%",
          background: "linear-gradient(90deg, var(--accent), var(--accent-2), #06b6d4)",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />

      {/* ── Interactive Cursor Ambient Spotlight ── */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: mousePos.y - 250,
          left: mousePos.x - 250,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(var(--accent-rgb), 0.07) 0%, rgba(var(--accent-2-rgb), 0.02) 45%, transparent 70%)"
            : "radial-gradient(circle, rgba(var(--accent-rgb), 0.04) 0%, rgba(var(--accent-2-rgb), 0.015) 45%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* ── Floating Organic Ambient Gradient Orbs ── */}
      <div aria-hidden="true" style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        {/* Top Right Orb */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: "-8%",
            right: "2%",
            width: "clamp(350px, 42vw, 580px)",
            height: "clamp(350px, 42vw, 580px)",
            borderRadius: "50%",
            background: isDark
              ? "radial-gradient(circle, rgba(var(--accent-rgb), 0.12) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(var(--accent-rgb), 0.055) 0%, transparent 70%)",
            filter: "blur(65px)",
          }}
        />

        {/* Bottom Left Orb */}
        <motion.div
          animate={{
            x: [0, -30, 25, 0],
            y: [0, 35, -25, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 22,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{
            position: "absolute",
            bottom: "8%",
            left: "-5%",
            width: "clamp(300px, 38vw, 500px)",
            height: "clamp(300px, 38vw, 500px)",
            borderRadius: "50%",
            background: isDark
              ? "radial-gradient(circle, rgba(var(--accent-2-rgb), 0.1) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(var(--accent-2-rgb), 0.045) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Center Accent Orb */}
        <motion.div
          animate={{
            x: [0, 25, -35, 0],
            y: [0, -20, 30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{
            position: "absolute",
            top: "45%",
            left: "30%",
            width: "clamp(260px, 30vw, 420px)",
            height: "clamp(260px, 30vw, 420px)",
            borderRadius: "50%",
            background: isDark
              ? "radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(6, 182, 212, 0.03) 0%, transparent 70%)",
            filter: "blur(55px)",
          }}
        />
      </div>
    </>
  );
}

