"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemePanel from "./ThemePanel";

const links = [
  { label: "About",        id: "about" },
  { label: "Skills",       id: "skills" },
  { label: "Experience",   id: "experience" },
  { label: "Projects",     id: "projects" },
  { label: "Achievements", id: "achievements" },
  { label: "Contact",      id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState("");
  const [clickedId, setClickedId] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let cur = "";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 120) cur = l.id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goto = (id: string) => {
    setOpen(false);
    setClickedId(id);
    setTimeout(() => setClickedId(null), 600);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 900, height: 64,
          background: scrolled ? "var(--bg-card-solid)" : "var(--bg)",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          boxShadow: scrolled ? "var(--card-shadow)" : "none",
          transition: "all 0.25s ease",
        }}
      >
        <div className="wrap" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({top:0,behavior:"smooth"}); }}
            style={{ textDecoration: "none" }}>
            <span style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.02em" }}>
              <span className="grad">Avnish</span>
              <span style={{ color: "var(--text-h)" }}> Tripathi</span>
            </span>
          </a>

          {/* Desktop nav with Animated Arrows */}
          <nav style={{ display: "flex", alignItems: "center", gap: 3 }}>
            {links.map(l => {
              const isActive = active === l.id;
              const isClicked = clickedId === l.id;

              return (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    goto(l.id);
                  }}
                  className="hidden md:flex"
                  whileHover="hover"
                  style={{
                    alignItems: "center",
                    gap: 5,
                    padding: "6px 12px",
                    borderRadius: 8,
                    fontSize: 13.5,
                    fontWeight: 600,
                    color: isActive ? "var(--accent)" : "var(--text-sub)",
                    background: isActive ? "rgba(var(--accent-rgb),0.08)" : "transparent",
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "color 0.2s, background 0.2s",
                  }}
                >
                  <span>{l.label}</span>

                  {/* Header Arrow that moves up and down on click & hover */}
                  <motion.span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    animate={{
                      y: isClicked ? [0, 4, -4, 0] : isActive ? -2 : 0,
                      rotate: isActive ? 180 : 0,
                    }}
                    variants={{
                      hover: {
                        y: [0, -3, 2, 0],
                        transition: { repeat: Infinity, duration: 1.2, ease: "easeInOut" },
                      },
                    }}
                    transition={
                      isClicked
                        ? { duration: 0.45, ease: "easeInOut" }
                        : { type: "spring", stiffness: 400, damping: 20 }
                    }
                  >
                    <ChevronDown
                      size={14}
                      style={{
                        color: isActive ? "var(--accent)" : "var(--text-dim)",
                        transition: "color 0.2s",
                      }}
                    />
                  </motion.span>
                </motion.a>
              );
            })}

            <div style={{ width: 1, height: 20, background: "var(--border)", margin: "0 8px" }} className="hidden md:block" />

            <ThemePanel />

            <a href="mailto:avnish09tripathi@gmail.com"
              className="hidden md:inline-flex"
              style={{
                marginLeft: 10, display: "inline-flex", alignItems: "center", gap: 7,
                padding: "7px 16px", borderRadius: 999,
                background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.35)",
                color: "#16a34a", fontSize: 13, fontWeight: 700,
                textDecoration: "none", transition: "all 0.2s",
                letterSpacing: "0.01em", whiteSpace: "nowrap",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "rgba(34,197,94,0.18)";
                el.style.boxShadow = "0 4px 16px rgba(34,197,94,0.2)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "rgba(34,197,94,0.1)";
                el.style.boxShadow = "none";
              }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%", background: "#22c55e",
                display: "inline-block", animation: "pulse-dot 1.8s ease-in-out infinite",
                flexShrink: 0,
              }} />
              Open to Work
            </a>

            {/* Mobile */}
            <button onClick={() => setOpen(!open)} className="md:hidden"
              style={{
                marginLeft: 10, width: 36, height: 36, borderRadius: 8,
                border: "1px solid var(--border)", background: "transparent",
                color: "var(--text-sub)", cursor: "pointer", display: "flex",
                alignItems: "center", justifyContent: "center",
              }}>
              {open ? <X size={17}/> : <Menu size={17}/>}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity:0, y:-8 }} animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-8 }} transition={{ duration:0.18 }}
            style={{
              position:"fixed", top:64, left:0, right:0, zIndex:899,
              background:"var(--bg-card-solid)", borderBottom:"1px solid var(--border)",
              boxShadow:"var(--card-shadow)", padding:"12px 0 16px",
            }}>
            <div className="wrap" style={{ display:"flex", flexDirection:"column", gap:2 }}>
              {links.map(l => (
                <a key={l.id} href={`#${l.id}`} onClick={e=>{e.preventDefault();goto(l.id);}}
                  style={{
                    padding:"10px 12px", borderRadius:8, fontSize:14, fontWeight:500,
                    color: active===l.id ? "var(--accent)" : "var(--text-p)",
                    background: active===l.id ? `rgba(var(--accent-rgb),0.08)` : "transparent",
                    textDecoration:"none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}>
                  <span>{l.label}</span>
                  <ChevronDown
                    size={15}
                    style={{
                      transform: active === l.id ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s",
                      color: active === l.id ? "var(--accent)" : "var(--text-dim)",
                    }}
                  />
                </a>
              ))}
              <div style={{ paddingTop:8 }}>
                <a href="mailto:avnish09tripathi@gmail.com"
                  style={{
                    display:"flex", alignItems:"center", justifyContent:"center", gap:8,
                    padding:"12px 20px", borderRadius:10,
                    background:"rgba(34,197,94,0.1)", border:"1px solid rgba(34,197,94,0.3)",
                    color:"#16a34a", fontSize:14, fontWeight:700, textDecoration:"none",
                  }}>
                  <span style={{
                    width:8, height:8, borderRadius:"50%", background:"#22c55e",
                    animation:"pulse-dot 1.8s ease-in-out infinite",
                  }} />
                  Open to Work — Say Hello
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
