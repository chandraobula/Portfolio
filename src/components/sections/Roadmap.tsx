"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const STEPS = [
  { status: "done",     label: "Inventory Management" },
  { status: "done",     label: "Inventory Replenishment" },
  { status: "active",   label: "Production Planning" },
  { status: "upcoming", label: "Supply Chain Analytics" },
  { status: "upcoming", label: "SQL & Power BI" },
  { status: "upcoming", label: "SAP IBP" },
  { status: "upcoming", label: "Analytics Manager" },
];

// The winding SVG path (gentle S-curve)
const PATH_D =
  "M 60 80 C 120 60, 160 100, 220 80 C 280 60, 320 100, 380 80 C 440 60, 480 100, 540 80 C 600 60, 640 100, 700 80 C 760 60, 800 100, 860 80 C 920 60, 960 100, 1020 80";

// Node X positions along the path (manually spaced to match the curve)
const NODE_X = [60, 220, 380, 540, 700, 860, 1020];
const NODE_Y = [80, 80, 80, 80, 80, 80, 80]; // the S-curve keeps y near 80

export default function Roadmap() {
  const pathRef = useRef<SVGPathElement>(null);
  const donePathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const path = pathRef.current;
    if (!path || !inView) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;
    path.style.transition = "stroke-dashoffset 2s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s";
    requestAnimationFrame(() => { path.style.strokeDashoffset = "0"; });
  }, [inView]);

  const doneCount = STEPS.filter((s) => s.status === "done").length;
  // approximate done portion: doneCount / (total - 1) of path
  const doneFraction = doneCount / (STEPS.length - 1);

  useEffect(() => {
    const path = donePathRef.current;
    const full = pathRef.current;
    if (!path || !full || !inView) return;
    const len = full.getTotalLength();
    const doneLen = len * doneFraction;
    path.style.strokeDasharray = `${doneLen} ${len}`;
    path.style.strokeDashoffset = "0";
    path.style.opacity = "1";
  }, [inView, doneFraction]);

  return (
    <section
      id="roadmap"
      style={{
        background: "#F5EFE6",
        padding: "clamp(80px,12vw,140px) clamp(20px,5vw,80px)",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75 }}
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(38px,4.5vw,60px)",
            fontWeight: 400,
            color: "#2B1D0E",
            lineHeight: 1.1,
            marginBottom: 64,
          }}
        >
          Career <em style={{ color: "#C4622D" }}>Journey</em>
        </motion.h2>

        {/* SVG roadmap */}
        <div ref={containerRef} style={{ overflowX: "auto", paddingBottom: 60 }}>
          <svg
            viewBox="0 -10 1080 180"
            width="100%"
            style={{ minWidth: 640, overflow: "visible" }}
          >
            {/* Base taupe path */}
            <path
              ref={pathRef}
              d={PATH_D}
              stroke="#B8A99A"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="6 4"
              style={{ strokeDashoffset: 2000, strokeDasharray: "2000" }}
            />

            {/* Sienna done portion */}
            <path
              ref={donePathRef}
              d={PATH_D}
              stroke="#C4622D"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              opacity="0"
            />

            {/* Nodes */}
            {STEPS.map((step, i) => {
              const cx = NODE_X[i];
              const cy = NODE_Y[i];
              const isDone = step.status === "done";
              const isActive = step.status === "active";

              return (
                <g key={i}>
                  {/* Glow for completed */}
                  {isDone && (
                    <circle cx={cx} cy={cy} r={18} fill="#C4622D" opacity="0.12" />
                  )}

                  {/* Active pulse ring */}
                  {isActive && (
                    <motion.circle
                      cx={cx}
                      cy={cy}
                      r={14}
                      fill="none"
                      stroke="#C4622D"
                      strokeWidth="1"
                      opacity="0.4"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    />
                  )}

                  {/* Node circle */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isDone ? 8 : isActive ? 10 : 6}
                    fill={isDone || isActive ? "#C4622D" : "none"}
                    stroke={isDone || isActive ? "#C4622D" : "#B8A99A"}
                    strokeWidth="1.5"
                  />

                  {/* Checkmark for done */}
                  {isDone && (
                    <text x={cx} y={cy + 5} textAnchor="middle" fontSize="9" fill="#FBF7F0" fontFamily="sans-serif">✓</text>
                  )}

                  {/* Label */}
                  <text
                    x={cx}
                    y={cy + 36}
                    textAnchor="middle"
                    fontSize="11"
                    fontFamily="var(--font-jost), system-ui, sans-serif"
                    fontWeight="300"
                    fill={isDone ? "#C4622D" : isActive ? "#2B1D0E" : "#B8A99A"}
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {step.label.includes(" ") ? (
                      <>
                        <tspan x={cx} dy="0">{step.label.split(" ").slice(0, -1).join(" ")}</tspan>
                        <tspan x={cx} dy="14">{step.label.split(" ").slice(-1)}</tspan>
                      </>
                    ) : step.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
