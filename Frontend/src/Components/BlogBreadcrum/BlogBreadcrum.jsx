import React from "react";
import "./BlogBreadcrum.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactBreadcrum = () => {
  return (
    <section className="Blog-hero">
      <div className="Blog-hero-overlay">
        <h1>Blog</h1>

        <div className="Blog-breadcrumb">
          <FaHome />
          <Link to="/">Home</Link>
          <span>›</span>
          <span className="active">Blog</span>
        </div>
      </div>
    </section>
  );
};

export default ContactBreadcrum;
