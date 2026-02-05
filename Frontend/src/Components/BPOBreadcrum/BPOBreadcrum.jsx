import React from "react";
import "./BPOBreadcrum.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const BPOBreadcrum = () => {
  return (
    <section className="bpo-hero">
      <div className="bpo-hero-overlay">
        <h1>BPO Services</h1>

        <div className="bpo-breadcrumb">
          <FaHome />
          <Link to="/">Home</Link>
          <span>›</span>
          <span className="active">BPO Services</span>
        </div>
      </div>
    </section>
  );
};

export default BPOBreadcrum;
