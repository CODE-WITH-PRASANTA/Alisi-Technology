import React from "react";
import "./KPOBreadcrum.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const KPOBreadcrum = () => {
  return (
    <section className="kpo-hero">
      <div className="kpo-hero-overlay">
        <h1>KPO Services</h1>

        <div className="kpo-breadcrumb">
          <FaHome />
          <Link to="/">Home</Link>
          <span>›</span>
          <span className="active">KPO Services</span>
        </div>
      </div>
    </section>
  );
};

export default KPOBreadcrum;
