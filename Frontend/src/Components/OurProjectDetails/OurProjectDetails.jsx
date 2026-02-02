import React, { useEffect, useRef } from "react";
import "./OurProjectDetails.css";

import p1 from "../../Assets/project-1.webp";
import p2 from "../../Assets/project-2.webp";
import p3 from "../../Assets/project-3.webp";
import p4 from "../../Assets/project-4.webp";
import p5 from "../../Assets/project-5.webp";
import p6 from "../../Assets/project-6-scaled.webp";

const projects = [
  { img: p1, title: "Cloud Migration System" },
  { img: p2, title: "Digital Growth Strategy" },
  { img: p3, title: "Mobile App Development" },
  { img: p4, title: "Business Transformation" },
  { img: p5, title: "Customer Experience" },
  { img: p6, title: "Process Optimization" },
];

export default function Projects() {
  const rowsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("tmProjects-row-show");
          }
        });
      },
      { threshold: 0.2 }
    );

    rowsRef.current.forEach(row => row && observer.observe(row));
  }, []);

  return (
    <section className="tmProjects-wrapper">
      <div
        className="tmProjects-row"
        ref={el => (rowsRef.current[0] = el)}
      >
        {projects.slice(0, 3).map((item, i) => (
          <ProjectCard key={i} item={item} />
        ))}
      </div>

      <div
        className="tmProjects-row"
        ref={el => (rowsRef.current[1] = el)}
      >
        {projects.slice(3, 6).map((item, i) => (
          <ProjectCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ item }) {
  return (
    <div className="tmProjects-card">
      <div className="tmProjects-imgWrap">
        <img src={item.img} alt="" />
      </div>

      <div className="tmProjects-overlay">
        <span className="tmProjects-tag">Solution</span>
        <h3>{item.title}</h3>

        <a href="#" className="tmProjects-arrow">
          →
        </a>
      </div>
    </div>
  );
}
