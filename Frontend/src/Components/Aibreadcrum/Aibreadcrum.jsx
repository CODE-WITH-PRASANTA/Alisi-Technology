import React from "react";
import "./Aibreadcrum.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllServicesBreadcrum = () => {
  return (
    <section className="aiservices-hero">
      <div className="aiservices-hero-overlay">
        <h1>AI & Data Analytics</h1>

        <div className="aiservices-breadcrumb">
          <FaHome />
          <Link to="/">Home</Link>
          <span>›</span>
          <span className="active">AI & Data Analytics</span>
        </div>
      </div>
    </section>
  );
};

export default AllServicesBreadcrum;
