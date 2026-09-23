"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUp } from "lucide-react";

interface Props {
  id: string;
  pill: string;
  title: string;
  subtitle?: string;
  bg?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export default function CollapsibleSection({
  id,
  pill,
  title,
  subtitle,
  bg = "transparent",
  defaultOpen = true,
  children,
}: Props) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // Listen for hash navigation to auto-expand section if linked from nav
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === `#${id}`) {
        setIsOpen(true);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [id]);

  const scrollToTop = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id={id}
      style={{
        padding: "76px 0",
        background: bg,
        borderTop: "1px solid var(--border)",
        transition: "background 0.3s ease",
      }}
    >
      <div className="wrap">
        {/* Scroll-Triggered Animated Header with Toggle Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => setIsOpen((prev) => !prev)}
          role="button"
          tabIndex={0}
          aria-expanded={isOpen}
          aria-controls={`${id}-collapse-content`}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsOpen((prev) => !prev);
            }
          }}
          style={{
            cursor: "pointer",
            textAlign: "center",
            marginBottom: isOpen ? 48 : 0,
            transition: "margin-bottom 0.35s ease",
            userSelect: "none",
            outline: "none",
          }}
        >
          {/* Top Pill Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span className="pill">{pill}</span>
          </div>

          {/* Title & Arrow Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginTop: 12,
            }}
          >
            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 36px)",
                fontWeight: 800,
                color: "var(--text-h)",
                margin: 0,
                letterSpacing: "-0.025em",
                transition: "color 0.2s",
              }}
            >
              {title}
            </h2>

            {/* Interactive Animated Arrow Button with Up-Down & Rotate Motion */}
            <motion.div
              animate={{
                rotate: isOpen ? 180 : 0,
                y: isOpen ? -3 : 3,
              }}
              whileHover={{
                scale: 1.15,
                y: isOpen ? -6 : 6,
                transition: { type: "spring", stiffness: 450, damping: 15 },
              }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 20,
              }}
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: isOpen ? "rgba(var(--accent-rgb),0.12)" : "var(--bg-card)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "var(--card-shadow)",
                flexShrink: 0,
                cursor: "pointer",
              }}
              title={isOpen ? "Click to collapse" : "Click to expand"}
            >
              <ChevronDown
                size={20}
                style={{
                  color: isOpen ? "var(--accent)" : "var(--text-dim)",
                  transition: "color 0.25s",
                }}
              />
            </motion.div>
          </div>

          {/* Optional Subtitle */}
          {subtitle && (
            <p
              style={{
                fontSize: 14.5,
                color: "var(--text-dim)",
                marginTop: 10,
                maxWidth: 480,
                marginInline: "auto",
                lineHeight: 1.6,
              }}
            >
              {subtitle}
            </p>
          )}

          {/* Divider accent line */}
          <div
            style={{
              width: 48,
              height: 3,
              background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
              borderRadius: 2,
              margin: "16px auto 0",
              opacity: isOpen ? 1 : 0.4,
              transition: "opacity 0.25s",
            }}
          />

          {/* Indicator text when collapsed */}
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ marginTop: 14 }}
            >
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--accent)",
                  background: "rgba(var(--accent-rgb),0.08)",
                  border: "1px solid rgba(var(--accent-rgb),0.2)",
                  borderRadius: 999,
                  padding: "4px 14px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span>Click to expand section</span>
                <motion.span
                  animate={{ y: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                >
                  <ChevronDown size={14} />
                </motion.span>
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Collapsible Content Area */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={`${id}-collapse-content`}
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: {
                  height: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
                  opacity: { duration: 0.35, delay: 0.08 },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
                  opacity: { duration: 0.2 },
                },
              }}
              style={{ overflow: "hidden" }}
            >
              {children}

              {/* Return to top link at the bottom of each section */}
              <div
                style={{
                  marginTop: 42,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  type="button"
                  onClick={scrollToTop}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "transparent",
                    border: "1px solid var(--border)",
                    borderRadius: 999,
                    padding: "6px 16px",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--text-dim)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent)";
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.background = "rgba(var(--accent-rgb),0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-dim)";
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.background = "transparent";
                  }}
                  title="Return to top of page"
                >
                  <ArrowUp size={13} />
                  <span>Return to top</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
