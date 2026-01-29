import React from "react";
import "./CloudBreadcrum.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllServicesBreadcrum = () => {
  return (
    <section className="cloud-hero">
      <div className="cloud-hero-overlay">
        <h1>Cloud</h1>

        <div className="cloud-breadcrumb">
          <FaHome />
          <Link to="/">Home</Link>
          <span>›</span>
          <span className="active">Cloud</span>
        </div>
      </div>
    </section>
  );
};

export default AllServicesBreadcrum;
