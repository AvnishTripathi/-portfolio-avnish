"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Props {
  id: string;
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export default function SectionWrapper({ id, title, defaultOpen = true, children }: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div id={id} style={{ borderTop: "1px solid var(--border)" }}>

      {/* Collapsible header bar */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={`${id}-content`}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 28px",
          height: 52,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          transition: "background 0.2s",
          userSelect: "none",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = `rgba(var(--accent-rgb),0.04)`)}
        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
      >
        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* Accent dot */}
          <div style={{
            width: 6, height: 6, borderRadius: "50%",
            background: open ? "var(--accent)" : "var(--text-dim)",
            transition: "background 0.25s",
            flexShrink: 0,
          }} />
          <span style={{
            fontSize: 11.5,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: open ? "var(--accent)" : "var(--text-dim)",
            transition: "color 0.25s",
          }}>
            {title}
          </span>
          {/* Collapsed indicator */}
          {!open && (
            <span style={{
              fontSize: 11, color: "var(--text-dim)", fontWeight: 500,
              background: "var(--bg-alt)", border: "1px solid var(--border)",
              borderRadius: 999, padding: "2px 10px",
            }}>
              Click to expand
            </span>
          )}
        </div>

        {/* Animated arrow */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
        >
          <ChevronDown
            size={18}
            style={{
              color: open ? "var(--accent)" : "var(--text-dim)",
              transition: "color 0.25s",
            }}
          />
        </motion.div>
      </button>

      {/* Animated content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-content`}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

