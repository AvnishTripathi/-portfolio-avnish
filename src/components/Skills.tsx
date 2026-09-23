"use client";
import { motion } from "framer-motion";
import CollapsibleSection from "./CollapsibleSection";

const cats = [
  {
    title: "Programming Languages",
    accent: "var(--accent)",
    skills: ["Python", "Java", "JavaScript", "C"],
  },
  {
    title: "Web Development",
    accent: "var(--accent)",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"],
  },
  {
    title: "Backend & APIs",
    accent: "var(--accent-2)",
    skills: ["Flask", "REST APIs", "Node.js", "Express.js"],
  },
  {
    title: "Databases",
    accent: "var(--accent)",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Development Concepts",
    accent: "var(--accent)",
    skills: ["OOP", "Data Structures & Algorithms", "Full-Stack Development"],
  },
  {
    title: "Tools & IDEs",
    accent: "var(--accent-2)",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Postman", "IntelliJ IDEA", "Eclipse"],
  },
  {
    title: "Cloud / DevOps",
    accent: "var(--accent)",
    skills: ["Docker"],
  },
];

export default function Skills() {
  return (
    <CollapsibleSection
      id="skills"
      pill="◆ Skills"
      title="Skills & Technologies"
      subtitle="Programming languages, frameworks, databases, and developer tools"
      bg="var(--bg-alt)"
    >
      {/* Skills grid with Staggered Scroll Motion */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 18,
        }}
      >
        {cats.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -5, scale: 1.015 }}
            className="card"
            style={{ padding: "22px 20px" }}
          >
            {/* Card header */}
            <div style={{ marginBottom: 14 }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 28 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.05 }}
                style={{
                  height: 3,
                  borderRadius: 2,
                  marginBottom: 10,
                  background: `linear-gradient(90deg, ${cat.accent}, var(--accent-2))`,
                }}
              />
              <h3
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "var(--text-card)",
                  margin: 0,
                  letterSpacing: "0.01em",
                }}
              >
                {cat.title}
              </h3>
            </div>

            {/* Tech Tags with Micro Hover Motion */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {cat.skills.map((s, idx) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.03 }}
                  whileHover={{ scale: 1.06, y: -1 }}
                  className="tag"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </CollapsibleSection>
  );
}
