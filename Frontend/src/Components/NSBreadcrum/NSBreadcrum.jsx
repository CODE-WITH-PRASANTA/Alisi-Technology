import React from "react";
import "./NSBreadcrum.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NSBreadcrum = () => {
  return (
    <section className="ns-hero">
      <div className="ns-hero-overlay">
        <h1>Network Solutions & Services</h1>

        <div className="ns-breadcrumb">
          <FaHome />
          <Link to="/">Home</Link>
          <span>›</span>
          <span className="active">Network Solutions & Services</span>
        </div>
      </div>
    </section>
  );
};

export default NSBreadcrum;
