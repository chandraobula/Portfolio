"use client";

import { motion } from "framer-motion";

const CARDS = [
  {
    title: "My Portfolio",
    desc: "Explore selected projects and my approach to supply chain analytics.",
    icon: "📊",
    link: "#projects",
  },
  {
    title: "About Me",
    desc: "A closer look at my background, skills, and professional journey.",
    icon: "📋",
    link: "#about",
  },
  {
    title: "Contact Me",
    desc: "Let's work together to bring data-driven insights to your operations.",
    icon: "✉️",
    link: "#contact",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="section-container"
      style={{
        paddingTop: 80,
        paddingBottom: 80,
        position: "relative",
        zIndex: 20, // To sit above the hero's stacked cards
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
        }}
        className="max-md:!grid-cols-1"
      >
        {CARDS.map((card, i) => (
          <motion.a
            key={card.title}
            href={card.link}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="framer-card"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              textDecoration: "none",
              color: "inherit",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.02)";
            }}
          >
            <div
              style={{
                fontSize: 40,
                marginBottom: 24,
              }}
            >
              {card.icon}
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--ink)", marginBottom: 12 }}>
              {card.title}
            </h3>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.6, marginBottom: 32, flexGrow: 1 }}>
              {card.desc}
            </p>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: i === 0 ? "#EAF2F8" : i === 1 ? "#FDF3E1" : "#EBF5F0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--ink)",
                fontSize: 16,
              }}
            >
              →
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
