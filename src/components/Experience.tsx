"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import CollapsibleSection from "./CollapsibleSection";

export default function Experience() {
  return (
    <CollapsibleSection
      id="experience"
      pill="◆ Experience"
      title="Experience"
      subtitle="Internships, industry engagements, and professional background"
    >
      {/* Timeline */}
      <div style={{ maxWidth: 740, margin: "0 auto", position: "relative" }}>
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: 19,
            top: 24,
            bottom: 24,
            width: 2,
            background: "linear-gradient(to bottom, var(--accent), var(--accent-2), transparent)",
            borderRadius: 2,
          }}
        />

        {/* Experience card */}
        <motion.div
          initial={{ opacity: 0, x: -35, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, scale: 1.01 }}
          style={{ paddingLeft: 60, position: "relative" }}
        >
          {/* Timeline dot */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 450, damping: 18, delay: 0.2 }}
            style={{
              position: "absolute",
              left: 10,
              top: 26,
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
              border: "3px solid var(--bg)",
              boxShadow: "0 0 14px rgba(var(--accent-rgb),0.5)",
            }}
          />

          {/* Card */}
          <div className="card" style={{ padding: "28px 28px" }}>
            {/* Top row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: 12,
                marginBottom: 14,
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: 19,
                    fontWeight: 800,
                    color: "var(--text-h)",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  Backend Development Intern
                </h3>
                <p
                  style={{
                    fontSize: 14.5,
                    fontWeight: 700,
                    margin: "5px 0 0",
                    background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Deep Algorithms Solutions Pvt. Ltd.
                </p>
              </div>
              <span
                style={{
                  background: "rgba(var(--accent-rgb),0.08)",
                  border: "1px solid var(--border)",
                  color: "var(--accent)",
                  borderRadius: 999,
                  padding: "4px 12px",
                  fontSize: 12,
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                Internship Offer
              </span>
            </div>

            {/* Divider */}
            <div
              style={{
                height: 1,
                background: "var(--border)",
                marginBottom: 16,
              }}
            />

            {/* Meta */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 18,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13,
                  color: "var(--text-sub)",
                }}
              >
                <Calendar size={13} color="var(--accent)" />
                Starting 01 June 2025
              </div>
              <div style={{ fontSize: 13, color: "var(--text-sub)" }}>
                Backend Development
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13,
                  color: "var(--text-sub)",
                }}
              >
                <MapPin size={13} color="var(--accent)" />
                India
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: 14,
                color: "var(--text-card)",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Selected for an internship with Deep Algorithms Solutions Pvt. Ltd., with
              orientation and training focused primarily on Backend Development and gaining
              hands-on technical experience.
            </p>

            {/* Note box */}
            <div
              style={{
                marginTop: 18,
                padding: "12px 16px",
                borderRadius: 9,
                background: "var(--bg-alt)",
                border: "1px solid var(--border)",
                fontSize: 12.5,
                color: "var(--text-sub)",
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: "var(--accent)", fontWeight: 700 }}>Note: </span>
              Offer accepted. Project details and technical platform are to be shared before
              commencement. Orientation and training phase is in progress.
            </div>
          </div>
        </motion.div>
      </div>
    </CollapsibleSection>
  );
}
