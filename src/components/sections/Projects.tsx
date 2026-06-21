"use client";

import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

const PROJECTS = [
  {
    title: "Inventory Performance Dashboard",
    tags: ["POWER BI", "EXCEL"],
    desc: "Built around clarity and consistency, this dashboard provides a refined visual identity to track inventory trends, stock availability, aging, and replenishment performance.",
    bg: "var(--soft-peach)",
    imgAccent: "var(--peach)",
  },
  {
    title: "Inventory Health Analysis",
    tags: ["EXCEL", "SQL"],
    desc: "With an emphasis on precision and structure, this tool brings clarity and modern analytics together within a consistent framework to identify stock-out risks.",
    bg: "var(--soft-blue)",
    imgAccent: "var(--sage)",
  },
  {
    title: "Demand Trend Model",
    tags: ["PYTHON", "EXCEL"],
    desc: "This project is driven by a refined data approach that balances clarity and intention with predictive insights for better inventory planning decisions.",
    bg: "var(--bg-color)",
    imgAccent: "var(--sienna)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="works-section">
      <div className="section-intro">
        <h2 className="section-heading">My selected works</h2>
        <p className="section-copy">
          With my keen eye for detail and sharp analytical skills, I specialize in
          crafting captivating <strong>dashboards</strong>, <strong>models</strong>,
          and <strong>insights</strong>.
        </p>
      </div>

      <ScrollStack
        className="project-stack"
        itemDistance={86}
        itemStackDistance={34}
        itemScale={0.035}
        stackPosition="17%"
        scaleEndPosition="9%"
        baseScale={0.88}
        rotationAmount={0}
        blurAmount={0.35}
        useWindowScroll
      >
        {PROJECTS.map((project) => (
          <ScrollStackItem
            itemClassName="project-card"
            key={project.title}
          >
            <div>
              <h3>{project.title}</h3>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <p>{project.desc}</p>
              <a className="btn-outline" href="/contact">
                View Project
              </a>
            </div>
            <div className="project-visual" style={{ background: project.bg }}>
              <div className="dashboard-mock">
                <div className="mock-top">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="mock-grid">
                  <div className="mock-panel" style={{ color: project.imgAccent }}>
                    <div className="mock-line" style={{ width: "66%" }} />
                    <div className="mock-line" style={{ width: "92%" }} />
                    <div className="mock-line" style={{ width: "74%" }} />
                  </div>
                  <div className="mock-panel" style={{ color: project.imgAccent }}>
                    <div className="mock-line" style={{ width: "48%" }} />
                    <div className="mock-line" style={{ width: "84%" }} />
                    <div className="mock-line" style={{ width: "60%" }} />
                  </div>
                  <div className="mock-panel" style={{ color: project.imgAccent }}>
                    <div className="mock-line" style={{ width: "88%" }} />
                    <div className="mock-line" style={{ width: "62%" }} />
                  </div>
                  <div className="mock-panel" style={{ color: project.imgAccent }}>
                    <div className="mock-line" style={{ width: "52%" }} />
                    <div className="mock-line" style={{ width: "90%" }} />
                  </div>
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
}
