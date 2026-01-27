import React from "react";
import "./AllServicesBreadcrum.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllServicesBreadcrum = () => {
  return (
    <section className="allservices-hero">
      <div className="allservices-hero-overlay">
        <h1>All Services</h1>

        <div className="allservices-breadcrumb">
          <FaHome />
          <Link to="/">Home</Link>
          <span>›</span>
          <span className="active">All Services</span>
        </div>
      </div>
    </section>
  );
};

export default AllServicesBreadcrum;
