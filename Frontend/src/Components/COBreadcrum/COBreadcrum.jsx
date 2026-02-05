import React from "react";
import "./COBreadcrum.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const COBreadcrum = () => {
  return (
    <section className="co-hero">
      <div className="co-hero-overlay">
        <h1>Cognitive Business Operations</h1>

        <div className="co-breadcrumb">
          <FaHome />
          <Link to="/">Home</Link>
          <span>›</span>
          <span className="active">Cognitive Business Operations</span>
        </div>
      </div>
    </section>
  );
};

export default COBreadcrum;
