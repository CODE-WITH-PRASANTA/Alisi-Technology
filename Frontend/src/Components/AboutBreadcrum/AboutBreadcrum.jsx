import React from "react";
import "./AboutBreadcrum.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactBreadcrum = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-overlay">
        <h1>About</h1>

        <div className="about-breadcrumb">
          <FaHome />
          <Link to="/">Home</Link>
          <span>›</span>
          <span className="active">About</span>
        </div>
      </div>
    </section>
  );
};

export default ContactBreadcrum;
