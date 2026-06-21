"use client";

import { BarChart3, Mail, UserRound } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "#hero" },
  { name: "Process", href: "#process" },
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <div className="site-nav-shell">
      <motion.nav
        className="site-nav"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        aria-label="Primary navigation"
      >
        <a className="site-logo" href="#hero" aria-label="Monisha home">
          Monisha
        </a>
        <div className="site-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.name}
            </a>
          ))}
        </div>
        <div className="site-actions">
          <a className="icon-button" href="#contact" aria-label="Email Monisha">
            <Mail size={17} />
          </a>
          <a className="icon-button" href="#projects" aria-label="View dashboards">
            <BarChart3 size={17} />
          </a>
          <a className="icon-button" href="#contact" aria-label="LinkedIn profile">
            <UserRound size={17} />
          </a>
        </div>
      </motion.nav>
    </div>
  );
}
