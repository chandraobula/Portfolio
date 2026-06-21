"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-badge" aria-label="Enthusiastic for data and technology roles">
        <svg viewBox="0 0 120 120" aria-hidden>
          <defs>
            <path
              id="contact-badge-path"
              d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
            />
          </defs>
          <text>
            <textPath href="#contact-badge-path">
              DATA ROLES · TECHNOLOGY · READY TO WORK ·
            </textPath>
          </text>
        </svg>
        <span>✉</span>
      </div>
      <motion.div
        className="contact-inner"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.55 }}
      >
        <MessageCircle size={58} strokeWidth={1.25} />
        <h2 className="section-heading">Let&apos;s build something great.</h2>
        <p>
          Enthusiastic about data-related roles, analytics technology, and
          supply chain systems. Ready to work on tools and teams that turn
          operational data into clear decisions.
        </p>
        <Link className="btn-outline" href="/contact">
          Get in Touch
        </Link>
      </motion.div>
    </section>
  );
}
