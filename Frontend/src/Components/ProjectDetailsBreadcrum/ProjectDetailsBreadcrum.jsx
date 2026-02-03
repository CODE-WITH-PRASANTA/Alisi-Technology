import React from "react";
import "./ProjectDetailsBreadcrum.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactBreadcrum = () => {
  return (
    <section className="projects-details-hero">
      <div className="projects-details-hero-overlay">
        <h1>Project Details</h1>

        <div className="projects-details-breadcrumb">
          <FaHome />
          <Link to="/">Home</Link>
          <span>›</span>
          <span className="active">Project Details</span>
        </div>
      </div>
    </section>
  );
};

export default ContactBreadcrum;
