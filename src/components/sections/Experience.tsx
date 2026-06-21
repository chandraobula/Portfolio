"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "Analyze inventory positions across multiple locations to maintain optimal levels",
  "Monitor inventory health and replenishment requirements in real time",
  "Support production planning through accurate and timely material availability",
  "Identify inventory shortages proactively before they impact production",
  "Collaborate with planning and operations teams across the organization",
  "Generate reports that improve inventory visibility and planning decisions",
  "Monitor KPIs and operational performance metrics on an ongoing basis",
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <motion.div
        className="experience-card"
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 0.55 }}
      >
        <div>
          <h2 className="section-heading">Experience</h2>
          <p className="section-copy">
            A deep dive into operations, inventory, and supply chain management.
          </p>
          <div className="role-card">
            <h3>Zekelman Industries</h3>
            <p>Inventory Replenishment Analyst</p>
            <span>2024 — Present</span>
          </div>
        </div>

        <div className="experience-list">
          {ITEMS.map((item) => (
            <div className="experience-item" key={item}>
              <span aria-hidden />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
