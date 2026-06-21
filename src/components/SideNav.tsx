"use client";

import { useEffect, useState } from "react";

const NAV = [
  { id: "hero",       label: "Home" },
  { id: "about",      label: "About" },
  { id: "what",       label: "What I Do" },
  { id: "skills",     label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects",   label: "Projects" },
  { id: "learning",   label: "Learning" },
  { id: "roadmap",    label: "Roadmap" },
  { id: "contact",    label: "Contact" },
];

export default function SideNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.35 }
    );
    document.querySelectorAll("section[id]").forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      className="fixed right-5 top-1/2 -translate-y-1/2 z-[200] hidden lg:flex flex-col gap-2.5 items-center"
      aria-label="Page sections"
    >
      {NAV.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
          }}
          className="relative group"
          data-cursor
        >
          <span
            style={{
              display: "block",
              width: active === item.id ? 8 : 6,
              height: active === item.id ? 8 : 6,
              borderRadius: "50%",
              background: active === item.id ? "#C4622D" : "#B8A99A",
              transition: "all 0.3s ease",
            }}
          />
          <span
            style={{
              position: "absolute",
              right: 18,
              top: "50%",
              transform: "translateY(-50%)",
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 9,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#B8A99A",
              whiteSpace: "nowrap",
              opacity: active === item.id ? 1 : 0,
              transition: "opacity 0.2s ease",
              pointerEvents: "none",
            }}
            className="group-hover:opacity-100"
          >
            {item.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
