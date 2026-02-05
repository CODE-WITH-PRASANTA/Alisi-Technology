import React from "react";
import "./CyberBreadcrum.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const CyberBreadcrum = () => {
  return (
    <section className="cyber-hero">
      <div className="cyber-hero-overlay">
        <h1>Cyber Security</h1>

        <div className="cyber-breadcrumb">
          <FaHome />
          <Link to="/">Home</Link>
          <span>›</span>
          <span className="active">Cyber Security</span>
        </div>
      </div>
    </section>
  );
};

export default CyberBreadcrum;
