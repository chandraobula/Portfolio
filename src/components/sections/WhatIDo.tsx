"use client";

import { BarChart3, ClipboardList, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

const STEPS = [
  {
    num: "(01)",
    title: "Data Gathering",
    desc: "I begin with thorough research, pulling inventory and sales data from ERPs to establish a clear baseline and outline key objectives.",
    icon: <ClipboardList size={32} strokeWidth={1.35} />,
    bg: "var(--soft-peach)",
  },
  {
    num: "(02)",
    title: "Shaping the Analysis",
    desc: "Here, I refine raw data into structured models. I develop forecasting directions that balance operational constraints with demand signals.",
    icon: <Lightbulb size={32} strokeWidth={1.35} />,
    bg: "var(--soft-sage)",
  },
  {
    num: "(03)",
    title: "Testing & Deployment",
    desc: "In this phase, I bring models to life through dashboards. I validate accuracy by iterating on feedback and resolving data discrepancies.",
    icon: <BarChart3 size={32} strokeWidth={1.35} />,
    bg: "var(--soft-pink)",
  },
];

export default function WhatIDo() {
  return (
    <section id="process" className="process-section">
      <div className="process-grid">
        <motion.div
          className="process-copy"
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="section-heading">High-quality analysis with real value considered.</h2>
          <p className="section-copy">
            My working process revolves around an approach aimed at maximizing
            efficiency and accuracy with clarity and focus. It begins with
            thorough data collection and ends with actionable replenishment
            strategies.
          </p>
          <a className="btn-outline" href="#projects">
            Learn More
          </a>
        </motion.div>

        <ScrollStack
          className="process-stack"
          itemDistance={96}
          itemStackDistance={34}
          itemScale={0.03}
          stackPosition="20%"
          scaleEndPosition="10%"
          baseScale={0.88}
          blurAmount={0}
          useWindowScroll
        >
          {STEPS.map((step, index) => (
            <ScrollStackItem
              itemClassName="process-card"
              key={step.num}
              style={{ background: step.bg, zIndex: index + 1 }}
            >
              <div className="process-card-header">
                <span className="process-icon">{step.icon}</span>
                <strong>{step.num}</strong>
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
