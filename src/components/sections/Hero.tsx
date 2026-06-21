"use client";

import { Sparkles, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import BlurText from "@/components/BlurText";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <motion.div
          className="hero-chip left"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
          <Sparkles size={16} /> Supply Chain
        </motion.div>
        <motion.div
          className="hero-chip right"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.32 }}
        >
          Data Analytics <TrendingUp size={16} />
        </motion.div>
        <span className="hero-doodle one" aria-hidden>
          ⌁
        </span>
        <span className="hero-doodle two" aria-hidden>
          ◇
        </span>

        <h1>
          <BlurText
            text="Hello!"
            delay={0.05}
            stepDuration={0.16}
            direction="bottom"
            animateBy="letters"
          />
          <span className="hero-avatar" aria-hidden>
            👩🏽‍💼
          </span>
          <BlurText
            text="I'm Monisha,"
            delay={0.18}
            stepDuration={0.13}
            direction="bottom"
            animateBy="letters"
          />
          <br />
          <BlurText
            text="a supply chain analyst."
            delay={0.3}
            stepDuration={0.08}
            direction="bottom"
            animateBy="words"
          />
        </h1>

        <motion.p
          className="section-copy"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          I specialize in <strong>Inventory Management</strong>,{" "}
          <strong>Production Planning</strong>, and <strong>Analytics</strong>,
          with a strong track record of converting data into actionable insights.
        </motion.p>
      </div>
    </section>
  );
}
