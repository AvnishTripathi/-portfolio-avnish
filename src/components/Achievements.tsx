"use client";
import { motion } from "framer-motion";
import CollapsibleSection from "./CollapsibleSection";

const certs = [
  {
    year: "2026",
    title: "Certificate of Participation",
    event: "EY Techathon 6.0",
    org: "Ernst & Young (EY)",
    detail: "Round 1: Executive Summary Submission organized by EY.",
    accent: "var(--accent)",
  },
  {
    year: "2026",
    title: "Certificate of Participation",
    event: "OpenBuild Week 2026",
    org: "HackUnion",
    detail: "In collaboration with Interledger Foundation & GitHub Education · 18 July 2026 · Lords Skill Academy, Hyderabad.",
    accent: "#10b981",
  },
  {
    year: "2026",
    title: "Certificate of Appreciation",
    event: "Agentic AI Bootcamp",
    org: "Global Young Founders (GYF) · TASK",
    detail: "Build with ADK, Deploy on Google Cloud — Telangana Academy for Skill and Knowledge.",
    accent: "var(--accent-2)",
  },
];

export default function Achievements() {
  return (
    <CollapsibleSection
      id="achievements"
      pill="◆ Achievements"
      title="Achievements & Certifications"
      subtitle="Hackathons, competitions, awards, and technical bootcamps"
    >
      {/* ── Hero Achievement ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4, scale: 1.01 }}
        style={{ marginBottom: 24 }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, rgba(245,158,11,0.06) 0%, rgba(var(--accent-rgb),0.03) 100%)",
            border: "1px solid rgba(245,158,11,0.3)",
            borderRadius: 16,
            padding: "30px 28px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "var(--card-shadow)",
          }}
        >
          {/* Top label */}
          <div style={{ marginBottom: 16 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(245,158,11,0.12)",
                border: "1px solid rgba(245,158,11,0.35)",
                color: "#f59e0b",
                borderRadius: 999,
                padding: "4px 14px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              🏆 Top 20 Finalist
            </span>
          </div>

          {/* Title */}
          <h3
            style={{
              fontSize: "clamp(19px, 2.5vw, 24px)",
              fontWeight: 800,
              color: "var(--text-h)",
              margin: "0 0 12px",
              lineHeight: 1.3,
            }}
          >
            UNLEASH LLM Innovation Challenge 2026
          </h3>

          {/* Description */}
          <p
            style={{
              fontSize: 14.5,
              color: "var(--text-card)",
              lineHeight: 1.75,
              margin: "0 0 10px",
              maxWidth: 680,
            }}
          >
            Recognized among the{" "}
            <span style={{ color: "#d97706", fontWeight: 700 }}>Top 20 Finalists</span>{" "}
            of the UNLEASH LLM Innovation Challenge 2026. Competed in an innovation
            challenge focused on Large Language Models and AI-driven solutions.
          </p>

          {/* Team ID */}
          <p
            style={{
              fontSize: 12,
              color: "var(--text-dim)",
              margin: 0,
              fontFamily: "monospace",
            }}
          >
            Team ID: TEAM-MJ17INBY-B00A85
          </p>
        </div>
      </motion.div>

      {/* ── Other certifications ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        {certs.map((c, i) => (
          <motion.div
            key={c.event}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="card"
            style={{ padding: "22px 20px" }}
          >
            {/* Accent bar + year row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  width: 26,
                  height: 3,
                  borderRadius: 2,
                  background: `linear-gradient(90deg, ${c.accent}, var(--accent-2))`,
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "3px 8px",
                  borderRadius: 6,
                  background: `rgba(var(--accent-rgb),0.08)`,
                  border: "1px solid var(--border)",
                  color: "var(--accent)",
                }}
              >
                {c.year}
              </span>
            </div>

            <h4
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "var(--text-sub)",
                margin: "0 0 4px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              {c.title}
            </h4>
            <p
              style={{
                fontSize: 14.5,
                fontWeight: 700,
                color: "var(--text-h)",
                margin: "0 0 4px",
                lineHeight: 1.3,
              }}
            >
              {c.event}
            </p>
            <p style={{ fontSize: 12, color: "var(--text-dim)", margin: "0 0 8px" }}>{c.org}</p>
            <p style={{ fontSize: 13, color: "var(--text-sub)", lineHeight: 1.65, margin: 0 }}>
              {c.detail}
            </p>
          </motion.div>
        ))}

        {/* Training card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="card"
          style={{ padding: "22px 20px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <div
              style={{
                width: 26,
                height: 3,
                borderRadius: 2,
                background: "linear-gradient(90deg, var(--accent-2), var(--accent))",
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                padding: "3px 8px",
                borderRadius: 6,
                background: "rgba(var(--accent-2-rgb),0.08)",
                border: "1px solid var(--border)",
                color: "var(--accent-2)",
              }}
            >
              2026
            </span>
          </div>

          <h4
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "var(--text-sub)",
              margin: "0 0 4px",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            Training & Workshop
          </h4>
          <p
            style={{
              fontSize: 14.5,
              fontWeight: 700,
              color: "var(--text-h)",
              margin: "0 0 4px",
              lineHeight: 1.3,
            }}
          >
            Agentic AI Bootcamp: Build with ADK, Deploy on Google Cloud
          </p>
          <p style={{ fontSize: 12, color: "var(--text-dim)", margin: "0 0 12px" }}>
            Global Young Founders (GYF) · TASK
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {["Agentic AI", "ADK", "Google Cloud"].map((t) => (
              <span key={t} className="tag" style={{ fontSize: 11 }}>
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </CollapsibleSection>
  );
}
