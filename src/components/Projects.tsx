"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ChevronRight } from "lucide-react";
import CollapsibleSection from "./CollapsibleSection";

function GH({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

type Project = {
  id: string; name: string; category: string;
  short: string; full: string; problem: string; solution: string;
  features: string[]; tech: string[]; contrib: string[];
  github: string; live: string; accent: string;
};

const projects: Project[] = [
  {
    id: "med",
    name: "AI-Powered Medicine Recommendation System",
    category: "Web & Mobile · Healthcare AI",
    short: "An AI-powered healthcare platform that analyzes user-provided symptoms and provides medicine recommendations with relevant medication information.",
    full: "A comprehensive healthcare platform leveraging machine learning to analyze symptoms and return intelligent medicine recommendations. Built with a Flask backend, MySQL database, and a Flutter mobile companion app.",
    problem: "Users often lack quick, reliable access to initial medicine information based on symptoms without consulting a doctor immediately.",
    solution: "Built a symptom-to-medicine ML pipeline using Scikit-learn, integrated into a responsive web app and mobile app, with user profile management and search functionality.",
    features: [
      "User registration and secure login",
      "Symptom-based medicine recommendation engine",
      "Machine Learning-based prediction model",
      "Detailed medicine information display",
      "User health / profile management",
      "Search and recommendation functionality",
      "Responsive web interface",
      "Mobile application support (Flutter)",
      "Backend REST API integration",
    ],
    tech: ["Python","Flask","Machine Learning","Scikit-learn","Pandas","NumPy","MySQL","HTML","CSS","JavaScript","Flutter"],
    contrib: ["System architecture","Flask backend","REST APIs","ML model integration","Database connectivity","Frontend development","Mobile app development","Testing & validation"],
    github: "https://github.com/AvnishTripathi/medicine-recommendation-website",
    live: "https://medicine-recommendation-website.onrender.com/",
    accent: "var(--accent)",
  },
  {
    id: "jarvis",
    name: "J.A.R.V.I.S — Production Multimodal AI Voice Assistant",
    category: "Full-Stack AI Application",
    short: "An advanced multimodal AI voice assistant capable of voice interaction, real-time information retrieval, task management, and secure user interaction.",
    full: "A production-grade AI voice assistant supporting bilingual voice commands (English/Hindi), Gemini AI-powered conversations, facial recognition authentication, and real-time data feeds — built with Node.js + Express.js.",
    problem: "Generic voice assistants lack deep personalization, multilingual support, secure facial authentication, and integration of diverse real-time data sources in one unified platform.",
    solution: "Built a full-stack voice assistant with Node.js + Express.js backend, MongoDB for persistence, Google Gemini AI for chat, and face-api.js for biometric authentication, with Android-ready configuration.",
    features: [
      "Voice command recognition via Web Speech API",
      "Speech synthesis (text-to-speech)",
      "English and Hindi bilingual support",
      "AI-powered chat using Google Gemini AI",
      "Facial authentication via Face-API.js",
      "Real-time weather, news, currency info",
      "Word definitions lookup",
      "Contact & reminder management",
      "Telemetry analytics dashboard",
      "Local and cloud storage fallback",
      "Android-ready configuration",
    ],
    tech: ["JavaScript","Node.js","Express.js","MongoDB","Mongoose","Face-API.js","Chart.js","Google Gemini AI","JWT","bcrypt","Web Speech API"],
    contrib: ["System architecture","Backend API development","Voice assistant logic","AI integration (Gemini)","Frontend/UI development","JWT authentication","Facial authentication","Storage architecture","Testing & QA"],
    github: "https://github.com/AvnishTripathi/jarvis-voice-assistant",
    live: "https://jarvis-voice-assistant-epgd.onrender.com/",
    accent: "var(--accent-2)",
  },
];

export default function Projects() {
  const [sel, setSel] = useState<Project | null>(null);

  return (
    <CollapsibleSection
      id="projects"
      pill="◆ Projects"
      title="Projects"
      subtitle="AI, Machine Learning, and Full-Stack production-ready applications"
      bg="var(--bg-alt)"
    >
      {/* Project cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} onOpen={() => setSel(p)} />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {sel && <ProjectModal project={sel} onClose={() => setSel(null)} />}
      </AnimatePresence>
    </CollapsibleSection>
  );
}

function ProjectCard({ project: p, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.015 }}
      onClick={onOpen}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => e.key === "Enter" && onOpen()}
      aria-label={`View ${p.name}`}
      style={{ cursor: "pointer", height: "100%" }}
    >
      <div
        className="card"
        style={{
          padding: "28px 26px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Category */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: p.accent, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {p.category}
          </span>
          <ChevronRight size={15} color={p.accent} />
        </div>

        {/* Name */}
        <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--text-h)", lineHeight: 1.35, margin: "0 0 10px" }}>
          {p.name}
        </h3>

        {/* Desc */}
        <p style={{ fontSize: 13.5, color: "var(--text-sub)", lineHeight: 1.7, margin: 0, flex: 1 }}>
          {p.short}
        </p>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16, marginBottom: 18 }}>
          {p.tech.slice(0, 5).map((t) => (
            <span key={t} className="tag" style={{ fontSize: 11 }}>
              {t}
            </span>
          ))}
          {p.tech.length > 5 && <span className="tag" style={{ fontSize: 11 }}>+{p.tech.length - 5}</span>}
        </div>

        {/* Buttons with micro hover */}
        <div style={{ display: "flex", gap: 10 }} onClick={(e) => e.stopPropagation()}>
          <motion.a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{ padding: "8px 15px", fontSize: 12.5 }}
            aria-label="GitHub"
          >
            <GH size={14} /> GitHub
          </motion.a>
          <motion.a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-blue"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{ padding: "8px 15px", fontSize: 12.5 }}
            aria-label="Live Demo"
          >
            <ExternalLink size={14} /> Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project: p, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-bg"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        initial={{ scale: 0.94, y: 16, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.94, y: 16, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 740,
          maxHeight: "90vh",
          overflowY: "auto",
          background: "var(--bg-card-solid)",
          border: "1px solid var(--border)",
          borderRadius: 18,
          boxShadow: "var(--card-shadow-hover)",
        }}
      >
        <div style={{ padding: "30px 28px" }}>
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: 20 }}>
            <div>
              <span style={{ fontSize: 11, fontWeight: 700, color: p.accent, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {p.category}
              </span>
              <h2 style={{ fontSize: "clamp(17px, 2vw, 21px)", fontWeight: 800, color: "var(--text-h)", margin: "6px 0 0", lineHeight: 1.3 }}>
                {p.name}
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                border: "1px solid var(--border)",
                background: "transparent",
                color: "var(--text-sub)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <X size={15} />
            </button>
          </div>

          {/* Full desc */}
          <p style={{ fontSize: 14, color: "var(--text-card)", lineHeight: 1.75, marginBottom: 20 }}>{p.full}</p>

          {/* Problem / Solution */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 22 }} className="modal-ps">
            {[
              { label: "Problem", text: p.problem, c: "#ef4444" },
              { label: "Solution", text: p.solution, c: "#10b981" },
            ].map((it) => (
              <div
                key={it.label}
                style={{
                  padding: "14px 16px",
                  borderRadius: 10,
                  background: `${it.c}0a`,
                  border: `1px solid ${it.c}22`,
                }}
              >
                <p style={{ fontSize: 11.5, fontWeight: 700, color: it.c, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {it.label}
                </p>
                <p style={{ fontSize: 13, color: "var(--text-sub)", lineHeight: 1.65, margin: 0 }}>{it.text}</p>
              </div>
            ))}
          </div>

          {/* Features */}
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 11.5, fontWeight: 700, color: "var(--text-card)", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Key Features
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }} className="modal-features">
              {p.features.map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "var(--text-sub)" }}>
                  <ChevronRight size={13} color={p.accent} style={{ flexShrink: 0, marginTop: 2 }} />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Contribution */}
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 11.5, fontWeight: 700, color: "var(--text-card)", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              My Contribution
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {p.contrib.map((c) => (
                <span
                  key={c}
                  style={{
                    padding: "4px 11px",
                    borderRadius: 6,
                    fontSize: 11.5,
                    fontWeight: 600,
                    background: `rgba(var(--accent-rgb),0.08)`,
                    border: "1px solid var(--border)",
                    color: "var(--accent)",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Tech */}
          <div style={{ marginBottom: 24 }}>
            <p style={{ fontSize: 11.5, fontWeight: 700, color: "var(--text-card)", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Tech Stack
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {p.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", gap: 10, paddingTop: 4 }}>
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <GH size={15} /> View GitHub
            </a>
            <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn-blue">
              <ExternalLink size={15} /> Live Demo
            </a>
          </div>
        </div>

        <style>{`
          @media (max-width: 600px) {
            .modal-ps { grid-template-columns: 1fr !important; }
            .modal-features { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </motion.div>
    </motion.div>
  );
}
