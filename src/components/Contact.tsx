"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import CollapsibleSection from "./CollapsibleSection";

function GH({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function LI({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const contacts = [
  { Icon: Mail, label: "Email", value: "avnish09tripathi@gmail.com", href: "mailto:avnish09tripathi@gmail.com", color: "var(--accent)" },
  { Icon: LI,   label: "LinkedIn", value: "linkedin.com/in/avnish-tripathi", href: "https://www.linkedin.com/in/avnish-tripathi-01b149228", color: "#0ea5e9" },
  { Icon: GH,   label: "GitHub", value: "github.com/AvnishTripathi", href: "https://github.com/AvnishTripathi", color: "var(--text-sub)" },
  { Icon: Phone, label: "Phone", value: "+91 8247309076", href: "tel:+918247309076", color: "#10b981" },
];

export default function Contact() {
  return (
    <CollapsibleSection
      id="contact"
      pill="◆ Contact"
      title="Contact"
      subtitle="Open for full-time opportunities, internships, and technical collaborations"
    >
      <div style={{ maxWidth: 840, margin: "0 auto" }}>
        {/* Contact cards grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.08 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14, marginBottom: 20 }}
          className="contact-grid"
        >
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.label !== "Phone" && c.label !== "Email" ? "_blank" : undefined}
              rel={c.label !== "Phone" && c.label !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="card"
              style={{
                padding: "22px 18px",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                transition: "all 0.25s ease",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  marginBottom: 10,
                  background: "var(--bg-alt)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: c.color,
                }}
              >
                <c.Icon size={18} />
              </div>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "var(--text-dim)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  margin: "0 0 4px",
                }}
              >
                {c.label}
              </p>
              <p
                style={{
                  fontSize: 12.5,
                  fontWeight: 600,
                  color: "var(--text-card)",
                  margin: 0,
                  wordBreak: "break-all",
                }}
              >
                {c.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="card"
          style={{
            padding: "30px 28px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              marginBottom: 10,
            }}
          >
            <MessageCircle size={18} color="var(--accent)" />
            <h3
              style={{
                fontSize: 17,
                fontWeight: 700,
                color: "var(--text-h)",
                margin: 0,
              }}
            >
              Let&apos;s Connect
            </h3>
          </div>
          <p
            style={{
              fontSize: 14,
              color: "var(--text-sub)",
              lineHeight: 1.7,
              maxWidth: 440,
              marginInline: "auto",
              marginBottom: 24,
            }}
          >
            Whether you have a project in mind, an opportunity to discuss, or simply want
            to connect — feel free to reach out.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
            }}
          >
            <a href="mailto:avnish09tripathi@gmail.com" className="btn-blue" aria-label="Email">
              <Mail size={15} /> Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/avnish-tripathi-01b149228"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              aria-label="LinkedIn"
            >
              <LI size={15} /> LinkedIn
            </a>
            <a
              href="https://github.com/AvnishTripathi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              aria-label="GitHub"
            >
              <GH size={15} /> GitHub
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .contact-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </CollapsibleSection>
  );
}
