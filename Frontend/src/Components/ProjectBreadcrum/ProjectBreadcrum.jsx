import React from "react";
import "./ProjectBreadcrum.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactBreadcrum = () => {
  return (
    <section className="projects-hero">
      <div className="projects-hero-overlay">
        <h1>Projects</h1>

        <div className="projects-breadcrumb">
          <FaHome />
          <Link to="/">Home</Link>
          <span>›</span>
          <span className="active">Projects</span>
        </div>
      </div>
    </section>
  );
};

export default ContactBreadcrum;
