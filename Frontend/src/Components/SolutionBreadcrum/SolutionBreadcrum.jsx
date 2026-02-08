import React from "react";
import "./SolutionBreadcrum.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const SolutionBreadcrum = () => {
  return (
    <section className="solution-hero">
      <div className="solution-hero-overlay">
        <h1>Enterprise Solution</h1>

        <div className="solution-breadcrumb">
          <FaHome />
          <Link to="/">Home</Link>
          <span>›</span>
          <span className="active">Enterprise Solution</span>
        </div>
      </div>
    </section>
  );
};

export default SolutionBreadcrum;
