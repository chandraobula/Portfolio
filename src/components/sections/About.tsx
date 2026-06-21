"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Inventory Analytics", value: "95%", width: "95%", color: "var(--soft-blue)" },
  { name: "Production Planning", value: "97%", width: "97%", color: "var(--soft-sage)" },
  { name: "Power BI", value: "85%", width: "85%", color: "var(--soft-pink)" },
  { name: "Advanced Excel", value: "90%", width: "90%", color: "var(--bg-color)" },
  { name: "SQL", value: "80%", width: "80%", color: "var(--soft-sage)" },
  { name: "Python", value: "65%", width: "65%", color: "var(--soft-peach)" },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-grid"
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
      >
        <div className="portrait-card" aria-hidden>
          <div className="portrait-figure">👩🏽‍💼</div>
        </div>

        <div>
          <h2 className="section-heading">Hey! That&apos;s me.</h2>
          <p className="section-copy" style={{ marginTop: 24 }}>
            I am Monisha, a supply chain analyst and data storyteller based in
            the US. I specialize in turning complex inventory data into clear,
            actionable insights.
          </p>
          <p className="section-copy" style={{ marginTop: 22 }}>
            My approach blends rigorous analytical planning with a deep
            understanding of operational workflows. When I&apos;m not building
            dashboards or forecasting demand, you can find me sketching in
            notebooks or exploring scenic canyon roads.
          </p>

          <div className="skill-bars">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="skill-bar-head">
                  <span>{skill.name}</span>
                  <span>{skill.value}</span>
                </div>
                <div className="skill-track">
                  <span
                    className="skill-fill"
                    style={{ width: skill.width, background: skill.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
