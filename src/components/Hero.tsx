"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";

function GH({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

const roles = ["AI Engineer", "Full Stack Developer", "Machine Learning Specialist", "Backend Engineer"];

const stats = [
  { value: "3+", label: "Projects Built" },
  { value: "Top 20", label: "UNLEASH LLM Finalist" },
  { value: "7.34", label: "CGPA" },
  { value: "2027", label: "Graduating" },
];

export default function Hero() {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let ti = 0, ci = 0, del = false;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const s = roles[ti];
      if (spanRef.current) spanRef.current.textContent = del ? s.slice(0, ci - 1) : s.slice(0, ci + 1);
      ci = del ? ci - 1 : ci + 1;
      let ms = del ? 40 : 70;
      if (!del && ci === s.length) {
        ms = 2200;
        del = true;
      } else if (del && ci === 0) {
        del = false;
        ti = (ti + 1) % roles.length;
        ms = 300;
      }
      t = setTimeout(tick, ms);
    };
    t = setTimeout(tick, 900);
    return () => clearTimeout(t);
  }, []);

  const goto = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" style={{ paddingTop: 64, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div className="wrap" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 48, paddingBottom: 48 }}>

        {/* Two-column hero grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48, alignItems: "center" }} className="hero-grid">

          {/* ── Left: Copy ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>

            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ marginBottom: 24 }}
            >
              <span className="pill" style={{ padding: "6px 18px", fontSize: 11.5 }}>
                <span style={{
                  width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block",
                  animation: "pulse-dot 1.8s ease-in-out infinite",
                }} />
                <span>Open to Opportunities · Final-Year B.Tech</span>
              </span>
            </motion.div>

            {/* Name Heading with Entrance Motion */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
              style={{
                fontSize: "clamp(40px, 5.8vw, 68px)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
                color: "var(--text-h)",
                margin: 0,
              }}
            >
              Avnish <span className="grad">Tripathi.</span>
            </motion.h1>

            {/* Typing Role Banner */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.18, duration: 0.4 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 16,
                minHeight: 40,
              }}
            >
              <Sparkles size={18} color="var(--accent)" />
              <span style={{ fontSize: "clamp(17px, 2.2vw, 22px)", fontWeight: 700, color: "var(--accent)" }} ref={spanRef} />
              <span style={{ display: "inline-block", width: 2, height: 24, background: "var(--accent)", animation: "pulse-dot 1s steps(1) infinite" }} />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.5 }}
              style={{
                fontSize: 16,
                color: "var(--text-sub)",
                lineHeight: 1.8,
                maxWidth: 540,
                margin: "18px 0 0",
              }}
            >
              Final-year Computer Science student passionate about building real-world{" "}
              <strong style={{ color: "var(--text-card)", fontWeight: 600 }}>AI/ML applications</strong> and{" "}
              <strong style={{ color: "var(--text-card)", fontWeight: 600 }}>full-stack systems</strong>. Experienced in designing scalable backends, integrating intelligent models, and engineering high-impact user experiences.
            </motion.p>

            {/* CTA buttons with Motion */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.45 }}
              style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}
            >
              <motion.button
                onClick={() => goto("projects")}
                className="btn-blue"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                style={{ padding: "12px 24px", fontSize: 14 }}
              >
                <span>Explore Projects</span>
                <ChevronRight size={16} />
              </motion.button>

              <motion.button
                onClick={() => goto("contact")}
                className="btn-ghost"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                style={{ padding: "11px 22px", fontSize: 14 }}
              >
                <span>Contact Me</span>
                <ExternalLink size={15} />
              </motion.button>

              <motion.a
                href="https://github.com/AvnishTripathi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                style={{ padding: "11px 20px", fontSize: 14 }}
              >
                <GH size={16} />
                <span>GitHub</span>
              </motion.a>
            </motion.div>

            {/* Scroll hint with gentle bounce */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              onClick={() => goto("about")}
              style={{
                marginTop: 40,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "none",
                border: "none",
                color: "var(--text-dim)",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 500,
                padding: 0,
                transition: "color 0.2s",
                width: "fit-content",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
            >
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                style={{ display: "inline-flex" }}
              >
                <ArrowDown size={15} />
              </motion.span>
              <span>Scroll to explore</span>
            </motion.button>
          </div>

          {/* ── Right: Big Clean Prominent Photo with Motion ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hero-photo-col"
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <BigHeroPhoto />
          </motion.div>
        </div>

        {/* ── Stats Bar with Motion ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.55 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 14,
            marginTop: 40,
            paddingTop: 32,
            borderTop: "1px solid var(--border)",
          }}
          className="stats-grid"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + i * 0.08 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="card"
              style={{
                textAlign: "center",
                padding: "18px 14px",
                border: "1px solid var(--border)",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(24px, 3.2vw, 32px)",
                  fontWeight: 800,
                  color: "var(--text-h)",
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontSize: 12.5,
                  color: "var(--text-dim)",
                  margin: "6px 0 0",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid { grid-template-columns: 1.1fr 1fr !important; }
          .hero-photo-col { display: flex !important; }
        }
        @media (max-width: 959px) {
          .hero-photo-col { display: flex !important; margin-top: 10px; }
        }
        @media (min-width: 640px) {
          .stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

function BigHeroPhoto() {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Dynamic Ambient Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
        aria-hidden
        style={{
          position: "absolute",
          inset: -32,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(var(--accent-rgb),0.22) 0%, rgba(var(--accent-2-rgb),0.12) 50%, transparent 72%)",
          filter: "blur(30px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Subtle Rotating Outline Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
        aria-hidden
        style={{
          position: "absolute",
          inset: -12,
          borderRadius: "50%",
          border: "2px dashed rgba(var(--accent-rgb),0.22)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Main Big Photo Frame with Gentle Sine-Wave Floating Motion */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
        whileHover={{ scale: 1.03, y: -14 }}
        style={{
          width: "clamp(300px, 34vw, 380px)",
          height: "clamp(300px, 34vw, 380px)",
          borderRadius: "50%",
          overflow: "hidden",
          border: "4px solid rgba(var(--accent-rgb),0.45)",
          boxShadow: "0 0 0 10px rgba(var(--accent-rgb),0.06), 0 28px 65px rgba(0,0,0,0.16)",
          position: "relative",
          zIndex: 1,
          background: "var(--bg-card-solid)",
          cursor: "pointer",
        }}
      >
        <Image
          src="/avnish-profile.png"
          alt="Avnish Tripathi"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          sizes="(max-width: 768px) 300px, 380px"
          priority
        />
      </motion.div>
    </div>
  );
}
