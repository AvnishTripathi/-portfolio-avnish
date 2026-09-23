"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MotionBackdrop from "@/components/MotionBackdrop";

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;
    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number; c: string };
    let pts: P[] = [];
    const cols = ["rgba(79,158,255,", "rgba(139,92,246,", "rgba(6,182,212,"];
    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const n = Math.min(Math.floor((canvas.width * canvas.height) / 18000), 70);
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.1 + 0.3,
        a: Math.random() * 0.3 + 0.05,
        c: cols[Math.floor(Math.random() * cols.length)],
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p, i) => {
        p.x = (p.x + p.vx + canvas.width) % canvas.width;
        p.y = (p.y + p.vy + canvas.height) % canvas.height;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.c}${p.a})`;
        ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j],
            dx = p.x - q.x,
            dy = p.y - q.y,
            d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(79,158,255,${0.035 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      raf = requestAnimationFrame(draw);
    };
    init();
    draw();
    window.addEventListener("resize", init);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", init);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}
    />
  );
}

export default function HomePage() {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", overflowX: "hidden", position: "relative" }}>
      {/* CEO-Grade Dynamic Motion Layer */}
      <MotionBackdrop />

      {/* Dark mode: particles + subtle grid */}
      {isDark && <ParticleCanvas />}
      {isDark && (
        <div
          aria-hidden="true"
          className="dot-grid"
          style={{ position: "fixed", inset: 0, zIndex: 0, opacity: 0.5, pointerEvents: "none" }}
        />
      )}

      {/* Portfolio Content Layer */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
