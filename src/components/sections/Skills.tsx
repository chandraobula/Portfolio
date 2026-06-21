"use client";

import { motion } from "framer-motion";

const SKILLS = [
  { name: "Inventory Analytics", icon: "✦" },
  { name: "Demand Forecasting", icon: "☆" },
  { name: "Power BI", icon: "△" },
  { name: "Advanced Excel", icon: "✧" },
  { name: "SQL", icon: "♡" },
  { name: "Python", icon: "✥" },
  { name: "Production Planning", icon: "↯" },
];

export default function Skills() {
  return (
    <section id="skills" className="capabilities-section">
      <div className="section-intro" style={{ marginBottom: 0 }}>
        <h2 className="section-heading">My capabilities</h2>
        <p className="section-copy">
          The tools and methods I use are meticulously crafted to cater
          specifically to <strong>data-driven decisions</strong> and{" "}
          <strong>supply chain optimization</strong>.
        </p>
      </div>

      <div className="capability-pills">
        {SKILLS.map((skill, index) => (
          <motion.span
            className="capability-pill"
            key={skill.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
          >
            <span>{skill.icon}</span>
            {skill.name}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
