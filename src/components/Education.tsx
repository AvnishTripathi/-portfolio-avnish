"use client";
import { motion } from "framer-motion";
import CollapsibleSection from "./CollapsibleSection";

const items = [
  {
    period: "2023 – 2027",
    current: true,
    title: "B.Tech — Computer Science and Engineering",
    school: "DRK College of Engineering and Technology",
    loc: "Bowrampet, Hyderabad",
    detail: "JNTUH Affiliated · CGPA: 7.34",
    accent: "var(--accent)",
  },
  {
    period: "2021 – 2023",
    current: false,
    title: "Intermediate (MPC)",
    school: "Sri Chaitanya Junior Kalasala",
    loc: "Jeedimetla, Hyderabad",
    detail: "Percentage: 77.5%",
    accent: "var(--accent-2)",
  },
  {
    period: "2021",
    current: false,
    title: "Secondary School Certificate (SSC)",
    school: "Cyber Age Pupils High School",
    loc: "Hyderabad",
    detail: "Percentage: 92%",
    accent: "var(--accent)",
  },
];

export default function Education() {
  return (
    <CollapsibleSection
      id="education"
      pill="◆ Education"
      title="Education"
      subtitle="Academic qualifications, institutions, and degrees"
      bg="var(--bg-alt)"
    >
      {/* Timeline */}
      <div style={{ maxWidth: 720, margin: "0 auto", position: "relative" }}>
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: 19,
            top: 28,
            bottom: 28,
            width: 2,
            background: "linear-gradient(to bottom, var(--accent), var(--accent-2), transparent)",
            borderRadius: 2,
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, x: -30, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.52, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, scale: 1.01 }}
              style={{ paddingLeft: 56, position: "relative" }}
            >
              {/* Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.15 + i * 0.08 }}
                style={{
                  position: "absolute",
                  left: 10,
                  top: 22,
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${it.accent}, var(--accent-2))`,
                  border: "3px solid var(--bg)",
                  boxShadow: `0 0 12px rgba(var(--accent-rgb),0.4)`,
                }}
              />

              <div className="card" style={{ padding: "22px 24px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 10,
                  }}
                >
                  {/* Left */}
                  <div>
                    <h3
                      style={{
                        fontSize: 15.5,
                        fontWeight: 800,
                        color: "var(--text-h)",
                        margin: "0 0 4px",
                        lineHeight: 1.3,
                      }}
                    >
                      {it.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 13.5,
                        color: "var(--accent)",
                        fontWeight: 600,
                        margin: 0,
                      }}
                    >
                      {it.school}
                    </p>
                  </div>

                  {/* Right */}
                  <div style={{ textAlign: "right" }}>
                    <span
                      style={{
                        fontSize: 11.5,
                        fontWeight: 700,
                        padding: "3px 10px",
                        borderRadius: 6,
                        background: "rgba(var(--accent-rgb),0.08)",
                        border: "1px solid var(--border)",
                        color: "var(--accent)",
                      }}
                    >
                      {it.period}
                    </span>
                    {it.current && (
                      <div style={{ marginTop: 5 }}>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 5,
                            fontSize: 11,
                            fontWeight: 700,
                            color: "#16a34a",
                            background: "rgba(34,197,94,0.1)",
                            border: "1px solid rgba(34,197,94,0.3)",
                            borderRadius: 999,
                            padding: "2px 8px",
                          }}
                        >
                          <span
                            style={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              background: "#22c55e",
                              animation: "pulse-dot 2s ease-in-out infinite",
                              display: "inline-block",
                            }}
                          />
                          Current
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Location + detail */}
                <div
                  style={{
                    marginTop: 10,
                    display: "flex",
                    gap: 8,
                    fontSize: 12.5,
                    color: "var(--text-dim)",
                    flexWrap: "wrap",
                  }}
                >
                  <span>{it.loc}</span>
                  <span>·</span>
                  <span style={{ color: "var(--text-sub)", fontWeight: 600 }}>{it.detail}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </CollapsibleSection>
  );
}
