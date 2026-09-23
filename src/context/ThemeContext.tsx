"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Mode = "dark" | "light";
export type Accent = "blue" | "violet" | "cyan" | "green" | "orange" | "rose";
export type BgVariant = "v1" | "v2" | "v3" | "v4";

interface ThemeCtx {
  mode: Mode;
  accent: Accent;
  bgVariant: BgVariant;
  toggleMode: () => void;
  setAccent: (a: Accent) => void;
  setBgVariant: (v: BgVariant) => void;
}

const ThemeContext = createContext<ThemeCtx>({
  mode: "light", accent: "blue", bgVariant: "v1",
  toggleMode: () => {}, setAccent: () => {}, setBgVariant: () => {},
});

export const accentColors: Record<Accent, { a: string; b: string; rgb: string; rgb2: string; label: string }> = {
  blue:   { a: "#4f9eff", b: "#8b5cf6", rgb: "79,158,255",  rgb2: "139,92,246", label: "Blue" },
  violet: { a: "#8b5cf6", b: "#ec4899", rgb: "139,92,246", rgb2: "236,72,153",  label: "Violet" },
  cyan:   { a: "#06b6d4", b: "#4f9eff", rgb: "6,182,212",  rgb2: "79,158,255",  label: "Cyan" },
  green:  { a: "#10b981", b: "#06b6d4", rgb: "16,185,129", rgb2: "6,182,212",   label: "Green" },
  orange: { a: "#f59e0b", b: "#ef4444", rgb: "245,158,11", rgb2: "239,68,68",   label: "Orange" },
  rose:   { a: "#ec4899", b: "#8b5cf6", rgb: "236,72,153", rgb2: "139,92,246",  label: "Rose" },
};

const darkBgs: Record<BgVariant, string> = {
  v1: "#050816", v2: "#0a0a0a", v3: "#0d1117", v4: "#0d0820",
};
const lightBgs: Record<BgVariant, string> = {
  v1: "#ffffff", v2: "#f8fafc", v3: "#f0f4ff", v4: "#fafaf9",
};

export const darkBgLabels:  Record<BgVariant, string> = { v1:"Deep Navy", v2:"Pure Black", v3:"GitHub Dark", v4:"Deep Purple" };
export const lightBgLabels: Record<BgVariant, string> = { v1:"Pure White", v2:"Light Slate", v3:"Light Blue", v4:"Warm White" };

function applyTheme(mode: Mode, accent: Accent, bgVariant: BgVariant) {
  const html = document.documentElement;
  const ac   = accentColors[accent];
  const bg   = mode === "dark" ? darkBgs[bgVariant] : lightBgs[bgVariant];
  html.setAttribute("data-theme", mode);

  const isLight = mode === "light";
  const vars: Record<string, string> = {
    "--bg":            bg,
    "--bg-alt":        isLight ? "#f8fafc" : `rgba(${ac.rgb},0.018)`,
    "--bg-card":       isLight ? "#ffffff" : "rgba(8,14,40,0.7)",
    "--bg-card-solid": isLight ? "#ffffff" : "#080e28",
    "--bg-modal":      isLight ? "rgba(255,255,255,0.97)" : "rgba(2,4,18,0.95)",
    "--card-shadow":   isLight
      ? "0 1px 3px rgba(0,0,0,0.07), 0 4px 12px rgba(0,0,0,0.04)"
      : "none",
    "--card-shadow-hover": isLight
      ? "0 8px 32px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.06)"
      : `0 4px 40px rgba(${ac.rgb},0.12)`,
    "--text-h":    isLight ? "#0f172a" : "#ffffff",
    "--text-p":    isLight ? "#334155" : "#f1f5f9",
    "--text-sub":  isLight ? "#64748b" : "#94a3b8",
    "--text-dim":  isLight ? "#94a3b8" : "#64748b",
    "--text-card": isLight ? "#1e293b" : "#e2e8f0",
    "--accent":    ac.a,
    "--accent-2":  ac.b,
    "--accent-rgb":   ac.rgb,
    "--accent-2-rgb": ac.rgb2,
    "--border":       isLight ? "#e2e8f0" : `rgba(${ac.rgb},0.14)`,
    "--border-hover": `rgba(${ac.rgb},0.4)`,
    "--scrollbar":    `rgba(${ac.rgb},0.25)`,
  };
  Object.entries(vars).forEach(([k, v]) => html.style.setProperty(k, v));
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode,      setMode]      = useState<Mode>("light");
  const [accent,    setAccentSt]  = useState<Accent>("blue");
  const [bgVariant, setBgVarSt]   = useState<BgVariant>("v1");
  const [ready,     setReady]     = useState(false);

  useEffect(() => {
    try {
      const s = localStorage.getItem("portfolio-theme");
      if (s) {
        const p = JSON.parse(s) as Partial<{ mode: Mode; accent: Accent; bgVariant: BgVariant }>;
        if (p.mode)      setMode(p.mode);
        if (p.accent)    setAccentSt(p.accent);
        if (p.bgVariant) setBgVarSt(p.bgVariant);
      }
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    applyTheme(mode, accent, bgVariant);
    try {
      localStorage.setItem("portfolio-theme", JSON.stringify({ mode, accent, bgVariant }));
    } catch {}
  }, [mode, accent, bgVariant, ready]);

  return (
    <ThemeContext.Provider value={{
      mode, accent, bgVariant,
      toggleMode:  () => setMode(m => m === "dark" ? "light" : "dark"),
      setAccent:   (a) => setAccentSt(a),
      setBgVariant:(v) => setBgVarSt(v),
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
