import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./OurProjectDetails.css";

const BASE_URL = "http://localhost:5000";

export default function OurProjectDetails() {
  const rowsRef = useRef([]);
  const [projects, setProjects] = useState([]);

  /* FETCH PROJECTS */
  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data.projects || []));
  }, []);

  /* ANIMATION */
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
  }, [projects]);

  return (
    <section className="tmProjects-wrapper">
      {/* ROW 1 */}
      <div
        className="tmProjects-row"
        ref={el => (rowsRef.current[0] = el)}
      >
        {projects.slice(0, 3).map(project => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>

      {/* ROW 2 */}
      <div
        className="tmProjects-row"
        ref={el => (rowsRef.current[1] = el)}
      >
        {projects.slice(3, 6).map(project => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
}

/* PROJECT CARD */
function ProjectCard({ project }) {
  return (
    <div className="tmProjects-card">
      <div className="tmProjects-imgWrap">
        <img
          src={`${BASE_URL}/${project.projectImg}`}
          alt={project.title}
        />
      </div>

      <div className="tmProjects-overlay">
        <span className="tmProjects-tag">Solution</span>
        <h3>{project.title}</h3>

        {/* ✅ LINK TO DETAILS */}
        <Link
          to={`/projects/details/${project._id}`}
          className="tmProjects-arrow"
        >
          →
        </Link>
      </div>
    </div>
  );
}
