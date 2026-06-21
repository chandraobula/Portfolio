"use client";

import { BarChart3, Mail, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { name: "Home", href: "/#hero" },
  { name: "Process", href: "/#process" },
  { name: "Work", href: "/#projects" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/contact" },
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
        <Link className="site-logo" href="/" aria-label="Monisha home">
          Monisha
        </Link>
        <div className="site-links">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className="site-actions">
          <Link className="icon-button" href="/contact" aria-label="Email Monisha">
            <Mail size={17} />
          </Link>
          <Link className="icon-button" href="/#projects" aria-label="View dashboards">
            <BarChart3 size={17} />
          </Link>
          <Link className="icon-button" href="/contact" aria-label="Contact profile">
            <UserRound size={17} />
          </Link>
        </div>
      </motion.nav>
    </div>
  );
}
