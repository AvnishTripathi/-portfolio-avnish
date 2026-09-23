"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Palette, X, Check } from "lucide-react";
import { useTheme, accentColors, darkBgLabels, lightBgLabels, type Accent, type BgVariant } from "@/context/ThemeContext";

const accents: Accent[] = ["blue", "violet", "cyan", "green", "orange", "rose"];
const bgVariants: BgVariant[] = ["v1", "v2", "v3", "v4"];

// Dark bg preview colors
const darkBgColors: Record<BgVariant, string> = {
  v1: "#050816", v2: "#0a0a0a", v3: "#0d1117", v4: "#0d0820",
};
// Light bg preview colors
const lightBgColors: Record<BgVariant, string> = {
  v1: "#f0f4ff", v2: "#ffffff", v3: "#f8fafc", v4: "#fafaf9",
};

export default function ThemePanel() {
  const [open, setOpen] = useState(false);
  const { mode, accent, bgVariant, toggleMode, setAccent, setBgVariant } = useTheme();

  return (
    <>
      {/* Trigger button */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title="Customize theme"
        aria-label="Open theme panel"
        style={{
          width: 38, height: 38, borderRadius: 10, border: "1px solid var(--border)",
          background: "var(--bg-card)", color: "var(--accent)",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", flexShrink: 0, transition: "all 0.2s",
        }}
      >
        <Palette size={16} />
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{
                position: "fixed", inset: 0, zIndex: 950,
                background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)",
              }}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              style={{
                position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 951,
                width: 300, background: "var(--bg-card-solid)",
                borderLeft: "1px solid var(--border)",
                boxShadow: "-8px 0 40px rgba(0,0,0,0.25)",
                overflowY: "auto",
                display: "flex", flexDirection: "column",
              }}
            >
              {/* Header */}
              <div style={{
                padding: "20px 20px 16px",
                borderBottom: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                position: "sticky", top: 0,
                background: "var(--bg-card-solid)", zIndex: 1,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Palette size={17} color="var(--accent)" />
                  <span style={{ fontSize: 15, fontWeight: 700, color: "var(--text-h)" }}>Appearance</span>
                </div>
                <button onClick={() => setOpen(false)}
                  style={{
                    width: 30, height: 30, borderRadius: 8, border: "1px solid var(--border)",
                    background: "transparent", color: "var(--text-sub)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer",
                  }}>
                  <X size={14} />
                </button>
              </div>

              <div style={{ padding: "20px 20px", display: "flex", flexDirection: "column", gap: 28 }}>

                {/* ── Light / Dark Mode ── */}
                <div>
                  <p style={{
                    fontSize: 11, fontWeight: 700, color: "var(--text-dim)",
                    textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px",
                  }}>Mode</p>

                  <div style={{
                    display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8,
                  }}>
                    {(["dark", "light"] as const).map(m => (
                      <button key={m} onClick={() => m !== mode && toggleMode()}
                        style={{
                          padding: "14px 10px", borderRadius: 12, cursor: "pointer",
                          border: mode === m ? `2px solid var(--accent)` : "1px solid var(--border)",
                          background: mode === m ? `rgba(var(--accent-rgb),0.1)` : "transparent",
                          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
                          transition: "all 0.2s",
                        }}>
                        {m === "dark"
                          ? <Moon size={20} color={mode === m ? "var(--accent)" : "var(--text-sub)"} />
                          : <Sun size={20} color={mode === m ? "var(--accent)" : "var(--text-sub)"} />
                        }
                        <span style={{
                          fontSize: 12, fontWeight: 600,
                          color: mode === m ? "var(--accent)" : "var(--text-sub)",
                        }}>
                          {m === "dark" ? "Dark" : "Light"}
                        </span>
                        {mode === m && (
                          <span style={{
                            fontSize: 10, fontWeight: 700, color: "var(--accent)",
                            background: `rgba(var(--accent-rgb),0.12)`,
                            border: `1px solid rgba(var(--accent-rgb),0.25)`,
                            borderRadius: 999, padding: "2px 8px",
                          }}>Active</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ── Accent Color ── */}
                <div>
                  <p style={{
                    fontSize: 11, fontWeight: 700, color: "var(--text-dim)",
                    textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px",
                  }}>Accent Color</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                    {accents.map(a => (
                      <button key={a} onClick={() => setAccent(a)}
                        style={{
                          padding: "10px 8px", borderRadius: 10, cursor: "pointer",
                          border: accent === a ? `2px solid ${accentColors[a].a}` : "1px solid var(--border)",
                          background: accent === a ? `rgba(${accentColors[a].rgb},0.12)` : "transparent",
                          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                          transition: "all 0.2s",
                        }}>
                        <div style={{
                          width: 28, height: 28, borderRadius: "50%",
                          background: `linear-gradient(135deg, ${accentColors[a].a}, ${accentColors[a].b})`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          boxShadow: accent === a ? `0 0 12px ${accentColors[a].a}60` : "none",
                        }}>
                          {accent === a && <Check size={13} color="#fff" strokeWidth={3} />}
                        </div>
                        <span style={{
                          fontSize: 11, fontWeight: 600,
                          color: accent === a ? accentColors[a].a : "var(--text-sub)",
                        }}>{accentColors[a].label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* ── Background Color ── */}
                <div>
                  <p style={{
                    fontSize: 11, fontWeight: 700, color: "var(--text-dim)",
                    textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px",
                  }}>Background</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
                    {bgVariants.map(v => {
                      const bgColor = mode === "dark" ? darkBgColors[v] : lightBgColors[v];
                      const label = mode === "dark" ? darkBgLabels[v] : lightBgLabels[v];
                      const isActive = bgVariant === v;
                      return (
                        <button key={v} onClick={() => setBgVariant(v)}
                          style={{
                            padding: "10px", borderRadius: 10, cursor: "pointer",
                            border: isActive ? `2px solid var(--accent)` : "1px solid var(--border)",
                            background: "transparent",
                            display: "flex", flexDirection: "column", alignItems: "center", gap: 7,
                            transition: "all 0.2s",
                          }}>
                          <div style={{
                            width: 48, height: 32, borderRadius: 7,
                            background: bgColor,
                            border: `1px solid ${mode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            boxShadow: isActive ? `0 0 10px rgba(var(--accent-rgb),0.3)` : "none",
                          }}>
                            {isActive && <Check size={14} color={mode === "dark" ? "#fff" : "#0f172a"} strokeWidth={3} />}
                          </div>
                          <span style={{
                            fontSize: 10.5, fontWeight: 600,
                            color: isActive ? "var(--accent)" : "var(--text-sub)",
                            textAlign: "center", lineHeight: 1.3,
                          }}>{label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Current theme summary */}
                <div style={{
                  padding: "14px 14px", borderRadius: 12,
                  background: `rgba(var(--accent-rgb),0.07)`,
                  border: "1px solid var(--border)",
                }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: "var(--text-dim)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Current Theme
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                    {[
                      { k: "Mode", v: mode === "dark" ? "🌙 Dark" : "☀️ Light" },
                      { k: "Accent", v: accentColors[accent].label },
                      { k: "Background", v: mode === "dark" ? darkBgLabels[bgVariant] : lightBgLabels[bgVariant] },
                    ].map(item => (
                      <div key={item.k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: 12, color: "var(--text-dim)" }}>{item.k}</span>
                        <span style={{ fontSize: 12, fontWeight: 600, color: "var(--accent)" }}>{item.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

