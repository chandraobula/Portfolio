"use client";

import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

interface InkDividerProps {
  color?: string;
  className?: string;
}

/** A wobbly hand-drawn SVG line that draws itself in on scroll */
export function InkDivider({ color = "#B8A99A", className = "" }: InkDividerProps) {
  const ref = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  useEffect(() => {
    const path = ref.current;
    if (!path) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = inView ? "0" : `${len}`;
    path.style.transition = inView
      ? "stroke-dashoffset 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      : "none";
  }, [inView]);

  return (
    <div ref={containerRef} className={`w-full overflow-hidden ${className}`}>
      <svg viewBox="0 0 1120 6" width="100%" height="6" preserveAspectRatio="none">
        <path
          ref={ref}
          d="M 0 3 C 80 1, 200 5, 350 3 C 500 1, 650 5, 800 3 C 950 1, 1050 4, 1120 3"
          stroke={color}
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/** Organic SVG wave torn-edge transition between sections */
export function TornEdge({
  fromColor,
  toColor,
  flip = false,
}: {
  fromColor: string;
  toColor: string;
  flip?: boolean;
}) {
  return (
    <div
      style={{
        background: fromColor,
        lineHeight: 0,
        transform: flip ? "scaleY(-1)" : "none",
      }}
    >
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" width="100%" height="60">
        <path
          d="M0 0 L0 30 C 120 52, 200 8, 360 28 C 520 48, 600 12, 720 30 C 840 48, 960 10, 1080 32 C 1200 50, 1320 14, 1440 28 L1440 0 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}

/** Small organic hand-drawn arrow SVG */
export function HandArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 24"
      width="48"
      height="24"
      fill="none"
    >
      <path
        d="M2 12 C 10 10, 24 8, 36 12"
        stroke="#C4622D"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M30 7 C 34 9, 38 12, 36 12 C 34 12, 30 17, 32 18"
        stroke="#C4622D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Tiny leaf doodle */
export function LeafDoodle({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 32 40" width="32" height="40" fill="none">
      <path
        d="M16 38 C 16 38, 4 24, 6 12 C 8 2, 16 2, 16 2 C 16 2, 24 2, 26 12 C 28 24, 16 38, 16 38 Z"
        stroke="#E8A87C"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M16 38 L16 12" stroke="#E8A87C" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

/** Dot cluster doodle */
export function DotCluster({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 28" width="40" height="28" fill="none">
      {[
        [8, 8], [20, 6], [32, 10], [14, 18], [26, 20], [6, 22], [34, 16],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2" fill="#E8A87C" opacity="0.6" />
      ))}
    </svg>
  );
}

/** Asterisk/star doodle */
export function StarDoodle({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" width="20" height="20" fill="none">
      {[0, 45, 90, 135].map((deg, i) => (
        <line
          key={i}
          x1="12" y1="2" x2="12" y2="22"
          stroke="#8FA68E"
          strokeWidth="1.5"
          strokeLinecap="round"
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
    </svg>
  );
}
