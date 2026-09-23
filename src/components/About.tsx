"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import CollapsibleSection from "./CollapsibleSection";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.45, delay },
});

const interests = [
  "Artificial Intelligence", "Machine Learning", "Generative AI",
  "Backend Development", "Frontend Development", "Full-Stack Development",
];

const info = [
  { label: "Degree",     value: "B.Tech — Computer Science & Engineering" },
  { label: "College",    value: "DRK College of Engineering & Technology" },
  { label: "University", value: "JNTUH Affiliated" },
  { label: "CGPA",       value: "7.34" },
  { label: "Location",   value: "Hyderabad, Telangana, India" },
  { label: "Target Role",value: "AI Engineer / Full Stack Developer" },
];

export default function About() {
  return (
    <CollapsibleSection
      id="about"
      pill="◆ About Me"
      title="About Me"
      subtitle="Final-year Computer Science student specializing in AI, Machine Learning, and Full-Stack Development."
    >
      {/* Two-column layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 36,
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Left – Bio */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Photo */}
          <motion.div
            {...inView(0.05)}
            whileHover={{ scale: 1.04, y: -4 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            style={{ width: "fit-content" }}
          >
            <div
              style={{
                width: 180,
                height: 180,
                borderRadius: 24,
                overflow: "hidden",
                border: "3px solid var(--border-hover)",
                boxShadow: "var(--card-shadow-hover)",
                position: "relative",
              }}
            >
              <Image
                src="/avnish-profile.png"
                alt="Avnish Tripathi"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                sizes="180px"
                priority
              />
            </div>
          </motion.div>

          <motion.p
            {...inView(0.1)}
            style={{
              fontSize: 15,
              color: "var(--text-card)",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            I am a final-year Computer Science and Engineering student at{" "}
            <span style={{ color: "var(--accent)", fontWeight: 600 }}>
              DRK College of Engineering and Technology
            </span>
            , JNTUH affiliated, with hands-on experience in full-stack development and
            AI-powered applications.
          </motion.p>

          <motion.p
            {...inView(0.15)}
            style={{
              fontSize: 14.5,
              color: "var(--text-sub)",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            I enjoy building practical applications and integrating intelligent
            technologies into real-world software. My work spans across web development,
            machine learning integration, and backend API design — always with a focus on
            clean architecture and user impact.
          </motion.p>

          {/* Interests */}
          <motion.div {...inView(0.2)}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "var(--accent)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Areas of Interest
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {interests.map((it) => (
                <span key={it} className="tag">
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right – Info card */}
        <motion.div {...inView(0.1)} className="card" style={{ padding: 26 }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "var(--accent)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 18,
              marginTop: 0,
            }}
          >
            Professional Information
          </p>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {info.map((item, i) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  padding: "12px 0",
                  borderBottom:
                    i < info.length - 1
                      ? "1px solid var(--border)"
                      : "none",
                }}
              >
                <div style={{ minWidth: 110 }}>
                  <p
                    style={{
                      fontSize: 11,
                      color: "var(--text-dim)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      margin: 0,
                    }}
                  >
                    {item.label}
                  </p>
                </div>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "var(--text-card)",
                    fontWeight: 500,
                    margin: 0,
                    lineHeight: 1.45,
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Status */}
          <div
            style={{
              marginTop: 18,
              paddingTop: 16,
              borderTop: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12.5,
                color: "var(--text-dim)",
                marginBottom: 10,
              }}
            >
              <MapPin size={13} color="var(--accent)" />
              Hyderabad, Telangana, India
            </div>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.3)",
                color: "#16a34a",
                borderRadius: 999,
                padding: "5px 14px",
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#22c55e",
                  animation: "pulse-dot 2s ease-in-out infinite",
                  display: "inline-block",
                }}
              />
              Open to Opportunities
            </span>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </CollapsibleSection>
  );
}
