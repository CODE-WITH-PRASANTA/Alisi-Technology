import React from "react";
import "./SusBreadcrum.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const SusBreadcrum = () => {
  return (
    <section className="sus-hero">
      <div className="sus-hero-overlay">
        <h1>Sustainability</h1>
        <div className="sus-breadcrumb">
          <FaHome />
          <Link to="/">Home</Link>
          <span>›</span>
          <span className="active">Sustainability</span>
        </div>
      </div>
    </section>
  );
};

export default SusBreadcrum;
