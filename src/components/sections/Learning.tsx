"use client";

import { motion } from "framer-motion";

const METRICS = [
  { num: "2+", text: "Years of work\nexperience" },
  { num: "5+", text: "Successful\nprojects done" },
  { num: "100%", text: "Data accuracy\nfocus" },
  { num: "3+", text: "Certifications\nreceived" },
];

export default function Learning() {
  return (
    <section id="metrics" className="metrics-section">
      <div className="section-intro">
        <h2 className="section-heading">My numbers say it all</h2>
        <p className="section-copy">
          These numbers reflect the <strong>experience</strong> and{" "}
          <strong>consistency</strong>, and measurable impact behind the
          analysis I&apos;ve delivered over the years.
        </p>
      </div>

      <div className="metrics-pills">
        {METRICS.map((item, index) => (
          <motion.div
            className="metric-pill"
            key={item.text}
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
          >
            <b>{item.num}</b>
            <span>{item.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
