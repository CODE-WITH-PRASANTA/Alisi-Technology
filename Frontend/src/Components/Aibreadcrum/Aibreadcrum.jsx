import React from "react";
import "./Aibreadcrum.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllServicesBreadcrum = () => {
  return (
    <section className="aai-servicehero">
      <div className="aai-servicehero-overlay">
        <h1>AI & Data Analytics</h1>

        <div className="aai-servicebreadcrumb">
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
